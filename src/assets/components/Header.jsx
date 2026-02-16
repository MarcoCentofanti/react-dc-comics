import dcLogo from "../../img/dc-logo.png";

const linkList = [
  { name: "CHARACTERS", link: "#" },
  { name: "COMICS", link: "#" },
  { name: "MOVIES", link: "#" },
  { name: "TV", link: "#" },
  { name: "GAMES", link: "#" },
  { name: "COLLECTIBLES", link: "#" },
];

export default function Header() {
  return (
    <nav className="bg-light pb-3">
      <section
        id="navbar"
        className="container d-flex  pt-4 align-items-center justify-content-between"
      >
        <img src={dcLogo} alt="" />
        <div>
          {linkList.map((link, index) => {
            return (
              <a
                key={index}
                className={`me-4 ${link.name === "COMICS" ? "active" : ""}`}
                href={link.link}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </section>
    </nav>
  );
}
