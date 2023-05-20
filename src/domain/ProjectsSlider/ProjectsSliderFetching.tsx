import SkillsSlider from 'DOMAIN/SkillsSlider';
import {ProjectsResponseDataItem} from 'TYPES/pages/Pages';
import {useEffect, useState} from 'react';
import GetProjectsRequest from "SERVICES/projects/GetProjects";
import ProjectsSlider from "DOMAIN/ProjectsSlider";

export default function ProjectsSliderFetching() {
    const [projects, setProjects] = useState<ProjectsResponseDataItem[] | undefined>([]);
    useEffect(() => {
        GetProjectsRequest()
            .then(res => {
                setTimeout(() => {

                    setProjects(res?.data);
                }, 4000)
            })
            .catch(error => console.log(error));
    }, []);

    return <ProjectsSlider dataSlides={projects}/>;
}
