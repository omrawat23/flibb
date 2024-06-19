"use client"

import React, { useState, useRef, useEffect } from 'react';
import { FiShoppingCart, FiPlus, FiX, FiCheck, FiMinus, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import CheckoutPage from '../components/CheckoutPage';
import { useStore } from '../store/store';
import Cart from '../public/Cart.jpg'
import Image from 'next/image'; // Import Next.js Image component
import { Product } from '../app/products'
import initialProducts from '../app/products'
import Link from 'next/link';

const categories = [
  { name: 'All', imagePath: '/All.jpg' },
  { name: 'T-shirts', imagePath: '/Shirt.jpg' },
  { name: 'Water Bottle', imagePath: '/atom.jpg' },
  { name: 'Coffee Mugs', imagePath: '/Coffee.jpg' },
  { name: 'Bag Packs', imagePath: '/Bag.jpg' },
  { name: 'Hoodies', imagePath: '/Hoodie.jpg' },
  { name: 'Games', imagePath: '/Games.jpg' },
  { name: 'Accessories', imagePath: '/Cap.jpg' },
  { name: 'Packaging', imagePath: '/package.jpg' },
  { name: 'Notebook', imagePath: '/Book.jpg' },
];

const CategoryBar: React.FC<{
  selectedCategory: string,
  setSelectedCategory: (category: string) => void,
  cartItemCount: number,
  animateCheckout: boolean
}> = ({ selectedCategory, setSelectedCategory, cartItemCount, animateCheckout }) => {
  return (
<nav className='sticky z-[100] inset-x-0 top-0 left-0 w-hug h-hug bg-[#FFFFFF] transition-all p-[0px_64px] gap-12  rounded-md shadow-md'>

  <div className='flex items-center justify-between py-1 sm:py-1 relative mr-96 ml-96'>
    <Link href='http://localhost:3000/' className='flex font-semibold text-green-600 font-montserrat-alternates'>
      <img src='https://i.postimg.cc/W1GLTCL6/8b-VQe-E-06-YW3d-VBA05u-Ch-transformed.png' alt='' className="h-6 mt-4 mb-5 w-auto" />
    </Link>
    <div className="flex items-center">
      <button
        onClick={() => window.location.href = '/pages/checkout'}
        className={`flex items-center text-white px-4 py-2 rounded-md text-sm transition-transform transform hover:scale-110 ${animateCheckout ? 'animate-pulseCheckout' : ''}`}
      >
        <div className="relative flex flex-col items-center">
          <div className="flex items-center justify-center w-7 h-7 mt-2 rounded-full shadow-md bg-white">
            <Image src={Cart} alt="Shopping Cart" className="w-6 h-6" />
          </div>
          {cartItemCount > 0 && (
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
          <span className="mt-2 text-[#2CA05A]">My Cart</span>
        </div>
      </button>
      </div>
  </div>
  

  <div className="flex items-center justify-between p-5 ml-96">
    {/* bg-white sticky top-0 z-50 */}
    <div className="flex items-center">
      <nav className="flex space-x-3">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex flex-col items-center rounded-md text-sm ${selectedCategory === category.name ? 'text-[#2CA05A]' : 'text-gray-800'} hover:text-[#2CA05A] transition-colors duration-200`}
            style={{ marginRight: index < categories.length - 1 ? '20px' : '0' }}
          >
            <img
              src={category.imagePath}
              alt={category.name}
              className="w-6 h-6"
              style={{
                boxShadow: selectedCategory === category.name
                  ? '0px 4px 10px rgba(0, 0, 0, 0.2)'
                  : 'none',
                borderRadius: '4px',
              }}
            />
            <span>{category.name}</span>
            {selectedCategory === category.name && <span className="mt-1 h-1 w-4 bg-[#2CA05A]"></span>}
          </button>
        ))}
      </nav>
    </div>

   
    </div>
    </nav>
  );
};

const PageWithSidebar: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [quantity, setQuantity] = useState<number>(50);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [imageIndexes, setImageIndexes] = useState<{ [key: number]: number }>({});
  const [animateCheckout, setAnimateCheckout] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useStore();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const categoryProductIds: { [key: string]: number[] } = {
      'T-shirts': [1, 2, 3, 9, 10, 11, 12],
      'Hoodies': [7, 8],
      'Water Bottle': [4],
      'Coffee Mugs': [5],
      'Accessories': [6],
      'Notebook': [13],
    };

    if (selectedCategory === 'All') {
      setProducts(initialProducts);
    } else if (categoryProductIds[selectedCategory]) {
      const filteredProducts = initialProducts.filter(product =>
        categoryProductIds[selectedCategory].includes(product.id)
      );
      setProducts(filteredProducts);
    } else {
      const filteredCategoryProducts = initialProducts.filter(product => product.category === selectedCategory);
      setProducts(filteredCategoryProducts);
    }
  }, [selectedCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = (product: Product) => {
    const productWithDefaultDescription = {
      ...product,
      descriptions: product.descriptions || "",
      itemdetails: product.itemdetails || ""
    };
    addToCart(productWithDefaultDescription);
    setAnimateCheckout(true);
    setTimeout(() => setAnimateCheckout(false), 1000);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (hoveredProductId !== null) {
      setImageIndexes((prevIndexes) => ({
        ...prevIndexes,
        [hoveredProductId]: 1 % (products.find((product) => product.id === hoveredProductId)?.images?.length || 1)
      }));
      timer = setInterval(() => {
        setImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          [hoveredProductId]: (prevIndexes[hoveredProductId] + 1) % (products.find((product) => product.id === hoveredProductId)?.images?.length || 1)
        }));
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [hoveredProductId, products]);

  const handleNextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedProduct.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  return (
    <div className="flex flex-col p-0 m-0">
      
      <CategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} cartItemCount={cartItems.length} animateCheckout={animateCheckout} />
      <div className="flex-grow p-4 m-0 ">
        <h1 className="h-[48px] header-3 w-[306px] mb-4 ml-96 mr-96 test-[#212529]">Best Swags for you</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-96 mr-96 ">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white p-6 rounded-lg cursor-pointer flex flex-col transition-shadow  ${hoveredProductId === product.id ? 'shadow-lg bg-[#F9F9F9]' : ''}`}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => {
                setHoveredProductId(null);
                setImageIndexes((prevIndexes) => ({
                  ...prevIndexes,
                  [product.id]: 0
                }));
              }}
              onClick={() => handleProductClick(product)}
            >
              <div className="relative ">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[imageIndexes[product.id] || 0]}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-contain mb-4 rounded-md"
                  />
                ) : (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-[408px] h-[400px] object-contain mb-4 rounded-md"
                  />
                )}<br/>
                {hoveredProductId === product.id && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4 ">
                    {product.images && product.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${imageIndexes[product.id] === index ? 'bg-[#2CA05A]' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              {hoveredProductId === product.id ? (
                <div className="flex flex-col items-center justify-center h-full mb-[-18px]  ">
                  <button
                  onClick={(e) => {
              e.stopPropagation();
              if (product) {
                handleAddToCart(product);
              }
            }}
            className={`w-full ${cartItems.find((item: Product) => item.id === product?.id) ? 'bg-[#F7FAF8] text-[#2CA05A] border border-[#2CA05A] mt-[-10px]' : 'mt-[-10px] bg-[#2CA05A] text-[#F7FAF8]'} px-4 py-2 rounded-md transition-transform transform hover:scale-110 flex items-center justify-center`}
          >
            <FiShoppingCart className="mr-2" />
            {cartItems.find((item: Product) => item.id === product?.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                  <span className="flex items-center text-lg font-semibold text-[#2CA05A] mt-2 font-poppins ">Rs {product.price}</span>
                </div>
              ) : (
                <div className="flex flex-col justify-between flex-grow ">
  <div style={{ marginTop: "-30px" }}> 
    <div className="flex items-center justify-between">
      <span className="block header-332">{product.name}</span>
      <div className="flex items-center">
        <FiStar className="text-[#2CA05A] mr-1" />
        <span className="block text-[#000000] header-332">4.2 | 2.1k</span>
      </div>
    </div>
    <span className="block text-[#92949F] text-sm font-Poppins">Variable GSM</span>
  </div>
  <div className="flex justify-between items-center mt-1">
    <span className="font-semibold text-[#2B9F5A]">Rs {product.price}</span>
  </div>
</div>
              )}
            </div>
          ))}
        </div>
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
              <Image
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                width={400}
                height={300}
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
                  className={`w-24 h-16 object-contain rounded-md ${currentImageIndex === index ? 'border-2 border-[#2CA05A]' : ''}`}
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
              className="text-gray-600 bg-[#2CA05A] p-2 rounded-md"
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 50}
            >
              <FiMinus size={20} /> 
            </button>
            <span className="mx-2 text-lg ">{quantity}</span>
            <button
              className=" text-gray-600 bg-[#2CA05A] p-2 rounded-md"
              onClick={handleIncreaseQuantity}
            >
              <FiPlus size={20} />
            </button>
          </div>
          <div className="flex items-center mb-4">
            <span className="block text-lg font-semibold text-[#2CA05A]">Rs {selectedProduct.price}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (selectedProduct) {
                handleAddToCart(selectedProduct);
              }
            }}
            className={`w-full ${cartItems.find((item: Product) => item.id === selectedProduct?.id) ? 'bg-[#F7FAF8] text-[#2CA05A] border border-[#2CA05A]' : 'bg-[#2CA05A] text-[#F7FAF8]'} px-4 py-2 rounded-md transition-transform transform hover:scale-110 flex items-center justify-center`}
          >
            <FiShoppingCart className="mr-2" />
            {cartItems.find((item: Product) => item.id === selectedProduct?.id) ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
      <CheckoutPage
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default PageWithSidebar;
