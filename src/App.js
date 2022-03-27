import { Switch, Route, Link, withRouter } from "react-router-dom";

import { Trending } from "./pages/Trending";
import { Search } from "./pages/Search";
import { Details } from "./pages/Details";
import { SearchForm } from "./components/SeacrhForm";
import "./App.css";

function App({ history }) {
  const search = (searchQuery) => {
    console.log(searchQuery);
    history.push(`${process.env.PUBLIC_URL}/search?q=${searchQuery}`);
  };
  return (
    <div className="App">
      <header className="header">
        <Link className="link" to={`${process.env.PUBLIC_URL}/`}>
         <h2>Home</h2> 
        </Link>
        <SearchForm onSubmit={search} />
      </header>
      <Switch>
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/`}
          render={(props) => <Trending {...props} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/search`}
          render={(props) => <Search {...props} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/gif/:id`}
          render={(props) => <Details {...props} />}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
