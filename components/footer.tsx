import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Mi Portafolio</h3>
            <p className="text-muted-foreground">
              Creando experiencias que conectan, inspiran y transforman ideas en realidad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces rápidos</h4>
            <div className="grid grid-cols-2 gap-2">
              {/* <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </a> */}
              <a href="#proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
                Proyectos
              </a>
              <a href="#experiencia" className="text-muted-foreground hover:text-foreground transition-colors">
                Experiencia
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Sígueme</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">© {currentYear} Leidy Johana Niño Villegas. Todos los derechos reservados.</p>
          {/*para implementar mas adelante */}
          {/* <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos de Uso
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
