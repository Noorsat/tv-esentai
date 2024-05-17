import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import Card from "../Card";
import "../../styles/right-style.css";
import { combineSeances } from "../../utils";

const Cards = ({ timetable }) => {
  const sessions = timetable;

  const renderItems = (first, last) => {
    return sessions
      ?.slice(first, last)
      .map(({ name, image, uuid, objects }) => {
        const formatedSessions = combineSeances(objects[0].halls);
        if (formatedSessions.length === 0) return null;
        return (
          <SwiperSlide key={uuid}>
            <Card
              image={image.vertical}
              title={name}
              times={formatedSessions}
            />
          </SwiperSlide>
        );
      });
  };

  return (
    <div className="right">
      <h2 className="cards__header">Сегодня на экранах</h2>
      <div className="cards__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={7}
          autoplay={{ delay: 18000 }}
          slidesPerGroup={7}
        >
          {renderItems(0, 20)}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;