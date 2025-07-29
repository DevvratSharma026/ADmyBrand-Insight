'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Database } from 'lucide-react';
import { OverviewCards } from '@/components/dashboard/overview-cards';
import { RevenueChart } from '@/components/charts/revenue-chart';
import { CampaignChart } from '@/components/charts/campaign-chart';
import { TrafficSources } from '@/components/charts/traffic-sources';
import { DataTable } from '@/components/data-table/data-table';
import { columns } from '@/components/data-table/columns';
import { SmartInsights } from '@/components/dashboard/smart-insights';
import { ThemeToggle } from '@/components/dashboard/theme-toggle';
import { DashboardSkeleton } from '@/components/dashboard/dashboard-skeleton';
import { mockCampaigns } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <DashboardSkeleton />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-6xl font-bold gradient-text tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ADmyBRAND Insights
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            AI-powered analytics dashboard for your marketing campaigns
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ThemeToggle />
        </motion.div>
      </motion.div>

      {/* Overview Cards */}
      <OverviewCards />

      {/* Smart Insights Panel */}
      <SmartInsights />

      {/* Charts Section */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 gradient-text">
            <BarChart3 className="h-8 w-8 text-primary" />
            Analytics Overview
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
          <RevenueChart />
          <TrafficSources />
        </div>

        <CampaignChart />
      </div>

      {/* Data Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold flex items-center gap-3 gradient-text">
          <Database className="h-8 w-8 text-primary" />
          Campaign Data
        </h2>
        
        <Card className="glass-card border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Marketing Campaigns</CardTitle>
            <CardDescription className="text-lg">
              Manage and analyze your marketing campaign performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={mockCampaigns} />
          </CardContent>
        </Card>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="flex items-center justify-center gap-3 text-lg">
          <Activity className="h-5 w-5 text-primary animate-pulse" />
          Real-time data updates every 3 seconds
        </p>
      </motion.div>
    </div>
  );
}