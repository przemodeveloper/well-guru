import type { Event } from "@/models/events";
import ProductCard from "./ProductCard";

interface ProductListProps {
	events: Event[];
}

const ProductList = ({ events }: ProductListProps) => {
	return (
		<div className="flex flex-wrap justify-center gap-x-5 gap-y-10">
			{events?.map((item) => (
				<ProductCard
					key={item.id}
					image={item.image || ""}
					name={item.name || ""}
					price={item.price || 0}
					eventType={item.type || ""}
					entity={item.entity || ""}
					location={item.location || ""}
				/>
			))}
		</div>
	);
};

export default ProductList;
