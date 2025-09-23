"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "developjnv@gmail.com",
    description: "Respondo en menos de 36 horas",
    action: "mailto:hola@tuportafolio.com",
    primary: true,
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+57 313 417 1389",
    description: "Lun - Vie, 9:00 AM - 6:00 PM",
    action: "tel:+573134171389",
    primary: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+57 313 417 1389",
    description: "Respuesta rápida",
    action: "https://wa.me/573134171389",
    primary: true,
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Bucaramanga Colombia",
    description: "Disponible para reuniones",
    action: "#",
    primary: false,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "www.linkedin.com/in/leidy-johana-niño-villegas-917565357",
    username: "@LeidyJohanaNiñoVillegas",
  },
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/LeidyJohanaVillegas",
    username: "@LidyJohanaVillegas",
  },
]

const projectTypes = [
  "Diseño Web",
  "Desarrollo Web",
  "Aplicaciones de Escritorio",
  "Mantenimiento y Soporte",
  "Consultoría Creativa",
  "Otro",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    })
  }

  return (
    <section id="contacto" className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Contacto
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Hablemos de tu proyecto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Tienes una idea en mente? Me encantaría conocer más sobre tu proyecto y cómo puedo ayudarte a hacerlo
            realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Cuéntame sobre tu proyecto</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderé en menos de 36 horas con una propuesta personalizada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa u organización</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Tipo de proyecto *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => handleInputChange("projectType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Presupuesto estimado</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Rango de presupuesto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Menos de $500 USD</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000 USD</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500 USD</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000 USD</SelectItem>
                          <SelectItem value="over-5000">Más de $5,000 USD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Tiempo estimado</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="¿Cuándo necesitas el proyecto?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">Lo antes posible</SelectItem>
                        <SelectItem value="1-week">En 1 semana</SelectItem>
                        <SelectItem value="2-weeks">En 2 semanas</SelectItem>
                        <SelectItem value="1-month">En 1 mes</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Descripción del proyecto *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Cuéntame más sobre tu proyecto, objetivos, estilo preferido, referencias, etc."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información de contacto</CardTitle>
                <CardDescription>Otras formas de ponerte en contacto conmigo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <div key={index}>
                      <a
                        href={method.action}
                        className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                          method.primary
                            ? "bg-primary/10 hover:bg-primary/20 text-primary"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <IconComponent className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <div className="font-medium text-sm">{method.title}</div>
                          <div className="text-sm">{method.value}</div>
                          <div className="text-xs opacity-75">{method.description}</div>
                        </div>
                      </a>
                      {index !== contactMethods.length - 1 && <Separator className="mt-4" />}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Disponibilidad</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
                <Separator />
                <div className="text-xs text-muted-foreground">Zona horaria: GMT-6 (Bogotá Colombia)</div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sígueme en redes</CardTitle>
                <CardDescription>Mantente al día con mis últimos trabajos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted transition-colors group"
                      >
                        <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{social.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{social.username}</div>
                        </div>
                        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
