(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('prop-types'), require('react'), require('aphrodite'), require('react-scrolllock'), require('aphrodite/no-important'), require('react-transition-group'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['prop-types', 'react', 'aphrodite', 'react-scrolllock', 'aphrodite/no-important', 'react-transition-group', 'react-dom'], factory) :
	(global.Lightbox = factory(global.PropTypes,global.React,global.aphrodite,global.ScrollLock,global.aphrodite,global.ReactTransitionGroup,global.ReactDOM));
}(this, (function (PropTypes,React,aphrodite,ScrollLock,noImportant,reactTransitionGroup,reactDom) { 'use strict';

PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
var React__default = 'default' in React ? React['default'] : React;
ScrollLock = ScrollLock && ScrollLock.hasOwnProperty('default') ? ScrollLock['default'] : ScrollLock;

// ==============================
// THEME
// ==============================

var theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10
	},
	zIndex: 2001
};

// header
theme.header = {
	height: 40
};
theme.close = {
	fill: 'white'
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em'
	},
	height: 'auto',
	gutter: {
		horizontal: 0,
		vertical: 5
	}
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120
};

// toolbar action
theme.toolbarAction = {
	background: 'none',
	fill: 'white',
	height: 60
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function deepMerge(target) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var extended = Object.assign({}, target);

	Object.keys(source).forEach(function (key) {
		if (_typeof(source[key]) !== 'object' || !source[key]) {
			extended[key] = source[key];
		} else {
			if (!target[key]) {
				extended[key] = source[key];
			} else {
				extended[key] = deepMerge(target[key], source[key]);
			}
		}
	});

	return extended;
}

var arrowLeft = (function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z\"/>\n\t</svg>";
});

var arrowRight = (function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z\"/>\n\t</svg>";
});

var close = (function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n\t\t<path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"/>\n\t</svg>";
});

var zoomIn = (function (fill) {
	return "<svg fill=\"" + fill + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 150 100\">\n\t<g>\n\t\t<path d=\"M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2c1,0,2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35    c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7    c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z\"/>\n\t\t<path d=\"m47.5,78.3c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-22.6h22.6c2.3,0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1h-22.6v-22.6c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v22.6h-22.6c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1 4.1,4.1h22.6v22.6z\"/>\n\t</g>\n</svg>";
});

var zoomOut = (function (fill) {
  return "<svg fill=\"" + fill + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 150 100\" xml:space=\"preserve\" class=\"\">\n\t<g>\n      <path d=\"m51.6,6.5c-24.9,0-45.1,20.2-45.1,45.1 0,24.9 20.2,45.1 45.1,45.1 11,0 21-3.9 28.9-10.5l35.1,35.1c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-35.1-35c6.5-7.8 10.5-17.9 10.5-28.9-0.1-24.9-20.3-45.1-45.2-45.1zm0,82.1c-20.4,0-37-16.6-37-37 0-20.4 16.6-37 37-37 20.4,0 37,16.6 37,37 0,20.4-16.6,37-37,37z\" />\n      <path d=\"m78.3,47.5h-53.4c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1 4.1,4.1h53.4c2.3,0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1z\" />\n    </g>\n</svg>";
});

var rotateLeft = (function (fill) {
	return "<svg fill=\"" + fill + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 600 400\">\n\t<g><path d=\"M261.397,17.983c-88.909,0-167.372,51.302-203.909,129.073L32.072,94.282L0,109.73l52.783,109.565l109.565-52.786   l-15.451-32.066L89.82,161.934c30.833-65.308,96.818-108.353,171.577-108.353c104.668,0,189.818,85.154,189.818,189.821   s-85.15,189.824-189.818,189.824c-61.631,0-119.663-30.109-155.228-80.539l-29.096,20.521   c42.241,59.87,111.143,95.613,184.324,95.613c124.286,0,225.407-101.122,225.407-225.419S385.684,17.983,261.397,17.983z\" /></g>\n\t\t</svg>";
});

