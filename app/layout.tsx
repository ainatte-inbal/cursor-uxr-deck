import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Getting Started with Cursor for UX Researchers',
  description: 'A guide to using Cursor and AI tools for UX research workflows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
