"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="section-padding pt-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Greeting and Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Hola, soy <span className="text-primary">Leidy Johana Niño Villegas</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Desarrolladora Full-Stack 
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Construyo aplicaciones web modernas y soluciones tecnológicas escalables. Especializada en desarrollo
              frontend y backend, APIs robustas y experiencias de usuario excepcionales que impulsan el crecimiento de tu
              negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToProjects} className="group">
                Ver mis proyectos
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </Button>
              <Button variant="ghost" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Aplicaciones desarrolladas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Proyectos entregados</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform -rotate-6"></div>

              {/* Profile image container */}
              <div className="relative bg-card rounded-2xl p-8 shadow-lg">
                <img
                  src="/professional-photo.jpeg"
                  alt="Foto profesional"
                  className="w-full h-auto rounded-xl object-cover"
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
