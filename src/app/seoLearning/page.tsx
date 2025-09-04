// app/seoLearning/page.t
export const metadata = {
    title: "My OG Demo Page",
    description: "This is a demo of Open Graph tags in Next.js",
    openGraph: {
      title: "My OG Demo Page",
      description: "This is a demo of Open Graph tags in Next.js",
      url: "https://your-demo-site.com/seoLearning",
      siteName: "Next.js OG Demo",
      images: [
        {
          url: "https://your-demo-site.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "OG Demo Image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "My OG Demo Page",
      description: "This is a demo of Open Graph tags in Next.js",
      images: ["https://your-demo-site.com/og-image.png"],
    },
  };
  
  export default function SeoLearning() {
    return (
      <main>
        <h1>🚀 Open Graph Demo in Next.js</h1>
        <p>Check OG tags in the page source.</p>
      </main>
    );
  }