import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="py-4 flex justify-center font-primary items-center">
      Built with{" "}
      <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> by{" "}
      <a
        href="https://waleedo.com"
        target="_blank"
        rel="waleedo"
        className="text-palette-primary font-bold px-1"
      >
        Walid Hamdi
      </a>
    </footer>
  );
}

export default Footer;
