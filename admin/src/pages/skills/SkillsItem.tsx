import PopUp from "@/components/common/PopUp";
import { ClipboardList, MailBox } from "react-huge-icons/outline";
import React, { useState } from "react";
import ImageSite from "@/components/common/Image";
import { SkillDeleteType } from "@/Types/Services";
import Button from "@/components/common/Button";
import SkillDeleteRequest from "@/services/Skills/SkillDelete";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "@/redux/Hook";
import {
	allowedLoading,
	disAllowedLoading,
} from "@/redux/Loading/LoadingSlice";

function SkillsItem({ id, dataSkille, getData }: any) {
	const [showAddSection, setShowAddSection] = useState<boolean>(false);
	const image = dataSkille?.thumbnail.data?.attributes;

	const dispatch = useAppDispatch();

	const removeSkill = ({ id }: SkillDeleteType) => {
		dispatch(allowedLoading());
		SkillDeleteRequest({ id })
			.then(res => {
				if (res.status === 200) {
					setShowAddSection(false);
					getData();
				}
			})
			.catch(err => {
				console.log(err);
				dispatch(disAllowedLoading());
			});
	};

	return (
		<div
			key={id}
			className="flex flex-col justify-between gap-5 bg-white shadow p-3 rounded-lg h-54">
			<div className="w-full flex gap-3 items-center justify-between">
				<div className="flex flex-col gap-3 justify-between">
					<div>{dataSkille.titleFa}</div>
					<div>{dataSkille.titleEn}</div>
				</div>

				{!!image && (
					<ImageSite
						width={60}
						height={60}
						src={image?.url}
						alt={image?.alternativeText}
						className="rounded"
					/>
				)}
			</div>
			<div className="leading-7">{dataSkille.descriptin}</div>
			<div className="flex flex-wrap gap-3 items-center justify-between h-10">
				<div className="flex flex-wrap gap-3 items-center">
					<div className="flex gap-1 items-center">
						<MailBox className="w-5 h-5 text-primary" />
						<span className="font-light pt-1">
							{dataSkille?.recommends.data.length}
						</span>
					</div>
					<div className="flex gap-1 items-center">
						<ClipboardList className="w-5 h-5 text-primary" />
						<span className="font-light pt-1">{dataSkille.skillProjects}</span>
					</div>
				</div>

				<div className="flex flex-wrap gap-3 items-center justify-between">
					<Button
						text="حذف"
						width="w-auto"
						color="#d00000"
						onClick={() => setShowAddSection(true)}
					/>

					<NavLink to={`/skill/edit/${id}`}>
						<Button text="ویرایش" width="w-auto" color="#29bf12" />
					</NavLink>
				</div>

				<PopUp action={showAddSection} setAction={setShowAddSection}>
					<div className="w-full flex flex-col items-center justify-center gap-5 pt-10 pb-8 h-full">
						<p className="md:text-xl text-center">
							آیا مایل به حذف مهارت <b>{dataSkille.titleEn}</b> هستید؟
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
	);
}

export default React.memo(SkillsItem);
