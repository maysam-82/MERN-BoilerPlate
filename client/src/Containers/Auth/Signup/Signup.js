import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../../actions/actionCreators';

const Signup = ({ handleSubmit, signup }) => {
	const onSubmit = (formProps) => {
		signup(formProps);
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
				<button>Sign up</button>
			</form>
		</div>
	);
};

// compose allows us to apply multiple HOCs to a single component
export default compose(
	connect(null, { signup }),
	reduxForm({ form: 'signup' })
)(Signup);
