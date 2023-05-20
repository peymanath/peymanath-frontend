import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectsResponseDataItem } from 'TYPES/pages/Pages';
import SingleItemProject from 'DOMAIN/ProjectsSlider/SingleItemProject';
import { LoadingsImageTextProjects } from 'COMPONENTS/Loadings';
import { ProjectsSliderType } from 'TYPES/domain/ProjectsSliderType';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function ProjectsSlider({ dataSlides }: ProjectsSliderType) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 2500,
            }}
            noSwiping={dataSlides?.length === 0}
            noSwipingClass='swiper'
            modules={[Navigation]}
            speed={1000}
            className={`w-full${dataSlides?.length === 0 ? ' animate-pulse' : ''}`}>
            {!!dataSlides && dataSlides?.length === 0 ? (
                <>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[533px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageTextProjects />
                        </div>
                    </SwiperSlide>
                </>
            ) : (
                !!dataSlides &&
                dataSlides.map(({ id, attributes }: ProjectsResponseDataItem) => (
                    <SwiperSlide
                        key={id}
                        className='!h-auto bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none'>
                        <SingleItemProject dataProject={attributes} />
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    );
}
