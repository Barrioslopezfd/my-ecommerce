import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import Header from "@/components/navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H&M",
  description: "You are on the H&M page",
  // icons: {
  //   icon: [
  //     {
  //       url: "/favicon_io/favicon-32x32.png",
  //       sizes: "32x32",
  //       type: "image/png",
  //     },
  //     {
  //       url: "/favicon_io/favicon-16x16.png",
  //       sizes: "16x16",
  //       type: "image/png",
  //     },
  //   ],
  //   apple: {
  //     url: "favicon_io/apple-touch-icon.png",
  //     sizes: "180x180",
  //   },
  // },
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
