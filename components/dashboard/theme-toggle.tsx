'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="lg"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="glass-card border-0 hover:neon-glow transition-all duration-300 w-14 h-14 rounded-xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-black absolute z-10" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-white z-10" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}