import SkillsSliderFetching from 'DOMAIN/SkillsSlider/SkillsSliderFetching';
import Link from 'next/link';
import { DirectionDownDouble } from 'react-huge-icons/outline';
import ProjectsSliderFetching from 'DOMAIN/ProjectsSlider/ProjectsSliderFetching';

const dataSliderHome: string =
    'سال 1401 بود که برای سایت خودم سئو یاد گرفتم و از همانجا بود علاقمند به حوزه وب شدم و از Css و Html شروع کردم به یاد گیری و هم راستا با این هسته وردپرس رو شروع کردم به اموزش دیدن. برای درک بهتر PHP رو هم شروع کردم به اموزش دیدن. در این بین من بهینه سازی قالب های وردپرسی انجام میدادم و میدم.  اینجا بود برای یکی از سایت های من قالب اختصاصی برای یک سایت شرکتی/فروشگاهی طراحی کردم با کتابخانه TailwinsCss و بک اند ان هم وردپرس بود. هم راستا با تمامی این موضوع ها من JavaScript رو شروع کرده بودم و بعد این قالب تصمیم گرفتم یک کار جالب بکنم.خواستم مسیر FrontEnd رو ادامه بدم و ReactJs رو آموزش دیدم و کم کم به سمت NextJs هدایت شدم و الان یک نیروی Junior Front-End Developer هستم. خوشحال میشم با شرکت ها و تیم های مختلف همکاری کنم.';
export default function Home() {
    return (
        <div className='container'>
            <div className='relative flex flex-col items-center justify-center text-center gap-10  px-7 lg:px-20 '>
                <div className='flex flex-col items-center justify-center gap-10 mt-[12.5rem] mb-[22rem] md:mt-52 md:mb-[25rem] lg:mt-56 lg:mb-96'>
                    <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                        <span>توسعه دهنده فرانت اند</span>
                        <span className='animate-color-text'> Next.Js | TypeScript</span>
                    </p>
                    <p className='font-thin leading-7'>
                        علاقمند به پیشرفت در فرانت اند هستم و دوست دارم روزی استارتاپ خودمو راه
                        اندازی کنم :)
                    </p>
                </div>
                <span className='absolute bottom-10 right-1/2 translate-x-1/2 z-[999]'>
                    <Link
                        href='#about-me'
                        scroll={false}>
                        <DirectionDownDouble className='w-10 h-10 animate-bounce opacity-75' />
                    </Link>
                </span>
            </div>
            <div
                id='about-me'
                className='relative flex flex-col justify-center gap-10 lg:gap-32 py-28 lg:py-52'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span>خلاصه کوتاهی از</span>
                    <span className='animate-color-text'> پیمان نادری</span>
                </p>
                <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
                    <div className='px-6 lg:px-20'>
                        <div className='flex items-center justify-center pa relative bg-black/10 backdrop-blur border border-gray-500/50 rounded-lg text-justify p-12 leading-10'>
                            {dataSliderHome}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id='skills-me'
                className='relative flex flex-col justify-center gap-10 lg:gap-40 pb-28 lg:pb-52'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span>مهارت های</span>
                    <span className='animate-color-text'> پیمان نادری</span>
                </p>
                <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
                    <SkillsSliderFetching />
                </div>
            </div>
            <div
                id='skills-me'
                className='relative flex flex-col justify-center gap-10 lg:gap-40 pb-12 lg:pb-24'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span>پروژه های</span>
                    <span className='animate-color-text'> پیمان نادری</span>
                </p>
                <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
                    <ProjectsSliderFetching />
                </div>
            </div>
            <div className='flex flex-col justify-center gap-10 lg:gap-40 h-[100vh]'>
                <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
                    <span className='animate-color-text'>... Updating</span>
                </p>
            </div>
        </div>
    );
}
