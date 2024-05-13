import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../img/pexels-thirdman-5400236.jpg";
import img1 from "../img/pexels-badun-18148377.jpg";
import img2 from "../img/pexels-cottonbro-7407117.jpg";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchItems } from "../features/homeSlice";
import Category from "../components/Category";

function Home() {
  const response = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div style={{ width: "100vw" }} className="justify-center items-center ">
      <Slider
        ref={sliderRef}
        className=" w-screen relative"
        {...settings}
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="w-screen h-screen">
          <div
            className="w-full  relative"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <img
              className="w-full  object-cover"
              style={{ height: "calc(100vh - 80px)" }}
              src={img}
              alt="Resim 1"
            />
            <div className="absolute top-1/3 left-1/2 w-1/3    ">
              <h2 className="text-6xl font-bold text-white">
                Excolive Collection
              </h2>
              <p className="text-gray-400 my-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                atque dolor veniam quaerat natus eum praesentium illo accusamus
                saepe sint quo dolorum repudiandae tempora quibusdam soluta
                distinctio harum voluptates voluptas, inventore magni? Corrupti
                quos in, laudantium rerum nisi illum eius!
              </p>
              <button className="text-white px-4 py-2 border mt-4 hover:bg-blue-500 transition-all duration-500">
                For Details
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen " style={{ height: "calc(100vh - 80px)" }}>
          <div className="w-full h-full relative">
            <img
              className="w-full object-cover"
              style={{ height: "calc(100vh - 80px)" }}
              src={img1}
              alt="Resim 2"
            />
            <div className="absolute top-1/3 left-1/2 w-1/3   ">
              <h2 className="text-6xl font-bold text-white">
                New Season Coats
              </h2>
              <p className="text-gray-400 my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                atque dolor veniam quaerat natus eum praesentium illo accusamus
                saepe sint quo dolorum repudiandae tempora quibusdam soluta
                distinctio harum voluptates voluptas, inventore magni? Corrupti
                quos in, laudantium rerum nisi illum eius!
              </p>
              <button className="text-white px-4 py-2 border mt-4 hover:bg-blue-500 transition-all duration-500">
                For Details
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen " style={{ height: "calc(100vh - 80px)" }}>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              style={{ height: "calc(100vh - 80px)" }}
              src={img2}
              alt="Resim 3"
            />
            <div className="absolute top-1/3 left-1/2 w-1/3   ">
              <h2 className="text-6xl font-bold text-white">Bag Collection </h2>
              <p className="text-gray-400 my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                atque dolor veniam quaerat natus eum praesentium illo accusamus
                saepe sint quo dolorum repudiandae tempora quibusdam soluta
                distinctio harum voluptates voluptas, inventore magni? Corrupti
                quos in, laudantium rerum nisi illum eius!
              </p>
              <button className="text-white px-4 py-2 border mt-4 hover:bg-blue-500 transition-all duration-500">
                For Details
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <div className="absolute top-1/2 right-4 z-10 mb-20 ">
        <button className="text-white mr-4" onClick={handleNextSlide}>
          <GoChevronRight className="size-8 text-white  ml-4 " />
        </button>
      </div>
      <div className="absolute top-1/2 left-4 z-10 mb-20 ">
        <button className="text-white" onClick={handlePrevSlide}>
          <GoChevronLeft className=" size-8 " />
        </button>
      </div>
      <div className=" w-[1500px] mx-auto my-16 flex  px-4 basis-1/2 items-center ">
        <h1 className="text-2xl font-semibold w-1/4 text-gray-700">
          Featured Products
        </h1>
        <p className=" w-3/4 text-sm text-gray-400 px-8 leading-6 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel! Quam
          quod officiis distinctio eius quo laudantium molestias laboriosam non
          voluptate odit, optio sit quae cumque vero possimus dolorum pariatur
          veritatis suscipit unde explicabo ducimus fugiat animi amet
          accusantium. Molestiae, sapiente non? Saepe non dolorem labore odio
          laborum consectetur repellat.
        </p>
      </div>
      <div className="flex  w-[1300px] mb-5 mx-auto basis-1/4 justify-around">
        {response?.products?.data?.map((eleman, index) => {
          return <Cards key={index} item={eleman} index={index} />;
        })}
      </div>
      <div className="my-40">
        <Category />
      </div>
    </div>
  );
}

export default Home;
