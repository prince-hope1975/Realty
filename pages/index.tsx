import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowRight} from "react-icons/ai";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Realty</title>
        <meta
          name="description"
          content="Real estate Website for the Blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>REALTY.</h1>
          <p>Real Estate Marketplace on the Blockchain</p>
          <div className={styles.inputField}>
            <input type="text" placeholder="Search For  Places, Cities E.T.C" />
            <AiOutlineArrowRight />
          </div>
          <div className={styles.bg}></div>
        </section>
        <section className={styles.site_picks}>
          <div className={styles.head}>
            <ul>
              <li>
                <Link href="">Search</Link>
              </li>
              <li>
                <Link href="">List</Link>
              </li>
              <li>
                <Link href="">Buy</Link>
              </li>
            </ul>
            <h2>Realty.</h2>
            <div>Connect Wallet</div>
          </div>
          <div className={styles.site_pick_image_section}>
            
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
