import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import TestimonialCarousel from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";



const categories = [
  "Electronics",
  "Computers",
  "Furniture",
  "Fashion",
  "Accessories",
  "Sports",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts/>

      {/* Categories Section */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          🛍️ Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat} href={`/categories/${cat.toLowerCase()}`}>
              <Card className="cursor-pointer hover:shadow-lg transition">
                <CardContent className="p-6 text-center font-semibold">
                  {cat}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Cta />

      <TestimonialCarousel />

      <StatsSection />

      <Faq />

      <HowItWorks />
    </>
  );
}
