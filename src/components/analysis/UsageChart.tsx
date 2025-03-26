
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface UsageData {
  month: string;
  usage: number;
  cost: number;
}

interface UsageChartProps {
  data: UsageData[];
}

const UsageChart: React.FC<UsageChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="month" 
          stroke="hsl(var(--muted-foreground))" 
          tickLine={false}
          axisLine={{ stroke: 'hsl(var(--border))' }}
        />
        <YAxis 
          yAxisId="left"
          stroke="hsl(var(--muted-foreground))" 
          tickLine={false}
          axisLine={{ stroke: 'hsl(var(--border))' }}
          tickFormatter={(value) => `${value} kWh`}
        />
        <YAxis 
          yAxisId="right"
          orientation="right"
          stroke="hsl(var(--muted-foreground))" 
          tickLine={false}
          axisLine={{ stroke: 'hsl(var(--border))' }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
            borderRadius: '0.5rem',
          }}
        />
        <Legend />
        <Area 
          yAxisId="left"
          type="monotone" 
          dataKey="usage" 
          stroke="hsl(var(--primary))" 
          fillOpacity={1}
          fill="url(#colorUsage)" 
          strokeWidth={2}
          name="Usage (kWh)"
        />
        <Area 
          yAxisId="right"
          type="monotone" 
          dataKey="cost" 
          stroke="#10b981" 
          fillOpacity={1}
          fill="url(#colorCost)" 
          strokeWidth={2}
          name="Cost ($)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default UsageChart;
