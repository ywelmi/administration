import { useCallback, useEffect } from "react";
import { useCategoryStore } from "../store/categories";
import { agesGet, weighGet } from "../Service/martialArt";

export default function useGetCategory() {
  const { addWeighs, addAges } = useCategoryStore();
  const fetch = useCallback(() => {
    weighGet().then((res) => {
      const { data, status } = res;
      if (status === 200) {
        addWeighs(data);
      }
    });

    agesGet().then((res) => {
      const { data, status } = res;
      if (status === 200) {
        addAges(data);
      }
    });
  }, []);

  useEffect(() => {
    fetch();
  }, []);
}
