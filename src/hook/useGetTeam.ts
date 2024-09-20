import { useCallback, useEffect } from "react";
import { teamsGet } from "../Service/team";
import { useTeamStore } from "../store/team";
import { IGetFilters } from "../Service/_getParams";

export default function useGetTeam() {
    const { addTeams, filters, updateTotal, updateLoading } = useTeamStore();
    const fetch = useCallback((filters?: Partial<IGetFilters>) => {
        console.log({ useGetTeamfilters: filters });
        updateLoading(true);
        teamsGet(filters).then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const {
                data: teams,
                sumData: { total },
            } = data;
            addTeams(
                teams.sort((a, b) => {
                    return a.org_name.localeCompare(b.org_name);
                })
            );
            updateTotal(total);
            updateLoading(false);
            console.log({ teams });
        });
    }, []);

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        fetch(filters);
    }, [filters]);
}
