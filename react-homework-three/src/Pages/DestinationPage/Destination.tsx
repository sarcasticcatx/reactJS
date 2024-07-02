import { useCallback, useContext, useEffect, useState } from "react";
import "./Destination.css";
import { CountryModel, ItemsContext } from "../../Context/ItemsContext";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { CountryCard } from "../../Components/CountryCard/CountryCard";
import { useNavigate } from "react-router-dom";

export function SearchByCountry() {
  const { countries, destination } = useContext(ItemsContext);
  const navigate = useNavigate();

  const [filteredCountries, setFilteredCountries] =
    useState<CountryModel[]>(countries);

  const onSearch = useCallback(
    (value: string) => {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [countries]
  );

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries, onSearch]);

  return (
    <>
      <div>
        <h2 style={{backgroundColor: "lightpink", color: "darkgreen"}}>click on a destination and then click on the provided form</h2>
        <SearchInput onSearch={onSearch} />
      </div>
      <div>
        {destination !== null ? (
          <div>
            
            <button className="destiny-form-button" onClick={() => navigate("/trip-details")}>
              {" "}
              Fill out the form please
            </button>
          </div>
        ) : null}
      </div>
      <div className="card-container">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, i) => (
            <CountryCard key={i} country={country} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </>
  );
}
