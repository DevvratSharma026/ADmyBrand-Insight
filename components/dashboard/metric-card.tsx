'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricData } from '@/lib/types';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  data: MetricData;
  index: number;
}

export function MetricCard({ data, index }: MetricCardProps) {
  const { title, value, change, changeType, icon: Icon, description } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      className="floating-animation"
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <Card className="relative overflow-hidden glass-card border-0 hover:neon-glow transition-all duration-500 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
        
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
          <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {title}
          </CardTitle>
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <motion.div 
            className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3"
            key={value}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.div>
          
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <div className={cn(
              "flex items-center space-x-2 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 font-medium",
              changeType === 'increase' 
                ? "text-emerald-600 bg-emerald-100/50 dark:bg-emerald-900/20 dark:text-emerald-400" 
                : "text-rose-600 bg-rose-100/50 dark:bg-rose-900/20 dark:text-rose-400"
            )}>
              {changeType === 'increase' ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="font-semibold">{Math.abs(change).toFixed(1)}%</span>
            </div>
            <span className="font-medium">{description}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}