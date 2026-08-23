# 🚀 AI CareerHub

> An AI-powered job tracker and career dashboard built with React.

AI CareerHub is a modern frontend application designed to help job seekers manage their entire career journey from one place.

From discovering job opportunities and tracking applications to analyzing resumes, preparing for interviews, and monitoring career progress, AI CareerHub provides a clean and focused career management experience.

---

## 🌐 Live Demo

🚧 **Coming Soon**

---

## 📸 Preview

> Screenshots and live preview will be added after the UI and dashboard are completed.

---

## ✨ Features

### 🏠 Landing Page

- Modern responsive landing page
- Professional hero section
- Job search interface
- Feature showcase
- How It Works section
- Testimonials
- Pricing plans
- FAQ accordion
- Final CTA section
- Professional footer

### 🔐 Authentication UI

- Login page
- Registration page
- Forgot password page
- Reset password page
- Email validation
- Password validation
- Password strength indicator
- Show/hide password
- Remember me
- Form loading states
- Responsive authentication layouts

### 💼 Job Management

- Job discovery interface
- Job search
- Job filtering
- Job details
- Saved jobs
- Recommended jobs
- Application tracking

### 📊 Career Dashboard

- Application statistics
- Application activity charts
- Interview statistics
- Career metrics
- Recent applications
- Upcoming interviews
- Career progress tracking

### 📄 Resume Analyzer

- Resume upload interface
- ATS score
- Resume health analysis
- Skills analysis
- Resume improvement suggestions

### 🤖 AI Interview

- Interview setup
- Role-based interview questions
- Interview feedback
- Interview results
- Performance tracking

### 📈 Analytics

- Application analytics
- Interview analytics
- Career metrics
- Progress visualization
- Data-driven career insights

### 🎨 UI / UX

- Responsive design
- Light mode
- Dark mode
- Mobile navigation
- Sticky navigation
- Interactive components
- Loading states
- Empty states
- Error states
- Smooth transitions
- Accessible form controls

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development & build tool |
| JavaScript | Application logic |
| Tailwind CSS | Styling |
| React Router | Client-side routing |
| Lucide React | Icons |
| Recharts | Data visualization |
| Framer Motion | Animations |
| React Hook Form | Form management |
| Zod | Form validation |
| @dnd-kit | Drag & drop functionality |

---

## 🏗️ Project Architecture

```text
ai-careerhub/
│
├── public/
│   ├── images/
│   └── ...
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── illustrations/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Avatar.jsx
│   │   │   ├── Spinner.jsx
│   │   │   ├── Skeleton.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── ErrorState.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── jobs/
│   │   ├── tracker/
│   │   ├── dashboard/
│   │   ├── resume/
│   │   ├── interview/
│   │   ├── analytics/
│   │   └── landing/
│   │
│   ├── pages/
│   │   │
│   │   ├── public/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ResetPassword.jsx
│   │   │
│   │   ├── dashboard/
│   │   └── errors/
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── JobContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useTheme.js
│   │   ├── useLocalStorage.js
│   │   └── useJobs.js
│   │
│   ├── data/
│   │
│   ├── utils/
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md