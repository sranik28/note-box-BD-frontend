import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../assets/banner/pen-notebook-near-stationery.jpg';
import img2 from '../../assets/banner/school-supplies-white-wooden-background.jpg';
import img3 from '../../assets/banner/top-view-collection-stationery-objects-table.jpg';
import img4 from '../../assets/banner/top-view-collection-stationery-objects-table.jpg';



const BannerSlider: React.FC = () => {
  return (

    <Swiper pagination={true} autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }} modules={[Pagination,Autoplay, Navigation]} className="mySwiper w-full h-[100%]">
      <SwiperSlide>
        <img className='' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='' src={img4} alt="" />
      </SwiperSlide>
    </Swiper>

  );
};

export default BannerSlider;