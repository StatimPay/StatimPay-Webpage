import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Statim Pay - Modular Workforce Management Platform",
  description: "Scheduling, payroll, and earned wage access in one modular platform. Built for retail, hospitality, and multi-site operators.",
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
