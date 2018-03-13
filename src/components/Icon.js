import PropTypes from 'prop-types';
import React from 'react';
import arrowLeft from '../icons/arrowLeft';
import arrowRight from '../icons/arrowRight';
import close from '../icons/close';
import zoomIn from '../icons/zoomIn';
import zoomOut from '../icons/zoomOut';
import rotateLeft from '../icons/rotateLeft';
import rotateRight from '../icons/rotateRight';
import save from '../icons/save';

const icons = { arrowLeft, arrowRight, close, zoomIn, zoomOut, rotateLeft, rotateRight, save };

const Icon = ({ fill, type, ...props }) => {
	const icon = icons[type];

	return (
		<span
			dangerouslySetInnerHTML={{ __html: icon(fill) }}
			{...props}
		/>
	);
};

Icon.propTypes = {
	fill: PropTypes.string,
	type: PropTypes.any,
};
Icon.defaultProps = {
	fill: 'white',
};

export default Icon;

export const ActionType = {
	zoomIn: 1,
	zoomOut: 2,
	prev: 3,
	next: 4,
	rotateLeft: 5,
	rotateRight: 6,
	reset: 7,
	close: 8,
	scaleX: 9,
	scaleY: 10,
	save: 11,
};
