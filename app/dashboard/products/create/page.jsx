import { addProductAction } from "@/app/actions/product-actions";
import { Button } from "@/components/ui/button";
import { Sbutton } from "../_components/Sbutton";
const categories = [
  "Electronics",
  "Computers",
  "Furniture",
  "Fashion",
  "Accessories",
  "Sports",
];

export default function CreateProductPage() {
  return (
<div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
  <h1 className="text-2xl font-bold mb-6">Create Product</h1>

  <form action={addProductAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name */}
    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>

    {/* Price */}
    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Price</label>
      <input
        type="number"
        step="0.01"
        name="price"
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>

    {/* Category */}
    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Category</label>
      <select
        name="category"
        required
        className="w-full border rounded px-3 py-2"
        defaultValue=""
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>

    {/* Thumbnail Image */}
    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Thumbnail Image URL</label>
      <input
        type="url"
        name="thumbnail_image"
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>

    {/* Description (spans full width) */}
    <div className="flex flex-col md:col-span-2">
      <label className="block text-sm font-medium mb-1">Description</label>
      <textarea
        name="description"
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>

    {/* Large Image URL (spans full width) */}
    <div className="flex flex-col md:col-span-2">
      <label className="block text-sm font-medium mb-1">Large Image URL</label>
      <input
        type="url"
        name="large_image"
        required
        className="w-full border rounded px-3 py-2"
      />
    </div>

    {/* Submit button (spans full width, right-aligned) */}
    <div className="md:col-span-2 flex justify-end">
      <Button type="submit">Create Product</Button>
      
       {/* <Sbutton type="submit"/> */}
    </div>
  </form>
</div>

  );
}
