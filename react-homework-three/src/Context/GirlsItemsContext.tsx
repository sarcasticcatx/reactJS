import { ReactNode, createContext, useState } from "react";
import { TravelListModel } from "../model/travel-list.model";

//for me - ovie se globalni and can be accessed to anywhere i want them to be
//typescript was bein a douche so i made two global contexts/states
  interface GirlListContextInterface {
    list: TravelListModel[];
    plusButton: ( selectedItem: TravelListModel) => void;
    minusButton: (selectedItem: TravelListModel) => void;
    isPackedOrNot: (selectedItem: TravelListModel) => void;
  }
  
  export const GirlItemsContext = createContext<GirlListContextInterface>({
    list: [],
    plusButton() {},
    minusButton() {},
    isPackedOrNot() {},
  });
  
  const girls = {
    girlList: [
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
      ],
    }    
  
  export function GirlItemsProvider({ children }: { children: ReactNode}) {
    const [list, setTwoLists] = useState<TravelListModel[]>(girls.girlList)
  
  
    const plusButton = (selectedItem: TravelListModel) => {
      setTwoLists((twoLists) => {
        return twoLists.map((it) => {
          if (it.id === selectedItem.id) {
            console.log("added");
            return { ...it, quantity: it.quantity + 1 };
          } else {
            return it;
          }
        });
      });
    };
  
    const minusButton = (selectedItem: TravelListModel) => {
      setTwoLists((twoLists) => {
        return twoLists.map((it) => {
          if (it.id === selectedItem.id && it.quantity !== 0) {
            console.log("removed");
            return { ...it, quantity: it.quantity - 1 };
          } else {
            return it;
          }
        });
      });
    };
  
    const isPackedOrNot = (selectedItem: TravelListModel) => {
      setTwoLists((prevItems) => {
        const updatedList = prevItems.map((it) =>
          it.id === selectedItem.id ? { ...it, isPacked: !it.isPacked } : it
        );
        console.log(updatedList);
        return updatedList;
      });
    };
  
    return (
      <GirlItemsContext.Provider
        value={{ list, plusButton, minusButton, isPackedOrNot }}
      >
        {children}
      </GirlItemsContext.Provider>
    );
  }
  