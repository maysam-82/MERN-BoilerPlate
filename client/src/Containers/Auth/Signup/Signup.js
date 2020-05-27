import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../../actions/actionCreators';

const Signup = ({ handleSubmit, signup, errorMessage, history }) => {
	const onSubmit = (formProps) => {
		signup(formProps, () => {
			history.push('/feature');
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				{errorMessage ? <div>{errorMessage}</div> : null}
				<button>Sign up</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
	};
};

// compose allows us to apply multiple HOCs to a single component
export default compose(
	connect(mapStateToProps, { signup }),
	reduxForm({ form: 'signup' })
)(Signup);
