"use client"

import React, { useState, useEffect, DragEvent } from 'react';
import { Product } from '../../types';
import CheckoutPage from '../../../components/CheckoutPage';
import { useStore } from '../../../store/store';
import Link from 'next/link';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface FormData {
  swagBoxes: number;
  deliveryDate: string;
  customItems: string;
  lookingFor: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  logoUrl?: string;
  cartItems: Product[]; // Add cartItems to FormData
}

interface Props {
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const OrderForm: React.FC<Props> = ({ updateQuantity, removeFromCart }) => {
  const { cartItems } = useStore();

  const [formData, setFormData] = useState<FormData>({
    swagBoxes: 0,
    deliveryDate: '',
    customItems: '',
    lookingFor: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    cartItems: [], // Initialize with empty cart items
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [dragOver, setDragOver] = useState(false);

  const handleFormDataChange = (key: keyof FormData, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      await uploadLogo(file);
    }
  };

  const handleFileDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setLogoFile(file);
      await uploadLogo(file);
    }
  };

  const uploadLogo = async (file: File) => {
    const logoRef = ref(storage, `logos/${file.name}`);
    await uploadBytes(logoRef, file);
    const url = await getDownloadURL(logoRef);
    setLogoUrl(url);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const calculateTotalEstimate = (cartItems: Product[]) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  useEffect(() => {
    const total = calculateTotalEstimate(cartItems);
    // Update the cartItems in formData whenever cartItems change
    setFormData((prevData) => ({ ...prevData, cartItems }));
  }, [cartItems]);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    return numericPhoneNumber.length === 10;
  };

  const isFormFilled = formData.swagBoxes > 0 && formData.deliveryDate.trim() !== '' &&
    formData.contactName.trim() !== '' && formData.contactEmail.trim() !== '' &&
    isValidEmail(formData.contactEmail) && formData.contactPhone.trim() !== '' &&
    isValidPhoneNumber(formData.contactPhone);

  const handleOrderRequest = async () => {
    const validationErrors: string[] = [];
    if (!formData.swagBoxes) {
      validationErrors.push('Please specify the number of Swag Boxes.');
    }
    if (!formData.deliveryDate) {
      validationErrors.push('Please specify the delivery date.');
    }
    if (!formData.contactName.trim()) {
      validationErrors.push('Please provide your name.');
    }
    if (!formData.contactEmail.trim()) {
      validationErrors.push('Please provide your email.');
    } else if (!isValidEmail(formData.contactEmail)) {
      validationErrors.push('Please provide a valid email address.');
    }
    if (!formData.contactPhone.trim()) {
      validationErrors.push('Please provide your phone number.');
    } else if (!isValidPhoneNumber(formData.contactPhone)) {
      validationErrors.push('Please provide a 10-digit phone number.');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await addDoc(collection(db, 'orders'), { ...formData, logoUrl });
      console.log('Order saved to Firestore successfully');
    } catch (error) {
      console.error('Error saving order to Firestore:', error);
    }
  };

  const handleLogoClick = () => {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-8">
      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">1. Order Summary</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">How many Swag packs are you looking for</label>
            <input type="number" value={formData.swagBoxes} onChange={(e) => handleFormDataChange('swagBoxes', parseInt(e.target.value))} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Delivery Date preference</label>
            <input type="date" value={formData.deliveryDate} onChange={(e) => handleFormDataChange('deliveryDate', e.target.value)} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Additional notes or comments you like to add</label>
            <input type="text" value={formData.customItems} onChange={(e) => handleFormDataChange('customItems', e.target.value)} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Upload the logo you'd like to add (Upload Vector file for best quality: svg, eps, ai, pdf)</label>
            <div
              className={`flex flex-col items-center justify-center border border-gray-300 w-1/2 h-32 bg-gray-100 rounded-lg ${dragOver ? 'border-green-500 bg-green-100' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleFileDrop}
            >
              {logoUrl ? (
                <div className="flex flex-col items-center">
                  <img src={logoUrl} alt="Uploaded logo" className="max-h-24" />
                  <span className="text-green-500 mt-2">Logo Uploaded</span>
                </div>
              ) : (
                <>
                  <span className="block mb-2">Primary Logo</span>
                  <input type="file" onChange={handleFileChange} className="hidden" />
                  <button onClick={handleLogoClick} className="text-green-500 underline">
                    Drag and drop to upload or choose file
                  </button>
                </>
              )}
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">Preview</button>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">2. Contact Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Your Full name</label>
            <input type="text" value={formData.contactName} onChange={(e) => handleFormDataChange('contactName', e.target.value)} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input type="email" value={formData.contactEmail} onChange={(e) => handleFormDataChange('contactEmail', e.target.value)} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Name of your company</label>
            <input type="text" value={formData.lookingFor} onChange={(e) => handleFormDataChange('lookingFor', e.target.value)} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Contact Number</label>
            <input type="tel" value={formData.contactPhone} onChange={(e) => handleFormDataChange('contactPhone', e.target.value)} className="w-full bg-white rounded border border-gray-300 px-3 py-2" />
          </div><br />
          <Link href={isFormFilled ? "/configure/success" : "#"}>
            <button onClick={isFormFilled ? handleOrderRequest : undefined} className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 md:mt-0">Submit Request</button>
          </Link>
        </div>
      </div>

      {/* CheckoutPage */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <CheckoutPage
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
};

export default OrderForm;
