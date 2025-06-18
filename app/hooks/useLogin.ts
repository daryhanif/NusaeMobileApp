interface LoginProps {
  username: string;
  password: string;
}
const useLogin = async (props: LoginProps) => {
  try {
    const { username, password } = props;
    const response = await axios.post("/login", { username, password });
  } catch (error) {
  } finally {
  }
};
