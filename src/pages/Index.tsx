import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
