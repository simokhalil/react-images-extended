'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Icon = require('./Icon');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarAction = require('./ToolbarAction');

var _ToolbarAction2 = _interopRequireDefault(_ToolbarAction);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = require('../utils/deepMerge');

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	}

	_createClass(Footer, [{
		key: 'handleAction',
		value: function handleAction(type) {
			this.props.onAction(type);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    caption = _props.caption,
			    countCurrent = _props.countCurrent,
			    countSeparator = _props.countSeparator,
			    countTotal = _props.countTotal,
			    showCount = _props.showCount,
			    zoomable = _props.zoomable,
			    rotatable = _props.rotatable,
			    savable = _props.savable;


			if (!caption && !showCount) return null;

			var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, this.context.theme));

			var imageCount = showCount ? _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.footerCount) },
				countCurrent,
				countSeparator,
				countTotal
			) : _react2.default.createElement('span', null);

			var featureNodeArr = [];

			if (zoomable) {
				featureNodeArr = featureNodeArr.concat([_react2.default.createElement(
					'li',
					{
						key: 'zoomIn',
						className: (0, _noImportant.css)(classes.footerActionBtn) },
					_react2.default.createElement(_ToolbarAction2.default, {
						icon: 'zoomIn',
						onClick: function onClick() {
							_this2.handleAction(_Icon.ActionType.zoomIn);
						}
					})
				), _react2.default.createElement(
					'li',
					{
						key: 'zoomOut',
						className: (0, _noImportant.css)(classes.footerActionBtn) },
					_react2.default.createElement(_ToolbarAction2.default, {
						icon: 'zoomOut',
						onClick: function onClick() {
							_this2.handleAction(_Icon.ActionType.zoomOut);
						}
					})
				)]);
			}

			if (rotatable) {
				featureNodeArr = featureNodeArr.concat([_react2.default.createElement(
					'li',
					{
						key: 'rotateLeft',
						className: (0, _noImportant.css)(classes.footerActionBtn) },
					_react2.default.createElement(_ToolbarAction2.default, {
						icon: 'rotateLeft',
						onClick: function onClick() {
							_this2.handleAction(_Icon.ActionType.rotateLeft);
						}
					})
				), _react2.default.createElement(
					'li',
					{
						key: 'rotateRight',
						className: (0, _noImportant.css)(classes.footerActionBtn) },
					_react2.default.createElement(_ToolbarAction2.default, {
						icon: 'rotateRight',
						onClick: function onClick() {
							_this2.handleAction(_Icon.ActionType.rotateRight);
						}
					})
				)]);
			}

			if (savable) {
				featureNodeArr = featureNodeArr.concat([_react2.default.createElement(
					'li',
					{
						key: 'save',
						className: (0, _noImportant.css)(classes.footerActionBtn) },
					_react2.default.createElement(_ToolbarAction2.default, {
						icon: 'save',
						onClick: function onClick() {
							_this2.handleAction(_Icon.ActionType.save);
						}
					})
				)]);
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.footer) },
				_react2.default.createElement(
					'div',
					{ className: (0, _noImportant.css)(classes.footerInfos) },
					caption ? _react2.default.createElement(
						'figcaption',
						{ className: (0, _noImportant.css)(classes.footerCaption) },
						caption
					) : _react2.default.createElement('span', { className: (0, _noImportant.css)(classes.footerCaption) }),
					_react2.default.createElement(
						'ul',
						{ className: (0, _noImportant.css)(classes.actions) },
						featureNodeArr
					),
					imageCount
				),
				_react2.default.createElement('div', { className: (0, _noImportant.css)(classes.footerActions) })
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

Footer.propTypes = {
	caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	countCurrent: _propTypes2.default.number,
	countSeparator: _propTypes2.default.string,
	countTotal: _propTypes2.default.number,
	onAction: _propTypes2.default.func,
	rotatable: _propTypes2.default.bool,
	showCount: _propTypes2.default.bool,
	zoomable: _propTypes2.default.bool
};
Footer.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	footer: {
		position: 'absolute',
		bottom: 35,
		width: '100%',
		height: '60px'
	},
	footerInfos: {
		boxSizing: 'border-box',
		color: _theme2.default.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: _theme2.default.footer.gutter.vertical,
		paddingLeft: _theme2.default.footer.gutter.horizontal,
		paddingRight: _theme2.default.footer.gutter.horizontal,
		paddingTop: _theme2.default.footer.gutter.vertical,
		zIndex: 1100,
		alignItems: 'center'
	},
	footerCount: {
		color: _theme2.default.footer.count.color,
		fontSize: _theme2.default.footer.count.fontSize,
		paddingLeft: '1em', // add a small gutter for the caption
		flex: 1,
		textAlign: 'right'
	},
	footerCaption: {
		flex: 1
	},
	footerActions: {
		position: 'relative',
		flex: 1
	},
	actions: {
		display: 'flex',
		listStyle: 'none',
		justifyContent: 'center',
		padding: 0,
		margin: 0
	}
};

exports.default = Footer;