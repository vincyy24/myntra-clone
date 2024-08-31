import Header from "@/components/Header";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	title: "Myntra | Clone",
	description: "Myntra | Clone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={assistant.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
