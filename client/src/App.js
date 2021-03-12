import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Router>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={["/saved"]}>
            <Saved />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
