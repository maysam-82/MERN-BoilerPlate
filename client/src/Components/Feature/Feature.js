import React from 'react';
import requireAuth from '../../hoc/requireAuth';

const Feature = () => {
	return <div>Feature</div>;
};

export default requireAuth(Feature);
