"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"

export default function BlogPostClient({ id }: { id: string }) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const blogs = [
    {
      id: 1,
      title: "Best Practices in Hotel Management",
      excerpt: "Learn the latest strategies and techniques for effective hotel management in the modern era.",
      image: "/luxury-hotel-lobby.png",
      author: "Rajesh Kumar",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Management",
      content: `<h2>Introduction to Modern Hotel Management</h2><p>The hospitality industry is evolving rapidly, and hotel management practices must adapt to meet changing guest expectations and market demands.</p><h2>1. Embrace Technology</h2><p>Modern hotel management relies heavily on technology to streamline operations and enhance guest experiences.</p><h2>2. Focus on Guest Experience</h2><p>Guest satisfaction should be at the heart of every decision. Personalization is key.</p>`,
      tags: ["Hotel Management", "Best Practices", "Hospitality"],
      relatedPosts: [2, 3],
    },
    {
      id: 2,
      title: "Tourism Industry Growth in Nepal",
      excerpt: "Comprehensive analysis of tourism trends and opportunities in Nepal's hospitality sector.",
      image: "/tourism-initiative.jpg",
      author: "Sita Sharma",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Industry Insights",
      content: `<h2>Nepal's Tourism Renaissance</h2><p>Nepal's tourism industry is experiencing unprecedented growth.</p>`,
      tags: ["Tourism", "Nepal", "Industry Growth"],
      relatedPosts: [1, 3],
    },
    {
      id: 3,
      title: "Customer Service Excellence in Hospitality",
      excerpt: "Master the art of delivering exceptional customer service that creates loyal guests.",
      image: "/luxury-hotel-restaurant.png",
      author: "Amit Thapa",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "Customer Service",
      content: `<h2>The Foundation of Great Service</h2><p>Exceptional customer service is what sets great hotels apart.</p>`,
      tags: ["Customer Service", "Guest Experience"],
      relatedPosts: [1, 2],
    },
  ]

  const blog = blogs.find(b => b.id === parseInt(id)) || blogs[0]
  const relatedBlogs = blogs.filter(b => blog.relatedPosts.includes(b.id))


  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        <div className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/resources" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={18} /><span>Back to Resources</span>
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">{blog.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2"><User size={16} className="text-primary" /><span>{blog.author}</span></div>
            <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /><span>{blog.date}</span></div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /><span>{blog.readTime}</span></div>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <button onClick={() => setIsBookmarked(!isBookmarked)} className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg font-semibold transition-all ${isBookmarked ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary hover:bg-primary/5'}`}>
              <Bookmark className={isBookmarked ? 'fill-current' : ''} size={18} /><span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Share:</span>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors"><Facebook size={18} className="text-muted-foreground hover:text-primary" /></button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors"><Twitter size={18} className="text-muted-foreground hover:text-primary" /></button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors"><Linkedin size={18} className="text-muted-foreground hover:text-primary" /></button>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blog.content }} style={{ color: 'var(--foreground)' }} />

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
            <span className="text-sm font-semibold text-muted-foreground">Tags:</span>
            {blog.tags.map((tag) => (
              <Link key={tag} href={`/resources?tag=${tag.toLowerCase().replace(' ', '-')}`} className="px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary rounded-full text-sm font-medium transition-colors">{tag}</Link>
            ))}
          </div>

          <div className="bg-card border-2 border-border rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">{blog.author.charAt(0)}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">About {blog.author}</h3>
                <p className="text-muted-foreground mb-4">{blog.author} is a hospitality industry expert with over 15 years of experience in hotel management and operations.</p>
                <Link href="#" className="text-primary hover:underline font-semibold">View all posts by {blog.author} →</Link>
              </div>
            </div>
          </div>

          {relatedBlogs.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.id} href={`/resources/blog/${relatedBlog.id}`} className="group bg-card border-2 border-border hover:border-primary rounded-xl overflow-hidden transition-all duration-300">
                    <div className="relative aspect-video"><Image src={relatedBlog.image} alt={relatedBlog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">{relatedBlog.category}</span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">{relatedBlog.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{relatedBlog.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground"><span>{relatedBlog.date}</span><span>•</span><span>{relatedBlog.readTime}</span></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}