import {
	ClipboardList,
	MailBox,
	SpringNotesAdd,
} from "react-huge-icons/outline";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SkillsListItem } from "@/types/pages";
import GetSkillsRequest from "@/services/Skills/GetSkills";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import SkillDeleteRequest from "@/services/Skills/SkillDelete";
import { SkillDeleteType } from "@/types/services";
import PopUp from "@/components/common/PopUp";
import Button from "@/components/common/Button";
import { Color } from "@/global/global";

function Skills() {
	const [skillsData, setSkillsData] = useState<SkillsListItem[]>();
	const [showAddSection, setShowAddSection] = useState<boolean>(false);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const removeSkill = ({ id }: SkillDeleteType) => {
		SkillDeleteRequest({ id }).then(res => {
			if (res.status === 200) {
				setShowAddSection(false);
				getData();
			}
		});
	};

	const getData = () => {
		dispatch(allowedLoading());
		GetSkillsRequest()
			.then(data => {
				setSkillsData(data);
				dispatch(disAllowedLoading());
			})
			.catch(err => console.error(err));
	};

	useEffect(() => {
		dispatch(newTitle("مهارت ها"));
	}, []);

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between w-full gap-6 bg-white p-3 rounded-lg shadow mb-7">
				<p>میخواهید تمامی مهارت ها را مشاهده کنید؟</p>
				<NavLink to="/skill/add">
					<Button
						text="افزودن مهارت جدید"
						width="w-auto"
						color={Color.primary}
					/>
				</NavLink>
			</div>

			<div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
					<div
						className="flex flex-col gap-3 items-center justify-center border-2 border-dashed border-primary p-3 rounded-lg w-full h-54 cursor-pointer text-primary animate-pulse"
						onClick={() => navigate("/skill/add")}>
						<SpringNotesAdd className="w-20 h-20" />
						<p className="text-center">
							{skillsData && skillsData?.length >= 1
								? "اگر مهارت جدید داری از اینجا اضافه کن :)"
								: "اولین مهارتتو از اینجا وارد کن"}
						</p>
					</div>
					{skillsData &&
						skillsData?.length >= 1 &&
						skillsData.map(
							({
								id,
								titleFa,
								titleEn,
								descriptin,
								thumbnail,
								recommmendations,
								projects,
							}) => (
								<div
									key={id}
									className="flex group/remove flex-col justify-between gap-10 bg-white shadow p-3 rounded-lg h-54">
									<div className="w-full flex gap-3 items-center justify-between">
										<div className="flex flex-col gap-3 justify-between">
											<div>{titleFa}</div>
											<div>{titleEn}</div>
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
									<div className="flex gap-3 items-center justify-between h-10">
										<div className="flex gap-3 items-start">
											<div className="flex gap-1 items-center">
												<MailBox className="w-5 h-5 text-primary" />
												<span className="font-light pt-1">
													{recommmendations}
												</span>
											</div>
											<div className="flex gap-1 items-center">
												<ClipboardList className="w-5 h-5 text-primary" />
												<span className="font-light pt-1">{projects}</span>
											</div>
										</div>

										<Button
											text="حذف"
											width="w-auto hidden group-hover/remove:flex"
											color="#d00000"
											onClick={() => setShowAddSection(true)}
										/>

										<NavLink to={`/skill/edit/${id}`}>
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
													آیا مایل به حذف مهارت <b>{titleEn}</b> هستید؟
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
														onClick={() => removeSkill({ id })}
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

export default React.memo(Skills);
