import NeonSkillsSlider from 'DOMAIN/NeonSkillsSlider';
import GetSkillsRequest from 'SERVICES/skills/GetSkills';
import { SkillsResponseDataItem } from 'TYPES/pages/Pages';
import { useEffect, useState } from 'react';

export default function SkillsSlider() {
    const [skills, setSkills] = useState<SkillsResponseDataItem[] | undefined>([]);
    useEffect(() => {
        GetSkillsRequest()
            .then(res => {
                setSkills(res?.data);
            })
            .catch(error => console.log(error));
    }, []);

    return skills?.length === 0 ? (
        <>
            <div className='w-full flex flex-wrap items-center justify-between animate-pulse'>
                <div className='relative w-20 h-20 rounded-lg bg-black/60 backdrop-blur-lg border border-gray-500/10'>
                    <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat'></div>
                </div>
                <div className='relative w-20 h-20 rounded-lg bg-black/60 backdrop-blur-lg border border-gray-500/10'>
                    <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat'></div>
                </div>
                <div className='relative w-20 h-20 rounded-lg bg-black/60 backdrop-blur-lg border border-gray-500/10'>
                    <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat'></div>
                </div>
                <div className='relative w-20 h-20 rounded-lg bg-black/60 backdrop-blur-lg border border-gray-500/10'>
                    <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat'></div>
                </div>
                <div className='relative w-20 h-20 rounded-lg bg-black/60 backdrop-blur-lg border border-gray-500/10'>
                    <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat'></div>
                </div>
            </div>
        </>
    ) : (
        <>
            <NeonSkillsSlider dataSlides={skills} />
        </>
    );
}
