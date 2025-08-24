"use client"

import CountUp from "react-countup"
import { Package, Users, Grid, DollarSign } from "lucide-react"

export default function StatsSection() {
  const stats = [
    { label: "Products", value: 1200, icon: <Package className="h-8 w-8 text-blue-500 mx-auto mb-2" /> },
    { label: "Users", value: 800, icon: <Users className="h-8 w-8 text-green-500 mx-auto mb-2" /> },
    { label: "Categories", value: 25, icon: <Grid className="h-8 w-8 text-yellow-500 mx-auto mb-2" /> },
    { label: "Transactions", value: 5000, icon: <DollarSign className="h-8 w-8 text-purple-500 mx-auto mb-2" /> },
  ]

  return (
    <section className="p-12 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
        <p className="text-gray-500 mt-2">See how our platform has grown over time</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300"
          >
            {s.icon}
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={s.value} duration={2} separator="," />+
            </h3>
            <p className="text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
