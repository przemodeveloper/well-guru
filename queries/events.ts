import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

const EVENTS_PER_PAGE = 12;

export const fetchEvents = async (
  page: number,
  pageSize: number,
  { filters }: { filters?: Record<string, string> } = {}
) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...filters,
  });

  const res = await axios.get(`/api/events?${params.toString()}`);
  const data = res.data;
  return data;
};

const useEvents = ({ filters }: { filters?: Record<string, string> } = {}) => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    data,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["marketplace-events", JSON.stringify(filters ?? {})],
    queryFn: ({ pageParam = 1 }) =>
      fetchEvents(pageParam, EVENTS_PER_PAGE, { filters: filters ?? {} }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.meta.hasNextPage) {
        return allPages.length + 1;
      }
      return null;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
  });

  const eventsList = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  return {
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    events: eventsList,
    isLoading,
  };
};

export { useEvents };
