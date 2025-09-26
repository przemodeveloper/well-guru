import { NAVBAR_ROUTES, ROUTES } from "@/routes/routes";
import clsx from "clsx";
import { Squash as Hamburger } from "hamburger-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { type RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface NavbarMobileProps {
	variant?: "light" | "dark";
}

const NavbarMobile = ({ variant = "light" }: NavbarMobileProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const ref = useRef<HTMLDivElement>(null);

	const handleRedirect = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		setIsOpen(false);
		router.push(href);
	};

	useOnClickOutside(ref as RefObject<HTMLElement>, () => setIsOpen(false));

	return (
		<div ref={ref} className="md:hidden relative z-[60]">
			<div className="flex justify-between items-center">
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					size={24}
					color={variant === "light" ? "white" : "black"}
				/>
				{variant === "dark" && (
					<a
						onClick={(e) => handleRedirect(e, ROUTES.HOME)}
						href={ROUTES.HOME}
						className="text-2xl font-bold font-primary text-black mr-2"
					>
						Well Guru
					</a>
				)}
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0"
					>
						<ul className="grid gap-2">
							{NAVBAR_ROUTES.map((route, idx) => (
								<motion.li
									key={route.href}
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: "spring",
										stiffness: 260,
										damping: 20,
										delay: 0.1 + idx / 10,
									}}
									className={clsx(
										"w-full rounded-xl p-2 text-center",
										variant === "light" && "bg-white",
										variant === "dark" && "bg-black"
									)}
								>
									<a
										href={route.href}
										onClick={(e) => handleRedirect(e, route.href)}
										className={clsx(
											"text-xl",
											variant === "light" && "text-black",
											variant === "dark" && "text-white"
										)}
									>
										{route.label}
									</a>
								</motion.li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default NavbarMobile;
