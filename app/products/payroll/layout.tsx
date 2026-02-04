import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll",
  description: "Flexible payroll that adapts to your business. UK-compliant, multi-site ready, and built for retail and hospitality operations.",
  openGraph: {
    title: "Payroll | Statim Pay",
    description: "Flexible payroll that adapts to your business. UK-compliant and multi-site ready.",
    url: "https://statimpay.vercel.app/products/payroll",
  },
};

export default function PayrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
