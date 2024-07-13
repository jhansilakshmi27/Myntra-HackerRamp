import React, { useState } from "react";

const Char4 = () => {
  const [buttonStates, setButtonStates] = useState({});

  const handleAddToBagClick = (id) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderButton = (id) => (
    <div
      className="absolute top-[26.875rem] left-[2.875rem] w-[21.438rem] h-[3.875rem] cursor-pointer"
      onClick={() => handleAddToBagClick(id)}
    >
      <img
        className="absolute top-[0.063rem] left-[16.625rem] w-[4.813rem] h-[3.813rem] object-cover"
        alt=""
        src="/bookmark@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[12.375rem] w-[4.813rem] h-[3.813rem] object-cover"
        alt=""
        src="/component-42@2x.png"
      />
      <div className="absolute top-[0.063rem] left-[0rem] w-[12.188rem] h-[3.75rem]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex items-center justify-center font-semibold">
          {buttonStates[id] ? (
            <div className="flex items-center">
              <span>Added</span>
              <div className="ml-3 w-7 h-7 bg-black rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.292 5.707a1 1 0 00-1.414-1.414l-9 9a1 1 0 01-1.414 0l-3-3a1 1 0 00-1.414 1.414l3.707 3.707a3 3 0 004.242 0l9-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ) : (
            "Add to Bag"
          )}
        </div>
      </div>
    </div>
  );
      
     
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-black font-ibm-plex-sans">
      <i className="absolute top-[112.438rem] left-[31.5rem] text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <div className="absolute top-[0.875rem] left-[calc(50%_-_526px)] w-[65.438rem] h-[6.375rem] text-[0.75rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_523.5px)] w-[49.313rem] h-[6.375rem] text-gray-100 font-ms-reference-specialty">
          <img
            className="absolute top-[0rem] left-[calc(50%_-_394.5px)] w-[10.875rem] h-[6.375rem] object-cover"
            alt=""
            src="/logo1@2x.png"
          />
          <div className="absolute top-[1.938rem] left-[16.5rem] w-[32.813rem] h-[2.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xl bg-white w-[32.813rem] h-[2.5rem]" />
            <img
              className="absolute top-[0.5rem] left-[0.9rem] w-[1.969rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="/icbaselinesearch.svg"
            />
            <div className="absolute top-[0.75rem] left-[3.2rem] inline-block w-[9.025rem] h-[1.25rem]">
              Search
            </div>
          </div>
        </div>
        <div className="absolute top-[3.688rem] left-[51.563rem] font-medium flex items-center w-[3.875rem] h-[1.25rem]">
          Profile
        </div>
        <div className="absolute top-[3.813rem] left-[56.813rem] font-medium">
          Wishlist
        </div>
        <img
          className="absolute top-[2rem] left-[62.25rem] w-[3.188rem] h-[1.938rem] object-cover"
          alt=""
          src="/shopping-bag@2x.png"
        />
        <img
          className="absolute top-[2rem] left-[51.063rem] w-[3.188rem] h-[1.938rem] object-cover"
          alt=""
          src="/user@2x.png"
        />
        <img
          className="absolute top-[2rem] left-[56.25rem] w-[4rem] h-[1.938rem] object-cover"
          alt=""
          src="/heart@2x.png"
        />
        <div className="absolute top-[3.688rem] left-[63.125rem] font-medium flex items-center w-[2.313rem] h-[1.25rem]">
          Bag
        </div>
      </div>
      <div className="absolute top-[11.063rem] left-[12.688rem] w-[60rem] h-[39.063rem] text-[1.875rem] font-inter">
        <div className="absolute top-[0rem] left-[0rem] text-[2rem] font-extrabold text-gray-100 inline-block w-[46.438rem] h-[3.563rem]">{`Leonardo DiCaprio Costumes & Accesories:`}</div>
        <div className="absolute top-[5.25rem] left-[4.875rem] w-[27.188rem] h-[33.813rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[27.188rem] h-[33.813rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-gray-400 box-border w-[27.188rem] h-[33.813rem] border-[2px] border-solid border-black" />
             {renderButton("button1")}

          </div>
          <div className="absolute top-[1.938rem] left-[2.813rem] w-[21.688rem] h-[23.375rem]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-21xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-592@2x.png"
            />
            <img
              className="absolute h-[12.03%] w-[12.97%] top-[5.08%] right-[8.65%] bottom-[82.89%] left-[78.39%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/synchronize@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[5.25rem] left-[32.813rem] w-[27.188rem] h-[33.813rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[27.188rem] h-[33.813rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-gray-400 box-border w-[27.188rem] h-[33.813rem] border-[2px] border-solid border-black" />
             {renderButton("button2")}
          
          </div>
          <div className="absolute top-[1.938rem] left-[2.625rem] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] w-[21.688rem] h-[23.375rem]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-21xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-614@2x.png"
            />
            <img
              className="absolute h-[12.03%] w-[12.97%] top-[5.08%] right-[5.48%] bottom-[82.89%] left-[81.56%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/synchronize@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Char4;
