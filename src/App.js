import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Category from "./components/Category";
import CateFood from "./components/CateFood";
import FoodDetail from "./components/FoodDetail";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path={"/"} component={Category}></Route>
              <Route path={"/cate_food/:cno"} component={CateFood}></Route>
              <Route path={"/food_detail/:no"} component={FoodDetail}></Route>
            </Switch>
          </Router>
      </Provider>
  );
}

export default App;
