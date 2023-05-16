import Image from 'next/image';
import { ClipboardList, MailBox } from 'react-huge-icons/outline';
import { Tooltip } from '@nextui-org/react';

export default function SkillsSliderSlide({ dataSkille }: any) {
    const imageData = dataSkille?.thumbnail.data?.attributes;
    return (
        <div className='flex flex-col gap-10 justify-between w-full h-full font-thin'>
            <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-60 -z-[999]'></div>

            <div className='w-full flex gap-3 items-center justify-center'>
                {!!imageData && (
                    <Image
                        width={imageData.width}
                        height={imageData.height}
                        src={`https://api.peymanath.ir${imageData.url}`}
                        alt={imageData?.alternativeText || `لوگو مهارت ${dataSkille.titleEn}`}
                        className='w-32 h-auto p-4'
                    />
                )}
            </div>

            <div className='w-full flex flex-wrap gap-3 items-center justify-between'>
                <div>{dataSkille.titleEn}</div>
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
                                {dataSkille.skill_projects.data.length}
                            </span>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
