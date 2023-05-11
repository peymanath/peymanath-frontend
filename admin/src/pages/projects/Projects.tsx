import { SpringNotesList } from "react-huge-icons/outline";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/Hook";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProjectsListItem } from "@/Types/Pages";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import { ProjectDeleteType } from "@/Types/Services";
import PopUp from "@/components/common/PopUp";
import Button from "@/components/common/Button";
import { Color } from "@/Global/Global";
import GetProjectsRequest from "@/services/Projects/GetProjects";
import ProjectDeleteRequest from "@/services/Projects/ProjectDelete";

function Projects() {
	const [projectsData, setProjectsData] = useState<ProjectsListItem[]>();
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
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
									className="flex flex-col justify-between gap-5 bg-white shadow p-3 rounded-lg">
									<div>
										<img
											width={800}
											height={450}
											src={thumbnail}
											alt=""
											className="w-full rounded-lg"
										/>
									</div>

									<div className="w-full flex gap-3 items-center justify-between">
										<div className="flex flex-col gap-3 justify-between">
											<div>{title}</div>
										</div>
									</div>

									<div className="flex flex-wrap gap-3 items-center justify-between h-10">
										<div className="flex flex-wrap gap-3 items-start">
											<div className="flex gap-1 items-center">
												<SpringNotesList className="w-5 h-5 text-primary" />
												<span className="font-light pt-1">
													{!!skills && skills.length}
												</span>
											</div>
										</div>

										<div className="flex flex-wrap gap-3 items-center justify-between">
											<Button
												text="حذف"
												width="w-auto"
												color="#d00000"
												onClick={() => setShowAddSection(true)}
											/>

											<NavLink to={`/project/edit/${id}`}>
												<Button text="ویرایش" width="w-auto" color="#29bf12" />
											</NavLink>
										</div>

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
