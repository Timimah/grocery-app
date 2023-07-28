import React from 'react';
import { Button } from '../../components/Button';

export const Card = ({ imageUrl, title, price, addToCart }) => {
  return (
    <div className="relative mt-8">
      <div className="flex p-4">
        <div
          className="flex flex-col w-64 bg-white p-4 rounded-lg shadow-md"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <p className="text-gray-800 font-semibold">{title}</p>
          <p className="text-gray-600">${price}</p>
          <Button styles="px-4 py-2 bg-[#123f1e] text-white rounded-lg" onClick={addToCart} title="Add to Cart" />
        </div>
      </div>
    </div>
  );
};