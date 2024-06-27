import { useEffect } from "react";
import { sportsGet } from "../Service/sport";
import { TSport } from "../type/sport";
import { useSportStore } from "../store/sport";

export default function useGetSport() {
  const { addSports } = useSportStore();
  const fetch = () => {
    sportsGet().then((res) => {
      const { data, status } = res;
      if (!data.data) return;
      const sports = data.data as TSport[];
      addSports(sports);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
