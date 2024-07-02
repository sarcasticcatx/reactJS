import { useContext } from "react";
import { ItemsContext } from "../../Context/ItemsContext";
import { GirlItemsContext } from "../../Context/GirlsItemsContext";
import { Link } from "react-router-dom";
import "./SummaryPage.css";

export function SummaryPage() {
  const { list: boyList, destination, tripDetails } = useContext(ItemsContext);
  const { list: girlList } = useContext(GirlItemsContext);
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2> Return to homepage 🧳</h2>
      </Link>
      <h1 style={{color: "rgb(83, 17, 72);", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} > Trip Details</h1>
      <div className="trip-container">
        <section>
          <h2 style={{color: "rgb(175, 5, 90", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} >
            Items which we packed for the upcoming trip:
            <ul>
              {girlList
                .filter((item) => item.isPacked === true)
                .map((item) => (
                  <li key={item.id}>
                    {item.title}: {item.quantity}{" "}
                    {item.isPacked ? "packed✅" : "❎"}
                  </li>
                ))}
              {boyList
                .filter((item) => item.isPacked === true)
                .map((item) => (
                  <li key={item.id}>
                    {item.title}: {item.quantity}{" "}
                    {item.isPacked ? "packed✅" : "❎"}
                  </li>
                ))}
            </ul>
          </h2>
        </section>
        <section>
          <h2 style={{color: "rgb(175, 5, 90", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} >Destination we have chosen *drum roll please*:</h2>
          <h4 style={{fontSize: "20px"}}>
            {" "}
            <strong>
              {" "}
              🎉 {destination?.name.common} , {destination?.capital}🎉{" "}
            </strong>
          </h4>
        </section>
        <section className="info-text">
          <h2 style={{color: "rgb(175, 5, 90"}}>Your information:</h2>
          <p>
            {" "}
            <strong> First Name:</strong> {tripDetails?.firstName}
          </p>
          <p>
            {" "}
            <strong> Last Name:</strong> {tripDetails?.lastName}
          </p>
          <p>
            {" "}
            <strong> Date Of Birth: </strong> {tripDetails?.dateOfBirth}
          </p>
          <p>
            {" "}
            <strong> Email: </strong>
            {tripDetails?.email}
          </p>
          <p>
            {" "}
            <strong> Phone Number: </strong>
            {tripDetails?.phoneNumber}
          </p>
        </section>
      </div>
    </>
  );
}

// List of all packed items with their quantities.
// Selected destination country.
// Trip details from the form.
