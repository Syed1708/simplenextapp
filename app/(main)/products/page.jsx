// app/products/page.jsx
export default async function ProductsPage() {
  // Simulate slow fetch
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <p>This page waits 2 seconds before rendering.</p>
    </div>
  )
}
