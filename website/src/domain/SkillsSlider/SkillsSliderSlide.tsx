
import Image from 'next/image';
import { ClipboardList, MailBox } from 'react-huge-icons/outline';

export default function SkillsSliderSlide({ dataSkille }: any) {
    const imageData = dataSkille?.thumbnail.data?.attributes;
    return (
        <div className='flex flex-col items-center gap-3 justify-center w-full h-full'>
            <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-60'></div>

            <div className='w-full flex gap-3 items-center justify-center'>
                {!!imageData && (
                    <Image
                        width={imageData.width}
                        height={imageData.height}
                        src={`https://api.peymanath.ir${imageData.url}`}
                        alt={imageData.alternativeText}
                        className='w-32 h-32'
                    />
                )}
            </div>

            <div className='w-full flex flex-wrap gap-3 justify-between'>
                <div>{dataSkille.titleFa}</div>
                <div>{dataSkille.titleEn}</div>
            </div>

            <div className='leading-7'>{dataSkille.descriptin}</div>

            <div className='w-full flex flex-wrap gap-3 items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <MailBox className='w-5 h-5 text-primary' />
                    <span className='font-light pt-1'>{dataSkille?.recommends.data.length}</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <ClipboardList className='w-5 h-5 text-primary' />
                    <span className='font-light pt-1'>{dataSkille.skill_projects.data.length}</span>
                </div>
            </div>
        </div>
    );
}
