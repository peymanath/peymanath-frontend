import { http } from 'SERVICES/HttpService';
import { SkillsListItem, SkillsResponseData } from 'TYPES/pages/Pages';

export default async function GetSkillsRequest() {
    return await http.get<SkillsListItem[], SkillsResponseData>('/skills?populate=*').then(res => {
        if (res.status === 200) {
            return res.data;
        }
    });
    // .then(({ data }) => console.log(data))
}
