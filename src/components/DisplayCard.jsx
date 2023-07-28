import React from 'react';

export const DisplayCard = ({ groceries }) => {
  return (
    <div className="relative mt-8">
      <div className="flex overflow-x-hidden overscroll-x-contain p-4 space-x-4 scroll-container">
        {groceries.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md border bg-[#fff5dc]"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-800 font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.items} items</p>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 scroll-button"
        onClick={() => document.querySelector('.scroll-container').scrollBy(-200, 0)}
      >
        &lt;
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 scroll-button"
        onClick={() => document.querySelector('.scroll-container').scrollBy(200, 0)}
      >
        &gt;
      </button>
    </div>
  );
};