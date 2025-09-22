import ProductCard from "./ProductCard";

import Link from "next/link";
import { ROUTES } from "@/routes/routes";
import { productItems } from "@/mockData";

const Products = () => {
	return (
		<div>
			<h2 className="text-3xl font-bold max-w-[20ch] mb-10">
				Odkrywaj wydarzenia
			</h2>
			<div className="flex flex-wrap justify-center gap-x-5 gap-y-10 mb-20">
				{productItems.map((item) => (
					<ProductCard
						key={item.id}
						image={item.image}
						title={item.title}
						price={item.price}
						eventType={item.eventType}
						organizer={item.organizer}
						location={item.location}
					/>
				))}
			</div>
			<div className="flex justify-center">
				<Link
					href={ROUTES.EVENTS}
					className="bg-black text-lg text-white px-12 py-2 rounded-xl cursor-pointer inline-block text-center"
				>
					Zobacz wszystkie
				</Link>
			</div>
		</div>
	);
};

export default Products;
