import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const STORAGE_KEY = 'ai-careerhub-theme'

const VALID_THEMES = ['light', 'dark', 'system']

const ThemeContext = createContext(null)

const getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'system'
  }

  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY)

    if (VALID_THEMES.includes(savedTheme)) {
      return savedTheme
    }
  } catch (error) {
    console.warn('Unable to read theme from localStorage:', error)
  }

  return 'system'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  const resolvedTheme =
    theme === 'system'
      ? getSystemTheme()
      : theme

  const applyTheme = useCallback((selectedTheme) => {
    const root = document.documentElement

    const actualTheme =
      selectedTheme === 'system'
        ? getSystemTheme()
        : selectedTheme

    root.classList.add('theme-transition')

    if (actualTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    root.setAttribute('data-theme', actualTheme)
    root.style.colorScheme = actualTheme

    window.setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 250)
  }, [])

  const setTheme = useCallback(
    (newTheme) => {
      if (!VALID_THEMES.includes(newTheme)) {
        return
      }

      setThemeState(newTheme)

      try {
        localStorage.setItem(STORAGE_KEY, newTheme)
      } catch (error) {
        console.warn(
          'Unable to save theme to localStorage:',
          error,
        )
      }

      applyTheme(newTheme)
    },
    [applyTheme],
  )

  const toggleTheme = useCallback(() => {
    const nextTheme =
      resolvedTheme === 'dark'
        ? 'light'
        : 'dark'

    setTheme(nextTheme)
  }, [resolvedTheme, setTheme])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )

    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener(
      'change',
      handleSystemThemeChange,
    )

    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleSystemThemeChange,
      )
    }
  }, [theme, applyTheme])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
      isDark: resolvedTheme === 'dark',
      isLight: resolvedTheme === 'light',
    }),
    [
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    ],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      'useThemeContext must be used inside ThemeProvider.',
    )
  }

  return context
}

export default ThemeContext