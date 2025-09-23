"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    /*Example the object */
    id: 1,
    name: "",
    role: "",
    company: "",
    image: "",
    rating: 0,
    text: "",
    project: "",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Testimonios
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Lo que dicen mis clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La satisfacción de mis clientes es mi mayor logro. Aquí algunas de sus experiencias trabajando conmigo
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="h-12 w-12" />
            </div>

            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground relative z-10">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={currentTestimonial.image || "/placeholder.svg"} alt={currentTestimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {currentTestimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                    <div className="text-muted-foreground">
                      {currentTestimonial.role} en {currentTestimonial.company}
                    </div>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {currentTestimonial.project}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <Button variant="outline" size="sm" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
                index === currentIndex ? "ring-2 ring-primary/20 bg-primary/5" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold">¿Quieres ser el próximo cliente satisfecho?</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Únete a la lista de clientes que han transformado su presencia visual
          </p>
          <Button size="lg">Comenzar mi proyecto</Button>
        </div>
      </div>
    </section>
  )
}
