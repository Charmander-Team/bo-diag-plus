import styles from "../../styles/Navigation.module.scss";
import MainContext from "../contexts";
import { useContext } from "react";

const Navigation = () => {
  const { deconnectedAdmin } = useContext(MainContext);

  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <a href="#">
            <span className={styles.item}>Logo</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.item}>Accueil</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.item}>Patients</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.item}>Praticiens</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.item}>Articles</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.item}>Diagnostiques</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => {
              deconnectedAdmin(event);
            }}
          >
            <span className={styles.item}>Déconnexion</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
