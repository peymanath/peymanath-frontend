import { newTitle } from "@/redux/HeaderTitle/HeaderTitleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hook";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SkillsListItem } from "@/Types/Pages";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";
import Button from "@/components/common/Button";
import { Color } from "@/Global/Global";
import { getAsyncSkills } from "@/redux/Skills/SkillsSlice";
import SkillsItem from "./SkillsItem";

function Skills() {
	const [skillsData, setSkillsData] = useState<SkillsListItem[]>();
	const dispatch = useAppDispatch();
	const { skillsItem, loading } = useAppSelector(state => state.skills);

	const getData = () => {
		dispatch(getAsyncSkills());
	};

	useEffect(() => {
		setSkillsData(skillsItem || []);
	}, [skillsItem]);

	useEffect(() => {
		dispatch(loading ? allowedLoading() : disAllowedLoading());
	}, [loading]);

	useEffect(() => {
		dispatch(newTitle("مهارت ها"));
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
					{!!skillsData?.length && skillsData.length >= 1 ? (
						skillsData.map(({ id, attributes }: any) => (
							<SkillsItem
								key={id}
								dataSkille={attributes}
								id={id}
								getData={getData}
							/>
						))
					) : (
						<>Not Source</>
					)}
				</div>
			</div>
		</>
	);
}

export default React.memo(Skills);
