import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Card = () => {
  const navigate = useNavigate();
  const { authState, logoutUser } = useContext(AuthContext);
  const[text, setText] = useState("")

  const handleAddToDeals = () => {
    if (authState.isAuth) {
      console.log('Added to deals');
      //alert("Added to deals");
      setText("Added to deals Successfully");
    } else {
      alert("Please login to add to deals");
      navigate("/login");
    }
  };

  const handleCheckDetails = () => {
    if (authState.isAuth) {
      console.log('Checking details');
      setText("Check details SuccessFully");
      //alert("Check details SuccessFully");
    } else {
      alert("Please login to check details");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <>
        <div className="card-container" data-testid="dashboard-component" >
    <div>
      <h3 className="card-heading">Card Heading</h3>
      <p className="card-description">Card Description</p>
    </div>
    {authState.isAuth && (
      <button className="btn" data-testid="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    )}
    <button className="btn" onClick={handleCheckDetails}>Check Details</button>
    <button className="btn" onClick={handleAddToDeals}>Add to Deals</button>
  </div>
  <h3>{text}</h3>
    </>

  );
};

export default Card;

