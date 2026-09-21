import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somos Tónica | Agencia de Marketing y Comunicación",
  description:
    "Sitio web oficial de Somos Tónica. Agencia boutique de marketing, comunicación estratégica, branding y diseño de experiencias con propósito.",
  keywords: [
    "Somos Tónica",
    "Tónica",
    "Agencia de Marketing",
    "Comunicación Estratégica",
    "Branding",
    "Diseño Editorial",
    "Redes Sociales",
  ],
  authors: [{ name: "Somos Tónica" }],
  openGraph: {
    title: "Somos Tónica | Agencia de Marketing y Comunicación",
    description:
      "Estrategia de comunicación, marketing digital y branding con propósito.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d0e] text-[#f8fafc] font-sans antialiased selection:bg-[#f35b04] selection:text-white">
        {children}
      </body>
    </html>
  );
}

