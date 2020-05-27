import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import Welcome from './Components/Welcome';
import Signup from './Components/Auth/Signup';
import reducers from './reducers';

ReactDOM.render(
	<Provider store={createStore(reducers, {})}>
		<BrowserRouter>
			<App>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/signup" component={Signup} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
