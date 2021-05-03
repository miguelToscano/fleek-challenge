import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ApiKeys from "../ApiKeys";
import Requests from "../Requests"
import Login from "../Login";
import useToken from "./useToken";
import { ApiKeysMsProvider } from "../../providers/apiKeysMsProvider"
import { history } from "../../utils/history";

const App = () => {
  
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <ApiKeysMsProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/apiKeys" render={() => <ApiKeys />} />
            <Route exact path="/apiKeys/:id" render={() => <Requests />} />
            <Route exact path="/apiKeys/:id/disable" render={() => <ApiKeys />} />
            <Route path="/marketing-tool/login" exact>
              <Login />
            </Route>
          </Switch>
        </Router>
      </ApiKeysMsProvider>
    </div>
  );
}

export default App;