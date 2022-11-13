import styles from "./events.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";
import Img1 from "../../public/assets/awesome-solitude-bess-hamiti.jpg";

const Events = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={styles.maincont}>
      <div className={styles.events_main_cont}>
        <div className={styles.events_left_cont}>
          <h1 className={styles.left_cont_h1}>EVENTS</h1>
        </div>
        <div className={styles.events_right_cont}>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className={styles.right_cont_item}>
              <Image
                className={styles.right_cont_img}
                src={Img1}
                layout="fill"
              />
            </div>
            <div className={styles.right_cont_item}>
              
              {/* <Image
                className={styles.right_cont_img}
                src={Img1}
                layout="fill"
              /> */}
            </div>
            <div className={styles.right_cont_item}>
            <Image
            className={styles.right_cont_img}
            src={Img1}
            layout="fill"
            />
            </div>
            <div className={styles.right_cont_item}>
                <Image
            className={styles.right_cont_img}
            src={Img1}
            layout="fill"
            />
            </div>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default Events;
