
import headerStyle from "./headerStyle.less"
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className={headerStyle.header}>
      <div className="nav">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">服务案例</a></li>
          <li><a href="#">行业动态</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;