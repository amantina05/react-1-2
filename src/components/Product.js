import React from 'react';

function Product(props) {
  const { item, addToCart } = props;

  return (
    <div className="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
