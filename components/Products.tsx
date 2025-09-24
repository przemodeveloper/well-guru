import ProductCard from "./ProductCard";
import Link from "next/link";
import { ROUTES } from "@/routes/routes";
import type { Event } from "@/models/events";

interface ProductsProps {
	events: Event[];
}

const Products = ({ events }: ProductsProps) => {
	return (
		<div>
			<h2 className="text-3xl font-bold max-w-[20ch] mb-10">
				Odkrywaj wydarzenia
			</h2>
			<div className="flex flex-wrap justify-center gap-x-5 gap-y-10 mb-20">
				{events.length > 0 ? (
					events.map((event) => (
						<ProductCard
							key={event.id}
							image={event.image || ""}
							name={event.name || ""}
							price={event.price || 0}
							eventType={event.type || ""}
							entity={event.entity || ""}
							location={event.location || ""}
						/>
					))
				) : (
					<div className="text-center text-gray-500 py-10">
						<p>Brak dostępnych wydarzeń w tej chwili.</p>
					</div>
				)}
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
