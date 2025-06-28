import * as SecureStore from "expo-secure-store";
import { useState } from "react";
interface LoginProps {
  username: string;
  password: string;
}
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<unknown>();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const Login = async (props: LoginProps) => {
    try {
      setLoading(true);
      setError(null);
      SecureStore.setItemAsync("accessToken", "token");
      await delay(1000);
      setData({ ...props }); // ⬅️ ini akan trigger useEffect di komponen
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // ⛔ ini terlalu cepat kalau ditaruh sebelum setData di-trigger
    }
  };

  return {
    loading,
    error,
    Login,
    data,
  };
};
export default useLogin;
