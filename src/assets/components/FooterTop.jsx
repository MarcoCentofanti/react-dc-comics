import backgroundLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/dc-logo-bg.png";

const footerLink = [
  {
    title: "DC COMICS",
    links: [
      { name: "Characters", href: "#" },
      { name: "Comics", href: "#" },
      { name: "Movies", href: "#" },
      { name: "Games", href: "#" },
      { name: "TV", href: "#" },
      { name: "Video", href: "#" },
      { name: "News", href: "#" },
    ],
  },
  {
    title: "SHOP",
    links: [
      { name: "Shop DC", href: "#" },
      { name: "Shop DC Collectibles", href: "#" },
    ],
  },
  {
    title: "DC",
    links: [
      { name: "Term of Use", href: "#" },
      { name: "Privacy policy (new)", href: "#" },
      { name: "Ad Choises", href: "#" },
      { name: "Advertisign", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Subscriptions", href: "#" },
      { name: "Talent Workshop", href: "#" },
      { name: "CPSC Certificates", href: "#" },
      { name: "Ratings", href: "#" },
      { name: "Shop Help", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    title: "SITES",
    links: [
      { name: "DC", href: "#" },
      { name: "MAD", href: "#" },
      { name: "Magazine", href: "#" },
      { name: "DC Kids", href: "#" },
      { name: "DC Power Visa", href: "#" },
      { name: "DC Universe", href: "#" },
    ],
  },
];

// manca inserire l'immagine a destra nel footer
// src/img/dc-logo-bg.png

export default function Footer() {
  return (
    <footer className="footer-top">
      <div className="container footer-layout">
        {footerLink.map((element, index) => {
          return (
            <div key={index} className="footer-col">
              <div>
                <h3>{element.title}</h3>
                <div className="footer-col">
                  {element.links.map((link, id) => {
                    return (
                      <a key={id} href={link.href} className="footerLinks">
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="crop">
        <img src={backgroundLogo} alt="" />
      </div>
    </footer>
  );
}
