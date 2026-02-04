import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Built for the people who power businesses. We're on a mission to give retail, hospitality, and multi-site operators the tools they need to manage their workforce with confidence, fairness, and control.",
  openGraph: {
    title: "About Us | Statim Pay",
    description:
      "Built for the people who power businesses. Modern workforce management tools for retail, hospitality, and multi-site operators.",
    url: "https://statimpay.vercel.app/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
