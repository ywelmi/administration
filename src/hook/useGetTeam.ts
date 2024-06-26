import { useEffect } from "react";
import { teamsGet } from "../Service/team";
import { TTeam } from "../type/team";
import { useTeamStore } from "../store/team";

export default function useGetTeam() {
  const { addTeams } = useTeamStore();
  const fetch = () => {
    teamsGet().then((res) => {
      const { data, status } = res;
      console.log({ data, status });
      if (!data.data) return;
      const teams = data.data as TTeam[];
      addTeams(teams);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
