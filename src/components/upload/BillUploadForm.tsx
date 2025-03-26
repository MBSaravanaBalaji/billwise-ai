
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import AnimatedButton from '@/components/ui-custom/AnimatedButton';
import GlassCard from '@/components/ui-custom/GlassCard';

const BillUploadForm = () => {
  const navigate = useNavigate();
  const [squareFootage, setSquareFootage] = useState<string>('');
  const [people, setPeople] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!squareFootage || !people || !file) {
      toast.error('Please fill in all fields and upload a bill');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real application, you would upload the file to a server here
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      localStorage.setItem('billData', JSON.stringify({
        squareFootage,
        people,
        fileName: file.name,
        fileSize: file.size,
        uploadDate: new Date().toISOString(),
      }));
      
      toast.success('Bill uploaded successfully!');
      navigate('/analysis');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('There was an error uploading your bill. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlassCard className="w-full max-w-md mx-auto" animation="fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Upload Your Bill</h2>
          
          <div className="space-y-2">
            <Label htmlFor="square-footage">Square Footage</Label>
            <Input
              id="square-footage"
              type="number"
              placeholder="e.g. 1200"
              value={squareFootage}
              onChange={(e) => setSquareFootage(e.target.value)}
              className="bg-white/50 focus:bg-white transition-colors"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="people">Number of People</Label>
            <Input
              id="people"
              type="number"
              placeholder="e.g. 2"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="bg-white/50 focus:bg-white transition-colors"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bill">Utility Bill</Label>
            <div 
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                dragActive ? 'border-primary bg-primary/5' : 'border-muted'
              } ${file ? 'bg-secondary/20' : ''}`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <input
                id="bill"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleChange}
              />
              
              {file ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setFile(null)}
                  >
                    Change File
                  </Button>
                </div>
              ) : (
                <>
                  <label htmlFor="bill" className="cursor-pointer block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 text-muted-foreground"
                    >
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                      <path d="M12 12v9"></path>
                      <path d="m16 16-4-4-4 4"></path>
                    </svg>
                    <p className="text-base font-medium">
                      Drag and drop your bill here or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Supports PDF, JPG or PNG files
                    </p>
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
        
        <AnimatedButton
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : "Analyze My Bill"}
        </AnimatedButton>
      </form>
    </GlassCard>
  );
};

export default BillUploadForm;
