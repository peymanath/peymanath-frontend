import SkillsSlider from 'DOMAIN/SkillsSlider';
import {ProjectsResponseDataItem} from 'TYPES/pages/Pages';
import { useEffect, useState } from 'react';
import GetProjectsRequest from "SERVICES/projects/GetProjects";

export default function ProjectsSlider() {
    const [skills, setSkills] = useState<ProjectsResponseDataItem[] | undefined>([]);
    useEffect(() => {
        GetProjectsRequest()
            .then(res => {
                setSkills(res?.data);
            })
            .catch(error => console.log(error));
    }, []);

    return <></>;
}
