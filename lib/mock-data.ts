import { MetricData, ChartDataPoint, CampaignData } from './types';
import { DollarSign, Users, TrendingUp, Percent } from 'lucide-react';

export const mockMetrics: MetricData[] = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: 20.1,
    changeType: 'increase',
    icon: DollarSign,
    description: 'Monthly recurring revenue'
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: 180,
    changeType: 'increase',
    icon: Users,
    description: 'Active users this month'
  },
  {
    title: 'Conversion Rate',
    value: '12.5%',
    change: -2.5,
    changeType: 'decrease',
    icon: Percent,
    description: 'Average conversion rate'
  },
  {
    title: 'Growth Rate',
    value: '23.8%',
    change: 4.3,
    changeType: 'increase',
    icon: TrendingUp,
    description: 'Month-over-month growth'
  }
];

export const revenueData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 4000, users: 240, value: 4000 },
  { name: 'Feb', revenue: 3000, users: 139, value: 3000 },
  { name: 'Mar', revenue: 2000, users: 980, value: 2000 },
  { name: 'Apr', revenue: 2780, users: 390, value: 2780 },
  { name: 'May', revenue: 1890, users: 480, value: 1890 },
  { name: 'Jun', revenue: 2390, users: 380, value: 2390 },
  { name: 'Jul', revenue: 3490, users: 430, value: 3490 },
  { name: 'Aug', revenue: 4200, users: 520, value: 4200 },
  { name: 'Sep', revenue: 3800, users: 480, value: 3800 },
  { name: 'Oct', revenue: 4500, users: 590, value: 4500 },
  { name: 'Nov', revenue: 4800, users: 620, value: 4800 },
  { name: 'Dec', revenue: 5200, users: 680, value: 5200 }
];

export const campaignPerformanceData: ChartDataPoint[] = [
  { name: 'Google Ads', value: 4000, clicks: 12000, impressions: 45000 },
  { name: 'Facebook', value: 3000, clicks: 8500, impressions: 32000 },
  { name: 'Instagram', value: 2000, clicks: 6200, impressions: 28000 },
  { name: 'LinkedIn', value: 2780, clicks: 4800, impressions: 18000 },
  { name: 'Twitter', value: 1890, clicks: 3200, impressions: 15000 },
  { name: 'TikTok', value: 2390, clicks: 5600, impressions: 22000 },
];

export const trafficSourcesData: ChartDataPoint[] = [
  { name: 'Organic Search', value: 35, color: '#3B82F6' },
  { name: 'Paid Search', value: 25, color: '#10B981' },
  { name: 'Social Media', value: 20, color: '#F59E0B' },
  { name: 'Direct', value: 12, color: '#EF4444' },
  { name: 'Email', value: 5, color: '#8B5CF6' },
  { name: 'Referral', value: 3, color: '#F97316' }
];

export const mockCampaigns: CampaignData[] = [
  {
    id: '1',
    name: 'Holiday Sale Campaign',
    status: 'active',
    clicks: 12543,
    impressions: 89234,
    ctr: 14.06,
    cost: 2890.50,
    conversions: 345,
    roas: 4.2,
    startDate: '2024-01-15',
    endDate: '2024-02-15'
  },
  {
    id: '2',
    name: 'Brand Awareness Drive',
    status: 'active',
    clicks: 8765,
    impressions: 156789,
    ctr: 5.59,
    cost: 1567.80,
    conversions: 123,
    roas: 2.8,
    startDate: '2024-01-10',
    endDate: '2024-02-10'
  },
  {
    id: '3',
    name: 'Product Launch',
    status: 'completed',
    clicks: 23456,
    impressions: 234567,
    ctr: 10.0,
    cost: 4567.90,
    conversions: 789,
    roas: 6.5,
    startDate: '2023-12-01',
    endDate: '2024-01-01'
  },
  {
    id: '4',
    name: 'Retargeting Campaign',
    status: 'paused',
    clicks: 5432,
    impressions: 45678,
    ctr: 11.9,
    cost: 1234.56,
    conversions: 234,
    roas: 3.4,
    startDate: '2024-01-05',
    endDate: '2024-02-05'
  },
  {
    id: '5',
    name: 'Local Market Push',
    status: 'active',
    clicks: 9876,
    impressions: 123456,
    ctr: 8.0,
    cost: 2345.67,
    conversions: 456,
    roas: 5.1,
    startDate: '2024-01-20',
    endDate: '2024-02-20'
  }
];