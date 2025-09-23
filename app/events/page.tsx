import ProductList from "@/components/ProductList";

const Events = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`, {
		cache: "no-store", // fetch fresh data on each request
	});

	const events = await res.json();

	return (
		<div className="container mx-auto">
			<div className="mt-20">
				<ProductList events={events} />
			</div>
		</div>
	);
};

export default Events;
