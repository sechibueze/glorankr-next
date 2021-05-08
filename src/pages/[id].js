import Link from "next/link";
import styles from "../styles/country.module.css";
import { useEffect, useState } from "react";
import Head from "../components/Head";
// import { countries } from "../_data/countries";
const getCountryByCode = async (code) => {
  // console.log("received code", code);
  const url = `https://restcountries.eu/rest/v2/alpha/${code}`;
  // console.log("form url", url);
  const res = await fetch(url);
  const result = await res.json();
  // console.log("found res ", result.name);
  return {
    name: result.name,
    flag: result.flag,
    code: result.alpha3Code,
  };
};
// const getNeighbours = async (borders) => {
//   // Promise.all(promises)async .then()
//   const result = await Promise.all(borders.map((code) => getCountryByCode(code)));
//   return result;
// };

const CountryPage = ({ country }) => {
  const [borders, setBorders] = useState([]);
  const promises = [];
  country.borders.map((code) => {
    promises.push(getCountryByCode(code));
  });
  useEffect(async () => {
    const neighbors = await Promise.all(promises);
    setBorders(neighbors);
  }, []);
  return (
    <>
      <Head title={`${country.name} data`} />
      <div className={styles.country_wrapper}>
        <div className={styles.country_info_card}>
          <img src={country.flag} alt={`${country.name}'s flag`} />
          <div className={styles.country_id}>
            <h1 className={styles.country_name}> {country.name} </h1>
            <p className={styles.country_region}> {country.region} </p>
          </div>
          <div className={styles.country_stats}>
            <div className={styles.country_stats_card}>
              <p> {country.population} </p>
              <p>Population</p>
            </div>
            <div className={styles.country_stats_card}>
              <p> {country.area} </p>
              <p>Area</p>
            </div>
          </div>
        </div>

        <div className={styles.country_details}>
          <h3> Details</h3>
          <div className={styles.details_wrapper}>
            <div className={styles.details_row}>
              <p>Capital</p>
              <p>{country.capital} </p>
            </div>
            <div className={styles.details_row}>
              <p>Currencies</p>
              <p>
                {" "}
                {country.currencies.map((currency) => (
                  <span key={currency.name}>
                    <span title={currency.name}>
                      {" "}
                      {currency.name}({currency.symbol}){" "}
                    </span>
                  </span>
                ))}{" "}
              </p>
            </div>
            <div className={styles.details_row}>
              <p>Languages</p>
              <p>
                {" "}
                {country.languages
                  .map((language) => `${language.name}(${language.nativeName})`)
                  .join(" | ")}{" "}
              </p>
            </div>
            <div className={styles.details_row}>
              <p>Native name</p>
              <p> {country.nativeName} </p>
            </div>
            <div className={styles.details_row}>
              <p>Gini</p>
              <p> {country.gini} </p>
            </div>
          </div>
        </div>
        {/* Neigboring countries */}
        <div className={styles.border_wrapper}>
          <h3>Neigboring countries ({borders.length})</h3>
          <div className={styles.border_grid}>
            {borders.length > 0 &&
              borders.map((country) => (
                <Link href={`/${country.code}`} key={country.code}>
                  <a className={styles.border_country}>
                    <img src={country.flag} width="50%" />
                    <p> {country.name} </p>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;

export const getStaticPaths = async () => {
  const url = `https://restcountries.eu/rest/v2/all`;
  const response = await fetch(url);
  const result = await response.json();

  const paths = result.map((country) => ({
    params: { id: country.alpha3Code },
  }));
  // const paths = countries.map((country) => ({
  //   params: { id: country.alpha3Code },
  // }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const url = `https://restcountries.eu/rest/v2/alpha/${params.id}`;
  const response = await fetch(url);
  const result = await response.json();

  return {
    props: {
      country: result,
    },
  };
};
