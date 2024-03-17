"use client"

import React, { useState } from "react";
import Image from "next/image";
import { IoMdHeartEmpty, IoMdHeart, IoMdBasket } from "react-icons/io";
import gradientImg from "@/public/gradient-bg.png";

interface Product {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    price: number;
    productImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    description: {
      content: [
        {
          content: [
            {
              value: string;
            }
          ];
        }
      ];
    };
  };
}

interface TopDealsProps {
  products: Product[];
}

interface BackgroundImage {
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundSize: string;
  backgroundPosition: string;
}


const truncateDescription = (
  description: string,
  maxLength: number
): string => {
  if (description.length > maxLength) {
    return `${description.slice(0, maxLength)}...`;
  }
  return description;
};







const backgroundImageConvert: BackgroundImage | undefined = {
  backgroundImage: `url(${gradientImg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};



const Topdeal = ({ products }: TopDealsProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const displayedProducts = products.slice(4, 8);

  return (
    <div className="py-10 px-20 pb-20" style={{ ...backgroundImageConvert}}>
      <h2 className="my-6 text-3xl font-bold text-white capitalize">Top deals zone</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <div
            key={product.sys.id}
            className="relative flex flex-col gap-4 p-4 shadow-md border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out cursor-pointer bg-white"
          >
            <img
              src={product.fields.productImage.fields.file.url}
              alt={product.fields.title}
              className="w-full h-40 object-cover object-center mb-4 rounded-md"
            />

            <div className="flex justify-between">
              <h3 className="text-md font-semibold">{product.fields.title}</h3>
              <p className="text-gray-600">${product.fields.price}</p>
            </div>

            <p className="">
              {truncateDescription(
                product.fields.description.content[0].content[0].value,
                50
              )}
            </p>

            <button
              className="bg-primary text-white px-4 py-2 rounded-md mt-2 inline-flex gap-2 items-center w-full justify-center"
              onClick={() => console.log(`Order Now: ${product.fields.title}`)}
            >
              <span>
                <IoMdBasket />
              </span>
              Order Now
            </button>
            <div className="flex items-center mt-2 absolute p-4 right-0 top-0">
              {favorites.includes(product.sys.id) ? (
                <IoMdHeart
                  className="text-red-500 cursor-pointer h-6 w-6"
                  onClick={() => toggleFavorite(product.sys.id)}
                />
              ) : (
                <IoMdHeartEmpty
                  className="cursor-pointer h-6 w-6"
                  onClick={() => toggleFavorite(product.sys.id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topdeal;
