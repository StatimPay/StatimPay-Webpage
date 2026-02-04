import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://statimpay.vercel.app"),
  title: {
    default: "Statim Pay - Modular Workforce Management Platform",
    template: "%s | Statim Pay"
  },
  description: "Scheduling, payroll, and earned wage access in one modular platform. Built for retail, hospitality, and multi-site operators.",
  keywords: ["workforce management", "payroll software", "earned wage access", "employee scheduling", "retail workforce", "hospitality payroll", "multi-site management"],
  authors: [{ name: "Statim Pay" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://statimpay.vercel.app",
    siteName: "Statim Pay",
    title: "Statim Pay - Modular Workforce Management Platform",
    description: "Scheduling, payroll, and earned wage access in one modular platform. Built for retail, hospitality, and multi-site operators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Statim Pay - Workforce Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statim Pay - Modular Workforce Management Platform",
    description: "Scheduling, payroll, and earned wage access in one modular platform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
