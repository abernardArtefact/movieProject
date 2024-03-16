import { FC } from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
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
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
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
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};
export default Slider;
