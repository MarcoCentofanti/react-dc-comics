import styles from "../Main.module.css";

export default function ProductCard(props) {
  const { id, thumb, title } = props;
  return (
    <div
      key={id}
      className={styles.boxFumetti}
      style={{ backgroundImage: `url(${thumb})` }}
    ></div>
  );
}
