import styles from "../../styles/pages/app.module.css";
import {AiOutlineMenu} from "react-icons/ai";

export default function NavegationMobile() {
  return (
    <div className={styles.navegationmobile}>
      <div className={styles.imagemmobile} />
      <AiOutlineMenu className={styles.menuhamburguer} />
    </div>
  );
}
