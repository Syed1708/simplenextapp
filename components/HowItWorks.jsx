import React from 'react'

export default function HowItWorks() {
  return (
<section className="p-8 my-4 bg-gray-50 text-center">
  <h2 className="text-2xl font-bold mb-6">⚡ How It Works</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div>
      <h3 className="font-semibold text-lg mb-2">1️⃣ Sign Up</h3>
      <p>Create an account in seconds.</p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">2️⃣ Add Products</h3>
      <p>Easily upload and manage your products.</p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">3️⃣ Grow</h3>
      <p>Track, sell, and scale your product list.</p>
    </div>
  </div>
</section>
  )
}
