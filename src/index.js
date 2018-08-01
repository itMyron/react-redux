import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/NavigationBar'
import FlashMessageList from './components/flash/FlashMessageList'




import registerServiceWorker from './registerServiceWorker';

import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";

import { Provider } from "react-redux";

const store =createStore(
    rootReducer ,                   
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
) ;

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <div>
        <FlashMessageList />
        <NavigationBar />
        {routes}
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
