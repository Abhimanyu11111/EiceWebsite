import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EICE | AI Engineered for Global Enterprise",
  description:
    "AI-powered products and enterprise technology solutions that help businesses automate work, optimise operations, and scale with confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
