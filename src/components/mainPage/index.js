import React, { useState } from "react";
import "./index.css";
import topicon from "../images/Frame.png";
import aboutimg from "../images/aboutimg.png";
import footerflowImg from "../images/footerflower.png";
import cardimage from "../images/cardimage.png";
import facebook from "../images/face.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import linked from "../images/linked.png";
import youtube from "../images/youtube.png";
import smlImg from "../images/widthimg.png";
import { Modal } from "antd";

const productCardDatas = [
  {
    id: "1",
    imageurl: cardimage,
    name: "Raju Rassiboomb",
  },
  {
    id: "1",
    imageurl: cardimage,
    name: "Venkat prabhu",
  },
  {
    id: "1",
    imageurl: cardimage,
    name: "Vimal Ghosh",
  },
  {
    id: "1",
    imageurl: cardimage,
    name: "Arbas Khan",
  },
];

const Mainpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <div className="bg-image">
          <div className="bg-black bg-opacity-20 h-[51px] sm:h-[71px] flex items-center px-[20px] sm:px-[70px]">
            <img src={topicon} className="h-[30px] sm:h-[50px]" />
          </div>
          <div className="flex flex-col justify-end h-[330px] sm:h-[350px] lg:h-[456px]">
            <div className="flex flex-col pl-[30px] pb-[20px] sm:pl-[100px] sm:pb-[60px] gap-10">
              <p className="text-[20px] sm:text-[30px] lg:text-[44px] text-white font-semibold md:w-[574px]">
                The Choice is yours. Because they don't have one
              </p>
              <button className="h-[30px] w-[140px] sm:h-[52px] sm:w-[212px] bg-white text-[12px] sm:text-[20px] text-[#dc2626] font-semibold">
                QUICK VIEW
              </button>
            </div>
          </div>
        </div>
        <div className="px-[20px] sm:px-[100px]">
          <div className="mt-[10px] sm:mt-[70px]">
            <div className="flex flex-row justify-between gap-[20px] sm:gap-[0px] items-center w-[full]">
              <hr class="h-[4px] sm:h-[7px]   my-8 w-[500px]  border-0  bg-[#F27121]" />
              <h1 className="sm:font-semibold text-[#F27121]  text-[15px] sm:text-[32px]">
                About
              </h1>
              <hr class="h-[4px] sm:h-[7px] my-8 w-[500px]   border-0  bg-[#F27121]" />
            </div>
            <div className=" flex flex-col sm:flex-row justify-center gap-[40px] items-center">
              <img src={aboutimg} className=" hidden sm:block pt-[50px]  " />
              <div className="text-center mt-[10px] sm:mt-[40px]">
                <p className="text-[13px] sm:text-[16px]">
                  Our products are crafted exclusively from the drams and
                  screams of young kids who wanted to show their mastery in
                  their chosen fields, but were directed towards a factory for
                  daily wages. Each cracker bursts brighter than their lost
                  smiles, and className be heard louder than their cries for
                  miles. Buy them, burst them, brag about them.
                </p>
                <p className="text-[16px] sm:text-[20px] font-semibold mt-[10px] sm:mt-[20px]">
                  The choice is yours. Because they don't have one.
                </p>
              </div>
              <img src={aboutimg} className="  hidden sm:block pt-[50px]" />
            </div>
          </div>
          <div className="mt-[10px] sm:mt-[70px]">
            <div className="flex flex-row justify-between gap-[20px] sm:gap-[0px] items-center w-[full]">
              <hr class="h-[4px] sm:h-[7px]   my-8 w-[100px] sm:w-[500px]  border-0  bg-[#F27121]" />
              <h1 className="sm:font-semibold text-[#F27121]  text-[13px] sm:text-[32px]">
                Our products
              </h1>
              <hr class="h-[4px] sm:h-[7px] my-8 w-[100px]  sm:w-[500px]  border-0  bg-[#F27121]" />
            </div>
            <div>
              <ul className="flex flex-wrap gap-[40px] sm:my-[40px] justify-center">
                {productCardDatas.map((item) => (
                  <div className="w-[500px] border-gray-400 border-[2px] p-[15px]">
                    <img src={item.imageurl} key={item.id} />
                    <div className="flex justify-between items-center mt-[10px]">
                      <p className="text-[14px] sm:text-[22px] font-semibold">
                        {item.name}
                      </p>
                      <button
                        onClick={showModal}
                        className="text-white text-[12px]  bg-[#FE0000] h-[28px] sm:h-[40px] w-[120px] sm:w-[150px]"
                      >
                        QUICK VIEW
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
              <hr class="h-[4px] sm:h-[7px] my-8 w-[full] mt-[] sm:mt-[50px]  border-0  bg-[#F27121] " />
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <div>
            <hr class="h-[4px] sm:h-[7px]  w-[full]    border-0  bg-[#ECE14C] " />
          </div>
          <div className="flex items-center justify-between py-[10px]  bg-[#25A769]">
            <div>
              <img src={footerflowImg} className="h-[50px] sm:h-[70px]" />
            </div>
            <div className="flex flex-col items-center justify-between gap-[10px]">
              <h1 className="text-[16px] sm:text-[20px] font-bold text-[#ECE14C]">
                Follow us on
              </h1>
              <div className="flex gap-[15px] ">
                <img src={insta} className="h-[25px] sm:h-[40px]" />
                <img src={youtube} className="h-[25px] sm:h-[40px]" />
                <img src={twitter} className="h-[25px] sm:h-[40px]" />
                <img src={facebook} className="h-[25px] sm:h-[40px]" />
                <img src={linked} className="h-[25px] sm:h-[40px]" />
              </div>
            </div>
            <div>
              <img src={footerflowImg} className="h-[50px] sm:h-[70px]" />
            </div>
          </div>
          <div>
            <hr class="h-[4px] sm:h-[7px]  w-[full]    border-0  bg-[#ECE14C] " />
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width="100vw"
          height="10000"
        >
          <div className="flex flex-col lg:flex-row gap-[40px] justify-betweeen items-center">
            <div className="sm:w-[65%]">
              <div className="sm:h-[50vh] mt-[40px] sm:mt-[0px]">
                <img src={smlImg} />
              </div>
              <div className="hidden lg:block">
                <div className="flex justify-between mt-[20px]  ">
                  <div>
                    <img src={smlImg} className="w-[190px] " />
                  </div>
                  <div>
                    <img src={smlImg} className="w-[190px]" />
                  </div>
                  <div>
                    <img src={smlImg} className="w-[190px]" />
                  </div>
                  <div>
                    <img src={smlImg} className="w-[190px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-[35%]">
              <div>
                <h1 className="font-semibold text-[22px] sm:text-[32px]">
                  Raju Rassiboomb
                </h1>
                <p className="text-[17px] sm:text-[20px] mt-[10px]">
                  MRP: 400 ₹
                </p>
                <p className="font-bold text-[18px] sm:text-[27px]">
                  Rajus Dreams/-
                </p>
                <p class="w-[full] max-w-lg border-t-2 border-dashed bg-[#F27121] mt-[10px]"></p>
              </div>
              <div className="py-[10px]">
                <p className="text-[16px] font-semibold">Product description</p>
                <p className="mt-[10px]">
                  This product packs an extra punch. Thanks to the literal
                  blood. tears and tears of a young boy.
                </p>
                <p class="w-[full] max-w-lg border-t-2 border-dashed bg-[#F27121] mt-[10px]"></p>
              </div>
              <div>
                <p className="font-semibold">Produt contents:</p>
                <p className="mt-[7px]">
                  🌟 10 hand-hurting pieces of rassi bombs
                </p>
                <p>🌟 Jilled with great pain</p>
                <p>🌟 Raju’s hopes</p>
                <p class="w-[full] max-w-lg border-t-2 border-dashed bg-[#F27121] mt-[10px]"></p>
              </div>
              <div>
                <p className="font-semibold mt-[10px]">Shipping Time:</p>
                <p className="mt-[7px]">
                  Before Raju understands that his dreams do not matter.
                </p>
                <button className="w-full mt-[30px] h-[40px] bg-[#FE0000] text-white font-semibold text-[17px]">
                  Choose Now
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Mainpage;
