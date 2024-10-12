import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import NotFound from "./routers/NotFound";
import List from "./routers/List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters/:id">
          <Detail />
        </Route>
        <Route path="/characters">
          <List />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
