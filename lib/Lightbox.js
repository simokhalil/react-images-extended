'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _reactScrolllock = require('react-scrolllock');

var _reactScrolllock2 = _interopRequireDefault(_reactScrolllock);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _Arrow = require('./components/Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Container = require('./components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _PaginatedThumbnails = require('./components/PaginatedThumbnails');

var _PaginatedThumbnails2 = _interopRequireDefault(_PaginatedThumbnails);

var _Portal = require('./components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Spinner = require('./components/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _bindFunctions = require('./utils/bindFunctions');

var _bindFunctions2 = _interopRequireDefault(_bindFunctions);

var _canUseDom = require('./utils/canUseDom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _deepMerge = require('./utils/deepMerge');

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Icon = require('./components/Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// consumers sometimes provide incorrect type or casing
function normalizeSourceSet(data) {
	var sourceSet = data.srcSet || data.srcset;

	if (Array.isArray(sourceSet)) {
		return sourceSet.join();
	}

	return sourceSet;
}

var Lightbox = function (_Component) {
	_inherits(Lightbox, _Component);

	function Lightbox(props) {
		_classCallCheck(this, Lightbox);

		var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

		_this.theme = (0, _deepMerge2.default)(_theme2.default, props.theme);
		_this.classes = _aphrodite.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, _this.theme));
		_this.state = {
			imageLoaded: false,
			left: null,
			top: 15,
			width: 0,
			height: 0,
			rotate: 0,
			imageWidth: 0,
			imageHeight: 0,
			scaleX: 1,
			scaleY: 1
		};

		_this.containerWidth = 0;
		_this.containerHeight = 0;
		_this.footerHeight = 84;

		_this.setContainerWidthHeight();

		_bindFunctions2.default.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput', 'handleImageLoaded', 'handleAction', 'getImageCenterXY', 'handleZoom', 'handleRotate']);
		return _this;
	}

	_createClass(Lightbox, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				theme: this.theme
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.isOpen) {
				if (this.props.enableKeyboardInput) {
					window.addEventListener('keydown', this.handleKeyboardInput);
				}
				if (typeof this.props.currentImage === 'number') {
					this.preloadImage(this.props.currentImage);
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!_canUseDom2.default) return;

			if (this.props.isOpen && nextProps.isOpen) {
				this.preloadImage(this.props.currentImage);
			}

			// preload current image
			if (this.props.currentImage !== nextProps.currentImage || !this.props.isOpen && nextProps.isOpen) {
				var img = this.preloadImage(nextProps.currentImage);
				this.setState({ imageLoaded: img.complete });
			}

			// add/remove event listeners
			if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'setContainerWidthHeight',
		value: function setContainerWidthHeight() {
			this.containerWidth = window.innerWidth;
			this.containerHeight = window.innerHeight;
		}
	}, {
		key: 'getImageCenterXY',
		value: function getImageCenterXY() {
			return {
				x: this.state.left + this.state.width / 2,
				y: this.state.top + this.state.height / 2
			};
		}
	}, {
		key: 'getImgWidthHeight',
		value: function getImgWidthHeight(imgWidth, imgHeight) {
			var width = 0;
			var height = 0;
			var maxWidth = this.containerWidth * 0.8;
			var maxHeight = (this.containerHeight - this.footerHeight) * 0.8;
			width = Math.min(maxWidth, imgWidth);
			height = width / imgWidth * imgHeight;
			if (height > maxHeight) {
				height = maxHeight;
				width = height / imgHeight * imgWidth;
			}
			return [width, height];
		}
	}, {
		key: 'handleAction',
		value: function handleAction(type) {
			switch (type) {
				case _Icon.ActionType.prev:
					if (this.state.activeIndex - 1 >= 0) {
						this.handleChangeImg(this.state.activeIndex - 1);
					}
					break;
				case _Icon.ActionType.next:
					if (this.state.activeIndex + 1 < this.props.images.length) {
						this.handleChangeImg(this.state.activeIndex + 1);
					}
					break;
				case _Icon.ActionType.zoomIn:
					var imgCenterXY = this.getImageCenterXY();
					this.handleZoom(imgCenterXY.x, imgCenterXY.y, 1, 0.1);
					this.props.onZoomIn && this.props.onZoomIn();
					break;
				case _Icon.ActionType.zoomOut:
					var imgCenterXY2 = this.getImageCenterXY();
					this.handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, 0.1);
					this.props.onZoomOut && this.props.onZoomOut();
					break;
				case _Icon.ActionType.rotateLeft:
					this.handleRotate();
					this.props.onRotateLeft && this.props.onRotateLeft();
					break;
				case _Icon.ActionType.rotateRight:
					this.handleRotate(true);
					this.props.onRotateRight && this.props.onRotateRight();
					break;
				case _Icon.ActionType.reset:
					this.loadImg(this.state.activeIndex);
					break;
				case _Icon.ActionType.scaleX:
					this.handleScaleX(-1);
					break;
				case _Icon.ActionType.scaleY:
					this.handleScaleY(-1);
					break;
				case _Icon.ActionType.save:
					this.props.onSave && this.props.onSave(this.props.currentImage, { zoom: this.state.scaleX, rotation: this.state.rotate });
					break;
				default:
					break;
			}
		}
	}, {
		key: 'handleZoom',
		value: function handleZoom(targetX, targetY, direct, scale) {
			var imgCenterXY = this.getImageCenterXY();
			var diffX = targetX - imgCenterXY.x;
			var diffY = targetY - imgCenterXY.y;
			// when image width is 0, set original width
			var top = 0;
			var left = 0;
			var width = 0;
			var height = 0;
			var scaleX = 0;
			var scaleY = 0;
			if (this.state.width === 0) {
				var _getImgWidthHeight = this.getImgWidthHeight(this.state.imageWidth, this.state.imageHeight),
				    _getImgWidthHeight2 = _slicedToArray(_getImgWidthHeight, 2),
				    imgWidth = _getImgWidthHeight2[0],
				    imgHeight = _getImgWidthHeight2[1];

				left = (this.containerWidth - imgWidth) / 2;
				top = (this.containerHeight - this.footerHeight - imgHeight) / 2;
				width = this.state.width + imgWidth;
				height = this.state.height + imgHeight;
				scaleX = scaleY = 1;
			} else {
				var directX = this.state.scaleX > 0 ? 1 : -1;
				var directY = this.state.scaleY > 0 ? 1 : -1;
				scaleX = this.state.scaleX + scale * direct * directX;
				scaleY = this.state.scaleY + scale * direct * directY;
				if (Math.abs(scaleX) < 0.1 || Math.abs(scaleY) < 0.1) {
					return;
				}
				top = this.state.top + -direct * diffY / this.state.scaleX * scale * directX;
				left = this.state.left + -direct * diffX / this.state.scaleY * scale * directY;
				width = this.state.width;
				height = this.state.height;
			}
			this.setState({
				width: width,
				scaleX: Math.floor(scaleX * 10) / 10,
				scaleY: Math.floor(scaleY * 10) / 10,
				height: height,
				top: top,
				left: left,
				loading: false
			});
		}
	}, {
		key: 'handleRotate',
		value: function handleRotate() {
			var isRight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			this.setState({
				rotate: (this.state.rotate + 90 * (isRight ? 1 : -1)) % 360
			});
		}
	}, {
		key: 'preloadImage',
		value: function preloadImage(idx) {
			var _this2 = this;

			var data = this.props.images[idx];

			if (!data) return;

			var img = new Image();
			var sourceSet = normalizeSourceSet(data);

			// TODO: add error handling for missing images
			img.onerror = function () {
				_this2.setState({ imageLoaded: true });
			};

			img.onload = function () {
				var imgWidth = img.width;
				var imgHeight = img.height;

				var _getImgWidthHeight3 = _this2.getImgWidthHeight(imgWidth, imgHeight),
				    _getImgWidthHeight4 = _slicedToArray(_getImgWidthHeight3, 2),
				    width = _getImgWidthHeight4[0],
				    height = _getImgWidthHeight4[1];

				var left = (_this2.containerWidth - width) / 2;
				var top = (_this2.containerHeight - height - _this2.footerHeight) / 2;
				_this2.setState({
					width: width,
					height: height,
					left: left,
					top: top,
					imageWidth: imgWidth,
					imageHeight: imgHeight,
					rotate: data.initialRotation || 0,
					scaleX: data.initialZoom || 1,
					scaleY: data.initialZoom || 1,
					imageLoaded: true
				});
			};
			img.src = data.src;

			if (sourceSet) img.srcset = sourceSet;

			return img;
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    images = _props.images;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === images.length - 1) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			var currentImage = this.props.currentImage;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === 0) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickPrev();
		}
	}, {
		key: 'closeBackdrop',
		value: function closeBackdrop(event) {
			// make sure event only happens if they click the backdrop
			// and if the caption is widening the figure element let that respond too
			if (event.target.id === 'lightboxBackdrop' || event.target.tagName === 'FIGURE') {
				this.props.onClose();
			}
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				// left
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				// right
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				// esc
				this.props.onClose();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded() {
			this.setState({ imageLoaded: true });
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'left',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				title: this.props.leftArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;

			return _react2.default.createElement(_Arrow2.default, {
				direction: 'right',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				title: this.props.rightArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props2 = this.props,
			    backdropClosesModal = _props2.backdropClosesModal,
			    isOpen = _props2.isOpen,
			    showThumbnails = _props2.showThumbnails,
			    width = _props2.width;
			var imageLoaded = this.state.imageLoaded;


			if (!isOpen) return _react2.default.createElement('span', { key: 'closed' });

			var offsetThumbnails = 0;
			if (showThumbnails) {
				offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
			}

			return _react2.default.createElement(
				_Container2.default,
				{
					key: 'open',
					onClick: backdropClosesModal && this.closeBackdrop,
					onTouchEnd: backdropClosesModal && this.closeBackdrop
				},
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: (0, _aphrodite.css)(this.classes.content), style: { marginBottom: offsetThumbnails, maxWidth: width } },
						imageLoaded && this.renderHeader(),
						this.renderImages(),
						this.renderSpinner(),
						imageLoaded && this.renderFooter()
					),
					imageLoaded && this.renderThumbnails(),
					imageLoaded && this.renderArrowPrev(),
					imageLoaded && this.renderArrowNext(),
					this.props.preventScroll && _react2.default.createElement(_reactScrolllock2.default, null)
				)
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _this3 = this;

			var _props3 = this.props,
			    currentImage = _props3.currentImage,
			    images = _props3.images,
			    onClickImage = _props3.onClickImage;
			var imageLoaded = this.state.imageLoaded;


			if (!images || !images.length) return null;

			var image = images[currentImage];
			var sourceSet = normalizeSourceSet(image);
			var sizes = sourceSet ? '100vw' : null;

			var imgStyle = {
				width: this.state.width + 'px',
				height: 'auto',
				transform: 'rotate(' + this.state.rotate + 'deg) scaleX(' + this.state.scaleX + ') scaleY(' + this.state.scaleY + ')'
			};

			return _react2.default.createElement(
				'figure',
				{ className: (0, _aphrodite.css)(this.classes.figure) },
				_react2.default.createElement('img', {
					className: (0, _aphrodite.css)(this.classes.image, imageLoaded && this.classes.imageLoaded),
					onClick: onClickImage,
					ref: function ref(image) {
						_this3.image = image;
					},
					sizes: sizes,
					alt: image.alt,
					src: image.src,
					srcSet: sourceSet,
					style: imgStyle
				})
			);
		}
	}, {
		key: 'renderThumbnails',
		value: function renderThumbnails() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    showThumbnails = _props4.showThumbnails,
			    thumbnailOffset = _props4.thumbnailOffset;


			if (!showThumbnails) return;

			return _react2.default.createElement(_PaginatedThumbnails2.default, {
				currentImage: currentImage,
				images: images,
				offset: thumbnailOffset,
				onClickThumbnail: onClickThumbnail
			});
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var _props5 = this.props,
			    closeButtonTitle = _props5.closeButtonTitle,
			    customControls = _props5.customControls,
			    onClose = _props5.onClose,
			    showCloseButton = _props5.showCloseButton;


			return _react2.default.createElement(_Header2.default, {
				customControls: customControls,
				onClose: onClose,
				showCloseButton: showCloseButton,
				closeButtonTitle: closeButtonTitle
			});
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter() {
			var _props6 = this.props,
			    currentImage = _props6.currentImage,
			    images = _props6.images,
			    imageCountSeparator = _props6.imageCountSeparator,
			    showImageCount = _props6.showImageCount,
			    rotatable = _props6.rotatable,
			    zoomable = _props6.zoomable,
			    onSave = _props6.onSave;


			if (!images || !images.length) return null;

			return _react2.default.createElement(_Footer2.default, {
				caption: images[currentImage].caption,
				countCurrent: currentImage + 1,
				countSeparator: imageCountSeparator,
				countTotal: images.length,
				onAction: this.handleAction,
				rotatable: rotatable,
				showCount: showImageCount,
				zoomable: zoomable,
				savable: !!onSave
			});
		}
	}, {
		key: 'renderSpinner',
		value: function renderSpinner() {
			var _props7 = this.props,
			    spinner = _props7.spinner,
			    spinnerColor = _props7.spinnerColor,
			    spinnerSize = _props7.spinnerSize;
			var imageLoaded = this.state.imageLoaded;

			var Spinner = spinner;

			return _react2.default.createElement(
				'div',
				{ className: (0, _aphrodite.css)(this.classes.spinner, !imageLoaded && this.classes.spinnerActive) },
				_react2.default.createElement(Spinner, {
					color: spinnerColor,
					size: spinnerSize
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Portal2.default,
				null,
				this.renderDialog()
			);
		}
	}]);

	return Lightbox;
}(_react.Component);

