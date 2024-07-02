import { useContext } from "react";
import "./FemalePage.css";
import { Link, useNavigate } from "react-router-dom";
import { GirlItemsContext } from "../../Context/GirlsItemsContext";



export function ItemsForGirls() {
  const {list, plusButton, minusButton, isPackedOrNot, sortItems, resetItem} = useContext(GirlItemsContext)

  const navigate = useNavigate();

  const goToDestinationPage = () => {
    navigate("/destination");
  };

  return (
    <main>
      <div className="header">
        <small style={{ color: "green" }}> @PackMate™</small>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1> PackMate: Your Travel Companion 🧳</h1>
        </Link>
      </div>
      <div className="girl-list">
        <h2 className="girl-essentials">
          {" "}
          Essentials & Toiletries
          <ol type="1">
            {list.map((item) => (
              <li key={item.id}>
                {item.title}:{" "}
                <div>
                  <button
                    className="plus-button"
                    onClick={() => plusButton(item)}
                  >
                    +
                  </button>{" "}
                  {item.quantity}
                  <button
                    className="minus-button"
                    onClick={() => minusButton(item)}
                  >
                    -
                  </button>
                  <button
                    className="packed"
                    onClick={() => isPackedOrNot(item)}
                  >
                    {item.isPacked ? "packed✅" : "❎"}
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </h2>
      </div>
      <div>
        <Link  style={{ textDecoration: "none" , color: "darkgreen" , fontStyle: "oblique" }}  to={"/add-new-items-for-girls"}>Add New Items</Link>
        <button className="sortBy" onClick={() => sortItems("title")}>Sort By Title</button>
        <button className="sortBy" onClick={() => sortItems("quantity")}>Sort By Quantity</button>
        <button className="sortBy" onClick={() => sortItems("isPacked")}>Sort By Whether Is Packed</button>
        <button className="sortBy" onClick={() => sortItems("isNotPacked")}>
          Sort By Whether Is Not Packed
        </button>
        <button className="reset" onClick={() => resetItem()}>Reset</button>
        <button className="sortBy" onClick={goToDestinationPage}>
          Choose a destination
        </button>
      </div>
      <div className="footer">
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          Total number of items: {list.length}
        </p>
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          {" "}
          Total quantity of all items:{" "}
          {list.reduce((acc, item) => acc + item.quantity, 0)}
        </p>
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          {" "}
          Count of packed items:
          {list.filter((item) => item.isPacked).length}
        </p>
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          Count of all unpacked items:
          {list.filter((item) => !item.isPacked).length}
        </p>
      </div>
    </main>
  );
}
