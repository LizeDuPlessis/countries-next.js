import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { countries: data },
  };
};

const Countries = ({ countries }) => {
  return (
    <div>
      <h1>All Countries </h1>
      {countries.map((country) => (
        <Link href={`countries/${country.id}`} key={country.id}>
          <a>
            <h3>{country?.name.common}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
