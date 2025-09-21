import { ROUTES } from "@/routes/routes";
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
					<li>
						<Link className="text-gray-500 font-semibold" href={ROUTES.ABOUT}>
							O nas
						</Link>
					</li>
					<li>
						<Link className="text-gray-500 font-semibold" href={ROUTES.FAQ}>
							FAQ
						</Link>
					</li>
					<li>
						<Link
							className="text-gray-500 font-semibold"
							href={ROUTES.ADD_EVENT}
						>
							Dodaj wydarzenie
						</Link>
					</li>
					<li>
						<Link className="text-gray-500 font-semibold" href={ROUTES.CONTACT}>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>

			<div className="text-center">
				<p className="text-gray-500">© 2025 Well Guru. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
