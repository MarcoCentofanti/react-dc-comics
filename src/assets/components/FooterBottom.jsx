import facebookLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-facebook.png";
import twitterLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-twitter.png";
import youtubeLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-youtube.png";
import pinterestLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-pinterest.png";
import periscopeLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-periscope.png";

export default function () {
  return (
    <footer className="footer-bottom">
      <div className="container py-5">
        <button>SIGN-UP NOW!</button>
        <div className="test">
          <a href="#">FOLLOW US</a>
          <img src={facebookLogo} alt="" />
          <img src={twitterLogo} alt="" />
          <img src={youtubeLogo} alt="" />
          <img src={pinterestLogo} alt="" />
          <img src={periscopeLogo} alt="" />
        </div>
      </div>
    </footer>
  );
}
