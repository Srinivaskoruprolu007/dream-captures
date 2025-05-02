import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Camera, MapPin, Users, Heart, Sparkles } from 'lucide-react'; // Added Sparkles
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Dream Captures',
  description: 'Meet the passionate team behind Dream Captures, young photographers from Andhra Pradesh dedicated to capturing your special moments.',
};


// Placeholder Icons - Use pastel colors
const MemberIcon1 = () => <Users aria-hidden="true" className="text-primary" />; // Mint
const MemberIcon2 = () => <Camera aria-hidden="true" className="text-secondary" />; // Ice Blue
const MemberIcon3 = () => <Heart aria-hidden="true" className="text-accent" />; // Pink

const teamMembers = [
  { name: '[Member 1 Name]', role: 'Lead Photographer', introTelugu: 'టీమ్ లీడ్, క్రియేటివ్ విజన్.', icon: MemberIcon1, photoUrl: 'https://picsum.photos/seed/member1/300/300', dataAiHint: 'photographer portrait professional' },
  { name: '[Member 2 Name]', role: 'Cinematographer & Editor', introTelugu: 'సినిమాటిక్ స్టోరీ టెల్లర్.', icon: MemberIcon2, photoUrl: 'https://picsum.photos/seed/member2/300/300', dataAiHint: 'videographer camera professional' },
  { name: '[Member 3 Name]', role: 'Assistant Photographer', introTelugu: 'ప్రతి క్షణం పట్టుకోవడంలో సహాయం.', icon: MemberIcon3, photoUrl: 'https://picsum.photos/seed/member3/300/300', dataAiHint: 'assistant photographer team' },
  // Add more team members as needed
];

const timelineEvents = [
  { year: 2018, title: 'The Spark', description: 'A shared passion for photography brought our founding members together.' },
  { year: 2020, title: 'Dream Captures Born', description: 'Officially launched as a team, focusing on modern event photography in Andhra Pradesh.' },
  { year: 2022, title: 'Growing Together', description: 'Expanded our services, covering major weddings and events across the region.' },
  { year: 2024, title: 'Vision Ahead', description: 'Continuing to innovate and capture beautiful stories with a blend of tradition and creativity.' },
];

