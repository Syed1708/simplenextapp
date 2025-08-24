import { createProduct, getAllProducts } from "@/queries/product-queries"
import { NextResponse } from "next/server"
<<<<<<< HEAD

=======
import { createProduct, getAllProducts } from "@/queries/product"
>>>>>>> cac2fc87ebca3f3b2a51cecf9d4dbc67bc2e7d36

export async function POST(req) {
  try {
    const body = await req.json()
    const product = await createProduct(body)
    return NextResponse.json({ success: true, product }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const products = await getAllProducts()
    return NextResponse.json({ success: true, products }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
