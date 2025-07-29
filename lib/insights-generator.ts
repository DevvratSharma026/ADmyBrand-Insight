import { mockMetrics, revenueData, campaignPerformanceData, trafficSourcesData, mockCampaigns } from './mock-data';
import { TrendingUp, TrendingDown, AlertTriangle, Target, Users, DollarSign, Zap, BarChart3 } from 'lucide-react';

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'negative' | 'warning' | 'neutral';
  icon: React.ComponentType;
  priority: number;
}

export function generateInsights(): Insight[] {
  const insights: Insight[] = [];

  // Revenue trend analysis
  const recentRevenue = revenueData.slice(-3);
  const avgRecentRevenue = recentRevenue.reduce((sum, item) => sum + item.revenue, 0) / recentRevenue.length;
  const previousRevenue = revenueData.slice(-6, -3);
  const avgPreviousRevenue = previousRevenue.reduce((sum, item) => sum + item.revenue, 0) / previousRevenue.length;
  const revenueGrowth = ((avgRecentRevenue - avgPreviousRevenue) / avgPreviousRevenue) * 100;

  if (revenueGrowth > 10) {
    insights.push({
      id: 'revenue-growth',
      title: 'Strong Revenue Growth',
      description: `Revenue increased by ${revenueGrowth.toFixed(1)}% in recent months, showing excellent business momentum.`,
      type: 'positive',
      icon: TrendingUp,
      priority: 1
    });
  } else if (revenueGrowth < -5) {
    insights.push({
      id: 'revenue-decline',
      title: 'Revenue Decline Alert',
      description: `Revenue decreased by ${Math.abs(revenueGrowth).toFixed(1)}% recently. Consider reviewing marketing strategies.`,
      type: 'negative',
      icon: TrendingDown,
      priority: 1
    });
  }

  // Campaign performance analysis
  const topCampaign = campaignPerformanceData.reduce((max, campaign) => 
    campaign.value > max.value ? campaign : max
  );
  const totalCampaignValue = campaignPerformanceData.reduce((sum, campaign) => sum + campaign.value, 0);
  const topCampaignShare = (topCampaign.value / totalCampaignValue) * 100;

  insights.push({
    id: 'top-campaign',
    title: 'Top Performing Channel',
    description: `${topCampaign.name} generates ${topCampaignShare.toFixed(1)}% of total campaign revenue. Consider increasing budget allocation.`,
    type: 'positive',
    icon: Target,
    priority: 2
  });

  // Traffic source analysis
  const organicTraffic = trafficSourcesData.find(source => source.name === 'Organic Search');
  const paidTraffic = trafficSourcesData.find(source => source.name === 'Paid Search');
  
  if (organicTraffic && paidTraffic) {
    if (organicTraffic.value > paidTraffic.value * 1.5) {
      insights.push({
        id: 'organic-dominance',
        title: 'Strong Organic Presence',
        description: `Organic search drives ${organicTraffic.value}% of traffic vs ${paidTraffic.value}% paid. Excellent SEO performance!`,
        type: 'positive',
        icon: Zap,
        priority: 3
      });
    } else if (paidTraffic.value > organicTraffic.value * 1.2) {
      insights.push({
        id: 'paid-dependency',
        title: 'High Paid Traffic Dependency',
        description: `${paidTraffic.value}% of traffic is paid vs ${organicTraffic.value}% organic. Consider investing in SEO for long-term growth.`,
        type: 'warning',
        icon: AlertTriangle,
        priority: 2
      });
    }
  }

  // User engagement analysis
  const activeUsers = mockMetrics.find(metric => metric.title === 'Active Users');
  const conversionRate = mockMetrics.find(metric => metric.title === 'Conversion Rate');
  
  if (activeUsers && conversionRate) {
    const userGrowth = activeUsers.change;
    const conversionChange = conversionRate.change;
    
    if (userGrowth > 15 && conversionChange > 0) {
      insights.push({
        id: 'user-conversion-growth',
        title: 'Excellent User Engagement',
        description: `Active users grew by ${userGrowth.toFixed(1)}% with improving conversion rates. User acquisition strategy is working well.`,
        type: 'positive',
        icon: Users,
        priority: 1
      });
    } else if (userGrowth > 10 && conversionChange < -2) {
      insights.push({
        id: 'conversion-optimization',
        title: 'Conversion Rate Optimization Needed',
        description: `User growth is strong (+${userGrowth.toFixed(1)}%) but conversion rate declined. Focus on user experience improvements.`,
        type: 'warning',
        icon: BarChart3,
        priority: 2
      });
    }
  }

  // Campaign efficiency analysis
  const activeCampaigns = mockCampaigns.filter(campaign => campaign.status === 'active');
  const avgROAS = activeCampaigns.reduce((sum, campaign) => sum + campaign.roas, 0) / activeCampaigns.length;
  
  if (avgROAS > 4) {
    insights.push({
      id: 'high-roas',
      title: 'Exceptional Campaign ROI',
      description: `Active campaigns average ${avgROAS.toFixed(1)}x ROAS. Your advertising spend is highly efficient.`,
      type: 'positive',
      icon: DollarSign,
      priority: 2
    });
  } else if (avgROAS < 2) {
    insights.push({
      id: 'low-roas',
      title: 'Campaign Efficiency Alert',
      description: `Average ROAS is ${avgROAS.toFixed(1)}x. Consider pausing underperforming campaigns and optimizing targeting.`,
      type: 'negative',
      icon: AlertTriangle,
      priority: 1
    });
  }

  // Sort by priority and return top 4
  return insights
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 4);
}

export function getRandomInsights(): Insight[] {
  // Add some randomization to simulate AI regeneration
  const allPossibleInsights = generateInsights();
  const additionalInsights: Insight[] = [
    {
      id: 'mobile-traffic',
      title: 'Mobile Traffic Surge',
      description: 'Mobile users increased by 23% this month. Consider optimizing mobile experience and campaigns.',
      type: 'positive',
      icon: TrendingUp,
      priority: 3
    },
    {
      id: 'weekend-performance',
      title: 'Weekend Performance Pattern',
      description: 'Conversions are 15% higher on weekends. Consider adjusting ad scheduling for better ROI.',
      type: 'neutral',
      icon: BarChart3,
      priority: 3
    },
    {
      id: 'cost-efficiency',
      title: 'Cost Per Acquisition Improved',
      description: 'CPA decreased by 12% while maintaining conversion quality. Excellent optimization work!',
      type: 'positive',
      icon: DollarSign,
      priority: 2
    }
  ];

  // Randomly mix in some additional insights
  const combinedInsights = [...allPossibleInsights, ...additionalInsights];
  const shuffled = combinedInsights.sort(() => Math.random() - 0.5);
  
  return shuffled.slice(0, 4);
}