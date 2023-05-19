import {Metadata} from 'next';
import {Layers} from 'react-huge-icons/outline';
import ProjectsSliderSlide from 'DOMAIN/ProjectsSlider/ProjectsSliderSlide';
import {ProjectsResponseDataItem} from 'TYPES/pages/Pages';
import {useEffect, useState} from 'react';
import GetProjectsRequest from "SERVICES/projects/GetProjects";
import SkillsSliderSlide from "DOMAIN/SkillsSlider/SkillsSliderSlide";

export const metadata: Metadata = {title: 'پروژه های پیمان نادری'};

export default function Projects() {
    const [projectsList, setProjectssList] = useState<ProjectsResponseDataItem[] | null>(null);

    useEffect(() => {
        GetProjectsRequest().then(res => setProjectssList(res?.data || []));
    }, []);

    console.log(projectsList)

    return (
        <div className='container flex flex-col gap-10'>
            <div className='flex items-center gap-3'>
                <Layers className='w-10 h-10 text-primary'/>
                <h1 className='font-semibold text-xl'>پروژه ها</h1>
            </div>

            {!!projectsList ? (
                projectsList.length > 0 ? (
                    <div className='flex flex-wrap'>
                        {projectsList.map(({id, attributes}: ProjectsResponseDataItem) => (
                            <div key={id} className="!h-auto flex w-full sm:w-1/2 md:w-1/3 p-3">
                                <div
                                    className='!h-auto w-full bg-black/10 backdrop-blur border border-gray-500/50 p-5 leading-10 rounded-lg select-none'>
                                    <ProjectsSliderSlide dataProject={attributes}/>
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