// app/products/[id]/page.tsx
export const dynamic = "force-static"; // ✅ ensures SSG

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id); // ✅ runs at build time

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </main>
  );
}
