import React from 'react';

const Why: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <header className="text-center py-10 relative">
      <button className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg font-poppins text-xs font-normal leading-4 text-center w-[109px] h-[32px] px-[10px] py-[8px] gap-[10px]  border border-solid border-[#CFDBEF]">
  WHY FLIB
</button>

        <h1 className="mt-12 mb-2 header-2 text-center">Save money and time</h1>
        <p className="body-12-regular text-center text-[#6D736F]">Ordering Swags is hard - Flib reduces your effort and gives you back time to focus on more important things</p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 pb-4 mx-auto w-[1312px] h-[525.4px]">
  <div className="bg-[#F7FCF8] p-6 rounded-lg shadow-lg text-center flex-1 flex flex-col justify-center items-center">
    <img className="mx-auto mb-4" src="https://i.postimg.cc/7PNRWwV4/Screenshot-2024-06-05-at-9-43-6.jpg" alt="Easy Management" />
    <h2 className="top-[24px] w-[341px] h-[89px] gap-[9px] header-32 mb-2 text-[#303733]">Easy Management
      <p className="body-22-regular text-[#979E9A]">Whether you spend $100 or $100 Million earn 2% cash back on every dollar spent</p>
    </h2>
  </div>

  <div className="bg-[#F7FCF8] p-6 rounded-lg shadow-lg text-center flex-1 flex flex-col justify-center items-center">
    <img className="mx-auto mb-4" src="https://i.postimg.cc/7PNRWwV4/Screenshot-2024-06-05-at-9-43-6.jpg" alt="Warehouse Services" />
    <h2 className="w-[341px] h-[89px] gap-[9px] header-32 mb-2 text-[#303733] top-[24px]">Warehouse Services
      <p className="body-22-regular text-[#979E9A]">No more cluttered offices or crowded closets.</p>
    </h2>
  </div>
</div>

      <div className="flex flex-col md:flex-row gap-6 pb-4 mx-auto w-[1312px] h-[525.4px]">
      <div className="bg-[#F7FCF8] w-[864.72px] h-[508.16px] p-[64px_56px] gap-[11px] rounded-[16px] shadow-lg flex flex-col md:flex-row justify-center items-center md:col-span-2">
      <div 
  className="text-center md:text-left md:flex-1 w-[345px] h-[228px] gap-[20px]"
>
  <h2 className="header-2 mb-2">
    ALL <span className="text-green-600">Swags</span> in one box
  </h2>
  <p className="body-22-regular text-[#979E9A] ">
    We use AI to maximize cash back rewards on every charge, automatically. Get thousands of dollars back each year without lifting a finger.
  </p>
</div>

  <img className="w-[396.72px] h-[380.16px] mx-auto md:ml-4 mt-4 md:mt-0" src="https://i.postimg.cc/pLm1r8tV/Screenshot-2024-06-05-at-9-43-6-1.jpg" alt="ALL Swags in one box" />
</div>


<div 
  className="relative bg-[#F7FCF8] justify-center items-center shadow-lg text-center md:col-span-1 w-[430.66px] h-[508px] p-[64px_32px] gap-[48px] rounded-[16px]"
>
  <img className="mx-auto mb-4" src="https://i.postimg.cc/7PNRWwV4/Screenshot-2024-06-05-at-9-43-6.jpg" alt="Competitive Pricing" />
  <h2 className=" mt-12 w-[341px] h-[89px] gap-[9px] header-32 mb-2 text-[#303733]">Competitive Pricing
  <p className="body-22-regular text-[#979E9A]">No more cluttered offices or crowded closets.</p></h2>
</div>


      </div>
    </div>
  );
}

export default Why;
