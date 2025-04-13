
import React, {useEffect} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {BookOpen, Calendar, Clock, Construction, User} from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import {useLocation} from "react-router-dom";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const Blog = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Sample blog posts data
  const blogPosts = [
  ];

  return (
    <>
      <main className="pt-20">
        {/* Blog Header */}
        <section className="py-12 md:py-16 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 primary-gradient">
                Technical Blog
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Insights and articles about computer engineering, software development, and emerging technologies.
              </p>
              {blogPosts.length == 0 &&
                  <Alert className="mb-6 mt-6 border-amber-500/30 bg-amber-500/10">
                    <Construction className="h-5 w-5 text-amber-500" />
                    <AlertTitle className="text-amber-500">Under Development</AlertTitle>
                    <AlertDescription>
                      This section is currently being updated with more award details. Check back soon for a complete list of awards and recognitions.
                    </AlertDescription>
                  </Alert>
              }
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              { blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 group">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <User className="h-3.5 w-3.5" />
                      {post.author} in <span className="text-primary">{post.category}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="gap-1 p-0 h-auto group-hover:text-primary transition-colors">
                      <BookOpen className="h-4 w-4" />
                      <span>Read Article</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {blogPosts.length > 0 &&
                <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#"/>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#"/>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>}
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
