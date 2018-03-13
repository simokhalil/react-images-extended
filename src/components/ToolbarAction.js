import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import deepMerge from '../utils/deepMerge';
import Icon from './Icon';

function ToolbarAction ({
	icon,
	onClick,
	...props,
},
{
	theme,
}) {
	const classes = StyleSheet.create(deepMerge(defaultStyles, theme));

	return (
		<button
			type="button"
			className={css(classes.actionButton)}
			onClick={onClick}
			onTouchEnd={onClick}
			{...props}
		>
			<Icon fill={!!theme.toolbarAction && theme.toolbarAction.fill || defaults.toolbarAction.fill} type={icon} />
		</button>
	);
}

ToolbarAction.propTypes = {
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['zoomIn', 'zoomOut', 'rotateLeft', 'rotateRight']),
};
ToolbarAction.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	actionButton: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none',
	},
};

export default ToolbarAction;
