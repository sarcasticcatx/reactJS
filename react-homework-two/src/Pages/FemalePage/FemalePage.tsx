import { useState } from "react";
import { TravelListModel } from "../../model/travel-list.model";
import "./FemalePage.css";
import { Link } from "react-router-dom";

const girlList: TravelListModel[] = [
  {
    id: 1,
    title: "Toothbrush & toothpaste",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 2,
    title: "Skin care",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 3,
    title: "Shampoo",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 4,
    title: "Deodorant",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 5,
    title: "Dresses",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 6,
    title: "Makeup",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 7,
    title: "Swimsuit",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 8,
    title: "Jewelry",
    quantity: 0,
    isPacked: false,
  },
];

export function ItemsForGirls() {
  const [girlItems, setGirlItems] = useState<TravelListModel[]>(girlList);

  //buttons
  const plusButton = (item: TravelListModel) => {
    setGirlItems(
      girlItems.map((it) => {
        if (it.id === item.id) {
          console.log("added");
          return { ...it, quantity: it.quantity + 1 };
        } else {
          return it;
        }
      })
    );
  };

  const minusButton = (item: TravelListModel) => {
    setGirlItems(
      girlItems.map((it) => {
        if (it.id === item.id && it.quantity !== 0) {
          console.log("removed");
          return { ...it, quantity: it.quantity - 1 };
        } else {
          return it;
        }
      })
    );
  };

  const isPackedOrNot = (item: TravelListModel) => {
    setGirlItems((prevGirlItems) => {
      const updatedItems = prevGirlItems.map((it) =>
        it.id === item.id ? { ...it, isPacked: !it.isPacked } : it
      );
      console.log(updatedItems);
      return updatedItems;
    });
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
            {girlItems.map((item) => (
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
      <div className="footer">
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          Total number of items: {girlItems.length}
        </p>
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          {" "}
          Total quantity of all items:{" "}
          {girlItems.reduce((acc, item) => acc + item.quantity, 0)}
        </p>
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          {" "}
          Count of packed items:
          {girlItems.filter((item) => item.isPacked).length}
        </p>
        <p style={{ backgroundColor: "rgb(188, 52, 230)" }}>
          Count of all unpacked items:
          {girlItems.filter((item) => !item.isPacked).length}
        </p>
      </div>
    </main>
  );
}
