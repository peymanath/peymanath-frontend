import { SpringNotesAdd } from "react-huge-icons/outline";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProjectsListItem, SkillsListItem } from "@/types/pages";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import { ProjectDeleteType } from "@/types/services";
import PopUp from "@/components/common/PopUp";
import Button from "@/components/common/Button";
import { Color } from "@/global/global";
import GetProjectsRequest from "@/services/Projects/GetProjects";
import ProjectDeleteRequest from "@/services/Projects/ProjectDelete";

function Projects() {
	const [projectsData, setProjectsData] = useState<ProjectsListItem[]>();
	const [skillsData, setSkillsData] = useState<SkillsListItem[]>();
	const [showAddSection, setShowAddSection] = useState<boolean>(false);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const removeProject = ({ id }: ProjectDeleteType) => {
		ProjectDeleteRequest({ id }).then(res => {
			if (res.status === 200) {
				setShowAddSection(false);
				getData();
			}
		});
	};

	const getData = () => {
		dispatch(allowedLoading());
		GetProjectsRequest()
			.then(data => {
				setProjectsData(data);
				dispatch(disAllowedLoading());
			})
			.catch(err => {
				console.error(err);
				dispatch(disAllowedLoading());
			});
	};

	useEffect(() => {
		dispatch(newTitle("پروژه ها"));
	}, []);

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between w-full gap-6 bg-white p-3 rounded-lg shadow mb-7">
				<p>میخواهید پروژه جدید اضافه کنید؟</p>
				<NavLink to="/projects">
					<Button
						text="افزودن پروژه جدید"
						width="w-auto"
						color={Color.primary}
					/>
				</NavLink>
			</div>

			<div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
					<div
						className="flex flex-col gap-3 items-center justify-center border-2 border-dashed border-primary p-3 rounded-lg w-full h-54 cursor-pointer text-primary animate-pulse"
						onClick={() => navigate("/project/add")}>
						<SpringNotesAdd className="w-20 h-20" />
						<p className="text-center">
							{projectsData && projectsData?.length >= 1
								? "اگر پروژه جدید داری از اینجا اضافه کن :)"
								: "اولین پروژتو از اینجا وارد کن"}
						</p>
					</div>
					{projectsData &&
						projectsData?.length >= 1 &&
						projectsData.map(
							({
								id,
								title,
								descriptin,
								thumbnail,
								skills,
							}: ProjectsListItem) => (
								<div
									key={id}
									className="flex group/remove flex-col justify-between gap-10 bg-white shadow p-3 rounded-lg h-54">
									<div className="w-full flex gap-3 items-center justify-between">
										<div className="flex flex-col gap-3 justify-between">
											<div>{title}</div>
										</div>

										<img
											width={50}
											height={50}
											src={thumbnail}
											alt=""
											className="rounded"
										/>
									</div>
									<div className="leading-7">{descriptin}</div>

									{skills && (
										<div className="leading-7">
											<p>تعداد مهارت ها: {skills.length}</p>
										</div>
									)}

									<div className="flex gap-3 items-center justify-between h-10">
										<Button
											text="حذف"
											width="w-auto hidden group-hover/remove:flex"
											color="#d00000"
											onClick={() => setShowAddSection(true)}
										/>

										<NavLink to={`/project/edit/${id}`}>
											<Button
												text="ویرایش"
												width="w-auto hidden group-hover/remove:flex"
												color="#29bf12"
											/>
										</NavLink>

										<PopUp
											action={showAddSection}
											setAction={setShowAddSection}>
											<div className="w-full flex flex-col items-center justify-center gap-5 pt-10 pb-8 h-full">
												<p className="md:text-xl text-center">
													آیا مایل به حذف مهارت <b>{title}</b> هستید؟
												</p>
												<div className="flex gap-3 items-center justify-between">
													<Button
														text="منصرف شدم :)"
														width="w-auto"
														color="#29bf12"
														onClick={() => setShowAddSection(false)}
													/>
													<Button
														text="بله، حذف می‌کنم."
														width="w-auto"
														color="#d00000"
														onClick={() => removeProject({ id })}
													/>
												</div>
											</div>
										</PopUp>
									</div>
								</div>
							),
						)}
				</div>
			</div>
		</>
	);
}

export default React.memo(Projects);
