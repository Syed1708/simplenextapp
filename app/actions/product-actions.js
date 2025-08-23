"use server"

import { Product } from "@/models/Product"
import { createProduct } from "@/queries/product-queries"
import { dbConnect } from "@/services/dbConnect"
import { revalidatePath } from "next/cache"

export async function addProductAction(formData) {
  const name = formData.get("name")
  const description = formData.get("description")
  const price = Number(formData.get("price"))

  await createProduct({ name, description, price })
  revalidatePath("/products")
  revalidatePath("/dashboard/products")
}

export async function deleteProductAction(formData) {
  const id = formData.get("id")
  await dbConnect()
  await Product.findByIdAndDelete(id)

  revalidatePath("/products")
  revalidatePath("/dashboard/products")
}
