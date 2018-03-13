'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = require('../utils/deepMerge');

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ToolbarAction(_ref, _ref2) {
	var theme = _ref2.theme;

	var icon = _ref.icon,
	    onClick = _ref.onClick,
	    props = _objectWithoutProperties(_ref, ['icon', 'onClick']);

	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	return _react2.default.createElement(
		'button',
		_extends({
			type: 'button',
			className: (0, _noImportant.css)(classes.actionButton),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		_react2.default.createElement(_Icon2.default, { fill: !!theme.toolbarAction && theme.toolbarAction.fill || _theme2.default.toolbarAction.fill, type: icon })
	);
}

ToolbarAction.propTypes = {
	icon: _propTypes2.default.string,
	onClick: _propTypes2.default.func.isRequired,
	type: _propTypes2.default.oneOf(['zoomIn', 'zoomOut', 'rotateLeft', 'rotateRight'])
};
ToolbarAction.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	actionButton: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	}
};

exports.default = ToolbarAction;