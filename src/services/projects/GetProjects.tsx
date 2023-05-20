import { http } from 'SERVICES/HttpService';
import { ProjectsListItem, ProjectsResponseData } from 'TYPES/pages/Pages';

export default async function GetProjectsRequest() {
    return await http
        .get<ProjectsListItem[], ProjectsResponseData>('/projects?populate=*')
        .then(res => {
            if (res.status === 200) {
                return res.data;
            }
        });
}
