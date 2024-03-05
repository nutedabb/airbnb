import "./App.css";
import Nav from "./components/Nav";
import Mason from "./components/Mason";
import Card from "./components/Card";
import img1 from "./assets/image12.png";
import img2 from "./assets/image13.png";
import img3 from "./assets/image14.png";

function App() {
  return (
    <div classname="body">
      <Nav />
      <div className="xs">
        <Mason />
        <h1 className="poppins-bold">Online Experiences</h1>
        <p className="text1 poppins-light">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
        <div className="thecards">
          <Card
            src={img1}
            text="SOLD OUT"
            rating="5.0"
            bracket="6"
            country="USA"
            desc="Life lessons with Katie Zaferes
"
            from="$136"
          />
          <Card
            src={img2}
            text="ONLINE"
            rating="5.0"
            bracket="30"
            country="USA"
            desc="Learn wedding photography"
            from="$125"
          />
          <Card
            src={img3}
            text="ONLINE"
            rating="4.8"
            bracket="2"
            country="USA"
            desc="Group Mountain Biking"
            from="$50"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
