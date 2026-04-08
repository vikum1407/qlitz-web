export function QlitzSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Qlitz",
          url: "https://qlitz.dev",
          logo: "https://qlitz.dev/logo.png",
          description:
            "Qlitz is redefining how modern engineering teams ensure software quality with AI‑powered automation.",
          sameAs: [
            "https://www.linkedin.com/company/qlitz",
            "https://twitter.com/qlitz" // optional
          ]
        })
      }}
    />
  );
}
