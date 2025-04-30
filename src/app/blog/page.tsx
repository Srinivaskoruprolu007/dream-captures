import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'; // Added Tag icon

// Placeholder blog posts with cultural context
const blogPosts = [
  {
    id: 1,
    title: 'Choosing Your Perfect Pattu Saree: A Bride\'s Guide',
    slug: 'telugu-bride-pattu-saree-guide',
    excerpt: 'From Kanjeevaram to Dharmavaram, explore the rich heritage of Telugu bridal sarees and find the one that tells your story...',
    imageUrl: 'https://picsum.photos/seed/saree-blog/800/500',
    author: '[Photographer Name]',
    date: 'November 10, 2023',
    category: 'Bridal Tips',
  },
  {
    id: 2,
    title: 'Top 5 Pre-Wedding Shoot Locations in Andhra Pradesh',
    slug: 'prewedding-locations-andhra',
    excerpt: 'Discover breathtaking backdrops for your pre-wedding photos, from the beaches of Vizag to the hills of Araku Valley.',
    imageUrl: 'https://picsum.photos/seed/araku-blog/800/500',
    author: '[Photographer Name]',
    date: 'October 22, 2023',
    category: 'Locations',
  },
  {
    id: 3,
    title: 'The Significance of Mangalasnanam: Capturing the Sacred Ritual',
    slug: 'mangalasnanam-photography',
    excerpt: 'Understanding the beauty and importance of the Mangalasnanam ceremony and how we approach photographing this intimate tradition.',
    imageUrl: 'https://picsum.photos/seed/mangalsnanam-blog/800/500',
    author: '[Photographer Name]',
    date: 'September 05, 2023',
    category: 'Traditions',
  },
    {
    id: 4,
    title: 'Decor Trends for Modern Telugu Weddings',
    slug: 'telugu-wedding-decor-trends',
    excerpt: 'Get inspired by the latest decor ideas blending traditional motifs like banana leaves and marigolds with contemporary elegance.',
    imageUrl: 'https://picsum.photos/seed/decor-blog/800/500',
    author: '[Photographer Name]',
    date: 'August 18, 2023',
    category: 'Wedding Planning',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
       <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            From the Dream Captures Blog
          </h1>
           <p className="font-telugu text-muted-foreground text-lg mb-2">కథలు, చిట్కాలు, మరియు ప్రేరణ</p>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore insights into Telugu wedding traditions, planning tips, and beautiful moments captured by our lens.
          </p>
       </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-card transform hover:-translate-y-1">
            {/* Image with Link */}
            <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
               {/* Category Tag */}
                <span className="absolute top-3 right-3 bg-secondary/90 text-secondary-foreground text-xs px-2.5 py-1 rounded-full shadow font-medium flex items-center gap-1">
                    <Tag size={12} /> {post.category}
                </span>
            </Link>
            {/* Content */}
            <CardHeader className="p-5">
              <CardTitle className="font-serif text-xl leading-snug mb-2">
                <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-secondary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              {/* Meta Info */}
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <User size={14} className="mr-1.5 text-primary" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1.5 text-primary" />
                  <span>{post.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-5 pb-4">
              <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="px-5 pb-5 pt-0">
               <Button asChild variant="link" className="p-0 h-auto text-secondary hover:text-accent font-semibold group">
                 <Link href={`/blog/${post.slug}`}>
                   Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                 </Link>
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       {/* TODO: Add Pagination component if there are many posts */}
       {/* <div className="mt-16 flex justify-center">
            <Button variant="outline">Load More Posts</Button>
       </div> */}
    </div>
  );
}

// NOTE: Individual blog post pages (e.g., /blog/[slug]) are not created.
// Need a dynamic route [slug]/page.tsx to display full blog posts based on fetched data.
