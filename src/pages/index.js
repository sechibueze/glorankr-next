import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Head from "../components/Head";
import styles from "../styles/Home.module.css";

import { countries } from "../_data/countries";

export default function Home({ countries }) {
  console.log("countries data", countries[0]);
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword) ||
      country.capital.toLowerCase().includes(keyword) ||
      country.demonym.toLowerCase().includes(keyword)
  );
  return (
    <>
      <Head />
      <div className={styles.container}>
        <div className={styles.country_list_info}>
          <p className={styles.country_count}>
            Found {filteredCountries.length} countries{" "}
          </p>
          <div className={styles.search_wrapper}>
            <span className={styles.search_icon}>
              <SearchIcon color="inherit" />
            </span>
            <input
              onChange={handleSearch}
              placeholder="Filter by name, region & sub-region..."
              className={styles.search_input}
            />
          </div>
        </div>
        <div className={styles.data_table}>
          <div className={styles.data_heading}>
            <span className={styles.heading_flag}> </span>
            <span className={styles.heading_name}> Name </span>
            <span className={styles.heading_population}> Population </span>
            <span className={styles.heading_area}> Area </span>
            <span className={styles.heading_gini}> Gini </span>
          </div>
          <div className={styles.data_wrapper}>
            {filteredCountries.map((country) => (
              <div class={styles.data_row} key={country.name}>
                <span className={styles.flag}>
                  {" "}
                  <img src={country.flag} alt={`${country.name}'s flag`} />{" "}
                </span>
                <span> {country.name} </span>
                <span> {country.population} </span>
                <span> {country.area} </span>
                <span> {country.gini} </span>
              </div>
            ))}
          </div>
        </div>
        {/* <table className={styles.countries_table}> 
          <tr className={styles.countries_table_heading}>
            <th> Flag </th>
            <th> Name </th>
            <th> Population </th>
            <th>
              {" "}
              Area(km <sup>2</sup>)
            </th>
            <th> Ginit </th>
          </tr>
          {countries.map((country) => {
            const { name, flag, capital, area, gini, population } = country;
            return (
              <tr className={styles.country_row} key={name}>
                <td>
                  <img
                    src={flag}
                    className={styles.country_flag}
                    alt="country flag"
                  />
                </td>
                <td> {name} </td>
                <td> {population} </td>
                <td> {area} </td>
                <td> {gini} </td>
              </tr>
            );
          })}
        </table> */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  // const url = `https://restcountries.eu/rest/v2/all`;
  // const response = await fetch(url);
  // const countries = await response.json();
  // console.log("countries data ", countries[0]);

  return {
    props: {
      countries,
    },
  };
};
