import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Statim Pay. Book a demo to see how our modular workforce management platform can transform your operations.",
  openGraph: {
    title: "Contact Us | Statim Pay",
    description: "Book a demo to see how our modular workforce management platform can transform your operations.",
    url: "https://statimpay.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
