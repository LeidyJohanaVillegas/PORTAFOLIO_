import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Smartphone, Server, Users, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web Frontend",
    description: "Creación de interfaces modernas y responsivas con React, Next.js y las últimas tecnologías web.",
    features: ["HTML & CSS","React & Next.js", "Tailwind CSS", "Responsive Design"],
    // price: "Desde $800",
    popular: false,
  },
  {
    icon: Server,
    title: "Desarrollo Backend",
    description:
      "APIs robustas, bases de datos optimizadas y arquitecturas escalables para aplicaciones empresariales.",
    features: ["Node.js & Python", "APIs RESTful", "Bases de datos", "Microservicios"],
    // price: "Desde $1200",
    popular: false,
  },
  {
    icon: Smartphone,
    title: "Aplicaciones full-stack",
    description: "Desarrollo de apps nativas y multiplataforma con React Native y tecnologías híbridas.",
    features: ["React Native", "Apps híbridas", "UI/UX", "Integración APIs"],
    // price: "Desde $1500",
    popular: false,
  },
  // {
  //   icon: Database,
  //   title: "Bases de Datos",
  //   description: "Diseño, optimización y administración de bases de datos SQL y NoSQL para máximo rendimiento.",
  //   features: ["PostgreSQL & MongoDB", "Optimización de queries", "Migraciones", "Backup & Recovery"],
  //   price: "Desde $600",
  //   popular: false,
  // },
  // {
  //   icon: Code,
  //   title: "Consultoría Técnica",
  //   description: "Auditorías de código, arquitectura de software y mentoría técnica para equipos de desarrollo.",
  //   features: ["Code review", "Arquitectura de software", "Mejores prácticas", "Mentoría técnica"],
  //   price: "Desde $100/hora",
  //   popular: false,
  // },
  // {
  //   icon: Users,
  //   title: "Desarrollo Full-Stack",
  //   description: "Soluciones completas desde el frontend hasta el backend, incluyendo despliegue y mantenimiento.",
  //   features: ["Desarrollo completo", "DevOps básico", "Testing", "Mantenimiento"],
  //   price: "Desde $2000",
  //   popular: false,
  // },
]

const skills = [
  { name: "JavaScript/TypeScript", level: 75 },
  { name: "React & Next.js", level: 62 },
  { name: "Node.js", level: 68 },
  { name: "Python", level: 85 },
  { name: "PostgreSQL", level: 70 },
  { name: "Git & GitHub", level: 75 },
  { name: "C#", level: 80 },
  { name: ".Net", level: 65 },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Mis Servicios
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">¿Qué puedo desarrollar para ti?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrezco soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative group hover:shadow-lg transition-all duration-300 ${
                  service.popular ? "ring-2 ring-primary/20 bg-primary/5" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">Más Popular</Badge>
                )}

                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {/* <div className="text-right">
                      <div className="text-sm text-muted-foreground">Desde</div>
                      <div className="font-semibold text-primary">{service.price}</div>
                    </div> */}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={service.popular ? "default" : "outline"}
                    className="w-full group-hover:translate-y-0 transition-transform"
                  >
                    Solicitar cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Section */}
        <div className="bg-card rounded-2xl p-8 shadow-sm">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl font-bold">Mis Habilidades Técnicas</h3>
            <p className="text-muted-foreground">
              Dominio de las tecnologías más demandadas en el desarrollo de software moderno
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold">¿Tienes un proyecto en mente?</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Conversemos sobre cómo puedo ayudarte a desarrollar la solución tecnológica que necesitas
          </p>
          <Button size="lg" className="group">
            Contáctame
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
