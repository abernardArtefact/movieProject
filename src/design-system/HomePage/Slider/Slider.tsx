import { FC, Key } from "react";
// import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CardSmall from "../../Common/CardSmall/CardSmall";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

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
};

const Slider: FC<SliderProps> = ({ cardsData }) => {
  const addFavorite = (movie: { id: any }) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.some((favorite: { id: any }) => favorite.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
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
          modules={[Navigation, Pagination, A11y, Mousewheel, Keyboard]}
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
          className="myyySwiper flex flex-row justify-center bg-blue-900 w-full"
        >
          {cardsData?.slice(0, 10).map((card) => (
            <SwiperSlide key={card.id}>
              <CardSmall movie={card} addFavorite={addFavorite} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
export default Slider;
