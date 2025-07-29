'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { campaignPerformanceData } from '@/lib/mock-data';

export function CampaignChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="glass-card border-0 shadow-2xl hover:neon-glow transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl translate-y-20 -translate-x-20 group-hover:scale-150 transition-transform duration-700" />
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl font-bold gradient-text">Campaign Performance</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Performance metrics across different advertising platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={campaignPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="url(#barGridGradient)" />
              <defs>
                <linearGradient id="barGridGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
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
                  color: '#22292f', // dark gray for better contrast
                }}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '20px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              />
              <Bar
                dataKey="value"
                fill="url(#barGradient1)"
                radius={[8, 8, 0, 0]}
                name="Revenue ($)"
                filter="drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))"
              />
              <Bar
                dataKey="clicks"
                fill="url(#barGradient2)"
                radius={[8, 8, 0, 0]}
                name="Clicks"
                filter="drop-shadow(0 4px 8px rgba(6, 182, 212, 0.3))"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}