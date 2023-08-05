import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./offer.css"
import Product_1 from "./../images/Product.jpg"
import Product_2 from "./../images/Product_2.jpg"
import Product_3 from "./../images/Product_3.jpg"


function Slider() {
  return (

    <div className='Swiper'>
      <div className='offer-title'>
      <h2> Put the Title Here Put the Title Here  </h2>
        <h4 > Put the Title Here  </h4>
      </div>
    

      <div className='Slides'>
      <Swiper
      loop={true}  
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 1000, // time between transitions in ms
        disableOnInteraction: false // prevent autoplay from stopping on user interaction
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide className='Slider'>
        <img src={Product_1} alt='Slide 1' />
        <button> Buy !</button>
      </SwiperSlide>

      <SwiperSlide className='Slider'>
        <img src={Product_2} alt='Slide 2' />
        <button> Buy !</button>
      </SwiperSlide>

      <SwiperSlide className='Slider'>
        <img src={Product_3} alt='Slide 3' />
        <button> Buy !</button>
      </SwiperSlide>

      <SwiperSlide className='Slider'>
        <img src={Product_1} alt='Slide 4' />
        <button> Buy !</button>
      </SwiperSlide>

      <SwiperSlide className='Slider'>
        <img src={Product_2} alt='Slide 5' />
        <button> Buy !</button>
      </SwiperSlide>

      <SwiperSlide className='Slider'>
        <img src={Product_3} alt='Slide 6' />
        <button> Buy !</button>
      </SwiperSlide>
    </Swiper>
    </div>

      </div>

        

    
  );
}

export default Slider;