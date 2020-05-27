import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './Components/App';
import Welcome from './Components/Welcome';
import Signup from './Containers/Auth/Signup';
import Feature from './Components/Feature';
import reducers from './reducers';
import Signout from './Containers/Auth/Signout';
import Signin from './Containers/Auth/Signin';
import './index.css';

const store = createStore(
	reducers,
	{
		auth: { authenticated: localStorage.getItem('token') },
	},
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signout" component={Signout} />
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/feature" component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
