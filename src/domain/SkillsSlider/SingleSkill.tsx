import Image from 'next/image';
import { ClipboardList, MailBox } from 'react-huge-icons/outline';
import { Tooltip } from '@nextui-org/react';

export default function SkillsSliderSlide({ dataSkille }: any) {
    const imageData = dataSkille?.thumbnail.data?.attributes;
    return (
        <div className='flex flex-col gap-10 justify-between w-full h-full font-thin'>
            <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-60 -z-[999]'></div>

            <div className='w-full flex gap-3 items-center justify-center h-32'>
                {!!imageData && (
                    <Image
                        width={imageData.width}
                        height={imageData.height}
                        src={`${process.env.NEXT_PUBLIC_BASEURL}${imageData.url}`}
                        alt={imageData?.alternativeText || `لوگو مهارت ${dataSkille.titleEn}`}
                        title={imageData?.alternativeText || `لوگو مهارت ${dataSkille.titleEn}`}
                        className='w-20 h-auto rounded-lg'
                    />
                )}
            </div>

            <div className='w-full flex flex-wrap gap-3 items-center justify-between'>
                <h2>{dataSkille.titleEn}</h2>
                <div className='flex flex-wrap gap-5 justify-between'>
                    <Tooltip
                        content={`تعداد توصیه های مهارت ${dataSkille.titleEn}`}
                        color='invert'
                        placement='bottom'>
                        <div className='flex gap-1 items-center'>
                            <MailBox className='w-5 h-5 text-primary ' />
                            <span className='font-light pt-1'>
                                {dataSkille?.recommends.data.length}
                            </span>
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={`تعداد پروژه های مهارت ${dataSkille.titleEn}`}
                        color='invert'
                        placement='bottom'>
                        <div className='flex gap-1 items-center w-full h-full'>
                            <ClipboardList className='w-5 h-5 text-primary' />
                            <span className='font-light pt-1'>
                                {dataSkille.skill_projects.data.length }
                            </span>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
