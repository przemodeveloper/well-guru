import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

const EVENTS_PER_PAGE = 10;

export const fetchEvents = async (page: number, pageSize: number) => {
	const res = await axios.get(`/api/events?page=${page}&pageSize=${pageSize}`);
	const data = await res.data;
	return data;
};

const useEvents = () => {
  const { fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, data, isLoading } = useInfiniteQuery({
    queryKey: ["marketplace-events"],
    queryFn: ({ pageParam = 1 }) => fetchEvents(pageParam, EVENTS_PER_PAGE),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.meta.hasNextPage) {
        return allPages.length + 1;
      }
      return null
    },
    initialPageParam: 1,
  });


  const eventsList = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  return {
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    data: eventsList,
    isLoading,
  };
};

export { useEvents };
