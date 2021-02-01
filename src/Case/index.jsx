import Carousel from 'react-images';
import styles from "./styles.module.less";
import app01 from "../assets/images/app01.png";
import app02 from "../assets/images/app02.png";
import app03 from "../assets/images/app03.png";
import app04 from "../assets/images/app04.png";

const Case = () => {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>成功案例</div>
        <div className={styles.sub_title}>
          CASE
        </div>
        
        
      </div>
      <ul>
          <li>
            <img src={app01} />
          </li>
          <li>
            <img src={app02} />
          </li>
          <li>
            <img src={app03} />
          </li>
          <li>
            <img src={app04} />
          </li>
          <li>
            <img src={app02} />
          </li>
        </ul>
    </div>
  )
}

export default Case;