"use client"

import { useActionState, startTransition } from "react"
import { Button } from "@/components/ui/button"
import { addProductAction } from "@/app/actions/product-actions"
import { useState } from "react"
import Loading from "@/app/dashboard/loading"

export function Sbutton({ formData }) {
  const [state, action, pending] = useActionState(addProductAction, false)
  const [error, setError] = useState("")

  const handleClick = () => {
    // Basic validation
    if (
      !formData.get("name") ||
      !formData.get("description") ||
      !formData.get("price") ||
      !formData.get("category") ||
      !formData.get("thumbnail_image") ||
      !formData.get("large_image")
    ) {
      setError("All fields are required")
      return
    }

    setError("")
    startTransition(action)
  }

  return (
    <>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <Button onClick={handleClick}>
        {pending ? <Loading /> : "Create Product"}
      </Button>
    </>
  )
}
