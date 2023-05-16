import { Metadata } from 'next';
import { Layers } from 'react-huge-icons/outline';
import SkillsSliderSlide from 'DOMAIN/SkillsSlider/SkillsSliderSlide';
import GetSkillsRequest from 'SERVICES/skills/GetSkills';
import { SkillsResponseDataItem } from 'TYPES/pages/Pages';
import { SwiperSlide } from 'swiper/react/swiper-react';

export const metadata: Metadata = { title: 'مهارت های پیمان نادری' };

export default function Skills({ skillsList }: any) {
    return (
        <div className='container flex flex-col gap-10'>
            <div className='flex items-center gap-3'>
                <Layers className='w-10 h-10 text-primary' />
                <h1 className='font-semibold text-xl'>مهارت ها</h1>
            </div>

            {!!skillsList && skillsList.length > 0 ? (
                <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3'>
                    {skillsList.map(({ id, attributes }: SkillsResponseDataItem) => (
                        <div
                            key={id}
                            className='!h-auto bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none'>
                            <SkillsSliderSlide dataSkille={attributes} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='!h-auto bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none text-center'>
                    <p>مهارتی یافت نشد :(</p>
                </div>
            )}
        </div>
    );
}

export async function getStaticProps() {
    const skillsList = await GetSkillsRequest();
    return {
        props: {
            skillsList: skillsList?.data || [],
        },
    };
}
