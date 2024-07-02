import { ReactNode, createContext, useEffect, useState } from "react";
import { TravelListModel } from "../model/travel-list.model";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { TripDetailsFormInterface } from "../Components/TripDetailsForm/TripDetailsForm";

export interface CountryModel {
  name: {
    common: string;
  };
  capital: string;
  flags: {
    png: string;
  };
  population: number;
}

interface ListContextInterface {
  list: TravelListModel[];
  plusButton: (selectedItem: TravelListModel) => void;
  minusButton: (selectedItem: TravelListModel) => void;
  isPackedOrNot: (selectedItem: TravelListModel) => void;
  addItem: (selectedItem: TravelListModel) => void;
  sortItems: (selectedItem: string) => void;
  resetItem: () => void;
  countries: CountryModel[];
  destination: CountryModel | null;
  clickOnDestination: (selectedCountry: CountryModel) => void;
  tripDetails: TripDetailsFormInterface | null;
  onSubmit: (tripData: TripDetailsFormInterface) => void;
}

export const ItemsContext = createContext<ListContextInterface>({
  list: [],
  plusButton() {},
  minusButton() {},
  isPackedOrNot() {},
  addItem: () => {},
  sortItems: () => {},
  resetItem: () => {},
  countries: [],
  destination: null,
  clickOnDestination: () => {},
  tripDetails: null,
  onSubmit: () => {}
});

const boys = {
  boyList: [
    {
      id: uuidv4(),
      title: "Toothbrush",
      quantity: 0,
      isPacked: false,
    },
    {
      id: uuidv4(),
      title: "Toothpaste",
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
      title: "Razor",
      quantity: 0,
      isPacked: false,
    },
    {
      id: uuidv4(),
      title: "Shaving cream",
      quantity: 0,
      isPacked: false,
    },
    {
      id: uuidv4(),
      title: "Shorts",
      quantity: 0,
      isPacked: false,
    },
    {
      id: uuidv4(),
      title: "Underwear",
      quantity: 0,
      isPacked: false,
    },
  ],
};

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [list, setTwoLists] = useState<TravelListModel[]>(boys.boyList);
  const [countries, setCountries] = useState<CountryModel[]>([]);
  const [destination, setDestination] = useState<CountryModel | null>(null);
  const [tripDetails, setTripDetails] = useState<TripDetailsFormInterface | null>(null
  );

  const plusButton = (selectedItem: TravelListModel) => {
    setTwoLists((twoLists) => {
      return twoLists.map((it) => {
        if (it.id === selectedItem.id) {
          console.log("added");
          return { ...it, quantity: it.quantity++ };
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
  };

  const resetItem = () => {
    setTwoLists((prevItem) =>
      prevItem.map((item) => ({ ...item, isPacked: false, quantity: 0 }))
    );
  };

  const fetchingCountries = () => {
    axios
      .get<CountryModel[]>("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => console.log(`Can't fetch countries: ${error}`));
  };

  useEffect(() => {
    fetchingCountries();
  }, []);

  const clickOnDestination = (selectedCountry: CountryModel) => {
    setDestination(selectedCountry);
  };
  // change this into tripDetails????
  // const addTrip = (selectedTrip: TripDetailsFormInterface) => {
  //   setTripDetails((prevTrip) => [...prevTrip, selectedTrip]);
  // };

  const onSubmit = (tripData: TripDetailsFormInterface) => {
setTripDetails(tripData)
    }
  return (
    <ItemsContext.Provider
      value={{
        list,
        plusButton,
        minusButton,
        isPackedOrNot,
        addItem,
        sortItems,
        resetItem,
        countries,
        destination,
        clickOnDestination,
        tripDetails,
        onSubmit
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
