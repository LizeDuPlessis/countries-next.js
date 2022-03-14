export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const paths = data.map((countries) => {
    return {
      params: { id: countries.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await res.json();
  return {
    props: { countries: data },
  };
};

const Details = ({ countries }) => {
  return (
    <div>
      <h1>All details</h1>
      <h2>{countries.name.common}</h2>
    </div>
  );
};

export default Details;
