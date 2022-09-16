import "./App.css";
import Main from "./components/main.jsx";
import Mobile from "./components/mobile.jsx";

function App() {
  if (window.innerWidth >= 1024) {
    return <Main></Main>;
  } else if (window.innerWidth <= 1024) {
    window.location.replace(
      "https://6324df9d1522e50008cca640--keen-praline-6b9e52.netlify.app/"
    );
  }
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
