import React, { Component } from 'react';
import PostAd from './PostAd';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


const finalCreateStore = compose(
  applyMiddleware(thunk),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    return (
	    <div>
	      	<Provider store={store}>
	        	{() => <PostAd /> }
	      	</Provider>
	      	<DebugPanel top right bottom>
          		<DevTools store={store} monitor={LogMonitor} />
        	</DebugPanel>
	    </div>
    );
  }
}
