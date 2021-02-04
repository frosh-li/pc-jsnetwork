import styles from "./styles.module.less"
import wxqiye from "../assets/images/wxqiye.png";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <dl className={styles.contact}>
          <dt>联系我们</dt>
          <dd>电话:15330066919</dd>
          <dd>微信:15330066919</dd>
          <dd>邮箱:8082410@qq.com</dd>
        </dl>
        {/* <dl className={styles.contact}>
          <dt>友情链接</dt>
          <dd>电话:15330066919</dd>
          <dd>微信:15330066919</dd>
          <dd>邮箱:8082410@qq.com</dd>
        </dl> */}
        <div className={styles.wxCode}>
          <img src={wxqiye} />
          <span>添加企业微信</span>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright &copy; 2019 北京俊石网络科技有限公司版权所有</p>
        <p><a href="beian.miit.gov.cn" target="_blank">京ICP备2021003933号</a></p>
      </div>
    </div>
  )
  
}

export default Footer