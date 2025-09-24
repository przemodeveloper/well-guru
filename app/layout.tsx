import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Provider from "@/providers/Provider";

export const metadata: Metadata = {
	title: "Well Guru",
	description: "Well Guru",
};

const inter = Inter({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider>{children}</Provider>
				<div className="mt-20">
					<Footer />
				</div>
			</body>
		</html>
	);
}