var rotateRight = (function (fill) {
	return "<svg fill=\"" + fill + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 100 70\">\n\t\t<g><path d=\"M37.242,2.971c14.689,0,27.651,8.476,33.688,21.325l4.201-8.719l5.298,2.552l-8.721,18.102L53.605,27.51l2.553-5.298   l9.43,4.542C60.494,15.964,49.594,8.853,37.242,8.853C19.95,8.853,5.88,22.921,5.88,40.214s14.07,31.362,31.362,31.362   c10.183,0,19.769-4.975,25.647-13.307l4.805,3.391c-6.979,9.892-18.361,15.797-30.452,15.797C16.707,77.458,0,60.75,0,40.214   S16.707,2.971,37.242,2.971z\"/></g>\n\t\t</svg>";
});

var save = (function (fill) {
	return "<svg fill=\"" + fill + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 650 400\">\n\t<g>\n\t\t<path d=\"M473.7,485.75c6.8,0,12.3-5.5,12.3-12.3v-359.8c0-3.6-1.6-7-4.3-9.3L363,2.85c-0.2-0.2-0.4-0.3-0.6-0.4    c-0.3-0.2-0.5-0.4-0.8-0.6c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.6-0.3-0.9-0.4c-0.4-0.2-0.9-0.3-1.3-0.4c-0.3-0.1-0.6-0.2-0.9-0.2    c-0.8-0.1-1.5-0.2-2.3-0.2H12.3C5.5,0.05,0,5.55,0,12.35v461.3c0,6.8,5.5,12.3,12.3,12.3h461.4V485.75z M384.5,461.25h-283v-184.1    c0-3.7,3-6.6,6.6-6.6h269.8c3.7,0,6.6,3,6.6,6.6V461.25z M161.8,24.45h180.9v127.8c0,0.8-0.6,1.4-1.4,1.4h-178    c-0.8,0-1.4-0.7-1.4-1.4V24.45H161.8z M24.6,24.45h112.8v127.8c0,14.3,11.6,25.9,25.9,25.9h178c14.3,0,25.9-11.6,25.9-25.9V38.75    l94.2,80.6v341.9H409v-184.1c0-17.2-14-31.1-31.1-31.1H108.1c-17.2,0-31.1,14-31.1,31.1v184.2H24.6V24.45z\" />\n\t\t<path d=\"M227.4,77.65h53.8v32.6c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-44.8c0-6.8-5.5-12.3-12.3-12.3h-66.1    c-6.8,0-12.3,5.5-12.3,12.3S220.7,77.65,227.4,77.65z\" />\n\t\t<path d=\"M304.5,322.85h-123c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h123c6.8,0,12.3-5.5,12.3-12.3    S311.3,322.85,304.5,322.85z\" />\n\t\t<path d=\"M304.5,387.75h-123c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h123c6.8,0,12.3-5.5,12.3-12.3    S311.3,387.75,304.5,387.75z\" />\n\t</g>\n</svg>";
});

var icons = { arrowLeft: arrowLeft, arrowRight: arrowRight, close: close, zoomIn: zoomIn, zoomOut: zoomOut, rotateLeft: rotateLeft, rotateRight: rotateRight, save: save };

var Icon = function Icon(_ref) {
	var fill = _ref.fill,
	    type = _ref.type,
	    props = objectWithoutProperties(_ref, ['fill', 'type']);

	var icon = icons[type];

	return React__default.createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: icon(fill) }
	}, props));
};

Icon.propTypes = {
	fill: PropTypes.string,
	type: PropTypes.any
};
Icon.defaultProps = {
	fill: 'white'
};

var ActionType = {
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
	save: 11
};

