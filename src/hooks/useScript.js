import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    let script = document.createElement("script");

    script.src = url;
    script.id = "WEKu7pDAS20WhGVVi4yPt";
    script.setAttribute("id", "WEKu7pDAS20WhGVVi4yPt");
    script.async = true;
    script.type = "text/babel";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
