import { useState } from "react";
import styles from "./home.module.css";

const QuickInfo = () => {
  const [active, setActive] = useState(Array(4).fill(false));
  const [activeIndex, setActiveIndex] = useState(-1);

  const paragraphHandler = (index) => {
    setActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${styles["quick-info"]} container sections-padding`}>
      <div className={styles.trainers_head}>
        <h2 className="title">Dažnai užduodami klausimai</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!
        </p>
      </div>
      <div>
        <div>
          <h4>Kodėl naudinga turėti treniruočių kalendorių?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 0 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(0)}
          ></i>
        </div>
        <p className={active[0] ? styles.active : ""}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic
          asperiores rerum quia doloremque ipsum.
        </p>
      </div>
      <div>
        <div>
          <h4>Kada galiu pradėti treniruotis?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 1 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(1)}
          ></i>
        </div>
        <p className={active[1] ? styles.active : ""}>
          Lorem Ipsum has been the industry&rsquo;s standard dummy text ever
          since the 1500s, when an unknown printer took a&nbsp;galley
          of&nbsp;type and scrambled it&nbsp;to&nbsp;make a&nbsp;type specimen
          book.
        </p>
      </div>

      <div>
        <div>
          <h4>Kokios yra mokėjimo galimybės?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 2 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(2)}
          ></i>
        </div>
        <p className={active[2] ? styles.active : ""}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic
          asperiores rerum quia doloremque ipsum.
        </p>
      </div>

      <div>
        <div>
          <h4>Ar yra bandomasis laikotarpis?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 3 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(3)}
          ></i>
        </div>
        <p className={active[3] ? styles.active : ""}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic
          asperiores rerum quia doloremque ipsum.
        </p>
      </div>
      <div>
        <div>
          <h4>Kaip galiu susisiekti su palaikymo tarnyba?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 4 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(4)}
          ></i>
        </div>
        <p className={active[4] ? styles.active : ""}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic
          asperiores rerum quia doloremque ipsum.
        </p>
      </div>
      <div>
        <div>
          <h4>Ar galiu atšaukti prenumeratą?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 5 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(5)}
          ></i>
        </div>
        <p className={active[5] ? styles.active : ""}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic
          asperiores rerum quia doloremque ipsum.
        </p>
      </div>
    </div>
  );
};

export default QuickInfo;
