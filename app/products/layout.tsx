import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Modular workforce management platform. Start with one module, add more when ready. Workforce Management, Payroll, and Earned Wage Access.",
  openGraph: {
    title: "Products | Statim Pay",
    description: "Modular workforce management platform. Start with one module, add more when ready.",
    url: "https://statimpay.vercel.app/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
