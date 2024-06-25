import { useEffect } from "react";
import { orgsGet } from "../Service/org";
import { TOrg } from "../type/org";
import { useOrgStore } from "../store/org";

export default function useGetOrg() {
  const { addOrgs } = useOrgStore();
  const fetch = () => {
    orgsGet().then((res) => {
      const { data, status } = res;
      console.log({ data, status });
      if (!data.data) return;
      const orgs = data.data as TOrg[];
      addOrgs(orgs);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
