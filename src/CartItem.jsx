import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const priceOf = item => Number(String(item.cost).replace('$', ''));
const money = value => value.toFixed(2);

export default function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const calculateTotalAmount = () => cart.reduce((total, item) => total + priceOf(item) * item.quantity, 0);
  const calculateTotalCost = item => priceOf(item) * item.quantity;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const handleContinueShopping = event => { event.preventDefault(); onContinueShopping(); };
  const handleIncrement = item => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = item => {
    if (item.quantity > 1) dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };
  const handleRemove = item => { dispatch(removeItem(item.name)); setCheckoutMessage(''); };

  return (
    <main className="cart-container">
      <p className="eyebrow">Your green collection</p>
      <h1>Shopping Cart</h1>
      <p className="cart-count" data-testid="cart-count">Total items: {totalItems}</p>
      <div className="cart-layout">
        <section aria-label="Cart items">
          {cart.length === 0 && <div className="empty-cart"><h2>Your cart is empty.</h2><p>Discover a plant that makes your space feel like home.</p></div>}
          {cart.map(item => (
            <article className="cart-item" key={item.name} aria-label={`${item.name} cart item`}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p className="cart-item-cost">Unit price: ${money(priceOf(item))}</p>
                <div className="cart-item-quantity">
                  <button aria-label={`Decrease ${item.name}`} disabled={item.quantity <= 1} onClick={() => handleDecrement(item)}>−</button>
                  <span aria-label={`${item.name} quantity`}>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
                </div>
                <p className="cart-item-total">Subtotal: ${money(calculateTotalCost(item))}</p>
                <button className="cart-item-delete" onClick={() => handleRemove(item)} aria-label={`Delete ${item.name}`}>Delete</button>
              </div>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <h2>Order summary</h2>
          <p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} in your cart</p>
          <div className="total-line"><span>Total cost</span><strong data-testid="cart-total">${money(calculateTotalAmount())}</strong></div>
          <button className="checkout-button" disabled={!cart.length} onClick={() => setCheckoutMessage('Coming Soon! Checkout is not available yet.')}>Checkout</button>
          {checkoutMessage && <p role="status">{checkoutMessage}</p>}
          <button className="continue-button" onClick={handleContinueShopping}>Continue Shopping</button>
        </aside>
      </div>
    </main>
  );
}

CartItem.propTypes = { onContinueShopping: PropTypes.func.isRequired };
