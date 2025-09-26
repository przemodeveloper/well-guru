export const ROUTES = {
  HOME: "/",
  EVENTS: "/events",
  COMPANIES: "/companies",
  PARTNERS: "/partners",
  VOUCHER: "/voucher",
  ACCOUNT: "/account",
  ABOUT: "/about",
  CONTACT: "/contact",
  ADD_EVENT: "/add-event",
  FAQ: "/faq",
};

export const NAVBAR_ROUTES = [
  {
    href: ROUTES.EVENTS,
    label: "Wydarzenia",
  },
  {
    href: ROUTES.COMPANIES,
    label: "Dla Firm",
  },
  {
    href: ROUTES.PARTNERS,
    label: "Partnerzy",
  },
  {
    href: ROUTES.VOUCHER,
    label: "Voucher",
  },
  {
    href: ROUTES.ACCOUNT,
    label: "Konto",
  },
]


export const FOOTER_ROUTES = [
  {
    href: ROUTES.ABOUT,
    label: "O nas",
  },
  {
    href: ROUTES.FAQ,
    label: "FAQ",
  },
  {
    href: ROUTES.ADD_EVENT,
    label: "Dodaj wydarzenie",
  },
  {
    href: ROUTES.CONTACT,
    label: "Kontakt",
  },
]
