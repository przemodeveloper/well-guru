import TeaserItem from "./TeaserItem";
import retreat from "@/public/photos/retreat.webp";
import event from "@/public/photos/event.webp";
import workshop from "@/public/photos/workshop.webp";

const teaserItems = [
	{
		title: "Wyjazdy",
		image: retreat.src,
	},
	{
		title: "Eventy",
		image: event.src,
	},
	{
		title: "Warsztaty",
		image: workshop.src,
	},
];

const Teaser = () => {
	return (
		<>
			<div className="flex justify-between mb-10">
				<div className="flex gap-5">
					<h2 className="text-3xl font-bold max-w-[20ch]">
						Odpoczywaj i doświadczaj świadomie
					</h2>
					<p className="text-lg font-bold max-w-[32ch] text-gray-500">
						Selekcjonujemy wyjazdy, wydarzenia i warsztaty offline wspierające
						dobrostan ciała i umysłu
					</p>
				</div>

				<div>
					<button
						type="button"
						className="bg-black text-white px-4 py-2 rounded cursor-pointer"
					>
						Odkrywaj wydarzenia
					</button>
				</div>
			</div>

			<div className="flex flex-wrap justify-center gap-5">
				{teaserItems.map((item) => (
					<TeaserItem key={item.title} title={item.title} image={item.image} />
				))}
			</div>
		</>
	);
};

export default Teaser;
