import styles from "./styles.module.less";
import p1 from "../assets/images/workflow/p1.png";
import p2 from "../assets/images/workflow/p2.png";
import p3 from "../assets/images/workflow/p3.png";
import p4 from "../assets/images/workflow/p4.png";
import p5 from "../assets/images/workflow/p5.png";
import p6 from "../assets/images/workflow/p6.png";
import p7 from "../assets/images/workflow/p7.png";
import p8 from "../assets/images/workflow/p8.png";

const Workflow = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>服务流程</div>
        <div className={styles.sub_title}>
          WORKFLOW
        </div>
        <ul>
          <li><a href="JavaScript:"><img src={p1} width="50" height="50" />
            <p>沟通需求</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p2} width="50" height="50" />
            <p>签订合同</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p3} width="50" height="50"/>
            <p>UE原型设计</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p4} width="50" height="50"/>
            <p>需求确认</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p5} width="50" height="50"/>
            <p>UI设计</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p6} width="50" height="50" />
            <p>开发编码</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p7} width="50" height="50" />
            <p>测试验收</p>
            </a> </li>
          <li><a href="JavaScript:"><img src={p8} width="50" height="50" />
            <p>交付培训售后</p>
            </a> </li>
        </ul>
      </div>
    </div>
  )
}

export default Workflow;