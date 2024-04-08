import { articlesNewsData } from "../../values/values";
import styles from "./home.module.css";

const ArticlesNews = () => {
  return (
    <div className={`${styles["articles-news"]} container sections-padding`}>
      {articlesNewsData.map((ele) => {
        return (
          <div key={ele.id} data-aos="zoom-out-right">
            <h3>March 23, 2022</h3>
            <span>The 10 best exercises to do in your park</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              velit omnis architecto temporibus. Reprehenderit voluptas
              repudiandae id ut atque possimus quasi consequatur officiis porro,
              amet esse, ab hic tenetur ipsa!
            </p>
            <button>Read More</button>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesNews;
