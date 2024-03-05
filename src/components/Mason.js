import Maspic from "./Maspic";
import "../App.css";
import pic1 from "../assets/mas1.png";
import pic2 from "../assets/mas2.png";
import pic3 from "../assets/mas3.png";
import pic4 from "../assets/mas4.png";
import pic5 from "../assets/mas5.png";
import pic6 from "../assets/mas6.png";
import pic7 from "../assets/mas7.png";
import pic8 from "../assets/mas8.png";
import pic9 from "../assets/mas9.png";

const Mason = () => {
  return (
    <div className="mason">
      <Maspic src={pic1} />
      <Maspic src={pic2} />
      <Maspic src={pic3} />
      <Maspic src={pic4} />
      <Maspic src={pic5} />
      <Maspic src={pic6} />
      <Maspic src={pic7} />
      <Maspic src={pic8} />
      <Maspic src={pic9} />
    </div>
  );
};

export default Mason;
