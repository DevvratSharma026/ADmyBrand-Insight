'use client';

import { useState, useEffect } from 'react';
import { MetricData } from '@/lib/types';

export function useRealtimeData(initialData: MetricData[], interval: number = 5000) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const updateData = () => {
      setData(prevData => 
        prevData.map(metric => ({
          ...metric,
          change: metric.change + (Math.random() - 0.5) * 2,
          value: updateMetricValue(metric.title, metric.value)
        }))
      );
    };

    const intervalId = setInterval(updateData, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  return data;
}

function updateMetricValue(title: string, currentValue: string): string {
  const variance = (Math.random() - 0.5) * 0.1; // 10% variance
  
  if (title === 'Total Revenue') {
    const numValue = parseFloat(currentValue.replace(/[$,]/g, ''));
    const newValue = numValue * (1 + variance);
    return `$${newValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  }
  
  if (title === 'Active Users') {
    const numValue = parseInt(currentValue.replace(/,/g, ''));
    const newValue = Math.round(numValue * (1 + variance));
    return newValue.toLocaleString();
  }
  
  if (title.includes('Rate') || title.includes('%')) {
    const numValue = parseFloat(currentValue.replace('%', ''));
    const newValue = numValue * (1 + variance);
    return `${newValue.toFixed(1)}%`;
  }
  
  return currentValue;
}