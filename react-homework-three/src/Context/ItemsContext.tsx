import { ReactNode, createContext, useState } from "react";
import { TravelListModel } from "../model/travel-list.model";

interface ListContextInterface {
  list: TravelListModel[];
  plusButton: (selectedItem: TravelListModel) => void;
  minusButton: (selectedItem: TravelListModel) => void;
  isPackedOrNot: (selectedItem: TravelListModel) => void;
  setTwoLists: (value: React.SetStateAction<TravelListModel[]>) => void
}

export const ItemsContext = createContext<ListContextInterface>({
  list: [],
  setTwoLists(TravelListModel) {
  },
  plusButton() {},
  minusButton() {},
  isPackedOrNot() {},

});

const boys = {
  boyList: [
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
  ],
};

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [list, setTwoLists] = useState<TravelListModel[]>(boys.boyList);

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
    <ItemsContext.Provider
      value={{ list, plusButton, minusButton, isPackedOrNot, setTwoLists(TravelListModel) {
        
      }, }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
