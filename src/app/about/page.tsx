import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Camera, Flag } from 'lucide-react';

const timelineEvents = [
  { year: 2015, title: 'First Camera', description: 'Received my first DSLR and instantly fell in love with capturing moments.' },
  { year: 2017, title: 'First Paid Gig', description: 'Photographed a small local event, marking the beginning of my professional journey.' },
  { year: 2019, title: 'Launched Dream Captures', description: 'Officially started Dream Captures, focusing on weddings and portraits.' },
  { year: 2021, title: 'Studio Opening', description: 'Opened a dedicated studio space to better serve clients.' },
  { year: 2023, title: 'Award Recognition', description: 'Received the "Best Local Photographer" award.' },
];

const awards = [
  { title: 'Best Local Photographer 2023', issuer: 'City Awards' },
  { title: 'Top Wedding Photographer', issuer: 'Bridal Magazine Feature' },
  { title: 'Excellence in Portraiture', issuer: 'Photography Guild' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Bio Section */}
      <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] max-w-lg mx-auto md:mx-0 order-last md:order-first">
          <Image
            src="https://picsum.photos/seed/about-main/800/600"
            alt="Photographer working"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Behind the Lens
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Hello! I'm [Photographer Name], the creative force behind Dream Captures. Photography isn't just my job; it's my way of seeing the world, finding beauty in the everyday, and telling stories without words.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey started with a simple fascination for light and shadow, evolving into a deep passion for capturing genuine human connection and emotion. I believe every photo should be more than just an image – it should be a feeling, a memory preserved in time.
          </p>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">My Journey</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <div key={event.year} className={`mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div> {/* Spacer */}
              {/* Icon Point */}
              <div className="z-10 hidden md:block">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                  <Camera size={16} />
                </div>
              </div>
              {/* Content */}
              <Card className={`w-full md:w-5/12 shadow-sm border border-border ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <CardHeader className="pb-2">
                  <p className="text-sm text-muted-foreground">{event.year}</p>
                  <CardTitle className="text-xl font-serif">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16 md:mb-24 text-center bg-secondary py-12 rounded-lg px-6">
        <Flag className="h-10 w-10 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Our Mission</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          To artfully capture the authentic moments and emotions that define your unique story, creating timeless visual legacies that you and your loved ones will cherish for generations.
        </p>
      </section>

      {/* Awards & Recognition */}
      <section>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">Awards & Recognition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card key={award.title} className="text-center shadow-sm hover:shadow-md transition-shadow border border-border">
              <CardHeader>
                <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
                <CardTitle className="text-lg font-semibold">{award.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{award.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
