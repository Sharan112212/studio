import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  const skills = [ "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "Git", "Figma", "Firebase", "Zod"];

  return (
    <section id="skills" className="w-full bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My technical toolkit for building modern, responsive, and performant web applications.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill) => (
             <Badge key={skill} className="cursor-default rounded-lg px-4 py-2 text-sm font-medium transition-all hover:scale-105 bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-accent-foreground">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
