import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HomePage.css";
import PersistenDrawerRight from "./Menu-Bar";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Page404() {
  const linkToEssentials = (
    <List>
      {["ESSENTIALS"].map((text, index) => (
        <Link
          to={"/" + text.toLowerCase()}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button key={text} style={{ marginLeft: "10px" }}>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <div className="main-container_homepage">
      <PersistenDrawerRight />
      <div
        className="wrapper-homepage"
        style={{
          fontWeight: "900",
          backgroundImage: "url(../images/coffee.jpg )",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="headers-homepage" style={{ color: "rgb(122,104,98)" }}>
          <h1>404 - Page not found</h1>
          <p style={{ marginBottom: "10px" }}>
            Something went wrong! Tea in the machine maybe. Coffee makes life so
            much better.
          </p>
          <p>
            Grab some coffee here: <span>{linkToEssentials}</span>
          </p>
        </div>

        {/* <img
          className="image-coffee-homepage"
          src={require("../images/coffee_nobackground.png")}
          alt="coffe mug"
        ></img> */}
      </div>
    </div>
  );
}
export default Page404;
