import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { NeonSkillsSliderType } from 'TYPES/domain/NeonSkillsSlider';
import { SkillsResponseDataItem } from 'TYPES/pages/Pages';
import SkillsSliderSlide from './SkillsSlider/SkillsSliderSlide';
import { LoadingsImageText } from 'COMPONENTS/Loadings';
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function NeonSkillsSlider({ dataSlides }: NeonSkillsSliderType) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{

                500: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1536: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 1000,
            }}
            noSwiping={dataSlides?.length === 0}
            noSwipingClass='swiper'
            modules={[Navigation]}
            speed={1000}
            className={`w-full${dataSlides?.length === 0 ? ' animate-pulse' : ''}`}>
            {!!dataSlides && dataSlides?.length === 0 ? (
                <>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[344px] bg-black/60 backdrop-blur-lg border border-gray-500/50 p-5 leading-10 rounded-lg'>
                            <LoadingsImageText />
                        </div>
                    </SwiperSlide>
                </>
            ) : (
                !!dataSlides &&
                dataSlides.map(({ id, attributes }: SkillsResponseDataItem) => (
                    <SwiperSlide
                        key={id}
                        className='!h-auto bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none'>
                        <SkillsSliderSlide dataSkille={attributes} />
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    );
}
