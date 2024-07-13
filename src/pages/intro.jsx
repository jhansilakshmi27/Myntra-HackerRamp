import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const onARHomeDecorClick = useCallback(() => {
    navigate("/decor-intro");
  }, [navigate]);

  const onMovieCostumesContainerClick = useCallback(() => {
    navigate("/movie-intro");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[64rem] overflow-hidden text-left text-[2rem] text-black font-ibm-plex-sans">
      <div className="absolute top-[calc(50%_-_368px)] left-[calc(50%_-_359px)] w-[45.813rem] h-[8.813rem] text-[4.375rem]">
        <div className="absolute top-[calc(50%_-_70.5px)] left-[calc(50%_-_366.5px)] font-semibold inline-block w-[45.813rem] h-[6.625rem]">
          {" "}
          Myntra HackerRamp
        </div>
        <i className="absolute top-[calc(50%_+_23.5px)] left-[calc(50%_-_153.5px)] text-[2.25rem] font-medium">
          {" "}
          WeForShe-2024
        </i>
      </div>
      <div
        className="absolute top-[21.313rem] left-[45.5rem] w-[27.188rem] h-[25.188rem] cursor-pointer font-inter"
        onClick={onARHomeDecorClick}
      >
        <img
          className="absolute top-[0rem] left-[0rem] rounded-21xl w-[27.188rem] h-[21.188rem] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="absolute top-[22.75rem] left-[5.875rem] font-extrabold">{`AR Home Decor `}</div>
        <img
          className="absolute top-[0rem] left-[calc(50%_+_112.5px)] w-[5.313rem] h-[5.625rem] object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div
        className="absolute top-[21.313rem] left-[17.375rem] w-[27.188rem] h-[25.188rem] cursor-pointer font-inter"
        onClick={onMovieCostumesContainerClick}
      >
        <img
          className="absolute top-[0rem] left-[0rem] rounded-21xl w-[27.188rem] h-[21.188rem] object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <div className="absolute top-[22.75rem] left-[5.25rem] font-extrabold">
          Movie Costumes
        </div>
        <img
          className="absolute top-[14.438rem] left-[0rem] w-[16.313rem] h-[6.75rem] object-cover"
          alt=""
          src="/barbiethemovielogoremovebgpreview-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[calc(50%_+_118.5px)] w-[5.313rem] h-[5.625rem] object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <i className="absolute top-[54.438rem] left-[31.5rem] text-gray-100">
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
    </div>
  );
};

export default Intro;
