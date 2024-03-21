import { Button } from "flowbite-react";
import React from "react";
import CategoryCard from "../Components/CategoryCard";
import Middle from "../Components/Middle";
import { FaChevronRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <div className="bg-[url('/heroBackground.png')] bg-center bg-no-repeat bg-cover h-[480px] flex items-center justify-center">
        <div className="flex items-center space-x-5 justify-center  overflow-hidden">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-green-950">
              Shoping And <br /> Department Store.
            </h1>
            <p>
              Shoping is a bit of relaxing hobby for me, which <br /> is
              somethings troubling for the bank balance.
            </p>
            <Button color="success" size="lg" pill>
              Learn More
            </Button>
          </div>
          <div className="w-[500px]"></div>
        </div>
      </div>

      {/* Shop our top categories */}
      <div className="px-20 pt-20">
        <h2 className="font-bold text-3xl">Shop Our Top Categories</h2>
      </div>

      <div className="px-20 py-10 flex flex-wrap space-x-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      {/* pagination bar */}
      <div className="px-20 flex justify-center items-center space-x-2 mb-10">
        <span className="w-9 h-9 flex items-center justify-center text-center bg-green-950 rounded-full cursor-pointer text-white">
          <span>1</span>
        </span>
        <span className="w-9 h-9 flex items-center justify-center text-center hover:bg-green-200 text-green-950 rounded-full cursor-pointer bg-gray-200">
          <span>2</span>
        </span>
        <span className="w-9 h-9 flex items-center justify-center text-center hover:bg-green-200 text-green-950 rounded-full cursor-pointer bg-gray-200">
          <span>3</span>
        </span>
        <span className="w-9 h-9 flex items-center justify-center text-center hover:bg-green-200 text-green-950 rounded-full cursor-pointer border-2 border-green-950">
          <FaChevronRight />
        </span>
      </div>
      <Middle />
    </div>
  );
}
