import Logo from "./Logo";

export default function Navbar() {
	return (
		<div className="h-full *:*:h-full flex items-center gap-10">
			<Logo />
			<ul className="flex h-full items-center *:border-b-[3.5px] *:cursor-pointer *:place-content-center *:px-5 *:border-b-transparent capitalize *:font-bold *:text-[14px]">
				<li className="hover:border-b-[#ee5f73]">MEN</li>
				<li className="hover:border-b-[#fb56c1]">WOMEN</li>
				<li className="hover:border-b-[#f26a10]">KIDS</li>
				<li className="hover:border-b-[#f2c210]">HOME & LIVING</li>
				<li className="hover:border-b-[#0db7af]">BEAUTY</li>
				<li id="studio-link" className="hover:border-b-[#ff3f6c]">
					STUDIO&nbsp;<sup className="text-[#ff3f6c]">NEW</sup>
				</li>
			</ul>
		</div>
	);
}
