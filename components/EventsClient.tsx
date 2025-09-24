"use client";

import ProductList from "./ProductList";
import { useEvents } from "@/queries/events";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductListSkeleton from "./ProductsListSkeleton";

const EventsClient = () => {
	const { fetchNextPage, hasNextPage, data, isLoading } = useEvents();

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
