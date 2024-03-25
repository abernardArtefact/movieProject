import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y, Mousewheel, Keyboard } from "swiper/modules";
import { Navigation } from "swiper/modules";
import CardSmall from "../../Common/CardSmall/CardSmall";

type CardsData = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview?: string;
};
type SliderProps = {
  cardsData: CardsData[];
};

const Slider: FC<SliderProps> = ({ cardsData }) => {
  if (!cardsData) {
    return (
      <>
        <div>Chargement. Ca charge jamais cest top</div>
      </>
    );
  }
  return (
    <div>
      <>
        <Swiper
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
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <CardSmall moviess={[card]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
export default Slider;
