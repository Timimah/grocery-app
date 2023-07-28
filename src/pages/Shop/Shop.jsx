import React, { useState } from 'react';
import { Layout } from '../../components/Layout'
import { products } from './data';
import { Sidenav } from './Sidenav';
import { addToCartData } from './cartData';
import { Card } from './Card';
import { Button } from '../../components/Button';

export const Shop = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItem, setCartItem] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
    addToCartData(item);
  }

  const defaultProducts = products.slice(0, 6);

  return ( 
    <>
      <Layout cartItem={cartItem.length}>
        <div className="flex w-full">
          <div className='w-[22%]'>
            <Sidenav onCategorySelect={handleCategorySelect} />
          </div>
          <div className='w-[78%]'>
            <h2>Featured Products</h2>
            <div className="product-cards grid grid-cols-2 md lg:grid-cols-3">
              {!selectedCategory &&
                defaultProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <Card imageUrl={product.imageUrl} title={product.name} price={product.price} addToCart={() => addToCart(product)} />
                  </div>
                ))}

              {selectedCategory &&
                filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <h4>{product.name}</h4>
                    <p>Price: {product.price}</p>
                    <p>{product.description}</p>
                    <Button styles="px-4 py-2 bg-[#123f1e] text-white rounded-lg" onClick={addToCart('Item 1')} title="Add to Cart" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}