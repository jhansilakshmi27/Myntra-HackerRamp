import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DecorIntro = () => {
  const navigate = useNavigate();
  const [buttonStates, setButtonStates] = useState({
    button1: "Add to Bag",
    button2: "Add to Bag",
    button3: "Add to Bag",
  });

  const handleButtonClick = (buttonId) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonId]: prevState[buttonId] === "Add to Bag" ? "Added" : "Add to Bag",
    }));
  };

  const onGroupContainerClick = () => {
    navigate("/decor-1");
  };

  const onGroupContainerClick1 = () => {
    navigate("/decor-3");
  };

  const onGroupContainerClick2 = () => {
    navigate("/decor-2");
  };

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_rgba(255,_52,_222,_0.9)_8.35%,_rgba(254,_86,_15,_0.9)_92.17%)] h-[111.375rem] overflow-hidden text-left text-[1.625rem] text-black font-inter">
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
      <i className="absolute top-[103.5rem] left-[31.563rem] text-[2rem] font-ibm-plex-sans text-gray-100">
        Developed by ~InnovHer Team
      </i>
      <b className="absolute top-[11.75rem] left-[12.125rem] text-[3.438rem] leading-[125%] inline-block w-[22.75rem] h-[4.438rem]">
        Home Decor:
      </b>
      <div className="absolute top-[20.75rem] left-[11.75rem] w-[32.813rem] h-[37.313rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[37.313rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[37.313rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-gray-400 box-border w-[32.813rem] h-[37.313rem] border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[26.813rem] left-[3.744rem] w-[25.894rem] h-[9.438rem]">
            <div
              className="absolute top-[4.813rem] left-[2.731rem] w-[21.281rem] h-[4.625rem] cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-whitesmoke-200 w-[20.056rem] h-[4.625rem]" />
              <b className="absolute top-[1.375rem] left-[4.631rem] inline-block w-[16.65rem] h-[2.006rem]">{`AR View & Details`}</b>
              <img
                className="absolute top-[1.5rem] left-[1.075rem] w-[2.444rem] h-[1.869rem] object-cover"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="absolute top-[0rem] left-[13.519rem] w-[12.375rem] h-[3.75rem] text-[1.75rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-whitesmoke-200 w-[12.375rem] h-[3.75rem]" />
              <div className="absolute top-[0.813rem] left-[4.063rem] w-[7.919rem] h-[2.063rem]">
                <div className="absolute top-[0rem] left-[0rem] font-semibold inline-block w-[7.919rem] h-[2.063rem]">
                  Wishlist
                </div>
              </div>
              <img
                className="absolute top-[0.625rem] left-[1.019rem] w-[3.238rem] h-[2.5rem] object-cover"
                alt=""
                src="/component-4@2x.png"
              />
            </div>
            <div
              className="absolute top-[0rem] left-[0rem] w-[12.375rem] h-[3.75rem] text-[1.875rem] cursor-pointer"
              onClick={() => handleButtonClick("button1")}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
              <div className="absolute h-[62.33%] w-[92.12%] top-[16.67%] left-[7.68%] font-semibold inline-block">
                {buttonStates.button1 === "Added"? (
                  <span>
                    Added
                    <svg
                      className="inline-block w-[1.5rem] h-[1.5rem] ml-[0.5rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" fill="#000" />
                      <path d="M10 15L12 17L16 11" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </span>
                ) : (
                  buttonStates.button1
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[2.313rem] left-[2.313rem] w-[27.85rem] h-[22.55rem] object-cover"
          alt=""
          src="/group-4@2x.png"
        />
      </div>
      <div className="absolute top-[62rem] left-[28.625rem] w-[32.813rem] h-[37.313rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[37.313rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[37.313rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-gray-400 box-border w-[32.813rem] h-[37.313rem] border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[26.813rem] left-[3.744rem] w-[25.894rem] h-[9.438rem]">
            <div
              className="absolute top-[4.813rem] left-[2.731rem] w-[21.281rem] h-[4.625rem] cursor-pointer"
              onClick={onGroupContainerClick1}
            >
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-whitesmoke-200 w-[20.056rem] h-[4.625rem]" />
              <b className="absolute top-[1.375rem] left-[4.631rem] inline-block w-[16.65rem] h-[2.006rem]">{`AR View & Details`}</b>
              <img
                className="absolute top-[1.5rem] left-[1.075rem] w-[2.444rem] h-[1.869rem] object-cover"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="absolute top-[0rem] left-[13.519rem] w-[12.375rem] h-[3.75rem] text-[1.75rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-whitesmoke-200 w-[12.375rem] h-[3.75rem]" />
              <div className="absolute top-[0.813rem] left-[4.063rem] w-[7.919rem] h-[2.063rem]">
                <div className="absolute top-[0rem] left-[0rem] font-semibold inline-block w-[7.919rem] h-[2.063rem]">
                  Wishlist
                </div>
              </div>
              <img
                className="absolute top-[0.625rem] left-[1.019rem] w-[3.238rem] h-[2.5rem] object-cover"
                alt=""
                src="/component-4@2x.png"
              />
            </div>
            <div
              className="absolute top-[0rem] left-[0rem] w-[12.375rem] h-[3.75rem] text-[1.875rem] cursor-pointer"
              onClick={() => handleButtonClick("button2")}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
              <div className="absolute h-[62.33%] w-[92.12%] top-[16.67%] left-[7.68%] font-semibold inline-block">
                {buttonStates.button2 === "Added"? (
                  <span>
                    Added
                    <svg
                      className="inline-block w-[1.5rem] h-[1.5rem] ml-[0.5rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" fill="#000" />
                      <path d="M10 15L12 17L16 11" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </span>
                ) : (
                  buttonStates.button2
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[2.375rem] left-[3.313rem] w-[26.625rem] h-[22.563rem] object-cover"
          alt=""
          src="/group-6@2x.png"
        />
      </div>
      <div className="absolute top-[20.75rem] left-[45.5rem] w-[32.813rem] h-[37.313rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[37.313rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[37.313rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-gray-400 box-border w-[32.813rem] h-[37.313rem] border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[26.813rem] left-[3.744rem] w-[25.894rem] h-[9.438rem]">
            <div
              className="absolute top-[4.813rem] left-[2.731rem] w-[21.281rem] h-[4.625rem] cursor-pointer"
              onClick={onGroupContainerClick2}
            >
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-whitesmoke-200 w-[20.056rem] h-[4.625rem]" />
              <b className="absolute top-[1.375rem] left-[4.631rem] inline-block w-[16.65rem] h-[2.006rem]">{`AR View & Details`}</b>
              <img
                className="absolute top-[1.5rem] left-[1.075rem] w-[2.444rem] h-[1.869rem] object-cover"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="absolute top-[0rem] left-[13.519rem] w-[12.375rem] h-[3.75rem] text-[1.75rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-whitesmoke-200 w-[12.375rem] h-[3.75rem]" />
              <div className="absolute top-[0.813rem] left-[4.063rem] w-[7.919rem] h-[2.063rem]">
                <div className="absolute top-[0rem] left-[0rem] font-semibold inline-block w-[7.919rem] h-[2.063rem]">
                  Wishlist
                </div>
              </div>
              <img
                className="absolute top-[0.625rem] left-[1.019rem] w-[3.238rem] h-[2.5rem] object-cover"
                alt=""
                src="/component-41@2x.png"
              />
            </div>
            <div
              className="absolute top-[0rem] left-[0rem] w-[12.375rem] h-[3.75rem] text-[1.875rem] cursor-pointer"
              onClick={() => handleButtonClick("button3")}
            >
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-whitesmoke-100" />
              <div className="absolute h-[62.33%] w-[92.12%] top-[16.67%] left-[7.68%] font-semibold inline-block">
                {buttonStates.button3 === "Added"? (
                  <span>
                    Added
                    <svg
                      className="inline-block w-[1.5rem] h-[1.5rem] ml-[0.5rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" fill="#000" />
                      <path d="M10 15L12 17L16 11" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </span>
                ) : (
                  buttonStates.button3
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[2.313rem] left-[3.125rem] rounded-21xl w-[26.625rem] h-[22.563rem] object-cover"
          alt=""
          src="/rectangle-84@2x.png"
        />
      </div>
    </div>
  );
};

export default DecorIntro
