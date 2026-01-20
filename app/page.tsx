import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Open Source Innovation
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Papercloudtech: Building the future through{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  open collaboration
                </span>
              </h1>
              
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                We create innovative, production-ready open-source solutions that
                empower developers and organizations worldwide to build better software.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="gap-2 text-base" asChild>
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
                  <a
                    href="https://github.com/papercloudtech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 className="h-5 w-5" />
                    Explore GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
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
                  <a href="#contact">Get in Touch</a>
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
