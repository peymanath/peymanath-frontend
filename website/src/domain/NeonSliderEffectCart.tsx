'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { ArrowDropLeft, ArrowDropRight } from 'react-huge-icons/outline';
import { NeonSliderEffectCartType } from 'TYPES/domain/NeonSliderEffectCart';
SwiperCore.use([EffectCards, Navigation, Pagination]);

export default function NeonSliderEffectCart({ dataSlides }: NeonSliderEffectCartType) {
    const swiperRef = useRef<any>(null);
    return (
        !!dataSlides && (
            <Swiper
                effect={'cards'}
                modules={[EffectCards, Navigation, Pagination]}
                speed={1000}
                onBeforeInit={swiper => {
                    swiperRef.current = swiper;
                }}
                className='relativew-full font-thin'>
                {!!dataSlides &&
                    dataSlides.map(({ id, content }) => (
                        <SwiperSlide
                            key={id}
                            className='flex items-center justify-center pa relative bg-black/60 backdrop-blur-lg border border-gray-500/10 p-12 leading-10'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <span className='absolute top-4 right-4 text-2xl font-semibold text-primary/50 opacity-20'>
                                    {id}
                                </span>
                                <div className='absolute w-full h-full inset-0 bg-body bg-left bg-no-repeat opacity-60'></div>
                                <p className='text-sm leading-7 text-justify md:text-base md:leading-8 lg:text-lg lg:leading-10'>
                                    {content}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className='prev hidden lg:flex absolute top-1/2 -right-14 z-[999] opacity-50'>
                    <ArrowDropRight className='w-12 h-12' />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className='next hidden lg:flex absolute top-1/2 -left-14 z-[999] opacity-50'>
                    <ArrowDropLeft className='w-12 h-12' />
                </button>
            </Swiper>
        )
    );
}
