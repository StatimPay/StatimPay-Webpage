import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Workforce Management",
  description: "Workforce management built for retail. Handle peak seasons, part-time staff, and multi-location scheduling with ease.",
  openGraph: {
    title: "Retail Workforce Management | Statim Pay",
    description: "Workforce management built for retail operations.",
    url: "https://statimpay.vercel.app/industries/retail",
  },
};

export default function RetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
