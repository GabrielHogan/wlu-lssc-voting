import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lssc.gabrielhogan.com"),
  title: "W&L Lenfest Student Polling System",
  description:
    "Submit your vote to enter in the raffle and help W&L bring in performers that represent the student body.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lssc.gabrielhogan.com",
    siteName: "W&L Lenfest Student Polling System",
    title: "W&L Lenfest Student Polling System",
    description:
      "Submit your vote to enter in the raffle and help W&L bring in performers that represent the student body.",
    images: [
      {
        url: "https://generalssports.com/images/2020/3/11/Colonnade5.jpg",
        width: 1200,
        height: 630,
        alt: "Washington and Lee University Colonnade",
      },
    ],
  },
  authors: [{ name: "GabrielHogan", url: "https://gabrielhogan.com" }],
  creator: "GabrielHogan",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-8 container mx-auto",
          inter.className
        )}
      >
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
