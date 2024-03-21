import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ItemCard() {
  return (
    <div className="group cursor-pointer">
      <div className="p-2 py-3 rounded-md group-hover:bg-gray-50 overflow-hidden">
        <div className="w-[300px] h-[340px] bg-slate-100 group-hover:scale-[106%] rounded-md relative">
          <div className="absolute right-4 top-4 bg-white rounded-full z-10 p-2">
            <FaRegHeart className="cursor-pointer" />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/heroModel.png"
              className="object-cover group-hover:scale-110 transition-all duration-100"
              alt=""
            />
          </div>
        </div>

        <div className="flex w-[300px] justify-between font-bold font-sans my-2">
          <h3 className="text-lg">Wireless Earbuds, IPX8</h3>
          <h3 className="text-xs flex items-start">
            $ <span className="text-lg">89</span>.00
          </h3>
        </div>
        <p className="text-xs font-semibold text-gray-700">
          Organic Cotton, fairtrade certified
        </p>
        <div className="py-2 flex space-x-1 text-green-400 items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />{" "}
          <span className="text-sm font-medium text-gray-600">(121)</span>
        </div>
        <Link to="/product-info">
          <Button
            size="md"
            pill
            color="gray"
            className="border-2 border-solid border-gray-400 h-9 hover:bg-green-700"
          >
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
}
