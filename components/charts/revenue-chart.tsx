'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { revenueData } from '@/lib/mock-data';

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="glass-card border-0 shadow-2xl hover:neon-glow transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl font-bold gradient-text">Revenue Trends</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Monthly revenue and user growth over time
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="url(#gridGradient)" />
              <defs>
                <linearGradient id="gridGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                className="text-sm font-medium"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                className="text-sm font-medium"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  color: 'hsl(var(--foreground))',
                }}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={4}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 3, r: 6 }}
                activeDot={{ 
                  r: 8, 
                  stroke: 'hsl(var(--primary))', 
                  strokeWidth: 3,
                  fill: 'hsl(var(--background))',
                  filter: 'drop-shadow(0 0 8px hsl(var(--primary)))'
                }}
                name="Revenue ($)"
                filter="drop-shadow(0 0 4px hsl(var(--primary)))"
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--accent))"
                strokeWidth={4}
                dot={{ fill: 'hsl(var(--accent))', strokeWidth: 3, r: 6 }}
                activeDot={{ 
                  r: 8, 
                  stroke: 'hsl(var(--accent))', 
                  strokeWidth: 3,
                  fill: 'hsl(var(--background))',
                  filter: 'drop-shadow(0 0 8px hsl(var(--accent)))'
                }}
                name="Users"
                filter="drop-shadow(0 0 4px hsl(var(--accent)))"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}