import { useContext } from "react";
import { CountryModel, ItemsContext} from "../../Context/ItemsContext";
import "./CountryCard.css";


interface CountryCardProp {
  country: CountryModel;
}

export function CountryCard({ country }: CountryCardProp) {
  const { clickOnDestination } = useContext(ItemsContext)
  
  const clicked = () => {
    clickOnDestination(country)
  }
  return (
    <>
      <div onClick={clicked} className="card-details CountryCard">
        <h3 style={{ backgroundColor: "green", color: "lightpink" , fontFamily: "cursive"}}>
          Country: {country.name.common}
          <p style={{ backgroundColor: "green" , color: "hotpink" }}>
            Capital: {country.capital}
          </p>
        </h3>
        <img src={country.flags.png} alt={country.name.common} />
        <p style={{ backgroundColor: "green", color: "lightpink", fontFamily: "cursive"}}>
          Population: {country.population}
        </p>
      </div>
    </>
  );
}
