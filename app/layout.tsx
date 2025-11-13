// app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dra. Ângela Maria Leal – Endo Life Master',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {/* Next.js gera o <head> automaticamente */}
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-52KGHST4'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-52KGHST4');
            `,
          }}
        />
      </head>
      <body>
        {/* Google tag (gtag.js) — agora dentro do <body> */}
        {/* <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-52KGHST4"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-52KGHST4');
            `,
          }}
        /> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52KGHST4"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
