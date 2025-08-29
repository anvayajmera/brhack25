// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function PhotoSwiper() {
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(2);
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(2);
    }
  };
  return (
    <div>
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={40}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-pagination-color": "#D9D9D9",
        }}
      >
        <SwiperSlide>
          <div className="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img className="max-h-[430px]" src="../photos/build.png"/>
            <h1 className='text-4xl py-10 text-center'>Build your resume!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img className="max-h-[430px]" src="../photos/compete.png"/>
            <h1 className='text-4xl py-10 text-center'>Compete with your peers!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img className="max-h-[430px]" src="../photos/eat.png"/>
            <h1 className='text-4xl py-10 text-center'>Eat good food!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img className="max-h-[430px]" src="../photos/speak.png"/>
            <h1 className='text-4xl py-10 text-center'>Speak with recruiters!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img className="max-h-[430px]" src="../photos/become.png"/>
            <h1 className='text-4xl py-10 text-center'>Become more technical!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img className="max-h-[430px]" src="../photos/win.png"/>
            <h1 className='text-4xl py-10 text-center'>Win cool prizes!</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
