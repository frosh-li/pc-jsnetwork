import Carousel from 'react-images';
import styles from "./styles.module.less";
import app01 from "../assets/images/app01.png";
import app02 from "../assets/images/app02.png";
import app03 from "../assets/images/app03.png";
import app04 from "../assets/images/app04.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";

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
            <img src={p1} />
          </li>
          <li>
            <img src={p2} />
          </li>
          <li>
            <img src={p4} />
          </li>
          <li>
            <img src={p5} />
          </li>
          
        </ul>
    </div>
  )
}

export default Case;