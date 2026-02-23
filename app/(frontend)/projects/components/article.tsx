import Link from "next/link";
import { Eye,  } from "lucide-react";
import {  ProjectspageDataQueryResult } from "@/sanity/types";

type Props = {
	project: ProjectspageDataQueryResult["projects"][number];
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between items-center gap-2">
					<span className="drop-shadow-orange group-hover:border-zinc-200 text-zinc-200 group-hover:text-white text-xs duration-1000">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="flex items-center gap-1 text-zinc-500 text-xs">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 font-display font-medium text-zinc-200 group-hover:text-white text-xl lg:text-3xl duration-1000">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-zinc-400 group-hover:text-zinc-200 text-sm duration-1000">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
