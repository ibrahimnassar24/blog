import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Router from "./components/Router";
import Loading from "./components/Loading";
import UseRefresh from "./hooks/UseRefresh";


function App() {

  const { auth, setAuth } = useContext(AuthContext);
  const [result, setResult] = useState();
  const refresh = UseRefresh();

  useEffect(() => {
    if (auth.username) { return; }
    (async () => {

      const res = await refresh();
      setResult(res);
    })()
  }, [])


  return (

    result
      ? <Router />
      : <Loading />
  );
}

export default App
