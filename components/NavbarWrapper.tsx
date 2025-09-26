"use client";

import { usePathname } from "next/navigation";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const NavbarWrapper = () => {
	const pathname = usePathname();

	const darkThemeRoutes = [
		"/about",
		"/contact",
		"/faq",
		"/events",
		"/companies",
		"/partners",
		"/voucher",
		"/account",
		"/add-event",
	];

	const variant = darkThemeRoutes.includes(pathname) ? "dark" : "light";

	return (
		<>
			<NavbarDesktop variant={variant} />
			<NavbarMobile variant={variant} />
		</>
	);
};

export default NavbarWrapper;
