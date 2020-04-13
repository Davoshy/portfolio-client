import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Main from "./components/Main";
import ReactApps from "./components/ReactApps";
import FrontApps from "./components/FrontApps";
import Games from "./components/Games";
import About from "./components/About";
import Resume from "./components/Resume";

//Import Styles
import logo from "./logo.svg";
import "./styles/nav.css";
import "./styles/main.css";
import "./styles/projects.css";
import "./styles/services.css";
import "./styles/card.css";
import "./styles/about.css";
import "./styles/resume.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/frontapps" component={FrontApps} />
        <Route path="/reactapps" component={ReactApps} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/games" component={Games} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
