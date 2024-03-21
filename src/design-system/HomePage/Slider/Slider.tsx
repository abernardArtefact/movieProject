import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y, Mousewheel, Keyboard } from "swiper/modules";
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
          direction={"horizontal"}
          navigation={true}
          modules={[Navigation, Pagination, A11y, Mousewheel, Keyboard]}
          mousewheel={true}
          keyboard={true}
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
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="myyySwiper flex flex-row justify-center bg-blue-900 w-full"
        >
          <SwiperSlide>
            <CardSmall></CardSmall>
          </SwiperSlide>
          {/* <div className="hidden lg:flex lg:flex-row">
            <SwiperSlide>
              <CardSmall></CardSmall>
            </SwiperSlide>
            <SwiperSlide>
              <CardSmall></CardSmall>
            </SwiperSlide>
          </div> */}
        </Swiper>
      </>
    </div>
  );
};
export default Slider;
