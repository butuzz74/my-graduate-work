import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import userService from "../service/user.service";
import { toast } from "react-toastify";
import localStorageService, {
  setTokens,
} from "../service/localStorage.service";
import { useHistory } from "react-router-dom";
import orderService from "../service/order.service";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
const httpAuth = axios.create();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }
  useEffect(() => {
    if (error !== 0) {
      toast(error);
      setError(null);
    }
  }, [error]);

  async function signUp({ email, password, nick }) {
    const key = "AIzaSyBneQKLuQ2JnTeRlBTBmgDFY6kO_TxJ8yE";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    try {
      const { data } = await httpAuth.post(url, {
        email,
        password,
        nick,
        returnSecureToken: true,
      });
      setTokens(data);
      await createUser({ _id: data.localId, email, password, nick });
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "Пользователь с таким email уже существует",
          };
          throw errorObject;
        }
      }
    }
  }
  async function signIn({ email, password }) {
    const key = "AIzaSyBneQKLuQ2JnTeRlBTBmgDFY6kO_TxJ8yE";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    try {
      const { data } = await httpAuth.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await getUserData();
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        if (message === "EMAIL_NOT_FOUND") {
          const errorObject = {
            email:
              "Пользователь с таким email не зарегестрирован. Зарегистрируйтесь!",
          };
          throw errorObject;
        }
        if (message === "INVALID_PASSWORD") {
          const errorObject = {
            password: "Не правильный пароль!",
          };
          throw errorObject;
        }
      }
    }
  }

  async function createUser(data) {
    try {
      const content = await userService.create(data);      
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }
  async function updateUser(id, data) {    
    try {
      const content = await userService.update(id, data);           
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }
  async function getUserData() {
    try {
      const content = await userService.getCurrentUser();
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setIsLoading(false);
    }
  }
  async function sendOrder(id, data, info) {
    try {
      const content = await orderService.create(id, data, info);
      console.log(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setIsLoading(false);
    }
  }
  async function getOrderById(id) {
    try {
      const content = await orderService.getById(id);
      return content;
    } catch (error) {
      errorCatcher(error);
    } finally {
      setIsLoading(false);
    }
  }
  const logOut = () => {
    localStorageService.remoteCurrentUserInfo();
    setCurrentUser(null);
    history.push("/");    
  }
  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, signIn, currentUser, logOut, updateUser, sendOrder, getOrderById }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
