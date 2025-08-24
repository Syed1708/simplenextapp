"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "react-toastify"

export default function ProductsToast() {
  const searchParams = useSearchParams()
  const success = searchParams.get("success")
  const udtated = searchParams.get("updated")
  const deleted = searchParams.get("deleted")

  useEffect(() => {
    if (success) {
      toast.success("Product created successfully!")
    }
    if (udtated) {
      toast.success("Product Updated successfully!")
      
    }
    if (deleted) {
      toast.success("Product Deleted successfully!")
      
    }
  }, [success, udtated, deleted])

  return null
}
