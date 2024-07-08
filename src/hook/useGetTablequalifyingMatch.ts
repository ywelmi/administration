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
      console.log({ tablequalifyingMatchsGet: data });
      if (!data?.length) return;
      addTablequalifyingMatchs(data);
      console.log({ tablequalifyingMatchs: data });
    }).finally(() => updateLoading(false));
  }, []);

  // useEffect(() => {
  //   fetch();
  // }, []);

  useEffect(() => {
    fetch(table_id);
  }, [table_id]);
}
