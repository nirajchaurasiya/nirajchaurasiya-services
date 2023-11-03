import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Service Page / Explore a wide range of website categories offered by Niraj Chaurasiya's services",
  description:
    "Explore a wide range of website categories offered by Niraj Chaurasiya's services. From web development to design, discover our comprehensive service offerings.",
  keywords: [
    "web development",
    "website design",
    "service categories",
    "Niraj Chaurasiya",
    "website services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
