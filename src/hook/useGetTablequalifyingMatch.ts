import { useCallback, useEffect } from "react";
import { tablequalifyingMatchsGet } from "../Service/tablequalifyingMatch";
import { useTablequalifyingMatchStore } from "../store/tablequalifyingMatch";

export default function useGetTablequalifyingMatch() {
  const { addTablequalifyingMatchs, table_id, updateLoading } =
    useTablequalifyingMatchStore();
  const fetch = useCallback((table_id?: string) => {
    console.log({ useGetTablequalifyingMatchfilters: table_id });
    if (!table_id) return;
    updateLoading(true);
    tablequalifyingMatchsGet(table_id)
      .then((res) => {
        const { data, status } = res;
        console.log({ tablequalifyingMatchsGet: data });
        if (!data?.length) {
          addTablequalifyingMatchs([]);
          return;
        }
        addTablequalifyingMatchs(data);
      })
      .finally(() => updateLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = useCallback(() => {
    fetch(table_id);
  }, [fetch, table_id]);

  useEffect(() => {
    refresh();
  }, [refresh]);
  return { refresh };
}
