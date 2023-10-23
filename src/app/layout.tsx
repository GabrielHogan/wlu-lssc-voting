import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LSSC Polling",
  description: "Lenfest Student Selection Committee Polling System",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
