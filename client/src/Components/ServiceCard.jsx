import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Button } from "flowbite-react";

export default function ServiceCard() {
  return (
    <div className="p-2 py-3">
      <div className="w-[420px] h-[200px] p-10 pr-28 flex flex-col space-y-4 bg-slate-100 rounded-md rounded-b-none relative">
        <h2 className="font-bold text-3xl">Frequently Asked Questions</h2>
        <p className="text-sm text-gray-700">Updates on safe Shoping in our Stores</p>
      </div>
      <div className="w-[420px] h-[250px] overflow-hidden bg-red-200 rounded-md rounded-t-none relative">
        <img src="/heroModel.png" alt="" />
      </div>
    </div>
  );
}
