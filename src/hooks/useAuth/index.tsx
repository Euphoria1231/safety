import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import useAuthService from "../../services/Auth";
import { LoginReq, RegisterReq } from "../../services/Auth/type";
import axios from "axios";

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const {
    postLogin,
    postRegister,
    postLogout,
  } = useAuthService();

  const login = async (data: LoginReq) => {
    const res = await postLogin(data);
    console.log(res);
  }

  const register = async (data: RegisterReq) => {
    const res = await postRegister(data);
    console.log(res);
  }

  const logout = async () => {
    const res = await postLogout();
    console.log(res);
  }

  return {
    login,
    register,
    logout,
  }
}

export default useAuth;
