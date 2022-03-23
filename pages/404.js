import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    console.log("redirect to home page");
  }, []);

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
