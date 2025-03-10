"use client";
import { useEffect } from "react";
import Image from "next/image";

const ProductOverview = ({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-opacity-50 z-50">
      <div className="bg-[#FFF5E4] bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-900 text-2xl hover:text-red-500"
        >
          &times;
        </button>

        {/* Product Image */}
        <div className="w-full h-64 relative aspect-w-1 aspect-h-1">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>

        {/* Product Details */}
        <h2
          className="text-2xl font-bold mt-4 text-gray-900"
          style={{ fontFamily: "Blackriver" }}
        >
          {product.name}
        </h2>
        <p className="text-gray-800 mt-2">{product.description}</p>
        <p className="text-lg font-semibold text-amber-950 mt-4">
          Harga: Rp {product.price}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-amber-800 text-white font-bold rounded-lg hover:bg-amber-900 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductOverview;
