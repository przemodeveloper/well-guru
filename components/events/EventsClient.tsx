"use client";

import ProductList from "./ProductList";
import { useEvents } from "@/queries/events";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductListSkeleton from "../ui/ProductsListSkeleton";
import { useFilters } from "@/hooks/useFilters";

const EventsClient = () => {
  const { filters } = useFilters();
  const { fetchNextPage, hasNextPage, events, isLoading } = useEvents({
    filters,
  });

  if (isLoading) {
    return (
      <div className="mt-20">
        <ProductListSkeleton length={6} />
      </div>
    );
  }

  if (!isLoading && events?.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500">No events found.</div>
    );
  }

  return (
    <InfiniteScroll
      key={JSON.stringify(filters)}
      dataLength={events?.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <div className="mt-20">
          <ProductListSkeleton length={3} />
        </div>
      }
    >
      <ProductList events={events ?? []} />
    </InfiniteScroll>
  );
};

export default EventsClient;
