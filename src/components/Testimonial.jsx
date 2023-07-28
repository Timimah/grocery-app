import React from 'react';

export const Testimonial = ({ testimonials }) => {
    return (
        <div className="relative mt-8">
            <div className="flex overflow-x-hidden overscroll-x-contain p-4 space-x-4 scroll-container">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md"
                    >
                        <div>{item.testimony}</div>
                        <div>{item.name}</div>
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