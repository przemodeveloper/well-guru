import Link from "next/link";
import { ROUTES } from "../routes/routes";

const Navbar = () => {
	return (
		<nav className="bg-transparent text-white p-6 sticky top-0 z-50 h-[80px]">
			<div className="flex flex-wrap justify-end gap-9 h-full items-center">
				<Link href={ROUTES.HOME} className="text-xl font-primary">
					Wydarzenia
				</Link>
				<Link href={ROUTES.FOR_COMPANIES} className="text-xl font-primary">
					Dla Firm
				</Link>
				<Link href={ROUTES.PARTNERS} className="text-xl font-primary">
					Partnerzy
				</Link>
				<Link href={ROUTES.VOUCHER} className="text-xl font-primary">
					Voucher
				</Link>
				<button
					type="button"
					className="text-white hover:text-white border border-white focus:ring-4 rounded-lg px-3 py-2 text-center"
				>
					<Link href={ROUTES.ACCOUNT} className="text-xl font-primary">
						Konto
					</Link>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
