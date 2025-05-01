import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Camera, MapPin, Users, Heart } from 'lucide-react'; // Used Users for team, Heart for passion
import { cn } from '@/lib/utils';

// Placeholder Icons (Can be replaced with actual team member photos later)
const MemberIcon1 = () => <Users/>;
const MemberIcon2 = () => <Camera/>;
const MemberIcon3 = () => <Heart/>;

const teamMembers = [
  { name: '[Member 1 Name]', role: 'Lead Photographer', introTelugu: 'టీమ్ లీడ్, క్రియేటివ్ విజన్.', icon: MemberIcon1, photoUrl: 'https://picsum.photos/seed/member1/300/300', dataAiHint: 'photographer portrait professional' },
  { name: '[Member 2 Name]', role: 'Cinematographer & Editor', introTelugu: 'సినిమాటిక్ స్టోరీ టెల్లర్.', icon: MemberIcon2, photoUrl: 'https://picsum.photos/seed/member2/300/300', dataAiHint: 'videographer camera professional' },
  { name: '[Member 3 Name]', role: 'Assistant Photographer', introTelugu: 'ప్రతి క్షణం పట్టుకోవడంలో సహాయం.', icon: MemberIcon3, photoUrl: 'https://picsum.photos/seed/member3/300/300', dataAiHint: 'assistant photographer team' },
  // Add more team members as needed
];

// Simplified timeline focused on team's journey
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
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background">
      {/* Team Bio Section */}
      <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-md mx-auto md:mx-0 order-last md:order-first rounded-lg overflow-hidden shadow-xl border-4 border-secondary/20">
          {/* Team Photo or Collage */}
          <Image
            src="https://picsum.photos/seed/team-photo/800/800"
            alt="Dream Captures Team"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-105"
            data-ai-hint="photography team group photo"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>
        </div>
        <div className="animate-fade-in-slow">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Meet the Dream Captures Crew
          </h1>
           <p className="text-lg font-noto text-secondary mb-4">మా టీమ్ గురించి తెలుసుకోండి.</p>
           <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-noto">
              డ్రీమ్ క్యాప్చర్స్ అనేది ఆంధ్రప్రదేశ్‌లో ఉన్న యువ ఫోటోగ్రాఫర్ల టీమ్. మేము పెళ్లిళ్లు, పార్టీలు, మరియు ఎన్నో అందమైన క్షణాలను బంధించడంలో నిపుణులం.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Hello! We are Dream Captures, a collective of young, energetic photographers based in the heart of Andhra Pradesh. Our passion is freezing moments in time, telling stories through vibrant images from weddings, lively parties, creative model shoots, and breathtaking outdoor sessions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that every event has a unique story, and our collaborative approach ensures we capture the essence of your celebration from multiple perspectives. We combine technical skill with a friendly attitude to make your photography experience enjoyable and memorable.
          </p>
            <div className="flex items-center mt-6 text-muted-foreground text-sm">
                <MapPin size={16} className="mr-2 text-primary" /> Based in [Your City], Andhra Pradesh - Available Statewide
            </div>
        </div>
      </section>

       {/* Meet the Team Section */}
       <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">Our Talented Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-md hover:shadow-lg transition-shadow border border-border rounded-lg overflow-hidden bg-card transform hover:-translate-y-1 duration-300">
                <CardHeader className="p-0 relative">
                   <div className="aspect-square overflow-hidden">
                      <Image
                         src={member.photoUrl}
                         alt={member.name}
                         layout="fill"
                         objectFit="cover"
                         className="transition-transform duration-500 hover:scale-110"
                         data-ai-hint={member.dataAiHint}
                      />
                   </div>
                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                      <CardTitle className="text-lg font-semibold text-white">{member.name}</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground font-noto">{member.introTelugu}</p>
                </CardContent>
              </Card>
            ))}
          </div>
       </section>


      {/* Simplified Journey/Timeline Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-foreground">Our Journey Together</h2>
         <p className="font-noto text-center text-muted-foreground mb-12 -mt-8">ఒక టీమ్‌గా మా ప్రయాణం.</p>
        <div className="relative max-w-3xl mx-auto before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-secondary/20 before:via-secondary/50 before:to-secondary/20 md:before:mx-auto md:before:left-0 md:before:right-0">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative pl-12 md:pl-0 md:flex md:justify-between md:items-center w-full mb-8 last:mb-0">
               <div className={cn("md:w-5/12", index % 2 === 0 ? "md:order-3" : "")}></div>
                <div className={cn(
                  "absolute left-5 md:left-1/2 top-1 z-10 transform -translate-x-1/2 flex items-center justify-center",
                  )}>
                <div className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg border-2 border-background">
                  {/* Simple icon for timeline */}
                  <Camera size={18} />
                </div>
              </div>
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
         <Heart className="h-10 w-10 mx-auto mb-4 text-secondary" />
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Our Mission</h2>
         <p className="font-noto text-muted-foreground mb-6 max-w-3xl mx-auto">మా లక్ష్యం</p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           To capture the authentic joy and vibrant spirit of your special occasions, creating beautiful, lasting memories with a fresh, modern perspective rooted in Andhra's culture.
           <br/>
           <span className="font-noto">(మీ ప్రత్యేక సందర్భాలలో సహజమైన ఆనందాన్ని మరియు ఉత్సాహాన్ని బంధించడం మా లక్ష్యం.)</span>
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
               <div className="h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
