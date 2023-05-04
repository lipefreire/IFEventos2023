import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";

import App from "./app.routes";
import Auth from "./auth.routes";

import Preload from "../views/Preload";

export default function Index() {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <Preload />;
  } else {
    return authenticated ? <App /> : <Auth />;
  }
}
