import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Heading from "./Headings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Bhagyesh from "../assets/customer2.jpeg";
import Megha from "../assets/customer1.jpeg";
import Arjit from "../assets/customer3.jpeg";
import Katrina from "../assets/customer4.jpeg";
import Neha from "../assets/customer5.jpeg";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mb-10 mx-auto">
        <Heading highlight="Customer" heading="Saying" />

        <div className="flex justify-end py-5 gap-x-3 ">
          <button className="custom-prev text-2xl flex  justify-center items-center rounded-lg w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl flex  justify-center items-center rounded-lg w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper 
        navigation={{
          nextEl:".custom-next",
          prevEl:".custom-prev"
        }} 
        loop={true}
        breakpoints={{
          640:{slidesPerView:1 , spaceBetween:20},
          768:{slidesPerView:2 , spaceBetween:20},
          1024:{slidesPerView:3 , spaceBetween:20}
        }}
        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
               <SwiperSlide  className="bg-zinc-100 rounded-xl p-8">
              <div  className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-offset-4 overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600 ">{item.profession}</p>
                  <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                    {Array.from({length : item.rating},(_,index)=>(
                      <FaStar />
                    ))}
                  </span>
                </div>
              </div>
              <div className="mt-10 min-h-[15vh]">
                <p className="text-zinc-600">
                  {item.para}
                </p>
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Bhagyesh Yewalekar",
    profession: "Scientist",
    rating: "4.5",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio obcaecati reiciendis nobis error in quas sit ",
    image: Bhagyesh,
  },
  {
    id: 2,
    name: "Megha Yewalekar",
    profession: "Developer",
    rating: "4.7",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio obcaecati reiciendis nobis error in quas sit ",
    image: Megha,
  },
  {
    id: 3,
    name: "Riya Singh",
    profession: "Singer",
    rating: "3.5",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio obcaecati reiciendis nobis error in quas sit ",
    image: Arjit,
  },
  {
    id: 4,
    name: "Jak losiaano",
    profession: "Actress",
    rating: "5",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio obcaecati reiciendis nobis error in quas sit ",
    image: Katrina,
  },
  {
    id: 5,
    name: "Neha Agrraval",
    profession: "Lawyer",
    rating: "4.7",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio obcaecati reiciendis nobis error in quas sit ",
    image: Neha,
  },
];
