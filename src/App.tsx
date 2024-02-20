import useScript from "./useScript";

const App = () => {
  useScript("https://widget-react.raychat.io/install/widget.js");
  const setUser = () => {
    // @ts-ignore
    window.Raychat.setUser({
      email: "h@gmail.clom",
      name: "yasin",
      about: "abvbbb",
      phone: "09371101609",
      avatar: "",
      updateOnce: true,
    });
  };
  const setUser2 = () => {
    // @ts-ignore
    window.Raychat.setUser({
      email: "asdasd@gmail.com",
      name: "yasi.dasdasn",
      about: "fff",
      phone: "09371101616",
      avatar: "",
      updateOnce: true,
    });
  };

  const getUser = () => {
    // @ts-ignore
    const user = window.Raychat.getUser();
    console.log(user);
  };

  const loadUser = (userId: string) => {
    // @ts-ignore
    window.Raychat.loadUser(userId);
    // @ts-ignore
    console.log(window.Raychat);
  };

  return (
    <div>
      <div onClick={setUser}>SET USER</div>
      <div onClick={getUser}>GET USER</div>
      <div
        onClick={() => {
          loadUser("65d477fbe0477738ccbcd533");
        }}
      >
        LOAD USER
      </div>
    </div>
  );
};

export default App;
