"use client"
import React from 'react';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface Props {
  cartItems?: Product[];
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CheckoutPage: React.FC<Props> = ({
  cartItems = [],
  updateQuantity,
  removeFromCart,
}) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [totalEstimate, setTotalEstimate] = useState<number>(0);
  const isConfigureOrderPage = typeof window !== 'undefined' && window.location.pathname === '/configure/order';

  // Update cart count and total estimate when cart items change
  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    setTotalEstimate(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    // Ensure newQuantity is not less than 0
    newQuantity = Math.max(newQuantity, 0);
    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="checkout-container fixed bottom-9 right-4 md:right-auto md:top-12 md:mr-4 md:mt-2 z-20">
      {!isConfigureOrderPage && (
        <Link href="/configure/order">
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded-md mt-2 md:hidden ${
              cartItems.length > 0 ? 'animate-pulse' : ''
            }`}
          >
            Checkout{' '}
            {cartItems.length > 0 && (
              <span className="bg-white text-black rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </Link>
      )}
      {cartItems.length > 0 && (
        <div className="checkout-sidebar hidden md:flex fixed right-0 top-0 bottom-20 w-80 bg-gray-200 p-4 flex-col justify-between shadow-lg">
          <div className="flex-1 overflow-y-auto"><br/><br/><br/>
            <h2 className="text-xl font-bold">Your swag pack</h2>
            <ul className="mt-4 space-y-4 mb-8">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center py-2 space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <span className="font-bold">{item.name}</span>
                    <div>
                      <span className="text-gray-600 font-bold">
                        Price: Rs {item.price}
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      {!isConfigureOrderPage && (
                        <>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 transition-transform transform hover:scale-110"
                          >
                            <FiMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 transition-transform transform hover:scale-110"
                          >
                            <FiPlus />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 transition-transform transform hover:scale-110"
                          >
                            <FiTrash />
                          </button>
                        </>
                      )}
                      {isConfigureOrderPage && (
                        <span>{item.quantity}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t pt-4 mt-4" style={{ height: '140px' }}>
            <div className="flex justify-between">
              <span className="text-lg font-bold">Quantity (Min 50)</span>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(0, Math.max(50, cartCount - 1))}
                  className="bg-green-500 text-white px-2 py-1 rounded-md transition-transform transform hover:scale-110"
                >
                  <FiMinus />
                </button>
                <input
                  type="number"
                  min="25"
                  value={cartCount}
                  onChange={(e) =>
                    handleQuantityChange(0, Math.max(50, parseInt(e.target.value)))
                  }
                  className="w-16 border p-1 rounded-md mx-2"
                />
                <button
                  onClick={() => handleQuantityChange(0, cartCount + 1)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md transition-transform transform hover:scale-110"
                >
                  <FiPlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg font-bold">Price per Pack</span>
              <span>Rs 500 - Rs 600</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg font-bold">Total Estimate</span>
              <span>Rs {totalEstimate}</span>
            </div>
            {!isConfigureOrderPage && (
              <Link href="/configure/order">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 w-full">
                  Proceed to Checkout
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

