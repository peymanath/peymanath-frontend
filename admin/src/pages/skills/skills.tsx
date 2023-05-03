import Image from "@/components/common/Image";
import { SkillsList } from "./skillsList";
import { ClipboardList, MailBox } from "react-huge-icons/outline";
import { useGlobalStore } from "@/context/GlobalStoreProvider";
import { useEffect } from "react";

export default function Skills() {
	const { globalStore, setGlobalStore } = useGlobalStore();
	useEffect(() => {
		setGlobalStore({ ...globalStore, titleHeader: "مهارت ها" });
	}, []);
	return (
		<div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
				{SkillsList &&
					SkillsList.map(
						({ id, titleFa, titleEn, descriptin, imageUrl, metaData }) => (
							<div
								key={id}
								className="flex flex-col justify-between gap-10 bg-white shadow-xl p-3 rounded-lg">
								<div className="w-full flex gap-1 items-start justify-between">
									<div className="flex flex-col gap-3 justify-between">
										<div>{titleFa}</div>
										<div>{titleEn}</div>
									</div>

									<Image width={50} height={50} src={imageUrl} alt="" />
								</div>
								<div className="">{descriptin}</div>
								<div className="flex gap-1 items-start justify-between ">
									<div className="flex gap-2 items-center">
										<MailBox className="w-6 h-6 text-primary" />
										<span className="text-xl leading-none pt-1">
											{metaData.recommmendations}
										</span>
									</div>
									<div className="flex gap-2 items-center">
										<span className="text-xl leading-none pt-1">
											{metaData.project}
										</span>
										<ClipboardList className="w-6 h-6 text-rose-500" />
									</div>
								</div>
							</div>
						),
					)}
			</div>
		</div>
	);
}
