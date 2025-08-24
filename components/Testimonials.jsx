"use client"

import Slider from "react-slick"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { name: "Syed", review: "Super easy to manage my store!" },
  { name: "Amin", review: "Fast and secure, love the dashboard." },
  { name: "Iqbal", review: "Clean UI, makes product management fun." },
  { name: "Musa", review: "The best product dashboard I’ve ever used." },
  { name: "Siddiq", review: "Smooth performance and intuitive features." },
]

// Random avatar helper
const getRandomAvatar = (i) =>
  `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`


export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">💬 What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="px-3">
            <Card className="h-full flex flex-col items-center text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={getRandomAvatar(i)}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="italic mb-3">“{t.review}”</p>
                <p className="font-semibold">- {t.name}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  )
}
