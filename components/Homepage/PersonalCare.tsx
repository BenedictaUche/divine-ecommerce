"use client"

import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart, IoMdBasket } from "react-icons/io";

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

interface PersonalCareProps {
  products: Product[];
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

const PersonalCare: React.FC<PersonalCareProps> = ({ products }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const displayedProducts = products.slice(0, 4);

  return (
    <div className="mx-16">
      <h1 className="my-6 text-2xl font-bold">Personal Care</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <div
            key={product.sys.id}
            className="relative p-4 flex flex-col gap-4 shadow-md border border-gray-200 rounded-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
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

export default PersonalCare;
