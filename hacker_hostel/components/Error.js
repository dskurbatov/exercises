import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Error = (({ name }) => {
	return (
		<div className="error">
			<div id="list">
				<div className="error-msg">
					<i className="fa fa-times-circle"></i>
					<p>{`Error! No menu generated for ${name}`}</p>
				</div>
			</div>
		</div>);
});

Error.propTypes = {
	name: PropTypes.string
}

export default Error;
