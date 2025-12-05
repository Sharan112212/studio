import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export function CertificatesSection() {
  const certificates = [
    {
      title: 'Certificate in Generative AI',
      issuer: 'Coursera',
      imageUrl: getImage('cert1')?.imageUrl,
      imageHint: getImage('cert1')?.imageHint,
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'Coursera',
      imageUrl: getImage('cert2')?.imageUrl,
      imageHint: getImage('cert2')?.imageHint,
    }
  ];

  return (
    <section id="certificates" className="w-full bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl">
            Certificates & Achievements
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A testament to my continuous learning and dedication.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
               {cert.imageUrl && (
                  <Image
                    src={cert.imageUrl}
                    alt={`Image for ${cert.title}`}
                    data-ai-hint={cert.imageHint}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                  />
                )}
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Issued by: {cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
