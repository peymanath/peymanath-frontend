import Dashboard from "./Dashboard/Dashboard";
import Page404 from "./404/404";
import { RouteItem } from "@/Types/Pages";
import Skills from "./Skills/skills";
import SkillsAdd from "./Skills/SkillsAdd";
import SkillsEdit from "./Skills/SkillsEdit";
import Donors from "./Donors/Donors";
import Recommendations from "./Recommendations/Recommendations";
import Setting from "./Setting/Setting";
import SettingAccount from "./Setting/SettingAccount";
import LoginAccount from "@/pages/Auth/LoginAccount";
import LogoutAccount from "./Auth/LogoutAccount";
import Projects from "./Projects/Projects";
import ProjectsAdd from "./Projects/ProjectsAdd";
import ProjectEdit from "./Projects/ProjectsEdit";

export const routeList: RouteItem[] = [
	{ key: 1, path: "/", element: <Dashboard /> },
	{ key: 2, path: "/projects", element: <Projects /> },
	{ key: 3, path: "/project/add", element: <ProjectsAdd /> },
	{ key: 4, path: "/project/edit/:id", element: <ProjectEdit /> },
	{ key: 5, path: "/skills", element: <Skills /> },
	{ key: 5, path: "/skill/add", element: <SkillsAdd /> },
	{ key: 6, path: "/skill/edit/:id", element: <SkillsEdit /> },
	{ key: 7, path: "/donors", element: <Donors /> },
	{ key: 8, path: "/recommendations", element: <Recommendations /> },
	{ key: 9, path: "/setting/general", element: <Setting /> },
	{ key: 9, path: "/setting/account", element: <SettingAccount /> },
	{ key: 10, path: "/logout", element: <LogoutAccount /> },
	{ key: 11, path: "*", element: <Page404 /> },
];
export const routeSingle: RouteItem[] = [
	{ key: 1, path: "*", element: <LoginAccount /> },
];
