'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { trafficSourcesData } from '@/lib/mock-data';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="hsl(var(--background))" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-sm font-bold drop-shadow-lg"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function TrafficSources() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="glass-card border-0 shadow-2xl hover:neon-glow transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl font-bold gradient-text">Traffic Sources</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Distribution of website traffic by source
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <defs>
                {trafficSourcesData.map((entry, index) => (
                  <linearGradient key={`gradient-${index}`} id={`pieGradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={entry.color} stopOpacity="1" />
                    <stop offset="100%" stopColor={entry.color} stopOpacity="0.7" />
                  </linearGradient>
                ))}
              </defs>
              <Pie
                data={trafficSourcesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                innerRadius={70}
                fill="#8884d8"
                dataKey="value"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth={2}
              >
                {trafficSourcesData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#pieGradient-${index})`}
                    filter={`drop-shadow(0 4px 8px ${entry.color}40)`}
                  />
                ))}
              </Pie>
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
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}