import Image from 'next/image';
import {Bookmark, ClipboardList, MailBox, View} from 'react-huge-icons/outline';
import {Tooltip} from '@nextui-org/react';
import {ProjectsListItemSlide} from "TYPES/pages/Pages";
import Link from "next/link";

export default function ProjectsSliderSlide({dataProject}: ProjectsListItemSlide) {
    const imageData = dataProject?.thumbnail.data?.attributes;
    const category: String = (dataProject.project_categories.data.length > 0 && dataProject.project_categories.data[0].attributes.title) || ""
    return (
        <div className='flex flex-col gap-5 justify-between w-full h-full font-thin'>
            <div className='absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-60 -z-[999]'></div>

            <div className='w-full flex gap-3 items-center justify-center'>
                {!!imageData && (
                    <Image
                        width={imageData.width}
                        height={imageData.height}
                        src={`${process.env.NEXT_PUBLIC_BASEURL}${imageData.url}`}
                        alt={imageData?.alternativeText || `عکس پروژه ${dataProject.title}`}
                        className='rounded-lg w-full h-full'
                    />
                )}
            </div>

            <div className="flex flex-col justify-between h-full gap-5">

                <div className='w-full flex flex-wrap gap-3 items-center justify-center'>
                    <p className="font-normal">{dataProject.title}</p>
                </div>

                <div className='w-full flex flex-wrap gap-3 items-center justify-center'>
                    {
                        !!dataProject.desc &&
                        <p className="text-center">{dataProject.desc.substring(0, 150) + (dataProject.desc.length > 150 ? " ..." : "")}</p>

                    }
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                <span
                    className={`py-2 px-5 font-bold rounded-md text-xs ${dataProject.developing ? "bg-yellow-50 text-yellow-800" : "bg-green-50 text-green-800"}`}>
                    {dataProject.developing ? "در حال توسعه" : "اتمام توسعه"}
                </span>
                        {
                            !!category && <span
                                className="py-2 px-5 font-bold rounded-md text-xs bg-blue-50 text-blue-800">{category}</span>
                        }
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        {
                            !!dataProject.sourceUrl &&
                            <Tooltip content="سورس کد" color='invert'
                                     placement='bottom'>
                                <Link href={dataProject.sourceUrl} target="_blank"
                                      className="flex items-center justify-center bg-primary text-white rounded p-1.5">
                                    <Bookmark className="w-5 h-5"/>
                                </Link>
                            </Tooltip>
                        }
                        {
                            !!dataProject.previewUrl &&
                            <Tooltip content="پیش نمایش" color='invert'
                                     placement='bottom'>
                                <Link href={dataProject.previewUrl} target="_blank"
                                      className="flex items-center justify-center bg-primary text-white rounded p-1.5">
                                    <View className="w-5 h-5"/>
                                </Link>
                            </Tooltip>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
