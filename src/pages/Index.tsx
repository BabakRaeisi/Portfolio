import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Projects />
      <Blog />
      <Contact />
      {/* <Terminal /> */}
    </div>
  );
};

export default Index;
