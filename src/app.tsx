import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Lee Goddard - just another boring personal homepage</Title>
          <Meta charset="UTF-8" />
          <Link rel="icon" type="image/svg+xml" href="vite.svg" />
          <Meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Source+Sans+Pro:wght@400;600&display=swap" />

          <Meta name="author" content="Lee Goddard" />
          <Link rel="canonical" href="https://lee.goddards.space/" />
          <Meta name="description" content="Homepage of Lee Goddard - an Internet application developer specializing in accessible, performant websites and HTML-based Internet applications." />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta name="robots" content="index, follow" />

          <Meta property="og:title" content="Lee Goddard's Homepage" />
          <Meta property="og:description" content="Just another boring personal homepage" />
          <Meta property="og:type" content="website" />
          <Meta property="og:url" content="https://lee.goddards.space/" />
          <Meta property="og:image" content="https://lee.goddards.space/enso.png" />

          <Meta name="twitter:card" content="summary_large_image" />
          <Meta name="twitter:title" content="Lee Goddard - Internet Application Developer" />
          <Meta name="twitter:description"
            content="Homepage of Lee Goddard - an Internet application developer specializing in accessible, performant websites and HTML-based Internet applications." />
          <Meta name="twitter:image" content="https://lee.goddards.space/enso.png" />

          <script type="application/ld+json"
            innerHTML={JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lee Goddard",
              "url": "https://lee.goddards.space",
              "image": "https://lee.goddards.space/enso.png",
              "sameAs": [
                "https://www.linkedin.com/in/leegoddard/",
                "https://github.com/leegee",
                "mailto:cv@lee.goddards.space"
              ],
              "jobTitle": "Internet Application and Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Lee Goddard is an Internet application and web developer and designer specializing in accessible, performant websites, front-end and back-end.",
              "email": "cv@lee.goddards.space",
              "hasPart": {
                "@type": "DigitalDocument",
                "name": "Curriculum Vitae",
                "description": "Curriculum Vitae of Lee Goddard, Internet application and web developer specializing in accessible and performant web applications.",
                "encodingFormat": "application/pdf",
                "url": "https://docs.google.com/document/d/1kYjGG3sgrcvg9bCmTGVwVdTApLL5CY1qu-d4royuOm4/export?format=pdf",
                "dateModified": "2025-06-07"
              }
            })}
          />

          <script type="application/ld+json"
            innerHTML={JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lee Goddard's Homepage",
              "url": "https://lee.goddards.space",
              "publisher": {
                "@type": "Person",
                "name": "Lee Goddard"
              }
            })}
          ></script>

          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
