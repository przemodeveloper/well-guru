import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchLocationsDropdown = async () => {
  const res = await axios.get(`/api/dropdown/locations`);
  const data = res.data;
  return data;
};

export const useLocationsDropdown = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["locations"],
    queryFn: () => fetchLocationsDropdown(),
  });
  return { data, isLoading, error };
};