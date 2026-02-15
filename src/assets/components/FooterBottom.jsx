import facebookLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-facebook.png";
import twitterLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-twitter.png";
import youtubeLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-youtube.png";
import pinterestLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-pinterest.png";
import periscopeLogo from "/Users/marcocentofanti/Desktop/CODE/BOOLEAN/Project/react-dc-comics/src/img/footer-periscope.png";

export default function () {
  return (
    <footer className="footer-bottom ">
      <div className="container  py-5 space-between">
        <button>SIGN-UP NOW!</button>
        <div className="test">
          <a href="#" className="margin-right">
            FOLLOW US
          </a>
          <img src={facebookLogo} alt="" className="margin-right" />
          <img src={twitterLogo} alt="" className="margin-right" />
          <img src={youtubeLogo} alt="" className="margin-right" />
          <img src={pinterestLogo} alt="" className="margin-right" />
          <img src={periscopeLogo} alt="" className="margin-right" />
        </div>
      </div>
    </footer>
  );
}
3;
