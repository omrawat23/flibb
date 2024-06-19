"use client"

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FiMinus, FiPlus, FiStar, FiX, FiChevronLeft, FiChevronRight, FiShoppingCart } from 'react-icons/fi';
import { useStore } from '../../../../store/store/store';
import { Product } from '../../types';
import CheckoutPage from '../../../components/CheckoutPage';

const CartPage: React.FC = () => {
  
  const { cartItems, updateQuantity, removeFromCart } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleIncreaseQuantity = (productId: number) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    const item = cartItems.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setQuantity(product.quantity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (selectedProduct && selectedProduct.images && selectedProduct.images.length > 0) {
        return prevIndex > 0 ? prevIndex - 1 : selectedProduct.images.length - 1;
      }
      return 0;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < ((selectedProduct?.images?.length ?? 1) - 1) ? prevIndex + 1 : 0));
  };

  const handleIncreaseQuantityInModal = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantityInModal = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = (product: Product) => {
    updateQuantity(product.id, quantity);
    closeModal();
  };

  const categorizedItems = cartItems.reduce<Record<string, Product[]>>((acc, item) => {
    const category = item.category ?? 'Uncategorized';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <Link href="/configure/pro">
  <button
    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
  >
    Back to Products
  </button>
</Link>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Object.entries(categorizedItems).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 flex flex-col" onClick={() => openModal(item)}>
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-contain mb-4" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{item.name}</span>
                    <div className="flex items-center">
                      <FiStar className="text-green-500 mr-1" />
                      <span className="text-gray-600">4.2 | 2.1k</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold">Quantity:</span>
                    <div className="flex items-center ml-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDecreaseQuantity(item.id);
                        }}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
                      >
                        <FiMinus />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIncreaseQuantity(item.id);
                        }}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold">Price:</span>
                    <span className="ml-2 text-green-600">₹{item.price}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold">Color:</span>
                    <div className="flex items-center ml-2 space-x-2">
                      {['#FFD700', '#1E90FF', '#FF4500'].map(color => (
                        <button
                          key={color}
                          style={{ backgroundColor: color }}
                          className="w-6 h-6 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromCart(item.id);
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded-md mt-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      <CheckoutPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" ref={modalRef}>
          <div className="bg-white p-6 rounded-lg flex relative max-w-2xl w-full">
            <button onClick={closeModal} className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 mt-2 mr-2 text-2xl">
              <FiX />
            </button>
            <div className="flex flex-row w-full">
              <div className="relative flex flex-col items-center justify-center mr-14 ml-4">
                {selectedProduct.images && selectedProduct.images.length > 0 && (
                  <>
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={selectedProduct.name}
                      className="w-full h-48 object-contain mb-4 rounded-md"
                    />
                    <FiChevronLeft
                      className="absolute left-[-25px] top-1/3 transform -translate-y-1/3 text-gray-500 cursor-pointer text-3xl"
                      onClick={handlePreviousImage}
                    />
                    <FiChevronRight
                      className="absolute right-[-25px] top-1/3 transform -translate-y-1/3 text-gray-500 cursor-pointer text-3xl"
                      onClick={handleNextImage}
                    />
                  </>
                )}
                <br />
                <div className="flex items-center space-x-2 px-2">
                  <div className="flex space-x-2 mr-9 ml-0">
                    {selectedProduct.images && selectedProduct.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="Thumbnail"
                        className={`w-24 h-16 object-contain rounded-md ${currentImageIndex === index ? 'border-2 border-green-500' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h2 className="text-lg font-bold">{selectedProduct.name}</h2>
                <br />
                <h3 className="text-md font-semibold mb-2">Description:</h3>
                <span className="block text-gray-600 mb-4">{selectedProduct.descriptions}</span>
                <div className="flex items-center mb-4">
                  <span className="block text-gray-600 font-bold">Select color:</span>
                  <div className="flex ml-2 space-x-2">
                    <button className="w-6 h-6 rounded-full bg-yellow-400 focus:outline-none"></button>
                    <button className="w-6 h-6 rounded-full bg-blue-400 focus:outline-none"></button>
                    <button className="w-6 h-6 rounded-full bg-red-400 focus:outline-none"></button>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <button
                    className="text-gray-600 bg-green-600 p-2 rounded-md"
                    onClick={handleDecreaseQuantityInModal}
                    disabled={quantity <= 1}
                  >
                    <FiMinus size={20} /> 
                  </button>
                  <span className="mx-2 text-lg ">{quantity}</span>
                  <button
                    className=" text-gray-600 bg-green-600 p-2 rounded-md"
                    onClick={handleIncreaseQuantityInModal}
                  >
                    <FiPlus size={20} />
                  </button>
                </div>
                <div className="flex items-center mb-4">
                  <span className="block text-lg font-semibold text-green-600">₹{selectedProduct.price}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedProduct) {
                      handleAddToCart(selectedProduct);
                    }
                  }}
                  className={`w-full ${cartItems.find(item => item.id === selectedProduct?.id) ? 'bg-white text-green-500 border border-green-500' : 'bg-green-500 text-white'} px-4 py-2 rounded-md transition-transform transform hover:scale-110 flex items-center justify-center`}
                >
                  <FiShoppingCart className="mr-2" />
                  {cartItems.find(item => item.id === selectedProduct?.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
