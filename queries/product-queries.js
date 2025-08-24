import { dbConnect } from "@/services/dbConnect"
import { Product } from "@/models/Product"

export async function createProduct(data) {
  await dbConnect()
    const productData = {
    ...data,
    name: data.name.toString().trim(),
    description: data.description.toString().trim(),
    category: data.category.toString().trim(),
    thumbnail_image: data.thumbnail_image.toString().trim(),
    large_image: data.large_image.toString().trim(),
    price: Number(data.price),
  };
  const product = await Product.create(productData)
  return JSON.parse(JSON.stringify(product))
}
export async function getProductById(id) {
  await dbConnect()
  const products = await Product.findById(id).lean()
  // console.log(products);
  
  return JSON.parse(JSON.stringify(products))
}
export async function getFeturedProducts() {
  await dbConnect();


  const products = await Product.find({}).limit(6).lean();

return JSON.parse(JSON.stringify(products))
}
export async function getAllProducts() {
  await dbConnect()
  const products = await Product.find({}).lean()
  // console.log(products);
  
  return JSON.parse(JSON.stringify(products))
}
