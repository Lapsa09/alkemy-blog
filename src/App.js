import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import CreatePost from "./pages/createPost/CreatePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditPost from "./pages/editPost/EditPost";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./assets/fetcher";
import { setPosts } from "./redux/features/PostsSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      dispatch(setPosts(postsData));
    };
    fetchPosts();
  }, []);

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
