import { FC } from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import CardSmall from "../../Common/CardSmall/CardSmall";

type SliderProps = {
  // label: string;
  // ternarySlider: boolean;
  // types: Array<{ id: number; name: string; url: string }>;
};

const Slider: FC<SliderProps> = ({}) => {
  return (
    <div>
      <>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="myyySwiper flex justify-center bg-blue-900 w-full"
        >
          <SwiperSlide>
            <CardSmall
              label={""}
              ternaryCardSmall={false}
              types={[]}
            ></CardSmall>
          </SwiperSlide>
          <SwiperSlide>
            <CardSmall
              label={""}
              ternaryCardSmall={false}
              types={[]}
            ></CardSmall>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <CardSmall
              label={""}
              ternaryCardSmall={false}
              types={[]}
            ></CardSmall>
          </SwiperSlide>{" "}
        </Swiper>
      </>
    </div>
  );
};
export default Slider;
