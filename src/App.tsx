import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { FeaturesSection } from './components/features-section';
import { FAQSection } from './components/faq-section';
import { Footer } from './components/footer';
import { ThemeProvider } from './lib/theme-provider';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="h-16 w-16 rounded-full bg-accent animate-pulse"></div>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen flex flex-col">
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            },
          }}
        />
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;