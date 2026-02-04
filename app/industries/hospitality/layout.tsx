import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Workforce Management",
  description:
    "Workforce management designed for hospitality. Role-based scheduling, break compliance, and tip management built for pubs and restaurants.",
  openGraph: {
    title: "Hospitality Workforce Management | Statim Pay",
    description: "Workforce management designed for pubs and restaurants.",
    url: "https://statimpay.vercel.app/industries/hospitality",
  },
};

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
