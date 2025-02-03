import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/banner/Blue Creative School Stationery Shop Instagram Post.png';
import img2 from '../../assets/banner/Soft Brown Minimalist Stationery Store Instagram Post.png';
// import img3 from '../../assets/banner/top-view-collection-stationery-objects-table.jpg';
// import img4 from '../../assets/banner/top-view-collection-stationery-objects-table.jpg';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
export default function BannerRight() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-full h-[100%]  "
      >
       <SwiperSlide>
          <img className=''  src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='' src={img2} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className='rounded-md w-[500px] h-[500px]' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-md w-[500px] h-[500px]' src={img4} alt="" />
        </SwiperSlide> */}
        
      </Swiper>
    </>
  )
}
