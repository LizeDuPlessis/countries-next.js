import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { country: data },
  };
};

const Countries = ({ country }) => {
  console.log(country, "COUNTRY");
  return (
    <div>
      <h1>All Countries </h1>
      {country.map((country) => (
        <Link
          href={`countries/${country?.name.common}`}
          key={country?.name.common}
        >
          <a>
            <h3>{country?.name.common}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
