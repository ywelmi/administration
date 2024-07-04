import { useCallback, useEffect } from "react";
import { sportsGet } from "../Service/sport";
import { useSportStore } from "../store/sport";
import { IGetFilters } from "../Service/_getParams";

export default function useGetSport() {
  const { addSports, filters, updateTotal, updateLoading } = useSportStore();
  const fetch = useCallback((filters?: Partial<IGetFilters>) => {
    console.log({ useGetSportfilters: filters });
    updateLoading(true);
    sportsGet(filters).then((res) => {
      const { data, status } = res;
      if (!data.data) return;
      const { data: sports, sumData: { total } } = data;
      addSports(sports);
      updateTotal(total);
      updateLoading(false);
      console.log({ sports });
    });
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    fetch(filters);
  }, [filters]);
}
