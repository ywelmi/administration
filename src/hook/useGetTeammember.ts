import { useEffect } from "react";
import { teammembersGet } from "../Service/teammember";
import { TTeammember } from "../type/teammember";
import { useTeammemberStore } from "../store/teammember";

export default function useGetTeammember() {
    const { addTeammembers } = useTeammemberStore();
    const fetch = () => {
        teammembersGet().then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const teammembers = data.data as TTeammember[];
            addTeammembers(
                teammembers.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            );
        });
    };

    useEffect(() => {
        fetch();
    }, []);
}
