import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DashboardSkeleton() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-12 w-80 glass-card" />
          <Skeleton className="h-6 w-64 glass-card" />
        </div>
        <Skeleton className="h-14 w-14 rounded-xl glass-card" />
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="glass-card border-0 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-5 w-32 glass-card" />
              <Skeleton className="h-12 w-12 rounded-xl glass-card" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-10 w-24 mb-3 glass-card" />
              <Skeleton className="h-5 w-40 glass-card" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Smart Insights Skeleton */}
      <Card className="glass-card border-0 shadow-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-xl glass-card" />
              <div className="space-y-2">
                <Skeleton className="h-8 w-40 glass-card" />
                <Skeleton className="h-5 w-56 glass-card" />
              </div>
            </div>
            <Skeleton className="h-12 w-32 glass-card" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 rounded-xl glass-card border-0">
                <div className="flex items-start space-x-3">
                  <Skeleton className="h-8 w-8 rounded-lg glass-card" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32 glass-card" />
                    <Skeleton className="h-3 w-full glass-card" />
                    <Skeleton className="h-3 w-3/4 glass-card" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="glass-card border-0 shadow-2xl">
          <CardHeader>
            <Skeleton className="h-8 w-40 glass-card" />
            <Skeleton className="h-5 w-56 glass-card" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[400px] w-full glass-card" />
          </CardContent>
        </Card>
        
        <Card className="glass-card border-0 shadow-2xl">
          <CardHeader>
            <Skeleton className="h-8 w-40 glass-card" />
            <Skeleton className="h-5 w-56 glass-card" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[400px] w-full glass-card" />
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card className="glass-card border-0 shadow-2xl">
        <CardHeader>
          <Skeleton className="h-8 w-40 glass-card" />
          <Skeleton className="h-5 w-56 glass-card" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <Skeleton className="h-12 w-80 glass-card" />
              <Skeleton className="h-12 w-32 ml-auto glass-card" />
              <Skeleton className="h-12 w-40 glass-card" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full glass-card" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}