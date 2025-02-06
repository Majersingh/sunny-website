import type { Metadata } from 'next'
import './globals.css'

import { ScrollArea } from "@/components/ui/scroll-area"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'SOV Networks',
  description: 'Bringing Vision To Life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
         <Nav />
          <ScrollArea className="h-full w-full">
            {children}
            <Footer/>
          </ScrollArea>
        </body>
    </html>
  )
}
