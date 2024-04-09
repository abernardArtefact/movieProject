import { FC, Key } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import CardSmall from "../../Common/CardSmall/CardSmall";

type CardsData = {
  index: Key | null | undefined;
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview?: string;
};

type SliderProps = {
  cardsData: CardsData[];
  addFavorite?: (movie: CardsData) => void;
  removeFavorite?: (movieId: number) => void;
};

const Slider: FC<SliderProps> = ({
  cardsData,
  addFavorite,
  removeFavorite,
}) => {
  if (!cardsData) {
    return (
      <>
        <div>Chargement. Ca charge jamais cest top</div>
      </>
    );
  }
  console.log(cardsData);

  return (
    <div>
      <>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="myyySwiper flex flex-row justify-center bg-blue-900 w-full "
        >
          {cardsData?.slice(0, 10).map((card) => (
            <SwiperSlide key={card.id}>
              <CardSmall
                movie={card}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
export default Slider;
