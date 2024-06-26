import { TravelList } from "../../model/travel-list.model";

import classes from "./listCard.module.css";

interface ListCardProp {
  list: TravelList;
  isPackedOrNot: (item: TravelList) => void;
}

export function ListCard({ list, isPackedOrNot }: ListCardProp) {
  console.log(list);

  return (
    <div
      className={`${classes.ListCard} ${
        list.isPacked === false ? classes["is-packed-or-not"] : ""
      }`}
    >
      <div className={classes.heading}>
        {" "}
        <strong>What to Pack: </strong>
        <span> {list.description}</span>
      </div>
      <p> Quantity: {list.quantity} item/s to pack !!</p>
      <button onClick={() => isPackedOrNot(list)}>
        {list.isPacked ? "Not Packed" : "Packed"}
      </button>
    </div>
  );
}
