export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const paths = data.map((country) => {
    return {
      params: { id: country.name.common },
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
  console.log(country);
  return (
    <div>
      <h1>All details</h1>
      <h2>{country[0].capital}</h2>
    </div>
  );
};

export default Details;
