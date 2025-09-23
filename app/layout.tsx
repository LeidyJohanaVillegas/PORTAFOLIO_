import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Mi Portafolio ",
  description:
    "Portafolio profesional con formación como Técnico en Sistemas, Tecnóloga en Análisis y Desarrollo de Software y Técnico en Desarrollo de Software, he adquirido experiencia en el diseño y desarrollo de aplicaciones web y de escritorio, abarcando tanto frontend como backend. Mi preparación me ha permitido fortalecer habilidades en programación, análisis y estructuración de proyectos tecnológicos, creando soluciones que combinan eficiencia técnica con un enfoque práctico y adaptable.",
  keywords: ["portafolio"],
  authors: [{ name: "Leidy Johana Niño Villegas" }],
  openGraph: {
    title: "Portafolio",
    description: "Portafolio Profecional personal",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