function Arrow(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var direction = _ref.direction,
	    icon = _ref.icon,
	    onClick = _ref.onClick,
	    size = _ref.size,
	    props = objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$1, theme$$1));

	return React__default.createElement(
		'button',
		_extends({
			type: 'button',
			className: noImportant.css(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		React__default.createElement(Icon, { fill: !!theme$$1.arrow && theme$$1.arrow.fill || theme.arrow.fill, type: icon })
	);
}

Arrow.propTypes = {
	direction: PropTypes.oneOf(['left', 'right']),
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
	size: 'medium'
};
Arrow.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$1 = {
	arrow: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area
		position: 'absolute',
		top: '50%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	},

	// sizes
	arrow__size__medium: {
		height: theme.arrow.height,
		marginTop: theme.arrow.height / -2,
		width: 40,

		'@media (min-width: 768px)': {
			width: 70
		}
	},
	arrow__size__small: {
		height: theme.thumbnail.size,
		marginTop: theme.thumbnail.size / -2,
		width: 30,

		'@media (min-width: 500px)': {
			width: 40
		}
	},

	// direction
	arrow__direction__right: {
		right: theme.container.gutter.horizontal
	},
	arrow__direction__left: {
		left: theme.container.gutter.horizontal
	}
};

function Container(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var props = objectWithoutProperties(_ref, []);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$2, theme$$1));

	return React__default.createElement('div', _extends({ id: 'lightboxBackdrop',
		className: noImportant.css(classes.container)
	}, props));
}

Container.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$2 = {
	container: {
		alignItems: 'center',
		backgroundColor: theme.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: theme.container.gutter.vertical,
		paddingLeft: theme.container.gutter.horizontal,
		paddingRight: theme.container.gutter.horizontal,
		paddingTop: theme.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: theme.container.zIndex
	}
};

function ToolbarAction(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var icon = _ref.icon,
	    onClick = _ref.onClick,
	    props = objectWithoutProperties(_ref, ['icon', 'onClick']);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$4, theme$$1));

	return React__default.createElement(
		'button',
		_extends({
			type: 'button',
			className: noImportant.css(classes.actionButton),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		React__default.createElement(Icon, { fill: !!theme$$1.toolbarAction && theme$$1.toolbarAction.fill || theme.toolbarAction.fill, type: icon })
	);
}

ToolbarAction.propTypes = {
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['zoomIn', 'zoomOut', 'rotateLeft', 'rotateRight'])
};
ToolbarAction.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$4 = {
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

var Footer = function (_React$Component) {
	inherits(Footer, _React$Component);

	function Footer(props) {
		classCallCheck(this, Footer);
		return possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	}

	createClass(Footer, [{
		key: 'handleAction',
		value: function handleAction(type) {
			this.props.onAction(type);
		}
	}, {
		key: 'render',
		value: function render$$1() {
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

			var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$3, this.context.theme));

			var imageCount = showCount ? React__default.createElement(
				'div',
				{ className: noImportant.css(classes.footerCount) },
				countCurrent,
				countSeparator,
				countTotal
			) : React__default.createElement('span', null);

			var featureNodeArr = [];

			if (zoomable) {
				featureNodeArr = featureNodeArr.concat([React__default.createElement(
					'li',
					{
						key: 'zoomIn',
						className: noImportant.css(classes.footerActionBtn) },
					React__default.createElement(ToolbarAction, {
						icon: 'zoomIn',
						onClick: function onClick() {
							_this2.handleAction(ActionType.zoomIn);
						}
					})
				), React__default.createElement(
					'li',
					{
						key: 'zoomOut',
						className: noImportant.css(classes.footerActionBtn) },
					React__default.createElement(ToolbarAction, {
						icon: 'zoomOut',
						onClick: function onClick() {
							_this2.handleAction(ActionType.zoomOut);
						}
					})
				)]);
			}

			if (rotatable) {
				featureNodeArr = featureNodeArr.concat([React__default.createElement(
					'li',
					{
						key: 'rotateLeft',
						className: noImportant.css(classes.footerActionBtn) },
					React__default.createElement(ToolbarAction, {
						icon: 'rotateLeft',
						onClick: function onClick() {
							_this2.handleAction(ActionType.rotateLeft);
						}
					})
				), React__default.createElement(
					'li',
					{
						key: 'rotateRight',
						className: noImportant.css(classes.footerActionBtn) },
					React__default.createElement(ToolbarAction, {
						icon: 'rotateRight',
						onClick: function onClick() {
							_this2.handleAction(ActionType.rotateRight);
						}
					})
				)]);
			}

			if (savable) {
				featureNodeArr = featureNodeArr.concat([React__default.createElement(
					'li',
					{
						key: 'save',
						className: noImportant.css(classes.footerActionBtn) },
					React__default.createElement(ToolbarAction, {
						icon: 'save',
						onClick: function onClick() {
							_this2.handleAction(ActionType.save);
						}
					})
				)]);
			}

			return React__default.createElement(
				'div',
				{ className: noImportant.css(classes.footer) },
				React__default.createElement(
					'div',
					{ className: noImportant.css(classes.footerInfos) },
					caption ? React__default.createElement(
						'figcaption',
						{ className: noImportant.css(classes.footerCaption) },
						caption
					) : React__default.createElement('span', { className: noImportant.css(classes.footerCaption) }),
					React__default.createElement(
						'ul',
						{ className: noImportant.css(classes.actions) },
						featureNodeArr
					),
					imageCount
				),
				React__default.createElement('div', { className: noImportant.css(classes.footerActions) })
			);
		}
	}]);
	return Footer;
}(React__default.Component);

