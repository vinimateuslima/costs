import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/vinicius-mateus-924807181/"
          >
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/vinicius-mateus-924807181/"
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/vinicius-mateus-924807181/"
          >
            <FaLinkedin />
          </Link>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
