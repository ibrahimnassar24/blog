import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Router from "./components/Router";
import { api } from "../config";


function App() {

  const { auth, setAuth } = useContext(AuthContext);
  useEffect(() => {
    if (auth.username) { return; }
    (async () => {
      const response = await fetch(api + "/account/refresh", { credentials: "include" });
      if (response.status != 200) {
        return;
      }
      const data = await response.json();
      setAuth(data);
    })()
  }, [])

  return (
    <Router />
  );
}

export default App
