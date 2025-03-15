import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
    // Using useffect to prevent additional setTimeOut is called if function is rerendered with state
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return <h1>Error! Page not Found. Redirecting to home page</h1>;
}
