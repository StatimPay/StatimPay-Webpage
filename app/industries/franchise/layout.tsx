import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Workforce Management",
  description:
    "Built for franchise operations. Complete data separation, franchisee autonomy, and franchisor oversight in one platform.",
  openGraph: {
    title: "Franchise Workforce Management | Statim Pay",
    description:
      "Built for franchise operations with complete data separation and autonomy.",
    url: "https://statimpay.vercel.app/industries/franchise",
  },
};

export default function FranchiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
