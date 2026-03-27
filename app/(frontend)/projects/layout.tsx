import { Suspense } from "react";
import ProjectsLoadingComponent from "./components/ProjectsLoadingComponent";

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative bg-linear-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 min-h-screen">
			<Suspense fallback={<ProjectsLoadingComponent/>}>
			{children}
			</Suspense>
		</div>
	);
}
