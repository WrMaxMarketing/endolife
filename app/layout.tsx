import type { Metadata } from 'next'
import Script from 'next/script'
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
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RCYT944HR4"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RCYT944HR4');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
