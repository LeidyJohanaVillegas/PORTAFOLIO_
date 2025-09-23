import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
/*import { TestimonialsSection } from "@/components/testimonials-section"*/
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
