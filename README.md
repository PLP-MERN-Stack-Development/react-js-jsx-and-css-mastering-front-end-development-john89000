# PLP Task Manager - React.js, JSX, and Tailwind CSS# React.js and Tailwind CSS Assignment



A responsive React application demonstrating modern front-end development with component architecture, state management, hooks, and API integration.This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.



## 🚀 Live Demo## Assignment Overview



**Deployment URL:** (https://react-js-jsx-and-css-mastering-fron-smoky.vercel.app/)You will:

1. Set up a React project with Vite and Tailwind CSS

## 📋 Features2. Create reusable UI components

3. Implement state management using React hooks

- ✅ **Component Architecture** - Reusable UI components (Button, Card, Navbar, Footer, Layout)4. Integrate with external APIs

- ✅ **State Management** - React hooks (useState, useEffect, useContext, custom hooks)5. Style your application using Tailwind CSS

- ✅ **Task Manager** - Add, complete, delete, and filter tasks with localStorage persistence

- ✅ **API Integration** - Fetch and display data from JSONPlaceholder API## Getting Started

- ✅ **Dark Mode** - Theme switcher with persistence

- ✅ **Responsive Design** - Mobile, tablet, and desktop support1. Accept the GitHub Classroom assignment invitation

- ✅ **Tailwind CSS** - Modern utility-first styling2. Clone your personal repository that was created by GitHub Classroom

- ✅ **React Router** - Client-side routing3. Install dependencies:

   ```

## 🛠️ Tech Stack   npm install

   ```

- **React 18** - Modern React with hooks4. Start the development server:

- **Vite** - Fast build tool and dev server   ```

- **Tailwind CSS** - Utility-first CSS framework   npm run dev

- **React Router** - Declarative routing   ```

- **PropTypes** - Runtime type checking

## Files Included

## 📂 Project Structure

- `Week3-Assignment.md`: Detailed assignment instructions

```- Starter files for your React application:

src/  - Basic project structure

├── components/       # Reusable UI components  - Pre-configured Tailwind CSS

│   ├── Button.jsx  - Sample component templates

│   ├── Card.jsx

│   ├── Navbar.jsx## Requirements

│   ├── Footer.jsx

│   └── Layout.jsx- Node.js (v18 or higher)

├── pages/           # Page components- npm or yarn

│   ├── TaskManager.jsx- Modern web browser

│   └── APIDemo.jsx- Code editor (VS Code recommended)

├── hooks/           # Custom React hooks

│   └── useLocalStorageTasks.js## Project Structure

├── context/         # React context providers

│   └── ThemeContext.jsx```

├── api/             # API integration functionssrc/

│   └── fetchData.js├── components/       # Reusable UI components

├── utils/           # Utility functions├── pages/           # Page components

├── App.jsx          # Main application component├── hooks/           # Custom React hooks

├── main.jsx         # Application entry point├── context/         # React context providers

└── index.css        # Global styles with Tailwind directives├── api/             # API integration functions

```├── utils/           # Utility functions

└── App.jsx          # Main application component

## 🚀 Getting Started```



### Prerequisites## Submission



- Node.js (v18 or higher)Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

- npm or yarn

1. Complete all required components and features

### Installation2. Implement proper state management with hooks

3. Integrate with at least one external API

1. Clone the repository:4. Style your application with Tailwind CSS

```bash5. Deploy your application and add the URL to your README.md

git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-john89000.git

cd react-js-jsx-and-css-mastering-front-end-development-john89000## Resources

```

- [React Documentation](https://react.dev/)

2. Install dependencies:- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

```bash- [Vite Documentation](https://vitejs.dev/guide/)

npm install- [React Router Documentation](https://reactrouter.com/) 
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Components

### Button Component
Customizable button with variants (primary, secondary, danger, success, warning) and sizes (sm, md, lg).

```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card Component
Simple wrapper for boxed content layout.

```jsx
<Card className="max-w-md">
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>
```

### TaskManager
Full-featured task management with:
- Add new tasks
- Mark as completed
- Delete tasks
- Filter (All/Active/Completed)
- LocalStorage persistence

### API Integration
Fetches data from JSONPlaceholder API with:
- Loading states
- Error handling
- Search/filter functionality
- Refresh capability

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy automatically

Or use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy using Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo at [Netlify](https://app.netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Update `vite.config.js` with base path:
```js
export default defineConfig({
  base: '/react-js-jsx-and-css-mastering-front-end-development-john89000/',
  plugins: [react({ jsxRuntime: 'automatic' })]
})
```

4. Deploy:
```bash
npm run deploy
```

## 🎓 Assignment Completion

This project fulfills all Week 3 assignment requirements:

### ✅ Task 1: Project Setup
- ✓ Created React app with Vite
- ✓ Configured Tailwind CSS
- ✓ Set up project structure
- ✓ Configured React Router

### ✅ Task 2: Component Architecture
- ✓ Button component with variants
- ✓ Card component for layouts
- ✓ Navbar with navigation
- ✓ Footer with copyright
- ✓ Layout component wrapper

### ✅ Task 3: State Management and Hooks
- ✓ TaskManager with full CRUD operations
- ✓ useState for component state
- ✓ useEffect for side effects
- ✓ useContext for theme management
- ✓ Custom useLocalStorageTasks hook

### ✅ Task 4: API Integration
- ✓ Fetch from JSONPlaceholder API
- ✓ Display in grid layout
- ✓ Loading and error states
- ✓ Search/filter functionality

### ✅ Task 5: Styling with Tailwind CSS
- ✓ Responsive design (mobile/tablet/desktop)
- ✓ Dark mode theme switcher
- ✓ Utility classes throughout
- ✓ Custom animations and transitions

## 📸 Screenshots

[Add screenshots of your application here after deploying]

## 👨‍💻 Author

Student Name - PLP MERN Stack Development

## 🙏 Acknowledgments

- [PLP Academy](https://plpacademy.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
