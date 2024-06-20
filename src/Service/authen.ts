import { saveUser } from "../shared/localStorage/user";
import { httpPost } from "./_request";

interface ISignIn {
  username: string;
  password: string;
}

export const signIn = async ({ username, password }: ISignIn) => {
  httpPost("/Accounts/login", { username, password }).then((res) => {
    const { data, status } = res;
    if (status === 200) {
      saveUser(data);
      return Promise.resolve();
    }
    return Promise.reject(data);
  });
};
