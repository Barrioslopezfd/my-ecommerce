import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import Header from "@/components/navbar/Header";
import { Providers } from "@/components/utility/Providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H&M",
  description: "You are on the H&M page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex h-full min-h-screen flex-col items-center antialiased",
          inter.className,
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
