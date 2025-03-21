import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Search from "./input/Search";
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
            <Search />
          </div>
          <nav className={styles.links}>
            <ul>
              <li>
                <Link to="/smartphone">Smartphone</Link>
              </li>
              <li>
                <Link to="/ordinateur">Ordinateur Portable</Link>
              </li>
              <li>
                <Link to="/moniteur">Moniteur</Link>
              </li>
              <li>
                <Link to="/montre">Montre Connectée</Link>
              </li>
              <li>
                <Link to="/admin">Gérer</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.user}>
            <Link to="/login">Connexion</Link>
            <div className={styles.basket}>
              <Link to="/basket">
                <FaShoppingBasket />
              </Link>
            </div>
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
