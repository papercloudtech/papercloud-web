import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/data";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import PapercloudHero from "@/components/ui/papercloud-hero";

export const metadata: Metadata = {
  title: "Papercloudtech - Open Source Innovation Portfolio",
  description: "Explore Papercloudtech's innovative open-source projects. Building the future through open collaboration with cutting-edge solutions in Node.js, Java, Python, and more.",
  keywords: [
    "open source",
    "software development",
    "innovation",
    "collaboration",
    "papercloudtech",
    "SecureChat",
    "E-Seva",
    "Crop Yield AI",
    "web development",
    "portfolio",
  ],
  openGraph: {
    title: "Papercloudtech - Open Source Innovation",
    description: "Building the future through open collaboration",
    type: "website",
    url: "https://papercloudtech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papercloudtech - Open Source Innovation",
    description: "Building the future through open collaboration",
  },
};

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  // Transform projects data for HoverEffect component
  const projectsForHover = projects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.githubUrl,
    tags: project.tags,
    category: project.category,
  }));

  const featuredProjectsForHover = featuredProjects.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.githubUrl,
    tags: project.tags,
    category: project.category,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <PapercloudHero />

        {/* Featured Projects Section */}
        <section id="projects" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our most impactful open-source projects that are making a
                difference in the developer community.
              </p>
            </div>

            <HoverEffect items={featuredProjectsForHover} />
          </div>
        </section>

        {/* All Projects Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                All Projects
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our complete collection of open-source projects across various
                technologies and domains.
              </p>
            </div>

            <HoverEffect items={projectsForHover} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to collaborate?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our community of developers and contributors. Let's build
                something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="gap-2 text-base" asChild>
                  <a
                    href="https://github.com/papercloudtech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Contributing
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
