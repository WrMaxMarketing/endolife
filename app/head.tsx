// app/head.tsx

export default function Head() {
    return (
      <>
        <title>Dra. Ângela Maria Leal – Endo Life Master</title>
        <meta
          name="description"
          content="Método clínico de emagrecimento Endo Life Master"
        />
  
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TBPJZQSVQV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TBPJZQSVQV');
            `,
          }}
        />
      </>
    )
  }
  