
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui-custom/AnimatedButton';
import GlassCard from '@/components/ui-custom/GlassCard';

const Index = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.2 });

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-fade-in">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                  Intelligent Bill Analysis
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Save Money with <br />
                  <span className="text-primary">AI-Powered</span> Bill Analysis
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                  Upload your utility bills and get personalized insights, usage analysis, and money-saving recommendations tailored to your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <AnimatedButton size="lg" asChild>
                    <Link to="/upload">Upload Your Bill</Link>
                  </AnimatedButton>
                  <AnimatedButton size="lg" variant="outline" asChild>
                    <Link to="/analysis">View Demo Analysis</Link>
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute -left-10 -top-10 w-2/3 h-2/3 bg-primary/5 rounded-full filter blur-3xl"></div>
                <div className="absolute -right-10 -bottom-10 w-2/3 h-2/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>
                
                <GlassCard className="relative z-10 animate-slide-up">
                  <div className="p-4">
                    <img 
                      src="https://images.unsplash.com/photo-1626697556420-8d569239c0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Bill Analysis Dashboard" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get valuable insights from your utility bills in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Upload Your Bill",
                  description: "Simply upload your utility bill and enter basic information about your property.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  ),
                },
                {
                  title: "AI Analysis",
                  description: "Our AI analyzes your bill to extract costs, usage patterns, and other important data.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                },
                {
                  title: "Get Insights",
                  description: "Receive personalized recommendations to help you save money and reduce your consumption.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <div 
                  key={i}
                  ref={el => featureRefs.current[i] = el}
                  className="animate-on-scroll"
                >
                  <GlassCard className="text-center p-8 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BillWiseAI</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive analysis to help you understand and optimize your utility usage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Smart Bill Analysis",
                  description: "Our AI extracts critical data from your bills, including costs, usage patterns, and billing periods.",
                },
                {
                  title: "Usage Insights",
                  description: "Understand how your consumption compares to similar homes and identify areas for improvement.",
                },
                {
                  title: "Personalized Recommendations",
                  description: "Get tailored suggestions to reduce your energy usage based on your specific consumption patterns.",
                },
                {
                  title: "Historical Tracking",
                  description: "Track your usage over time and see how your efforts to reduce consumption are paying off.",
                },
              ].map((feature, i) => (
                <div 
                  key={i}
                  ref={el => featureRefs.current[i + 3] = el}
                  className="animate-on-scroll"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Upload your utility bill now and get personalized insights to help you save money and reduce your environmental impact.
              </p>
              <AnimatedButton size="lg" asChild>
                <Link to="/upload">Analyze My Bill</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
