import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ArrowDropLeft, ArrowDropRight } from 'react-huge-icons/outline';
import { NeonSkillsSliderType } from 'TYPES/domain/NeonSkillsSlider';
import { SkillsResponseDataItem } from 'TYPES/pages/Pages';
import SkillsSliderSlide from './SkillsSlider/SkillsSliderSlide';
SwiperCore.use([EffectCards, Navigation, Pagination]);

export default function NeonSkillsSlider({ dataSlides }: NeonSkillsSliderType) {
    const swiperRef = useRef<any>(null);

    return (
        <Swiper
            breakpoints={{
                0: {
                    width: 0,
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1536: {
                    width: 1536,
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            modules={[EffectCards, Navigation, Pagination]}
            speed={1000}
            className='group/navigation w-full'>
            {!!dataSlides &&
                dataSlides.map(({ id, attributes }: SkillsResponseDataItem) => (
                    <SwiperSlide
                        key={id}
                        className='relative bg-black/60 backdrop-blur-lg border border-gray-500/10 p-12 leading-10'>
                        <SkillsSliderSlide dataSkille={attributes} />
                    </SwiperSlide>
                ))}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className='prev hidden opacity-0 lg:flex lg:group-hover/navigation:opacity-50 absolute top-1/2 right-0 z-[999] duration-300'>
                <ArrowDropRight className='w-12 h-12' />
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className='next hidden opacity-0 lg:flex lg:group-hover/navigation:opacity-50 absolute top-1/2 left-0 z-[999] duration-300'>
                <ArrowDropLeft className='w-12 h-12' />
            </button>
        </Swiper>
    );
}
