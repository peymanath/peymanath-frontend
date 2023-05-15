import NeonSliderEffectCart from 'DOMAIN/NeonSliderEffectCart';
import SkillsItem from 'DOMAIN/SkillsSlider/SkillsItem';
import { DataSliderType } from 'TYPES/domain/NeonSliderEffectCart';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DirectionDownDouble } from 'react-huge-icons/outline';

export const metadata: Metadata = { title: 'صفحه اصلی' };
const dataSliderHome: DataSliderType[] = [
  {
    id: 1,
    content:
      'سال 1401 بود که برای سایت خودم سئو یاد گرفتم و از همانجا بود علاقمند به حوزه وب شدم و از Css و Html شروع کردم به یاد گیری و هم راستا با این هسته وردپرس رو شروع کردم به اموزش دیدن. برای درک بهتر PHP رو هم شروع کردم به اموزش دیدن. در این بین من بهینه سازی قالب های وردپرسی انجام میدادم و میدم. بریم اسلاید بعدی ...',
  },
  {
    id: 2,
    content:
      'اینجا بود برای یکی از سایت های من قالب اختصاصی برای یک سایت شرکتی/فروشگاهی طراحی کردم با کتابخانه TailwinsCss و بک اند ان هم وردپرس بود. هم راستا با تمامی این موضوع ها من JavaScript رو شروع کرده بودم و بعد این قالب تصمیم گرفتم یک کار جالب بکنم. بریم اسلاید بعدی ...',
  },
  {
    id: 3,
    content:
      'خواستم مسیر FrontEnd رو ادامه بدم و ReactJs رو آموزش دیدم و کم کم به سمت NextJs هدایت شدم و الان یک نیروی Junior Front-End Developer هستم. خوشحال میشم با شرکت ها و تیم های مختلف همکاری کنم.',
  },
];
export default function Home() {
  return (
    <div className='container'>
      <SkillsItem />
      <div className='relative flex flex-col items-center justify-center text-center gap-10 h-[100vh] px-7 lg:px-20 '>
        <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
          <span>توسعه دهنده فرانت اند</span>
          <span className='animate-color-text'> Next.Js | TypeScript</span>
        </p>
        <p className='font-thin leading-7'>
          علاقمند به پیشرفت در فرانت اند هستم و دوست دارم روزی استارتاپ خودمو راه اندازی کنم :)
        </p>
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
        className='flex flex-col justify-center gap-10 lg:gap-40 h-[100vh]'>
        <p className='flex flex-wrap gap-3 items-center justify-center font-semibold text-2xl lg:text-4xl'>
          <span>خلاصه کوتاهی از</span>
          <span className='animate-color-text'> پیمان نادری</span>
        </p>
        <div className='flex flex-col-reverse items-center justify-center text-center gap-10 lg:flex-row'>
          <div className='w-full lg:w-1/2 px-6 lg:px-20'>
            <NeonSliderEffectCart dataSlides={dataSliderHome} />
          </div>
          <div className='w-1/2 lg:flex items-center justify-center'>
            <Image
              width={300}
              height={300}
              src='/assets/images/peyman3.png'
              alt='Peyman Naderi'
              className='rounded-lg w-72 lg:w-[400px] opacity-60'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
