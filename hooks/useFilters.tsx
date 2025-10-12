import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type FilterKey =
  | "type"
  | "category"
  | "location"
  | "priceMin"
  | "priceMax"
  | "startDate"
  | "endDate"
  | "search"
  | "sortBy"
  | "sortOrder";

const FilterKeys = [
  "type",
  "category",
  "location",
  "priceMin",
  "priceMax",
  "startDate",
  "endDate",
  "search",
  "sortBy",
  "sortOrder",
] as const;

interface UseFiltersOptions {
  filterKeys?: FilterKey[];
  replace?: boolean;
}

export const useFilters = (options: UseFiltersOptions = {}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    filterKeys = [
      "type",
      "category",
      "location",
      "priceMin",
      "priceMax",
      "startDate",
      "endDate",
      "search",
      "sortBy",
      "sortOrder",
    ],
    replace = true,
  } = options;

  const setParams = useCallback(
    (updates: Record<string, string | string[] | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          if (value.length === 0) {
            params.delete(key);
          } else {
            params.set(key, value.join(","));
          }
        } else if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      const newUrl = `?${params.toString()}`;

      if (replace) {
        router.replace(newUrl);
      } else {
        router.push(newUrl);
      }

      return `?${params.toString()}`;
    },
    [router, searchParams, replace]
  );

  const deleteParams = useCallback(
    (keys: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const key of keys) {
        params.delete(key);
      }
      const newUrl = `?${params.toString()}`;

      if (replace) {
        router.replace(newUrl);
      } else {
        router.push(newUrl);
      }

      return newUrl;
    },
    [router, searchParams, replace]
  );

  const getParam = useCallback(
    (key: FilterKey) => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const filters = useMemo(() => {
    const entries = filterKeys
      .map((key) => [key, searchParams.get(key)])
      .filter(([, value]) => value !== null) as [string, string][];
    return Object.fromEntries(entries);
  }, [searchParams, filterKeys]);

  return { setParams, deleteParams, getParam, filters };
};
