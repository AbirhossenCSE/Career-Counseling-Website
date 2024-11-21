import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = () => {
    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/G3jCtxs/1.jpg",
            title: "Career Planning Session",
            description: "Plan your career with expert guidance.",
        },
        {
            id: 2,
            image: "https://i.ibb.co/Nszjk6c/2.jpg",
            title: "Resume Building Assistance",
            description: "Build a resume that stands out.",
        },
        {
            id: 3,
            image: "https://i.ibb.co/Y36M9GX/3.jpg",
            title: "Mock Interview Sessions",
            description: "Prepare for interviews with confidence.",
        },
    ];

    return (
        <header>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[400px]">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                                <h2 className="text-4xl font-bold">{slide.title}</h2>
                                <p className="text-lg mt-4">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </header>
    );
};

export default Header;
