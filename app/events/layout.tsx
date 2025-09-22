import Navbar from "@/components/Navbar";

export default function EventsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar variant="dark" /> {/* only for events pages */}
			{children}
		</>
	);
}
