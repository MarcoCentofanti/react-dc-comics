import styles from "./Main.module.css";
import Productlist from "./Products/Productlist";

export default function Main(props) {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.elementContainer}>
          <Productlist products={props.products} />
        </div>
        <button className={styles.button}>LOAD MORE</button>
      </main>
    </>
  );
}
