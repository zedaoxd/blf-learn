import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(exo.className)}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
