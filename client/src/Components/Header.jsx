import { Dropdown } from "flowbite-react";
import { IoCallOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky top-0 z-20">
      <div className="bg-green-950 text-green-100 flex justify-between mx-auto px-20 text-xs py-3">
        <span className="flex gap-2 justify-center items-center">
          <IoCallOutline /> +916200103129
        </span>
        <span className="flex gap-3">
          <span>Get 50% Off Selected Items</span> | <span>Shop Now</span>
        </span>
        <span className="flex gap-6">
          <Dropdown
            label="Eng"
            dismissOnClick={false}
            size="xs"
            inline
            className="text-xs"
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Dropdown
            label="Location"
            dismissOnClick={false}
            size="xs"
            inline
            className="text-xs"
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </span>
      </div>
      <div className="px-20 bg-white">
        <nav className="flex justify-between items-center py-4 ">
          <Link to="/" className="flex">
            <img
              src="/shopping-cart.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-green-800 text-2xl font-bold dark:text-white">
              Shopcart
            </span>
          </Link>
          <div className="flex space-x-6 font-semibold text-green-950 items-center">
            <Dropdown label="Categories" size="lg" inline as="div">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Link to="/">Home</Link>
            <Link to="/search">Deals</Link>
            <Link to="/search">What's New</Link>
            <Link to="/cart">Delivery</Link>
          </div>
          <div className="flex space-x-6 justify-end font-semibold text-green-950 items-center">
            <div className="flex items-center space-x-2 bg-green-50 rounded-full relative">
              <input
                type="text"
                sizing="sm"
                className="bg-transparent rounded-full w-72 border-none h-10"
                placeholder="Search Product"
              />
              <IoMdSearch className="text-xl cursor-pointer absolute right-4" as="Link" to="/search"/>
            </div>
            <Link to="/sign-in" className="flex gap-2 items-center">
              <LuUser className="text-xl"/>
              Account
            </Link>
            <Link to="/cart" className="flex gap-2 items-center">
              <MdAddShoppingCart className="text-xl"/>
              Cart
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
