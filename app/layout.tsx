import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
