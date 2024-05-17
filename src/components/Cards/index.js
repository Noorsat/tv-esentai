import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import Card from "../Card";
import "../../styles/right-style.css";
import { combineSeances } from "../../utils";
import qr from '../../images/qr.png';

const Cards = ({ timetable }) => {
  const sessions = timetable;

  const renderItems = () => {
     const seances = sessions.map((session) => {
        const formatedSessions = combineSeances(session.objects[0].halls);
        if (formatedSessions.length === 0) return null;
        else return session
      }).filter(session => session !== null);

      const monitor = window.location.search.split('=')[1];

      if (monitor === 'right'){
        return seances.slice(0, 7).reverse().map(({image, name, objects, uuid}) => {
          const formatedSessions = combineSeances(objects[0].halls);
          return (
            <SwiperSlide key={uuid}>
              <Card 
                image={image.vertical}
                title={name}
                times={formatedSessions}
              />
            </SwiperSlide>
          )
        })
      }else{
        return seances.slice(7, 14).reverse().map(({image, name, objects, uuid}) => {
          const formatedSessions = combineSeances(objects[0].halls);
          return (
            <SwiperSlide key={uuid}>
              <Card 
                image={image.vertical}
                title={name}
                times={formatedSessions}
              />
            </SwiperSlide>
          )
        })
      }
  };

  return (
    <div className="right">
      <h2 className="cards__header">Сегодня на экранах</h2>
      <div className="cards__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={7}
          autoplay={{ delay: 18000 }}
          slidesPerGroup={0}
        >
          {renderItems()}
        </Swiper>
      </div>
      <div style={{display:'flex', alignItems: 'center', gap: '30px', marginTop: 20, position: 'absolute', bottom: 20, zIndex: 100, left: '50%', transform: 'translateX(-50%)'}}>
        <h1 className="cards__footer">Покупайте билеты на сайте kinopark.kz</h1> 
        <img src={qr} width={100} alt='qr' />
      </div>
    </div>
  );
};

export default Cards;
