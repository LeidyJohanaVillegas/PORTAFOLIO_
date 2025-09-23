import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Award, Download, ExternalLink, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Desarrolladora fullstack",
    company: "Proyecto formativo 'Campuslands'",
    location: "Bucaramanga, Colombia",
    period: "2025",
    type: "Tiempo completo",
    description:
      "LMS-PORTAL es una plataforma de gestión del aprendizaje (LMS) moderna, funcional y adaptable, diseñada para instituciones educativas, docentes y estudiantes. Permite estructurar contenidos, facilitar la interacción pedagógica y monitorear el progreso académico de forma centralizada y eficiente..",
    achievements: [
      "Se elaboro en equipo de 4 personas",
      "se desarrollo en JavaScript, HTML, Tailwinds CSS, VITE, Gitflow, Netlify, deployed",
      "Se implemento un diseño responsivo",
      "Se aplicaron buenas prácticas de desarrollo y control de versiones",
    ],
    skills: ["Gestión de proyectos"],
  },
  {
    title: "Arena-Heroes",
    company: "Proyecto formativo 'Campuslands'",
    location: "Bucaramanga, Colombia",
    period: "2025",
    type: "Freelance",
    description:
      "Arena Heroes es una aplicación web moderna construida con Vite, JavaScript y TailwindCSS. El proyecto implementa una arquitectura modular y componentes reutilizables para crear una experiencia de usuario fluida, atractiva y responsiva, inspirada en los clásicos juegos de combate.",
    achievements: [
      "Desarrollo en equipo de 4 personas",
      "Tecnologias utilizadas VITE, JavaScript, Tailwinds CSS, HTML, CSS",
      "Manejo de control de versiones con GitHub",
    ],
    skills: ["Diseño Digital"],
  },
  {
    title: "Versos vortex",
    company: "Proyecto formativo 'Talento Tech'",
    location: "Bucaramanga, Colombia",
    period: "2024",
    type: "Tiempo completo",
    description:
      "Apoyo en proyectos de diseño. Desarrollo de habilidades en producción y trabajo en equipo multidisciplinario.",
    achievements: [
      "Se realizo el proyecto de manera rapida y eficiente"
    ],
    skills: ["Trabajo en Equipo"],
  },
]

const education = [
  {
    degree: "Técnico en Sistemas",
    institution: "Centro de servicios empresariales y turisticos - SENA",
    location: "Bucaramanga, Colombia",
    period: "2017 - 2018",
    description:
      "Técnico en sistemas con habilidades especificas en software y hardware.",
    honors: "Titulo en tecnico en sistemas",
  },
  {
    degree: "Tecnóloga en Análisis y Desarrollo de Software",
    institution: "Centro de atención al sector agropecuario - SENA",
    location: "Piedecuesta, Colombia",
    period: "2024 - 2026",
    description: "Titulo que se adquiere es como tecnologo en analisis y desarrollo de software.",
    honors: "Titulo en tecnologa en analisis y desarrollo de software",
  },
  {
    degree: "Técnico en Desarrollo de Software",
    institution: "Campuslands",
    location: "FloridaBlanca, Colombia",
    period: "2025",
    description: "Aprendizaje que enriquece a nivel personal y profecional con mejoras en areas especificas como el ser,ingles y software.",
    honors: "Titulo en técnico en desarrollo de software",
  },
]

const certifications = [
  {
    name: "Técnico en Desarrollo de Software",
    issuer: "Campuslands",
    year: "2025",
  },
  {
    name: "Técnico en Sistemas",
    issuer: "SENA",
    year: "2018",
  },
  {
    name: "Tecnóloga en Análisis y Desarrollo de Software",
    issuer: "SENA",
    year: "2025",
  },
]

// const awards = [
//   {
//     title: "Mejor Campaña Digital del Año",
//     organization: "Asociación de Marketing Digital México",
//     year: "2023",
//     description: "Reconocimiento por la campaña 'EcoVerde' que generó impacto social y comercial.",
//   },
//   {
//     title: "Diseñador Emergente",
//     organization: "Festival de Creatividad Latina",
//     year: "2022",
//     description: "Premio por innovación en diseño de identidad visual para startups.",
//   },
//   {
//     title: "Mejor Proyecto Estudiantil",
//     organization: "Universidad de Artes Visuales",
//     year: "2019",
//     description: "Reconocimiento por tesis sobre diseño responsivo en redes sociales.",
//   },
// ]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Mi Trayectoria
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Experiencia & Formación</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un recorrido por mi desarrollo profesional y los logros que han marcado mi carrera
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Experiencia Profesional</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="relative">
                    {/* Timeline connector */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10" />
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Logros principales:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Formación Académica</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          {edu.honors && (
                            <Badge variant="default" className="text-xs">
                              {edu.honors}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CV Download */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Descargar CV</CardTitle>
                <CardDescription>Obtén mi currículum completo en formato PDF</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV (PDF)
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver CV Online
                </Button>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certificaciones</CardTitle>
                <CardDescription>Credenciales profesionales verificadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>
                        {cert.issuer} • {cert.year}
                      </div>
                    </div>
                    {index !== certifications.length - 1 && <Separator className="mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Awards
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Reconocimientos</span>
                </CardTitle>
                <CardDescription>Premios y distinciones recibidas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm">{award.title}</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>
                        {award.organization} • {award.year}
                      </div>
                      <p className="leading-relaxed">{award.description}</p>
                    </div>
                    {index !== awards.length - 1 && <Separator className="mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  )
}
