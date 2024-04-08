import styles from "./footer.module.css";
import { useNavigate } from "react-router";
import footerLogo from "../../assets/Logo.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_content} container `}>
        <div>
          <img src={footerLogo} alt="Footer Logo" />
        </div>
        <div>
          <h2>Informacija</h2>
          <ul>
            <li onClick={() => navigate("/plans")}>Treniruočių Planai</li>
            <li onClick={() => navigate("/food")}>Fitneso Maistas</li>
            <li onClick={() => navigate("/price")}>Kainos</li>
            <li onClick={() => navigate("/schedule")}>Kelendorius</li>
            <li onClick={() => navigate("/contact")}>Apie Mus</li>
          </ul>
        </div>
        <div>
          <h2>Kontaktai</h2>
          <ul>
            <li>Email</li>
            <li>Likedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h2>Prisijunkite prie mūsų naujienlaiškio</h2>
          <div>
            <input type="text" placeholder="Enter Your Email" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <div class={styles.footer_copyright}>
        <p>2024 Edvin, Visos teisės saugomos</p>
      </div>
    </div>
  );
};

export default Footer;
