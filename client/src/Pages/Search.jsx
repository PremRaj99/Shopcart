import { Button, Dropdown } from "flowbite-react";
import React from "react";
import ItemCard from "../Components/ItemCard";
import Middle from "../Components/Middle";
import { FaChevronRight } from "react-icons/fa6";

export default function Search() {
  return (
    <div>
      {/* hero section */}
      <div className="px-20">
        <div className="flex items-center space-x-5 justify-center bg-orange-100 overflow-hidden">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-green-950">
              Grab Upto 50% Off On <br /> Selected Headphone
            </h1>
            <Button color="success" size="lg" pill>
              Buy Now
            </Button>
          </div>
          <img
            src="/heroModel.png"
            alt="hero image"
            className="object-cover h-72"
          />
        </div>
      </div>

      {/* Headphone for you */}

      <div className="flex px-20 py-10 space-x-2 text-red-500 justify-start w-[95vw] relative">
        <Dropdown as="div" color="gray" label="Headphone Type" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown as="div" color="gray" label="Price" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown as="div" color="gray" label="Review" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown as="div" color="gray" label="Color" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown as="div" color="gray" label="Material" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown as="div" color="gray" label="Offer" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Dropdown as="div" color="gray" label="All Filters" pill size="xs">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <div className="right-0 absolute">
          <Dropdown as="div" color="gray" label="Sort by" pill size="xs">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="px-20">
        <h2 className="font-bold text-3xl">Headphone For You!</h2>
      </div>

      <div className="px-20 py-10 flex flex-wrap space-x-2">
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
