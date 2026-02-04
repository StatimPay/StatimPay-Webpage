import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Site Workforce Management",
  description: "Centralized control with site-level autonomy. Manage workforce across multiple locations with unified policies and cross-location reporting.",
  openGraph: {
    title: "Multi-Site Workforce Management | Statim Pay",
    description: "Centralized control with site-level autonomy for multi-location businesses.",
    url: "https://statimpay.vercel.app/industries/multisite",
  },
};

export default function MultisiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
