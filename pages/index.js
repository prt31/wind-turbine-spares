import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

const products = [
  { id: 1, name: "Blade Bearing", price: "$1,200", image: "/blade-bearing.jpg" },
  { id: 2, name: "Gearbox", price: "$5,500", image: "/gearbox.jpg" },
  { id: 3, name: "Generator", price: "$8,000", image: "/generator.jpg" },
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <nav className="flex justify-between py-4">
        <h1 className="text-2xl font-bold">Wind Turbine Spare Parts</h1>
        <div>
          <Link href="/contact" className="mr-4">Contact</Link>
          <Link href="/quote">Request a Quote</Link>
        </div>
      </nav>
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <CardContent>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <Button className="mt-4 w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
