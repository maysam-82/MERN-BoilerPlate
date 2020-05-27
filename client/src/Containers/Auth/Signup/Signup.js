import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Signup = ({ handleSubmit }) => {
	const onSubmit = (formProps) => {
		console.log(formProps);
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

export default reduxForm({ form: 'signup' })(Signup);
