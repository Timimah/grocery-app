
import React from "react"

export const ProductCard = ({ title, price, item, addToCart }) => {
  return (
    <>
      <div className="text-light text-center" style={{}}>
        <img className="object-cover" style={{}} src={item} alt={title} />
        <div className="text-extralight my-4">
          <div className="font-medium text-lg">{title}</div>
          <div className="font-extralight text-sm py-2">Price: ${price}</div>
          <Button styles="px-4 py-2 bg-[#123f1e] text-white rounded-lg" onClick={addToCart} title="Add to Cart" />
        </div>
      </div>
    </>
  )
}