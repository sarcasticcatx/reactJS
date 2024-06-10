import { TravelList } from "../../model/travel-list.model";

import classes from "./listCard.module.css"

interface ListCardProp {
    list: TravelList;
}

export function ListCard({ list}: ListCardProp) {
    console.log(list)

    return (
<div className={`${classes.ListCard} ${list.isPacked === false ?  classes["is-packed-or-not"] : ""
}`}>
    <div className={classes.heading}> <strong> 
        What to Pack: </strong> 
        <span> {list.description}</span>
    </div>
    <p> Quantity: {list.quantity} item/s to pack !!</p>
    <p> Is it packed: {list.isPacked ? "✅" : "❎"}</p>

</div>
    );

}


