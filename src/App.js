// import logo from "./logo.svg";
import "./App.css";

const name = "Cihan";
const surname = "Yarali";
const isLoggedIn = false;

function App() {
  // return React.createElement("div", null, "Hello");
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim adım ${name} , soyadım ${surname}`
          : "Giriş yapmadınız."}
      </h1>
    </>
  );
}

export default App;
