"use server";

import { Product } from "@/models/Product";
import { createProduct } from "@/queries/product-queries";
import { dbConnect } from "@/services/dbConnect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProductAction(formData) {
  
    const name = formData.get("name");
    const description = formData.get("description");
    const price = Number(formData.get("price"));
    const category = formData.get("category");
    const thumbnail_image = formData.get("thumbnail_image");
    const large_image = formData.get("large_image");


        // Validate required fields
   if (!name || !description || !price || !category || !thumbnail_image || !large_image) {
      throw new Error("All fields are required");
    }

    await createProduct({ name, description, price, category, thumbnail_image, large_image });


    revalidatePath("/admin/products");
    revalidatePath("/dashboard/admin/products");

    redirect("/dashboard/admin/products?success=1");
    
 
}

export async function updateProductAction(formData) {

    const id = formData.get("id")
    const name = formData.get("name")
    const description = formData.get("description")
    const price = Number(formData.get("price"))
    const category = formData.get("category")
    const thumbnail_image = formData.get("thumbnail_image")
    const large_image = formData.get("large_image")

    await dbConnect()
    await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      category,
      thumbnail_image,
      large_image,
    })

    // Revalidate relevant pages
    revalidatePath("/products")
    revalidatePath("/dashboard/products")

    // Redirect back to dashboard
    redirect("/dashboard/products?updated=1")
}
// get products with search, filter or not
export async function getProducts({
  page = 1,
  limit = 8,
  search = "",
  category = "",
}) {
  await dbConnect();

  const query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (category) {
    query.category = category;
  }

  const skip = (page - 1) * limit;

  const total = await Product.countDocuments(query);
  const products = await Product.find(query).skip(skip).limit(limit);

  return {
    products: JSON.parse(JSON.stringify(products)),
    total,
    page,
    pages: Math.ceil(total / limit),
  };
}



export async function deleteProductAction(formData) {
  const id = formData.get("id");
  await dbConnect();
  await Product.findByIdAndDelete(id);

  revalidatePath("/admin/products");
  revalidatePath("/dashboard/admin/products");

      // Redirect back to dashboard
    // redirect("/dashboard/products?deleted=1")
    // there is a problem with redirect next js specially on try catch
      return { success: true }
}
