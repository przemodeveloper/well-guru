"use client";

import ProductList from "./ProductList";
import { useEvents } from "@/queries/events";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductListSkeleton from "./ProductsListSkeleton";
import { useSearchParams } from "next/navigation";

const EventsClient = () => {
  const searchParams = useSearchParams();
  const filters = {
    ...(searchParams.get("type")
      ? { type: searchParams.get("type") || "" }
      : {}),
  };

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

  return (
    <InfiniteScroll
      dataLength={events?.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <div className="mt-20">
          <ProductListSkeleton length={3} />
        </div>
      }
    >
      <ProductList events={events} />
    </InfiniteScroll>
  );
};

export default EventsClient;
