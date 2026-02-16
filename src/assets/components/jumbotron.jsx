import jumbotronImage from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/jumbotron.jpg";
import style from "./jumbotron.module.css";

export default function Jumbotron() {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${jumbotronImage})` }}
    ></div>
  );
}
