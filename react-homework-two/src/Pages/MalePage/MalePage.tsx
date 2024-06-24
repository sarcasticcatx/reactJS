import {useEffect, useState } from "react";
import { TravelListModel } from "../../model/travel-list.model";
import "./MalePage.css";

//go stavam ova tuka edinstveno zasto ne mi go povrzuva vo poseven folder koga e
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
  // const isPacked = (item: TravelListModel) => {
  //   setBoyItems((prevBoyItems) => {
  //     const updatedItems = prevBoyItems.map((it) =>
  //       it.id === item.id? {...it, isPacked: true } : it
  //     );
  //     console.log("packed");
  //     return updatedItems;
  //   });
  // };
  
  // const isNotPacked = (item: TravelListModel) => {
  //   setBoyItems((prevBoyItems) => {
  //     const updatedItems = prevBoyItems.map((it) =>
  //       it.id === item.id? {...it, isPacked: false } : it
  //     );
  //     console.log("not packed");
  //     return updatedItems;
  //   });
  // };
  const isPackedOrNot = (item: TravelListModel) => {
    setBoyItems((prevBoyItems) => {
      const updatedItems = prevBoyItems.map((it) =>
        it.id === item.id? {...it, isPacked:!it.isPacked } : it
      );
      console.log(updatedItems);
      return updatedItems;
    });
  };
  
useEffect(() => {
      const packedItems = boyList.filter((item) => item.isPacked).length;
    const unpackedItems = boyList.filter((item) => !item.isPacked).length;
}, [boyItems])



  return (
    <main>
      <div className="header">
        <h1> PackMate: Your Travel Companion 🧳 </h1>
      </div>
      <div className="boy-list">
        <h2 className="boy-essentials">
          {" "}
          Essentials and Toiletries
          <ol type="1">
            {boyItems.map((item) => (
              <li key={item.id}>
                {item.title}: quantity:{" "}
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
                  {item.isPacked? "✅" : "❎"} 
                </button>
                {/* <button
                  className="not-packed"
                  onClick={() => isNotPacked(item)}
                >
                  {item.isPacked} ❎
                </button> */}
              </li>
            ))}
          </ol>
        </h2>
      </div>
      <div className="footer">
        <p>Total number of items: {boyItems.length}</p>
        <p> Total quantity of all items:</p>
        <p> Count of packed items:{packedItems}</p>
        <p>Count of all unpacked items:{unpackedItems}</p>
        <br />
        <small> @PackMate™</small>
      </div>
    </main>
  );
}
