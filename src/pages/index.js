import { useState } from "react";
import Link from "next/link";
import {
  Search as SearchIcon,
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardArrowRightOutlined,
} from "@material-ui/icons";
import Head from "../components/Head";
import styles from "../styles/Home.module.css";

import { countries } from "../_data/countries";
const SortIndicator = (direction) => {
  if (direction === "ASC") {
    return <KeyboardArrowUp color="inherit" />;
  } else {
    return <KeyboardArrowDown color="inherit" />;
  }
};

const DefaultSortIndicator = () => (
  <KeyboardArrowRightOutlined color="inherit" />
);
const orderedCountries = (listOfCountries, field, direction) => {
  if (direction.toLowerCase() === "asc") {
    return [...listOfCountries].sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }

  if (direction.toLowerCase() === "desc") {
    return [...listOfCountries].sort((a, b) => (a[field] > a[field] ? -1 : 1));
  }

  return listOfCountries;
};
export default function Home({ countries }) {
  console.log("countries data", countries[0]);
  const [keyword, setKeyword] = useState("");
  const [direction, setDirection] = useState("ASC");
  const [field, setField] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const changeDirection = () => {
    if (direction === "ASC") {
      setDirection("DESC");
    } else {
      setDirection("ASC");
    }
  };

  const setFieldAndDirection = (field) => {
    changeDirection();
    setField(field);
  };

  const filteredCountries = orderedCountries(
    countries,
    field,
    direction
  ).filter(
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
            <span className={styles.heading_name}>
              {" "}
              Name
              <span onClick={() => setFieldAndDirection("name")}>
                {field === "name"
                  ? SortIndicator(direction)
                  : DefaultSortIndicator()}{" "}
              </span>
            </span>
            <span className={styles.heading_population}>
              {" "}
              Population{" "}
              <span onClick={() => setFieldAndDirection("population")}>
                {field === "population"
                  ? SortIndicator(direction)
                  : DefaultSortIndicator()}{" "}
              </span>
            </span>
            <span className={styles.heading_area}>
              {" "}
              Area{" "}
              <span onClick={() => setFieldAndDirection("area")}>
                {field === "area"
                  ? SortIndicator(direction)
                  : DefaultSortIndicator()}{" "}
              </span>
            </span>
            <span className={styles.heading_gini}>
              {" "}
              Gini{" "}
              <span onClick={() => setFieldAndDirection("gini")}>
                {field === "gini"
                  ? SortIndicator(direction)
                  : DefaultSortIndicator()}{" "}
              </span>{" "}
            </span>
          </div>
          <div className={styles.data_wrapper}>
            {filteredCountries.map((country) => (
              <Link href={`/${country.alpha3Code}`}>
                <div class={styles.data_row} key={country.name}>
                  <span className={styles.flag}>
                    {" "}
                    <img
                      src={country.flag}
                      alt={`${country.name}'s flag`}
                    />{" "}
                  </span>
                  <span> {country.name} </span>
                  <span> {country.population} </span>
                  <span> {country.area} </span>
                  <span> {country.gini} </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
