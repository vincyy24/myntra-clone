import Actions from "./Actions";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
	return (
		<header className="flex h-20 items-center justify-between bg-white px-14 align-middle shadow-md shadow-gray-100 text-[#282c3f]">
			<Navbar />
			<Search />
			<Actions />
		</header>
	);
}
