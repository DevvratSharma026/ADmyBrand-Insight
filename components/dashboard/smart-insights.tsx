'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, RefreshCw, Sparkles } from 'lucide-react';
import { generateInsights, getRandomInsights, type Insight } from '@/lib/insights-generator';
import { cn } from '@/lib/utils';

export function SmartInsights() {
  const [insights, setInsights] = useState<Insight[]>(generateInsights());
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setInsights(getRandomInsights());
    setIsRegenerating(false);
  };

  const getInsightStyles = (type: Insight['type']) => {
    switch (type) {
      case 'positive':
        return 'border-emerald-200/50 dark:border-emerald-800/50 bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/20';
      case 'negative':
        return 'border-rose-200/50 dark:border-rose-800/50 bg-gradient-to-br from-rose-50/50 to-red-50/30 dark:from-rose-950/30 dark:to-red-950/20';
      case 'warning':
        return 'border-amber-200/50 dark:border-amber-800/50 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/30 dark:to-orange-950/20';
      default:
        return 'border-blue-200/50 dark:border-blue-800/50 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 dark:from-blue-950/30 dark:to-cyan-950/20';
    }
  };

  const getIconStyles = (type: Insight['type']) => {
    switch (type) {
      case 'positive':
        return 'text-emerald-600 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/40';
      case 'negative':
        return 'text-rose-600 dark:text-rose-400 bg-rose-100/80 dark:bg-rose-900/40';
      case 'warning':
        return 'text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/40';
      default:
        return 'text-blue-600 dark:text-blue-400 bg-blue-100/80 dark:bg-blue-900/40';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <Card className="glass-card border-0 shadow-2xl relative overflow-hidden group hover:neon-glow transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
                <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold gradient-text flex items-center gap-2">
                  Smart Insights
                  <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  AI-powered analysis of your marketing performance
                </CardDescription>
              </div>
            </div>
            
            <Button
              onClick={handleRegenerate}
              disabled={isRegenerating}
              className="glass-card border-0 hover:neon-glow transition-all duration-300 px-6 py-3 font-medium group/btn text-purple-950 dark:text-white"
            >
              <RefreshCw className={cn(
                "h-4 w-4 mr-2 transition-transform duration-500 group-hover/btn:text-purple-400 text-black dark:text-white",
                isRegenerating && "animate-spin"
              )} />
              {isRegenerating ? 'Analyzing...' : 'Regenerate'}
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="grid gap-4 md:grid-cols-2">
            <AnimatePresence mode="wait">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className={cn(
                    "p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg group/insight",
                    getInsightStyles(insight.type)
                  )}
                >
                  <div className="flex items-start space-x-3">
                    <div className={cn(
                      "p-2 rounded-lg transition-all duration-300 group-hover/insight:scale-110",
                      getIconStyles(insight.type)
                    )}>
                      <insight.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground/90 mb-1 group-hover/insight:text-foreground transition-colors duration-300">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed group-hover/insight:text-muted-foreground/80 transition-colors duration-300">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {isRegenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <div className="flex items-center space-x-3 text-muted-foreground">
                <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                <span className="font-medium">Generating new insights...</span>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}