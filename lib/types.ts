export interface MetricData {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface CampaignData {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  clicks: number;
  impressions: number;
  ctr: number;
  cost: number;
  conversions: number;
  roas: number;
  startDate: string;
  endDate: string;
}

export interface DateRange {
  from: Date;
  to: Date;
}