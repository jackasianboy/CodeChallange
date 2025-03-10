"use client";
import { useState } from "react";
import Image from "next/image";
import ProductOverview from "./modals/ProductOverview";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ProductProps {
  isServices: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wild West Boots",
    description:
      "Boots klasik dengan desain elegan dan ketahanan tinggi untuk petualangan sejati.",
    price: "4.999.000",
    image: "/assets/products/product 8.jpeg",
  },
  {
    id: 2,
    name: "Rustic Leather Boots",
    description:
      "Sepatu kulit premium dengan sentuhan rustic yang cocok untuk gaya kasual maupun formal.",
    price: "4.499.000",
    image: "/assets/products/product 12.jpeg",
  },
  {
    id: 3,
    name: "Nomad Trail Boots",
    description:
      "Didesain untuk kenyamanan diberbagai medan dengan bahan berkualitas tinggi.",
    price: "5.499.000",
    image: "/assets/products/product 13.jpeg",
  },
  {
    id: 4,
    name: "Cowboy Boots",
    description:
      "Kombinasi sempurna antara gaya tradisional cowboy dan kenyamanan modern.",
    price: "3.999.000",
    image: "/assets/products/product 10.jpeg",
  },
  {
    id: 5,
    name: "Rodeo Rider Boots",
    description:
      "Dibuat dengan kulit asli berkualitas tinggi dan dirancang untuk menampilkan kesan maskulin yang kuat.",
    price: "4.799.000",
    image: "/assets/products/product 14.jpeg",
  },
  {
    id: 6,
    name: "Urban Outlaw Boots",
    description:
      "Boots modern dengan gaya klasik yang memberikan kesan gagah dan pemberani.",
    price: "4.299.000",
    image: "/assets/products/product 15.jpeg",
  },
  {
    id: 7,
    name: "Trailblazer Boots",
    description:
      "Dirancang untuk perjalanan panjang dengan bahan anti air dan kenyamanan maksimal.",
    price: "5.199.000",
    image: "/assets/products/product 16.jpeg",
  },
  {
    id: 8,
    name: "Vintage Western Boots",
    description:
      "Boots dengan desain klasik ala koboi zaman dulu, memberikan kesan retro nan elegan.",
    price: "4.699.000",
    image: "/assets/products/product 17.jpeg",
  },
];

const Product = ({ isServices }: ProductProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const displayedProducts = isServices ? products : products.slice(0, 4);

  return (
    <section className="p-6 md:p-16">
      <h2
        className="text-3xl md:text-4xl font-bold text-[#FFF5E4] text-center mb-8"
        style={{ fontFamily: "Blackriver" }}
      >
        {isServices ? "Our Products" : "Best Seller Products"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFF5E4] p-4 rounded-lg shadow-lg text-center"
          >
            <div className="w-full h-64 relative aspect-w-1 aspect-h-1">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h3
              className="whitespace-nowrap text-xl font-semibold text-gray-900 mt-4"
              style={{ fontFamily: "Blackriver" }}
            >
              {product.name}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{product.description}</p>
            <button
              className="mt-6 px-6 py-1.5 text-md rounded-lg font-bold tracking-wider text-amber-100 bg-amber-800 border-2 border-amber-900 shadow-lg transition-all duration-300 ease-in-out hover:bg-transparent hover:text-amber-900"
              onClick={() => setSelectedProduct(product)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Tampilkan Modal jika ada produk yang dipilih */}
      {selectedProduct && (
        <ProductOverview
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Product;
