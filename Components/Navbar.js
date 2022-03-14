import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/flags.jpg" width={120} height={120} alt="logo" />
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/countries">
        <a>Countries</a>
      </Link>
    </nav>
  );
};

export default Navbar;
