import { ourPartners } from "../../values/values";
import styles from "./home.module.css";

const OurPlans = () => {
  return (
    <div className={`${styles["our-plans"]} container sections-padding`}>
      <div className={styles.trainers_head}>
        <h2 className="title">Musu Partneriai</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!{" "}
        </p>
      </div>
      <div className={styles["partners-inner"]}>
        {ourPartners.map((el) => {
          return (
            <div
              key={el.id}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={el.image} alt="nike" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPlans;
