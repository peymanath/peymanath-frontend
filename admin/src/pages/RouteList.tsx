import Dashboard from "./dashboard/Dashboard";
import Page404 from "./404/404";
import { RouteItem } from "@/types/pages";
import Skills from "./skills/skills";
import SkillsAdd from "./skills/SkillsAdd";
import SkillsEdit from "./skills/SkillsEdit";
import Donors from "./donors/Donors";
import Recommendations from "./recommendations/Recommendations";
import Setting from "./setting/Setting";
import SettingAccount from "./setting/SettingAccount";
import LoginAccount from "@/pages/auth/LoginAccount";
import LogoutAccount from "./auth/LogoutAccount";
import Projects from "./projects/Projects";
import ProjectsAdd from "./projects/ProjectsAdd";
import ProjectEdit from "./projects/ProjectsEdit";

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
