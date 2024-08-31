import Image from "next/image";
import Link from "next/link";
import myntraLogo from "@/public/assets/myntra_logo.png";

export default function Logo() {
	return (
		<Link href={"/"}>
			<Image height={34} width={50} src={myntraLogo} alt="logo" />
		</Link>
	);
}
