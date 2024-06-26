import { useState } from "react";
import { TravelList } from "../../model/travel-list.model";
import { ListCard } from "../ListCard/ListCard";
import "./ListPage.css";
import { v4 as uuidv4 } from "uuid";

function ListPage() {
  const packedUnpackedMock: TravelList[] = [
    {
      id: uuidv4(),
      description: "Pack your toothbrush and toothpaste",
      quantity: 2,
      isPacked: false,
    },
    {
      id: uuidv4(),
      description: "Pack your sunscreen and face lotion",
      quantity: 4,
      isPacked: true,
    },
    {
      id: uuidv4(),
      description: "Pack your makeup and makeup remover",
      quantity: 50,
      isPacked: false,
    },
    {
      id: uuidv4(),
      description: "Pack your medication and hair brush",
      quantity: 6,
      isPacked: true,
    },
    {
      id: uuidv4(),
      description: "Pack your camera and sunglasses",
      quantity: 2,
      isPacked: false,
    },
    {
      id: uuidv4(),
      description: "Pack your travel pillow",
      quantity: 1,
      isPacked: true,
    },
    {
      id: uuidv4(),
      description:
        "Pack your clothes: socks, bras, t-shirts, jeans, dresses, sandals, sweatshirts, swimsuit",
      quantity: 15,
      isPacked: true,
    },
    {
      id: uuidv4(),
      description: "Pack your jewelry",
      quantity: 8,
      isPacked: false,
    },
  ];
  const [listItems, setListItems] = useState<TravelList[]>(packedUnpackedMock);

  const isPackedOrNot = (item: TravelList) => {
    setListItems((prevListItems) => {
      const updatedItems = prevListItems.map((it) =>
        it.id === item.id ? { ...it, isPacked: !it.isPacked } : it
      );
      console.log(updatedItems);
      return updatedItems;
    });
  };

  return (
    <section className="ListPage">
      <h2>What Should You Pack-List</h2>
      <div className="list-container">
        {listItems.map((list) => (
          <ListCard key={list.id} list={list} isPackedOrNot={isPackedOrNot} />
        ))}
      </div>
      <div className="text-style">
        All of the items: {listItems.length}
        <br />
        Packed items: {listItems.filter((list) => list.isPacked).length}
        <br />
        Not packed items: {listItems.filter((list) => !list.isPacked).length}
      </div>
    </section>
  );
}
// At the bottom of the page show the total number of items, total number
// of packed items and total number of unpacked items

export default ListPage;
