import { FOOTER_ROUTES } from "@/routes/routes";
import {
	RiFacebookCircleFill,
	RiInstagramFill,
	RiLinkedinFill,
} from "@remixicon/react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="container h-full mx-auto">
			<div className="flex justify-between">
				<div className="grid grid-cols-1 grid-rows-2">
					<h2 className="text-2xl font-bold">Well Guru</h2>
					<div className="flex gap-5 items-end">
						<RiFacebookCircleFill className="text-gray-500" size={20} />
						<RiLinkedinFill className="text-gray-500" size={20} />
						<RiInstagramFill className="text-gray-500" size={20} />
					</div>
				</div>

				<ul className="flex flex-col gap-5">
					{FOOTER_ROUTES.map((route) => (
						<li key={route.href}>
							<Link className="text-gray-500 font-semibold" href={route.href}>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="text-center">
				<p className="text-gray-500">© 2025 Well Guru. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
