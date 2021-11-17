import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateUser from "./components/Navbar/CreateUser";

function App() {
  return (
    // All the components we need place here
    // We need to wrap all our elements or components inside one div
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={CreateUser}></Route>
        {/* <Home />
        </Route> */}
        <Route path="/login" component={Login} />
        {/* <Login />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
