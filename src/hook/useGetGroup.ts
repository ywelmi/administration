import { useEffect } from "react";
import { groupsGet } from "../Service/group";
import { TGroup } from "../type/group";
import { useGroupStore } from "../store/group";

export default function useGetGroup() {
  const { addGroups } = useGroupStore();
  const fetch = () => {
    groupsGet().then((res) => {
      const { data, status } = res;
      console.log({ data, status });
      if (!data.data) return;
      const groups = data.data as TGroup[];
      addGroups(groups);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
