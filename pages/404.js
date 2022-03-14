import Link from "next/link";
const PageNotFound = () => {
  return (
    <div>
      <h1>Oooooops!</h1>
      <p>Page not found!</p>
      <Link href="/">
        <a>HomePage</a>
      </Link>
    </div>
  );
};

export default PageNotFound;
