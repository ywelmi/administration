import { useEffect } from "react";
import { usersGet } from "../Service/user";
import { TUser } from "../type/user";
import { useUserStore } from "../store/user";

export default function useGetUser() {
  const { addUsers } = useUserStore();
  const fetch = () => {
    usersGet().then((res) => {
      const { data, status } = res;
      if (!data.data) return;
      const users = data.data as TUser[];
      addUsers(users);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
