'use client';

import { MetricCard } from './metric-card';
import { useRealtimeData } from '@/hooks/use-realtime-data';
import { mockMetrics } from '@/lib/mock-data';

export function OverviewCards() {
  const realtimeMetrics = useRealtimeData(mockMetrics, 3000);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {realtimeMetrics.map((metric, index) => (
        <MetricCard key={metric.title} data={metric} index={index} />
      ))}
    </div>
  );
}