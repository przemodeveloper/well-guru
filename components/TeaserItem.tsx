import Image from "next/image";

interface TeaserItemProps {
	title: string;
	image: string;
}

const TeaserItem = ({ title, image }: TeaserItemProps) => {
	return (
		<div>
			<div className="w-[400px] h-[400px] border border-gray-300 rounded mb-2">
				<Image
					src={image}
					alt={title}
					width={300}
					height={300}
					className="object-cover rounded h-full w-full"
				/>
			</div>
			<h3 className="text-lg font-bold">{title}</h3>
		</div>
	);
};

export default TeaserItem;
