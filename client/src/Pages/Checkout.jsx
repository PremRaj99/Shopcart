import { Button, Label, Radio, Table, TextInput } from "flowbite-react";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Middle from "../Components/Middle";

export default function Checkout() {
  return (
    <div>
      <div className="px-20">
        <p className="text-gray-500 p-3">
          Home / <span className="text-black">Checkout</span>
        </p>

        <div className="flex w-full gap-6">
          <div className="w-[59%]">
            <div className="border p-6 rounded-md">
              <h2 className="text-2xl font-bold pb-4">
                Review Item And Shipping
              </h2>
              <div className="flex space-x-4">
                <div className="w-40">
                  <img
                    src="/headphone_pink.jpg"
                    className="rounded-md"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center flex-1">
                  <div className="">
                    <h2 className="text-2xl font-bold">Airpods-Max</h2>
                    <p>Color: Pink</p>
                  </div>
                  <div className="">
                    <h2 className="text-xl font-bold">$549.00</h2>
                    <p>Quantity: 01</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 items-center my-5">
              <input type="checkbox" />
              <label className="font-medium text-sm">Returning Customer?</label>
            </div>
            <div className="border p-6 rounded-md">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold pb-4">
                  Delivery Information
                </h2>
                <button className="bg-gray-100 px-5 h-8 hover:bg-gray-300 text-xs rounded-full">
                  Save Information
                </button>
              </div>
              <div className="flex my-3 space-x-4">
                <div className=" flex-1">
                  <label className="text-sm font-medium">First Name*</label>
                  <TextInput
                    placeholder="First Name"
                    className="rounded-none"
                  />
                </div>
                <div className=" flex-1">
                  <label className="text-sm font-medium">Last Name*</label>
                  <TextInput placeholder="Last Name" className="rounded-none" />
                </div>
              </div>
              <div className="flex my-3 space-x-4">
                <div className=" flex-1">
                  <label className="text-sm font-medium">Address*</label>
                  <TextInput placeholder="Address" className="rounded-none" />
                </div>
              </div>
              <div className="flex my-3 space-x-4">
                <div className=" flex-1">
                  <label className="text-sm font-medium">City / Town*</label>
                  <TextInput
                    placeholder="City / Town"
                    className="rounded-none"
                  />
                </div>
                <div className=" flex-1">
                  <label className="text-sm font-medium">Zip Code*</label>
                  <TextInput placeholder="Zip Code" className="rounded-none" />
                </div>
              </div>
              <div className="flex my-3 space-x-4">
                <div className=" flex-1">
                  <label className="text-sm font-medium">Mobile*</label>
                  <TextInput
                    placeholder="6200xxxxx9"
                    className="rounded-none"
                  />
                </div>
                <div className=" flex-1">
                  <label className="text-sm font-medium">Email*</label>
                  <TextInput
                    placeholder="example@example.com"
                    className="rounded-none"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button color="success" className="w-32" size="sm">
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[39%]">
            <div className="border p-6 pb-4 rounded-md">
              <h2 className="text-2xl font-bold pb-4">
                Review Item And Shipping
              </h2>
              <div className="flex space-x-4">
                <div className="flex items-center my-6 bg-gray-100 rounded-full relative">
                  <input
                    className="border-none rounded-full w-72 outline-none bg-transparent text-sm"
                    type="text"
                    placeholder="Enter Coupan Code"
                  />
                  <button className="rounded-full w-32 bg-green-900 h-[80%] text-xs absolute right-2 text-white">
                    Add coupon
                  </button>
                </div>
              </div>
              <h2 className="text-xl font-semibold pb-4">Payment Details</h2>
              <div className="border"></div>
              <div className="my-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Radio
                    id="cod"
                    name="payment_method"
                    value="cod"
                    color="green"
                    defaultChecked
                  />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="shopcart" name="payment_method" value="Germany" />
                  <Label htmlFor="shopcart card">Shopcart Card</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="paypal" name="payment_method" value="Spain" />
                  <Label htmlFor="paypal">Paypal</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="credit_debit"
                    name="payment_method"
                    value="Spain"
                  />
                  <Label htmlFor="credit_debit">Credit / Debit Card</Label>
                </div>
                <div className="flex py-4 space-x-3">
                  <img src="https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479" className="h-8 p-1 bg-gray-200 rounded-sm" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/1200px-Maestro_2016.svg.png" className="h-8 border-2 border-green-600 p-1 object-cover bg-gray-200 rounded-sm" alt="" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYC7cfab2ZdxcUOJl4o8sTn3lKxXEsidsCGn_e83qfg&s" className="h-8 p-1 object-cover rounded-sm" alt="" />
                </div>
                <div className="flex my-3 space-x-4">
                  <div className=" flex-1">
                    <label className="text-sm font-medium">Email*</label>
                    <TextInput
                      placeholder="example@example.com"
                      className="rounded-none"
                    />
                  </div>
                </div>
                <div className="flex my-3 space-x-4">
                  <div className=" flex-1">
                    <label className="text-sm font-medium">
                      Card Holder Name*
                    </label>
                    <TextInput
                      placeholder="Card Holder Name"
                      className="rounded-none"
                    />
                  </div>
                </div>
                <div className="flex my-3 space-x-4">
                  <div className=" flex-1">
                    <label className="text-sm font-medium">Card Number*</label>
                    <TextInput
                      placeholder="Card Number"
                      className="rounded-none"
                    />
                  </div>
                </div>
                <div className="flex my-3 space-x-4">
                  <div className=" flex-1">
                    <label className="text-sm font-medium">Expiry*</label>
                    <TextInput placeholder="MM/YY" className="rounded-none" />
                  </div>
                  <div className=" flex-1">
                    <label className="text-sm font-medium">CVV*</label>
                    <TextInput placeholder="123" className="rounded-none" />
                  </div>
                </div>
                <div className="flex flex-col py-8 space-y-2 text-sm font-semibold">
                  <div className="flex justify-between">
                    <p>Sub Total</p>
                    <p>$549.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tax(10%)</p>
                    <p>$54.90</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Coupan Discount</p>
                    <p>-$54.90</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping Cost</p>
                    <p>-$0.00</p>
                  </div>
                  <div className="border"></div>
                  <div className="flex font-bold justify-between">
                    <p>Total</p>
                    <p>=$494.10</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button color="success" pill className="font-bold w-[80%] ">
                    Pay $494.10
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 my-4 p-3 rounded-md bg-orange-100">
              <div className="w-20 h-12 rounded-md bg-green-900"></div>
              <div className="flex-1">
                <h4 className="font-semibold">Earn 5% cash back <span className="font-normal">on Shopcart</span></h4>
                <p className="underline cursor-pointer text-xs">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
