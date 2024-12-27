import type { Metadata } from "next";
import { quicksand } from "@/lib/fonts";
import "./globals.css";
import NavHandler from "@/components/navHandler";

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
        className={`${quicksand.className} antialiased bg-foreground text-primary`}
      >
        <NavHandler />
        {children}
      </body>
    </html>
  );
}
