import Link from "next/link";
import { FC } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home: FC<{}> = () => (
  <>
    <Head>
      <title>Ninja LIst | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        molestias nihil vel, minima necessitatibus soluta. Deleniti sint atque
        accusamus dicta, fugiat cum, at minima amet, ex sapiente perspiciatis
        animi earum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        provident cumque modi blanditiis facilis. Asperiores harum, autem quos
        accusantium omnis molestias quod saepe quis error vero labore dolor hic
        molestiae!
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  </>
);

export default Home;
