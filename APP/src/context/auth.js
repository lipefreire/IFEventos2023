import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { TOKEN_KEY } from "../config/api";
import { Alert } from "react-native";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [authenticated, setAuthenticated] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function check() {
      await AsyncStorage.getItem(TOKEN_KEY).then(async (res) => {
        res
          ? await api
              .post("auth/check-token", {
                token: res,
              })
              .then((response) => {
                setAuthenticated(response.data.auth);
                setToken(res);
                if (response.data.auth === false) {
                  AsyncStorage.removeItem(TOKEN_KEY);
                }
              })
              .catch((err) => console.log(err))
          : setAuthenticated(false),
          setLoading(false);
      });
    }

    async function getMultipleItems() {
      setLoading(true);
      try {
        const keys = ["UserId", "UserIdPeople", "UserName", "UserEmail"];
        const result = await AsyncStorage.multiGet(keys);
        if (result !== null) {
          setUser({
            id: result[0][1],
            id_people: result[1][1],
            name: result[2][1],
            email: result[3][1],
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    getMultipleItems();
    check();
  }, []);

  async function SingIn(cpf, password) {
    await api
      .post("/auth", {
        cpf: cpf,
        password: password,
      })
      .then((res) => {
        AsyncStorage.setItem(TOKEN_KEY, res.data.token);
        AsyncStorage.setItem("UserId", String(res.data.user.id));
        AsyncStorage.setItem("UserIdPeople", String(res.data.user.id_people));
        AsyncStorage.setItem("UserName", String(res.data.user.name));
        AsyncStorage.setItem("UserEmail", String(res.data.user.email));
        setUser(res.data.user);
        setToken(res.data.token);
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function SingUp(
    cpf,
    name,
    ocupation,
    email,
    institution,
    deficiency,
    selectedValueCampus,
    password
  ) {
    if (institution == "") {
      institution =
        "Instituto Federal de Educação, Ciências e Tecnologia do Sertão de Pernambuco";
    }

    await api
      .post("/auth/register", {
        cpf: cpf,
        name: name,
        ocupation: ocupation,
        email: email,
        institution: institution,
        deficiency: deficiency,
        id_campus: selectedValueCampus,
        password: password,
        sage: 0,
        id_type_user: 2,
        created_at: new Date(),
        updated_at: null,
      })
      .then((res) => {
        AsyncStorage.setItem(TOKEN_KEY, res.data.token);
        AsyncStorage.setItem("UserId", String(res.data.user.id));
        AsyncStorage.setItem("UserIdPeople", String(res.data.user.id_people));
        AsyncStorage.setItem("UserName", String(res.data.user.name));
        AsyncStorage.setItem("UserEmail", String(res.data.user.email));
        setUser(res.data.user);
        setToken(res.data.token);
        setAuthenticated(true);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  }

  function Logout() {
    AsyncStorage.removeItem(TOKEN_KEY);
    AsyncStorage.removeItem("UserId");
    AsyncStorage.removeItem("UserIdPeople");
    AsyncStorage.removeItem("UserName");
    AsyncStorage.removeItem("UserEmail");
    setAuthenticated(false);
    setUser();
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, SingIn, SingUp, Logout, loading, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
