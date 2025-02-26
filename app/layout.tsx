import type { Metadata } from "next";
import "./globals.css";

import { ScrollArea } from "@/components/ui/scroll-area";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SOV Networks | Bringing Vision To Life",
  description:
    "SOV Networks offers professional IT training, cloud computing, networking, and cybersecurity courses. Boost your career with expert-led training.",
  keywords: [
    "www.sovnetworks.com",
    "professional training",
    "IT courses",
    "technology education",
    "learning platform",
    "Sov Networks",
    "Sovnetwork",
    "Sovnetworks",
    "sov networks training",
    "IT certification",
    "cloud computing training",
    "AWS certification",
    "CCNA courses",
  ],
  openGraph: {
    title: "SOV Networks | Professional IT Training",
    description:
      "Enhance your career with expert-led IT training in cloud computing, networking, and cybersecurity.",
    url: "https://www.sovnetworks.com",
    siteName: "SOV Networks",
    images: [
      {
        url: "https://www.sovnetworks.com/sovlogo.png",
        width: 1200,
        height: 630,
        alt: "SOV Networks Training",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ScrollArea className="h-full w-full">
          {children}
          <Footer />
        </ScrollArea>
      </body>
    </html>
  );
}
