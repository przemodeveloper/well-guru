"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

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

  return <Navbar variant={variant} />;
};

export default NavbarWrapper;
