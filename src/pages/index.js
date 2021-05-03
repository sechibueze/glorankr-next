import Head from "../components/Head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head />
      <div className={styles.container}>
        <div className="">
          <p>Found 250 countries </p>
          <div className="search-item">
            <span>icon</span>
            <input />
          </div>
        </div>
      </div>
    </>
  );
}
