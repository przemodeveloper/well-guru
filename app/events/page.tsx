import EventFilters from "@/components/EventFilters";
import EventsClient from "@/components/EventsClient";
import { fetchEvents } from "@/queries/events";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

const EventsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["marketplace-events"],
    queryFn: () => fetchEvents(1, 12),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto">
        <Suspense>
          <div className="mt-20">
            <h1 className="text-3xl font-bold mb-10">Odkrywaj wydarzenia</h1>
            <div className="mb-10">
              <EventFilters />
            </div>
            <EventsClient />
          </div>
        </Suspense>
      </div>
    </HydrationBoundary>
  );
};

export default EventsPage;
