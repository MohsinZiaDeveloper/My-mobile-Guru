import React from "react";
import ImageAsset from "./ImageAsset";
import { FaStar } from "react-icons/fa";

import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const PhoneDetails = [
  {
    value: "Review",
    hrefLink: "/Review ",
  },
  {
    value: "Phone Description",
    hrefLink: "/phoneDescription",
  },

  {
    value: "Phone Spec",
    hrefLink: "/PhoneSpec ",
  },
  {
    value: "News",
    hrefLink: "/News ",
  },
];

const Acessories = [
  {
    value: "Comparisons",
    hrefLink: "/Comparison",
  },

  {
    value: "Upload Add",
    hrefLink: "/UploadAd ",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="WebsiteLogo  h-full mr-0 ml-0 text-center lg:text-left  lg:mr-10 lg:ml-10">
          <ImageAsset
            className="w-42 h-32 inline lg:block "
            src="websiteLogo"
          />
        </div>
        <div className="flex flex-col w-full  mt-10 lg:mt-20 ml-2 lg:ml-3">
          <div className="mainnavContent   w-full lg:w-7/12 ">
            <nav className="pl-10 pr-10  lg:pl-0 lg:pr-0">
              <ul className="flex flex-col lg:flex-row justify-between text-sm  space-y-3 items-baseline cursor-pointer">
                <li>
                  <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span
                      class="mr-1"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Home
                    </span>
                  </button>
                </li>
                <li class="z-10 mt-0">
                  <div>
                    <div class="group inline-block relative">
                      <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span
                          class="mr-1"
                          onClick={() => {
                            navigate("/PhoneDetails");
                          }}
                        >
                          PhoneDetails
                        </span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      <ul class=" lg:absolute hidden text-gray-700 pt-1 group-hover:block">
                        {PhoneDetails.map(({ hrefLink, value }) => {
                          return (
                            <li>
                              <span
                                className=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                onClick={() => {
                                  navigate(hrefLink);
                                }}
                              >
                                {value}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                    onClick={() => {
                      navigate("/MobileList");
                    }}
                  >
                    <span class="mr-1">Mobile List</span>
                  </button>
                </li>{" "}
                <li class=" z-10">
                  <div>
                    <div class="group inline-block relative">
                      <button
                        class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                        onClick={() => {
                          navigate("/acessories");
                        }}
                      >
                        <span class="mr-1">Acessories</span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      <ul class=" lg:absolute hidden text-gray-700 pt-1 group-hover:block">
                        {Acessories.map(({ hrefLink, value }) => {
                          return (
                            <li class="">
                              <span
                                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                onClick={() => {
                                  navigate(hrefLink);
                                }}
                              >
                                {value}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    class="bg-white text-gray-700 font-semibold  py-2 px-4 rounded inline-flex items-center"
                    onClick={() => {
                      navigate("/ContactUs");
                    }}
                  >
                    <span class="mr-1">Contact us </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="relative w-[95%] lg:w-8/12 ">
            <input
              className="bg-customGray rounded-full w-full pl-6 mt-4 text-blue-500 px-2 py-2"
              type="text"
              placeholder="search"
            />

            <button className="pointer-events-none cursor-pointer w-8 h-8 absolute top-9 transform -translate-y-1/2 right-4 ">
              <IoCloseOutline className="w-full  h-full" />
            </button>
          </div>
        </div>
        <div className="rightSideAvatar absolute 	hidden lg:block top-0 right-0 ">
          <ImageAsset
            className="w-[24rem]  h-[15rem] object-cover ml-4 mr-auto"
            src="headerRightSideImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
