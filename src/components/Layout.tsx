'use client';

import { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-blue-500 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Character Explorer</h1>
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:opacity-90 transition"
        >
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 max-w-6xl mx-auto">{children}</main>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Character Explorer
      </footer>
    </div>
  );
}
