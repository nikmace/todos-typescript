import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <TodosPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
