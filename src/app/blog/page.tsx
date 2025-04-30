import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Choosing the Perfect Wedding Venue: A Photographer\'s Perspective',
    slug: 'choosing-wedding-venue',
    excerpt: 'Finding the right venue sets the stage for your big day. Here are tips from a photographer\'s viewpoint on lighting, backdrops, and more...',
    imageUrl: 'https://picsum.photos/seed/blog1/800/500',
    author: '[Photographer Name]',
    date: 'October 26, 2023',
    category: 'Weddings',
  },
  {
    id: 2,
    title: '5 Tips for Amazing Engagement Photos',
    slug: 'engagement-photo-tips',
    excerpt: 'Make your engagement session shine! From choosing outfits to relaxing in front of the camera, these tips will help you get stunning results.',
    imageUrl: 'https://picsum.photos/seed/blog2/800/500',
    author: '[Photographer Name]',
    date: 'September 15, 2023',
    category: 'Tips & Tutorials',
  },
  {
    id: 3,
    title: 'Behind the Scenes: A Day in the Life of a Wedding Photographer',
    slug: 'day-in-the-life',
    excerpt: 'Ever wonder what goes into capturing a wedding day? Follow along for a glimpse into the preparation, shooting, and post-processing.',
    imageUrl: 'https://picsum.photos/seed/blog3/800/500',
    author: '[Photographer Name]',
    date: 'August 01, 2023',
    category: 'Behind the Scenes',
  },
    {
    id: 4,
    title: 'Why Natural Light is a Photographer\'s Best Friend',
    slug: 'natural-light-photography',
    excerpt: 'Exploring the beauty and versatility of natural light and how it elevates portrait and wedding photography.',
    imageUrl: 'https://picsum.photos/seed/blog4/800/500',
    author: '[Photographer Name]',
    date: 'July 10, 2023',
    category: 'Photography Tips',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
        From the Blog
      </h1>
       <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
        Insights, stories, and tips from the world of photography. Explore behind-the-scenes moments and expert advice.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Link href={`/blog/${post.slug}`} className="block relative aspect-video">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <CardHeader>
              <CardTitle className="font-serif text-xl leading-snug mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
               <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold">
                 <Link href={`/blog/${post.slug}`}>
                   Read More <ArrowRight size={16} className="ml-1" />
                 </Link>
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       {/* TODO: Add Pagination component if there are many posts */}
       {/* <div className="mt-16 flex justify-center">
         <Pagination>...</Pagination>
       </div> */}
    </div>
  );
}

// NOTE: Individual blog post pages (e.g., /blog/[slug]) are not created in this step.
// You would typically create a dynamic route [slug]/page.tsx to display full blog posts.
