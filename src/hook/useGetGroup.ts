import { useEffect } from "react";
import { groupsGet } from "../Service/group";
import { TGroup } from "../type/group";
import { useGroupStore } from "../store/group";

export default function useGetGroup() {
  const { addGroups } = useGroupStore();
  const fetch = () => {
    groupsGet().then((res) => {
      const { data, status } = res;
      console.log({ groupsFetch: data });
      if (!data) return;
      if (Array.isArray(data)) {
        const groups = data as TGroup[];
        addGroups(groups);
      }
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
