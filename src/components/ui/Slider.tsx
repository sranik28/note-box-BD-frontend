import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CategoriesCard from './CategoriesCard';


type TSlider = {
    id: string,
    image: string,
    title: string
}

export default function Slider({ items }: { items: TSlider[] }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ dynamicMainBullets: 2 }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper container w-full"
            breakpoints={{
                320: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 6,
                },
            }}
        >
            {items?.map((item) => (
                <SwiperSlide key={item.id}>
                    <CategoriesCard image={item.image} title={item.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
