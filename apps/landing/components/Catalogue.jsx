const Catalogue = () => {
  return (
    <div className="py-3 px-6 flex justify-center"> {/* Reduced padding top and bottom */}
    <div className="w-full max-w-7xl max-h-[150px] lg:max-h-[16vh]"> {/* Reduced max-height */}
      <div className="flex flex-col lg:flex-row items-center bg-green-600 rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/j54vMsST/1-1.jpg"
                  alt="Product 1"
                  className="w-full h-24 lg:h-auto overflow-hidden animate-slideDownUp object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src="https://i.postimg.cc/0jtnqcSH/1-2.jpg"
                  alt="Product 2"
                  className="w-full h-24 lg:h-auto animate-slideDownUp overflow-hidden object-cover"
                />
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/BQ6NCf9W/1.jpg"
                  alt="Product 3"
                  className="w-full h-24  lg:h-auto animate-slideUpDown overflow-hidden object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src="https://i.postimg.cc/65mcjbt8/2.jpg"
                  alt="Product 4"
                  className="w-full h-24  lg:h-auto animate-slideUpDown overflow-hidden object-cover"
                />
              </div>
              {/* Additional product images
              <div className="relative">
                <img
                  src="https://i.postimg.cc/JhbQh1JX/3.jpg"
                  alt="Product 5"
                  className="w-full h-36 lg:h-52 lg:h-auto animate-slideUpDown overflow-hidden object-cover"
                />
              </div> */}
            </div>
          </div>
          <div className="flex-1 bg-green-600 text-white p-8 text-center">
  <div className="flex flex-col items-center justify-center h-full">
    <h1 className="text-4xl mb-4 font-poppins text-[64px] font-semibold leading-[84px] text-left w-[508px] h-[168px]">
      Explore the Flib Catalogue
    </h1>
    <p className="header-32-regular text-left w-[483px] text-[#F7FAF8] mr-4 mb-6">
      Browse through our diverse range of high-quality merchandise, thoughtfully curated to meet your branding needs.
    </p>
    <div className="w-[483px] flex justify-start">
      <button className="w-[264px] h-[50px] px-6 py-2 gap-10 border border-solid border-white rounded-md -mt-4 body-12-regular">
        Go to the Catalogue
      </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
