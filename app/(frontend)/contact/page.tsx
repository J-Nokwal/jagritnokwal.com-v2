"use client";
import { Github, Mail, Linkedin} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/jagrit-nokwal",
		label: "LinkedIn",
		handle: "jagrit-nokwal",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:jagritnokwal9@gmail.com",
		label: "Email",
		handle: "jagritnokwal9@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/J-Nokwal",
		label: "Github",
		handle: "J-Nokwal",
	},
];

export default function Example() {
	return (
		<div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="flex justify-center items-center mx-auto px-4 min-h-screen container">
				<div className="gap-8 lg:gap-16 grid grid-cols-1 sm:grid-cols-3 mx-auto mt-32 sm:mt-0 w-full">
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target="_blank"
								className="group relative flex flex-col items-center gap-4 md:gap-8 p-4 md:p-16 md:py-24 lg:pb-48 duration-700"
							>
								<span
									className="absolute bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent w-px h-2/3"
									aria-hidden="true"
								/>
								<span className="z-10 relative flex justify-center items-center bg-zinc-900 group-hover:bg-zinc-900 drop-shadow-orange border border-zinc-500 group-hover:border-zinc-200 rounded-full w-12 h-12 text-zinc-200 group-hover:text-white text-sm duration-1000">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="font-display font-medium text-zinc-200 group-hover:text-white lg:text-xl xl:text-3xl duration-150">
										{s.handle}
									</span>
									<span className="mt-4 text-zinc-400 group-hover:text-zinc-200 text-sm text-center duration-1000">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
