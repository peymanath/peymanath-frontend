import {
	ClipboardList,
	MailBox,
	SpringNotesAdd,
} from "react-huge-icons/outline";
import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SkillsListItem } from "@/types/pages";
import GetSkillsRequest from "@/services/Skills/GetSkills";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";

function Skills() {
	const [skillsData, setSkillsData] = useState<SkillsListItem[]>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(newTitle("مهارت ها"));
	}, []);

	useEffect(() => {
		dispatch(allowedLoading());
		GetSkillsRequest()
			.then(data => {
				setSkillsData(data);
				dispatch(disAllowedLoading());
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
				<div
					className="flex flex-col gap-3 items-center justify-center border-2 border-dashed border-primary p-3 rounded-lg w-full h-56 cursor-pointer text-primary animate-pulse"
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
								className="flex flex-col justify-between gap-10 bg-white shadow p-3 rounded-lg h-56">
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
								<div className="flex gap-3 items-start">
									<div className="flex gap-1 items-center">
										<MailBox className="w-5 h-5 text-primary" />
										<span className="font-light pt-1">{recommmendations}</span>
									</div>
									<div className="flex gap-1 items-center">
										<ClipboardList className="w-5 h-5 text-primary" />
										<span className="font-light pt-1">{projects}</span>
									</div>
								</div>
							</div>
						),
					)}
			</div>
		</div>
	);
}

export default React.memo(Skills);
