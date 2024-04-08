import styles from "./trainers.module.css";
import { ourPlansData } from "../../values/values";

const HeroSection = () => {
  return (
    <div className={`${styles.trainers} container sections-padding`}>
      <div className={styles.trainers_head} data-aos="zoom-out-down">
        <h2 className={styles.title}>Kainos</h2>
      </div>

      <div className={styles.plans}>
        {ourPlansData.map((ele) => {
          return (
            <div key={ele.id} className={styles.plan} data-aos="flip-up">
              <h3>{ele.title}</h3>
              <div>
                <h4>{ele.offer}</h4>
                <p>{ele.description}</p>
              </div>
              <ul>
                <li>20 minutes of heart-pumping spin</li>
                <li>20 minutes of strength training</li>
                <li>50 Class Times Available</li>
                <li>20 minutes of invigorating yoga</li>
              </ul>
              <button>Pirkti narystę</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
