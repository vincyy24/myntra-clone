import { BiSearch } from "react-icons/bi";

export default function SearchInput() {
	return (
		<div className="flex w-[33%] rounded-md border-2 border-transparent text-sm bg-neutral-100 focus-within:bg-transparent focus-within:border-neutral-200">
			<button>
				<BiSearch className="box-border  border-r-[1.5px] border-r-white size-10 p-[9px] text-gray-500 " />
			</button>
			<input
				className="bg-transparent w-full p-2 outline-none"
				type="text"
				placeholder="Search for products, brands and more"
			/>
		</div>
	);
}
