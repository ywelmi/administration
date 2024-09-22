import { useEffect } from "react";
import { orgsGet } from "../Service/org";
import { TOrg } from "../type/org";
import { useOrgStore } from "../store/org";

export default function useGetOrg() {
    const { addOrgs } = useOrgStore();
    const fetch = () => {
        orgsGet().then((res) => {
            const { data, status } = res;
            if (!data.data) return;
            const orgs = data.data as TOrg[];
            addOrgs(
                orgs.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            );
        });
    };

    useEffect(() => {
        fetch();
    }, []);
}
