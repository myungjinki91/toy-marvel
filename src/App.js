import "./styles.css";

import { Switch, Route } from "react-router-dom";
import Home from "./routers/Home";
import Details from "./routers/Details";

export default function App() {
  return (
    <Switch>
      <Route path="/character/:id">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
