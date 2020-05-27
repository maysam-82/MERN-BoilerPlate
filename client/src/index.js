import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import Welcome from './Components/Welcome';
import Signup from './Components/Auth/Signup';

ReactDOM.render(
	<BrowserRouter>
		<App>
			<Route exact path="/" component={Welcome} />
			<Route exact path="/signup" component={Signup} />
		</App>
	</BrowserRouter>,
	document.querySelector('#root')
);
