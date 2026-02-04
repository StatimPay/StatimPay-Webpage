import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earned Wage Access",
  description: "Give your employees financial flexibility with Earned Wage Access. Reduce turnover, improve engagement, and support your team's wellbeing.",
  openGraph: {
    title: "Earned Wage Access | Statim Pay",
    description: "Give your employees financial flexibility with responsible Earned Wage Access.",
    url: "https://statimpay.vercel.app/products/ewa",
  },
};

export default function EWALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
