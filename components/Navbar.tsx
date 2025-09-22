import Link from "next/link";
import { ROUTES } from "../routes/routes";

interface NavbarProps {
	variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
	return (
		<nav
			className={`text-${
				variant === "light" ? "white" : "black"
			} p-6 z-[60] h-[80px] relative`}
		>
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
					className={`text-${
						variant === "light" ? "white" : "black"
					} border border-${
						variant === "light" ? "white" : "black"
					} rounded-lg px-3 py-2 text-center text-xl font-primary inline-block`}
				>
					Konto
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
