import { TravelList } from "../../model/travel-list.model";
import { ListCard } from "../ListCard/ListCard";
import "./ListPage.css"
import { v4 as uuidv4 } from 'uuid';



function ListPage() {


    const packedUnpackedMock: TravelList[] = [
        {
            id: uuidv4(),
            description: "Pack your toothbrush and toothpaste",
            quantity: 2,
            isPacked: false

        },
        {
            id: uuidv4(),
            description: "Pack your sunscreen and face lotion",
            quantity: 4,
            isPacked: true
        },
        {
            id: uuidv4(),
            description: "Pack your makeup and makeup remover",
            quantity: 50,
            isPacked: false

        },
        {
            id: uuidv4(),
            description: "Pack your medication and hair brush",
            quantity: 6,
            isPacked: true

        },
        {
            id: uuidv4(),
            description: "Pack your camera and sunglasses",
            quantity: 2,
            isPacked: false

        },
        {
            id: uuidv4(),
            description: "Pack your travel pillow",
            quantity: 1,
            isPacked: true

        },
        {
            id: uuidv4(),
            description: "Pack your clothes: socks, bras, t-shirts, jeans, dresses, sandals, sweatshirts, swimsuit",
            quantity: 15,
            isPacked: true

        },
        {
            id: uuidv4(),
            description: "Pack your jewelry",
            quantity: 8,
            isPacked: false

        },

    ];
    
    const wholeList = packedUnpackedMock.length;
    const allPackedList = packedUnpackedMock.filter(list => list.isPacked).length;
    const allNotPackedList = packedUnpackedMock.filter(list => list.isPacked).length;
    return(
        <section className="ListPage">
            <h2>What Should You Pack-List</h2>
            <div className="list-container">
                {packedUnpackedMock.map((list, i) => (
                   <ListCard key={i} list={list}/>
                ))} 
            </div>
<div className="text-style">
    All of the items: {wholeList}<br />
    Packed items: {allPackedList}<br />
    Not packed items: {allNotPackedList}
</div>
        </section>
    )
}
// At the bottom of the page show the total number of items, total number 
// of packed items and total number of unpacked items

export default ListPage;