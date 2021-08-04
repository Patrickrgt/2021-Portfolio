import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main.jsx";
import Mobile from "./components/mobile.jsx";

function App() {
  if (window.innerWidth >= 1024) {
    return <Main></Main>;
  } else if (window.innerWidth <= 1024) {
    return <Mobile></Mobile>;
  }
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