Footer.propTypes = {
	caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	countCurrent: PropTypes.number,
	countSeparator: PropTypes.string,
	countTotal: PropTypes.number,
	onAction: PropTypes.func,
	rotatable: PropTypes.bool,
	showCount: PropTypes.bool,
	zoomable: PropTypes.bool
};
Footer.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$3 = {
	footer: {
		position: 'absolute',
		bottom: 35,
		width: '100%',
		height: '60px'
	},
	footerInfos: {
		boxSizing: 'border-box',
		color: theme.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: theme.footer.gutter.vertical,
		paddingLeft: theme.footer.gutter.horizontal,
		paddingRight: theme.footer.gutter.horizontal,
		paddingTop: theme.footer.gutter.vertical,
		zIndex: 1100,
		alignItems: 'center'
	},
	footerCount: {
		color: theme.footer.count.color,
		fontSize: theme.footer.count.fontSize,
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

function Header(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var customControls = _ref.customControls,
	    onClose = _ref.onClose,
	    showCloseButton = _ref.showCloseButton,
	    closeButtonTitle = _ref.closeButtonTitle,
	    props = objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$5, theme$$1));

	return React__default.createElement(
		'div',
		_extends({ className: noImportant.css(classes.header) }, props),
		customControls ? customControls : React__default.createElement('span', null),
		!!showCloseButton && React__default.createElement(
			'button',
			{
				title: closeButtonTitle,
				className: noImportant.css(classes.close),
				onClick: onClose
			},
			React__default.createElement(Icon, { fill: !!theme$$1.close && theme$$1.close.fill || theme.close.fill, type: 'close' })
		)
	);
}

Header.propTypes = {
	customControls: PropTypes.array,
	onClose: PropTypes.func.isRequired,
	showCloseButton: PropTypes.bool
};
Header.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$5 = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		height: theme.header.height
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',
		zIndex: 1,

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40
	}
};

function Thumbnail(_ref, _ref2) {
	var index = _ref.index,
	    src = _ref.src,
	    thumbnail = _ref.thumbnail,
	    active = _ref.active,
	    _onClick = _ref.onClick;
	var theme$$1 = _ref2.theme;

	var url = thumbnail ? thumbnail : src;
	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$6, theme$$1));

	return React__default.createElement('div', {
		className: noImportant.css(classes.thumbnail, active && classes.thumbnail__active),
		onClick: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
			_onClick(index);
		},
		style: { backgroundImage: 'url("' + url + '")' }
	});
}

Thumbnail.propTypes = {
	active: PropTypes.bool,
	index: PropTypes.number,
	onClick: PropTypes.func.isRequired,
	src: PropTypes.string,
	thumbnail: PropTypes.string
};

Thumbnail.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$6 = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: theme.thumbnail.size,
		margin: theme.thumbnail.gutter,
		overflow: 'hidden',
		width: theme.thumbnail.size
	},
	thumbnail__active: {
		boxShadow: 'inset 0 0 0 2px ' + theme.thumbnail.activeBorderColor
	}
};

