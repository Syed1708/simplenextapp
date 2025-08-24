import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Cta() {
  return (
          <section className="p-8 bg-blue-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Create your first product today and start managing easily.</p>
            <Link href="/dashboard/products/create">
              <Button variant="secondary">Create Product</Button>
            </Link>
          </section>
  )
}
