import { homeSwiperData } from "../../values/values";
import styles from "./home.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swiper = () => {
  return (
    <div
      className={`sections-padding`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className={`${styles.six_content}`}>
        <ReactSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            // Добавленная часть: настройка стрелок
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {homeSwiperData.map((ele) => {
            return (
              <SwiperSlide key={ele.id}>
                <div className={styles["slider-content"]}>
                  <div className={styles["img-holder"]}>
                    <img src={ele.image} alt="" className={styles.trainer} />
                  </div>

                  <div className={styles["slider-text"]}>
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </ReactSwiper>
      </div>
    </div>
  );
};

export default Swiper;
