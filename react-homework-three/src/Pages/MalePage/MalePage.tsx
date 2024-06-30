import { useContext } from "react";
import "./MalePage.css";
import { ItemsContext } from "../../Context/ItemsContext";
import { Link } from "react-router-dom";


export function ItemsForGuys() {

const {list, plusButton, minusButton, isPackedOrNot} = useContext(ItemsContext)

 return (
    <main>
      <div className="header">
        <small style={{ color: "green" }}> @PackMate™</small>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1> PackMate: Your Travel Companion 🧳</h1>
        </Link>
      </div>
      <div className="boy-list">
        <h2 className="boy-essentials">
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
        <Link to={"/add-new-items"}>
        Add New Items</Link>
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



 