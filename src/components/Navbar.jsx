import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { dark, toggle } = useTheme()
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold">PLP Task Manager</Link>
          <Link to="/tasks" className="text-sm text-gray-600 dark:text-gray-300">Tasks</Link>
        </div>
        <div>
          <button onClick={toggle} className="px-3 py-1 border rounded">{dark ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
