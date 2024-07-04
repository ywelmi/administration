import { useCallback, useEffect } from "react";
import { tablequalifyingsGet } from "../Service/tablequalifying";
import { useTablequalifyingStore } from "../store/tablequalifying";
import { IGetFilters } from "../Service/_getParams";

export default function useGetTablequalifying() {
  const { addTablequalifyings, filters, updateTotal, updateLoading } =
    useTablequalifyingStore();
  const fetch = useCallback((filters?: Partial<IGetFilters>) => {
    console.log({ useGetTablequalifyingfilters: filters });
    updateLoading(true);
    tablequalifyingsGet(filters).then((res) => {
      const { data, status } = res;
      if (!data.data) return;
      const { data: tablequalifyings, sumData: { total } } = data;
      addTablequalifyings(tablequalifyings);
      updateTotal(total);
      updateLoading(false);
      console.log({ tablequalifyings });
    });
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    fetch(filters);
  }, [filters]);
}
