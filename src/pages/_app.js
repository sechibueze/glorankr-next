// import { DonutSmallIcon, Brightness6Icon } from "@material-ui/icons";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import Brightness6Icon from "@material-ui/icons/Brightness6";
// import { Brightness6, DonutSmallOutlined } from "@material-ui/icons";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-container">
      <nav className="navbar">
        <span className="logo-wrapper">
          <DonutSmallIcon
            className="logo-icon"
            color="primary"
            fontSize="large"
          />
        </span>
        <h1 className="logo-text">Glorankr </h1>
        <span className="theme-switcher">
          <Brightness6Icon
            // className="theme-switcher"
            color="primary"
            // classes={{ colorPrimary: "red", fontSizeSmall: "12" }}
            fontSize="small"
          />
        </span>
      </nav>
      <div className="main">
        <Component {...pageProps} />
      </div>

      <footer className="footer">
        <a
          href="https://sechibueze.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Samuel Chibueze
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
