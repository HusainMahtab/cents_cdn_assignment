'use client';

import { useAuth } from '@/lib/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 dark:text-gray-300">Welcome, {user?.name}</span>
          <ThemeToggle />
          <Button variant="outline" onClick={logout} className="cursor-pointer">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
} 