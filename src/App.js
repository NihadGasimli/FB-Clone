import { Outlet } from "react-router";
import style from "./App.module.css"
import logoHeader from "./images/Facebook-Logosu.png"
import Context from "./Contexts/Context";
import { Link } from "react-router-dom";

function App() {
  return (
    <Context>
      <>

        <header className={style.header}>
          <nav>
            <img alt="" src={logoHeader} className={style.logoHeader} />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/posts">Posts</Link></li>
            </ul>
          </nav>
        </header>
        <hr></hr>
        <Outlet />

      </>
    </Context>
  );
}

export default App;
