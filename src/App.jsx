import React, { useState } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import APIDemo from './pages/APIDemo';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4">Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR</p>

          <div className="flex items-center gap-4 my-4">
            <button onClick={() => setCount((count) => count - 1)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">-</button>
            <span className="text-xl font-bold">{count}</span>
            <button onClick={() => setCount((count) => count + 1)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">+</button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-4">Below is the TaskManager component.</p>
          <div className="w-full mt-6">
            <Routes>
              <Route path="/" element={<TaskManager />} />
              <Route path="/tasks" element={<TaskManager />} />
            </Routes>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>
        <p className="text-gray-500 dark:text-gray-400">Fetch and display data from an API here</p>
      </div>
    </Layout>
  )
}

export default App;