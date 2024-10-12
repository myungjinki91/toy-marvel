import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./routers/Detail";
import NotFound from "./routers/NotFound";
import List from "./routers/List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/characters/:id">
          <Detail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
