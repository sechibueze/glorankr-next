// import { DonutSmallIcon, Brightness6Icon } from "@material-ui/icons";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import Brightness6Icon from "@material-ui/icons/Brightness6";
// import { Brightness6, DonutSmallOutlined } from "@material-ui/icons";
import Link from "next/link";
import "../styles/globals.css";
import { useState, useEffect } from "react";
const THEME = "theme";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const existingTheme = localStorage.getItem(THEME);
    if (!existingTheme) {
      saveTheme(theme);
    } else {
      saveTheme(existingTheme);
    }
  }, []);
  function saveTheme(theme) {
    setTheme(theme);
    localStorage.setItem(THEME, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
  const changeTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };
  return (
    <div className="page-container">
      <nav className="navbar">
        <Link href="/">
          <a className="logo-link">
            <span className="logo-wrapper">
              <DonutSmallIcon
                className="logo-icon"
                color="primary"
                fontSize="large"
              />
            </span>
            <h1 className="logo-text">Glorankr </h1>
          </a>
        </Link>
        <span className="theme-switcher" onClick={() => changeTheme()}>
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
