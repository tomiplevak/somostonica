import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Somos Tónica | Estudio de Comunicación & Diseño Editorial",
  description:
    "Sitio web oficial de Somos Tónica. Estrategia de comunicación, identidad editorial y narrativas con pulso propio.",
  keywords: [
    "Somos Tónica",
    "Tónica",
    "Comunicación Estratégica",
    "Diseño Editorial",
    "Branding",
    "Voz de Marca",
    "Narrativas Digitales",
  ],
  authors: [{ name: "Somos Tónica" }],
  openGraph: {
    title: "Somos Tónica | Estudio de Comunicación & Diseño Editorial",
    description:
      "Marcas con pulso propio. Estrategia, identidad editorial y contenido que se lee de verdad.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0b] text-[#f1f3f5] font-sans antialiased selection:bg-[#f35b04] selection:text-white">
        {children}
      </body>
    </html>
  );
}
