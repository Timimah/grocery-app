export const cartData = [];

export const addToCartData = (item) => {
    cartData.push({
    product_name: item.name,
    product_id: Math.floor((Math.random() * 100) + 1),
    product_price: item.price,
    product_description: item.description,
    imageURL: item.imageUrl,
  });
  console.log(cartData);
};
