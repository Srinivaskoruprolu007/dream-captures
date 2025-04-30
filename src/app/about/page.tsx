import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Camera, MapPin, Users } from 'lucide-react'; // Used Users for community/roots
import { cn } from '@/lib/utils';

// Placeholder Icons (Replace with culturally relevant SVGs: e.g., Diya, Kalash, Garland)
const PellikuthuruIcon = () => <Camera/>; // Placeholder
const PellikodukuIcon = () => <Camera/>; // Placeholder
const SangeethIcon = () => <Camera/>; // Placeholder

const timelineEvents = [
  { year: 2015, title: 'First Camera Spark', description: 'A simple camera ignited a lifelong passion for capturing moments in my hometown in Andhra Pradesh.' },
  { year: 2017, title: 'Capturing Local Festivals', description: 'Honed skills photographing vibrant Sankranti and Ugadi celebrations.' },
  { year: 2019, title: 'Dream Captures Founded', description: 'Launched Dream Captures, focusing on authentic Telugu wedding stories.' , icon: PellikuthuruIcon},
  { year: 2021, title: 'First Major Wedding (Vizag)', description: 'Covered a beautiful beachside wedding in Visakhapatnam, a milestone event.' , icon: SangeethIcon},
  { year: 2023, title: 'Recognized Locally', description: 'Received "Best Wedding Photographer" nomination in [Local Publication/Award].', icon: PellikodukuIcon },
];

const awards = [
  { title: 'Best Wedding Photographer Nominee 2023', issuer: '[Local Awards Body]' },
  { title: 'Featured Wedding: Andhra Weddings Magazine', issuer: 'Print & Online Feature' },
  { title: 'Top 10 Photographers in [City/Region]', issuer: '[Photography Blog/Guild]' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background">
      {/* Bio Section */}
      <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 order-last md:order-first rounded-lg overflow-hidden shadow-xl border-4 border-secondary/20">
          {/* Image with cultural context */}
          <Image
            src="https://picsum.photos/seed/photographer-andhra/600/800"
            alt="Photographer in a traditional Andhra setting or with camera"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-110"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>
        </div>
        <div className="animate-fade-in-slow">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Behind the Lens: My Andhra Story
          </h1>
           <p className="text-lg font-telugu text-secondary mb-4">నా ప్రయాణం, నా కళ.</p>
           <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-telugu">
              నేను ఆంధ్రప్రదేశ్‌లోని [మీ ఊరు] నుండి వచ్చిన ఒక ప్రేమతో నిండిన ఫోటోగ్రాఫర్‌ని. ప్రతి సందర్భం ప్రత్యేకం, ప్రతి క్లిక్ ఒక గుర్తుగా ఉంటుంది.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Namaskaram! I'm [Photographer Name], the heart and soul behind Dream Captures. Born and raised amidst the vibrant culture of Andhra Pradesh, photography became my language to express the beauty I saw in our traditions, landscapes, and most importantly, our celebrations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From the intricate details of a pellikuthuru ceremony to the joyous chaos of a sangeeth, my passion lies in capturing the genuine emotions and untold stories that make each Telugu wedding unique. I believe every photograph should be a window back to a cherished moment, filled with the warmth and richness of our heritage.
          </p>
            <div className="flex items-center mt-6 text-muted-foreground text-sm">
                <MapPin size={16} className="mr-2 text-primary" /> Based in [Your City], Andhra Pradesh - Serving Across India
            </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">My Photographic Journey</h2>
         <p className="font-telugu text-center text-muted-foreground mb-12 -mt-8">ఒక ఫోటోగ్రాఫర్‌గా నా ఎదుగుదల.</p>
        <div className="relative max-w-3xl mx-auto before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-secondary/20 before:via-secondary/50 before:to-secondary/20 md:before:mx-auto md:before:left-0 md:before:right-0">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative pl-12 md:pl-0 md:flex md:justify-between md:items-center w-full mb-8 last:mb-0">
               {/* Left Side (or Right on even index for desktop) */}
               <div className={cn("md:w-5/12", index % 2 === 0 ? "md:order-3" : "")}></div>

                {/* Timeline Dot & Icon */}
              <div className={cn(
                  "absolute left-5 md:left-1/2 top-1 z-10 transform -translate-x-1/2 flex items-center justify-center",
                  index % 2 === 0 ? "md:order-2" : "md:order-2" // Keeps dot in center
                  )}>
                <div className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg border-2 border-background">
                  {event.icon ? <event.icon /> : <Camera size={18} />}
                </div>
              </div>

              {/* Card Content */}
              <Card className={cn(
                  "w-full md:w-5/12 shadow-lg border border-border hover:border-accent transition-colors duration-300",
                   index % 2 === 0 ? "md:order-1 md:text-right" : "md:order-3 md:text-left"
                   )}>
                <CardHeader className={cn("pb-2", index % 2 === 0 ? "md:items-end" : "")}>
                  <p className="text-sm font-semibold text-primary">{event.year}</p>
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
      <section className="mb-16 md:mb-24 text-center bg-gradient-to-br from-secondary/5 via-secondary/10 to-secondary/5 py-12 rounded-lg px-6 border border-secondary/20 shadow-inner">
         {/* Replace with a relevant cultural icon like Kalash or Diya */}
         <Users className="h-10 w-10 mx-auto mb-4 text-secondary" />
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Our Mission</h2>
         <p className="font-telugu text-muted-foreground mb-6 max-w-3xl mx-auto">మా లక్ష్యం</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          To artfully preserve the authenticity, emotions, and vibrant traditions of your Telugu wedding, creating a timeless visual legacy steeped in cultural richness for generations to cherish.
        </p>
      </section>

      {/* Awards & Recognition */}
      <section>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">Recognition & Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card key={award.title} className="text-center shadow-md hover:shadow-lg transition-shadow border border-border rounded-lg overflow-hidden bg-card transform hover:-translate-y-1 duration-300">
              <CardHeader className="p-6">
                <Award className="h-10 w-10 mx-auto mb-4 text-accent" />
                <CardTitle className="text-lg font-semibold text-foreground">{award.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6 px-6">
                <p className="text-sm text-muted-foreground">{award.issuer}</p>
              </CardContent>
               {/* Optional gold accent line at bottom */}
               <div className="h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