var classes = noImportant.StyleSheet.create({
	paginatedThumbnails: {
		bottom: theme.container.gutter.vertical,
		height: theme.thumbnail.size,
		padding: '0 50px',
		position: 'absolute',
		textAlign: 'center',
		whiteSpace: 'nowrap',
		left: '50%',
		transform: 'translateX(-50%)'
	}
});

var arrowStyles = {
	height: theme.thumbnail.size + theme.thumbnail.gutter * 2,
	width: 40
};

var PaginatedThumbnails = function (_Component) {
	inherits(PaginatedThumbnails, _Component);

	function PaginatedThumbnails(props) {
		classCallCheck(this, PaginatedThumbnails);

		var _this = possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

		_this.state = {
			hasCustomPage: false
		};

		_this.gotoPrev = _this.gotoPrev.bind(_this);
		_this.gotoNext = _this.gotoNext.bind(_this);
		return _this;
	}

	createClass(PaginatedThumbnails, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Component should be controlled, flush state when currentImage changes
			if (nextProps.currentImage !== this.props.currentImage) {
				this.setState({
					hasCustomPage: false
				});
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'getFirst',
		value: function getFirst() {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    offset = _props.offset;

			if (this.state.hasCustomPage) {
				return this.clampFirst(this.state.first);
			}
			return this.clampFirst(currentImage - offset);
		}
	}, {
		key: 'setFirst',
		value: function setFirst(event, newFirst) {
			var first = this.state.first;


			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			if (first === newFirst) return;

			this.setState({
				hasCustomPage: true,
				first: newFirst
			});
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			this.setFirst(event, this.getFirst() - this.props.offset);
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			this.setFirst(event, this.getFirst() + this.props.offset);
		}
	}, {
		key: 'clampFirst',
		value: function clampFirst(value) {
			var _props2 = this.props,
			    images = _props2.images,
			    offset = _props2.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

			if (value < 0) {
				return 0;
			} else if (value + totalCount > images.length) {
				// Too far
				return images.length - totalCount;
			} else {
				return value;
			}
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.getFirst() <= 0) return null;

			return React__default.createElement(Arrow, {
				direction: 'left',
				size: 'small',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				style: arrowStyles,
				title: 'Previous (Left arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			var _props3 = this.props,
			    offset = _props3.offset,
			    images = _props3.images;

			var totalCount = 2 * offset + 1;
			if (this.getFirst() + totalCount >= images.length) return null;

			return React__default.createElement(Arrow, {
				direction: 'right',
				size: 'small',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				style: arrowStyles,
				title: 'Next (Right arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'render',
		value: function render$$1() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    offset = _props4.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
			var thumbnails = [];
			var baseOffset = 0;
			if (images.length <= totalCount) {
				thumbnails = images;
			} else {
				// Try to center current image in list
				baseOffset = this.getFirst();
				thumbnails = images.slice(baseOffset, baseOffset + totalCount);
			}

			return React__default.createElement(
				'div',
				{ className: noImportant.css(classes.paginatedThumbnails) },
				this.renderArrowPrev(),
				thumbnails.map(function (img, idx) {
					return React__default.createElement(Thumbnail, _extends({ key: baseOffset + idx
					}, img, {
						index: baseOffset + idx,
						onClick: onClickThumbnail,
						active: baseOffset + idx === currentImage }));
				}),
				this.renderArrowNext()
			);
		}
	}]);
	return PaginatedThumbnails;
}(React.Component);

PaginatedThumbnails.propTypes = {
	currentImage: PropTypes.number,
	images: PropTypes.array,
	offset: PropTypes.number,
	onClickThumbnail: PropTypes.func.isRequired
};

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	inherits(PassContext, _Component);

	function PassContext() {
		classCallCheck(this, PassContext);
		return possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
	}

	createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return React.Children.only(this.props.children);
		}
	}]);
	return PassContext;
}(React.Component);

