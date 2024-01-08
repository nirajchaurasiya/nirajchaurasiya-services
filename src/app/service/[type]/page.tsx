"use client";
import React, { useEffect, useState } from "react";
import data from "../../../jsons/jsonfile.json";
import { useParams } from "next/navigation";
import { ProductData } from "@/app/constants/cartType";
import { CartContext } from "@/app/context/cartContext";
export default function Page() {
  const { type } = useParams();
  const [object, setObject] = useState<ProductData | {}>({});
  const allValues = React.useContext(CartContext);
  useEffect(() => {
    const findData = data.find((e) => e.product.type === type);
    setObject(findData || {});
  }, [type]);
  if (!allValues) return null;
  const { addToCart, cartValue, removeFromCart } = allValues;

  function addService() {
    const id = "product" in object ? object.product.id : 0;
    const price = "product" in object ? object.product.price : 0;
    const title = "product" in object ? object.product.title : "";
    const desc = "product" in object ? object.product.description : "";
    const type = "product" in object ? object.product.type : "";
    if (id === 0 || !title || !desc || price === 0) return;
    else addToCart(id, price, title, desc, type);
  }

  function removeTheProduct() {
    const type = "product" in object ? object.product.type : "";
    if (!type) return;
    else removeFromCart(type);
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={`${type}`}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/we.png"
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-400 tracking-widest">
              {"product" in object ? object.product.category : ""}
            </h2>

            <h1 className="text-gray-200 text-2xl title-font font-medium mb-1 mt-2">
              {"product" in object ? object.product.title : ""}
            </h1>
            {/* <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div> */}
            <p className="leading-relaxed text-gray-200">
              {"product" in object ? object.product.description : ""}
            </p>
            <div className="border border-gray-800 mt-3 mb-3"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-300">
                {"product" in object ? "$" + object.product.price : ""}
              </span>
              <button
                onClick={() =>
                  cartValue.some((e) => e.type === type)
                    ? removeTheProduct()
                    : addService()
                }
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                {cartValue.some((e) => e.type === type)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
            <div className="border border-gray-800 mt-3 mb-3"></div>
            <div>
              <p className="text-gray-300 text-xl">Features:</p>

              {"features" in object
                ? object.features.map((e) => (
                    <ul key={e.title} className="text-gray-300 list-disc ml-4">
                      <li>
                        <strong>{e.title}:</strong> <br />
                        <p className="ml-5">{e.description}</p>
                      </li>
                    </ul>
                  ))
                : "Updating"}
              <ul className="text-gray-300 list-disc ml-4">
                <li>
                  <strong>Hosting on request (additional charges):</strong>{" "}
                  <br />
                  <p className="ml-5">
                    If you are new, I can help you taking your business online.
                  </p>
                </li>
              </ul>
              <ul className="text-gray-300 list-disc ml-4">
                <li>
                  <strong>Domain name on request (additional charge):</strong>{" "}
                  <br />
                  <p className="ml-5">
                    I will buy a domain name for the application that suits your
                    brand.
                  </p>
                </li>
              </ul>
              <ul className="text-gray-300 list-disc ml-4">
                <li>
                  <strong>24 x 7 support:</strong> <br />
                  <p className="ml-5">
                    I provide 24 x 7 support via call, Whatsapp etc.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
