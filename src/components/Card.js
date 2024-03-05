import star from "../assets/Star1.png";

const Card = (props) => {
  return (
    <div className="card-item">
      <img src={props.src} className="card-image" />
      <div className="text poppins-light">
        <h4>{props.text}</h4>
      </div>
      <div className="card-details">
        <img src={star} className="star" />
        <div className="spans">
          <span className="ratingNo poppins-light">{props.rating}</span>
          <span className="bracket poppins-light">({props.bracket})</span>
          <span className="country poppins-light"> . {props.country}</span>
        </div>
        <p className="desc poppins-light">{props.desc}</p>
        <p className="from poppins-light">
          <span className="poppins-semibold"> From {props.from}</span> / person
        </p>
      </div>
    </div>
  );
};
export default Card;
