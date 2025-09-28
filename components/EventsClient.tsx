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

  const { fetchNextPage, hasNextPage, data, isLoading } = useEvents({
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
      dataLength={data?.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <div className="mt-20">
          <ProductListSkeleton length={3} />
        </div>
      }
    >
      <ProductList events={data} />
    </InfiniteScroll>
  );
};

export default EventsClient;
