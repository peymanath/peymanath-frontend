import {Metadata} from 'next';
import {Layers} from 'react-huge-icons/outline';
import SkillsSliderSlide from 'DOMAIN/SkillsSlider/SkillsSliderSlide';
import GetSkillsRequest from 'SERVICES/skills/GetSkills';
import {SkillsResponseData, SkillsResponseDataItem} from 'TYPES/pages/Pages';
import {useEffect, useState} from 'react';

export const metadata: Metadata = {title: 'مهارت های پیمان نادری'};

export default function Skills() {
    const [skillsList, setSkillsList] = useState<SkillsResponseDataItem[] | null>(null);

    useEffect(() => {
        GetSkillsRequest().then(res => setSkillsList(res?.data || []));
    }, []);

    return (
        <div className='container flex flex-col gap-10'>
            <div className='flex items-center gap-3'>
                <Layers className='w-10 h-10 text-primary'/>
                <h1 className='font-semibold text-xl'>مهارت ها</h1>
            </div>

            {!!skillsList ? (
                skillsList.length > 0 ? (
                    <div className='flex flex-wrap'>
                        {skillsList.map(({id, attributes}: SkillsResponseDataItem) => (
                            <div key={id} className="!h-auto flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
                                <div
                                    className='!h-auto w-full bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none'>
                                    <SkillsSliderSlide dataSkille={attributes}/>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className='!h-auto bg-black/10 backdrop-blur border border-gray-500/50 py-5 px-7 leading-10 rounded-lg select-none text-center'>
                        <p>مهارتی یافت نشد :(</p>
                    </div>
                )
            ) : (
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span className='animate-color-text'>... Loading</span>
                </p>
            )}
        </div>
    );
}