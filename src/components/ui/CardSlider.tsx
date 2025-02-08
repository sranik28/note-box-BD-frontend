import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Card, { CardProps } from '../ui/Card';
import { Link } from 'react-router-dom';


export default function CardSlider({ items }: { items: CardProps[] }) {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // slidesPerView={1}
            // spaceBetween={30}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper container w-full"
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
        >

            
            {items?.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link to={`/${item.id}/product-detail`}>
                        <Card image={item.image} title={item.title} price={item.price} discount={item.discount} />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}