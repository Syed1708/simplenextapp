import React from 'react'

export default function Footer() {
  return (
    <div>            
      <footer className="p-4 bg-gray-100 text-center text-gray-600">
        © {new Date().getFullYear()} ProductApp. All rights reserved.
      </footer>
    </div>
  )
}
