// import { useState } from "react";
// import { TravelList } from "../../model/travel-list.model";
// import "./FemalePage.css";

// export function ItemsListForGirls() {
//   const [items, setItems] = useState<TravelList[]>(girlList);

//   const plusButton = (itemId: number) => {
//     setItems(
//       items.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, quantity: item.quantity + 1 };
//         } else {
//           return item;
//         }
//       })
//     );
//   };

//   const minusButton = (itemId: number) => {
//     setItems(
//       items.map((item) => {
//         if (item.id === itemId && item.quantity > 0) {
//           return { ...item, quantity: item.quantity - 1 };
//         } else {
//           return item;
//         }
//       })
//     );
//   };

//   const isPackedOrNot = (itemId: number) => {
//     setItems(
//       items.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, isPacked: !item.isPacked };
//         } else {
//           return item;
//         }
//       })
//     );
//   };
//   return (
//     <main>
//       <div className="header">
//         <h1> PackMate </h1>
//       </div>
//       <div className="girl-list">
//         <h2 className="girl-essentials">
//           Toiletries</h2>
//           <ol type="I">
//             {items.map((item) => (
//               <li key={item.id}>
//                 {item.title}:
//                 <button onClick={() => plusButton(item)}>+</button>
//                 <button onClick></button>
//               </li>
//             ))}

//           </ol>
//       </div>
//       <div className="footer">
//         <p>Total number of items:</p>
//         <p> Total quantity of all items:</p>
//         <p> Count of packed items:</p>
//         <p>Count of all unpacked items:</p>
//         <br />
//         <small> @PackMate™</small>
//       </div>
//     </main>
//   );
// }
// import { useState } from "react";
// import { TravelListModel } from "../../model/travel-list.model";
// import "./FemalePage.css";

// const boyList: TravelListModel[] = [
//   {
//     id: 1,
//     title: "Toothbrush",
//     quantity: 0,
//     isPacked: false,
//     categorie: "essentials",
//   },
// ];

// export function ItemsForGuys() {
//   const [boyItems, setBoyItems] = useState<TravelListModel[]>(boyList);

//   //plus button
//   const plusButton = (item: TravelListModel) => {
//     setBoyItems(
//       boyItems.map((it) => {
//         if (it.id === item.id) {
//           return { ...it, quantity: it.quantity + 1 };
//         } else {
//           return it;
//         }
//       })
//     );
//   };

//   return (
//     <main>
//       <div className="header">
//         <h1> PackMate</h1>
//       </div>
//       <div className="girl-list">
//         <h2 className="girl-essentials"> Essentials</h2>
//         <ol type="1">
//           {boyItems.map((item) => (
//             <li key={item.id}>
//               {item.title}:<button onClick={() => plusButton(item)}>+</button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </main>
//   );
// }
