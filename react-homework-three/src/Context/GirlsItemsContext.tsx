import { ReactNode, createContext, useState } from "react";
import { TravelListModel } from "../model/travel-list.model";
import { v4 as uuidv4 } from "uuid";

  interface GirlListContextInterface {
    list: TravelListModel[];
    plusButton: ( selectedItem: TravelListModel) => void;
    minusButton: (selectedItem: TravelListModel) => void;
    isPackedOrNot: (selectedItem: TravelListModel) => void;
    addItem: (selectedItem: TravelListModel) => void;
    sortItems: (selectedItem: string) => void;
    resetItem: () => void
    
  }
  
  export const GirlItemsContext = createContext<GirlListContextInterface>({
    list: [],
    plusButton() {},
    minusButton() {},
    isPackedOrNot() {},
    addItem: (selectedItem: TravelListModel) => {},
    sortItems: (selectedItem: string) => {},
    resetItem: () => {}
  });
  
  const girls = {
    girlList: [
        {
          id: uuidv4(),
          title: "Toothbrush & toothpaste",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
          title: "Skin care",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
          title: "Shampoo",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
          title: "Deodorant",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
          title: "Dresses",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
          title: "Makeup",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
          title: "Swimsuit",
          quantity: 0,
          isPacked: false,
        },
        {
          id: uuidv4(),
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
    
  const addItem = (selectedItem: TravelListModel) => {
    setTwoLists((prevItems) => [...prevItems, selectedItem]);
  };

  const sortItems = (selectedItem: string) => {
    if (selectedItem === "title") {
      setTwoLists((prevItem) => {
        return prevItem.sort((a, b) => (a.title > b.title ? 1 : -1));
      });
    }
    if (selectedItem === "quantity") {
      setTwoLists((prevItem) => {
        return prevItem.sort((a, b) => (a.quantity > b.quantity ? 1 : -1));
      });
    }
    if (selectedItem === "isPacked") {
      setTwoLists((prevItem) => {
        return prevItem.filter((item) => item.isPacked);
      });
    }
    if (selectedItem === "isNotPacked") {
      setTwoLists((prevItem) => {
        return prevItem.filter((item) => !item.isPacked);
      });
    }
  }

  const resetItem = () => {
    setTwoLists((prevItem) => prevItem.map(item => ({...item, isPacked: false, quantity: 0})))
  }
  
    return (
      <GirlItemsContext.Provider
        value={{ list, plusButton, minusButton, isPackedOrNot, addItem, resetItem, sortItems }}
      >
        {children}
      </GirlItemsContext.Provider>
    );
  }
  
