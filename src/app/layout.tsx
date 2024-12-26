import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J. R. Masias' Portfolio",
  description: "Developed and designed by J. R. Masias - 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} antialiased bg-foreground text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
