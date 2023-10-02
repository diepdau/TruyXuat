import React from 'react';

const Sidebar0 = () => {
  return (
    <div id="nav-bar">
      <input type="checkbox" id="nav-toggle" />
      <div id="nav-header">
        <a id="nav-title" href="https://codepen.io" target="_blank" rel="noreferrer">
          C#<i className="fab fa-codepen"></i>DEPEN
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"></i><span>Your Work</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i><span>Assets</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack"></i><span>Pinned Items</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-heart"></i><span>Following</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line"></i><span>Trending</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire"></i><span>Challenges</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic"></i><span>Spark</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-gem"></i><span>Codepen Pro</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input type="checkbox" id="nav-footer-toggle" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank" rel="noreferrer">uahnbu</a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default Sidebar0;
const styles = {
    ":root": {
      "--background": "#9c88ff",
      "--navbar-width": "256px",
      "--navbar-width-min": "80px",
      "--navbar-dark-primary": "#18283b",
      "--navbar-dark-secondary": "#2c3e50",
      "--navbar-light-primary": "#f5f6fa",
      "--navbar-light-secondary": "#8392a5",
    },
    "html, body": {
      margin: 0,
      background: "var(--background)",
    },
    "#nav-toggle:checked": {
      "& ~ #nav-header": {
        width: "calc(var(--navbar-width-min) - 16px)",
      },
      "& ~#nav-content, & ~ #nav-footer": {
        width: "var(--navbar-width-min)",
      },
      "& ~ #nav-header #nav-title": {
        opacity: 0,
        pointerEvents: "none",
        transition: "opacity .1s",
      },
      "& ~ #nav-header label[for='nav-toggle']": {
        left: "calc(50% - 8px)",
        transform: "translate(-50%)",
      },
      "& ~ #nav-header #nav-toggle-burger": {
        background: "var(--navbar-light-primary)",
      },
      "& ~ #nav-header #nav-toggle-burger:before, & ~ #nav-header #nav-toggle-burger::after": {
        width: "16px",
        background: "var(--navbar-light-secondary)",
        transform: "translate(0, 0) rotate(0deg)",
      },
      "& ~ #nav-header #nav-toggle-burger:after": {
        top: "6px",
        transform: "translate(2px, -8px) rotate(-30deg)",
      },
      "& ~ #nav-content .nav-button span": {
        opacity: 0,
        transition: "opacity .1s",
      },
      "& ~ #nav-content .nav-button .fas": {
        minWidth: "calc(100% - 16px)",
      },
      "& ~ #nav-footer #nav-footer-avatar": {
        marginLeft: "0",
        left: "50%",
        transform: "translate(-50%)",
      },
      "& ~ #nav-footer #nav-footer-titlebox, & ~ #nav-footer label[for='nav-footer-toggle']": {
        opacity: 0,
        transition: "opacity .1s",
        pointerEvents: "none",
      },
    },
    "#nav-bar": {
      position: "absolute",
      left: "1vw",
      top: "1vw",
      height: "calc(100% - 2vw)",
      background: "var(--navbar-dark-primary)",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      color: "var(--navbar-light-primary)",
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      overflow: "hidden",
      userSelect: "none",
    },
    "#nav-bar hr": {
      margin: "0",
      position: "relative",
      left: "16px",
      width: "calc(100% - 32px)",
      border: "none",
      borderTop: "solid 1px var(--navbar-dark-secondary)",
    },
    "#nav-bar a": {
      color: "inherit",
      textDecoration: "inherit",
    },
    "#nav-bar input[type='checkbox']": {
      display: "none",
    },
    "#nav-header": {
      position: "relative",
      width: "var(--navbar-width)",
      left: "16px",
      minHeight: "80px",
      background: "var(--navbar-dark-primary)",
      borderRadius: "16px",
      zIndex: "2",
      display: "flex",
      alignItems: "center",
      transition: "width .2s",
    },
    "#nav-header hr": {
      position: "absolute",
      bottom: "0",
    },
    "#nav-title": {
      fontSize: "1.5rem",
      transition: "opacity 1s",
    },
    "label[for='nav-toggle']": {
      position: "absolute",
      right: "0",
      width: "3rem",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    "#nav-toggle-burger": {
      position: "relative",
      width: "16px",
      height: "2px",
      background: "var(--navbar-dark-primary)",
      borderRadius: "99px",
      transition: "background .2s",
    },
    "#nav-toggle-burger:before, #nav-toggle-burger:after": {
      content: "''",
      position: "absolute",
      top: "-6px",
      width: "10px",
      height: "2px",
      background: "var(--navbar-light-primary)",
      borderRadius: "99px",
      transform: "translate(2px, 8px) rotate(30deg)",
      transition: ".2s",
    },
    "#nav-toggle-burger:after": {
      top: "6px",
      transform: "translate(2px, -8px) rotate(-30deg)",
    },
    "#nav-content": {
      margin: "-16px 0",
      padding: "16px 0",
      position: "relative",
      flex: "1",
      width: "var(--navbar-width)",
      background: "var(--navbar-dark-primary)",
      boxShadow: "0 0 0 16px var(--navbar-dark-primary)",
      direction: "rtl",
      overflowX: "hidden",
      transition: "width .2s",
    },
    "#nav-content::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "#nav-content::-webkit-scrollbar-thumb": {
      borderRadius: "99px",
      backgroundColor: "#D62929",
    },
    "#nav-content::-webkit-scrollbar-button": {
      height: "16px",
    },
    "#nav-content-highlight": {
      position: "absolute",
      left: "16px",
      top: "-70px",
      width: "calc(100% - 16px)",
      height: "54px",
      background: "var(--background)",
      backgroundAttachment: "fixed",
      borderRadius: "16px 0 0 16px",
      transition: "top .2s",
    },
    "#nav-content-highlight:before, #nav-content-highlight:after": {
      content: "''",
      position: "absolute",
      right: "0",
      bottom: "100%",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      boxShadow: "16px 16px var(--background)",
    },
    "#nav-content-highlight:after": {
      top: "100%",
      boxShadow: "16px -16px var(--background)",
    },
    ".nav-button": {
      position: "relative",
      marginLeft: "16px",
      height: "54px",
      display: "flex",
      alignItems: "center",
      color: "var(--navbar-light-secondary)",
      direction: "ltr",
      cursor:'pointer'
    }
}