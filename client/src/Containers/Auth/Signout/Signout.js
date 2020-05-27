import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../../actions/actionCreators';

const Signout = ({ signout }) => {
	useEffect(() => {
		signout();
	}, []);
	return <div>You have successfully signed out</div>;
};

export default connect(null, { signout })(Signout);
