import Image from "@/components/common/Image";
import { SkillsList } from "./skillsList";
import {
	ClipboardList,
	MailBox,
	SpringNotesAdd,
} from "react-huge-icons/outline";
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Skills() {
	const navigate = useNavigate();
	const { setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ titleHeader:  "مهارت ها" });
	}, []);
	return (
		<div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
				<div
					className="flex flex-col gap-3 items-center justify-center border-2 border-dashed border-primary p-3 rounded-lg w-full h-full cursor-pointer text-primary animate-pulse"
					onClick={() => navigate("/skill/add")}>
					<SpringNotesAdd className="w-20 h-20" />
					<p className="text-center">
						اگر مهارت جدید داری از اینجا اضافه کن :)
					</p>
				</div>
				{SkillsList &&
					SkillsList.map(
						({ id, titleFa, titleEn, descriptin, imageUrl, metaData }) => (
							<div
								key={id}
								className="flex flex-col justify-between gap-10 bg-white shadow p-3 rounded-lg">
								<div className="w-full flex gap-3 items-start justify-between">
									<div className="flex flex-col gap-3 justify-between">
										<div>{titleFa}</div>
										<div>{titleEn}</div>
									</div>

									<Image width={50} height={50} src={imageUrl} alt="" />
								</div>
								<div className="leading-7">{descriptin}</div>
								<div className="flex gap-3 items-start">
									<div className="flex gap-1 items-center">
										<MailBox className="w-5 h-5 text-primary" />
										<span className="font-light pt-1">
											{metaData.recommmendations}
										</span>
									</div>
									<div className="flex gap-1 items-center">
										<ClipboardList className="w-5 h-5 text-primary" />
										<span className="font-light pt-1">{metaData.project}</span>
									</div>
								</div>
							</div>
						),
					)}
			</div>
		</div>
	);
}
