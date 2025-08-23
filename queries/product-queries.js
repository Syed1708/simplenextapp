import { dbConnect } from "@/services/dbConnect"
import { Product } from "@/models/Product"

export async function createProduct(data) {
  await dbConnect()
  const product = await Product.create(data)
  return JSON.parse(JSON.stringify(product))
}

export async function getAllProducts() {
  await dbConnect()
  const products = await Product.find({}).lean()
  return JSON.parse(JSON.stringify(products))
}
