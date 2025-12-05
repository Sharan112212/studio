import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-background">
      <div className="container mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-primary">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