PassContext.propTypes = {
	context: PropTypes.object.isRequired
};
PassContext.childContextTypes = {
	theme: PropTypes.object
};

var Portal = function (_Component) {
	inherits(Portal, _Component);

	function Portal() {
		classCallCheck(this, Portal);

		var _this = possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

		_this.portalElement = null;
		return _this;
	}

	createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';

			reactDom.render(React__default.createElement(
				PassContext,
				{ context: this.context },
				React__default.createElement(
					'div',
					null,
					React__default.createElement(
						'style',
						null,
						styles
					),
					React__default.createElement(reactTransitionGroup.CSSTransitionGroup, _extends({
						component: 'div',
						transitionName: 'fade',
						transitionEnterTimeout: duration,
						transitionLeaveTimeout: duration
					}, this.props))
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			reactDom.unmountComponentAtNode(this.portalElement);
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return null;
		}
	}]);
	return Portal;
}(React.Component);

Portal.contextTypes = {
	theme: PropTypes.object.isRequired
};

var Spinner = function Spinner(props) {
	var classes = noImportant.StyleSheet.create(styles(props));

	return React__default.createElement(
		'div',
		{ className: noImportant.css(classes.spinner) },
		React__default.createElement('div', { className: noImportant.css(classes.ripple) })
	);
};

Spinner.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

var rippleKeyframes = {
	'0%': {
		top: '50%',
		left: '50%',
		width: 0,
		height: 0,
		opacity: 1
	},
	'100%': {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		opacity: 0
	}
};

var styles = function styles(_ref) {
	var color = _ref.color,
	    size = _ref.size;
	return {
		spinner: {
			display: 'inline-block',
			position: 'relative',
			width: size,
			height: size
		},
		ripple: {
			position: 'absolute',
			border: '4px solid ' + color,
			opacity: 1,
			borderRadius: '50%',
			animationName: rippleKeyframes,
			animationDuration: '1s',
			animationTimingFunction: 'cubic-bezier(0, 0.2, 0.8, 1)',
			animationIterationCount: 'infinite'
		}
	};
};

/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
}

// Return true if window + document

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// consumers sometimes provide incorrect type or casing
function normalizeSourceSet(data) {
	var sourceSet = data.srcSet || data.srcset;

	if (Array.isArray(sourceSet)) {
		return sourceSet.join();
	}

	return sourceSet;
}

