import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

const Header = ({ authenticated }) => {
	const renderLinks = () => {
		if (authenticated) {
			return (
				<>
					<Link to="/signout">Sign Out</Link>
					<Link to="/feature">Feature</Link>
				</>
			);
		} else {
			return (
				<>
					<Link to="/signup">Sign Up</Link>
					<Link to="/signin">Sign In</Link>
				</>
			);
		}
	};
	return (
		<div className="header">
			<div>
				<Link to="/">Redux Auth</Link>
			</div>
			<div>{renderLinks()}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		authenticated: state.auth.authenticated,
	};
};

export default connect(mapStateToProps)(Header);
