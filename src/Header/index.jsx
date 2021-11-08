
import headerStyle from "./headerStyle.module.less"
import logo from "../assets/images/logo.png";
import chengxin from "../assets/images/chengxin.png";
import zhuanzhu from "../assets/images/zhuanzhu.png";
import yuanchuang from "../assets/images/yuanchuang.png";
import gaoxiao from "../assets/images/gaoxiao.png";

const Header = () => {
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.nav}>
        <div className={headerStyle.logo}>
          <img alt="" src={logo} />
        </div>
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/">服务项目</a></li>
          <li><a href="/">案例</a></li>
          <li><a href="/">服务流程</a></li>
          <li className={headerStyle.contact}>15330066919</li>
        </ul>
      </div>
      <div className={headerStyle.banner}>
        <p className={headerStyle.strongText}>
        科技驱动<span>自主研发</span>
        </p>
        <p className={headerStyle.tipsText}>
        开发迭代快、高性价比的优势，
        致力于为客户提供专业、成熟、稳定的微信开发营销解决方案，
        帮助传统中小企业和商家共享移动互联红利，
        积极融入微信生态体系，
        有效实现目标用户获取和流量高效转化。
        </p>
      </div>
      <div className={headerStyle.subs}>
        <div className={headerStyle.container}>
          <div>
            <img alt="" src={chengxin} />
            <div>
              <h3>诚信</h3>
              <span>百年基业靠创新,万世伟业靠诚信，公司以诚信为本，为客户真诚的提供服务。</span>
            </div>
          </div>
          <div>
            <img alt="" src={zhuanzhu} />
            <div>
              <h3>专注</h3>
              <span>团队始于2009年，专注互联网研发服务超过11年时间。</span>
            </div>
          </div>
          <div>
            <img alt="" src={yuanchuang} />
            <div>
              <h3>原创</h3>
              <span>拥有多个自主软件著作版权，坚持项目定制开发。</span>
            </div>
          </div>
          
          <div>
            <img alt="" src={gaoxiao} />
            <div>
              <h3>高效</h3>
              <span>团队成员平均从业经验超过12年，能够高效完成各种项目。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;