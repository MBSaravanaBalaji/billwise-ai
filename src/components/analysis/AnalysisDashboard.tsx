
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import GlassCard from '@/components/ui-custom/GlassCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import UsageChart from './UsageChart';
import { toast } from 'sonner';

interface BillData {
  squareFootage: string;
  people: string;
  fileName: string;
  fileSize: number;
  uploadDate: string;
}

const mockAnalysisData = {
  cost: {
    currentMonth: 125.67,
    previousMonth: 142.89,
    percentChange: -12.05,
  },
  usage: {
    currentMonth: 789,
    previousMonth: 856,
    percentChange: -7.83,
    unit: 'kWh',
  },
  provider: 'Pacific Energy',
  recommendations: [
    'Reduce standby power consumption by unplugging devices when not in use',
    'Consider investing in smart power strips to automatically cut power to idle devices',
    'Your electricity usage is higher than similar homes in your area by 15%',
    'Upgrading to LED lighting could save you approximately $18 per month',
    'Your peak usage hours are between 6-9 PM. Consider shifting some usage to off-peak hours.'
  ],
  historyData: [
    { month: 'Jan', usage: 912, cost: 145.92 },
    { month: 'Feb', usage: 879, cost: 140.64 },
    { month: 'Mar', usage: 842, cost: 134.72 },
    { month: 'Apr', usage: 801, cost: 128.16 },
    { month: 'May', usage: 856, cost: 142.89 },
    { month: 'Jun', usage: 789, cost: 125.67 }
  ]
};

const AnalysisDashboard = () => {
  const navigate = useNavigate();
  const [billData, setBillData] = useState<BillData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from a server
    const storedData = localStorage.getItem('billData');
    
    if (storedData) {
      setBillData(JSON.parse(storedData));
    }
    
    // Simulate loading analysis
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium mt-4">Analyzing your bill...</p>
      </div>
    );
  }

  if (!billData) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-4">No bill data found</h3>
        <p className="text-muted-foreground mb-6">
          Please upload a bill first to see your analysis.
        </p>
        <button
          onClick={() => navigate('/upload')}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Upload a Bill
        </button>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Your Bill Analysis</h2>
        <p className="text-muted-foreground">
          Uploaded on {new Date(billData.uploadDate).toLocaleDateString()} · {billData.fileName}
        </p>
      </div>
      
      <Tabs defaultValue="dashboard">
        <TabsList className="glass mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="usage">Usage Analysis</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="md:col-span-1" animation="fade-in">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">Square Footage</dt>
                    <dd className="text-xl font-semibold">{billData.squareFootage} sq ft</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Occupants</dt>
                    <dd className="text-xl font-semibold">{billData.people}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Energy Provider</dt>
                    <dd className="text-xl font-semibold">{mockAnalysisData.provider}</dd>
                  </div>
                </dl>
              </CardContent>
            </GlassCard>
            
            <GlassCard animation="fade-in" className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Monthly Comparison</CardTitle>
                <CardDescription>Compared to previous month</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Cost</p>
                  <p className="text-3xl font-semibold">${mockAnalysisData.cost.currentMonth}</p>
                  <div className={`flex items-center text-sm ${mockAnalysisData.cost.percentChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span>{mockAnalysisData.cost.percentChange}%</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-1 ${mockAnalysisData.cost.percentChange < 0 ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Usage</p>
                  <p className="text-3xl font-semibold">{mockAnalysisData.usage.currentMonth} {mockAnalysisData.usage.unit}</p>
                  <div className={`flex items-center text-sm ${mockAnalysisData.usage.percentChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span>{mockAnalysisData.usage.percentChange}%</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-1 ${mockAnalysisData.usage.percentChange < 0 ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </CardContent>
            </GlassCard>
          </div>
          
          <GlassCard animation="fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">6-Month History</CardTitle>
              <CardDescription>Track your usage and cost trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <UsageChart data={mockAnalysisData.historyData} />
              </div>
            </CardContent>
          </GlassCard>
          
          <GlassCard animation="fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">AI Insights</CardTitle>
              <CardDescription>Personalized recommendations based on your usage</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {mockAnalysisData.recommendations.slice(0, 3).map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                    <p>{recommendation}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <button
                onClick={() => toast.info('Viewing all insights')}
                className="text-primary hover:underline text-sm font-medium flex items-center"
              >
                View all insights
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </CardFooter>
          </GlassCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-8">
          <GlassCard animation="fade-in">
            <CardHeader>
              <CardTitle>Detailed Usage Analysis</CardTitle>
              <CardDescription>
                A comprehensive breakdown of your energy consumption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This detailed view would show a breakdown of your usage by appliance, time of day, and other factors.</p>
              <div className="p-8 bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Detailed usage analysis would appear here</p>
              </div>
            </CardContent>
          </GlassCard>
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-8">
          <GlassCard animation="fade-in">
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>
                AI-powered suggestions to help you save energy and reduce costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {mockAnalysisData.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Recommendation {index + 1}</p>
                      <p className="text-muted-foreground">{recommendation}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisDashboard;
