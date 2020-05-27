import React from 'react';
import Header from '../../Containers/Header/Header';

export default ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
