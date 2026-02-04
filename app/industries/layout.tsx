import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "Workforce management solutions tailored for retail, hospitality, multi-site operations, and franchises. Industry-specific features that understand your business.",
  openGraph: {
    title: "Industries | Statim Pay",
    description: "Workforce management solutions tailored for your industry.",
    url: "https://statimpay.vercel.app/industries",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
