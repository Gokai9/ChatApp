import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Join from "./component/Join";
import Chat from "./component/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Join />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
