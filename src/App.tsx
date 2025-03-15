import { ThemeProvider } from "./lib/theme-provider";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { FAQSection } from "./components/faq-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen flex-col">
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