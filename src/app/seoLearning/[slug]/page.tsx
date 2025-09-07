// import type { Metadata } from "next";

// // 🔹 Simulated API
// async function getProductById(id: string) {
//   const dummyProducts: Record<
//     string,
//     { name: string; description: string; image: string }
//   > = {
//     "1": {
//       name: "iPhone 15 Pro",
//       description: "The latest iPhone 15 Pro with A17 chip.",
//       image: "https://placehold.co/1200x630?text=iPhone+15+Pro",
//     },
//     "2": {
//       name: "MacBook Air M3",
//       description: "Apple MacBook Air with M3 processor.",
//       image: "https://placehold.co/1200x630?text=MacBook+Air+M3",
//     },
//   };

//   return (
//     dummyProducts[id] || {
//       name: "Unknown Product",
//       description: "No product found with this ID.",
//       image: "https://placehold.co/1200x630?text=Not+Found",
//     }
//   );
// }

// // ✅ Inline param typing (no PageProps conflict)
// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   const product = await getProductById(params.slug);

//   return {
//     title: product.name,
//     description: product.description,
//     openGraph: {
//       title: product.name,
//       description: product.description,
//       url: `https://your-demo-site.com/product/${params.slug}`,
//       images: [
//         {
//           url: product.image,
//           width: 1200,
//           height: 630,
//           alt: product.name,
//         },
//       ],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: product.name,
//       description: product.description,
//       images: [product.image],
//     },
//   };
// }

// // 🔹 Page Component
// export default async function ProductPage(
//   { params }: { params: { slug: string } }
// ) {
//   const product = await getProductById(params.slug);

//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <p className="mt-2 text-lg text-gray-600">{product.description}</p>
//       <img
//         src={product.image}
//         alt={product.name}
//         className="mt-6 rounded-lg"
//       />
//     </main>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page