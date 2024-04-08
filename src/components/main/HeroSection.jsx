import { useNavigate } from "react-router";
import styles from "./home.module.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["hero-section"]} data-aos="zoom-out-down">
      <h1 className="main-heading">PRADĖK SPORTUOTI</h1>
      <p>Sveikata ir džiaugsmas – kiekvieno sporto žingsnio rezultatas.</p>

      <div>
        <button onClick={() => navigate("/schedule")}>Sukurti planą</button>
        <button className="intro-btn intro-btn-transparent">
          Sukurti meniu
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
