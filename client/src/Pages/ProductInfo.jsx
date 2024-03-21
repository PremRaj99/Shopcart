import { Button, Table } from "flowbite-react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import Middle from "../Components/Middle";
import { Link } from "react-router-dom";

export default function ProductInfo() {
  const [count, setCount] = useState(1);
  console.log(count)
  return (
    <>
      <div className="px-20">
        <p className="text-gray-500 p-3">
          Electronics / Audio / Headphones / Shop Headphones by type /{" "}
          <span className="text-black">airpords-max</span>
        </p>

        <div className="flex w-full">
          <div className="w-full space-y-4">
            <div className="w-[690px]">
              <img src="/headphone_silver.jpg" alt="" />
            </div>
            <div className="flex space-x-4 flex-nowrap">
              <div className="w-40">
                <img src="/headphone_gray.jpg" alt="" />
              </div>
              <div className="w-40">
                <img src="/headphone_pink.jpg" alt="" />
              </div>
              <div className="w-40">
                <img src="/headphone_blue.jpg" alt="" />
              </div>
              <div className="w-40">
                <img src="/headphone_green.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full mx-4 px-10 space-y-4">
            <h1 className="text-4xl font-bold">Airpods-Max</h1>
            <p className="w-[50ch] text-gray-600 text-xs">
              A perfect balance of exhiarating high-fidelity audio and the
              effortless magic of Airpods.
            </p>
            <div className="pb-4 flex space-x-1 text-green-400 items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-sm font-medium text-gray-600">(121)</span>
            </div>
            <div className="border-t border-b py-4">
              <h3 className="text-xl font-semibold">$549.00 or 99.99/month</h3>
              <p className="text-xs text-gray-600">
                Suggested payments with 6 months special financing
              </p>
            </div>
            <div className="border-b">
              <h4 className="font-semibold">Choose a Color</h4>
              <div className="flex gap-2 py-5">
                <div className="w-8 h-8 rounded-full bg-red-500 p-2 border-2 "></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 p-2 border-2 "></div>
                <div className="w-8 h-8 rounded-full bg-cyan-500 p-2 border-2 "></div>
                <div className="w-8 h-8 rounded-full bg-green-500 p-2 border-2 "></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 p-2 border-2 "></div>
              </div>
            </div>
            <div className="py-6">
              <div className="flex gap-8">
                <div className="bg-gray-100 rounded-2xl flex font-medium">
                  <div className="w-9 cursor-pointer p-1 h-8 text-center" onClick={() => setCount(count-1)}>
                    -
                  </div>
                  <div className="w-9 cursor-pointer p-1 h-8 text-center text-green-900">
                    {count}
                  </div>
                  <div className="w-9 cursor-pointer p-1 h-8 text-center text-green-900" onClick={() => setCount(count+1)}>
                    +
                  </div>
                </div>
                <div className="text-xs">
                  <p className="text-gray-500">
                    Only <span className="text-red-500">12 items </span> Left!
                  </p>
                  <p className="text-gray-500">Don't miss it</p>
                </div>
              </div>
              <div className="flex gap-4 py-6">
                <Link to="/checkout">
                  <Button color="success" pill className="w-48">
                    Buy Now
                  </Button>
                </Link>
                <Button color="success" pill className="w-48" outline>
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="">
              <div className="border p-4 flex justify-start gap-2">
                <CiDeliveryTruck className="text-lg font-semibold mt-1 text-orange-600" />
                <span>
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="underline cursor-pointer text-xs text-gray-600">
                    Enter your Postal code for Delivery Availablity
                  </p>
                </span>
              </div>
              <div className="border p-4 flex justify-start gap-2">
                <FaCalendarAlt className="text-sm font-medium mt-1 text-orange-600" />
                <span>
                  <h4 className="font-semibold">Return Delivery</h4>
                  <p className="text-xs text-gray-600">
                    Free 30days Delivery Returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-5">
          <h2 className="font-bold text-2xl">
            Apple Airpods Max Wireless Headphones Full Specifications
          </h2>
        </div>
        <div className="flex space-x-24 justify-center">
          <div className="bg-gray-200 p-5 rounded-md">
            <h3 className="font-bold">General</h3>
            <Table className="mt-6">
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Brand
                  </Table.Cell>
                  <Table.Cell className="w-[60ch] text-xs">Apple</Table.Cell>
                </Table.Row>
                <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Model
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">
                    Model Airpods Max Wireless Headphones
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Price
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">$549.00</Table.Cell>
                </Table.Row>
                <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Release date
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">
                    December 2020
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Model Number
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">Airpods Max</Table.Cell>
                </Table.Row>
                <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Headphone Type
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">Over-Ear</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Connectivity
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">Wireless</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className="bg-gray-200 p-5 rounded-md">
            <h3 className="font-bold">General</h3>
            <Table className="mt-6">
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Brand
                  </Table.Cell>
                  <Table.Cell className="w-[60ch] text-xs">Apple</Table.Cell>
                </Table.Row>
                <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Model
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">
                    Model Airpods Max Wireless Headphones
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Price
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">$549.00</Table.Cell>
                </Table.Row>
                <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Release date
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">
                    December 2020
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Model Number
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">Airpods Max</Table.Cell>
                </Table.Row>
                <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Headphone Type
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">Over-Ear</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs">
                    Connectivity
                  </Table.Cell>
                  <Table.Cell className="w-72 text-xs">Wireless</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Middle />
      </div>
    </>
  );
}
