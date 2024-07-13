const ARView = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-black font-inter">
      <i className="absolute top-[56.375rem] left-[31.5rem] font-ibm-plex-sans text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <div className="absolute top-[0.875rem] left-[calc(50%_-_526px)] w-[65.438rem] h-[6.375rem] text-[0.75rem] font-ibm-plex-sans">
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
      <div className="absolute top-[37.5rem] left-[18.125rem] w-[14.438rem] h-[4.375rem] text-[1.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[20px] bg-deepskyblue w-[14.438rem] h-[4.375rem]" />
        <div className="absolute top-[1.313rem] left-[1.563rem] font-semibold flex items-center w-[11.375rem] h-[1.75rem]">
          Access Camera
        </div>
      </div>
      <div className="absolute top-[13.188rem] left-[41.563rem] w-[36.563rem] h-[39.563rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[51px] bg-lightskyblue w-[36.563rem] h-[39.563rem]" />
        <div className="absolute top-[1.25rem] left-[14.25rem] font-semibold">
          AR View
        </div>
      </div>
      <div className="absolute top-[22.063rem] left-[11.75rem] w-[27.188rem] h-[12.813rem] text-[1.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-corner-large bg-gainsboro w-[27.188rem] h-[11.938rem]" />
        <div className="absolute top-[calc(50%_-_75.5px)] left-[calc(50%_-_198.5px)] font-semibold flex items-center w-[25.25rem] h-[11.125rem]">
          Please give the permission for accessing your Camera through clicking
          Allow in the above pop up
        </div>
        <div className="absolute top-[0.438rem] left-[11.25rem] text-[2rem] font-semibold">
          Note
        </div>
        <div className="absolute top-[3.438rem] left-[0.031rem] box-border w-[27.194rem] h-[0.063rem] border-t-[1px] border-solid border-black" />
      </div>
    </div>
  );
};

export default ARView;
