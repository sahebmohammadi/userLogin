import NavBar from "./components/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginLayout from "./components/login/LoginLayout";
import LoginForm from "./components/login/LoginForm";
import Home from "./components/Home";
import Panel from "./components/Panel";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <LoginLayout sortBy="newest" {...props}>
                <LoginForm />
              </LoginLayout>
            )}
          />
          <Route path="/panel" component={Panel} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
