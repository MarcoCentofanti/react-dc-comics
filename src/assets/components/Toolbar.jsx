import digitalComics from "../../img/buy-comics-digital-comics.png";
import dcMerchandise from "../../img/buy-comics-merchandise.png";
import shopLocator from "../../img/buy-comics-shop-locator.png";
import subscriptions from "../../img/buy-comics-subscriptions.png";
import poewrVisa from "../../img/buy-dc-power-visa.svg";

const toolbarElement = [
  { name: "DIGITAL COMICS", image: digitalComics },
  { name: "DC MERCHANDISE", image: dcMerchandise },
  { name: "SUBSCRIPTION", image: subscriptions },
  { name: "COMIC SHOP LOCATOR", image: shopLocator },
  { name: "DC POWER VISA", image: poewrVisa },
];

export default function Toolbar() {
  return (
    <section id="banner" className="bg-primary">
      <div className="container">
        <div className="d-flex justify-content-around align-items-center pt-4">
          {toolbarElement.map((element, index) => {
            return (
              <div key={index}>
                <img className="me-3 toolbar-img" src={element.image} alt="" />
                <span>{element.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
