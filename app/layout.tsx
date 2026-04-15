import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RENOA | Desarrollo Web Profesional en Guatemala — Sitios que Atraen Clientes',
  description: 'Creamos sitios web profesionales para negocios en Guatemala. Dominio, hosting y SEO incluidos. Tu sitio listo en 7 días. Pago único desde Q2,500.',
  keywords: ['desarrollo web guatemala', 'sitio web profesional', 'pagina web para restaurantes guatemala', 'diseño web guatemala', 'sitio web pago unico', 'RENOA'],
  metadataBase: new URL('https://renoa.tech'),
  authors: [{ name: 'RENOA' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://renoa.tech',
  },
  openGraph: {
    title: 'RENOA | Desarrollo Web Profesional en Guatemala — Sitios que Atraen Clientes',
    description: 'Creamos sitios web profesionales para negocios en Guatemala. Dominio, hosting y SEO incluidos. Tu sitio listo en 7 días. Pago único desde Q2,500.',
    url: 'https://renoa.tech',
    siteName: 'RENOA',
    locale: 'es_GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "RENOA",
              "description": "Desarrollo web profesional para negocios en Guatemala",
              "url": "https://renoa.tech",
              "telephone": "+50242945544",
              "email": "contacto@renoa.tech",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GT",
                "addressLocality": "Guatemala",
              },
              "priceRange": "Q2,500 - Q8,000",
              "areaServed": {
                "@type": "Country",
                "name": "Guatemala",
              },
              "serviceType": ["Desarrollo Web", "Diseño Web", "SEO", "Sitios Web Profesionales"],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00",
              },
            }),
          }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
