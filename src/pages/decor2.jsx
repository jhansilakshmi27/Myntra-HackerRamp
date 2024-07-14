import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Decor2 = () => {
  const navigate = useNavigate();
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const onGroupContainerClick = useCallback(() => {
    navigate("/ar-view");
  }, [navigate]);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-black font-ibm-plex-sans">
      <i className="absolute top-[58.188rem] left-[31.5rem] text-gray-100">
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
      <div className="absolute top-[9.688rem] left-[11.875rem] w-[71.375rem] h-[43.875rem] text-[3rem] font-inter">
        <b className="absolute top-[0.25rem] left-[0rem]">
          AYA Expresso 4 Piece dining Set:
        </b>
        <div className="absolute top-[8.375rem] left-[0rem] w-[38.313rem] h-[29.188rem]">
          <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-31xl bg-white box-border w-[38.313rem] h-[29.188rem] opacity-[0.8] border-[1px] border-solid border-black" />
        </div>
        <img
          className="absolute top-[10.938rem] left-[2.25rem] w-[34.313rem] h-[24.5rem] object-cover"
          alt=""
          src="/group-18@2x.png"
        />
        <div className="absolute top-[9.25rem] left-[41rem] w-[30.375rem] h-[30.25rem] text-[2.25rem] text-gray-200 font-be-vietnam">
          <div className="absolute top-[0rem] left-[0rem] font-semibold">
            Details :
          </div>
          <b className="absolute top-[4rem] left-[0.688rem] text-[2rem] leading-[4.375rem] text-white">
            <p className="m-0 whitespace-pre-wrap">{`Price :  1,37,000             `}</p>
            <p className="m-0">
              Chair Frame : Wood  Country of Origin: Vietnam Fabric Color:
              Brown Cleaning Code: Upholstery (X)
            </p>
          </b>
        </div>
        <div className="absolute top-[0rem] left-[49.563rem] w-[16.438rem] h-[6.25rem] text-[1.25rem] text-gray-100 font-montserrat">
          <div className="absolute top-[0rem] left-[0rem] w-[16.438rem] h-[6.25rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[13.15rem] h-[3.394rem]"
              alt=""
              src="/stars2.svg"
            />
            <div className="absolute top-[4.25rem] left-[1.625rem] font-medium flex items-center w-[14.813rem] h-[2rem]">
              3.8 (487 reviews)
            </div>
          </div>
        </div>
        <div className="absolute top-[39.5rem] left-[0rem] w-[28.681rem] h-[4.375rem] text-[2.5rem] font-baloo-da-2">
          <div
            className="absolute top-[0.006rem] left-[0rem] w-[17.931rem] h-[4.369rem] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white box-border w-[17.931rem] h-[4.369rem] opacity-[0.8] border-[1px] border-solid border-black" />
            <b className=" absolute top-[0.89rem] left-[4.956rem] inline-block text-black whitespace-nowrap ml-2">
              AR View
            </b>
            <img
              className="absolute top-[0.75rem] left-[1.694rem] w-[3.138rem] h-[3.119rem] object-cover"
              alt=""
              src="/camera-21@2x.png"
            />
          </div>
          <img
            className="absolute top-[0rem] left-[19.119rem] w-[4.375rem] h-[4.375rem]"
            alt=""
            src="/group-10.svg"
          />
          <div className="absolute top-[0rem] left-[24.306rem] w-[4.375rem] h-[4.375rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-white box-border w-[4.375rem] h-[4.375rem] opacity-[0.8] border-[1px] border-solid border-black" />
            <img
              className="absolute top-[0.75rem] left-[0rem] w-[4.375rem] h-[2.888rem] object-cover"
              alt=""
              src="/shopping-bag2@2x.png"
            />
          </div>
          <img
            className="absolute top-[0.75rem] left-[18.931rem] w-[4.563rem] h-[2.938rem] object-cover cursor-pointer"
            alt=""
            src={isHeartFilled ? "/heart@2x.png" : "/component-20@2x.png"}
            onClick={toggleHeart}
          />
        </div>
      </div>
    </div>
  );
};

export default Decor2;

