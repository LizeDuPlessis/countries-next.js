import Link from "next/link";
import { useState } from "react";
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { country: data },
  };
};

const Countries = ({ country }) => {
  // console.log(country, "COUNTRY");
  const [searchCountry, setSearchCountry] = useState("");
  const [submitBtn, setSubmitBtn] = useState("");

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    setSubmitBtn(searchCountry);
    e.preventDefault();
  };

  const filteredCountries = country.filter((country) =>
    country?.name.common.toLowerCase().includes(submitBtn.toLowerCase())
  );

  return (
    <>
      {searchCountry}
      <form>
        <input
          type="search"
          placeholder="Search Country"
          onChange={handleSearch}
          value={searchCountry}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <div>
        <h1>All Countries </h1>
        {filteredCountries.length ? (
          filteredCountries.map((country) => (
            <Link
              href={`countries/${country?.name.common}`}
              key={country?.name.common}
            >
              <a>
                <h3>{country?.name.common}</h3>
              </a>
            </Link>
          ))
        ) : (
          <h1>Sorry try again!</h1>
        )}
      </div>
    </>
  );
};

export default Countries;
