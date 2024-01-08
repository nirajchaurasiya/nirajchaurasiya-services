"use client";

import { CartContext } from "@/app/context/cartContext";
import Link from "next/link";
import React from "react";

export default function Sidecart({
  showCart,
  setshowCart,
}: {
  showCart: boolean;
  setshowCart: Function;
}) {
  const allValues = React.useContext(CartContext);
  if (!allValues) return null;
  const { cartValue, removeFromCart } = allValues;
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-gray-800 shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-300"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          onClick={() => setshowCart(!showCart)}
                          type="button"
                          className="relative -m-2 p-2 text-gray-300 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cartValue.length > 0 ? (
                            cartValue.map((data, index) => (
                              <li key={index} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src="/web-dev.jpg"
                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-200">
                                      <Link
                                        href={`/service/${data.type}`}
                                        className="text-sm"
                                      >
                                        {data.title}
                                      </Link>
                                      <p className="ml-4 ">${data.price}.00</p>
                                    </div>
                                    <p className="text-xs  mt-1 ">
                                      Category:{" "}
                                      <span className="uppercase">
                                        {data.type}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex mt-3">
                                      <button
                                        onClick={() =>
                                          removeFromCart(data.type)
                                        }
                                        type="button"
                                        className="font-medium text-white hover:bg-red-700 bg-red-500 p-1 rounded-lg"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          ) : (
                            <div className="flex justify-center mt-40">
                              <div>Your cart is empty!</div>
                            </div>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    {cartValue.length > 0 && (
                      <div className="flex justify-between text-base font-medium text-gray-200">
                        <p>Subtotal</p>
                        <p>
                          $
                          {
                            cartValue
                              .map((item) => item.price) // Extract prices from each item
                              .reduce((total, price) => total + price, 0) // Sum up the prices
                          }
                          .00
                        </p>
                      </div>
                    )}

                    <div className="mt-6">
                      <a
                        href={`https://wa.me/9779829279569?text=I'm%20interested%20in%20your%20${cartValue.map(
                          (e) => {
                            return e.type;
                          }
                        )}`}
                        target="_blank"
                        className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                      >
                        Let&apos;s confirm on WhatsApp
                      </a>
                    </div>
                    <div className="mt-6 text-sm -m-2 text-gray-500">
                      <p>
                        Please don&apos;t refresh the page or you will loose the
                        cart item.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