Lightbox.propTypes = {
	backdropClosesModal: _propTypes2.default.bool,
	closeButtonTitle: _propTypes2.default.string,
	currentImage: _propTypes2.default.number,
	customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
	enableKeyboardInput: _propTypes2.default.bool,
	imageCountSeparator: _propTypes2.default.string,
	images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		src: _propTypes2.default.string.isRequired,
		srcSet: _propTypes2.default.array,
		caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
		thumbnail: _propTypes2.default.string
	})).isRequired,
	isOpen: _propTypes2.default.bool,
	leftArrowTitle: _propTypes2.default.string,
	onClickImage: _propTypes2.default.func,
	onClickNext: _propTypes2.default.func,
	onClickPrev: _propTypes2.default.func,
	onClose: _propTypes2.default.func.isRequired,
	onRotateLeft: _propTypes2.default.func,
	onRotateRight: _propTypes2.default.func,
	onZoomIn: _propTypes2.default.func,
	onZoomOut: _propTypes2.default.func,
	preloadNextImage: _propTypes2.default.bool,
	preventScroll: _propTypes2.default.bool,
	rightArrowTitle: _propTypes2.default.string,
	showCloseButton: _propTypes2.default.bool,
	showImageCount: _propTypes2.default.bool,
	showThumbnails: _propTypes2.default.bool,
	spinner: _propTypes2.default.func,
	spinnerColor: _propTypes2.default.string,
	spinnerSize: _propTypes2.default.number,
	theme: _propTypes2.default.object,
	thumbnailOffset: _propTypes2.default.number,
	width: _propTypes2.default.number
};
Lightbox.defaultProps = {
	closeButtonTitle: 'Close (Esc)',
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	leftArrowTitle: 'Previous (Left arrow key)',
	onClickShowNextImage: true,
	preloadNextImage: true,
	preventScroll: true,
	rightArrowTitle: 'Next (Right arrow key)',
	showCloseButton: true,
	showImageCount: true,
	spinner: _Spinner2.default,
	spinnerColor: 'white',
	spinnerSize: 100,
	theme: {},
	thumbnailOffset: 2,
	width: 1024
};
Lightbox.childContextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	content: {
		position: 'relative',
		width: '100vw',
		height: '100vh'
	},
	figure: {
		margin: 0, // remove browser default
		width: 'auto',
		height: 'auto',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	image: {
		display: 'block', // removes browser default gutter
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none',

		// opacity animation on image load
		opacity: 0,
		transition: 'opacity 0.3s'
	},
	imageLoaded: {
		opacity: 1
	},
	spinner: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		// opacity animation to make spinner appear with delay
		opacity: 0,
		transition: 'opacity 0.3s'
	},
	spinnerActive: {
		opacity: 1
	}
};

exports.default = Lightbox;