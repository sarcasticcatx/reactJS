import {useState } from "react";
import { TravelListModel } from "../../model/travel-list.model";
import "./MalePage.css";
import { Link } from "react-router-dom";


const boyList: TravelListModel[] = [
  {
    id: 1,
    title: "Toothbrush",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 2,
    title: "Toothpaste",
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
    title: "Razor",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 6,
    title: "Shaving cream",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 7,
    title: "Shorts",
    quantity: 0,
    isPacked: false,
  },
  {
    id: 8,
    title: "Underwear",
    quantity: 0,
    isPacked: false,
  },
];

export function ItemsForGuys() {
  const [boyItems, setBoyItems] = useState<TravelListModel[]>(boyList);


  //buttons
  const plusButton = (item: TravelListModel) => {
    setBoyItems(
      boyItems.map((it) => {
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
    setBoyItems(
      boyItems.map((it) => {
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
    setBoyItems((prevBoyItems) => {
      const updatedItems = prevBoyItems.map((it) =>
        it.id === item.id? {...it, isPacked:!it.isPacked } : it
      );
      console.log(updatedItems);
      return updatedItems;
    });
  };

  return (
    <main>
      <div className="header">  
        <small style={{color: 'green'}}> @PackMate™</small>
        <Link to="/" style={{ textDecoration: 'none' }} ><h1> PackMate: Your Travel Companion 🧳</h1></Link>
      
      </div>
      <div  className="boy-list">
        <h2 className="boy-essentials">
          {" "}
          Essentials & Toiletries
          <ol type="1">
            {boyItems.map((item) => (
              <li key={item.id}>
                {item.title}:{" "}
                <div > 
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
                <button className="packed" onClick={() => isPackedOrNot(item)}>
                  {item.isPacked? "packed✅" : "❎"} 
                </button>

                </div>
               
              </li>
            ))}
          </ol>
        </h2>
      </div>
      <div className="footer">
        <p>Total number of items: {boyItems.length}</p>
        <p> Total quantity of all items: {boyItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p> Count of packed items:{boyItems.filter((item) => item.isPacked).length}</p>
        <p>Count of all unpacked items:{boyItems.filter((item) => !item.isPacked).length}</p>
     
      </div>
    </main>
  );
}


