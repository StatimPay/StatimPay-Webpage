import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workforce Management",
  description: "Smart scheduling and time tracking for retail, hospitality, and multi-site businesses. Reduce admin time, stay compliant, and empower your team.",
  openGraph: {
    title: "Workforce Management | Statim Pay",
    description: "Smart scheduling and time tracking designed for your industry.",
    url: "https://statimpay.vercel.app/products/workforce-management",
  },
};

export default function WorkforceManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
