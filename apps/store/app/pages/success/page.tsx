import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mb-20">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h1 className="text-xl font-bold mb-2 text-center">Congratulations! 🎉 Your request is send.</h1>
        <p className="text-sm text-center">We will send you the further details in mail or via phone call.</p><br/>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
          Share your opinion
        </button><br/>
        <a href="/" className="text-sm">Go to Home</a>
      </div>
    </div>
  );
};

export default ConfirmationPage;