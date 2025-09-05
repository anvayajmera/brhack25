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
  // prefer /images4pics if you later add that folder; otherwise use the existing /photos images
  const imgs = [
    '/images4pics/brhack24.png',
    '/images4pics/coderflic.png',
    '/images4pics/girlswhocode.png',
    '/images4pics/guestspeaker.png',
    '/images4pics/prizes.png',
    '/images4pics/winners24.png',
  ];

  // fallback to the repo's existing photos folder if images4pics isn't present
  const fallback = [
    '/photos/build.png',
    '/photos/compete.png',
    '/photos/eat.png',
    '/photos/speak.png',
    '/photos/become.png',
    '/photos/win.png',
  ];

  // group into pairs: three slides, two images each
  const pairs = [
    [imgs[0] || fallback[0], imgs[1] || fallback[1]],
    [imgs[2] || fallback[2], imgs[3] || fallback[3]],
    [imgs[4] || fallback[4], imgs[5] || fallback[5]],
  ];

  // tiny captions derived from the expected image meanings (based on filenames we copied)
  const captions = [
    'BRHacks 2024',
    'Participant Picture!',
    'Girls Who Code Workshop',
    'Guest Speaker Session',
    'Prize Display',
    '2025 Winners',
  ];

  return (
    <div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-pagination-color": "#D9D9D9",
        }}
      >
        {pairs.map((pair, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 px-6 desktop:px-0 items-stretch justify-center">
              {pair.map((src, i) => {
                const globalIndex = idx * 2 + i;
                const caption = captions[globalIndex] || '';
                const resolvedSrc = src.startsWith('/') ? src : `/photos/${src}`;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <img
                      className="w-full h-[360px] object-cover rounded-2xl border-4 border-white shadow-lg"
                      src={resolvedSrc}
                      alt={`hack-pic-${idx}-${i}`}
                    />
                    <p className="text-sm text-white/90 mt-3 text-center">{caption}</p>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
