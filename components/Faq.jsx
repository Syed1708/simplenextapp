import React from 'react'

export default function Faq() {
  return (
    <section className="p-8">
  <h2 className="text-2xl font-bold mb-6 text-center">❓ Frequently Asked Questions</h2>
  <div className="space-y-4 max-w-2xl mx-auto">
    <details className="p-4 border rounded">
      <summary className="font-semibold cursor-pointer">Is ProductApp free?</summary>
      <p className="mt-2 text-gray-600">Yes, you can use it for free with basic features.</p>
    </details>
    <details className="p-4 border rounded">
      <summary className="font-semibold cursor-pointer">Can I manage unlimited products?</summary>
      <p className="mt-2 text-gray-600">Yes! You can add as many products as you want.</p>
    </details>
    <details className="p-4 border rounded">
      <summary className="font-semibold cursor-pointer">How secure is my data?</summary>
      <p className="mt-2 text-gray-600">Your data is encrypted and stored securely.</p>
    </details>
  </div>
</section>
  )
}
