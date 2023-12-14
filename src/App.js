import logo from "./logo.svg";
import MaxLogo from "./img/max.png";
import VadymImg from "./image/VadymImg.jpg";
import "./App.css";
import NazariiImg from "./img/nazarii-img.webp";
import YanaLogo from "./img/yanaimg.jpg";
function App() {
  return (
    <div className="App">
      <h3>Team Project</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h3>Nazarii Prokopchuk</h3>
          <p>Role: QA</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={NazariiImg}
          ></img>
        </div>
        <div></div>
        <div>
          <h3>Max Romaniuk</h3>
          <p>Role: UI Designer</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={MaxLogo}
          ></img>
        </div>
        <div>
          <h3>Vadym Prosvirov</h3>
          <p>Role: Developer</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={VadymImg}
          ></img>
        </div>
        <div>
          <h3>Yana Strilets</h3>
          <p>Role: Project Manager</p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={YanaLogo}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
