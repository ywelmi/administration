import { useEffect } from "react";
import { getUsers } from "../Service/user";

export default function useGetUser() {
  const fetch = () => {
    getUsers().then((res) => {
      const { data, status } = res;
      console.log({ data, status });
    });
  };

  useEffect(() => {
    fetch();
  }, []);
}
