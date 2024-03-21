import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import ServiceCard from "../Components/ServiceCard";
import ItemCard from "./ItemCard";

export default function Middle() {
  return (
    <div>
      {/* Weakly Popular Products */}
      <div className="px-20">
        <h2 className="font-bold text-3xl">Weakly Popular Products</h2>
      </div>

      <div className="px-20 py-10 flex flex-nowrap space-x-2 overflow-x-auto">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      {/* Service to Help You Shop */}
      <div className="px-20 pt-20">
        <h2 className="font-bold text-3xl">Service to Help You Shop</h2>
      </div>

      <div className="px-20 p-10 flex flex-nowrap space-x-2">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
