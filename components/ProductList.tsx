import { productItems } from "@/mockData";
import ProductCard from "./ProductCard";

const ProductList = () => {
	return (
		<div className="flex flex-wrap justify-center gap-x-5 gap-y-10">
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
	);
};

export default ProductList;
