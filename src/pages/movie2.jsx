import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Movie2 = () => {
  const navigate = useNavigate();

  const onKateWinsletContainerClick = useCallback(() => {
    navigate("/char-6");
  }, [navigate]);

  const onLeonardoDiCaprioContainerClick = useCallback(() => {
    navigate("/char-5");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[70.188rem] overflow-hidden text-left text-[2rem] text-gray-100 font-inter">
      <i className="absolute top-[62.813rem] left-[32rem] font-ibm-plex-sans">
        Developed by ~InnovHer Team
      </i>
      <div className="absolute top-[0.875rem] left-[calc(50%_-_526px)] w-[65.438rem] h-[6.375rem] text-[0.75rem] text-black font-ibm-plex-sans">
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
      <div className="absolute top-[15.375rem] left-[13.688rem] font-extrabold inline-block w-[27.188rem] h-[3.875rem]">
        Titanic Movie Characters:
      </div>
      <div
        className="absolute top-[23rem] left-[22.5rem] w-[15.938rem] h-[22.5rem] cursor-pointer"
        onClick={onKateWinsletContainerClick}
      >
        <b className="absolute top-[17.625rem] left-[2.438rem]">
          <p className="m-0">Kate Winslet</p>
        </b>
        <img
          className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
          alt=""
          src="/ellipse-62@2x.png"
        />
      </div>
      <div
        className="absolute top-[23rem] left-[50.188rem] w-[18.25rem] h-[20.063rem] cursor-pointer"
        onClick={onLeonardoDiCaprioContainerClick}
      >
        <b className="absolute top-[17.625rem] left-[0rem]">
          Leonardo DiCaprio
        </b>
        <img
          className="absolute top-[0rem] left-[0.938rem] rounded-[50%] w-[15.938rem] h-[15.938rem] object-cover"
          alt=""
          src="/ellipse-72@2x.png"
        />
      </div>
    </div>
  );
};

export default Movie2;
