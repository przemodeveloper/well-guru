import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	image: string;
	title: string;
	organizer: string;
	price: string;
	eventType: string;
}

const ProductCard = ({
	image,
	title,
	eventType,
	organizer,
	price,
}: ProductCardProps) => {
	return (
		<div>
			<div className="w-[300px] h-[300px] relative border border-gray-300 rounded mb-2">
				<Image
					src={image}
					alt={title}
					width={300}
					height={300}
					className="object-cover rounded h-full w-full"
				/>
				<p className="text-sm text-black bg-white px-2 py-1 rounded-full absolute bottom-0 left-0">
					{eventType}
				</p>
			</div>
			<div className="flex justify-between">
				<div>
					<h3 className="text-lg font-bold">{title}</h3>
					<p className="text-sm text-gray-500">{organizer}</p>
					<p className="text-sm text-gray-500">{price}</p>
				</div>
				<div className="flex items-end h-full">
					<button
						type="button"
						className="bg-black text-white px-4 py-2 rounded cursor-pointer"
					>
						<Link href={`/products`}>
							<p>Rezerwuj</p>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
