import { useCallback, useEffect } from "react";
import { tablequalifyingMatchsGet } from "../Service/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../store/tablequalifyingMatch";

export default function useGetTablequalifyingMatch() {
  const { addTablequalifyingMatchs, table_id, updateTotal, updateLoading } =
    useTablequalifyingMatchStore();
  const fetch = useCallback((table_id?: string) => {
    console.log({ useGetTablequalifyingMatchfilters: table_id });
    if (!table_id) return;
    updateLoading(true);
    tablequalifyingMatchsGet(table_id).then((res) => {
      const { data, status } = res;
      if (!data.data) return;
      const { data: tablequalifyingMatchs, sumData: { total } } = data;
      addTablequalifyingMatchs(tablequalifyingMatchs);
      updateTotal(total);
      console.log({ tablequalifyingMatchs });
    }).finally(() => updateLoading(false));
  }, []);

  // useEffect(() => {
  //   fetch();
  // }, []);

  useEffect(() => {
    fetch(table_id);
  }, [table_id]);
}
