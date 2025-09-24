import EventsClient from "@/components/EventsClient";
import { fetchEvents } from "@/queries/events";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";

const EventsPage = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["marketplace-events"],
		queryFn: () => fetchEvents(1, 12),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div className="container mx-auto">
				<div className="mt-20">
					<EventsClient />
				</div>
			</div>
		</HydrationBoundary>
	);
};

export default EventsPage;
