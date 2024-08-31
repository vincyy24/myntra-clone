import { BsBag, BsHeart, BsPerson } from "react-icons/bs";
export default function Actions() {
	const actions = [
		{ label: "Profile", IconComponent: BsPerson },
		{ label: "Wishlist", IconComponent: BsHeart },
		{ label: "Bag", IconComponent: BsBag },
	];
	return (
		<ul className="flex gap-2">
			{actions.map(({ label, IconComponent }) => (
				<div key={label} className="flex flex-col items-center">
					{<IconComponent />}
					<span className="text-[12px] font-bold px-2">{label}</span>
				</div>
			))}
		</ul>
	);
}
