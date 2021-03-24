import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import CreatePost from "./pages/createPost/CreatePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditPost from "./pages/editPost/EditPost";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/:id" component={Details} />
          <Route path="/create" component={CreatePost} />
          <Route path="/posts/:id/edit" component={EditPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
