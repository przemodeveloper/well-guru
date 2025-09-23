import ProductList from "@/components/ProductList";
import { Suspense } from "react";
import ProductListSkeleton from "@/components/ProductsListSkeleton";

const EventsData = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`, {
		next: {
			revalidate: 3600,
		},
	});
	const events = await res.json();
	return <ProductList events={events} />;
};

const Events = async () => {
	return (
		<div className="container mx-auto">
			<div className="mt-20">
				<Suspense fallback={<ProductListSkeleton />}>
					<EventsData />
				</Suspense>
			</div>
		</div>
	);
};

export default Events;
