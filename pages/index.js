import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Page</title>
        <meta name="keywords" content="countries" />
      </Head>

      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        odio odit laborum perspiciatis deserunt ipsa iste hic in aliquid
        inventore, quos ad. Hic, itaque magnam quia corrupti id nisi?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        hic nulla minima nihil quia, veritatis voluptate pariatur? Error facilis
        libero laudantium dolore ipsam praesentium quaerat consequuntur
        exercitationem sequi, dolorem suscipit.
      </p>
      <Link href="/countries">
        <a className={styles.btn}>Countries</a>
      </Link>
    </div>
  );
}
