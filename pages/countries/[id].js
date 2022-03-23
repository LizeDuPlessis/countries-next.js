import { useState } from "react";
import styles from "../../styles/countries.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const paths = data.map((country) => {
    return {
      params: { id: country?.name.common },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await res.json();

  return {
    props: { country: data },
  };
};

const Details = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = (e) => {
    console.log(showInfo);
    setShowInfo(!showInfo);
    e.target.value;
  };
  // console.log(country);
  return (
    <div className={styles.container}>
      <h1>Information</h1>
      <h2>{country[0].name.common}</h2>
      <div>
        <img src={country[0].flags.png} width={120} height={100} />
      </div>
      <div>
        <button className={styles.btn} onClick={handleShowInfo}>
          More Information
        </button>
      </div>

      {showInfo && (
        <>
          <div>
            <h4>Coat Of Arms: </h4>
            <img src={country[0].coatOfArms.png} width={120} height={100} />
          </div>
          <h4>Capital: {country[0].capital}</h4>
        </>
      )}
    </div>
  );
};

export default Details;
