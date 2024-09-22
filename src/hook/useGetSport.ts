import { useCallback, useEffect } from "react";
import { sportsGet } from "../Service/sport";
import { useSportStore } from "../store/sport";
import { IGetFilters } from "../Service/_getParams";

export default function useGetSport() {
    const { addSports, sportsAll, addSportsMain, addSportsSub, filters, updateTotal, updateLoading } = useSportStore();
    const fetch = useCallback((filters?: Partial<IGetFilters>) => {
        console.log({ useGetSportfilters: filters });
        updateLoading(true);
        sportsGet(filters).then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const {
                data: sports,
                sumData: { total },
            } = data;
            addSports(
                sports.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            );
            updateTotal(total);
            updateLoading(false);
            console.log({ sports, data, sportsAll });
        });
        sportsGet({
            skip: 0,
            take: 20,
            sort: "",
            filter: "[{'f':'for_type','o':'=','v':2}]",
            columns: "",
        }).then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const {
                data: sports,
                sumData: { total },
            } = data;
            addSportsSub(sports);

            updateLoading(false);
            // console.log({ sports });
        });
        sportsGet({
            skip: 0,
            take: 20,
            sort: "",
            filter: "[{'f':'for_type','o':'=','v':1}]",
            columns: "",
        }).then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const {
                data: sports,
                sumData: { total },
            } = data;
            addSportsMain(sports);

            updateLoading(false);
            // console.log({ sports });
        });
    }, []);

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        fetch(filters);
    }, [filters]);
}
