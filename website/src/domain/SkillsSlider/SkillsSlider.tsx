import NeonSkillsSlider from 'DOMAIN/NeonSkillsSlider';
import GetSkillsRequest from 'SERVICES/skills/GetSkills';
import { SkillsResponseDataItem } from 'TYPES/pages/Pages';
import { useEffect, useState } from 'react';

export default function SkillsSlider() {
    const [skills, setSkills] = useState<SkillsResponseDataItem[] | undefined>([]);
    useEffect(() => {
        GetSkillsRequest()
            .then(res => {
                setSkills(res?.data);
            })
            .catch(error => console.log(error));
    }, []);

    return <NeonSkillsSlider dataSlides={skills} />;
}
