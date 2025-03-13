import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import styles from "./Nav_bar.module.css";
export default function Navbar() {
  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="image sur l'ecotech" />
          </Link>
        </div>
        <div className={styles.nav}>
          <div className={styles.search}>
            <input type="text" />
          </div>
          <nav className={styles.links}>
            <ul>
              <li>
                <Link to="/Data">Smartphone</Link>
              </li>
              <li>
                <Link to="/">Ordinateur Portable</Link>
              </li>
              <li>
                <Link to="/">Montre Connectées</Link>
              </li>
              <li>
                <Link to="/"> Audio</Link>
              </li>
              <li>
                <Link to="/">Autre</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.user}>
            <Link to="/login">Connexion</Link>
            <div className={styles.avatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                alt="image dessin d'un avatar de connextion"
                style={{ width: "50", height: "40" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
