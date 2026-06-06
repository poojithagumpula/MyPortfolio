import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Poojitha Gumpula | Data Analyst & BI Developer",
  description:
    "Aspiring Data Analyst specializing in SQL, Power BI, Tableau, Python, SSIS, and ETL pipelines. Transform raw data into actionable business insights.",
  keywords: [
    "Data Analyst",
    "SQL Developer",
    "Power BI",
    "Tableau",
    "Python",
    "SSIS",
    "ETL",
    "Business Intelligence",
    "Data Visualization",
  ],
  authors: [{ name: "Poojitha Gumpula" }],
  openGraph: {
    title: "Poojitha Gumpula | Data Analyst & BI Developer",
    description:
      "Aspiring Data Analyst specializing in SQL, Power BI, Tableau, and ETL pipelines.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#06b6d4",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-slate-950`}>
      <body className="font-sans antialiased bg-slate-950 text-white">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
