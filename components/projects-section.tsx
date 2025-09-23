"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Filter } from "lucide-react"

const categories = ["Todos", "Web Design", "Backend", "Fullstack"]

const projects = [
  {
    id: 1,
    title: "Versos Vortex",
    description:
      "Desarrollo Visual del prototipo incluyendo logotipo, paleta de colores.",
    category: "web Design",
    image: "/versosvortex-logo.png",
    tags: ["Web Desing"],
    year: "2024",
    client: "Versos Vortex 'TALENTO TECH'",
    role: "Desarrolladora",
    results: "Practicas en desarrollo web",
    links: {
      live: "#",
      github: "#https://github.com/LeidyJohanaVillegas/VersosVortex.git",
    },
  },
  {
    id: 2,
    title: "LMS Plataforma Educativa",
    description: "Moderna, funcional y adaptable, diseñada para instituciones educativas, docentes y estudiantes. Permite estructurar contenidos, forma centralizada y eficiente",
    category: "Backend",
    image: "/LMS-Portal.jpeg",
    tags: ["Backend"],
    year: "2025",
    client: "Campuslands.",
    role: "Desarrolladora Backend",
    results: "Practicas en desarrollo backend",
    links: {
      live: "#",
      video: "#",
    },
  },
  {
    id: 3,
    title: "Arena-Heroes",
    description:
      "Producción y edición de video promocional para empresa de productos ecológicos, incluyendo motion graphics.",
    category: "Fullstack",
    image: "/logomk.png",
    tags: ["Fullstack"],
    year: "2025",
    client: "Campuslands",
    role: "Desarrolladora Fullstack",
    results: "Practicas en desarrollo fullstack",
    links: {
      video: "#",
    },
  },
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "Todos" || project.category === selectedCategory,
  )

  return (
    <section id="proyectos" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto">
            Mi Trabajo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una selección de mis mejores trabajos que demuestran mi experiencia y creatividad
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              <Filter className="mr-2 h-3 w-3" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-2 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {project.links.live && (
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  {project.links.github && (
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.links.video && (
                    <Button size="sm" variant="secondary">
                      <Play className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Project Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cliente:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mi rol:</span>
                    <span className="font-medium">{project.role}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground">Resultado:</span>
                    <p className="font-medium text-primary text-xs">{project.results}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold">¿Te gusta lo que ves?</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estos son solo algunos ejemplos. Tengo muchos más proyectos que mostrar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Ver todos los proyectos</Button>
            <Button variant="outline" size="lg">
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