const awards = [
  { title: 'Best Wedding Photography Team (Nominee)', issuer: '[Local Awards Body]' },
  { title: 'Featured Work: South India Weddings', issuer: 'Online Publication Feature' },
  { title: 'Top Young Photographers: Andhra Pradesh', issuer: '[Regional Blog]' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background"> {/* Use theme background */}
      {/* Team Bio Section */}
      <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center" aria-labelledby="team-bio-heading">
        {/* Image Container - Pastel border */}
        <div className="relative aspect-square max-w-md mx-auto md:mx-0 order-last md:order-first rounded-lg overflow-hidden shadow-xl border-4 border-primary/30"> {/* Mint border */}
          <Image
            src="https://picsum.photos/seed/team-photo/800/800"
            alt="The Dream Captures photography team posing together."
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-105"
            data-ai-hint="photography team group photo"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" aria-hidden="true"></div> {/* Softer overlay */}
        </div>
        {/* Text Content */}
        <div className="animate-fade-in-slow order-first md:order-last">
          <h1 id="team-bio-heading" className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Meet the Dream Captures Crew
          </h1>
           <p className="text-lg font-noto text-muted-foreground mb-4" lang="te">మా టీమ్ గురించి తెలుసుకోండి.</p>
           <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-noto" lang="te">
              డ్రీమ్ క్యాప్చర్స్ అనేది ఆంధ్రప్రదేశ్‌లో ఉన్న యువ ఫోటోగ్రాఫర్ల టీమ్. మేము పెళ్లిళ్లు, పార్టీలు, మరియు ఎన్నో అందమైన క్షణాలను బంధించడంలో నిపుణులం.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Hello! We are Dream Captures, a collective of young, energetic photographers based in the heart of Andhra Pradesh. Our passion is freezing moments in time, telling stories through vibrant images from weddings, lively parties, creative model shoots, and breathtaking outdoor sessions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe that every event has a unique story, and our collaborative approach ensures we capture the essence of your celebration from multiple perspectives. We combine technical skill with a friendly attitude to make your photography experience enjoyable and memorable.
          </p>
            <div className="flex items-center mt-6 text-muted-foreground text-sm">
                <MapPin size={16} className="mr-2 text-primary shrink-0" aria-hidden="true" /> {/* Mint icon */} Based in [Your City], Andhra Pradesh - Available Statewide
            </div>
        </div>
      </section>

       {/* Meet the Team Section */}
       <section className="mb-16 md:mb-24" aria-labelledby="meet-the-team-heading">
          <h2 id="meet-the-team-heading" className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">Our Talented Team</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <li key={member.name}>
                {/* Use theme card style */}
                <Card className="text-center shadow-md hover:shadow-lg transition-shadow border border-border/50 rounded-lg overflow-hidden bg-card transform hover:-translate-y-1 duration-300 h-full flex flex-col">
                  <CardHeader className="p-0 relative">
                     <div className="aspect-square overflow-hidden">
                        <Image
                           src={member.photoUrl}
                           alt={`Portrait of ${member.name}`}
                           layout="fill"
                           objectFit="cover"
                           className="transition-transform duration-500 hover:scale-110"
                           data-ai-hint={member.dataAiHint}
                           sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                     </div>
                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                     </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <p className="text-sm font-medium text-primary mb-1">{member.role}</p> {/* Mint text */}
                    <p className="text-xs text-muted-foreground font-noto" lang="te">{member.introTelugu}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
       </section>


      {/* Simplified Journey/Timeline Section - Pastel accents */}
      <section className="mb-16 md:mb-24" aria-labelledby="journey-heading">
        <h2 id="journey-heading" className="text-3xl md:text-4xl font-serif font-semibold text-center mb-4 text-foreground">Our Journey Together</h2>
         <p className="font-noto text-center text-muted-foreground mb-12 -mt-4" lang="te">ఒక టీమ్‌గా మా ప్రయాణం.</p>
        {/* Use pastel gradient for timeline line */}
        <div className="relative max-w-3xl mx-auto before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-secondary/30 before:to-accent/20 md:before:mx-auto md:before:left-1/2 md:before:-translate-x-1/2" role="list">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative pl-12 mb-10 md:pl-0 md:flex md:items-center md:mb-12 last:mb-0" role="listitem">
               <div className={cn("hidden md:block md:w-5/12", index % 2 === 0 ? "md:order-3" : "md:order-1")}></div>
                {/* Timeline Marker - Use Secondary (Ice Blue) */}
                <div className="absolute left-5 top-1 z-10 -translate-x-1/2 md:left-1/2" aria-hidden="true">
                    <div className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg border-2 border-background">
                    <Camera size={18} />
                    </div>
              </div>
              {/* Timeline Card - Use pastel accent border on hover */}
              <Card className={cn(
                  "w-full md:w-5/12 shadow-lg border border-border/50 hover:border-accent transition-colors duration-300", // Pink border on hover
                   index % 2 === 0 ? "md:order-1" : "md:order-3"
                   )}>
                <CardHeader className={cn("pb-2", index % 2 === 0 ? "md:text-right md:items-end" : "md:text-left")}>
                  <p className="text-sm font-semibold text-primary">{event.year}</p> {/* Mint year */}
                  <h3 className="text-xl font-serif text-foreground">{event.title}</h3>
                </CardHeader>
                <CardContent className={cn(index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section - Pastel gradient background */}
      <section className="mb-16 md:mb-24 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 px-6 rounded-lg border border-border/30 shadow-inner" aria-labelledby="mission-heading"> {/* Mixed pastel gradient */}
         <Heart className="h-10 w-10 mx-auto mb-4 text-accent" aria-hidden="true" /> {/* Pink heart */}
        <h2 id="mission-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Our Mission</h2>
         <p className="font-noto text-muted-foreground mb-6 max-w-3xl mx-auto" lang="te">మా లక్ష్యం</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           To capture the authentic joy and vibrant spirit of your special occasions, creating beautiful, lasting memories with a fresh, modern perspective rooted in Andhra's culture.
           <br/>
           <span className="font-noto" lang="te">(మీ ప్రత్యేక సందర్భాలలో సహజమైన ఆనందాన్ని మరియు ఉత్సాహాన్ని బంధించడం మా లక్ష్యం.)</span>
        </p>
      </section>

      {/* Awards & Recognition - Pastel accents */}
      <section aria-labelledby="awards-heading">
        <h2 id="awards-heading" className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">Recognition & Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <li key={award.title}>
              <Card className="text-center shadow-md hover:shadow-lg transition-shadow border border-border/50 rounded-lg overflow-hidden bg-card transform hover:-translate-y-1 duration-300 h-full flex flex-col">
                <CardHeader className="p-6">
                  <Award className="h-10 w-10 mx-auto mb-4 text-lavender" aria-hidden="true" /> {/* Lavender icon */}
                  <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                </CardHeader>
                <CardContent className="pb-6 px-6 flex-grow">
                  <p className="text-sm text-muted-foreground">{award.issuer}</p>
                </CardContent>
                 {/* Use lavender gradient */}
                 <div className="h-1 bg-gradient-to-r from-transparent via-lavender/50 to-transparent mt-auto" aria-hidden="true"></div>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
