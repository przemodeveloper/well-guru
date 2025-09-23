import Link from "next/link";
import { ROUTES } from "../routes/routes";
import clsx from "clsx";

interface NavbarProps {
	variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
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
			className={`${NAVBAR_THEME[variant].text} p-6 z-[60] h-[80px] relative`}
		>
			<div className={clsx(variant === "dark" && "flex justify-between")}>
				{variant === "dark" && (
					<Link
						href={ROUTES.HOME}
						className="text-3xl font-bold font-primary text-black"
					>
						Well Guru
					</Link>
				)}
				<div className="flex flex-wrap justify-end gap-9 h-full items-center">
					<Link href={ROUTES.EVENTS} className="text-xl font-primary">
						Wydarzenia
					</Link>
					<Link href={ROUTES.COMPANIES} className="text-xl font-primary">
						Dla Firm
					</Link>
					<Link href={ROUTES.PARTNERS} className="text-xl font-primary">
						Partnerzy
					</Link>
					<Link href={ROUTES.VOUCHER} className="text-xl font-primary">
						Voucher
					</Link>
					<Link
						href={ROUTES.ACCOUNT}
						className={`${NAVBAR_THEME[variant].text} border ${NAVBAR_THEME[variant].border} rounded-lg px-3 py-2 text-center text-xl font-primary inline-block`}
					>
						Konto
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
