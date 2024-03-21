import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard() {
  return (
    <Link to="/search">
      <div className="w-52 h-72 p-5 text-white rounded-md bg-orange-600 bg-[url('https://www.insaraf.com/cdn/shop/products/5_optimized_5a5ffac4-aeba-4f42-a9df-5e2b08dbea5c.png?v=1641295980')] bg-contain bg-no-repeat bg-bottom">
        <h3 className="text-center font-semibold text-lg">Furniture</h3>
      </div>
    </Link>
  );
}
