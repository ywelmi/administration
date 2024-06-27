import { useEffect } from "react";
import { competitionsGet } from "../Service/competition";
import { TCompetition } from "../type/competition";
import { useCompetitionStore } from "../store/competition";

export default function useGetCompetition() {
  const { addCompetitions } = useCompetitionStore();
  const fetch = () => {
    competitionsGet().then((res) => {
      const { data, status } = res;
      if (!data) return;
      const competitions = data as TCompetition[];
      addCompetitions(competitions);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
