import Link from "next/link";
import { NAVBAR_ROUTES, ROUTES } from "../routes/routes";
import clsx from "clsx";

interface NavbarProps {
	variant?: "light" | "dark";
}

const NavbarDesktop = ({ variant = "light" }: NavbarProps) => {
	const NAVBAR_THEME = {
		light: {
			text: "text-white",
			border: "border-white",
		},
		dark: {
			text: "text-black",
			border: "border-black",
		},
	};

	return (
		<nav
			className={`${NAVBAR_THEME[variant].text} p-6 z-[60] h-[80px] relative hidden md:block`}
		>
			<div
				className={clsx(
					variant === "dark" && "flex justify-between items-center"
				)}
			>
				{variant === "dark" && (
					<Link
						href={ROUTES.HOME}
						className="text-3xl font-bold font-primary text-black"
					>
						Well Guru
					</Link>
				)}
				<ul className="flex flex-wrap justify-end gap-9 h-full items-center">
					{NAVBAR_ROUTES.map((route) => (
						<li key={route.href}>
							<Link href={route.href} className="text-xl font-primary">
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavbarDesktop;
