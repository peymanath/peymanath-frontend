import {Layers} from 'react-huge-icons/outline';
import ProjectsSliderSlide from 'DOMAIN/ProjectsSlider/ProjectsSliderSlide';
import {ProjectsResponseDataItem} from 'TYPES/pages/Pages';
import {useEffect, useState} from 'react';
import GetProjectsRequest from "SERVICES/projects/GetProjects";
import Head from "next/head";
import GetSkillsRequest from "SERVICES/skills/GetSkills";

export default function Projects() {
    const [projectsList, setProjectssList] = useState<ProjectsResponseDataItem[] | null>(null);

    useEffect(() => {
        GetProjectsRequest().then(res => setProjectssList(res?.data || []));
    }, []);

    return (
        <>
            <Head>
                <title>مهارت های توسعه دهنده فرانت اند | پیمان نادری</title>
                <meta
                    name='description'
                    content='مهارت های پیمان نادری، توسعه دهنده فرانت اند دور کار'
                />
                <link
                    rel='canonical'
                    href='https://peymanath.ir/skills'
                />
                <meta
                    property='og:title'
                    content='مهارت های توسعه دهنده فرانت اند | پیمان نادری'
                    key='title'
                />
                <meta
                    property='og:description'
                    content='مهارت های پیمان نادری، توسعه دهنده فرانت اند دور کار'
                />
                <meta
                    property='twitter:title'
                    content='مهارت های توسعه دهنده فرانت اند | پیمان نادری'
                />
                <meta
                    property='twitter:description'
                    content='مهارت های پیمان نادری، توسعه دهنده فرانت اند دور کار'
                />
            </Head>

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
        </>
    );
}


export async function getStaticProps() {

    const data = await GetProjectsRequest();

    return {
        props: {
            projectsList: data?.data || []
        },
        revalidate: 3600
    }
}