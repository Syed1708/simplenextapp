"use client"
import { useState } from "react"
import { deleteProductAction } from "@/app/actions/product-actions"
import { Button } from "@/components/ui/button"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

export default function DeleteButton({ productId }) {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626", // red
      cancelButtonColor: "#6b7280",  // gray
      confirmButtonText: "Yes, delete it!",
    })

    if (!result.isConfirmed) return

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("id", productId)
      await deleteProductAction(formData)

      await MySwal.fire({
        title: "Deleted!",
        text: "Product has been deleted.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      })
    } catch (err) {
      await MySwal.fire({
        title: "Error!",
        text: err.message || "Failed to delete product",
        icon: "error",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleDelete} variant="destructive" size="sm" disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </Button>
  )
}
