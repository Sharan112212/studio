import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { SkillsSection } from '@/components/landing/skills-section';
import { ProjectsSection } from '@/components/landing/projects-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
