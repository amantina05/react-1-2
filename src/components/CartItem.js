import React from 'react';

export default function CartItem(props) {
  const { item, deleteFromCart } = props;

  return (
    <div className="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => deleteFromCart(item.id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
