import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Data Protection",
  description: "Enterprise-grade security for multi-site operators and franchises. Your data stays yours, with complete control over who sees what.",
  openGraph: {
    title: "Security & Data Protection | Statim Pay",
    description: "Enterprise-grade security with data separation, audit trails, and compliance built-in.",
    url: "https://statimpay.vercel.app/security",
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
