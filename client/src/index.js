import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import Welcome from './Components/Welcome/Welcome';

ReactDOM.render(
	<BrowserRouter>
		<App>
			<Route exact path="/" component={Welcome} />
		</App>
	</BrowserRouter>,
	document.querySelector('#root')
);