var Lightbox = function (_Component) {
	inherits(Lightbox, _Component);

	function Lightbox(props) {
		classCallCheck(this, Lightbox);

		var _this = possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

		_this.theme = deepMerge(theme, props.theme);
		_this.classes = aphrodite.StyleSheet.create(deepMerge(defaultStyles, _this.theme));
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

		bindFunctions.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput', 'handleImageLoaded', 'handleAction', 'getImageCenterXY', 'handleZoom', 'handleRotate']);
		return _this;
	}

	createClass(Lightbox, [{
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
			if (!canUseDom) return;

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
				case ActionType.prev:
					if (this.state.activeIndex - 1 >= 0) {
						this.handleChangeImg(this.state.activeIndex - 1);
					}
					break;
				case ActionType.next:
					if (this.state.activeIndex + 1 < this.props.images.length) {
						this.handleChangeImg(this.state.activeIndex + 1);
					}
					break;
				case ActionType.zoomIn:
					var imgCenterXY = this.getImageCenterXY();
					this.handleZoom(imgCenterXY.x, imgCenterXY.y, 1, 0.1);
					this.props.onZoomIn && this.props.onZoomIn();
					break;
				case ActionType.zoomOut:
					var imgCenterXY2 = this.getImageCenterXY();
					this.handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, 0.1);
					this.props.onZoomOut && this.props.onZoomOut();
					break;
				case ActionType.rotateLeft:
					this.handleRotate();
					this.props.onRotateLeft && this.props.onRotateLeft();
					break;
				case ActionType.rotateRight:
					this.handleRotate(true);
					this.props.onRotateRight && this.props.onRotateRight();
					break;
				case ActionType.reset:
					this.loadImg(this.state.activeIndex);
					break;
				case ActionType.scaleX:
					this.handleScaleX(-1);
					break;
				case ActionType.scaleY:
					this.handleScaleY(-1);
					break;
				case ActionType.save:
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
				    _getImgWidthHeight2 = slicedToArray(_getImgWidthHeight, 2),
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
				    _getImgWidthHeight4 = slicedToArray(_getImgWidthHeight3, 2),
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

			return React__default.createElement(Arrow, {
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

			return React__default.createElement(Arrow, {
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


			if (!isOpen) return React__default.createElement('span', { key: 'closed' });

			var offsetThumbnails = 0;
			if (showThumbnails) {
				offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
			}

			return React__default.createElement(
				Container,
				{
					key: 'open',
					onClick: backdropClosesModal && this.closeBackdrop,
					onTouchEnd: backdropClosesModal && this.closeBackdrop
				},
				React__default.createElement(
					'div',
					null,
					React__default.createElement(
						'div',
						{ className: aphrodite.css(this.classes.content), style: { marginBottom: offsetThumbnails, maxWidth: width } },
						imageLoaded && this.renderHeader(),
						this.renderImages(),
						this.renderSpinner(),
						imageLoaded && this.renderFooter()
					),
					imageLoaded && this.renderThumbnails(),
					imageLoaded && this.renderArrowPrev(),
					imageLoaded && this.renderArrowNext(),
					this.props.preventScroll && React__default.createElement(ScrollLock, null)
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

			return React__default.createElement(
				'figure',
				{ className: aphrodite.css(this.classes.figure) },
				React__default.createElement('img', {
					className: aphrodite.css(this.classes.image, imageLoaded && this.classes.imageLoaded),
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

			return React__default.createElement(PaginatedThumbnails, {
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


			return React__default.createElement(Header, {
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

			return React__default.createElement(Footer, {
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

			var Spinner$$1 = spinner;

			return React__default.createElement(
				'div',
				{ className: aphrodite.css(this.classes.spinner, !imageLoaded && this.classes.spinnerActive) },
				React__default.createElement(Spinner$$1, {
					color: spinnerColor,
					size: spinnerSize
				})
			);
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return React__default.createElement(
				Portal,
				null,
				this.renderDialog()
			);
		}
	}]);
	return Lightbox;
}(React.Component);

Lightbox.propTypes = {
	backdropClosesModal: PropTypes.bool,
	closeButtonTitle: PropTypes.string,
	currentImage: PropTypes.number,
	customControls: PropTypes.arrayOf(PropTypes.node),
	enableKeyboardInput: PropTypes.bool,
	imageCountSeparator: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string.isRequired,
		srcSet: PropTypes.array,
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		thumbnail: PropTypes.string
	})).isRequired,
	isOpen: PropTypes.bool,
	leftArrowTitle: PropTypes.string,
	onClickImage: PropTypes.func,
	onClickNext: PropTypes.func,
	onClickPrev: PropTypes.func,
	onClose: PropTypes.func.isRequired,
	onRotateLeft: PropTypes.func,
	onRotateRight: PropTypes.func,
	onZoomIn: PropTypes.func,
	onZoomOut: PropTypes.func,
	preloadNextImage: PropTypes.bool,
	preventScroll: PropTypes.bool,
	rightArrowTitle: PropTypes.string,
	showCloseButton: PropTypes.bool,
	showImageCount: PropTypes.bool,
	showThumbnails: PropTypes.bool,
	spinner: PropTypes.func,
	spinnerColor: PropTypes.string,
	spinnerSize: PropTypes.number,
	theme: PropTypes.object,
	thumbnailOffset: PropTypes.number,
	width: PropTypes.number
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
	spinner: Spinner,
	spinnerColor: 'white',
	spinnerSize: 100,
	theme: {},
	thumbnailOffset: 2,
	width: 1024
};
Lightbox.childContextTypes = {
	theme: PropTypes.object.isRequired
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

return Lightbox;

})));
