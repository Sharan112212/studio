import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export function HeroSection() {
  const headshot = getImage('headshot');

  return (
    <section id="home" className="container mx-auto max-w-screen-lg px-4 py-16 text-center md:py-24 lg:py-32">
      {headshot && (
        <Image
          src={headshot.imageUrl}
          alt="Professional Headshot"
          data-ai-hint={headshot.imageHint}
          width={128}
          height={128}
          priority
          className="mx-auto mb-6 h-32 w-32 rounded-full object-cover shadow-lg"
        />
      )}
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
        Your Name
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Passionate developer creating beautiful and functional web experiences. Welcome to my personal corner of the internet.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="#" download="resume.pdf">Download Resume</a>
        </Button>
      </div>
    </section>
  );
}
