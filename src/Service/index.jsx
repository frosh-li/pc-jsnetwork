import styles from "./style.module.less";
import p01 from "../assets/images/weapp.svg";
import p02 from "../assets/images/gongzhonghao.svg";
import p03 from "../assets/images/softdev.svg";
import p04 from "../assets/images/bigdata.svg";

const Service = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>服务项目</div>
      <div className={styles.sub_title}>
        Services
      </div>
      <div className={styles.desc}>
        核心团队都来自在一线互联网企业，精通Java、PHP、Javascript、Nodejs等开发语言，
        精通大数据、人工智能开发等相关技术。
      </div>
      <ul>
        <li>
          <img src={p01} />
          <h2>小程序开发</h2>
          <p>自研小程序开发框架，高性能，高扩展性，高可用！</p>
        </li>
        <li>
          <img src={p02} />
          <h2>系统定制开发</h2>
          <p>各种中高端系统定制开发，为您的企业保驾护航。</p>
        </li>
        <li>
          <img src={p03} />
          <h2>App开发</h2>
          <p>精通原生、RN、H5等模式的app开发，多种方案以供选择。</p>
        </li>
        <li>
          <img src={p04} />
          <h2>智能大数据应用</h2>
          <p>依托大数据，提供更加稳定可扩展的智能服务。</p>
        </li>
      </ul>
    </div>
  );
  
}

export default Service;