import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dra. Ângela Maria Leal - Endo Life Master',
  description: 'Dra. Ângela Maria Leal - Endo Life Master',
  generator: 'Dra. Ângela Maria Leal - Endo Life Master',
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
