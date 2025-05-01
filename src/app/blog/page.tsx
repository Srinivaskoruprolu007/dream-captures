import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

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
    dataAiHint: 'saree silk tradition',
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
    dataAiHint: 'landscape nature hills couple',
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
    dataAiHint: 'wedding ritual tradition water',
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
    dataAiHint: 'wedding decor flowers tradition',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background"> {/* Use theme background */}
       <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            From the Dream Captures Blog
          </h1>
           <p className="font-noto text-muted-foreground text-lg mb-2" lang="te">కథలు, చిట్కాలు, మరియు ప్రేరణ</p>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore insights into Telugu wedding traditions, planning tips, and beautiful moments captured by our lens.
          </p>
       </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <li key={post.id}>
            {/* Use theme card style */}
            <article className="flex flex-col h-full overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-card transform hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-t-xl" aria-label={`Read more about ${post.title}`}>
                <Image
                  src={post.imageUrl}
                  alt="" // Alt handled by the link's aria-label
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110"
                  data-ai-hint={post.dataAiHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                 {/* Category Tag - Use Secondary (Ice Blue) */}
                  <span className="absolute top-3 right-3 bg-secondary/90 text-secondary-foreground text-xs px-2.5 py-1 rounded-full shadow font-medium flex items-center gap-1 z-10">
                      <Tag size={12} aria-hidden="true" /> {post.category}
                  </span>
              </Link>
              {/* Content */}
              <div className="flex flex-col flex-grow p-5">
                  {/* Meta Info - Use Primary (Mint) for icons */}
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <User size={14} className="mr-1.5 text-primary shrink-0" aria-hidden="true" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5 text-primary shrink-0" aria-hidden="true" />
                       <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                    </div>
                  </div>
                 <h2 className="font-serif text-xl leading-snug mb-2 flex-grow">
                     {/* Link uses primary color */}
                    <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">
                    {post.title}
                    </Link>
                 </h2>
                <CardDescription className="text-sm leading-relaxed mb-4">{post.excerpt}</CardDescription>
                {/* Read More Button - Use Primary (Mint) */}
                <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent font-semibold group">
                        <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

       {/* TODO: Add Pagination component if there are many posts */}
       {/* <nav aria-label="Blog Pagination" className="mt-16 flex justify-center">
            <ol className="flex space-x-2">
                <li><Button variant="outline">Previous</Button></li>
                <li><Button variant="default">1</Button></li>
                <li><Button variant="outline">2</Button></li>
                <li><Button variant="outline">Next</Button></li>
            </ol>
       </nav> */}
    </div>
  );
}

// NOTE: Individual blog post pages (e.g., /blog/[slug]) are not created.
// Need a dynamic route [slug]/page.tsx to display full blog posts based on fetched data.
