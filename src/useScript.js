import { useEffect } from "react";

const useScript = (url) => {
  const hideRaychatWidget = () => {
    const raychatWidget = document.getElementById("raychat_widget");
    if (raychatWidget)
      document
        .getElementById("raychat_widget")
        .setAttribute("style", "display: none;");
  };

  const showRaychatWidget = () => {
    const raychatWidget = document.getElementById("raychat_widget");
    if (raychatWidget)
      document
        .getElementById("raychat_widget")
        .setAttribute("style", "display: block");
  };

  const addRaychatScript = () => {
    window.RAYCHAT_TOKEN = "8c6ec9a5-280f-4adc-b0a6-d1c089d7eee0";
    const script = document.createElement("script");

    script.id = "raychat";
    script.src = url;
    script.async = true;

    document.body.appendChild(script);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const raychatScript = document.getElementById("raychat");
      if (raychatScript) {
        showRaychatWidget();
      } else {
        addRaychatScript();
      }
    }
    return () => {
      if (typeof window !== "undefined") hideRaychatWidget();
      // window.Raychat.close();
      // const raychatScript =
      // document.getElementById("raychat").remove();
    };
  }, [url]);
};

export default useScript;
