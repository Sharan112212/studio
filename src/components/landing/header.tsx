import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-primary sm:inline-block">FolioForge</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#skills" className="hidden font-medium text-muted-foreground transition-colors hover:text-primary md:block">
            Skills
          </Link>
          <Link href="#projects" className="hidden font-medium text-muted-foreground transition-colors hover:text-primary md:block">
            Projects
          </Link>
          <Link href="#contact" className="hidden font-medium text-muted-foreground transition-colors hover:text-primary md:block">
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild>
            <a href="mailto:your.email@example.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
