exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 9642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ul": () => (/* binding */ _createForOfIteratorHelperLoose),
/* harmony export */   "gY": () => (/* binding */ _extends),
/* harmony export */   "gK": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
/* unused harmony exports arrayLikeToArray, unsupportedIterableToArray */
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.js.map


/***/ }),

/***/ 7587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ Description),
/* harmony export */   "f": () => (/* binding */ useDescriptions)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9642);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8529);
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(852);
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2506);






var DescriptionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useDescriptionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DescriptionContext);

  if (context === null) {
    var err = new Error('You used a <Description /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }

  return context;
}

function useDescriptions() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      descriptionIds = _useState[0],
      setDescriptionIds = _useState[1];

  return [// The actual id's as string or undefined
  descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined, // The provider component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function DescriptionProvider(props) {
      var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        setDescriptionIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setDescriptionIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setDescriptionIds])];
} // ---

var DEFAULT_DESCRIPTION_TAG = 'p';
function Description(props) {
  var context = useDescriptionContext();
  var id = "headlessui-description-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .M)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__/* .useIsoMorphicEffect */ .e)(function () {
    return context.register(id);
  }, [id, context.register]);
  var passThroughProps = props;

  var propsWeControl = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__/* ["extends"] */ .gY)({}, context.props, {
    id: id
  });

  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__/* .render */ .sY)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__/* ["extends"] */ .gY)({}, passThroughProps, propsWeControl),
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || 'Description'
  });
}


//# sourceMappingURL=description.esm.js.map


/***/ }),

/***/ 2659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Keys)
/* harmony export */ });
// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowLeft"] = "ArrowLeft";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowRight"] = "ArrowRight";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));


//# sourceMappingURL=keyboard.esm.js.map


/***/ }),

/***/ 2506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(852);
/* harmony import */ var _use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5989);




// didn't take care of the Suspense case. To fix this we used the approach the @reach-ui/auto-id
// uses.
//
// Credits: https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  var ready = (0,_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__/* .useServerHandoffComplete */ .H)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ready ? generateId : null),
      id = _useState[0],
      setId = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__/* .useIsoMorphicEffect */ .e)(function () {
    if (id === null) setId(generateId());
  }, [id]);
  return id != null ? '' + id : undefined;
}


//# sourceMappingURL=use-id.esm.js.map


/***/ }),

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useIsoMorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useIsoMorphicEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-iso-morphic-effect.esm.js.map


/***/ }),

/***/ 5989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useServerHandoffComplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.serverHandoffComplete),
      serverHandoffComplete = _useState[0],
      setServerHandoffComplete = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (serverHandoffComplete === true) return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (state.serverHandoffComplete === false) state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}


//# sourceMappingURL=use-server-handoff-complete.esm.js.map


/***/ }),

/***/ 7471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useSyncRefs)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9642);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    cache.current = refs;
  }, [refs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* .createForOfIteratorHelperLoose */ .Ul)(cache.current), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      if (ref == null) continue;
      if (typeof ref === 'function') ref(value);else ref.current = value;
    }
  }, [cache]);
}


//# sourceMappingURL=use-sync-refs.esm.js.map


/***/ }),

/***/ 9016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ isDisabledReactIssue7711)
/* harmony export */ });
// See: https://github.com/facebook/react/issues/7711
// See: https://github.com/facebook/react/pull/20612
// See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled (2.)
function isDisabledReactIssue7711(element) {
  var _ref, _parent;

  var parent = element.parentElement;
  var legend = null;

  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement) legend = parent;
    parent = parent.parentElement;
  }

  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute('disabled')) === '') != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend)) return false;
  return isParentDisabled;
}

function isFirstLegend(element) {
  if (!element) return false;
  var previous = element.previousElementSibling;

  while (previous !== null) {
    if (previous instanceof HTMLLegendElement) return false;
    previous = previous.previousElementSibling;
  }

  return true;
}


//# sourceMappingURL=bugs.esm.js.map


/***/ }),

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ match)
/* harmony export */ });
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}


//# sourceMappingURL=match.esm.js.map


/***/ }),

/***/ 8529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AN": () => (/* binding */ Features),
/* harmony export */   "l4": () => (/* binding */ RenderStrategy),
/* harmony export */   "yV": () => (/* binding */ forwardRefWithAs),
/* harmony export */   "sY": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9642);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(133);




var Features;

(function (Features) {
  /** No features at all */
  Features[Features["None"] = 0] = "None";
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */

  Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */

  Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));

var RenderStrategy;

(function (RenderStrategy) {
  RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
  RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));

function render(_ref) {
  var props = _ref.props,
      slot = _ref.slot,
      defaultTag = _ref.defaultTag,
      features = _ref.features,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      name = _ref.name;
  // Visible always render
  if (visible) return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;

  if (featureFlags & Features.Static) {
    var _props$static = props["static"],
        isStatic = _props$static === void 0 ? false : _props$static,
        rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* .objectWithoutPropertiesLoose */ .gK)(props, ["static"]); // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else


    if (isStatic) return _render(rest, slot, defaultTag, name);
  }

  if (featureFlags & Features.RenderStrategy) {
    var _match;

    var _props$unmount = props.unmount,
        unmount = _props$unmount === void 0 ? true : _props$unmount,
        _rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* .objectWithoutPropertiesLoose */ .gK)(props, ["unmount"]);

    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_2__/* .match */ .E)(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      return null;
    }, _match[RenderStrategy.Hidden] = function () {
      return _render((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* ["extends"] */ .gY)({}, _rest, {
        hidden: true,
        style: {
          display: 'none'
        }
      }), slot, defaultTag, name);
    }, _match));
  } // No features enabled, just render


  return _render(props, slot, defaultTag, name);
}

function _render(props, slot, tag, name) {
  var _ref2;

  if (slot === void 0) {
    slot = {};
  }

  var _omit = omit(props, ['unmount', 'static']),
      _omit$as = _omit.as,
      Component = _omit$as === void 0 ? tag : _omit$as,
      children = _omit.children,
      _omit$refName = _omit.refName,
      refName = _omit$refName === void 0 ? 'ref' : _omit$refName,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* .objectWithoutPropertiesLoose */ .gK)(_omit, ["as", "children", "refName"]); // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`


  var refRelatedProps = props.ref !== undefined ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === 'function' ? children(slot) : children; // Allow for className to be a function with the slot as the contents

  if (passThroughProps.className && typeof passThroughProps.className === 'function') {
    passThroughProps.className = passThroughProps.className(slot);
  }

  if (Component === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', '', "The current component <" + name + " /> is rendering a \"Fragment\".", "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function (line) {
          return "  - " + line;
        }).join('\n'), '', 'You can apply a few solutions:', ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', 'Render a single element as the child so that we can forward the props onto that element.'].map(function (line) {
          return "  - " + line;
        }).join('\n')].join('\n'));
      }

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(resolvedChildren, Object.assign({}, // Filter out undefined values so that they don't override the existing values
      mergeEventFunctions(compact(omit(passThroughProps, ['ref'])), resolvedChildren.props, ['onClick']), refRelatedProps));
    }
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, Object.assign({}, omit(passThroughProps, ['ref']), Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment && refRelatedProps), resolvedChildren);
}
/**
 * We can use this function for the following useCase:
 *
 * <Menu.Item> <button onClick={console.log} /> </Menu.Item>
 *
 * Our `Menu.Item` will have an internal `onClick`, if you passthrough an `onClick` to the actual
 * `Menu.Item` component we will call it correctly. However, when we have an `onClick` on the actual
 * first child, that one should _also_ be called (but before this implementation, it was just
 * overriding the `onClick`). But it is only when we *render* that we have access to the existing
 * props of this component.
 *
 * It's a bit hacky, and not that clean, but it is something internal and we have tests to rely on
 * so that we can refactor this later (if needed).
 */


function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);

  var _loop = function _loop() {
    var func = _step.value;

    if (passThroughProps[func] !== undefined && existingProps[func] !== undefined) {
      var _Object$assign;

      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function (event) {
        // Props we control
        if (!event.defaultPrevented) passThroughProps[func](event); // Existing props on the component

        if (!event.defaultPrevented) existingProps[func](event);
      }, _Object$assign));
    }
  };

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* .createForOfIteratorHelperLoose */ .Ul)(functionsToMerge), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return clone;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */


function forwardRefWithAs(component) {
  var _component$displayNam;

  return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}

function compact(object) {
  var clone = Object.assign({}, object);

  for (var key in clone) {
    if (clone[key] === undefined) delete clone[key];
  }

  return clone;
}

function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }

  var clone = Object.assign({}, object);

  for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__/* .createForOfIteratorHelperLoose */ .Ul)(keysToOmit), _step2; !(_step2 = _iterator2()).done;) {
    var key = _step2.value;
    if (key in clone) delete clone[key];
  }

  return clone;
}


//# sourceMappingURL=render.esm.js.map


/***/ }),

/***/ 6049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rDX": () => (/* reexport */ esm_AnnotationIcon),
  "KNL": () => (/* reexport */ esm_BookOpenIcon),
  "IEm": () => (/* reexport */ esm_CogIcon),
  "OgN": () => (/* reexport */ esm_GiftIcon),
  "tvw": () => (/* reexport */ esm_HomeIcon),
  "RSW": () => (/* reexport */ esm_MailOpenIcon),
  "fVG": () => (/* reexport */ esm_MenuAlt2Icon),
  "aAc": () => (/* reexport */ esm_ShareIcon),
  "b0D": () => (/* reexport */ esm_XIcon)
});

// UNUSED EXPORTS: AcademicCapIcon, AdjustmentsIcon, ArchiveIcon, ArrowCircleDownIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowCircleUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ArrowNarrowUpIcon, ArrowRightIcon, ArrowSmDownIcon, ArrowSmLeftIcon, ArrowSmRightIcon, ArrowSmUpIcon, ArrowUpIcon, ArrowsExpandIcon, AtSymbolIcon, BackspaceIcon, BadgeCheckIcon, BanIcon, BeakerIcon, BellIcon, BookmarkAltIcon, BookmarkIcon, BriefcaseIcon, CakeIcon, CalculatorIcon, CalendarIcon, CameraIcon, CashIcon, ChartBarIcon, ChartPieIcon, ChartSquareBarIcon, ChatAlt2Icon, ChatAltIcon, ChatIcon, CheckCircleIcon, CheckIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChipIcon, ClipboardCheckIcon, ClipboardCopyIcon, ClipboardIcon, ClipboardListIcon, ClockIcon, CloudDownloadIcon, CloudIcon, CloudUploadIcon, CodeIcon, CollectionIcon, ColorSwatchIcon, CreditCardIcon, CubeIcon, CubeTransparentIcon, CurrencyBangladeshiIcon, CurrencyDollarIcon, CurrencyEuroIcon, CurrencyPoundIcon, CurrencyRupeeIcon, CurrencyYenIcon, CursorClickIcon, DatabaseIcon, DesktopComputerIcon, DeviceMobileIcon, DeviceTabletIcon, DocumentAddIcon, DocumentDownloadIcon, DocumentDuplicateIcon, DocumentIcon, DocumentRemoveIcon, DocumentReportIcon, DocumentSearchIcon, DocumentTextIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, DotsVerticalIcon, DownloadIcon, DuplicateIcon, EmojiHappyIcon, EmojiSadIcon, ExclamationCircleIcon, ExclamationIcon, ExternalLinkIcon, EyeIcon, EyeOffIcon, FastForwardIcon, FilmIcon, FilterIcon, FingerPrintIcon, FireIcon, FlagIcon, FolderAddIcon, FolderDownloadIcon, FolderIcon, FolderOpenIcon, FolderRemoveIcon, GlobeAltIcon, GlobeIcon, HandIcon, HashtagIcon, HeartIcon, IdentificationIcon, InboxIcon, InboxInIcon, InformationCircleIcon, KeyIcon, LibraryIcon, LightBulbIcon, LightningBoltIcon, LinkIcon, LocationMarkerIcon, LockClosedIcon, LockOpenIcon, LoginIcon, LogoutIcon, MailIcon, MapIcon, MenuAlt1Icon, MenuAlt3Icon, MenuAlt4Icon, MenuIcon, MicrophoneIcon, MinusCircleIcon, MinusIcon, MinusSmIcon, MoonIcon, MusicNoteIcon, NewspaperIcon, OfficeBuildingIcon, PaperAirplaneIcon, PaperClipIcon, PauseIcon, PencilAltIcon, PencilIcon, PhoneIcon, PhoneIncomingIcon, PhoneMissedCallIcon, PhoneOutgoingIcon, PhotographIcon, PlayIcon, PlusCircleIcon, PlusIcon, PlusSmIcon, PresentationChartBarIcon, PresentationChartLineIcon, PrinterIcon, PuzzleIcon, QrcodeIcon, QuestionMarkCircleIcon, ReceiptRefundIcon, ReceiptTaxIcon, RefreshIcon, ReplyIcon, RewindIcon, RssIcon, SaveAsIcon, SaveIcon, ScaleIcon, ScissorsIcon, SearchCircleIcon, SearchIcon, SelectorIcon, ServerIcon, ShieldCheckIcon, ShieldExclamationIcon, ShoppingBagIcon, ShoppingCartIcon, SortAscendingIcon, SortDescendingIcon, SparklesIcon, SpeakerphoneIcon, StarIcon, StatusOfflineIcon, StatusOnlineIcon, StopIcon, SunIcon, SupportIcon, SwitchHorizontalIcon, SwitchVerticalIcon, TableIcon, TagIcon, TemplateIcon, TerminalIcon, ThumbDownIcon, ThumbUpIcon, TicketIcon, TranslateIcon, TrashIcon, TrendingDownIcon, TrendingUpIcon, TruckIcon, UploadIcon, UserAddIcon, UserCircleIcon, UserGroupIcon, UserIcon, UserRemoveIcon, UsersIcon, VariableIcon, VideoCameraIcon, ViewBoardsIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon, VolumeOffIcon, VolumeUpIcon, WifiIcon, XCircleIcon, ZoomInIcon, ZoomOutIcon

// EXTERNAL MODULE: external "/Users/owner/paul-salele/frontend/node_modules/react/index.js"
var index_js_ = __webpack_require__(6283);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js


function AcademicCapIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 14l9-5-9-5-9 5 9 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
  }));
}

/* harmony default export */ const esm_AcademicCapIcon = ((/* unused pure expression or super */ null && (AcademicCapIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js


function AdjustmentsIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  }));
}

/* harmony default export */ const esm_AdjustmentsIcon = ((/* unused pure expression or super */ null && (AdjustmentsIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/AnnotationIcon.js


function AnnotationIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  }));
}

/* harmony default export */ const esm_AnnotationIcon = (AnnotationIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArchiveIcon.js


function ArchiveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
  }));
}

/* harmony default export */ const esm_ArchiveIcon = ((/* unused pure expression or super */ null && (ArchiveIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
  }));
}

/* harmony default export */ const esm_ArrowCircleDownIcon = ((/* unused pure expression or super */ null && (ArrowCircleDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
  }));
}

/* harmony default export */ const esm_ArrowCircleLeftIcon = ((/* unused pure expression or super */ null && (ArrowCircleLeftIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_ArrowCircleRightIcon = ((/* unused pure expression or super */ null && (ArrowCircleRightIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
  }));
}

/* harmony default export */ const esm_ArrowCircleUpIcon = ((/* unused pure expression or super */ null && (ArrowCircleUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js


function ArrowDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
  }));
}

/* harmony default export */ const esm_ArrowDownIcon = ((/* unused pure expression or super */ null && (ArrowDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js


function ArrowLeftIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  }));
}

/* harmony default export */ const esm_ArrowLeftIcon = ((/* unused pure expression or super */ null && (ArrowLeftIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 17l-4 4m0 0l-4-4m4 4V3"
  }));
}

/* harmony default export */ const esm_ArrowNarrowDownIcon = ((/* unused pure expression or super */ null && (ArrowNarrowDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  }));
}

/* harmony default export */ const esm_ArrowNarrowLeftIcon = ((/* unused pure expression or super */ null && (ArrowNarrowLeftIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  }));
}

/* harmony default export */ const esm_ArrowNarrowRightIcon = ((/* unused pure expression or super */ null && (ArrowNarrowRightIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7l4-4m0 0l4 4m-4-4v18"
  }));
}

/* harmony default export */ const esm_ArrowNarrowUpIcon = ((/* unused pure expression or super */ null && (ArrowNarrowUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js


function ArrowRightIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 5l7 7m0 0l-7 7m7-7H3"
  }));
}

/* harmony default export */ const esm_ArrowRightIcon = ((/* unused pure expression or super */ null && (ArrowRightIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 13l-5 5m0 0l-5-5m5 5V6"
  }));
}

/* harmony default export */ const esm_ArrowSmDownIcon = ((/* unused pure expression or super */ null && (ArrowSmDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 17l-5-5m0 0l5-5m-5 5h12"
  }));
}

/* harmony default export */ const esm_ArrowSmLeftIcon = ((/* unused pure expression or super */ null && (ArrowSmLeftIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7l5 5m0 0l-5 5m5-5H6"
  }));
}

/* harmony default export */ const esm_ArrowSmRightIcon = ((/* unused pure expression or super */ null && (ArrowSmRightIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 11l5-5m0 0l5 5m-5-5v12"
  }));
}

/* harmony default export */ const esm_ArrowSmUpIcon = ((/* unused pure expression or super */ null && (ArrowSmUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js


function ArrowUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 10l7-7m0 0l7 7m-7-7v18"
  }));
}

/* harmony default export */ const esm_ArrowUpIcon = ((/* unused pure expression or super */ null && (ArrowUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
  }));
}

/* harmony default export */ const esm_ArrowsExpandIcon = ((/* unused pure expression or super */ null && (ArrowsExpandIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js


function AtSymbolIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
  }));
}

/* harmony default export */ const esm_AtSymbolIcon = ((/* unused pure expression or super */ null && (AtSymbolIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BackspaceIcon.js


function BackspaceIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
  }));
}

/* harmony default export */ const esm_BackspaceIcon = ((/* unused pure expression or super */ null && (BackspaceIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js


function BadgeCheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  }));
}

/* harmony default export */ const esm_BadgeCheckIcon = ((/* unused pure expression or super */ null && (BadgeCheckIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BanIcon.js


function BanIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
  }));
}

/* harmony default export */ const esm_BanIcon = ((/* unused pure expression or super */ null && (BanIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BeakerIcon.js


function BeakerIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  }));
}

/* harmony default export */ const esm_BeakerIcon = ((/* unused pure expression or super */ null && (BeakerIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BellIcon.js


function BellIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  }));
}

/* harmony default export */ const esm_BellIcon = ((/* unused pure expression or super */ null && (BellIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BookOpenIcon.js


function BookOpenIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }));
}

/* harmony default export */ const esm_BookOpenIcon = (BookOpenIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js


function BookmarkAltIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_BookmarkAltIcon = ((/* unused pure expression or super */ null && (BookmarkAltIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BookmarkIcon.js


function BookmarkIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
  }));
}

/* harmony default export */ const esm_BookmarkIcon = ((/* unused pure expression or super */ null && (BookmarkIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js


function BriefcaseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_BriefcaseIcon = ((/* unused pure expression or super */ null && (BriefcaseIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CakeIcon.js


function CakeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
  }));
}

/* harmony default export */ const esm_CakeIcon = ((/* unused pure expression or super */ null && (CakeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CalculatorIcon.js


function CalculatorIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_CalculatorIcon = ((/* unused pure expression or super */ null && (CalculatorIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CalendarIcon.js


function CalendarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_CalendarIcon = ((/* unused pure expression or super */ null && (CalendarIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CameraIcon.js


function CameraIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ const esm_CameraIcon = ((/* unused pure expression or super */ null && (CameraIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CashIcon.js


function CashIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
  }));
}

/* harmony default export */ const esm_CashIcon = ((/* unused pure expression or super */ null && (CashIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChartBarIcon.js


function ChartBarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ const esm_ChartBarIcon = ((/* unused pure expression or super */ null && (ChartBarIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChartPieIcon.js


function ChartPieIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
  }));
}

/* harmony default export */ const esm_ChartPieIcon = ((/* unused pure expression or super */ null && (ChartPieIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_ChartSquareBarIcon = ((/* unused pure expression or super */ null && (ChartSquareBarIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js


function ChatAlt2Icon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
  }));
}

/* harmony default export */ const esm_ChatAlt2Icon = ((/* unused pure expression or super */ null && (ChatAlt2Icon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChatAltIcon.js


function ChatAltIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  }));
}

/* harmony default export */ const esm_ChatAltIcon = ((/* unused pure expression or super */ null && (ChatAltIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChatIcon.js


function ChatIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  }));
}

/* harmony default export */ const esm_ChatIcon = ((/* unused pure expression or super */ null && (ChatIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js


function CheckCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CheckCircleIcon = ((/* unused pure expression or super */ null && (CheckCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CheckIcon.js


function CheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }));
}

/* harmony default export */ const esm_CheckIcon = ((/* unused pure expression or super */ null && (CheckIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
  }));
}

/* harmony default export */ const esm_ChevronDoubleDownIcon = ((/* unused pure expression or super */ null && (ChevronDoubleDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
  }));
}

/* harmony default export */ const esm_ChevronDoubleLeftIcon = ((/* unused pure expression or super */ null && (ChevronDoubleLeftIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  }));
}

/* harmony default export */ const esm_ChevronDoubleRightIcon = ((/* unused pure expression or super */ null && (ChevronDoubleRightIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 11l7-7 7 7M5 19l7-7 7 7"
  }));
}

/* harmony default export */ const esm_ChevronDoubleUpIcon = ((/* unused pure expression or super */ null && (ChevronDoubleUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js


function ChevronDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  }));
}

/* harmony default export */ const esm_ChevronDownIcon = ((/* unused pure expression or super */ null && (ChevronDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js


function ChevronLeftIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  }));
}

/* harmony default export */ const esm_ChevronLeftIcon = ((/* unused pure expression or super */ null && (ChevronLeftIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js


function ChevronRightIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  }));
}

/* harmony default export */ const esm_ChevronRightIcon = ((/* unused pure expression or super */ null && (ChevronRightIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js


function ChevronUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 15l7-7 7 7"
  }));
}

/* harmony default export */ const esm_ChevronUpIcon = ((/* unused pure expression or super */ null && (ChevronUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ChipIcon.js


function ChipIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  }));
}

/* harmony default export */ const esm_ChipIcon = ((/* unused pure expression or super */ null && (ChipIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  }));
}

/* harmony default export */ const esm_ClipboardCheckIcon = ((/* unused pure expression or super */ null && (ClipboardCheckIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
  }));
}

/* harmony default export */ const esm_ClipboardCopyIcon = ((/* unused pure expression or super */ null && (ClipboardCopyIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js


function ClipboardListIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  }));
}

/* harmony default export */ const esm_ClipboardListIcon = ((/* unused pure expression or super */ null && (ClipboardListIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ClipboardIcon.js


function ClipboardIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  }));
}

/* harmony default export */ const esm_ClipboardIcon = ((/* unused pure expression or super */ null && (ClipboardIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ClockIcon.js


function ClockIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_ClockIcon = ((/* unused pure expression or super */ null && (ClockIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js


function CloudDownloadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
  }));
}

/* harmony default export */ const esm_CloudDownloadIcon = ((/* unused pure expression or super */ null && (CloudDownloadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js


function CloudUploadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  }));
}

/* harmony default export */ const esm_CloudUploadIcon = ((/* unused pure expression or super */ null && (CloudUploadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CloudIcon.js


function CloudIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  }));
}

/* harmony default export */ const esm_CloudIcon = ((/* unused pure expression or super */ null && (CloudIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CodeIcon.js


function CodeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }));
}

/* harmony default export */ const esm_CodeIcon = ((/* unused pure expression or super */ null && (CodeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CogIcon.js


function CogIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ const esm_CogIcon = (CogIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CollectionIcon.js


function CollectionIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  }));
}

/* harmony default export */ const esm_CollectionIcon = ((/* unused pure expression or super */ null && (CollectionIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js


function ColorSwatchIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  }));
}

/* harmony default export */ const esm_ColorSwatchIcon = ((/* unused pure expression or super */ null && (ColorSwatchIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CreditCardIcon.js


function CreditCardIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  }));
}

/* harmony default export */ const esm_CreditCardIcon = ((/* unused pure expression or super */ null && (CreditCardIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js


function CubeTransparentIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
  }));
}

/* harmony default export */ const esm_CubeTransparentIcon = ((/* unused pure expression or super */ null && (CubeTransparentIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CubeIcon.js


function CubeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  }));
}

/* harmony default export */ const esm_CubeIcon = ((/* unused pure expression or super */ null && (CubeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CurrencyBangladeshiIcon = ((/* unused pure expression or super */ null && (CurrencyBangladeshiIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CurrencyDollarIcon = ((/* unused pure expression or super */ null && (CurrencyDollarIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CurrencyEuroIcon = ((/* unused pure expression or super */ null && (CurrencyEuroIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CurrencyPoundIcon = ((/* unused pure expression or super */ null && (CurrencyPoundIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CurrencyRupeeIcon = ((/* unused pure expression or super */ null && (CurrencyRupeeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js


function CurrencyYenIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_CurrencyYenIcon = ((/* unused pure expression or super */ null && (CurrencyYenIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/CursorClickIcon.js


function CursorClickIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
  }));
}

/* harmony default export */ const esm_CursorClickIcon = ((/* unused pure expression or super */ null && (CursorClickIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DatabaseIcon.js


function DatabaseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  }));
}

/* harmony default export */ const esm_DatabaseIcon = ((/* unused pure expression or super */ null && (DatabaseIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js


function DesktopComputerIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_DesktopComputerIcon = ((/* unused pure expression or super */ null && (DesktopComputerIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js


function DeviceMobileIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_DeviceMobileIcon = ((/* unused pure expression or super */ null && (DeviceMobileIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js


function DeviceTabletIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_DeviceTabletIcon = ((/* unused pure expression or super */ null && (DeviceTabletIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js


function DocumentAddIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ const esm_DocumentAddIcon = ((/* unused pure expression or super */ null && (DocumentAddIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ const esm_DocumentDownloadIcon = ((/* unused pure expression or super */ null && (DocumentDownloadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
  }));
}

/* harmony default export */ const esm_DocumentDuplicateIcon = ((/* unused pure expression or super */ null && (DocumentDuplicateIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ const esm_DocumentRemoveIcon = ((/* unused pure expression or super */ null && (DocumentRemoveIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js


function DocumentReportIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ const esm_DocumentReportIcon = ((/* unused pure expression or super */ null && (DocumentReportIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js


function DocumentSearchIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
  }));
}

/* harmony default export */ const esm_DocumentSearchIcon = ((/* unused pure expression or super */ null && (DocumentSearchIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js


function DocumentTextIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ const esm_DocumentTextIcon = ((/* unused pure expression or super */ null && (DocumentTextIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DocumentIcon.js


function DocumentIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_DocumentIcon = ((/* unused pure expression or super */ null && (DocumentIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_DotsCircleHorizontalIcon = ((/* unused pure expression or super */ null && (DotsCircleHorizontalIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
  }));
}

/* harmony default export */ const esm_DotsHorizontalIcon = ((/* unused pure expression or super */ null && (DotsHorizontalIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js


function DotsVerticalIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
  }));
}

/* harmony default export */ const esm_DotsVerticalIcon = ((/* unused pure expression or super */ null && (DotsVerticalIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DownloadIcon.js


function DownloadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
  }));
}

/* harmony default export */ const esm_DownloadIcon = ((/* unused pure expression or super */ null && (DownloadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/DuplicateIcon.js


function DuplicateIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_DuplicateIcon = ((/* unused pure expression or super */ null && (DuplicateIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js


function EmojiHappyIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_EmojiHappyIcon = ((/* unused pure expression or super */ null && (EmojiHappyIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js


function EmojiSadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_EmojiSadIcon = ((/* unused pure expression or super */ null && (EmojiSadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_ExclamationCircleIcon = ((/* unused pure expression or super */ null && (ExclamationCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ExclamationIcon.js


function ExclamationIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }));
}

/* harmony default export */ const esm_ExclamationIcon = ((/* unused pure expression or super */ null && (ExclamationIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js


function ExternalLinkIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
  }));
}

/* harmony default export */ const esm_ExternalLinkIcon = ((/* unused pure expression or super */ null && (ExternalLinkIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js


function EyeOffIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
  }));
}

/* harmony default export */ const esm_EyeOffIcon = ((/* unused pure expression or super */ null && (EyeOffIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/EyeIcon.js


function EyeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  }));
}

/* harmony default export */ const esm_EyeIcon = ((/* unused pure expression or super */ null && (EyeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FastForwardIcon.js


function FastForwardIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
  }));
}

/* harmony default export */ const esm_FastForwardIcon = ((/* unused pure expression or super */ null && (FastForwardIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FilmIcon.js


function FilmIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
  }));
}

/* harmony default export */ const esm_FilmIcon = ((/* unused pure expression or super */ null && (FilmIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FilterIcon.js


function FilterIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
  }));
}

/* harmony default export */ const esm_FilterIcon = ((/* unused pure expression or super */ null && (FilterIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js


function FingerPrintIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
  }));
}

/* harmony default export */ const esm_FingerPrintIcon = ((/* unused pure expression or super */ null && (FingerPrintIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FireIcon.js


function FireIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
  }));
}

/* harmony default export */ const esm_FireIcon = ((/* unused pure expression or super */ null && (FireIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FlagIcon.js


function FlagIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
  }));
}

/* harmony default export */ const esm_FlagIcon = ((/* unused pure expression or super */ null && (FlagIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FolderAddIcon.js


function FolderAddIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ const esm_FolderAddIcon = ((/* unused pure expression or super */ null && (FolderAddIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js


function FolderDownloadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ const esm_FolderDownloadIcon = ((/* unused pure expression or super */ null && (FolderDownloadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js


function FolderOpenIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
  }));
}

/* harmony default export */ const esm_FolderOpenIcon = ((/* unused pure expression or super */ null && (FolderOpenIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js


function FolderRemoveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }));
}

/* harmony default export */ const esm_FolderRemoveIcon = ((/* unused pure expression or super */ null && (FolderRemoveIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/FolderIcon.js


function FolderIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  }));
}

/* harmony default export */ const esm_FolderIcon = ((/* unused pure expression or super */ null && (FolderIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/GiftIcon.js


function GiftIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
  }));
}

/* harmony default export */ const esm_GiftIcon = (GiftIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js


function GlobeAltIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  }));
}

/* harmony default export */ const esm_GlobeAltIcon = ((/* unused pure expression or super */ null && (GlobeAltIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/GlobeIcon.js


function GlobeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_GlobeIcon = ((/* unused pure expression or super */ null && (GlobeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/HandIcon.js


function HandIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
  }));
}

/* harmony default export */ const esm_HandIcon = ((/* unused pure expression or super */ null && (HandIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/HashtagIcon.js


function HashtagIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
  }));
}

/* harmony default export */ const esm_HashtagIcon = ((/* unused pure expression or super */ null && (HashtagIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/HeartIcon.js


function HeartIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  }));
}

/* harmony default export */ const esm_HeartIcon = ((/* unused pure expression or super */ null && (HeartIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/HomeIcon.js


function HomeIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }));
}

/* harmony default export */ const esm_HomeIcon = (HomeIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/IdentificationIcon.js


function IdentificationIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
  }));
}

/* harmony default export */ const esm_IdentificationIcon = ((/* unused pure expression or super */ null && (IdentificationIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/InboxInIcon.js


function InboxInIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
  }));
}

/* harmony default export */ const esm_InboxInIcon = ((/* unused pure expression or super */ null && (InboxInIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/InboxIcon.js


function InboxIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
  }));
}

/* harmony default export */ const esm_InboxIcon = ((/* unused pure expression or super */ null && (InboxIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js


function InformationCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_InformationCircleIcon = ((/* unused pure expression or super */ null && (InformationCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/KeyIcon.js


function KeyIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
  }));
}

/* harmony default export */ const esm_KeyIcon = ((/* unused pure expression or super */ null && (KeyIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LibraryIcon.js


function LibraryIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
  }));
}

/* harmony default export */ const esm_LibraryIcon = ((/* unused pure expression or super */ null && (LibraryIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LightBulbIcon.js


function LightBulbIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }));
}

/* harmony default export */ const esm_LightBulbIcon = ((/* unused pure expression or super */ null && (LightBulbIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js


function LightningBoltIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 10V3L4 14h7v7l9-11h-7z"
  }));
}

/* harmony default export */ const esm_LightningBoltIcon = ((/* unused pure expression or super */ null && (LightningBoltIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LinkIcon.js


function LinkIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  }));
}

/* harmony default export */ const esm_LinkIcon = ((/* unused pure expression or super */ null && (LinkIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js


function LocationMarkerIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

/* harmony default export */ const esm_LocationMarkerIcon = ((/* unused pure expression or super */ null && (LocationMarkerIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LockClosedIcon.js


function LockClosedIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  }));
}

/* harmony default export */ const esm_LockClosedIcon = ((/* unused pure expression or super */ null && (LockClosedIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LockOpenIcon.js


function LockOpenIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_LockOpenIcon = ((/* unused pure expression or super */ null && (LockOpenIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LoginIcon.js


function LoginIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
  }));
}

/* harmony default export */ const esm_LoginIcon = ((/* unused pure expression or super */ null && (LoginIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/LogoutIcon.js


function LogoutIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }));
}

/* harmony default export */ const esm_LogoutIcon = ((/* unused pure expression or super */ null && (LogoutIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MailOpenIcon.js


function MailOpenIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
  }));
}

/* harmony default export */ const esm_MailOpenIcon = (MailOpenIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MailIcon.js


function MailIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_MailIcon = ((/* unused pure expression or super */ null && (MailIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MapIcon.js


function MapIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
  }));
}

/* harmony default export */ const esm_MapIcon = ((/* unused pure expression or super */ null && (MapIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js


function MenuAlt1Icon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h8m-8 6h16"
  }));
}

/* harmony default export */ const esm_MenuAlt1Icon = ((/* unused pure expression or super */ null && (MenuAlt1Icon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js


function MenuAlt2Icon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h7"
  }));
}

/* harmony default export */ const esm_MenuAlt2Icon = (MenuAlt2Icon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js


function MenuAlt3Icon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16m-7 6h7"
  }));
}

/* harmony default export */ const esm_MenuAlt3Icon = ((/* unused pure expression or super */ null && (MenuAlt3Icon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js


function MenuAlt4Icon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 8h16M4 16h16"
  }));
}

/* harmony default export */ const esm_MenuAlt4Icon = ((/* unused pure expression or super */ null && (MenuAlt4Icon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MenuIcon.js


function MenuIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}

/* harmony default export */ const esm_MenuIcon = ((/* unused pure expression or super */ null && (MenuIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js


function MicrophoneIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
  }));
}

/* harmony default export */ const esm_MicrophoneIcon = ((/* unused pure expression or super */ null && (MicrophoneIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js


function MinusCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_MinusCircleIcon = ((/* unused pure expression or super */ null && (MinusCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MinusSmIcon.js


function MinusSmIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18 12H6"
  }));
}

/* harmony default export */ const esm_MinusSmIcon = ((/* unused pure expression or super */ null && (MinusSmIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MinusIcon.js


function MinusIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  }));
}

/* harmony default export */ const esm_MinusIcon = ((/* unused pure expression or super */ null && (MinusIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MoonIcon.js


function MoonIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  }));
}

/* harmony default export */ const esm_MoonIcon = ((/* unused pure expression or super */ null && (MoonIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js


function MusicNoteIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
  }));
}

/* harmony default export */ const esm_MusicNoteIcon = ((/* unused pure expression or super */ null && (MusicNoteIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/NewspaperIcon.js


function NewspaperIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
  }));
}

/* harmony default export */ const esm_NewspaperIcon = ((/* unused pure expression or super */ null && (NewspaperIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  }));
}

/* harmony default export */ const esm_OfficeBuildingIcon = ((/* unused pure expression or super */ null && (OfficeBuildingIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  }));
}

/* harmony default export */ const esm_PaperAirplaneIcon = ((/* unused pure expression or super */ null && (PaperAirplaneIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PaperClipIcon.js


function PaperClipIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
  }));
}

/* harmony default export */ const esm_PaperClipIcon = ((/* unused pure expression or super */ null && (PaperClipIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PauseIcon.js


function PauseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_PauseIcon = ((/* unused pure expression or super */ null && (PauseIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js


function PencilAltIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  }));
}

/* harmony default export */ const esm_PencilAltIcon = ((/* unused pure expression or super */ null && (PencilAltIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PencilIcon.js


function PencilIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  }));
}

/* harmony default export */ const esm_PencilIcon = ((/* unused pure expression or super */ null && (PencilIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
  }));
}

/* harmony default export */ const esm_PhoneIncomingIcon = ((/* unused pure expression or super */ null && (PhoneIncomingIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
  }));
}

/* harmony default export */ const esm_PhoneMissedCallIcon = ((/* unused pure expression or super */ null && (PhoneMissedCallIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
  }));
}

/* harmony default export */ const esm_PhoneOutgoingIcon = ((/* unused pure expression or super */ null && (PhoneOutgoingIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PhoneIcon.js


function PhoneIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  }));
}

/* harmony default export */ const esm_PhoneIcon = ((/* unused pure expression or super */ null && (PhoneIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PhotographIcon.js


function PhotographIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_PhotographIcon = ((/* unused pure expression or super */ null && (PhotographIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PlayIcon.js


function PlayIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_PlayIcon = ((/* unused pure expression or super */ null && (PlayIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js


function PlusCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_PlusCircleIcon = ((/* unused pure expression or super */ null && (PlusCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PlusSmIcon.js


function PlusSmIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  }));
}

/* harmony default export */ const esm_PlusSmIcon = ((/* unused pure expression or super */ null && (PlusSmIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PlusIcon.js


function PlusIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v16m8-8H4"
  }));
}

/* harmony default export */ const esm_PlusIcon = ((/* unused pure expression or super */ null && (PlusIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ const esm_PresentationChartBarIcon = ((/* unused pure expression or super */ null && (PresentationChartBarIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
  }));
}

/* harmony default export */ const esm_PresentationChartLineIcon = ((/* unused pure expression or super */ null && (PresentationChartLineIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PrinterIcon.js


function PrinterIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
  }));
}

/* harmony default export */ const esm_PrinterIcon = ((/* unused pure expression or super */ null && (PrinterIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/PuzzleIcon.js


function PuzzleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
  }));
}

/* harmony default export */ const esm_PuzzleIcon = ((/* unused pure expression or super */ null && (PuzzleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/QrcodeIcon.js


function QrcodeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
  }));
}

/* harmony default export */ const esm_QrcodeIcon = ((/* unused pure expression or super */ null && (QrcodeIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_QuestionMarkCircleIcon = ((/* unused pure expression or super */ null && (QuestionMarkCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
  }));
}

/* harmony default export */ const esm_ReceiptRefundIcon = ((/* unused pure expression or super */ null && (ReceiptRefundIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }));
}

/* harmony default export */ const esm_ReceiptTaxIcon = ((/* unused pure expression or super */ null && (ReceiptTaxIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/RefreshIcon.js


function RefreshIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }));
}

/* harmony default export */ const esm_RefreshIcon = ((/* unused pure expression or super */ null && (RefreshIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ReplyIcon.js


function ReplyIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
  }));
}

/* harmony default export */ const esm_ReplyIcon = ((/* unused pure expression or super */ null && (ReplyIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/RewindIcon.js


function RewindIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
  }));
}

/* harmony default export */ const esm_RewindIcon = ((/* unused pure expression or super */ null && (RewindIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/RssIcon.js


function RssIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
  }));
}

/* harmony default export */ const esm_RssIcon = ((/* unused pure expression or super */ null && (RssIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SaveAsIcon.js


function SaveAsIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
  }));
}

/* harmony default export */ const esm_SaveAsIcon = ((/* unused pure expression or super */ null && (SaveAsIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SaveIcon.js


function SaveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
  }));
}

/* harmony default export */ const esm_SaveIcon = ((/* unused pure expression or super */ null && (SaveIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ScaleIcon.js


function ScaleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
  }));
}

/* harmony default export */ const esm_ScaleIcon = ((/* unused pure expression or super */ null && (ScaleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ScissorsIcon.js


function ScissorsIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
  }));
}

/* harmony default export */ const esm_ScissorsIcon = ((/* unused pure expression or super */ null && (ScissorsIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js


function SearchCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_SearchCircleIcon = ((/* unused pure expression or super */ null && (SearchCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SearchIcon.js


function SearchIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }));
}

/* harmony default export */ const esm_SearchIcon = ((/* unused pure expression or super */ null && (SearchIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SelectorIcon.js


function SelectorIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
  }));
}

/* harmony default export */ const esm_SelectorIcon = ((/* unused pure expression or super */ null && (SelectorIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ServerIcon.js


function ServerIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
  }));
}

/* harmony default export */ const esm_ServerIcon = ((/* unused pure expression or super */ null && (ServerIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ShareIcon.js


function ShareIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
  }));
}

/* harmony default export */ const esm_ShareIcon = (ShareIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js


function ShieldCheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }));
}

/* harmony default export */ const esm_ShieldCheckIcon = ((/* unused pure expression or super */ null && (ShieldCheckIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
  }));
}

/* harmony default export */ const esm_ShieldExclamationIcon = ((/* unused pure expression or super */ null && (ShieldExclamationIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js


function ShoppingBagIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
  }));
}

/* harmony default export */ const esm_ShoppingBagIcon = ((/* unused pure expression or super */ null && (ShoppingBagIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js


function ShoppingCartIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  }));
}

/* harmony default export */ const esm_ShoppingCartIcon = ((/* unused pure expression or super */ null && (ShoppingCartIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js


function SortAscendingIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
  }));
}

/* harmony default export */ const esm_SortAscendingIcon = ((/* unused pure expression or super */ null && (SortAscendingIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js


function SortDescendingIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
  }));
}

/* harmony default export */ const esm_SortDescendingIcon = ((/* unused pure expression or super */ null && (SortDescendingIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SparklesIcon.js


function SparklesIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  }));
}

/* harmony default export */ const esm_SparklesIcon = ((/* unused pure expression or super */ null && (SparklesIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
  }));
}

/* harmony default export */ const esm_SpeakerphoneIcon = ((/* unused pure expression or super */ null && (SpeakerphoneIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/StarIcon.js


function StarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  }));
}

/* harmony default export */ const esm_StarIcon = ((/* unused pure expression or super */ null && (StarIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js


function StatusOfflineIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
  }));
}

/* harmony default export */ const esm_StatusOfflineIcon = ((/* unused pure expression or super */ null && (StatusOfflineIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js


function StatusOnlineIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
  }));
}

/* harmony default export */ const esm_StatusOnlineIcon = ((/* unused pure expression or super */ null && (StatusOnlineIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/StopIcon.js


function StopIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
  }));
}

/* harmony default export */ const esm_StopIcon = ((/* unused pure expression or super */ null && (StopIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SunIcon.js


function SunIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

/* harmony default export */ const esm_SunIcon = ((/* unused pure expression or super */ null && (SunIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SupportIcon.js


function SupportIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

/* harmony default export */ const esm_SupportIcon = ((/* unused pure expression or super */ null && (SupportIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
  }));
}

/* harmony default export */ const esm_SwitchHorizontalIcon = ((/* unused pure expression or super */ null && (SwitchHorizontalIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
  }));
}

/* harmony default export */ const esm_SwitchVerticalIcon = ((/* unused pure expression or super */ null && (SwitchVerticalIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TableIcon.js


function TableIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_TableIcon = ((/* unused pure expression or super */ null && (TableIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TagIcon.js


function TagIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
  }));
}

/* harmony default export */ const esm_TagIcon = ((/* unused pure expression or super */ null && (TagIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TemplateIcon.js


function TemplateIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
  }));
}

/* harmony default export */ const esm_TemplateIcon = ((/* unused pure expression or super */ null && (TemplateIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TerminalIcon.js


function TerminalIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_TerminalIcon = ((/* unused pure expression or super */ null && (TerminalIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js


function ThumbDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
  }));
}

/* harmony default export */ const esm_ThumbDownIcon = ((/* unused pure expression or super */ null && (ThumbDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js


function ThumbUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
  }));
}

/* harmony default export */ const esm_ThumbUpIcon = ((/* unused pure expression or super */ null && (ThumbUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TicketIcon.js


function TicketIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
  }));
}

/* harmony default export */ const esm_TicketIcon = ((/* unused pure expression or super */ null && (TicketIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TranslateIcon.js


function TranslateIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
  }));
}

/* harmony default export */ const esm_TranslateIcon = ((/* unused pure expression or super */ null && (TranslateIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TrashIcon.js


function TrashIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }));
}

/* harmony default export */ const esm_TrashIcon = ((/* unused pure expression or super */ null && (TrashIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js


function TrendingDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
  }));
}

/* harmony default export */ const esm_TrendingDownIcon = ((/* unused pure expression or super */ null && (TrendingDownIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js


function TrendingUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  }));
}

/* harmony default export */ const esm_TrendingUpIcon = ((/* unused pure expression or super */ null && (TrendingUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/TruckIcon.js


function TruckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
  }));
}

/* harmony default export */ const esm_TruckIcon = ((/* unused pure expression or super */ null && (TruckIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UploadIcon.js


function UploadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  }));
}

/* harmony default export */ const esm_UploadIcon = ((/* unused pure expression or super */ null && (UploadIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UserAddIcon.js


function UserAddIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
  }));
}

/* harmony default export */ const esm_UserAddIcon = ((/* unused pure expression or super */ null && (UserAddIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js


function UserCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_UserCircleIcon = ((/* unused pure expression or super */ null && (UserCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UserGroupIcon.js


function UserGroupIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }));
}

/* harmony default export */ const esm_UserGroupIcon = ((/* unused pure expression or super */ null && (UserGroupIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js


function UserRemoveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
  }));
}

/* harmony default export */ const esm_UserRemoveIcon = ((/* unused pure expression or super */ null && (UserRemoveIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UserIcon.js


function UserIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  }));
}

/* harmony default export */ const esm_UserIcon = ((/* unused pure expression or super */ null && (UserIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/UsersIcon.js


function UsersIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

/* harmony default export */ const esm_UsersIcon = ((/* unused pure expression or super */ null && (UsersIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/VariableIcon.js


function VariableIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
  }));
}

/* harmony default export */ const esm_VariableIcon = ((/* unused pure expression or super */ null && (VariableIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js


function VideoCameraIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_VideoCameraIcon = ((/* unused pure expression or super */ null && (VideoCameraIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js


function ViewBoardsIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
  }));
}

/* harmony default export */ const esm_ViewBoardsIcon = ((/* unused pure expression or super */ null && (ViewBoardsIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js


function ViewGridAddIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
  }));
}

/* harmony default export */ const esm_ViewGridAddIcon = ((/* unused pure expression or super */ null && (ViewGridAddIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ViewGridIcon.js


function ViewGridIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* harmony default export */ const esm_ViewGridIcon = ((/* unused pure expression or super */ null && (ViewGridIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ViewListIcon.js


function ViewListIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 10h16M4 14h16M4 18h16"
  }));
}

/* harmony default export */ const esm_ViewListIcon = ((/* unused pure expression or super */ null && (ViewListIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js


function VolumeOffIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
  }));
}

/* harmony default export */ const esm_VolumeOffIcon = ((/* unused pure expression or super */ null && (VolumeOffIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js


function VolumeUpIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
  }));
}

/* harmony default export */ const esm_VolumeUpIcon = ((/* unused pure expression or super */ null && (VolumeUpIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/WifiIcon.js


function WifiIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
  }));
}

/* harmony default export */ const esm_WifiIcon = ((/* unused pure expression or super */ null && (WifiIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/XCircleIcon.js


function XCircleIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

/* harmony default export */ const esm_XCircleIcon = ((/* unused pure expression or super */ null && (XCircleIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/XIcon.js


function XIcon(props) {
  return /*#__PURE__*/index_js_.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/index_js_.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
}

/* harmony default export */ const esm_XIcon = (XIcon);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js


function ZoomInIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
  }));
}

/* harmony default export */ const esm_ZoomInIcon = ((/* unused pure expression or super */ null && (ZoomInIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js


function ZoomOutIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
  }));
}

/* harmony default export */ const esm_ZoomOutIcon = ((/* unused pure expression or super */ null && (ZoomOutIcon)));
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/outline/esm/index.js







































































































































































































































/***/ }),

/***/ 7317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TopNavBar)
});

// EXTERNAL MODULE: external "/Users/owner/paul-salele/frontend/node_modules/react/index.js"
var index_js_ = __webpack_require__(6283);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js
var _rollupPluginBabelHelpers = __webpack_require__(9642);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.esm.js
var match_esm = __webpack_require__(133);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.esm.js
var render_esm = __webpack_require__(8529);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js
var use_iso_morphic_effect_esm = __webpack_require__(852);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js
var use_server_handoff_complete_esm = __webpack_require__(5989);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.esm.js
var use_id_esm = __webpack_require__(2506);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js


function useIsMounted() {
  var mounted = (0,index_js_.useRef)(false);
  (0,index_js_.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}


//# sourceMappingURL=use-is-mounted.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.esm.js


var Context = /*#__PURE__*/(0,index_js_.createContext)(null);
Context.displayName = 'OpenClosedContext';
var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Closed"] = 1] = "Closed";
})(State || (State = {}));

function useOpenClosed() {
  return (0,index_js_.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return index_js_default().createElement(Context.Provider, {
    value: value
  }, children);
}


//# sourceMappingURL=open-closed.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js


function useIsInitialRender() {
  var initial = (0,index_js_.useRef)(true);
  (0,index_js_.useEffect)(function () {
    initial.current = false;
  }, []);
  return initial.current;
}


//# sourceMappingURL=use-is-initial-render.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.esm.js


function disposables() {
  var disposables = [];
  var api = {
    requestAnimationFrame: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function () {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      api.requestAnimationFrame(function () {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function () {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(disposables.splice(0)), _step; !(_step = _iterator()).done;) {
        var dispose = _step.value;
        dispose();
      }
    }
  };
  return api;
}


//# sourceMappingURL=disposables.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/once.esm.js
function once(cb) {
  var state = {
    called: false
  };
  return function () {
    if (state.called) return;
    state.called = true;
    return cb.apply(void 0, arguments);
  };
}


//# sourceMappingURL=once.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js



function addClasses(node) {
  var _node$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}

function removeClasses(node) {
  var _node$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}

var Reason;

(function (Reason) {
  Reason["Finished"] = "finished";
  Reason["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));

function waitForTransition(node, done) {
  var d = disposables();
  if (!node) return d.dispose; // Safari returns a comma separated list of values, so let's sort them and take the highest value.

  var _getComputedStyle = getComputedStyle(node),
      transitionDuration = _getComputedStyle.transitionDuration,
      transitionDelay = _getComputedStyle.transitionDelay;

  var _map = [transitionDuration, transitionDelay].map(function (value) {
    var _value$split$filter$m = value.split(',') // Remove falsy we can't work with
    .filter(Boolean) // Values are returned as `0.3s` or `75ms`
    .map(function (v) {
      return v.includes('ms') ? parseFloat(v) : parseFloat(v) * 1000;
    }).sort(function (a, z) {
      return z - a;
    }),
        _value$split$filter$m2 = _value$split$filter$m[0],
        resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;

    return resolvedValue;
  }),
      durationMs = _map[0],
      delaysMs = _map[1]; // Waiting for the transition to end. We could use the `transitionend` event, however when no
  // actual transition/duration is defined then the `transitionend` event is not fired.
  //
  // TODO: Downside is, when you slow down transitions via devtools this timeout is still using the
  // full 100% speed instead of the 25% or 10%.


  if (durationMs !== 0) {
    d.setTimeout(function () {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    // No transition is happening, so we should cleanup already. Otherwise we have to wait until we
    // get disposed.
    done(Reason.Finished);
  } // If we get disposed before the timeout runs we should cleanup anyway


  d.add(function () {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}

function transition(node, base, from, to, entered, done) {
  var d = disposables();

  var _done = done !== undefined ? once(done) : function () {};

  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function () {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function (reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  }); // Once we get disposed, we should ensure that we cleanup after ourselves. In case of an unmount,
  // the node itself will be nullified and will be a no-op. In case of a full transition the classes
  // are already removed which is also a no-op. However if you go from enter -> leave mid-transition
  // then we have some leftovers that should be cleaned.

  d.add(function () {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  }); // When we get disposed early, than we should also call the done method but switch the reason.

  d.add(function () {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}


//# sourceMappingURL=transition.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js












function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return (0,index_js_.useMemo)(function () {
    return classes.split(' ').filter(function (className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}

var TransitionContext = /*#__PURE__*/(0,index_js_.createContext)(null);
TransitionContext.displayName = 'TransitionContext';
var TreeStates;

(function (TreeStates) {
  TreeStates["Visible"] = "visible";
  TreeStates["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));

function useTransitionContext() {
  var context = (0,index_js_.useContext)(TransitionContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

function useParentNesting() {
  var context = (0,index_js_.useContext)(NestingContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

var NestingContext = /*#__PURE__*/(0,index_js_.createContext)(null);
NestingContext.displayName = 'NestingContext';

function hasChildren(bag) {
  if ('children' in bag) return hasChildren(bag.children);
  return bag.current.filter(function (_ref) {
    var state = _ref.state;
    return state === TreeStates.Visible;
  }).length > 0;
}

function useNesting(done) {
  var doneRef = (0,index_js_.useRef)(done);
  var transitionableChildren = (0,index_js_.useRef)([]);
  var mounted = useIsMounted();
  (0,index_js_.useEffect)(function () {
    doneRef.current = done;
  }, [done]);
  var unregister = (0,index_js_.useCallback)(function (childId, strategy) {
    var _match;

    if (strategy === void 0) {
      strategy = render_esm/* RenderStrategy.Hidden */.l4.Hidden;
    }

    var idx = transitionableChildren.current.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === childId;
    });
    if (idx === -1) return;
    (0,match_esm/* match */.E)(strategy, (_match = {}, _match[render_esm/* RenderStrategy.Unmount */.l4.Unmount] = function () {
      transitionableChildren.current.splice(idx, 1);
    }, _match[render_esm/* RenderStrategy.Hidden */.l4.Hidden] = function () {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));

    if (!hasChildren(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = (0,index_js_.useCallback)(function (childId) {
    var child = transitionableChildren.current.find(function (_ref3) {
      var id = _ref3.id;
      return id === childId;
    });

    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }

    return function () {
      return unregister(childId, render_esm/* RenderStrategy.Unmount */.l4.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return (0,index_js_.useMemo)(function () {
    return {
      children: transitionableChildren,
      register: register,
      unregister: unregister
    };
  }, [register, unregister, transitionableChildren]);
}

function noop() {}

var eventNames = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];

function ensureEventHooksExist(events) {
  var result = {};

  for (var _iterator = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(eventNames), _step; !(_step = _iterator()).done;) {
    var _events$name;

    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }

  return result;
}

function useEvents(events) {
  var eventsRef = (0,index_js_.useRef)(ensureEventHooksExist(events));
  (0,index_js_.useEffect)(function () {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
} // ---


var DEFAULT_TRANSITION_CHILD_TAG = 'div';
var TransitionChildRenderFeatures = render_esm/* Features.RenderStrategy */.AN.RenderStrategy;

function TransitionChild(props) {
  var _match3;

  var beforeEnter = props.beforeEnter,
      afterEnter = props.afterEnter,
      beforeLeave = props.beforeLeave,
      afterLeave = props.afterLeave,
      enter = props.enter,
      enterFrom = props.enterFrom,
      enterTo = props.enterTo,
      entered = props.entered,
      leave = props.leave,
      leaveFrom = props.leaveFrom,
      leaveTo = props.leaveTo,
      rest = (0,_rollupPluginBabelHelpers/* objectWithoutPropertiesLoose */.gK)(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);

  var container = (0,index_js_.useRef)(null);

  var _useState = (0,index_js_.useState)(TreeStates.Visible),
      state = _useState[0],
      setState = _useState[1];

  var strategy = rest.unmount ? render_esm/* RenderStrategy.Unmount */.l4.Unmount : render_esm/* RenderStrategy.Hidden */.l4.Hidden;

  var _useTransitionContext = useTransitionContext(),
      show = _useTransitionContext.show,
      appear = _useTransitionContext.appear;

  var _useParentNesting = useParentNesting(),
      register = _useParentNesting.register,
      unregister = _useParentNesting.unregister;

  var initial = useIsInitialRender();
  var id = (0,use_id_esm/* useId */.M)();
  var isTransitioning = (0,index_js_.useRef)(false);
  var nesting = useNesting(function () {
    // When all children have been unmounted we can only hide ourselves if and only if we are not
    // transitioning ourselves. Otherwise we would unmount before the transitions are finished.
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id);
      events.current.afterLeave();
    }
  });
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    if (!id) return;
    return register(id);
  }, [register, id]);
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    var _match2;

    // If we are in another mode than the Hidden mode then ignore
    if (strategy !== render_esm/* RenderStrategy.Hidden */.l4.Hidden) return;
    if (!id) return; // Make sure that we are visible

    if (show && state !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }

    (0,match_esm/* match */.E)(state, (_match2 = {}, _match2[TreeStates.Hidden] = function () {
      return unregister(id);
    }, _match2[TreeStates.Visible] = function () {
      return register(id);
    }, _match2));
  }, [state, id, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter: beforeEnter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    afterLeave: afterLeave
  });
  var ready = (0,use_server_handoff_complete_esm/* useServerHandoffComplete */.H)();
  (0,index_js_.useEffect)(function () {
    if (ready && state === TreeStates.Visible && container.current === null) {
      throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
    }
  }, [container, state, ready]); // Skipping initial transition

  var skip = initial && !appear;
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    var node = container.current;
    if (!node) return;
    if (skip) return;
    isTransitioning.current = true;
    if (show) events.current.beforeEnter();
    if (!show) events.current.beforeLeave();
    return show ? transition(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason === Reason.Finished) events.current.afterEnter();
    }) : transition(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason !== Reason.Finished) return; // When we don't have children anymore we can safely unregister from the parent and hide
      // ourselves.

      if (!hasChildren(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id);
        events.current.afterLeave();
      }
    });
  }, [events, id, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return index_js_default().createElement(NestingContext.Provider, {
    value: nesting
  }, index_js_default().createElement(OpenClosedProvider, {
    value: (0,match_esm/* match */.E)(state, (_match3 = {}, _match3[TreeStates.Visible] = State.Open, _match3[TreeStates.Hidden] = State.Closed, _match3))
  }, (0,render_esm/* render */.sY)({
    props: (0,_rollupPluginBabelHelpers/* extends */.gY)({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition.Child'
  })));
}

function Transition(props) {
  // @ts-expect-error
  var show = props.show,
      _props$appear = props.appear,
      appear = _props$appear === void 0 ? false : _props$appear,
      unmount = props.unmount,
      passthroughProps = (0,_rollupPluginBabelHelpers/* objectWithoutPropertiesLoose */.gK)(props, ["show", "appear", "unmount"]);

  var usesOpenClosedState = useOpenClosed();

  if (show === undefined && usesOpenClosedState !== null) {
    var _match4;

    show = (0,match_esm/* match */.E)(usesOpenClosedState, (_match4 = {}, _match4[State.Open] = true, _match4[State.Closed] = false, _match4));
  }

  if (![true, false].includes(show)) {
    throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
  }

  var _useState2 = (0,index_js_.useState)(show ? TreeStates.Visible : TreeStates.Hidden),
      state = _useState2[0],
      setState = _useState2[1];

  var nestingBag = useNesting(function () {
    setState(TreeStates.Hidden);
  });
  var initial = useIsInitialRender();
  var transitionBag = (0,index_js_.useMemo)(function () {
    return {
      show: show,
      appear: appear || !initial
    };
  }, [show, appear, initial]);
  (0,index_js_.useEffect)(function () {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount: unmount
  };
  return index_js_default().createElement(NestingContext.Provider, {
    value: nestingBag
  }, index_js_default().createElement(TransitionContext.Provider, {
    value: transitionBag
  }, (0,render_esm/* render */.sY)({
    props: (0,_rollupPluginBabelHelpers/* extends */.gY)({}, sharedProps, {
      as: index_js_.Fragment,
      children: index_js_default().createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: index_js_.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition'
  })));
}

Transition.Child = function Child(props) {
  var hasTransitionContext = (0,index_js_.useContext)(TransitionContext) !== null;
  var hasOpenClosedContext = useOpenClosed() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? index_js_default().createElement(Transition, Object.assign({}, props)) : index_js_default().createElement(TransitionChild, Object.assign({}, props));
};

Transition.Root = Transition;


//# sourceMappingURL=transition.esm.js.map

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js
var use_sync_refs_esm = __webpack_require__(7471);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.esm.js
var keyboard_esm = __webpack_require__(2659);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.esm.js
var bugs_esm = __webpack_require__(9016);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js


function useWindowEvent(type, listener, options) {
  var listenerRef = (0,index_js_.useRef)(listener);
  listenerRef.current = listener;
  (0,index_js_.useEffect)(function () {
    function handler(event) {
      listenerRef.current.call(window, event);
    }

    window.addEventListener(type, handler, options);
    return function () {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}


//# sourceMappingURL=use-window-event.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.esm.js


//  - https://stackoverflow.com/a/30753870

var focusableSelector = /*#__PURE__*/['[contentEditable=true]', '[tabindex]', 'a[href]', 'area[href]', 'button:not([disabled])', 'iframe', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])'].map( false ? // TODO: Remove this once JSDOM fixes the issue where an element that is
// "hidden" can be the document.activeElement, because this is not possible
// in real browsers.
// TODO: Remove this once JSDOM fixes the issue where an element that is
0 : function (selector) {
  return selector + ":not([tabindex='-1'])";
}).join(',');
var Focus;

(function (Focus) {
  /** Focus the first non-disabled element */
  Focus[Focus["First"] = 1] = "First";
  /** Focus the previous non-disabled element */

  Focus[Focus["Previous"] = 2] = "Previous";
  /** Focus the next non-disabled element */

  Focus[Focus["Next"] = 4] = "Next";
  /** Focus the last non-disabled element */

  Focus[Focus["Last"] = 8] = "Last";
  /** Wrap tab around */

  Focus[Focus["WrapAround"] = 16] = "WrapAround";
  /** Prevent scrolling the focusable elements into view */

  Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));

var FocusResult;

(function (FocusResult) {
  /** Something went wrong while trying to focus. */
  FocusResult[FocusResult["Error"] = 0] = "Error";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */

  FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
  /** Focus was successful. */

  FocusResult[FocusResult["Success"] = 2] = "Success";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */

  FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));

var Direction;

(function (Direction) {
  Direction[Direction["Previous"] = -1] = "Previous";
  Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));

function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }

  if (container == null) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;

(function (FocusableMode) {
  /** The element itself must be focusable. */
  FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
  /** The element should be inside of a focusable element. */

  FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));

function isFocusableElement(element, mode) {
  var _match;

  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }

  if (element === document.body) return false;
  return match(mode, (_match = {}, _match[FocusableMode.Strict] = function () {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function () {
    var next = element;

    while (next !== null) {
      if (next.matches(focusableSelector)) return true;
      next = next.parentElement;
    }

    return false;
  }, _match));
}
function focusElement(element) {
  element == null ? void 0 : element.focus({
    preventScroll: true
  });
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container : getFocusableElements(container);
  var active = document.activeElement;

  var direction = function () {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var startIndex = function () {
    if (focus & Focus.First) return 0;
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last) return elements.length - 1;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = undefined;

  do {
    var _next;

    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;
    var nextIdx = startIndex + offset;

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx]; // Try the focus the next element, might not work if it is "hidden" to the user.

    (_next = next) == null ? void 0 : _next.focus(focusOptions); // Try the next one in line

    offset += direction;
  } while (next !== document.activeElement); // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.


  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');
  return FocusResult.Success;
}


//# sourceMappingURL=focus-management.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js







var Features;

(function (Features) {
  /** No features enabled for the `useFocusTrap` hook. */
  Features[Features["None"] = 1] = "None";
  /** Ensure that we move focus initially into the container. */

  Features[Features["InitialFocus"] = 2] = "InitialFocus";
  /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */

  Features[Features["TabLock"] = 4] = "TabLock";
  /** Ensure that programmatically moving focus outside of the container is disallowed. */

  Features[Features["FocusLock"] = 8] = "FocusLock";
  /** Ensure that we restore the focus when unmounting the component that uses this `useFocusTrap` hook. */

  Features[Features["RestoreFocus"] = 16] = "RestoreFocus";
  /** Enable all features. */

  Features[Features["All"] = 30] = "All";
})(Features || (Features = {}));

function useFocusTrap(container, features, _temp) {
  if (features === void 0) {
    features = Features.All;
  }

  var _ref = _temp === void 0 ? {} : _temp,
      initialFocus = _ref.initialFocus,
      containers = _ref.containers;

  var restoreElement = (0,index_js_.useRef)(typeof window !== 'undefined' ? document.activeElement : null);
  var previousActiveElement = (0,index_js_.useRef)(null);
  var mounted = useIsMounted();
  var featuresRestoreFocus = Boolean(features & Features.RestoreFocus);
  var featuresInitialFocus = Boolean(features & Features.InitialFocus); // Capture the currently focused element, before we enable the focus trap.

  (0,index_js_.useEffect)(function () {
    if (!featuresRestoreFocus) return;
    restoreElement.current = document.activeElement;
  }, [featuresRestoreFocus]); // Restore the focus when we unmount the component.

  (0,index_js_.useEffect)(function () {
    if (!featuresRestoreFocus) return;
    return function () {
      focusElement(restoreElement.current);
      restoreElement.current = null;
    };
  }, [featuresRestoreFocus]); // Handle initial focus

  (0,index_js_.useEffect)(function () {
    if (!featuresInitialFocus) return;
    if (!container.current) return;
    var activeElement = document.activeElement;

    if (initialFocus == null ? void 0 : initialFocus.current) {
      if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
        previousActiveElement.current = activeElement;
        return; // Initial focus ref is already the active element
      }
    } else if (container.current.contains(activeElement)) {
      previousActiveElement.current = activeElement;
      return; // Already focused within Dialog
    } // Try to focus the initialFocus ref


    if (initialFocus == null ? void 0 : initialFocus.current) {
      focusElement(initialFocus.current);
    } else {
      if (focusIn(container.current, Focus.First) === FocusResult.Error) {
        console.warn('There are no focusable elements inside the <FocusTrap />');
      }
    }

    previousActiveElement.current = document.activeElement;
  }, [container, initialFocus, featuresInitialFocus]); // Handle `Tab` & `Shift+Tab` keyboard events

  useWindowEvent('keydown', function (event) {
    if (!(features & Features.TabLock)) return;
    if (!container.current) return;
    if (event.key !== keyboard_esm/* Keys.Tab */.R.Tab) return;
    event.preventDefault();

    if (focusIn(container.current, (event.shiftKey ? Focus.Previous : Focus.Next) | Focus.WrapAround) === FocusResult.Success) {
      previousActiveElement.current = document.activeElement;
    }
  }); // Prevent programmatically escaping the container

  useWindowEvent('focus', function (event) {
    if (!(features & Features.FocusLock)) return;
    var allContainers = new Set(containers == null ? void 0 : containers.current);
    allContainers.add(container);
    if (!allContainers.size) return;
    var previous = previousActiveElement.current;
    if (!previous) return;
    if (!mounted.current) return;
    var toElement = event.target;

    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(allContainers, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        focusElement(previous);
      } else {
        previousActiveElement.current = toElement;
        focusElement(toElement);
      }
    } else {
      focusElement(previousActiveElement.current);
    }
  }, true);
}

function contains(containers, element) {
  for (var _iterator = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(containers), _step; !(_step = _iterator()).done;) {
    var _container$current;

    var container = _step.value;
    if ((_container$current = container.current) == null ? void 0 : _container$current.contains(element)) return true;
  }

  return false;
}


//# sourceMappingURL=use-focus-trap.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js



var interactables = /*#__PURE__*/new Set();
var originals = /*#__PURE__*/new Map();

function inert(element) {
  element.setAttribute('aria-hidden', 'true'); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = true;
}

function restore(element) {
  var original = originals.get(element);
  if (!original) return;
  if (original['aria-hidden'] === null) element.removeAttribute('aria-hidden');else element.setAttribute('aria-hidden', original['aria-hidden']); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = original.inert;
}

function useInertOthers(container, enabled) {
  if (enabled === void 0) {
    enabled = true;
  }

  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    if (!enabled) return;
    if (!container.current) return;
    var element = container.current; // Mark myself as an interactable element

    interactables.add(element); // Restore elements that now contain an interactable child

    for (var _iterator = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(originals.keys()), _step; !(_step = _iterator()).done;) {
      var original = _step.value;

      if (original.contains(element)) {
        restore(original);
        originals["delete"](original);
      }
    } // Collect direct children of the body


    document.querySelectorAll('body > *').forEach(function (child) {
      if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
      // Skip the interactables, and the parents of the interactables

      for (var _iterator2 = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(interactables), _step2; !(_step2 = _iterator2()).done;) {
        var interactable = _step2.value;
        if (child.contains(interactable)) return;
      } // Keep track of the elements


      if (interactables.size === 1) {
        originals.set(child, {
          'aria-hidden': child.getAttribute('aria-hidden'),
          // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
          inert: child.inert
        }); // Mutate the element

        inert(child);
      }
    });
    return function () {
      // Inert is disabled on the current element
      interactables["delete"](element); // We still have interactable elements, therefore this one and its parent
      // will become inert as well.

      if (interactables.size > 0) {
        // Collect direct children of the body
        document.querySelectorAll('body > *').forEach(function (child) {
          if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
          // Skip already inert parents

          if (originals.has(child)) return; // Skip the interactables, and the parents of the interactables

          for (var _iterator3 = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(interactables), _step3; !(_step3 = _iterator3()).done;) {
            var interactable = _step3.value;
            if (child.contains(interactable)) return;
          }

          originals.set(child, {
            'aria-hidden': child.getAttribute('aria-hidden'),
            // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
            inert: child.inert
          }); // Mutate the element

          inert(child);
        });
      } else {
        for (var _iterator4 = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(originals.keys()), _step4; !(_step4 = _iterator4()).done;) {
          var _element = _step4.value;
          // Restore
          restore(_element); // Cleanup

          originals["delete"](_element);
        }
      }
    };
  }, [enabled]);
}


//# sourceMappingURL=use-inert-others.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js


var ForcePortalRootContext = /*#__PURE__*/(0,index_js_.createContext)(false);
function usePortalRoot() {
  return (0,index_js_.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return index_js_default().createElement(ForcePortalRootContext.Provider, {
    value: props.force
  }, props.children);
}


//# sourceMappingURL=portal-force-root.esm.js.map

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/portal/portal.esm.js








function usePortalTarget() {
  var forceInRoot = usePortalRoot();
  var groupTarget = (0,index_js_.useContext)(PortalGroupContext);

  var _useState = (0,index_js_.useState)(function () {
    // Group context is used, but still null
    if (!forceInRoot && groupTarget !== null) return null; // No group context is used, let's create a default portal root

    if (typeof window === 'undefined') return null;
    var existingRoot = document.getElementById('headlessui-portal-root');
    if (existingRoot) return existingRoot;
    var root = document.createElement('div');
    root.setAttribute('id', 'headlessui-portal-root');
    return document.body.appendChild(root);
  }),
      target = _useState[0],
      setTarget = _useState[1];

  (0,index_js_.useEffect)(function () {
    if (forceInRoot) return;
    if (groupTarget === null) return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
} // ---


var DEFAULT_PORTAL_TAG = index_js_.Fragment;
function Portal(props) {
  var passthroughProps = props;
  var target = usePortalTarget();

  var _useState2 = (0,index_js_.useState)(function () {
    return typeof window === 'undefined' ? null : document.createElement('div');
  }),
      element = _useState2[0];

  var ready = (0,use_server_handoff_complete_esm/* useServerHandoffComplete */.H)();
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    if (!target) return;
    if (!element) return;
    target.appendChild(element);
    return function () {
      if (!target) return;
      if (!element) return;
      target.removeChild(element);

      if (target.childNodes.length <= 0) {
        var _target$parentElement;

        (_target$parentElement = target.parentElement) == null ? void 0 : _target$parentElement.removeChild(target);
      }
    };
  }, [target, element]);
  if (!ready) return null;
  return !target || !element ? null : (0,react_dom.createPortal)((0,render_esm/* render */.sY)({
    props: passthroughProps,
    defaultTag: DEFAULT_PORTAL_TAG,
    name: 'Portal'
  }), element);
} // ---

var DEFAULT_GROUP_TAG = index_js_.Fragment;
var PortalGroupContext = /*#__PURE__*/(0,index_js_.createContext)(null);

function Group(props) {
  var target = props.target,
      passthroughProps = (0,_rollupPluginBabelHelpers/* objectWithoutPropertiesLoose */.gK)(props, ["target"]);

  return index_js_default().createElement(PortalGroupContext.Provider, {
    value: target
  }, (0,render_esm/* render */.sY)({
    props: passthroughProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Popover.Group'
  }));
} // ---


Portal.Group = Group;


//# sourceMappingURL=portal.esm.js.map

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/description/description.esm.js
var description_esm = __webpack_require__(7587);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/stack-context.esm.js



var StackContext = /*#__PURE__*/(0,index_js_.createContext)(function () {});
StackContext.displayName = 'StackContext';
var StackMessage;

(function (StackMessage) {
  StackMessage[StackMessage["Add"] = 0] = "Add";
  StackMessage[StackMessage["Remove"] = 1] = "Remove";
})(StackMessage || (StackMessage = {}));

function useStackContext() {
  return (0,index_js_.useContext)(StackContext);
}
function StackProvider(_ref) {
  var children = _ref.children,
      onUpdate = _ref.onUpdate,
      type = _ref.type,
      element = _ref.element;
  var parentUpdate = useStackContext();
  var notify = (0,index_js_.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Notify our layer
    onUpdate == null ? void 0 : onUpdate.apply(void 0, args); // Notify the parent

    parentUpdate.apply(void 0, args);
  }, [parentUpdate, onUpdate]);
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    notify(StackMessage.Add, type, element);
    return function () {
      return notify(StackMessage.Remove, type, element);
    };
  }, [notify, type, element]);
  return index_js_default().createElement(StackContext.Provider, {
    value: notify
  }, children);
}


//# sourceMappingURL=stack-context.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js


















var _reducers;
var DialogStates;

(function (DialogStates) {
  DialogStates[DialogStates["Open"] = 0] = "Open";
  DialogStates[DialogStates["Closed"] = 1] = "Closed";
})(DialogStates || (DialogStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["SetTitleId"] = 0] = "SetTitleId";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.SetTitleId] = function (state, action) {
  if (state.titleId === action.id) return state;
  return (0,_rollupPluginBabelHelpers/* extends */.gY)({}, state, {
    titleId: action.id
  });
}, _reducers);
var DialogContext = /*#__PURE__*/(0,index_js_.createContext)(null);
DialogContext.displayName = 'DialogContext';

function useDialogContext(component) {
  var context = (0,index_js_.useContext)(DialogContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Dialog.displayName + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDialogContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,match_esm/* match */.E)(action.type, reducers, state, action);
} // ---


var DEFAULT_DIALOG_TAG = 'div';
var DialogRenderFeatures = render_esm/* Features.RenderStrategy */.AN.RenderStrategy | render_esm/* Features.Static */.AN.Static;
var DialogRoot = /*#__PURE__*/(0,render_esm/* forwardRefWithAs */.yV)(function Dialog(props, ref) {
  var open = props.open,
      onClose = props.onClose,
      initialFocus = props.initialFocus,
      rest = (0,_rollupPluginBabelHelpers/* objectWithoutPropertiesLoose */.gK)(props, ["open", "onClose", "initialFocus"]);

  var _useState = (0,index_js_.useState)(0),
      nestedDialogCount = _useState[0],
      setNestedDialogCount = _useState[1];

  var usesOpenClosedState = useOpenClosed();

  if (open === undefined && usesOpenClosedState !== null) {
    var _match;

    // Update the `open` prop based on the open closed state
    open = (0,match_esm/* match */.E)(usesOpenClosedState, (_match = {}, _match[State.Open] = true, _match[State.Closed] = false, _match));
  }

  var containers = (0,index_js_.useRef)(new Set());
  var internalDialogRef = (0,index_js_.useRef)(null);
  var dialogRef = (0,use_sync_refs_esm/* useSyncRefs */.T)(internalDialogRef, ref); // Validations

  var hasOpen = props.hasOwnProperty('open') || usesOpenClosedState !== null;
  var hasOnClose = props.hasOwnProperty('onClose');

  if (!hasOpen && !hasOnClose) {
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  }

  if (!hasOpen) {
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  }

  if (!hasOnClose) {
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  }

  if (typeof open !== 'boolean') {
    throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + open);
  }

  if (typeof onClose !== 'function') {
    throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + onClose);
  }

  var dialogState = open ? DialogStates.Open : DialogStates.Closed;

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === State.Open;
    }

    return dialogState === DialogStates.Open;
  }();

  var _useReducer = (0,index_js_.useReducer)(stateReducer, {
    titleId: null,
    descriptionId: null
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var close = (0,index_js_.useCallback)(function () {
    return onClose(false);
  }, [onClose]);
  var setTitleId = (0,index_js_.useCallback)(function (id) {
    return dispatch({
      type: ActionTypes.SetTitleId,
      id: id
    });
  }, [dispatch]);
  var ready = (0,use_server_handoff_complete_esm/* useServerHandoffComplete */.H)();
  var enabled = ready && dialogState === DialogStates.Open;
  var hasNestedDialogs = nestedDialogCount > 1; // 1 is the current dialog

  var hasParentDialog = (0,index_js_.useContext)(DialogContext) !== null; // If there are multiple dialogs, then you can be the root, the leaf or one
  // in between. We only care abou whether you are the top most one or not.

  var position = !hasNestedDialogs ? 'leaf' : 'parent';
  useFocusTrap(internalDialogRef, enabled ? (0,match_esm/* match */.E)(position, {
    parent: Features.RestoreFocus,
    leaf: Features.All
  }) : Features.None, {
    initialFocus: initialFocus,
    containers: containers
  });
  useInertOthers(internalDialogRef, hasNestedDialogs ? enabled : false); // Handle outside click

  useWindowEvent('mousedown', function (event) {
    var _internalDialogRef$cu;

    var target = event.target;
    if (dialogState !== DialogStates.Open) return;
    if (hasNestedDialogs) return;
    if ((_internalDialogRef$cu = internalDialogRef.current) == null ? void 0 : _internalDialogRef$cu.contains(target)) return;
    close();
  }); // Handle `Escape` to close

  useWindowEvent('keydown', function (event) {
    if (event.key !== keyboard_esm/* Keys.Escape */.R.Escape) return;
    if (dialogState !== DialogStates.Open) return;
    if (hasNestedDialogs) return;
    event.preventDefault();
    event.stopPropagation();
    close();
  }); // Scroll lock

  (0,index_js_.useEffect)(function () {
    if (dialogState !== DialogStates.Open) return;
    if (hasParentDialog) return;
    var overflow = document.documentElement.style.overflow;
    var paddingRight = document.documentElement.style.paddingRight;
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = scrollbarWidth + "px";
    return function () {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [dialogState, hasParentDialog]); // Trigger close when the FocusTrap gets hidden

  (0,index_js_.useEffect)(function () {
    if (dialogState !== DialogStates.Open) return;
    if (!internalDialogRef.current) return;
    var observer = new IntersectionObserver(function (entries) {
      for (var _iterator = (0,_rollupPluginBabelHelpers/* createForOfIteratorHelperLoose */.Ul)(entries), _step; !(_step = _iterator()).done;) {
        var entry = _step.value;

        if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return function () {
      return observer.disconnect();
    };
  }, [dialogState, internalDialogRef, close]);

  var _useDescriptions = (0,description_esm/* useDescriptions */.f)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var id = "headlessui-dialog-" + (0,use_id_esm/* useId */.M)();
  var contextBag = (0,index_js_.useMemo)(function () {
    return [{
      dialogState: dialogState,
      close: close,
      setTitleId: setTitleId
    }, state];
  }, [dialogState, state, close, setTitleId]);
  var slot = (0,index_js_.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    ref: dialogRef,
    id: id,
    role: 'dialog',
    'aria-modal': dialogState === DialogStates.Open ? true : undefined,
    'aria-labelledby': state.titleId,
    'aria-describedby': describedby,
    onClick: function onClick(event) {
      event.stopPropagation();
    }
  };
  var passthroughProps = rest;
  return index_js_default().createElement(StackProvider, {
    type: "Dialog",
    element: internalDialogRef,
    onUpdate: (0,index_js_.useCallback)(function (message, type, element) {
      var _match2;

      if (type !== 'Dialog') return;
      (0,match_esm/* match */.E)(message, (_match2 = {}, _match2[StackMessage.Add] = function () {
        containers.current.add(element);
        setNestedDialogCount(function (count) {
          return count + 1;
        });
      }, _match2[StackMessage.Remove] = function () {
        containers.current.add(element);
        setNestedDialogCount(function (count) {
          return count - 1;
        });
      }, _match2));
    }, [])
  }, index_js_default().createElement(ForcePortalRoot, {
    force: true
  }, index_js_default().createElement(Portal, null, index_js_default().createElement(DialogContext.Provider, {
    value: contextBag
  }, index_js_default().createElement(Portal.Group, {
    target: internalDialogRef
  }, index_js_default().createElement(ForcePortalRoot, {
    force: false
  }, index_js_default().createElement(DescriptionProvider, {
    slot: slot,
    name: "Dialog.Description"
  }, (0,render_esm/* render */.sY)({
    props: (0,_rollupPluginBabelHelpers/* extends */.gY)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_DIALOG_TAG,
    features: DialogRenderFeatures,
    visible: visible,
    name: 'Dialog'
  }))))))));
}); // ---

var DEFAULT_OVERLAY_TAG = 'div';
var Overlay = /*#__PURE__*/(0,render_esm/* forwardRefWithAs */.yV)(function Overlay(props, ref) {
  var _useDialogContext = useDialogContext([Dialog.displayName, Overlay.name].join('.')),
      _useDialogContext$ = _useDialogContext[0],
      dialogState = _useDialogContext$.dialogState,
      close = _useDialogContext$.close;

  var overlayRef = (0,use_sync_refs_esm/* useSyncRefs */.T)(ref);
  var id = "headlessui-dialog-overlay-" + (0,use_id_esm/* useId */.M)();
  var handleClick = (0,index_js_.useCallback)(function (event) {
    if ((0,bugs_esm/* isDisabledReactIssue7711 */.P)(event.currentTarget)) return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  }, [close]);
  var slot = (0,index_js_.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    ref: overlayRef,
    id: id,
    'aria-hidden': true,
    onClick: handleClick
  };
  var passthroughProps = props;
  return (0,render_esm/* render */.sY)({
    props: (0,_rollupPluginBabelHelpers/* extends */.gY)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: 'Dialog.Overlay'
  });
}); // ---

var DEFAULT_TITLE_TAG = 'h2';

function Title(props) {
  var _useDialogContext2 = useDialogContext([Dialog.displayName, Title.name].join('.')),
      _useDialogContext2$ = _useDialogContext2[0],
      dialogState = _useDialogContext2$.dialogState,
      setTitleId = _useDialogContext2$.setTitleId;

  var id = "headlessui-dialog-title-" + (0,use_id_esm/* useId */.M)();
  (0,index_js_.useEffect)(function () {
    setTitleId(id);
    return function () {
      return setTitleId(null);
    };
  }, [id, setTitleId]);
  var slot = (0,index_js_.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    id: id
  };
  var passthroughProps = props;
  return (0,render_esm/* render */.sY)({
    props: (0,_rollupPluginBabelHelpers/* extends */.gY)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: 'Dialog.Title'
  });
} // ---


var Dialog = /*#__PURE__*/Object.assign(DialogRoot, {
  Overlay: Overlay,
  Title: Title,
  Description: description_esm/* Description */.d
});


//# sourceMappingURL=dialog.esm.js.map

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(2031);
// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(1248);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
;// CONCATENATED MODULE: ./src/components/animations/paul-logo.json
const paul_logo_namespaceObject = JSON.parse('{"v":"5.6.6","ip":0,"op":300,"fr":60,"w":141,"h":36,"layers":[{"ind":175,"nm":"surface471","ao":0,"ip":0,"op":720,"st":0,"ty":4,"ks":{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"a":0,"k":[88.36,22.65],"ix":2},"a":{"a":0,"k":[70.5,18],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.67,0.67,0.67],"y":[1,1,1]},"o":{"x":[0.33,0.33,0.33],"y":[0,0,0]},"t":0,"s":[106,106,100]},{"i":{"x":[0.67,0.67,0.67],"y":[1,1,1]},"o":{"x":[0.33,0.33,0.33],"y":[0,0,0]},"t":18,"s":[93,93,100]},{"t":42,"s":[106,106,100]}],"ix":6},"sk":{"k":0},"sa":{"k":0}},"shapes":[{"ty":"gr","hd":false,"nm":"surface471","it":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0.39,0.26],[0.34,-0.34],[0,0],[-0.17,-0.37],[-0.41,0.02],[0,0],[0,0],[0,0],[-0.18,-0.27],[-0.33,0],[-0.19,0.19],[0,0],[0.16,0.38],[0.4,0]],"o":[[0,0],[0,0],[0,0],[0.17,-0.44],[-0.4,-0.27],[0,0],[-0.28,0.29],[0.17,0.37],[0,0],[0,0],[0,0],[-0.12,0.31],[0.19,0.28],[0.27,0.01],[0,0],[0.28,-0.29],[-0.16,-0.37],[0,0]],"v":[[55,88.68],[47.65,88.68],[53.09,75.16],[53.09,75.16],[52.72,73.96],[51.46,74.08],[33.24,92.31],[33.05,93.41],[34,94],[41.36,94],[35.91,107.51],[35.91,107.51],[36.01,108.44],[36.83,108.88],[37.54,108.59],[55.71,90.38],[55.92,89.29],[55,88.68]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[49.42,79],[45.5,88.68],[39.69,88.68]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[39.53,103.79],[43.45,94],[49.26,94]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[51.26,92],[36.35,92],[37.7,90.66],[52.6,90.66]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0.29,0.2],[0.25,-0.25],[0,0],[-0.12,-0.28],[-0.3,0.01],[0,0],[0,0],[0,0],[-0.14,-0.2],[-0.25,0],[-0.14,0.14],[0,0],[0.12,0.28],[0.3,0]],"o":[[0,0],[0,0],[0,0],[0.13,-0.33],[-0.3,-0.2],[0,0],[-0.21,0.22],[0.13,0.28],[0,0],[0,0],[0,0],[-0.09,0.23],[0.14,0.21],[0.2,0],[0,0],[0.21,-0.21],[-0.12,-0.28],[0,0]],"v":[[16.91,11.54],[11.4,11.54],[15.48,1.4],[15.48,1.4],[15.2,0.5],[14.26,0.59],[0.59,14.27],[0.45,15.09],[1.16,15.53],[6.68,15.53],[2.6,25.66],[2.59,25.66],[2.67,26.36],[3.29,26.69],[3.82,26.48],[17.45,12.82],[17.6,12],[16.91,11.54]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[12.73,4.28],[9.79,11.54],[5.43,11.54]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.31,22.88],[8.25,15.53],[12.61,15.53]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[14.11,14.03],[2.93,14.03],[3.94,13.03],[15.11,13.03]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,2.15],[2.82,0],[0,0],[0,-2.22],[0,0],[-2.94,0],[0,0],[0,0],[0,0],[0,0.93]],"o":[[0,0],[0,0],[2.89,0],[0,-2.15],[0,0],[-2.94,0],[0,0],[0,2.23],[0,0],[0,0],[0,0],[-1.25,0],[0,0]],"v":[[163.24,94.46],[163.24,93.61],[168.82,93.61],[172.82,90.24],[168.82,86.63],[165,86.63],[160.91,90.5],[160.91,94.5],[165,98.37],[172.18,98.37],[172.18,96.08],[165,96.08],[163.24,94.46]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.29,0],[0,0],[0,-0.89],[1.27,0],[0,0]],"o":[[0,-0.91],[0,0],[1.15,0],[0,0.89],[0,0],[0,0]],"v":[[163.24,90.52],[165.04,88.9],[168.82,88.9],[170.49,90.37],[168.76,91.77],[163.25,91.77]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,1.61],[2.11,0],[0,0],[0,-1.66],[0,0],[-2.2,0],[0,0],[0,0],[0,0],[0,0.7]],"o":[[0,0],[0,0],[2.17,0],[0,-1.61],[0,0],[-2.2,0],[0,0],[0,1.67],[0,0],[0,0],[0,0],[-0.94,0],[0,0]],"v":[[98.09,15.88],[98.09,15.24],[102.28,15.24],[105.28,12.71],[102.28,10.01],[99.41,10],[96.35,12.91],[96.35,15.91],[99.41,18.81],[104.8,18.81],[104.8,17.09],[99.41,17.09],[98.09,15.88]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.97,0],[0,0],[0,-0.67],[0.95,0],[0,0]],"o":[[0,-0.68],[0,0],[0.86,0],[0,0.67],[0,0],[0,0]],"v":[[98.09,12.93],[99.45,11.71],[102.28,11.71],[103.53,12.81],[102.23,13.86],[98.1,13.86]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[124,8.25],[126.36,8.25],[126.36,25.08],[124,25.08]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,2.15],[2.82,0],[0,0],[0,-2.22],[0,0],[-2.93,0],[0,0],[0,0],[0,0],[0,0.93],[0,0]],"o":[[2.89,0],[0,-2.15],[0,0],[-2.93,0],[0,0],[0,2.23],[0,0],[0,0],[0,0],[-1.29,0],[0,0],[0,0]],"v":[[150.58,93.61],[154.58,90.24],[150.58,86.63],[146.78,86.63],[142.69,90.5],[142.69,94.5],[146.78,98.37],[154,98.37],[154,96.08],[146.8,96.08],[145,94.46],[145,93.61]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.29,0],[0,0],[0,-0.89],[1.27,0],[0,0]],"o":[[0,-0.91],[0,0],[1.16,0],[0,0.89],[0,0],[0,0]],"v":[[145,90.52],[146.8,88.9],[150.59,88.9],[152.26,90.37],[150.52,91.77],[145,91.77]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,1.61],[2.11,0],[0,0],[0,-1.66],[0,0],[-2.2,0],[0,0],[0,0],[0,0],[0,0.7],[0,0]],"o":[[2.17,0],[0,-1.61],[0,0],[-2.2,0],[0,0],[0,1.67],[0,0],[0,0],[0,0],[-0.97,0],[0,0],[0,0]],"v":[[88.6,15.24],[91.6,12.71],[88.6,10],[85.75,10],[82.68,12.91],[82.68,15.91],[85.75,18.81],[91.16,18.81],[91.16,17.09],[85.76,17.09],[84.41,15.88],[84.41,15.24]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.97,0],[0,0],[0,-0.67],[0.95,0],[0,0]],"o":[[0,-0.68],[0,0],[0.87,0],[0,0.67],[0,0],[0,0]],"v":[[84.41,12.92],[85.77,11.71],[88.6,11.71],[89.86,12.81],[88.55,13.86],[84.41,13.86]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[105.77,8.25],[108.13,8.25],[108.13,25.08],[105.77,25.08]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.91],[0,0],[0,0],[0,-2.13],[-2.77,0],[0,0],[0,1.69],[0,0],[2.93,0]],"o":[[0,0],[0,0],[0,0],[1.29,0],[0,0],[0,0],[-2.89,0],[0,2.13],[0,0],[2,0],[0,0],[0.03,-2.22],[0,0]],"v":[[131.79,86.63],[124.79,86.63],[124.79,88.9],[131.79,88.9],[133.59,90.52],[133.59,91.41],[128,91.41],[124,94.79],[127.93,98.37],[133.43,98.37],[135.86,96.02],[135.85,90.5],[131.79,86.63]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0.47,0],[0,0],[0,0.87],[-1.24,0],[0,0]],"o":[[0,0.42],[0,0],[-1.18,0],[0,-0.87],[0,0],[0,0]],"v":[[133.57,95.48],[132.92,96.08],[128,96.08],[126.35,94.66],[128.04,93.28],[133.58,93.28]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.68],[0,0],[0,0],[0,-1.6],[-2.08,0],[0,0],[0,1.27],[0,0],[2.2,0]],"o":[[0,0],[0,0],[0,0],[0.97,0],[0,0],[0,0],[-2.17,0],[0,1.6],[0,0],[1.5,0],[0,0],[0.02,-1.66],[0,0]],"v":[[74.5,10],[69.25,10],[69.25,11.71],[74.5,11.71],[75.86,12.92],[75.86,13.59],[71.66,13.59],[68.66,16.12],[71.61,18.81],[75.74,18.81],[77.55,17.05],[77.55,12.91],[74.5,10]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0.35,0],[0,0],[0,0.65],[-0.93,0],[0,0]],"o":[[0,0.32],[0,0],[-0.89,0],[0,-0.65],[0,0],[0,0]],"v":[[75.84,16.64],[75.35,17.09],[71.66,17.09],[70.43,16.03],[71.69,14.99],[75.85,14.99]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0.91],[-1.4,0],[0,0],[0,0],[0,0],[0,-2.49],[-4,0],[0,0],[0,-0.98],[1.42,0],[0,0],[0,0],[0,0],[0,2.53],[4.1,0]],"o":[[0,0],[-1.75,0],[0,-0.91],[0,0],[0,0],[0,0],[-3.33,0],[0,2.09],[0,0],[1.85,0],[0,0.98],[0,0],[0,0],[0,0],[3.43,0],[0.02,-2.16],[0,0]],"v":[[117.75,89.55],[114.24,89.55],[112.02,87.77],[114.02,85.99],[121.71,85.99],[121.71,83.37],[114.1,83.37],[109.44,87.68],[114.37,92.01],[117.86,92.01],[120.22,93.88],[118.15,95.75],[109.71,95.75],[109.71,98.37],[118,98.37],[122.78,93.97],[117.75,89.55]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0.68],[-1.05,0],[0,0],[0,0],[0,0],[0,-1.87],[-3,0],[0,0],[0,-0.73],[1.06,0],[0,0],[0,0],[0,0],[0,1.9],[3.07,0]],"o":[[0,0],[-1.31,0],[0,-0.68],[0,0],[0,0],[0,0],[-2.5,0],[0,1.57],[0,0],[1.39,0],[0,0.73],[0,0],[0,0],[0,0],[2.57,0],[0.01,-1.62],[0,0]],"v":[[63.98,12.2],[61.34,12.2],[59.68,10.86],[61.18,9.52],[66.95,9.52],[66.95,7.56],[61.24,7.56],[57.74,10.79],[61.44,14.04],[64.06,14.04],[65.83,15.44],[64.28,16.84],[57.94,16.84],[57.94,18.81],[64.16,18.81],[67.75,15.51],[63.98,12.2]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[67.83,8.25],[70.19,8.25],[70.19,25.08],[67.83,25.08]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[1.87,0],[0,0],[0,1.34],[0,0],[0,0],[0,0],[-3.36,0],[0,0],[0,2.71],[0,0],[0,0]],"o":[[0,1.38],[0,0],[-1.87,0],[0,0],[0,0],[0,0],[0,2.71],[0,0],[3.36,0],[0,0],[0,0],[0,0]],"v":[[95.65,93.66],[92.78,96.08],[90.87,96.08],[88,93.66],[88,86.66],[85.6,86.66],[85.6,93.78],[90.69,98.4],[92.87,98.4],[97.96,93.78],[97.96,86.63],[95.65,86.63]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[1.4,0],[0,0],[0,1],[0,0],[0,0],[0,0],[-2.52,0],[0,0],[0,2.03],[0,0],[0,0]],"o":[[0,1.04],[0,0],[-1.4,0],[0,0],[0,0],[0,0],[0,2.03],[0,0],[2.52,0],[0,0],[0,0],[0,0]],"v":[[47.4,15.28],[45.25,17.09],[43.82,17.09],[41.66,15.28],[41.66,10.03],[39.86,10.03],[39.86,15.37],[43.68,18.83],[45.32,18.83],[49.13,15.37],[49.13,10],[47.4,10]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.91],[0,0],[0,0],[0,-2.13],[-2.78,0],[0,0],[0,1.69],[0,0],[2.93,0]],"o":[[0,0],[0,0],[0,0],[1.29,0],[0,0],[0,0],[-2.9,0],[0,2.13],[0,0],[2,0],[0,0],[0,-2.22],[0,0]],"v":[[79.24,86.63],[72.24,86.63],[72.24,88.9],[79.24,88.9],[81.05,90.52],[81.05,91.41],[75.44,91.41],[71.44,94.79],[75.37,98.37],[80.9,98.37],[83.33,96.02],[83.33,90.5],[79.24,86.63]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0.47,0],[0,0],[0,0.87],[-1.25,0],[0,0]],"o":[[0,0.42],[0,0],[-1.18,0],[0,-0.87],[0,0],[0,0]],"v":[[81,95.48],[80.35,96.08],[75.44,96.08],[73.79,94.66],[75.48,93.28],[81,93.28]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.68],[0,0],[0,0],[0,-1.6],[-2.09,0],[0,0],[0,1.27],[0,0],[2.2,0]],"o":[[0,0],[0,0],[0,0],[0.97,0],[0,0],[0,0],[-2.18,0],[0,1.6],[0,0],[1.5,0],[0,0],[0,-1.66],[0,0]],"v":[[35.09,10],[29.84,10],[29.84,11.71],[35.09,11.71],[36.45,12.92],[36.45,13.59],[32.24,13.59],[29.24,16.12],[32.19,18.81],[36.34,18.81],[38.16,17.05],[38.16,12.91],[35.09,10]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[0.35,0],[0,0],[0,0.65],[-0.94,0],[0,0]],"o":[[0,0.32],[0,0],[-0.89,0],[0,-0.65],[0,0],[0,0]],"v":[[36.41,16.64],[35.93,17.09],[32.24,17.09],[31,16.03],[32.27,14.99],[36.41,14.99]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.4,-0.39],[0.04,-0.55],[0.4,-0.4],[0.56,0.04],[0,0],[0,-1.69],[0,0],[0,0],[0,0],[-0.07,0.08],[-0.1,-0.02],[0,0],[-0.93,0.91],[0.08,1.29],[3.38,0]],"o":[[0,0],[0,0],[0,0],[0.55,-0.06],[0.4,0.39],[0.04,0.57],[-0.41,0.4],[0,0],[-1.65,0],[0,0],[0,0],[0,0],[-0.02,-0.1],[0.08,-0.07],[0,0],[1.29,0.11],[0.93,-0.9],[-0.04,-2.45],[0,0]],"v":[[66.27,83.37],[58.58,83.37],[58.58,86],[66.38,86],[67.88,86.52],[68.45,88],[67.88,89.51],[66.36,90.07],[61,90.07],[58.64,92.45],[58.64,98.38],[61.26,98.38],[61.26,93],[61.35,92.71],[61.64,92.62],[66.31,92.62],[69.8,91.36],[71.14,87.91],[66.27,83.37]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.3,-0.29],[0.03,-0.41],[0.3,-0.3],[0.42,0.03],[0,0],[0,-1.27],[0,0],[0,0],[0,0],[-0.05,0.06],[-0.08,-0.01],[0,0],[-0.7,0.68],[0.06,0.97],[2.54,0]],"o":[[0,0],[0,0],[0,0],[0.41,-0.04],[0.3,0.29],[0.03,0.43],[-0.3,0.3],[0,0],[-1.24,0],[0,0],[0,0],[0,0],[-0.02,-0.08],[0.06,-0.05],[0,0],[0.97,0.08],[0.7,-0.68],[-0.03,-1.84],[0,0]],"v":[[25.36,7.56],[19.6,7.56],[19.6,9.53],[25.45,9.53],[26.57,9.92],[27,11.03],[26.57,12.17],[25.43,12.59],[21.41,12.59],[19.64,14.37],[19.64,18.82],[21.61,18.82],[21.61,14.78],[21.68,14.57],[21.89,14.5],[25.39,14.5],[28.01,13.55],[29.02,10.96],[25.36,7.56]],"c":true}}},{"ty":"fl","o":{"k":100},"c":{"k":[0,0,0,1]}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[1.15,0],[0,0],[0,-0.91],[0,0],[0,0],[0,0.87]],"o":[[0,-0.89],[0,0],[-1.29,0],[0,0],[0,0],[1.29,0],[0,0]],"v":[[170.48,90.37],[168.82,88.9],[165,88.9],[163.2,90.52],[163.2,91.77],[168.71,91.77],[170.48,90.37]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[1.16,0],[0,0],[0,-0.91],[0,0],[0,0],[0,0.87]],"o":[[0,-0.89],[0,0],[-1.29,0],[0,0],[0,0],[1.27,0],[0,0]],"v":[[152.25,90.37],[150.58,88.9],[146.8,88.9],[145,90.52],[145,91.77],[150.51,91.77],[152.25,90.37]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.18,0],[0,0],[0,0.42],[0,0],[0,0],[0,-0.87]],"o":[[0,0.87],[0,0],[0.47,0],[0,0],[0,0],[-1.21,0],[0,0]],"v":[[126.34,94.66],[127.99,96.08],[132.92,96.08],[133.57,95.48],[133.57,93.28],[128,93.28],[126.34,94.66]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[16.97,5.66],[7.24,15.39],[13.05,15.39]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[7.08,30.45],[16.81,20.71],[11,20.71]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.18,0],[0,0],[0,0.42],[0,0],[0,0],[0,-0.87]],"o":[[0,0.87],[0,0],[0.47,0],[0,0],[0,0],[-1.25,0],[0,0]],"v":[[73.79,94.66],[75.44,96.08],[80.37,96.08],[81.02,95.48],[81.02,93.28],[75.48,93.28],[73.79,94.66]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[-24.34,-54.97]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[3.9,18.72],[18.8,18.72],[20.15,17.38],[5.25,17.38]],"c":true}}},{"ty":"st","lc":1,"lj":1,"ml":10,"o":{"k":100},"w":{"k":1},"c":{"k":[0.92,0.92,0.49,1]},"hd":false},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[75,75]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]}]}],"meta":{"g":"LF SVG to Lottie"}}');
;// CONCATENATED MODULE: ./src/components/nav-components/lottielogo.js
function LottieLogo(){const container=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{lottie_default().loadAnimation({container:container.current,renderer:'svg',loop:true,autoplay:true,animationData:paul_logo_namespaceObject});},[]);return/*#__PURE__*/index_js_default().createElement("div",{ref:container});}/* harmony default export */ const lottielogo = (LottieLogo);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
;// CONCATENATED MODULE: ./src/components/nav-components/topnavbar.js
const navigation=[{name:"Home",href:"/",icon:esm/* HomeIcon */.tvw,current:true},{name:"Blogs",href:"/",icon:esm/* AnnotationIcon */.rDX,current:false},{name:"White Papers",href:"/",icon:esm/* BookOpenIcon */.KNL,current:false},{name:"Services",href:"/",icon:esm/* CogIcon */.IEm,current:false},{name:"Support",href:"/",icon:esm/* GiftIcon */.OgN,current:false},{name:"Contact",href:"/contact",icon:esm/* MailOpenIcon */.RSW,current:false}];function classNames(...classes){return classes.filter(Boolean).join(" ");}function TopNavBar(){const{0:sidebarOpen,1:setSidebarOpen}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(Transition.Root,{show:sidebarOpen,as:index_js_.Fragment},/*#__PURE__*/index_js_default().createElement(Dialog,{as:"div",className:"fixed inset-0 flex z-40 md:hidden",onClose:setSidebarOpen},/*#__PURE__*/index_js_default().createElement(Transition.Child,{as:index_js_.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},/*#__PURE__*/index_js_default().createElement(Dialog.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})),/*#__PURE__*/index_js_default().createElement(Transition.Child,{as:index_js_.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},/*#__PURE__*/index_js_default().createElement("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-purple-900 shadow"},/*#__PURE__*/index_js_default().createElement(Transition.Child,{as:index_js_.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},/*#__PURE__*/index_js_default().createElement("div",{className:"absolute top-0 right-0 -mr-12 pt-2"},/*#__PURE__*/index_js_default().createElement("button",{type:"button",className:"group ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-purple-600",onClick:()=>setSidebarOpen(false)},/*#__PURE__*/index_js_default().createElement("span",{className:"sr-only"},"Close sidebar"),/*#__PURE__*/index_js_default().createElement(esm/* XIcon */.b0D,{className:"h-6 w-6 text-yellow-300 group-hover:text-white ","aria-hidden":"true"})))),/*#__PURE__*/index_js_default().createElement("div",{className:"object-contain content-center h-14"},/*#__PURE__*/index_js_default().createElement(lottielogo,null)),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-5 flex-1 h-0 overflow-y-auto"},/*#__PURE__*/index_js_default().createElement("nav",{className:"px-2 space-y-1"},navigation.map(item=>/*#__PURE__*/index_js_default().createElement("span",{className:"group"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{key:item.name,href:item.href,className:classNames(item.current?"border-white text-white items-center px-2 pt-2 border-b-2 text-sm font-medium":"text-yellow-300 hover:bg-purple-600 group-hover:text-white","group flex items-center px-2 py-2 text-base font-medium rounded-sm transition-all duration-200 ease-linear")},/*#__PURE__*/index_js_default().createElement(item.icon,{className:classNames(item.current?"text-white":"text-yellow-300 group-hover:text-white","mr-4 flex-shrink-0 h-6 w-6"),"aria-hidden":"true"}),item.name)))),/*#__PURE__*/index_js_default().createElement("div",{className:"italic flex font-medium items-center text-yellow-300 px-2 py-2 mt-10"},/*#__PURE__*/index_js_default().createElement("p",null,"\u201CIt seems to me that we are long overdue for some kind of Biblical-style Jubilee: one that would affect both international debt and consumer debt. It would be salutary not just because it would relieve so much genuine human suffering, but also because it would be our way of reminding ourselves that money is not ineffable, that paying one\u2019s debts is not the essence of morality, that all these things are human arrangements and that if democracy is to mean anything, it is the ability to all agree to arrange things in a different way.\u201D - Graeber, David. Debt (p. 390)"))))),/*#__PURE__*/index_js_default().createElement("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"sticky top-0 z-10 flex h-16 md:justify-center bg-purple-900 shadow"},/*#__PURE__*/index_js_default().createElement("button",{type:"button",className:"group px-4 text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden hover:bg-purple-600",onClick:()=>setSidebarOpen(true)},/*#__PURE__*/index_js_default().createElement("span",{className:"sr-only"},"Open sidebar"),/*#__PURE__*/index_js_default().createElement(esm/* MenuAlt2Icon */.fVG,{className:"h-6 w-6 group-hover:text-white ","aria-hidden":"true"})),/*#__PURE__*/index_js_default().createElement(lottielogo,{className:"w-5"}),navigation.map(item=>/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{key:item.name,href:item.href,className:classNames(item.current?"border-white text-white inline-flex items-center px-2 pt-2 border-b-2 text-sm font-medium":"text-yellow-300 hover:bg-purple-600 hover:text-white rounded-sm","hidden md:flex group items-center px-2 py-2 text-base font-medium transition-all duration-200 ease-linear")},/*#__PURE__*/index_js_default().createElement(item.icon,{className:classNames(item.current?"text-white":"text-yellow-300 group-hover:text-white","mr-4 flex-shrink-0 h-6 w-6 "),"aria-hidden":"true"}),item.name))));}

/***/ }),

/***/ 6179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2031);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function Seo({description,lang,meta,title}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_3__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s | ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}Seo.defaultProps={lang:`en`,meta:[],description:``};Seo.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 8140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "/Users/owner/paul-salele/frontend/node_modules/react/index.js"
var index_js_ = __webpack_require__(6283);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(6179);
// EXTERNAL MODULE: ./src/components/nav-components/topnavbar.js + 17 modules
var topnavbar = __webpack_require__(7317);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js
var _rollupPluginBabelHelpers = __webpack_require__(9642);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.esm.js
var render_esm = __webpack_require__(8529);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js
var use_sync_refs_esm = __webpack_require__(7471);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.esm.js
var keyboard_esm = __webpack_require__(2659);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.esm.js
var bugs_esm = __webpack_require__(9016);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.esm.js
var use_id_esm = __webpack_require__(2506);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/description/description.esm.js
var description_esm = __webpack_require__(7587);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js
var use_iso_morphic_effect_esm = __webpack_require__(852);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js



function resolveType(props) {
  var _props$as;

  if (props.type) return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : 'button';
  if (typeof tag === 'string' && tag.toLowerCase() === 'button') return 'button';
  return undefined;
}

function useResolveButtonType(props, ref) {
  var _useState = (0,index_js_.useState)(function () {
    return resolveType(props);
  }),
      type = _useState[0],
      setType = _useState[1];

  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    setType(resolveType(props));
  }, [props.type, props.as]);
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    if (type) return;
    if (!ref.current) return;

    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute('type')) {
      setType('button');
    }
  }, [type, ref]);
  return type;
}


//# sourceMappingURL=use-resolve-button-type.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/label/label.esm.js






var LabelContext = /*#__PURE__*/(0,index_js_.createContext)(null);

function useLabelContext() {
  var context = (0,index_js_.useContext)(LabelContext);

  if (context === null) {
    var err = new Error('You used a <Label /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useLabelContext);
    throw err;
  }

  return context;
}

function useLabels() {
  var _useState = (0,index_js_.useState)([]),
      labelIds = _useState[0],
      setLabelIds = _useState[1];

  return [// The actual id's as string or undefined.
  labelIds.length > 0 ? labelIds.join(' ') : undefined, // The provider component
  (0,index_js_.useMemo)(function () {
    return function LabelProvider(props) {
      var register = (0,index_js_.useCallback)(function (value) {
        setLabelIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setLabelIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,index_js_.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return index_js_default().createElement(LabelContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setLabelIds])];
} // ---

var DEFAULT_LABEL_TAG = 'label';
function Label(props) {
  var _props$passive = props.passive,
      passive = _props$passive === void 0 ? false : _props$passive,
      passThroughProps = (0,_rollupPluginBabelHelpers/* objectWithoutPropertiesLoose */.gK)(props, ["passive"]);

  var context = useLabelContext();
  var id = "headlessui-label-" + (0,use_id_esm/* useId */.M)();
  (0,use_iso_morphic_effect_esm/* useIsoMorphicEffect */.e)(function () {
    return context.register(id);
  }, [id, context.register]);

  var propsWeControl = (0,_rollupPluginBabelHelpers/* extends */.gY)({}, context.props, {
    id: id
  });

  var allProps = (0,_rollupPluginBabelHelpers/* extends */.gY)({}, passThroughProps, propsWeControl); // @ts-expect-error props are dynamic via context, some components will
  //                  provide an onClick then we can delete it.


  if (passive) delete allProps['onClick'];
  return (0,render_esm/* render */.sY)({
    props: allProps,
    slot: context.slot || {},
    defaultTag: DEFAULT_LABEL_TAG,
    name: context.name || 'Label'
  });
}


//# sourceMappingURL=label.esm.js.map

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/switch/switch.esm.js











var GroupContext = /*#__PURE__*/(0,index_js_.createContext)(null);
GroupContext.displayName = 'GroupContext'; // ---

var DEFAULT_GROUP_TAG = index_js_.Fragment;

function Group(props) {
  var _useState = (0,index_js_.useState)(null),
      switchElement = _useState[0],
      setSwitchElement = _useState[1];

  var _useLabels = useLabels(),
      labelledby = _useLabels[0],
      LabelProvider = _useLabels[1];

  var _useDescriptions = (0,description_esm/* useDescriptions */.f)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var context = (0,index_js_.useMemo)(function () {
    return {
      "switch": switchElement,
      setSwitch: setSwitchElement,
      labelledby: labelledby,
      describedby: describedby
    };
  }, [switchElement, setSwitchElement, labelledby, describedby]);
  return index_js_default().createElement(DescriptionProvider, {
    name: "Switch.Description"
  }, index_js_default().createElement(LabelProvider, {
    name: "Switch.Label",
    props: {
      onClick: function onClick() {
        if (!switchElement) return;
        switchElement.click();
        switchElement.focus({
          preventScroll: true
        });
      }
    }
  }, index_js_default().createElement(GroupContext.Provider, {
    value: context
  }, (0,render_esm/* render */.sY)({
    props: props,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Switch.Group'
  }))));
} // ---


var DEFAULT_SWITCH_TAG = 'button';
function Switch(props) {
  var checked = props.checked,
      onChange = props.onChange,
      passThroughProps = (0,_rollupPluginBabelHelpers/* objectWithoutPropertiesLoose */.gK)(props, ["checked", "onChange"]);

  var id = "headlessui-switch-" + (0,use_id_esm/* useId */.M)();
  var groupContext = (0,index_js_.useContext)(GroupContext);
  var internalSwitchRef = (0,index_js_.useRef)(null);
  var switchRef = (0,use_sync_refs_esm/* useSyncRefs */.T)(internalSwitchRef, groupContext === null ? null : groupContext.setSwitch);
  var toggle = (0,index_js_.useCallback)(function () {
    return onChange(!checked);
  }, [onChange, checked]);
  var handleClick = (0,index_js_.useCallback)(function (event) {
    if ((0,bugs_esm/* isDisabledReactIssue7711 */.P)(event.currentTarget)) return event.preventDefault();
    event.preventDefault();
    toggle();
  }, [toggle]);
  var handleKeyUp = (0,index_js_.useCallback)(function (event) {
    if (event.key !== keyboard_esm/* Keys.Tab */.R.Tab) event.preventDefault();
    if (event.key === keyboard_esm/* Keys.Space */.R.Space) toggle();
  }, [toggle]); // This is needed so that we can "cancel" the click event when we use the `Enter` key on a button.

  var handleKeyPress = (0,index_js_.useCallback)(function (event) {
    return event.preventDefault();
  }, []);
  var slot = (0,index_js_.useMemo)(function () {
    return {
      checked: checked
    };
  }, [checked]);
  var propsWeControl = {
    id: id,
    ref: switchRef,
    role: 'switch',
    type: useResolveButtonType(props, internalSwitchRef),
    tabIndex: 0,
    'aria-checked': checked,
    'aria-labelledby': groupContext == null ? void 0 : groupContext.labelledby,
    'aria-describedby': groupContext == null ? void 0 : groupContext.describedby,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress
  };
  return (0,render_esm/* render */.sY)({
    props: (0,_rollupPluginBabelHelpers/* extends */.gY)({}, passThroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_SWITCH_TAG,
    name: 'Switch'
  });
} // ---

Switch.Group = Group;
Switch.Label = Label;
Switch.Description = description_esm/* Description */.d;


//# sourceMappingURL=switch.esm.js.map

;// CONCATENATED MODULE: ./src/components/contact-components/contact-component.js
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/function classNames(...classes){return classes.filter(Boolean).join(' ');}function ContactComponent(){const{0:agreed,1:setAgreed}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("div",{className:"bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"},/*#__PURE__*/index_js_default().createElement("div",{className:"relative max-w-xl mx-auto"},/*#__PURE__*/index_js_default().createElement("svg",{className:"absolute left-full transform translate-x-1/2",width:404,height:404,fill:"none",viewBox:"0 0 404 404","aria-hidden":"true"},/*#__PURE__*/index_js_default().createElement("defs",null,/*#__PURE__*/index_js_default().createElement("pattern",{id:"85737c0e-0916-41d7-917f-596dc7edfa27",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse"},/*#__PURE__*/index_js_default().createElement("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"}))),/*#__PURE__*/index_js_default().createElement("rect",{width:404,height:404,fill:"url(#85737c0e-0916-41d7-917f-596dc7edfa27)"})),/*#__PURE__*/index_js_default().createElement("svg",{className:"absolute right-full bottom-0 transform -translate-x-1/2",width:404,height:404,fill:"none",viewBox:"0 0 404 404","aria-hidden":"true"},/*#__PURE__*/index_js_default().createElement("defs",null,/*#__PURE__*/index_js_default().createElement("pattern",{id:"85737c0e-0916-41d7-917f-596dc7edfa27",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse"},/*#__PURE__*/index_js_default().createElement("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"}))),/*#__PURE__*/index_js_default().createElement("rect",{width:404,height:404,fill:"url(#85737c0e-0916-41d7-917f-596dc7edfa27)"})),/*#__PURE__*/index_js_default().createElement("div",{className:"text-center"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},"Contact sales"),/*#__PURE__*/index_js_default().createElement("p",{className:"mt-4 text-lg leading-6 text-gray-500"},"Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.")),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-12"},/*#__PURE__*/index_js_default().createElement("form",{action:"#",method:"POST",className:"grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"first-name",className:"block text-sm font-medium text-gray-700"},"First name"),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-1"},/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"first-name",id:"first-name",autoComplete:"given-name",className:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"last-name",className:"block text-sm font-medium text-gray-700"},"Last name"),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-1"},/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"last-name",id:"last-name",autoComplete:"family-name",className:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"sm:col-span-2"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700"},"Company"),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-1"},/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"company",id:"company",autoComplete:"organization",className:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"sm:col-span-2"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700"},"Email"),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-1"},/*#__PURE__*/index_js_default().createElement("input",{id:"email",name:"email",type:"email",autoComplete:"email",className:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"sm:col-span-2"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"phone-number",className:"block text-sm font-medium text-gray-700"},"Phone Number"),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-1 relative rounded-md shadow-sm"},/*#__PURE__*/index_js_default().createElement("div",{className:"absolute inset-y-0 left-0 flex items-center"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"country",className:"sr-only"},"Country"),/*#__PURE__*/index_js_default().createElement("select",{id:"country",name:"country",className:"h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"},/*#__PURE__*/index_js_default().createElement("option",null,"US"),/*#__PURE__*/index_js_default().createElement("option",null,"CA"),/*#__PURE__*/index_js_default().createElement("option",null,"EU"))),/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"phone-number",id:"phone-number",autoComplete:"tel",className:"py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",placeholder:"+1 (555) 987-6543"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"sm:col-span-2"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700"},"Message"),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-1"},/*#__PURE__*/index_js_default().createElement("textarea",{id:"message",name:"message",rows:4,className:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md",defaultValue:''}))),/*#__PURE__*/index_js_default().createElement("div",{className:"sm:col-span-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex items-start"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex-shrink-0"},/*#__PURE__*/index_js_default().createElement(Switch,{checked:agreed,onChange:setAgreed,className:classNames(agreed?'bg-indigo-600':'bg-gray-200','relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500')},/*#__PURE__*/index_js_default().createElement("span",{className:"sr-only"},"Agree to policies"),/*#__PURE__*/index_js_default().createElement("span",{"aria-hidden":"true",className:classNames(agreed?'translate-x-5':'translate-x-0','inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')}))),/*#__PURE__*/index_js_default().createElement("div",{className:"ml-3"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-base text-gray-500"},"By selecting this, you agree to the",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"#",className:"font-medium text-gray-700 underline"},"Privacy Policy"),' ',"and",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"#",className:"font-medium text-gray-700 underline"},"Cookie Policy"),".")))),/*#__PURE__*/index_js_default().createElement("div",{className:"sm:col-span-2"},/*#__PURE__*/index_js_default().createElement("button",{type:"submit",className:"w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Let's talk"))))));}
;// CONCATENATED MODULE: ./src/pages/contact.js
const Contact=()=>/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement(topnavbar/* default */.Z,null,/*#__PURE__*/index_js_.createElement(seo/* default */.Z,{title:"Contact"})),/*#__PURE__*/index_js_.createElement(ContactComponent,null));/* harmony default export */ const contact = (Contact);

/***/ }),

/***/ 1248:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(typeof navigator !== "undefined") && (function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return factory(root);
        }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}((window || {}), function(window) {
	/* global locationHref:writable, animationManager, subframeEnabled:writable, defaultCurveSegments:writable, roundValues,
expressionsPlugin:writable, PropertyFactory, ShapePropertyFactory, Matrix, idPrefix:writable */
/* exported locationHref, subframeEnabled, expressionsPlugin, idPrefix */

'use strict';

/* exported svgNS, locationHref, initialDefaultFrame */

var svgNS = 'http://www.w3.org/2000/svg';

var locationHref = '';

var initialDefaultFrame = -999999;

/* global createSizedArray */
/* exported subframeEnabled, expressionsPlugin, isSafari, cachedColors, bmPow, bmSqrt, bmFloor, bmMax, bmMin, ProjectInterface,
defaultCurveSegments, degToRads, roundCorner, bmRnd, styleDiv, BMEnterFrameEvent, BMCompleteEvent, BMCompleteLoopEvent,
BMSegmentStartEvent, BMDestroyEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent, BMAnimationConfigErrorEvent, createElementID,
addSaturationToRGB, addBrightnessToRGB, addHueToRGB, rgbToHex */

var subframeEnabled = true;
var idPrefix = '';
var expressionsPlugin;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var cachedColors = {};
var bmRnd;
var bmPow = Math.pow;
var bmSqrt = Math.sqrt;
var bmFloor = Math.floor;
var bmMax = Math.max;
var bmMin = Math.min;

var BMMath = {};
(function () {
  var propertyNames = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'];
  var i;
  var len = propertyNames.length;
  for (i = 0; i < len; i += 1) {
    BMMath[propertyNames[i]] = Math[propertyNames[i]];
  }
}());

function ProjectInterface() { return {}; }

BMMath.random = Math.random;
BMMath.abs = function (val) {
  var tOfVal = typeof val;
  if (tOfVal === 'object' && val.length) {
    var absArr = createSizedArray(val.length);
    var i;
    var len = val.length;
    for (i = 0; i < len; i += 1) {
      absArr[i] = Math.abs(val[i]);
    }
    return absArr;
  }
  return Math.abs(val);
};
var defaultCurveSegments = 150;
var degToRads = Math.PI / 180;
var roundCorner = 0.5519;

function roundValues(flag) {
  if (flag) {
    bmRnd = Math.round;
  } else {
    bmRnd = function (val) {
      return val;
    };
  }
}
roundValues(false);

function styleDiv(element) {
  element.style.position = 'absolute';
  element.style.top = 0;
  element.style.left = 0;
  element.style.display = 'block';
  element.style.transformOrigin = '0 0';
  element.style.webkitTransformOrigin = '0 0';
  element.style.backfaceVisibility = 'visible';
  element.style.webkitBackfaceVisibility = 'visible';
  element.style.transformStyle = 'preserve-3d';
  element.style.webkitTransformStyle = 'preserve-3d';
  element.style.mozTransformStyle = 'preserve-3d';
}

function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
  this.type = type;
  this.currentTime = currentTime;
  this.totalTime = totalTime;
  this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMCompleteEvent(type, frameMultiplier) {
  this.type = type;
  this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
  this.type = type;
  this.currentLoop = currentLoop;
  this.totalLoops = totalLoops;
  this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMSegmentStartEvent(type, firstFrame, totalFrames) {
  this.type = type;
  this.firstFrame = firstFrame;
  this.totalFrames = totalFrames;
}

function BMDestroyEvent(type, target) {
  this.type = type;
  this.target = target;
}

function BMRenderFrameErrorEvent(nativeError, currentTime) {
  this.type = 'renderFrameError';
  this.nativeError = nativeError;
  this.currentTime = currentTime;
}

function BMConfigErrorEvent(nativeError) {
  this.type = 'configError';
  this.nativeError = nativeError;
}

function BMAnimationConfigErrorEvent(type, nativeError) {
  this.type = type;
  this.nativeError = nativeError;
}

var createElementID = (function () {
  var _count = 0;
  return function createID() {
    _count += 1;
    return idPrefix + '__lottie_element_' + _count;
  };
}());

function HSVtoRGB(h, s, v) {
  var r;
  var g;
  var b;
  var i;
  var f;
  var p;
  var q;
  var t;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    default: break;
  }
  return [r,
    g,
    b];
}

function RGBtoHSV(r, g, b) {
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var d = max - min;
  var h;
  var s = (max === 0 ? 0 : d / max);
  var v = max / 255;

  switch (max) {
    case min: h = 0; break;
    case r: h = (g - b) + d * (g < b ? 6 : 0); h /= 6 * d; break;
    case g: h = (b - r) + d * 2; h /= 6 * d; break;
    case b: h = (r - g) + d * 4; h /= 6 * d; break;
    default: break;
  }

  return [
    h,
    s,
    v,
  ];
}

function addSaturationToRGB(color, offset) {
  var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
  hsv[1] += offset;
  if (hsv[1] > 1) {
    hsv[1] = 1;
  } else if (hsv[1] <= 0) {
    hsv[1] = 0;
  }
  return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
}

function addBrightnessToRGB(color, offset) {
  var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
  hsv[2] += offset;
  if (hsv[2] > 1) {
    hsv[2] = 1;
  } else if (hsv[2] < 0) {
    hsv[2] = 0;
  }
  return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
}

function addHueToRGB(color, offset) {
  var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
  hsv[0] += offset / 360;
  if (hsv[0] > 1) {
    hsv[0] -= 1;
  } else if (hsv[0] < 0) {
    hsv[0] += 1;
  }
  return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
}

var rgbToHex = (function () {
  var colorMap = [];
  var i;
  var hex;
  for (i = 0; i < 256; i += 1) {
    hex = i.toString(16);
    colorMap[i] = hex.length === 1 ? '0' + hex : hex;
  }

  return function (r, g, b) {
    if (r < 0) {
      r = 0;
    }
    if (g < 0) {
      g = 0;
    }
    if (b < 0) {
      b = 0;
    }
    return '#' + colorMap[r] + colorMap[g] + colorMap[b];
  };
}());

function BaseEvent() {}
BaseEvent.prototype = {
  triggerEvent: function (eventName, args) {
    if (this._cbs[eventName]) {
      var callbacks = this._cbs[eventName];
      for (var i = 0; i < callbacks.length; i += 1) {
        callbacks[i](args);
      }
    }
  },
  addEventListener: function (eventName, callback) {
    if (!this._cbs[eventName]) {
      this._cbs[eventName] = [];
    }
    this._cbs[eventName].push(callback);

    return function () {
      this.removeEventListener(eventName, callback);
    }.bind(this);
  },
  removeEventListener: function (eventName, callback) {
    if (!callback) {
      this._cbs[eventName] = null;
    } else if (this._cbs[eventName]) {
      var i = 0;
      var len = this._cbs[eventName].length;
      while (i < len) {
        if (this._cbs[eventName][i] === callback) {
          this._cbs[eventName].splice(i, 1);
          i -= 1;
          len -= 1;
        }
        i += 1;
      }
      if (!this._cbs[eventName].length) {
        this._cbs[eventName] = null;
      }
    }
  },
};

/* exported createTypedArray, createSizedArray */

var createTypedArray = (function () {
  function createRegularArray(type, len) {
    var i = 0;
    var arr = [];
    var value;
    switch (type) {
      case 'int16':
      case 'uint8c':
        value = 1;
        break;
      default:
        value = 1.1;
        break;
    }
    for (i = 0; i < len; i += 1) {
      arr.push(value);
    }
    return arr;
  }
  function createTypedArrayFactory(type, len) {
    if (type === 'float32') {
      return new Float32Array(len);
    } if (type === 'int16') {
      return new Int16Array(len);
    } if (type === 'uint8c') {
      return new Uint8ClampedArray(len);
    }
    return createRegularArray(type, len);
  }
  if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
    return createTypedArrayFactory;
  }
  return createRegularArray;
}());

function createSizedArray(len) {
  return Array.apply(null, { length: len });
}

/* global svgNS */
/* exported createNS */

function createNS(type) {
  // return {appendChild:function(){},setAttribute:function(){},style:{}}
  return document.createElementNS(svgNS, type);
}

/* exported createTag */

function createTag(type) {
  // return {appendChild:function(){},setAttribute:function(){},style:{}}
  return document.createElement(type);
}

function DynamicPropertyContainer() {}
DynamicPropertyContainer.prototype = {
  addDynamicProperty: function (prop) {
    if (this.dynamicProperties.indexOf(prop) === -1) {
      this.dynamicProperties.push(prop);
      this.container.addDynamicProperty(this);
      this._isAnimated = true;
    }
  },
  iterateDynamicProperties: function () {
    this._mdf = false;
    var i;
    var len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
      if (this.dynamicProperties[i]._mdf) {
        this._mdf = true;
      }
    }
  },
  initDynamicPropertyContainer: function (container) {
    this.container = container;
    this.dynamicProperties = [];
    this._mdf = false;
    this._isAnimated = false;
  },
};

/* exported getBlendMode */

var getBlendMode = (function () {
  var blendModeEnums = {
    0: 'source-over',
    1: 'multiply',
    2: 'screen',
    3: 'overlay',
    4: 'darken',
    5: 'lighten',
    6: 'color-dodge',
    7: 'color-burn',
    8: 'hard-light',
    9: 'soft-light',
    10: 'difference',
    11: 'exclusion',
    12: 'hue',
    13: 'saturation',
    14: 'color',
    15: 'luminosity',
  };

  return function (mode) {
    return blendModeEnums[mode] || '';
  };
}());

/* exported lineCapEnum, lineJoinEnum */

var lineCapEnum = {
  1: 'butt',
  2: 'round',
  3: 'square',
};

var lineJoinEnum = {
  1: 'miter',
  2: 'round',
  3: 'bevel',
};

/* global createTypedArray */

/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */

/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * All values are handled as floating point values.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 */

var Matrix = (function () {
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _tan = Math.tan;
  var _rnd = Math.round;

  function reset() {
    this.props[0] = 1;
    this.props[1] = 0;
    this.props[2] = 0;
    this.props[3] = 0;
    this.props[4] = 0;
    this.props[5] = 1;
    this.props[6] = 0;
    this.props[7] = 0;
    this.props[8] = 0;
    this.props[9] = 0;
    this.props[10] = 1;
    this.props[11] = 0;
    this.props[12] = 0;
    this.props[13] = 0;
    this.props[14] = 0;
    this.props[15] = 1;
    return this;
  }

  function rotate(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  function rotateX(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
  }

  function rotateY(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
  }

  function rotateZ(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  function shear(sx, sy) {
    return this._t(1, sy, sx, 1, 0, 0);
  }

  function skew(ax, ay) {
    return this.shear(_tan(ax), _tan(ay));
  }

  function skewFromAxis(ax, angle) {
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      ._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      ._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
  }

  function scale(sx, sy, sz) {
    if (!sz && sz !== 0) {
      sz = 1;
    }
    if (sx === 1 && sy === 1 && sz === 1) {
      return this;
    }
    return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
  }

  function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    this.props[0] = a;
    this.props[1] = b;
    this.props[2] = c;
    this.props[3] = d;
    this.props[4] = e;
    this.props[5] = f;
    this.props[6] = g;
    this.props[7] = h;
    this.props[8] = i;
    this.props[9] = j;
    this.props[10] = k;
    this.props[11] = l;
    this.props[12] = m;
    this.props[13] = n;
    this.props[14] = o;
    this.props[15] = p;
    return this;
  }

  function translate(tx, ty, tz) {
    tz = tz || 0;
    if (tx !== 0 || ty !== 0 || tz !== 0) {
      return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
    }
    return this;
  }

  function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
    var _p = this.props;

    if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
      // NOTE: commenting this condition because TurboFan deoptimizes code when present
      // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
      _p[12] = _p[12] * a2 + _p[15] * m2;
      _p[13] = _p[13] * f2 + _p[15] * n2;
      _p[14] = _p[14] * k2 + _p[15] * o2;
      _p[15] *= p2;
      // }
      this._identityCalculated = false;
      return this;
    }

    var a1 = _p[0];
    var b1 = _p[1];
    var c1 = _p[2];
    var d1 = _p[3];
    var e1 = _p[4];
    var f1 = _p[5];
    var g1 = _p[6];
    var h1 = _p[7];
    var i1 = _p[8];
    var j1 = _p[9];
    var k1 = _p[10];
    var l1 = _p[11];
    var m1 = _p[12];
    var n1 = _p[13];
    var o1 = _p[14];
    var p1 = _p[15];

    /* matrix order (canvas compatible):
         * ace
         * bdf
         * 001
         */
    _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
    _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
    _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
    _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;

    _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
    _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
    _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
    _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;

    _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
    _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
    _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
    _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;

    _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
    _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
    _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
    _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;

    this._identityCalculated = false;
    return this;
  }

  function isIdentity() {
    if (!this._identityCalculated) {
      this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
      this._identityCalculated = true;
    }
    return this._identity;
  }

  function equals(matr) {
    var i = 0;
    while (i < 16) {
      if (matr.props[i] !== this.props[i]) {
        return false;
      }
      i += 1;
    }
    return true;
  }

  function clone(matr) {
    var i;
    for (i = 0; i < 16; i += 1) {
      matr.props[i] = this.props[i];
    }
    return matr;
  }

  function cloneFromProps(props) {
    var i;
    for (i = 0; i < 16; i += 1) {
      this.props[i] = props[i];
    }
  }

  function applyToPoint(x, y, z) {
    return {
      x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
      y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
      z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14],
    };
    /* return {
         x: x * me.a + y * me.c + me.e,
         y: x * me.b + y * me.d + me.f
         }; */
  }
  function applyToX(x, y, z) {
    return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
  }
  function applyToY(x, y, z) {
    return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
  }
  function applyToZ(x, y, z) {
    return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
  }

  function getInverseMatrix() {
    var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
    var a = this.props[5] / determinant;
    var b = -this.props[1] / determinant;
    var c = -this.props[4] / determinant;
    var d = this.props[0] / determinant;
    var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
    var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
    var inverseMatrix = new Matrix();
    inverseMatrix.props[0] = a;
    inverseMatrix.props[1] = b;
    inverseMatrix.props[4] = c;
    inverseMatrix.props[5] = d;
    inverseMatrix.props[12] = e;
    inverseMatrix.props[13] = f;
    return inverseMatrix;
  }

  function inversePoint(pt) {
    var inverseMatrix = this.getInverseMatrix();
    return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
  }

  function inversePoints(pts) {
    var i;
    var len = pts.length;
    var retPts = [];
    for (i = 0; i < len; i += 1) {
      retPts[i] = inversePoint(pts[i]);
    }
    return retPts;
  }

  function applyToTriplePoints(pt1, pt2, pt3) {
    var arr = createTypedArray('float32', 6);
    if (this.isIdentity()) {
      arr[0] = pt1[0];
      arr[1] = pt1[1];
      arr[2] = pt2[0];
      arr[3] = pt2[1];
      arr[4] = pt3[0];
      arr[5] = pt3[1];
    } else {
      var p0 = this.props[0];
      var p1 = this.props[1];
      var p4 = this.props[4];
      var p5 = this.props[5];
      var p12 = this.props[12];
      var p13 = this.props[13];
      arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
      arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
      arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
      arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
      arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
      arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
    }
    return arr;
  }

  function applyToPointArray(x, y, z) {
    var arr;
    if (this.isIdentity()) {
      arr = [x, y, z];
    } else {
      arr = [
        x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
        x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
        x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14],
      ];
    }
    return arr;
  }

  function applyToPointStringified(x, y) {
    if (this.isIdentity()) {
      return x + ',' + y;
    }
    var _p = this.props;
    return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
  }

  function toCSS() {
    // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
    /* if(this.isIdentity()) {
            return '';
        } */
    var i = 0;
    var props = this.props;
    var cssValue = 'matrix3d(';
    var v = 10000;
    while (i < 16) {
      cssValue += _rnd(props[i] * v) / v;
      cssValue += i === 15 ? ')' : ',';
      i += 1;
    }
    return cssValue;
  }

  function roundMatrixProperty(val) {
    var v = 10000;
    if ((val < 0.000001 && val > 0) || (val > -0.000001 && val < 0)) {
      return _rnd(val * v) / v;
    }
    return val;
  }

  function to2dCSS() {
    // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
    /* if(this.isIdentity()) {
            return '';
        } */
    var props = this.props;
    var _a = roundMatrixProperty(props[0]);
    var _b = roundMatrixProperty(props[1]);
    var _c = roundMatrixProperty(props[4]);
    var _d = roundMatrixProperty(props[5]);
    var _e = roundMatrixProperty(props[12]);
    var _f = roundMatrixProperty(props[13]);
    return 'matrix(' + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ')';
  }

  return function () {
    this.reset = reset;
    this.rotate = rotate;
    this.rotateX = rotateX;
    this.rotateY = rotateY;
    this.rotateZ = rotateZ;
    this.skew = skew;
    this.skewFromAxis = skewFromAxis;
    this.shear = shear;
    this.scale = scale;
    this.setTransform = setTransform;
    this.translate = translate;
    this.transform = transform;
    this.applyToPoint = applyToPoint;
    this.applyToX = applyToX;
    this.applyToY = applyToY;
    this.applyToZ = applyToZ;
    this.applyToPointArray = applyToPointArray;
    this.applyToTriplePoints = applyToTriplePoints;
    this.applyToPointStringified = applyToPointStringified;
    this.toCSS = toCSS;
    this.to2dCSS = to2dCSS;
    this.clone = clone;
    this.cloneFromProps = cloneFromProps;
    this.equals = equals;
    this.inversePoints = inversePoints;
    this.inversePoint = inversePoint;
    this.getInverseMatrix = getInverseMatrix;
    this._t = this.transform;
    this.isIdentity = isIdentity;
    this._identity = true;
    this._identityCalculated = false;

    this.props = createTypedArray('float32', 16);
    this.reset();
  };
}());

/* eslint-disable */
/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
    var global = this,
        width = 256,        // each RC4 output is 0 <= x < 256
        chunks = 6,         // at least six RC4 outputs for each double
        digits = 52,        // there are 52 significant digits in a double
        rngname = 'random', // rngname: name for Math.random and Math.seedrandom
        startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
    function seedrandom(seed, options, callback) {
        var key = [];
        options = (options === true) ? { entropy: true } : (options || {});

        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] :
                (seed === null) ? autoseed() : seed, 3), key);

        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);

        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
                d = startdenom,                 //   and denominator d = 2 ^ 48.
                x = 0;                          //   and no 'extra last byte'.
            while (n < significance) {          // Fill up all significant digits by
                n = (n + x) * width;              //   shifting numerator and
                d *= width;                       //   denominator and generating a
                x = arc4.g(1);                    //   new least-significant-byte.
            }
            while (n >= overflow) {             // To avoid rounding up, before adding
                n /= 2;                           //   last byte, shift everything
                d /= 2;                           //   right using integer math until
                x >>>= 1;                         //   we have exactly the desired bits.
            }
            return (n + x) / d;                 // Form the number within [0, 1).
        };

        prng.int32 = function() { return arc4.g(4) | 0; };
        prng.quick = function() { return arc4.g(4) / 0x100000000; };
        prng.double = prng;

        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);

        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback ||
        function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) { copy(state, arc4); }
                // Only provide the .state method if requested via options.state.
                prng.state = function() { return copy(arc4, {}); };
            }

            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) { math[rngname] = prng; return seed; }

            // Otherwise, it is a newer calling convention, so return the
            // prng directly.
            else return prng;
        })(
            prng,
            shortseed,
            'global' in options ? options.global : (this == math),
            options.state);
    }
    math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
    function ARC4(key) {
        var t, keylen = key.length,
            me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

        // The empty key [] is treated as [0].
        if (!keylen) { key = [keylen++]; }

        // Set up S using the standard key scheduling algorithm.
        while (i < width) {
            s[i] = i++;
        }
        for (i = 0; i < width; i++) {
            s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
            s[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0,
                i = me.i, j = me.j, s = me.S;
            while (count--) {
                t = s[i = mask & (i + 1)];
                r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
            }
            me.i = i; me.j = j;
            return r;
            // For robust unpredictability, the function call below automatically
            // discards an initial batch of values.  This is called RC4-drop[256].
            // See http://google.com/search?q=rsa+fluhrer+response&btnI
        };
    }

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
    function flatten(obj, depth) {
        var result = [], typ = (typeof obj), prop;
        if (depth && typ == 'object') {
            for (prop in obj) {
                try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
            }
        }
        return (result.length ? result : typ == 'string' ? obj : obj + '\0');
    }

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while (j < stringseed.length) {
            key[mask & j] =
                mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
        }
        return tostring(key);
    }

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
    function autoseed() {
        try {
            if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)); }
            var out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
            return tostring(out);
        } catch (e) {
            var browser = global.navigator,
                plugins = browser && browser.plugins;
            return [+new Date(), global, plugins, global.screen, tostring(pool)];
        }
    }

//
// tostring()
// Converts an array of charcodes to a string
//
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
    mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//

// End anonymous scope, and pass initial values.
})(
    [],     // pool: entropy pool starts empty
    BMMath    // math: package containing random, pow, and seedrandom
);
/* eslint-disable */
var BezierFactory = (function () {
  /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
     * spline.get(x) => returns the easing value | x must be in [0, 1] range
     *
     */

  var ob = {};
  ob.getBezierEasing = getBezierEasing;
  var beziers = {};

  function getBezierEasing(a, b, c, d, nm) {
    var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');
    if (beziers[str]) {
      return beziers[str];
    }
    var bezEasing = new BezierEasing([a, b, c, d]);
    beziers[str] = bezEasing;
    return bezEasing;
  }

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === 'function';

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
  function C(aA1) { return 3.0 * aA1; }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
      currentT,
      i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) return aGuessT;
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  /**
     * points is an array of [ mX1, mY1, mX2, mY2 ]
     */
  function BezierEasing(points) {
    this._p = points;
    this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    this._precomputed = false;

    this.get = this.get.bind(this);
  }

  BezierEasing.prototype = {

    get: function (x) {
      var mX1 = this._p[0],
        mY1 = this._p[1],
        mX2 = this._p[2],
        mY2 = this._p[3];
      if (!this._precomputed) this._precompute();
      if (mX1 === mY1 && mX2 === mY2) return x; // linear
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (x === 0) return 0;
      if (x === 1) return 1;
      return calcBezier(this._getTForX(x), mY1, mY2);
    },

    // Private part

    _precompute: function () {
      var mX1 = this._p[0],
        mY1 = this._p[1],
        mX2 = this._p[2],
        mY2 = this._p[3];
      this._precomputed = true;
      if (mX1 !== mY1 || mX2 !== mY2) { this._calcSampleValues(); }
    },

    _calcSampleValues: function () {
      var mX1 = this._p[0],
        mX2 = this._p[2];
      for (var i = 0; i < kSplineTableSize; ++i) {
        this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    },

    /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
    _getTForX: function (aX) {
      var mX1 = this._p[0],
        mX2 = this._p[2],
        mSampleValues = this._mSampleValues;

      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } if (initialSlope === 0.0) {
        return guessForT;
      }
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    },
  };

  return ob;
}());

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) { // eslint-disable-line no-plusplus
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function () {
        callback(currTime + timeToCall);
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());

/* exported extendPrototype, getDescriptor, createProxyFunction */

function extendPrototype(sources, destination) {
  var i;
  var len = sources.length;
  var sourcePrototype;
  for (i = 0; i < len; i += 1) {
    sourcePrototype = sources[i].prototype;
    for (var attr in sourcePrototype) {
      if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
    }
  }
}

function getDescriptor(object, prop) {
  return Object.getOwnPropertyDescriptor(object, prop);
}

function createProxyFunction(prototype) {
  function ProxyFunction() {}
  ProxyFunction.prototype = prototype;
  return ProxyFunction;
}

/* global segmentsLengthPool, defaultCurveSegments, createSizedArray, bmPow, bmSqrt, bmFloor, createTypedArray, bezierLengthPool */
/* exported bez */

function bezFunction() {
  var math = Math;

  function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
    var det1 = (x1 * y2) + (y1 * x3) + (x2 * y3) - (x3 * y2) - (y3 * x1) - (x2 * y1);
    return det1 > -0.001 && det1 < 0.001;
  }

  function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    if (z1 === 0 && z2 === 0 && z3 === 0) {
      return pointOnLine2D(x1, y1, x2, y2, x3, y3);
    }
    var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
    var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
    var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
    var diffDist;
    if (dist1 > dist2) {
      if (dist1 > dist3) {
        diffDist = dist1 - dist2 - dist3;
      } else {
        diffDist = dist3 - dist2 - dist1;
      }
    } else if (dist3 > dist2) {
      diffDist = dist3 - dist2 - dist1;
    } else {
      diffDist = dist2 - dist1 - dist3;
    }
    return diffDist > -0.0001 && diffDist < 0.0001;
  }

  var getBezierLength = (function () {
    return function (pt1, pt2, pt3, pt4) {
      var curveSegments = defaultCurveSegments;
      var k;
      var i;
      var len;
      var ptCoord;
      var perc;
      var addedLength = 0;
      var ptDistance;
      var point = [];
      var lastPoint = [];
      var lengthData = bezierLengthPool.newElement();
      len = pt3.length;
      for (k = 0; k < curveSegments; k += 1) {
        perc = k / (curveSegments - 1);
        ptDistance = 0;
        for (i = 0; i < len; i += 1) {
          ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
          point[i] = ptCoord;
          if (lastPoint[i] !== null) {
            ptDistance += bmPow(point[i] - lastPoint[i], 2);
          }
          lastPoint[i] = point[i];
        }
        if (ptDistance) {
          ptDistance = bmSqrt(ptDistance);
          addedLength += ptDistance;
        }
        lengthData.percents[k] = perc;
        lengthData.lengths[k] = addedLength;
      }
      lengthData.addedLength = addedLength;
      return lengthData;
    };
  }());

  function getSegmentsLength(shapeData) {
    var segmentsLength = segmentsLengthPool.newElement();
    var closed = shapeData.c;
    var pathV = shapeData.v;
    var pathO = shapeData.o;
    var pathI = shapeData.i;
    var i;
    var len = shapeData._length;
    var lengths = segmentsLength.lengths;
    var totalLength = 0;
    for (i = 0; i < len - 1; i += 1) {
      lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
      totalLength += lengths[i].addedLength;
    }
    if (closed && len) {
      lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
      totalLength += lengths[i].addedLength;
    }
    segmentsLength.totalLength = totalLength;
    return segmentsLength;
  }

  function BezierData(length) {
    this.segmentLength = 0;
    this.points = new Array(length);
  }

  function PointData(partial, point) {
    this.partialLength = partial;
    this.point = point;
  }

  var buildBezierData = (function () {
    var storedData = {};

    return function (pt1, pt2, pt3, pt4) {
      var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');
      if (!storedData[bezierName]) {
        var curveSegments = defaultCurveSegments;
        var k;
        var i;
        var len;
        var ptCoord;
        var perc;
        var addedLength = 0;
        var ptDistance;
        var point;
        var lastPoint = null;
        if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
          curveSegments = 2;
        }
        var bezierData = new BezierData(curveSegments);
        len = pt3.length;
        for (k = 0; k < curveSegments; k += 1) {
          point = createSizedArray(len);
          perc = k / (curveSegments - 1);
          ptDistance = 0;
          for (i = 0; i < len; i += 1) {
            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
            point[i] = ptCoord;
            if (lastPoint !== null) {
              ptDistance += bmPow(point[i] - lastPoint[i], 2);
            }
          }
          ptDistance = bmSqrt(ptDistance);
          addedLength += ptDistance;
          bezierData.points[k] = new PointData(ptDistance, point);
          lastPoint = point;
        }
        bezierData.segmentLength = addedLength;
        storedData[bezierName] = bezierData;
      }
      return storedData[bezierName];
    };
  }());

  function getDistancePerc(perc, bezierData) {
    var percents = bezierData.percents;
    var lengths = bezierData.lengths;
    var len = percents.length;
    var initPos = bmFloor((len - 1) * perc);
    var lengthPos = perc * bezierData.addedLength;
    var lPerc = 0;
    if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
      return percents[initPos];
    }
    var dir = lengths[initPos] > lengthPos ? -1 : 1;
    var flag = true;
    while (flag) {
      if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
        lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
        flag = false;
      } else {
        initPos += dir;
      }
      if (initPos < 0 || initPos >= len - 1) {
        // FIX for TypedArrays that don't store floating point values with enough accuracy
        if (initPos === len - 1) {
          return percents[initPos];
        }
        flag = false;
      }
    }
    return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
  }

  function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
    var t1 = getDistancePerc(percent, bezierData);
    var u1 = 1 - t1;
    var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000;
    var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000;
    return [ptX, ptY];
  }

  var bezierSegmentPoints = createTypedArray('float32', 8);

  function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
    if (startPerc < 0) {
      startPerc = 0;
    } else if (startPerc > 1) {
      startPerc = 1;
    }
    var t0 = getDistancePerc(startPerc, bezierData);
    endPerc = endPerc > 1 ? 1 : endPerc;
    var t1 = getDistancePerc(endPerc, bezierData);
    var i;
    var len = pt1.length;
    var u0 = 1 - t0;
    var u1 = 1 - t1;
    var u0u0u0 = u0 * u0 * u0;
    var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase
    var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase
    var t0t0t0 = t0 * t0 * t0;
    //
    var u0u0u1 = u0 * u0 * u1;
    var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase
    var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase
    var t0t0t1 = t0 * t0 * t1;
    //
    var u0u1u1 = u0 * u1 * u1;
    var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase
    var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase
    var t0t1t1 = t0 * t1 * t1;
    //
    var u1u1u1 = u1 * u1 * u1;
    var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase
    var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase
    var t1t1t1 = t1 * t1 * t1;
    for (i = 0; i < len; i += 1) {
      bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
    }

    return bezierSegmentPoints;
  }

  return {
    getSegmentsLength: getSegmentsLength,
    getNewSegment: getNewSegment,
    getPointInSegment: getPointInSegment,
    buildBezierData: buildBezierData,
    pointOnLine2D: pointOnLine2D,
    pointOnLine3D: pointOnLine3D,
  };
}

var bez = bezFunction();

/* exported dataManager */

function dataFunctionManager() {
  // var tCanvasHelper = createTag('canvas').getContext('2d');

  function completeLayers(layers, comps, fontManager) {
    var layerData;
    var i;
    var len = layers.length;
    var j;
    var jLen;
    var k;
    var kLen;
    for (i = 0; i < len; i += 1) {
      layerData = layers[i];
      if (('ks' in layerData) && !layerData.completed) {
        layerData.completed = true;
        if (layerData.tt) {
          layers[i - 1].td = layerData.tt;
        }
        if (layerData.hasMask) {
          var maskProps = layerData.masksProperties;
          jLen = maskProps.length;
          for (j = 0; j < jLen; j += 1) {
            if (maskProps[j].pt.k.i) {
              convertPathsToAbsoluteValues(maskProps[j].pt.k);
            } else {
              kLen = maskProps[j].pt.k.length;
              for (k = 0; k < kLen; k += 1) {
                if (maskProps[j].pt.k[k].s) {
                  convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                }
                if (maskProps[j].pt.k[k].e) {
                  convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                }
              }
            }
          }
        }
        if (layerData.ty === 0) {
          layerData.layers = findCompLayers(layerData.refId, comps);
          completeLayers(layerData.layers, comps, fontManager);
        } else if (layerData.ty === 4) {
          completeShapes(layerData.shapes);
        } else if (layerData.ty === 5) {
          completeText(layerData, fontManager);
        }
      }
    }
  }

  function findCompLayers(id, comps) {
    var i = 0;
    var len = comps.length;
    while (i < len) {
      if (comps[i].id === id) {
        if (!comps[i].layers.__used) {
          comps[i].layers.__used = true;
          return comps[i].layers;
        }
        return JSON.parse(JSON.stringify(comps[i].layers));
      }
      i += 1;
    }
    return null;
  }

  function completeShapes(arr) {
    var i;
    var len = arr.length;
    var j;
    var jLen;
    for (i = len - 1; i >= 0; i -= 1) {
      if (arr[i].ty === 'sh') {
        if (arr[i].ks.k.i) {
          convertPathsToAbsoluteValues(arr[i].ks.k);
        } else {
          jLen = arr[i].ks.k.length;
          for (j = 0; j < jLen; j += 1) {
            if (arr[i].ks.k[j].s) {
              convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
            }
            if (arr[i].ks.k[j].e) {
              convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
            }
          }
        }
      } else if (arr[i].ty === 'gr') {
        completeShapes(arr[i].it);
      }
    }
  }

  function convertPathsToAbsoluteValues(path) {
    var i;
    var len = path.i.length;
    for (i = 0; i < len; i += 1) {
      path.i[i][0] += path.v[i][0];
      path.i[i][1] += path.v[i][1];
      path.o[i][0] += path.v[i][0];
      path.o[i][1] += path.v[i][1];
    }
  }

  function checkVersion(minimum, animVersionString) {
    var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];
    if (minimum[0] > animVersion[0]) {
      return true;
    } if (animVersion[0] > minimum[0]) {
      return false;
    }
    if (minimum[1] > animVersion[1]) {
      return true;
    } if (animVersion[1] > minimum[1]) {
      return false;
    }
    if (minimum[2] > animVersion[2]) {
      return true;
    } if (animVersion[2] > minimum[2]) {
      return false;
    }
    return null;
  }

  var checkText = (function () {
    var minimumVersion = [4, 4, 14];

    function updateTextLayer(textLayer) {
      var documentData = textLayer.t.d;
      textLayer.t.d = {
        k: [
          {
            s: documentData,
            t: 0,
          },
        ],
      };
    }

    function iterateLayers(layers) {
      var i;
      var len = layers.length;
      for (i = 0; i < len; i += 1) {
        if (layers[i].ty === 5) {
          updateTextLayer(layers[i]);
        }
      }
    }

    return function (animationData) {
      if (checkVersion(minimumVersion, animationData.v)) {
        iterateLayers(animationData.layers);
        if (animationData.assets) {
          var i;
          var len = animationData.assets.length;
          for (i = 0; i < len; i += 1) {
            if (animationData.assets[i].layers) {
              iterateLayers(animationData.assets[i].layers);
            }
          }
        }
      }
    };
  }());

  var checkChars = (function () {
    var minimumVersion = [4, 7, 99];
    return function (animationData) {
      if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
        var i;
        var len = animationData.chars.length;
        var j;
        var jLen;
        var pathData;
        var paths;
        for (i = 0; i < len; i += 1) {
          if (animationData.chars[i].data && animationData.chars[i].data.shapes) {
            paths = animationData.chars[i].data.shapes[0].it;
            jLen = paths.length;

            for (j = 0; j < jLen; j += 1) {
              pathData = paths[j].ks.k;
              if (!pathData.__converted) {
                convertPathsToAbsoluteValues(paths[j].ks.k);
                pathData.__converted = true;
              }
            }
          }
        }
      }
    };
  }());

  var checkPathProperties = (function () {
    var minimumVersion = [5, 7, 15];

    function updateTextLayer(textLayer) {
      var pathData = textLayer.t.p;
      if (typeof pathData.a === 'number') {
        pathData.a = {
          a: 0,
          k: pathData.a,
        };
      }
      if (typeof pathData.p === 'number') {
        pathData.p = {
          a: 0,
          k: pathData.p,
        };
      }
      if (typeof pathData.r === 'number') {
        pathData.r = {
          a: 0,
          k: pathData.r,
        };
      }
    }

    function iterateLayers(layers) {
      var i;
      var len = layers.length;
      for (i = 0; i < len; i += 1) {
        if (layers[i].ty === 5) {
          updateTextLayer(layers[i]);
        }
      }
    }

    return function (animationData) {
      if (checkVersion(minimumVersion, animationData.v)) {
        iterateLayers(animationData.layers);
        if (animationData.assets) {
          var i;
          var len = animationData.assets.length;
          for (i = 0; i < len; i += 1) {
            if (animationData.assets[i].layers) {
              iterateLayers(animationData.assets[i].layers);
            }
          }
        }
      }
    };
  }());

  var checkColors = (function () {
    var minimumVersion = [4, 1, 9];

    function iterateShapes(shapes) {
      var i;
      var len = shapes.length;
      var j;
      var jLen;
      for (i = 0; i < len; i += 1) {
        if (shapes[i].ty === 'gr') {
          iterateShapes(shapes[i].it);
        } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
          if (shapes[i].c.k && shapes[i].c.k[0].i) {
            jLen = shapes[i].c.k.length;
            for (j = 0; j < jLen; j += 1) {
              if (shapes[i].c.k[j].s) {
                shapes[i].c.k[j].s[0] /= 255;
                shapes[i].c.k[j].s[1] /= 255;
                shapes[i].c.k[j].s[2] /= 255;
                shapes[i].c.k[j].s[3] /= 255;
              }
              if (shapes[i].c.k[j].e) {
                shapes[i].c.k[j].e[0] /= 255;
                shapes[i].c.k[j].e[1] /= 255;
                shapes[i].c.k[j].e[2] /= 255;
                shapes[i].c.k[j].e[3] /= 255;
              }
            }
          } else {
            shapes[i].c.k[0] /= 255;
            shapes[i].c.k[1] /= 255;
            shapes[i].c.k[2] /= 255;
            shapes[i].c.k[3] /= 255;
          }
        }
      }
    }

    function iterateLayers(layers) {
      var i;
      var len = layers.length;
      for (i = 0; i < len; i += 1) {
        if (layers[i].ty === 4) {
          iterateShapes(layers[i].shapes);
        }
      }
    }

    return function (animationData) {
      if (checkVersion(minimumVersion, animationData.v)) {
        iterateLayers(animationData.layers);
        if (animationData.assets) {
          var i;
          var len = animationData.assets.length;
          for (i = 0; i < len; i += 1) {
            if (animationData.assets[i].layers) {
              iterateLayers(animationData.assets[i].layers);
            }
          }
        }
      }
    };
  }());

  var checkShapes = (function () {
    var minimumVersion = [4, 4, 18];

    function completeClosingShapes(arr) {
      var i;
      var len = arr.length;
      var j;
      var jLen;
      for (i = len - 1; i >= 0; i -= 1) {
        if (arr[i].ty === 'sh') {
          if (arr[i].ks.k.i) {
            arr[i].ks.k.c = arr[i].closed;
          } else {
            jLen = arr[i].ks.k.length;
            for (j = 0; j < jLen; j += 1) {
              if (arr[i].ks.k[j].s) {
                arr[i].ks.k[j].s[0].c = arr[i].closed;
              }
              if (arr[i].ks.k[j].e) {
                arr[i].ks.k[j].e[0].c = arr[i].closed;
              }
            }
          }
        } else if (arr[i].ty === 'gr') {
          completeClosingShapes(arr[i].it);
        }
      }
    }

    function iterateLayers(layers) {
      var layerData;
      var i;
      var len = layers.length;
      var j;
      var jLen;
      var k;
      var kLen;
      for (i = 0; i < len; i += 1) {
        layerData = layers[i];
        if (layerData.hasMask) {
          var maskProps = layerData.masksProperties;
          jLen = maskProps.length;
          for (j = 0; j < jLen; j += 1) {
            if (maskProps[j].pt.k.i) {
              maskProps[j].pt.k.c = maskProps[j].cl;
            } else {
              kLen = maskProps[j].pt.k.length;
              for (k = 0; k < kLen; k += 1) {
                if (maskProps[j].pt.k[k].s) {
                  maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                }
                if (maskProps[j].pt.k[k].e) {
                  maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                }
              }
            }
          }
        }
        if (layerData.ty === 4) {
          completeClosingShapes(layerData.shapes);
        }
      }
    }

    return function (animationData) {
      if (checkVersion(minimumVersion, animationData.v)) {
        iterateLayers(animationData.layers);
        if (animationData.assets) {
          var i;
          var len = animationData.assets.length;
          for (i = 0; i < len; i += 1) {
            if (animationData.assets[i].layers) {
              iterateLayers(animationData.assets[i].layers);
            }
          }
        }
      }
    };
  }());

  function completeData(animationData, fontManager) {
    if (animationData.__complete) {
      return;
    }
    checkColors(animationData);
    checkText(animationData);
    checkChars(animationData);
    checkPathProperties(animationData);
    checkShapes(animationData);
    completeLayers(animationData.layers, animationData.assets, fontManager);
    animationData.__complete = true;
  }

  function completeText(data) {
    if (data.t.a.length === 0 && !('m' in data.t.p)) {
      data.singleShape = true;
    }
  }

  var moduleOb = {};
  moduleOb.completeData = completeData;
  moduleOb.checkColors = checkColors;
  moduleOb.checkChars = checkChars;
  moduleOb.checkPathProperties = checkPathProperties;
  moduleOb.checkShapes = checkShapes;
  moduleOb.completeLayers = completeLayers;

  return moduleOb;
}

var dataManager = dataFunctionManager();

/* exported getFontProperties */

function getFontProperties(fontData) {
  var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];

  var fWeight = 'normal'; var
    fStyle = 'normal';
  var len = styles.length;
  var styleName;
  for (var i = 0; i < len; i += 1) {
    styleName = styles[i].toLowerCase();
    switch (styleName) {
      case 'italic':
        fStyle = 'italic';
        break;
      case 'bold':
        fWeight = '700';
        break;
      case 'black':
        fWeight = '900';
        break;
      case 'medium':
        fWeight = '500';
        break;
      case 'regular':
      case 'normal':
        fWeight = '400';
        break;
      case 'light':
      case 'thin':
        fWeight = '200';
        break;
      default:
        break;
    }
  }

  return {
    style: fStyle,
    weight: fontData.fWeight || fWeight,
  };
}

/* global createNS, createTag, getFontProperties */
/* exported FontManager */

var FontManager = (function () {
  var maxWaitingTime = 5000;
  var emptyChar = {
    w: 0,
    size: 0,
    shapes: [],
  };
  var combinedCharacters = [];
  // Hindi characters
  combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366,
    2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
    2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);

  var surrogateModifiers = [
    'd83cdffb',
    'd83cdffc',
    'd83cdffd',
    'd83cdffe',
    'd83cdfff',
  ];

  var zeroWidthJoiner = [65039, 8205];

  function trimFontOptions(font) {
    var familyArray = font.split(',');
    var i;
    var len = familyArray.length;
    var enabledFamilies = [];
    for (i = 0; i < len; i += 1) {
      if (familyArray[i] !== 'sans-serif' && familyArray[i] !== 'monospace') {
        enabledFamilies.push(familyArray[i]);
      }
    }
    return enabledFamilies.join(',');
  }

  function setUpNode(font, family) {
    var parentNode = createTag('span');
    // Node is invisible to screen readers.
    parentNode.setAttribute('aria-hidden', true);
    parentNode.style.fontFamily = family;
    var node = createTag('span');
    // Characters that vary significantly among different fonts
    node.innerText = 'giItT1WQy@!-/#';
    // Visible - so we can measure it - but not on the screen
    parentNode.style.position = 'absolute';
    parentNode.style.left = '-10000px';
    parentNode.style.top = '-10000px';
    // Large font size makes even subtle changes obvious
    parentNode.style.fontSize = '300px';
    // Reset any font properties
    parentNode.style.fontVariant = 'normal';
    parentNode.style.fontStyle = 'normal';
    parentNode.style.fontWeight = 'normal';
    parentNode.style.letterSpacing = '0';
    parentNode.appendChild(node);
    document.body.appendChild(parentNode);

    // Remember width with no applied web font
    var width = node.offsetWidth;
    node.style.fontFamily = trimFontOptions(font) + ', ' + family;
    return { node: node, w: width, parent: parentNode };
  }

  function checkLoadedFonts() {
    var i;
    var len = this.fonts.length;
    var node;
    var w;
    var loadedCount = len;
    for (i = 0; i < len; i += 1) {
      if (this.fonts[i].loaded) {
        loadedCount -= 1;
      } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
        this.fonts[i].loaded = true;
      } else {
        node = this.fonts[i].monoCase.node;
        w = this.fonts[i].monoCase.w;
        if (node.offsetWidth !== w) {
          loadedCount -= 1;
          this.fonts[i].loaded = true;
        } else {
          node = this.fonts[i].sansCase.node;
          w = this.fonts[i].sansCase.w;
          if (node.offsetWidth !== w) {
            loadedCount -= 1;
            this.fonts[i].loaded = true;
          }
        }
        if (this.fonts[i].loaded) {
          this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
          this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
        }
      }
    }

    if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
      setTimeout(this.checkLoadedFontsBinded, 20);
    } else {
      setTimeout(this.setIsLoadedBinded, 10);
    }
  }

  function createHelper(def, fontData) {
    var tHelper = createNS('text');
    tHelper.style.fontSize = '100px';
    // tHelper.style.fontFamily = fontData.fFamily;

    var fontProps = getFontProperties(fontData);
    tHelper.setAttribute('font-family', fontData.fFamily);
    tHelper.setAttribute('font-style', fontProps.style);
    tHelper.setAttribute('font-weight', fontProps.weight);
    tHelper.textContent = '1';
    if (fontData.fClass) {
      tHelper.style.fontFamily = 'inherit';
      tHelper.setAttribute('class', fontData.fClass);
    } else {
      tHelper.style.fontFamily = fontData.fFamily;
    }
    def.appendChild(tHelper);
    var tCanvasHelper = createTag('canvas').getContext('2d');
    tCanvasHelper.font = fontData.fWeight + ' ' + fontData.fStyle + ' 100px ' + fontData.fFamily;
    // tCanvasHelper.font = ' 100px '+ fontData.fFamily;
    return tHelper;
  }

  function addFonts(fontData, defs) {
    if (!fontData) {
      this.isLoaded = true;
      return;
    }
    if (this.chars) {
      this.isLoaded = true;
      this.fonts = fontData.list;
      return;
    }

    var fontArr = fontData.list;
    var i;
    var len = fontArr.length;
    var _pendingFonts = len;
    for (i = 0; i < len; i += 1) {
      var shouldLoadFont = true;
      var loadedSelector;
      var j;
      fontArr[i].loaded = false;
      fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
      fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');
      if (!fontArr[i].fPath) {
        fontArr[i].loaded = true;
        _pendingFonts -= 1;
      } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
        loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');

        if (loadedSelector.length > 0) {
          shouldLoadFont = false;
        }

        if (shouldLoadFont) {
          var s = createTag('style');
          s.setAttribute('f-forigin', fontArr[i].fOrigin);
          s.setAttribute('f-origin', fontArr[i].origin);
          s.setAttribute('f-family', fontArr[i].fFamily);
          s.type = 'text/css';
          s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
          defs.appendChild(s);
        }
      } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
        loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

        for (j = 0; j < loadedSelector.length; j += 1) {
          if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
            // Font is already loaded
            shouldLoadFont = false;
          }
        }

        if (shouldLoadFont) {
          var l = createTag('link');
          l.setAttribute('f-forigin', fontArr[i].fOrigin);
          l.setAttribute('f-origin', fontArr[i].origin);
          l.type = 'text/css';
          l.rel = 'stylesheet';
          l.href = fontArr[i].fPath;
          document.body.appendChild(l);
        }
      } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
        loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

        for (j = 0; j < loadedSelector.length; j += 1) {
          if (fontArr[i].fPath === loadedSelector[j].src) {
            // Font is already loaded
            shouldLoadFont = false;
          }
        }

        if (shouldLoadFont) {
          var sc = createTag('link');
          sc.setAttribute('f-forigin', fontArr[i].fOrigin);
          sc.setAttribute('f-origin', fontArr[i].origin);
          sc.setAttribute('rel', 'stylesheet');
          sc.setAttribute('href', fontArr[i].fPath);
          defs.appendChild(sc);
        }
      }
      fontArr[i].helper = createHelper(defs, fontArr[i]);
      fontArr[i].cache = {};
      this.fonts.push(fontArr[i]);
    }
    if (_pendingFonts === 0) {
      this.isLoaded = true;
    } else {
      // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
      // Adding this timeout seems to fix it
      setTimeout(this.checkLoadedFonts.bind(this), 100);
    }
  }

  function addChars(chars) {
    if (!chars) {
      return;
    }
    if (!this.chars) {
      this.chars = [];
    }
    var i;
    var len = chars.length;
    var j;
    var jLen = this.chars.length;
    var found;
    for (i = 0; i < len; i += 1) {
      j = 0;
      found = false;
      while (j < jLen) {
        if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
          found = true;
        }
        j += 1;
      }
      if (!found) {
        this.chars.push(chars[i]);
        jLen += 1;
      }
    }
  }

  function getCharData(char, style, font) {
    var i = 0;
    var len = this.chars.length;
    while (i < len) {
      if (this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font) {
        return this.chars[i];
      }
      i += 1;
    }
    if (((typeof char === 'string' && char.charCodeAt(0) !== 13) || !char)
            && console
            && console.warn // eslint-disable-line no-console
            && !this._warned
    ) {
      this._warned = true;
      console.warn('Missing character from exported characters list: ', char, style, font); // eslint-disable-line no-console
    }
    return emptyChar;
  }

  function measureText(char, fontName, size) {
    var fontData = this.getFontByName(fontName);
    var index = char.charCodeAt(0);
    if (!fontData.cache[index + 1]) {
      var tHelper = fontData.helper;
      // Canvas version
      // fontData.cache[index] = tHelper.measureText(char).width / 100;
      // SVG version
      // console.log(tHelper.getBBox().width)
      if (char === ' ') {
        tHelper.textContent = '|' + char + '|';
        var doubleSize = tHelper.getComputedTextLength();
        tHelper.textContent = '||';
        var singleSize = tHelper.getComputedTextLength();
        fontData.cache[index + 1] = (doubleSize - singleSize) / 100;
      } else {
        tHelper.textContent = char;
        fontData.cache[index + 1] = (tHelper.getComputedTextLength()) / 100;
      }
    }
    return fontData.cache[index + 1] * size;
  }

  function getFontByName(name) {
    var i = 0;
    var len = this.fonts.length;
    while (i < len) {
      if (this.fonts[i].fName === name) {
        return this.fonts[i];
      }
      i += 1;
    }
    return this.fonts[0];
  }

  function isModifier(firstCharCode, secondCharCode) {
    var sum = firstCharCode.toString(16) + secondCharCode.toString(16);
    return surrogateModifiers.indexOf(sum) !== -1;
  }

  function isZeroWidthJoiner(firstCharCode, secondCharCode) {
    if (!secondCharCode) {
      return firstCharCode === zeroWidthJoiner[1];
    }
    return firstCharCode === zeroWidthJoiner[0] && secondCharCode === zeroWidthJoiner[1];
  }

  function isCombinedCharacter(char) {
    return combinedCharacters.indexOf(char) !== -1;
  }

  function setIsLoaded() {
    this.isLoaded = true;
  }

  var Font = function () {
    this.fonts = [];
    this.chars = null;
    this.typekitLoaded = 0;
    this.isLoaded = false;
    this._warned = false;
    this.initTime = Date.now();
    this.setIsLoadedBinded = this.setIsLoaded.bind(this);
    this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
  };
  Font.isModifier = isModifier;
  Font.isZeroWidthJoiner = isZeroWidthJoiner;
  Font.isCombinedCharacter = isCombinedCharacter;

  var fontPrototype = {
    addChars: addChars,
    addFonts: addFonts,
    getCharData: getCharData,
    getFontByName: getFontByName,
    measureText: measureText,
    checkLoadedFonts: checkLoadedFonts,
    setIsLoaded: setIsLoaded,
  };

  Font.prototype = fontPrototype;

  return Font;
}());

/* global initialDefaultFrame, BezierFactory, degToRads, bez, createTypedArray */
/* exported PropertyFactory */

var PropertyFactory = (function () {
  var initFrame = initialDefaultFrame;
  var mathAbs = Math.abs;

  function interpolateValue(frameNum, caching) {
    var offsetTime = this.offsetTime;
    var newValue;
    if (this.propType === 'multidimensional') {
      newValue = createTypedArray('float32', this.pv.length);
    }
    var iterationIndex = caching.lastIndex;
    var i = iterationIndex;
    var len = this.keyframes.length - 1;
    var flag = true;
    var keyData;
    var nextKeyData;

    while (flag) {
      keyData = this.keyframes[i];
      nextKeyData = this.keyframes[i + 1];
      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
        if (keyData.h) {
          keyData = nextKeyData;
        }
        iterationIndex = 0;
        break;
      }
      if ((nextKeyData.t - offsetTime) > frameNum) {
        iterationIndex = i;
        break;
      }
      if (i < len - 1) {
        i += 1;
      } else {
        iterationIndex = 0;
        flag = false;
      }
    }

    var k;
    var kLen;
    var perc;
    var jLen;
    var j;
    var fnc;
    var nextKeyTime = nextKeyData.t - offsetTime;
    var keyTime = keyData.t - offsetTime;
    var endValue;
    if (keyData.to) {
      if (!keyData.bezierData) {
        keyData.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
      }
      var bezierData = keyData.bezierData;
      if (frameNum >= nextKeyTime || frameNum < keyTime) {
        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
        kLen = bezierData.points[ind].point.length;
        for (k = 0; k < kLen; k += 1) {
          newValue[k] = bezierData.points[ind].point[k];
        }
        // caching._lastKeyframeIndex = -1;
      } else {
        if (keyData.__fnct) {
          fnc = keyData.__fnct;
        } else {
          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
          keyData.__fnct = fnc;
        }
        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
        var distanceInLine = bezierData.segmentLength * perc;

        var segmentPerc;
        var addedLength = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastAddedLength : 0;
        j = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastPoint : 0;
        flag = true;
        jLen = bezierData.points.length;
        while (flag) {
          addedLength += bezierData.points[j].partialLength;
          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
            kLen = bezierData.points[j].point.length;
            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k];
            }
            break;
          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
            kLen = bezierData.points[j].point.length;
            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
            }
            break;
          }
          if (j < jLen - 1) {
            j += 1;
          } else {
            flag = false;
          }
        }
        caching._lastPoint = j;
        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
        caching._lastKeyframeIndex = i;
      }
    } else {
      var outX;
      var outY;
      var inX;
      var inY;
      var keyValue;
      len = keyData.s.length;
      endValue = nextKeyData.s || keyData.e;
      if (this.sh && keyData.h !== 1) {
        if (frameNum >= nextKeyTime) {
          newValue[0] = endValue[0];
          newValue[1] = endValue[1];
          newValue[2] = endValue[2];
        } else if (frameNum <= keyTime) {
          newValue[0] = keyData.s[0];
          newValue[1] = keyData.s[1];
          newValue[2] = keyData.s[2];
        } else {
          var quatStart = createQuaternion(keyData.s);
          var quatEnd = createQuaternion(endValue);
          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
        }
      } else {
        for (i = 0; i < len; i += 1) {
          if (keyData.h !== 1) {
            if (frameNum >= nextKeyTime) {
              perc = 1;
            } else if (frameNum < keyTime) {
              perc = 0;
            } else {
              if (keyData.o.x.constructor === Array) {
                if (!keyData.__fnct) {
                  keyData.__fnct = [];
                }
                if (!keyData.__fnct[i]) {
                  outX = (typeof keyData.o.x[i] === 'undefined') ? keyData.o.x[0] : keyData.o.x[i];
                  outY = (typeof keyData.o.y[i] === 'undefined') ? keyData.o.y[0] : keyData.o.y[i];
                  inX = (typeof keyData.i.x[i] === 'undefined') ? keyData.i.x[0] : keyData.i.x[i];
                  inY = (typeof keyData.i.y[i] === 'undefined') ? keyData.i.y[0] : keyData.i.y[i];
                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                  keyData.__fnct[i] = fnc;
                } else {
                  fnc = keyData.__fnct[i];
                }
              } else if (!keyData.__fnct) {
                outX = keyData.o.x;
                outY = keyData.o.y;
                inX = keyData.i.x;
                inY = keyData.i.y;
                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                keyData.__fnct = fnc;
              } else {
                fnc = keyData.__fnct;
              }
              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
            }
          }

          endValue = nextKeyData.s || keyData.e;
          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

          if (this.propType === 'multidimensional') {
            newValue[i] = keyValue;
          } else {
            newValue = keyValue;
          }
        }
      }
    }
    caching.lastIndex = iterationIndex;
    return newValue;
  }

  // based on @Toji's https://github.com/toji/gl-matrix/
  function slerp(a, b, t) {
    var out = [];
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];
    var bw = b[3];

    var omega;
    var cosom;
    var sinom;
    var scale0;
    var scale1;

    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if ((1.0 - cosom) > 0.000001) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1.0 - t;
      scale1 = t;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
  }

  function quaternionToEuler(out, quat) {
    var qx = quat[0];
    var qy = quat[1];
    var qz = quat[2];
    var qw = quat[3];
    var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
    var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
    var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
    out[0] = heading / degToRads;
    out[1] = attitude / degToRads;
    out[2] = bank / degToRads;
  }

  function createQuaternion(values) {
    var heading = values[0] * degToRads;
    var attitude = values[1] * degToRads;
    var bank = values[2] * degToRads;
    var c1 = Math.cos(heading / 2);
    var c2 = Math.cos(attitude / 2);
    var c3 = Math.cos(bank / 2);
    var s1 = Math.sin(heading / 2);
    var s2 = Math.sin(attitude / 2);
    var s3 = Math.sin(bank / 2);
    var w = c1 * c2 * c3 - s1 * s2 * s3;
    var x = s1 * s2 * c3 + c1 * c2 * s3;
    var y = s1 * c2 * c3 + c1 * s2 * s3;
    var z = c1 * s2 * c3 - s1 * c2 * s3;

    return [x, y, z, w];
  }

  function getValueAtCurrentTime() {
    var frameNum = this.comp.renderedFrame - this.offsetTime;
    var initTime = this.keyframes[0].t - this.offsetTime;
    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
    if (!(frameNum === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= endTime && frameNum >= endTime) || (this._caching.lastFrame < initTime && frameNum < initTime))))) {
      if (this._caching.lastFrame >= frameNum) {
        this._caching._lastKeyframeIndex = -1;
        this._caching.lastIndex = 0;
      }

      var renderResult = this.interpolateValue(frameNum, this._caching);
      this.pv = renderResult;
    }
    this._caching.lastFrame = frameNum;
    return this.pv;
  }

  function setVValue(val) {
    var multipliedValue;
    if (this.propType === 'unidimensional') {
      multipliedValue = val * this.mult;
      if (mathAbs(this.v - multipliedValue) > 0.00001) {
        this.v = multipliedValue;
        this._mdf = true;
      }
    } else {
      var i = 0;
      var len = this.v.length;
      while (i < len) {
        multipliedValue = val[i] * this.mult;
        if (mathAbs(this.v[i] - multipliedValue) > 0.00001) {
          this.v[i] = multipliedValue;
          this._mdf = true;
        }
        i += 1;
      }
    }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
      return;
    }
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true;
    this._mdf = this._isFirstFrame;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = this.kf ? this.pv : this.data.k;
    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }
    this.setVValue(finalValue);
    this._isFirstFrame = false;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);
  }

  function ValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.mult = mult || 1;
    this.data = data;
    this.v = mult ? data.k * mult : data.k;
    this.pv = data.k;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.vel = 0;
    this.effectsSequence = [];
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function MultiDimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    this.mult = mult || 1;
    this.data = data;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.frameId = -1;
    var i;
    var len = data.k.length;
    this.v = createTypedArray('float32', len);
    this.pv = createTypedArray('float32', len);
    this.vel = createTypedArray('float32', len);
    for (i = 0; i < len; i += 1) {
      this.v[i] = data.k[i] * this.mult;
      this.pv[i] = data.k[i];
    }
    this._isFirstFrame = true;
    this.effectsSequence = [];
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function KeyframedValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.keyframes = data.k;
    this.offsetTime = elem.data.st;
    this.frameId = -1;
    this._caching = {
      lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1,
    };
    this.k = true;
    this.kf = true;
    this.data = data;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.v = initFrame;
    this.pv = initFrame;
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.addEffect = addEffect;
  }

  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    var i;
    var len = data.k.length;
    var s;
    var e;
    var to;
    var ti;
    for (i = 0; i < len - 1; i += 1) {
      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
        s = data.k[i].s;
        e = data.k[i + 1].s;
        to = data.k[i].to;
        ti = data.k[i].ti;
        if ((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2]))) {
          data.k[i].to = null;
          data.k[i].ti = null;
        }
        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
          if (s.length === 2 || (s[2] === e[2] && to[2] === 0 && ti[2] === 0)) {
            data.k[i].to = null;
            data.k[i].ti = null;
          }
        }
      }
    }
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.data = data;
    this.keyframes = data.k;
    this.offsetTime = elem.data.st;
    this.k = true;
    this.kf = true;
    this._isFirstFrame = true;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.frameId = -1;
    var arrLen = data.k[0].s.length;
    this.v = createTypedArray('float32', arrLen);
    this.pv = createTypedArray('float32', arrLen);
    for (i = 0; i < arrLen; i += 1) {
      this.v[i] = initFrame;
      this.pv[i] = initFrame;
    }
    this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray('float32', arrLen) };
    this.addEffect = addEffect;
  }

  function getProp(elem, data, type, mult, container) {
    var p;
    if (!data.k.length) {
      p = new ValueProperty(elem, data, mult, container);
    } else if (typeof (data.k[0]) === 'number') {
      p = new MultiDimensionalProperty(elem, data, mult, container);
    } else {
      switch (type) {
        case 0:
          p = new KeyframedValueProperty(elem, data, mult, container);
          break;
        case 1:
          p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
          break;
        default:
          break;
      }
    }
    if (p.effectsSequence.length) {
      container.addDynamicProperty(p);
    }
    return p;
  }

  var ob = {
    getProp: getProp,
  };
  return ob;
}());

/* global Matrix, degToRads, PropertyFactory, extendPrototype, DynamicPropertyContainer */
/* exported TransformPropertyFactory */

var TransformPropertyFactory = (function () {
  var defaultVector = [0, 0];

  function applyToMatrix(mat) {
    var _mdf = this._mdf;
    this.iterateDynamicProperties();
    this._mdf = this._mdf || _mdf;
    if (this.a) {
      mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
    }
    if (this.s) {
      mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
    }
    if (this.sk) {
      mat.skewFromAxis(-this.sk.v, this.sa.v);
    }
    if (this.r) {
      mat.rotate(-this.r.v);
    } else {
      mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
        .rotateY(this.or.v[1])
        .rotateX(this.or.v[0]);
    }
    if (this.data.p.s) {
      if (this.data.p.z) {
        mat.translate(this.px.v, this.py.v, -this.pz.v);
      } else {
        mat.translate(this.px.v, this.py.v, 0);
      }
    } else {
      mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
    }
  }
  function processKeys(forceRender) {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    }
    if (this._isDirty) {
      this.precalculateMatrix();
      this._isDirty = false;
    }

    this.iterateDynamicProperties();

    if (this._mdf || forceRender) {
      var frameRate;
      this.v.cloneFromProps(this.pre.props);
      if (this.appliedTransformations < 1) {
        this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      }
      if (this.appliedTransformations < 2) {
        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      }
      if (this.sk && this.appliedTransformations < 3) {
        this.v.skewFromAxis(-this.sk.v, this.sa.v);
      }
      if (this.r && this.appliedTransformations < 4) {
        this.v.rotate(-this.r.v);
      } else if (!this.r && this.appliedTransformations < 4) {
        this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
          .rotateY(this.or.v[1])
          .rotateX(this.or.v[0]);
      }
      if (this.autoOriented) {
        var v1;
        var v2;
        frameRate = this.elem.globalData.frameRate;
        if (this.p && this.p.keyframes && this.p.getValueAtTime) {
          if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
            v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
            v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
          } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
            v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / frameRate), 0);
            v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
          } else {
            v1 = this.p.pv;
            v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
          }
        } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
          v1 = [];
          v2 = [];
          var px = this.px;
          var py = this.py;
          if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
            v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
            v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
            v2[0] = px.getValueAtTime((px.keyframes[0].t) / frameRate, 0);
            v2[1] = py.getValueAtTime((py.keyframes[0].t) / frameRate, 0);
          } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
            v1[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t / frameRate), 0);
            v1[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t / frameRate), 0);
            v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
            v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
          } else {
            v1 = [px.pv, py.pv];
            v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
            v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
          }
        } else {
          v2 = defaultVector;
          v1 = v2;
        }
        this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
      }
      if (this.data.p && this.data.p.s) {
        if (this.data.p.z) {
          this.v.translate(this.px.v, this.py.v, -this.pz.v);
        } else {
          this.v.translate(this.px.v, this.py.v, 0);
        }
      } else {
        this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
    }
    this.frameId = this.elem.globalData.frameId;
  }

  function precalculateMatrix() {
    if (!this.a.k) {
      this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      this.appliedTransformations = 1;
    } else {
      return;
    }
    if (!this.s.effectsSequence.length) {
      this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      this.appliedTransformations = 2;
    } else {
      return;
    }
    if (this.sk) {
      if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
        this.pre.skewFromAxis(-this.sk.v, this.sa.v);
        this.appliedTransformations = 3;
      } else {
        return;
      }
    }
    if (this.r) {
      if (!this.r.effectsSequence.length) {
        this.pre.rotate(-this.r.v);
        this.appliedTransformations = 4;
      }
    } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
      this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
        .rotateY(this.or.v[1])
        .rotateX(this.or.v[0]);
      this.appliedTransformations = 4;
    }
  }

  function autoOrient() {
    //
    // var prevP = this.getValueAtTime();
  }

  function addDynamicProperty(prop) {
    this._addDynamicProperty(prop);
    this.elem.addDynamicProperty(prop);
    this._isDirty = true;
  }

  function TransformProperty(elem, data, container) {
    this.elem = elem;
    this.frameId = -1;
    this.propType = 'transform';
    this.data = data;
    this.v = new Matrix();
    // Precalculated matrix with non animated properties
    this.pre = new Matrix();
    this.appliedTransformations = 0;
    this.initDynamicPropertyContainer(container || elem);
    if (data.p && data.p.s) {
      this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
      this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);
      if (data.p.z) {
        this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
      }
    } else {
      this.p = PropertyFactory.getProp(elem, data.p || { k: [0, 0, 0] }, 1, 0, this);
    }
    if (data.rx) {
      this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
      this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
      this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);
      if (data.or.k[0].ti) {
        var i;
        var len = data.or.k.length;
        for (i = 0; i < len; i += 1) {
          data.or.k[i].to = null;
          data.or.k[i].ti = null;
        }
      }
      this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this);
      // sh Indicates it needs to be capped between -180 and 180
      this.or.sh = true;
    } else {
      this.r = PropertyFactory.getProp(elem, data.r || { k: 0 }, 0, degToRads, this);
    }
    if (data.sk) {
      this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
      this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
    }
    this.a = PropertyFactory.getProp(elem, data.a || { k: [0, 0, 0] }, 1, 0, this);
    this.s = PropertyFactory.getProp(elem, data.s || { k: [100, 100, 100] }, 1, 0.01, this);
    // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
    if (data.o) {
      this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
    } else {
      this.o = { _mdf: false, v: 1 };
    }
    this._isDirty = true;
    if (!this.dynamicProperties.length) {
      this.getValue(true);
    }
  }

  TransformProperty.prototype = {
    applyToMatrix: applyToMatrix,
    getValue: processKeys,
    precalculateMatrix: precalculateMatrix,
    autoOrient: autoOrient,
  };

  extendPrototype([DynamicPropertyContainer], TransformProperty);
  TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
  TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

  function getTransformProperty(elem, data, container) {
    return new TransformProperty(elem, data, container);
  }

  return {
    getTransformProperty: getTransformProperty,
  };
}());

/* global createSizedArray, createSizedArray, pointPool */

function ShapePath() {
  this.c = false;
  this._length = 0;
  this._maxLength = 8;
  this.v = createSizedArray(this._maxLength);
  this.o = createSizedArray(this._maxLength);
  this.i = createSizedArray(this._maxLength);
}

ShapePath.prototype.setPathData = function (closed, len) {
  this.c = closed;
  this.setLength(len);
  var i = 0;
  while (i < len) {
    this.v[i] = pointPool.newElement();
    this.o[i] = pointPool.newElement();
    this.i[i] = pointPool.newElement();
    i += 1;
  }
};

ShapePath.prototype.setLength = function (len) {
  while (this._maxLength < len) {
    this.doubleArrayLength();
  }
  this._length = len;
};

ShapePath.prototype.doubleArrayLength = function () {
  this.v = this.v.concat(createSizedArray(this._maxLength));
  this.i = this.i.concat(createSizedArray(this._maxLength));
  this.o = this.o.concat(createSizedArray(this._maxLength));
  this._maxLength *= 2;
};

ShapePath.prototype.setXYAt = function (x, y, type, pos, replace) {
  var arr;
  this._length = Math.max(this._length, pos + 1);
  if (this._length >= this._maxLength) {
    this.doubleArrayLength();
  }
  switch (type) {
    case 'v':
      arr = this.v;
      break;
    case 'i':
      arr = this.i;
      break;
    case 'o':
      arr = this.o;
      break;
    default:
      arr = [];
      break;
  }
  if (!arr[pos] || (arr[pos] && !replace)) {
    arr[pos] = pointPool.newElement();
  }
  arr[pos][0] = x;
  arr[pos][1] = y;
};

ShapePath.prototype.setTripleAt = function (vX, vY, oX, oY, iX, iY, pos, replace) {
  this.setXYAt(vX, vY, 'v', pos, replace);
  this.setXYAt(oX, oY, 'o', pos, replace);
  this.setXYAt(iX, iY, 'i', pos, replace);
};

ShapePath.prototype.reverse = function () {
  var newPath = new ShapePath();
  newPath.setPathData(this.c, this._length);
  var vertices = this.v;
  var outPoints = this.o;
  var inPoints = this.i;
  var init = 0;
  if (this.c) {
    newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
    init = 1;
  }
  var cnt = this._length - 1;
  var len = this._length;

  var i;
  for (i = init; i < len; i += 1) {
    newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
    cnt -= 1;
  }
  return newPath;
};

/* global extendPrototype, roundCorner, BezierFactory, shapePool, degToRads,
  shapeCollectionPool, PropertyFactory, bmMin, DynamicPropertyContainer */
/* exported ShapePropertyFactory */

var ShapePropertyFactory = (function () {
  var initFrame = -999999;

  function interpolateShape(frameNum, previousValue, caching) {
    var iterationIndex = caching.lastIndex;
    var keyPropS;
    var keyPropE;
    var isHold;
    var j;
    var k;
    var jLen;
    var kLen;
    var perc;
    var vertexValue;
    var kf = this.keyframes;
    if (frameNum < kf[0].t - this.offsetTime) {
      keyPropS = kf[0].s[0];
      isHold = true;
      iterationIndex = 0;
    } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
      keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
      /* if(kf[kf.length - 1].s){
                keyPropS = kf[kf.length - 1].s[0];
            }else{
                keyPropS = kf[kf.length - 2].e[0];
            } */
      isHold = true;
    } else {
      var i = iterationIndex;
      var len = kf.length - 1;
      var flag = true;
      var keyData;
      var nextKeyData;
      while (flag) {
        keyData = kf[i];
        nextKeyData = kf[i + 1];
        if ((nextKeyData.t - this.offsetTime) > frameNum) {
          break;
        }
        if (i < len - 1) {
          i += 1;
        } else {
          flag = false;
        }
      }
      isHold = keyData.h === 1;
      iterationIndex = i;
      if (!isHold) {
        if (frameNum >= nextKeyData.t - this.offsetTime) {
          perc = 1;
        } else if (frameNum < keyData.t - this.offsetTime) {
          perc = 0;
        } else {
          var fnc;
          if (keyData.__fnct) {
            fnc = keyData.__fnct;
          } else {
            fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
            keyData.__fnct = fnc;
          }
          perc = fnc((frameNum - (keyData.t - this.offsetTime)) / ((nextKeyData.t - this.offsetTime) - (keyData.t - this.offsetTime)));
        }
        keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
      }
      keyPropS = keyData.s[0];
    }
    jLen = previousValue._length;
    kLen = keyPropS.i[0].length;
    caching.lastIndex = iterationIndex;

    for (j = 0; j < jLen; j += 1) {
      for (k = 0; k < kLen; k += 1) {
        vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
        previousValue.i[j][k] = vertexValue;
        vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
        previousValue.o[j][k] = vertexValue;
        vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
        previousValue.v[j][k] = vertexValue;
      }
    }
  }

  function interpolateShapeCurrentTime() {
    var frameNum = this.comp.renderedFrame - this.offsetTime;
    var initTime = this.keyframes[0].t - this.offsetTime;
    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
    var lastFrame = this._caching.lastFrame;
    if (!(lastFrame !== initFrame && ((lastFrame < initTime && frameNum < initTime) || (lastFrame > endTime && frameNum > endTime)))) {
      /// /
      this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
      this.interpolateShape(frameNum, this.pv, this._caching);
      /// /
    }
    this._caching.lastFrame = frameNum;
    return this.pv;
  }

  function resetShape() {
    this.paths = this.localShapeCollection;
  }

  function shapesEqual(shape1, shape2) {
    if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
      return false;
    }
    var i;
    var len = shape1._length;
    for (i = 0; i < len; i += 1) {
      if (shape1.v[i][0] !== shape2.v[i][0]
            || shape1.v[i][1] !== shape2.v[i][1]
            || shape1.o[i][0] !== shape2.o[i][0]
            || shape1.o[i][1] !== shape2.o[i][1]
            || shape1.i[i][0] !== shape2.i[i][0]
            || shape1.i[i][1] !== shape2.i[i][1]) {
        return false;
      }
    }
    return true;
  }

  function setVValue(newPath) {
    if (!shapesEqual(this.v, newPath)) {
      this.v = shapePool.clone(newPath);
      this.localShapeCollection.releaseShapes();
      this.localShapeCollection.addShape(this.v);
      this._mdf = true;
      this.paths = this.localShapeCollection;
    }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    } if (!this.effectsSequence.length) {
      this._mdf = false;
      return;
    }
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true;
    this._mdf = false;
    var finalValue;
    if (this.kf) {
      finalValue = this.pv;
    } else if (this.data.ks) {
      finalValue = this.data.ks.k;
    } else {
      finalValue = this.data.pt.k;
    }
    var i;
    var len = this.effectsSequence.length;
    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }
    this.setVValue(finalValue);
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function ShapeProperty(elem, data, type) {
    this.propType = 'shape';
    this.comp = elem.comp;
    this.container = elem;
    this.elem = elem;
    this.data = data;
    this.k = false;
    this.kf = false;
    this._mdf = false;
    var pathData = type === 3 ? data.pt.k : data.ks.k;
    this.v = shapePool.clone(pathData);
    this.pv = shapePool.clone(this.v);
    this.localShapeCollection = shapeCollectionPool.newShapeCollection();
    this.paths = this.localShapeCollection;
    this.paths.addShape(this.v);
    this.reset = resetShape;
    this.effectsSequence = [];
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);
  }

  ShapeProperty.prototype.interpolateShape = interpolateShape;
  ShapeProperty.prototype.getValue = processEffectsSequence;
  ShapeProperty.prototype.setVValue = setVValue;
  ShapeProperty.prototype.addEffect = addEffect;

  function KeyframedShapeProperty(elem, data, type) {
    this.propType = 'shape';
    this.comp = elem.comp;
    this.elem = elem;
    this.container = elem;
    this.offsetTime = elem.data.st;
    this.keyframes = type === 3 ? data.pt.k : data.ks.k;
    this.k = true;
    this.kf = true;
    var len = this.keyframes[0].s[0].i.length;
    this.v = shapePool.newElement();
    this.v.setPathData(this.keyframes[0].s[0].c, len);
    this.pv = shapePool.clone(this.v);
    this.localShapeCollection = shapeCollectionPool.newShapeCollection();
    this.paths = this.localShapeCollection;
    this.paths.addShape(this.v);
    this.lastFrame = initFrame;
    this.reset = resetShape;
    this._caching = { lastFrame: initFrame, lastIndex: 0 };
    this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
  }
  KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
  KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
  KeyframedShapeProperty.prototype.setVValue = setVValue;
  KeyframedShapeProperty.prototype.addEffect = addEffect;

  var EllShapeProperty = (function () {
    var cPoint = roundCorner;

    function EllShapePropertyFactory(elem, data) {
      /* this.v = {
                v: createSizedArray(4),
                i: createSizedArray(4),
                o: createSizedArray(4),
                c: true
            }; */
      this.v = shapePool.newElement();
      this.v.setPathData(true, 4);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.paths = this.localShapeCollection;
      this.localShapeCollection.addShape(this.v);
      this.d = data.d;
      this.elem = elem;
      this.comp = elem.comp;
      this.frameId = -1;
      this.initDynamicPropertyContainer(elem);
      this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
      this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
      if (this.dynamicProperties.length) {
        this.k = true;
      } else {
        this.k = false;
        this.convertEllToPath();
      }
    }

    EllShapePropertyFactory.prototype = {
      reset: resetShape,
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();

        if (this._mdf) {
          this.convertEllToPath();
        }
      },
      convertEllToPath: function () {
        var p0 = this.p.v[0];
        var p1 = this.p.v[1];
        var s0 = this.s.v[0] / 2;
        var s1 = this.s.v[1] / 2;
        var _cw = this.d !== 3;
        var _v = this.v;
        _v.v[0][0] = p0;
        _v.v[0][1] = p1 - s1;
        _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.v[1][1] = p1;
        _v.v[2][0] = p0;
        _v.v[2][1] = p1 + s1;
        _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.v[3][1] = p1;
        _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
        _v.i[0][1] = p1 - s1;
        _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.i[1][1] = p1 - s1 * cPoint;
        _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
        _v.i[2][1] = p1 + s1;
        _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.i[3][1] = p1 + s1 * cPoint;
        _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
        _v.o[0][1] = p1 - s1;
        _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.o[1][1] = p1 + s1 * cPoint;
        _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
        _v.o[2][1] = p1 + s1;
        _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.o[3][1] = p1 - s1 * cPoint;
      },
    };

    extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);

    return EllShapePropertyFactory;
  }());

  var StarShapeProperty = (function () {
    function StarShapePropertyFactory(elem, data) {
      this.v = shapePool.newElement();
      this.v.setPathData(true, 0);
      this.elem = elem;
      this.comp = elem.comp;
      this.data = data;
      this.frameId = -1;
      this.d = data.d;
      this.initDynamicPropertyContainer(elem);
      if (data.sy === 1) {
        this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
        this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
        this.convertToPath = this.convertStarToPath;
      } else {
        this.convertToPath = this.convertPolygonToPath;
      }
      this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
      this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
      this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
      this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
      this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.localShapeCollection.addShape(this.v);
      this.paths = this.localShapeCollection;
      if (this.dynamicProperties.length) {
        this.k = true;
      } else {
        this.k = false;
        this.convertToPath();
      }
    }

    StarShapePropertyFactory.prototype = {
      reset: resetShape,
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        if (this._mdf) {
          this.convertToPath();
        }
      },
      convertStarToPath: function () {
        var numPts = Math.floor(this.pt.v) * 2;
        var angle = (Math.PI * 2) / numPts;
        /* this.v.v.length = numPts;
                this.v.i.length = numPts;
                this.v.o.length = numPts; */
        var longFlag = true;
        var longRad = this.or.v;
        var shortRad = this.ir.v;
        var longRound = this.os.v;
        var shortRound = this.is.v;
        var longPerimSegment = (2 * Math.PI * longRad) / (numPts * 2);
        var shortPerimSegment = (2 * Math.PI * shortRad) / (numPts * 2);
        var i;
        var rad;
        var roundness;
        var perimSegment;
        var currentAng = -Math.PI / 2;
        currentAng += this.r.v;
        var dir = this.data.d === 3 ? -1 : 1;
        this.v._length = 0;
        for (i = 0; i < numPts; i += 1) {
          rad = longFlag ? longRad : shortRad;
          roundness = longFlag ? longRound : shortRound;
          perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
          var x = rad * Math.cos(currentAng);
          var y = rad * Math.sin(currentAng);
          var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
          var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
          x += +this.p.v[0];
          y += +this.p.v[1];
          this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);

          /* this.v.v[i] = [x,y];
                    this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                    this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                    this.v._length = numPts; */
          longFlag = !longFlag;
          currentAng += angle * dir;
        }
      },
      convertPolygonToPath: function () {
        var numPts = Math.floor(this.pt.v);
        var angle = (Math.PI * 2) / numPts;
        var rad = this.or.v;
        var roundness = this.os.v;
        var perimSegment = (2 * Math.PI * rad) / (numPts * 4);
        var i;
        var currentAng = -Math.PI * 0.5;
        var dir = this.data.d === 3 ? -1 : 1;
        currentAng += this.r.v;
        this.v._length = 0;
        for (i = 0; i < numPts; i += 1) {
          var x = rad * Math.cos(currentAng);
          var y = rad * Math.sin(currentAng);
          var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
          var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
          x += +this.p.v[0];
          y += +this.p.v[1];
          this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
          currentAng += angle * dir;
        }
        this.paths.length = 0;
        this.paths[0] = this.v;
      },

    };
    extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);

    return StarShapePropertyFactory;
  }());

  var RectShapeProperty = (function () {
    function RectShapePropertyFactory(elem, data) {
      this.v = shapePool.newElement();
      this.v.c = true;
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.localShapeCollection.addShape(this.v);
      this.paths = this.localShapeCollection;
      this.elem = elem;
      this.comp = elem.comp;
      this.frameId = -1;
      this.d = data.d;
      this.initDynamicPropertyContainer(elem);
      this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
      this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
      this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);
      if (this.dynamicProperties.length) {
        this.k = true;
      } else {
        this.k = false;
        this.convertRectToPath();
      }
    }

    RectShapePropertyFactory.prototype = {
      convertRectToPath: function () {
        var p0 = this.p.v[0];
        var p1 = this.p.v[1];
        var v0 = this.s.v[0] / 2;
        var v1 = this.s.v[1] / 2;
        var round = bmMin(v0, v1, this.r.v);
        var cPoint = round * (1 - roundCorner);
        this.v._length = 0;

        if (this.d === 2 || this.d === 1) {
          this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
          this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);
          if (round !== 0) {
            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
          } else {
            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
          }
        } else {
          this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);
          if (round !== 0) {
            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
          } else {
            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
            this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
          }
        }
      },
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        if (this._mdf) {
          this.convertRectToPath();
        }
      },
      reset: resetShape,
    };
    extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);

    return RectShapePropertyFactory;
  }());

  function getShapeProp(elem, data, type) {
    var prop;
    if (type === 3 || type === 4) {
      var dataProp = type === 3 ? data.pt : data.ks;
      var keys = dataProp.k;
      if (keys.length) {
        prop = new KeyframedShapeProperty(elem, data, type);
      } else {
        prop = new ShapeProperty(elem, data, type);
      }
    } else if (type === 5) {
      prop = new RectShapeProperty(elem, data);
    } else if (type === 6) {
      prop = new EllShapeProperty(elem, data);
    } else if (type === 7) {
      prop = new StarShapeProperty(elem, data);
    }
    if (prop.k) {
      elem.addDynamicProperty(prop);
    }
    return prop;
  }

  function getConstructorFunction() {
    return ShapeProperty;
  }

  function getKeyframedConstructorFunction() {
    return KeyframedShapeProperty;
  }

  var ob = {};
  ob.getShapeProp = getShapeProp;
  ob.getConstructorFunction = getConstructorFunction;
  ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
  return ob;
}());

/* global shapeCollectionPool, initialDefaultFrame, extendPrototype, DynamicPropertyContainer */
/* exported ShapeModifiers */

var ShapeModifiers = (function () {
  var ob = {};
  var modifiers = {};
  ob.registerModifier = registerModifier;
  ob.getModifier = getModifier;

  function registerModifier(nm, factory) {
    if (!modifiers[nm]) {
      modifiers[nm] = factory;
    }
  }

  function getModifier(nm, elem, data) {
    return new modifiers[nm](elem, data);
  }

  return ob;
}());

function ShapeModifier() {}
ShapeModifier.prototype.initModifierProperties = function () {};
ShapeModifier.prototype.addShapeToModifier = function () {};
ShapeModifier.prototype.addShape = function (data) {
  if (!this.closed) {
    // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
    data.sh.container.addDynamicProperty(data.sh);
    var shapeData = { shape: data.sh, data: data, localShapeCollection: shapeCollectionPool.newShapeCollection() };
    this.shapes.push(shapeData);
    this.addShapeToModifier(shapeData);
    if (this._isAnimated) {
      data.setAsAnimated();
    }
  }
};
ShapeModifier.prototype.init = function (elem, data) {
  this.shapes = [];
  this.elem = elem;
  this.initDynamicPropertyContainer(elem);
  this.initModifierProperties(elem, data);
  this.frameId = initialDefaultFrame;
  this.closed = false;
  this.k = false;
  if (this.dynamicProperties.length) {
    this.k = true;
  } else {
    this.getValue(true);
  }
};
ShapeModifier.prototype.processKeys = function () {
  if (this.elem.globalData.frameId === this.frameId) {
    return;
  }
  this.frameId = this.elem.globalData.frameId;
  this.iterateDynamicProperties();
};

extendPrototype([DynamicPropertyContainer], ShapeModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, segmentsLengthPool, bez, shapePool, ShapeModifiers */

function TrimModifier() {
}
extendPrototype([ShapeModifier], TrimModifier);
TrimModifier.prototype.initModifierProperties = function (elem, data) {
  this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
  this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
  this.sValue = 0;
  this.eValue = 0;
  this.getValue = this.processKeys;
  this.m = data.m;
  this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
};

TrimModifier.prototype.addShapeToModifier = function (shapeData) {
  shapeData.pathsData = [];
};

TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
  var segments = [];
  if (e <= 1) {
    segments.push({
      s: s,
      e: e,
    });
  } else if (s >= 1) {
    segments.push({
      s: s - 1,
      e: e - 1,
    });
  } else {
    segments.push({
      s: s,
      e: 1,
    });
    segments.push({
      s: 0,
      e: e - 1,
    });
  }
  var shapeSegments = [];
  var i;
  var len = segments.length;
  var segmentOb;
  for (i = 0; i < len; i += 1) {
    segmentOb = segments[i];
    if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
      var shapeS;
      var shapeE;
      if (segmentOb.s * totalModifierLength <= addedLength) {
        shapeS = 0;
      } else {
        shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
      }
      if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
        shapeE = 1;
      } else {
        shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength);
      }
      shapeSegments.push([shapeS, shapeE]);
    }
  }
  if (!shapeSegments.length) {
    shapeSegments.push([0, 0]);
  }
  return shapeSegments;
};

TrimModifier.prototype.releasePathsData = function (pathsData) {
  var i;
  var len = pathsData.length;
  for (i = 0; i < len; i += 1) {
    segmentsLengthPool.release(pathsData[i]);
  }
  pathsData.length = 0;
  return pathsData;
};

TrimModifier.prototype.processShapes = function (_isFirstFrame) {
  var s;
  var e;
  if (this._mdf || _isFirstFrame) {
    var o = (this.o.v % 360) / 360;
    if (o < 0) {
      o += 1;
    }
    if (this.s.v > 1) {
      s = 1 + o;
    } else if (this.s.v < 0) {
      s = 0 + o;
    } else {
      s = this.s.v + o;
    }
    if (this.e.v > 1) {
      e = 1 + o;
    } else if (this.e.v < 0) {
      e = 0 + o;
    } else {
      e = this.e.v + o;
    }

    if (s > e) {
      var _s = s;
      s = e;
      e = _s;
    }
    s = Math.round(s * 10000) * 0.0001;
    e = Math.round(e * 10000) * 0.0001;
    this.sValue = s;
    this.eValue = e;
  } else {
    s = this.sValue;
    e = this.eValue;
  }
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var pathsData;
  var pathData;
  var totalShapeLength;
  var totalModifierLength = 0;

  if (e === s) {
    for (i = 0; i < len; i += 1) {
      this.shapes[i].localShapeCollection.releaseShapes();
      this.shapes[i].shape._mdf = true;
      this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
      if (this._mdf) {
        this.shapes[i].pathsData.length = 0;
      }
    }
  } else if (!((e === 1 && s === 0) || (e === 0 && s === 1))) {
    var segments = [];
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
      if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
        shapeData.shape.paths = shapeData.localShapeCollection;
      } else {
        shapePaths = shapeData.shape.paths;
        jLen = shapePaths._length;
        totalShapeLength = 0;
        if (!shapeData.shape._mdf && shapeData.pathsData.length) {
          totalShapeLength = shapeData.totalShapeLength;
        } else {
          pathsData = this.releasePathsData(shapeData.pathsData);
          for (j = 0; j < jLen; j += 1) {
            pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
            pathsData.push(pathData);
            totalShapeLength += pathData.totalLength;
          }
          shapeData.totalShapeLength = totalShapeLength;
          shapeData.pathsData = pathsData;
        }

        totalModifierLength += totalShapeLength;
        shapeData.shape._mdf = true;
      }
    }
    var shapeS = s;
    var shapeE = e;
    var addedLength = 0;
    var edges;
    for (i = len - 1; i >= 0; i -= 1) {
      shapeData = this.shapes[i];
      if (shapeData.shape._mdf) {
        localShapeCollection = shapeData.localShapeCollection;
        localShapeCollection.releaseShapes();
        // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
        if (this.m === 2 && len > 1) {
          edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
          addedLength += shapeData.totalShapeLength;
        } else {
          edges = [[shapeS, shapeE]];
        }
        jLen = edges.length;
        for (j = 0; j < jLen; j += 1) {
          shapeS = edges[j][0];
          shapeE = edges[j][1];
          segments.length = 0;
          if (shapeE <= 1) {
            segments.push({
              s: shapeData.totalShapeLength * shapeS,
              e: shapeData.totalShapeLength * shapeE,
            });
          } else if (shapeS >= 1) {
            segments.push({
              s: shapeData.totalShapeLength * (shapeS - 1),
              e: shapeData.totalShapeLength * (shapeE - 1),
            });
          } else {
            segments.push({
              s: shapeData.totalShapeLength * shapeS,
              e: shapeData.totalShapeLength,
            });
            segments.push({
              s: 0,
              e: shapeData.totalShapeLength * (shapeE - 1),
            });
          }
          var newShapesData = this.addShapes(shapeData, segments[0]);
          if (segments[0].s !== segments[0].e) {
            if (segments.length > 1) {
              var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
              if (lastShapeInCollection.c) {
                var lastShape = newShapesData.pop();
                this.addPaths(newShapesData, localShapeCollection);
                newShapesData = this.addShapes(shapeData, segments[1], lastShape);
              } else {
                this.addPaths(newShapesData, localShapeCollection);
                newShapesData = this.addShapes(shapeData, segments[1]);
              }
            }
            this.addPaths(newShapesData, localShapeCollection);
          }
        }
        shapeData.shape.paths = localShapeCollection;
      }
    }
  } else if (this._mdf) {
    for (i = 0; i < len; i += 1) {
      // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
      // Don't remove this even if it's losing cached info.
      this.shapes[i].pathsData.length = 0;
      this.shapes[i].shape._mdf = true;
    }
  }
};

TrimModifier.prototype.addPaths = function (newPaths, localShapeCollection) {
  var i;
  var len = newPaths.length;
  for (i = 0; i < len; i += 1) {
    localShapeCollection.addShape(newPaths[i]);
  }
};

TrimModifier.prototype.addSegment = function (pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
  shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
  shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);
  if (newShape) {
    shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
  }
  shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
};

TrimModifier.prototype.addSegmentFromArray = function (points, shapePath, pos, newShape) {
  shapePath.setXYAt(points[1], points[5], 'o', pos);
  shapePath.setXYAt(points[2], points[6], 'i', pos + 1);
  if (newShape) {
    shapePath.setXYAt(points[0], points[4], 'v', pos);
  }
  shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
};

TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
  var pathsData = shapeData.pathsData;
  var shapePaths = shapeData.shape.paths.shapes;
  var i;
  var len = shapeData.shape.paths._length;
  var j;
  var jLen;
  var addedLength = 0;
  var currentLengthData;
  var segmentCount;
  var lengths;
  var segment;
  var shapes = [];
  var initPos;
  var newShape = true;
  if (!shapePath) {
    shapePath = shapePool.newElement();
    segmentCount = 0;
    initPos = 0;
  } else {
    segmentCount = shapePath._length;
    initPos = shapePath._length;
  }
  shapes.push(shapePath);
  for (i = 0; i < len; i += 1) {
    lengths = pathsData[i].lengths;
    shapePath.c = shapePaths[i].c;
    jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
    for (j = 1; j < jLen; j += 1) {
      currentLengthData = lengths[j - 1];
      if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
        addedLength += currentLengthData.addedLength;
        shapePath.c = false;
      } else if (addedLength > shapeSegment.e) {
        shapePath.c = false;
        break;
      } else {
        if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
          this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
          newShape = false;
        } else {
          segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
          this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
          // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
          newShape = false;
          shapePath.c = false;
        }
        addedLength += currentLengthData.addedLength;
        segmentCount += 1;
      }
    }
    if (shapePaths[i].c && lengths.length) {
      currentLengthData = lengths[j - 1];
      if (addedLength <= shapeSegment.e) {
        var segmentLength = lengths[j - 1].addedLength;
        if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
          this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
          newShape = false;
        } else {
          segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
          this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
          // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
          newShape = false;
          shapePath.c = false;
        }
      } else {
        shapePath.c = false;
      }
      addedLength += currentLengthData.addedLength;
      segmentCount += 1;
    }
    if (shapePath._length) {
      shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
      shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
    }
    if (addedLength > shapeSegment.e) {
      break;
    }
    if (i < len - 1) {
      shapePath = shapePool.newElement();
      newShape = true;
      shapes.push(shapePath);
      segmentCount = 0;
    }
  }
  return shapes;
};

ShapeModifiers.registerModifier('tm', TrimModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, shapePool, roundCorner, ShapeModifiers */

function RoundCornersModifier() {}
extendPrototype([ShapeModifier], RoundCornersModifier);
RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
  this._isAnimated = !!this.rd.effectsSequence.length;
};

RoundCornersModifier.prototype.processPath = function (path, round) {
  var clonedPath = shapePool.newElement();
  clonedPath.c = path.c;
  var i;
  var len = path._length;
  var currentV;
  var currentI;
  var currentO;
  var closerV;
  var distance;
  var newPosPerc;
  var index = 0;
  var vX;
  var vY;
  var oX;
  var oY;
  var iX;
  var iY;
  for (i = 0; i < len; i += 1) {
    currentV = path.v[i];
    currentO = path.o[i];
    currentI = path.i[i];
    if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
      if ((i === 0 || i === len - 1) && !path.c) {
        clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
        /* clonedPath.v[index] = currentV;
                clonedPath.o[index] = currentO;
                clonedPath.i[index] = currentI; */
        index += 1;
      } else {
        if (i === 0) {
          closerV = path.v[len - 1];
        } else {
          closerV = path.v[i - 1];
        }
        distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
        newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
        iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
        vX = iX;
        iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
        vY = iY;
        oX = vX - (vX - currentV[0]) * roundCorner;
        oY = vY - (vY - currentV[1]) * roundCorner;
        clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
        index += 1;

        if (i === len - 1) {
          closerV = path.v[0];
        } else {
          closerV = path.v[i + 1];
        }
        distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
        newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
        oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
        vX = oX;
        oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
        vY = oY;
        iX = vX - (vX - currentV[0]) * roundCorner;
        iY = vY - (vY - currentV[1]) * roundCorner;
        clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
        index += 1;
      }
    } else {
      clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
      index += 1;
    }
  }
  return clonedPath;
};

RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var rd = this.rd.v;

  if (rd !== 0) {
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      localShapeCollection = shapeData.localShapeCollection;
      if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
        localShapeCollection.releaseShapes();
        shapeData.shape._mdf = true;
        shapePaths = shapeData.shape.paths.shapes;
        jLen = shapeData.shape.paths._length;
        for (j = 0; j < jLen; j += 1) {
          localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
        }
      }
      shapeData.shape.paths = shapeData.localShapeCollection;
    }
  }
  if (!this.dynamicProperties.length) {
    this._mdf = false;
  }
};

ShapeModifiers.registerModifier('rd', RoundCornersModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, shapePool, ShapeModifiers */

function PuckerAndBloatModifier() {}
extendPrototype([ShapeModifier], PuckerAndBloatModifier);
PuckerAndBloatModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
  this._isAnimated = !!this.amount.effectsSequence.length;
};

PuckerAndBloatModifier.prototype.processPath = function (path, amount) {
  var percent = amount / 100;
  var centerPoint = [0, 0];
  var pathLength = path._length;
  var i = 0;
  for (i = 0; i < pathLength; i += 1) {
    centerPoint[0] += path.v[i][0];
    centerPoint[1] += path.v[i][1];
  }
  centerPoint[0] /= pathLength;
  centerPoint[1] /= pathLength;
  var clonedPath = shapePool.newElement();
  clonedPath.c = path.c;
  var vX;
  var vY;
  var oX;
  var oY;
  var iX;
  var iY;
  for (i = 0; i < pathLength; i += 1) {
    vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
    vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
    oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
    oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
    iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
    iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
    clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
  }
  return clonedPath;
};

PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var amount = this.amount.v;

  if (amount !== 0) {
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      localShapeCollection = shapeData.localShapeCollection;
      if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
        localShapeCollection.releaseShapes();
        shapeData.shape._mdf = true;
        shapePaths = shapeData.shape.paths.shapes;
        jLen = shapeData.shape.paths._length;
        for (j = 0; j < jLen; j += 1) {
          localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
        }
      }
      shapeData.shape.paths = shapeData.localShapeCollection;
    }
  }
  if (!this.dynamicProperties.length) {
    this._mdf = false;
  }
};
ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);

/* global extendPrototype, ShapeModifier, TransformPropertyFactory, PropertyFactory, Matrix, ShapeModifiers */

function RepeaterModifier() {}
extendPrototype([ShapeModifier], RepeaterModifier);

RepeaterModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
  this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
  this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
  this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
  this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
  this.data = data;
  if (!this.dynamicProperties.length) {
    this.getValue(true);
  }
  this._isAnimated = !!this.dynamicProperties.length;
  this.pMatrix = new Matrix();
  this.rMatrix = new Matrix();
  this.sMatrix = new Matrix();
  this.tMatrix = new Matrix();
  this.matrix = new Matrix();
};

RepeaterModifier.prototype.applyTransforms = function (pMatrix, rMatrix, sMatrix, transform, perc, inv) {
  var dir = inv ? -1 : 1;
  var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
  var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
  pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
  rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
  rMatrix.rotate(-transform.r.v * dir * perc);
  rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
  sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
  sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
  sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
};

RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
  this.elem = elem;
  this.arr = arr;
  this.pos = pos;
  this.elemsData = elemsData;
  this._currentCopies = 0;
  this._elements = [];
  this._groups = [];
  this.frameId = -1;
  this.initDynamicPropertyContainer(elem);
  this.initModifierProperties(elem, arr[pos]);
  while (pos > 0) {
    pos -= 1;
    // this._elements.unshift(arr.splice(pos,1)[0]);
    this._elements.unshift(arr[pos]);
  }
  if (this.dynamicProperties.length) {
    this.k = true;
  } else {
    this.getValue(true);
  }
};

RepeaterModifier.prototype.resetElements = function (elements) {
  var i;
  var len = elements.length;
  for (i = 0; i < len; i += 1) {
    elements[i]._processed = false;
    if (elements[i].ty === 'gr') {
      this.resetElements(elements[i].it);
    }
  }
};

RepeaterModifier.prototype.cloneElements = function (elements) {
  var newElements = JSON.parse(JSON.stringify(elements));
  this.resetElements(newElements);
  return newElements;
};

RepeaterModifier.prototype.changeGroupRender = function (elements, renderFlag) {
  var i;
  var len = elements.length;
  for (i = 0; i < len; i += 1) {
    elements[i]._render = renderFlag;
    if (elements[i].ty === 'gr') {
      this.changeGroupRender(elements[i].it, renderFlag);
    }
  }
};

RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
  var items;
  var itemsTransform;
  var i;
  var dir;
  var cont;
  var hasReloaded = false;
  if (this._mdf || _isFirstFrame) {
    var copies = Math.ceil(this.c.v);
    if (this._groups.length < copies) {
      while (this._groups.length < copies) {
        var group = {
          it: this.cloneElements(this._elements),
          ty: 'gr',
        };
        group.it.push({
          a: { a: 0, ix: 1, k: [0, 0] }, nm: 'Transform', o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: 'tr',
        });

        this.arr.splice(0, 0, group);
        this._groups.splice(0, 0, group);
        this._currentCopies += 1;
      }
      this.elem.reloadShapes();
      hasReloaded = true;
    }
    cont = 0;
    var renderFlag;
    for (i = 0; i <= this._groups.length - 1; i += 1) {
      renderFlag = cont < copies;
      this._groups[i]._render = renderFlag;
      this.changeGroupRender(this._groups[i].it, renderFlag);
      if (!renderFlag) {
        var elems = this.elemsData[i].it;
        var transformData = elems[elems.length - 1];
        if (transformData.transform.op.v !== 0) {
          transformData.transform.op._mdf = true;
          transformData.transform.op.v = 0;
        } else {
          transformData.transform.op._mdf = false;
        }
      }
      cont += 1;
    }

    this._currentCopies = copies;
    /// /

    var offset = this.o.v;
    var offsetModulo = offset % 1;
    var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
    var pProps = this.pMatrix.props;
    var rProps = this.rMatrix.props;
    var sProps = this.sMatrix.props;
    this.pMatrix.reset();
    this.rMatrix.reset();
    this.sMatrix.reset();
    this.tMatrix.reset();
    this.matrix.reset();
    var iteration = 0;

    if (offset > 0) {
      while (iteration < roundOffset) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
        iteration += 1;
      }
      if (offsetModulo) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
        iteration += offsetModulo;
      }
    } else if (offset < 0) {
      while (iteration > roundOffset) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
        iteration -= 1;
      }
      if (offsetModulo) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
        iteration -= offsetModulo;
      }
    }
    i = this.data.m === 1 ? 0 : this._currentCopies - 1;
    dir = this.data.m === 1 ? 1 : -1;
    cont = this._currentCopies;
    var j;
    var jLen;
    while (cont) {
      items = this.elemsData[i].it;
      itemsTransform = items[items.length - 1].transform.mProps.v.props;
      jLen = itemsTransform.length;
      items[items.length - 1].transform.mProps._mdf = true;
      items[items.length - 1].transform.op._mdf = true;
      items[items.length - 1].transform.op.v = this._currentCopies === 1
        ? this.so.v
        : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));

      if (iteration !== 0) {
        if ((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
        }
        this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
        this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
        this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);

        for (j = 0; j < jLen; j += 1) {
          itemsTransform[j] = this.matrix.props[j];
        }
        this.matrix.reset();
      } else {
        this.matrix.reset();
        for (j = 0; j < jLen; j += 1) {
          itemsTransform[j] = this.matrix.props[j];
        }
      }
      iteration += 1;
      cont -= 1;
      i += dir;
    }
  } else {
    cont = this._currentCopies;
    i = 0;
    dir = 1;
    while (cont) {
      items = this.elemsData[i].it;
      itemsTransform = items[items.length - 1].transform.mProps.v.props;
      items[items.length - 1].transform.mProps._mdf = false;
      items[items.length - 1].transform.op._mdf = false;
      cont -= 1;
      i += dir;
    }
  }
  return hasReloaded;
};

RepeaterModifier.prototype.addShape = function () {};

ShapeModifiers.registerModifier('rp', RepeaterModifier);

/* global createSizedArray, shapePool */

function ShapeCollection() {
  this._length = 0;
  this._maxLength = 4;
  this.shapes = createSizedArray(this._maxLength);
}

ShapeCollection.prototype.addShape = function (shapeData) {
  if (this._length === this._maxLength) {
    this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
    this._maxLength *= 2;
  }
  this.shapes[this._length] = shapeData;
  this._length += 1;
};

ShapeCollection.prototype.releaseShapes = function () {
  var i;
  for (i = 0; i < this._length; i += 1) {
    shapePool.release(this.shapes[i]);
  }
  this._length = 0;
};

/* global createSizedArray, createTypedArray, PropertyFactory, extendPrototype, DynamicPropertyContainer */

function DashProperty(elem, data, renderer, container) {
  this.elem = elem;
  this.frameId = -1;
  this.dataProps = createSizedArray(data.length);
  this.renderer = renderer;
  this.k = false;
  this.dashStr = '';
  this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
  this.dashoffset = createTypedArray('float32', 1);
  this.initDynamicPropertyContainer(container);
  var i;
  var len = data.length || 0;
  var prop;
  for (i = 0; i < len; i += 1) {
    prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
    this.k = prop.k || this.k;
    this.dataProps[i] = { n: data[i].n, p: prop };
  }
  if (!this.k) {
    this.getValue(true);
  }
  this._isAnimated = this.k;
}

DashProperty.prototype.getValue = function (forceRender) {
  if (this.elem.globalData.frameId === this.frameId && !forceRender) {
    return;
  }
  this.frameId = this.elem.globalData.frameId;
  this.iterateDynamicProperties();
  this._mdf = this._mdf || forceRender;
  if (this._mdf) {
    var i = 0;
    var len = this.dataProps.length;
    if (this.renderer === 'svg') {
      this.dashStr = '';
    }
    for (i = 0; i < len; i += 1) {
      if (this.dataProps[i].n !== 'o') {
        if (this.renderer === 'svg') {
          this.dashStr += ' ' + this.dataProps[i].p.v;
        } else {
          this.dashArray[i] = this.dataProps[i].p.v;
        }
      } else {
        this.dashoffset[0] = this.dataProps[i].p.v;
      }
    }
  }
};
extendPrototype([DynamicPropertyContainer], DashProperty);

/* global createTypedArray, PropertyFactory, extendPrototype, DynamicPropertyContainer */
function GradientProperty(elem, data, container) {
  this.data = data;
  this.c = createTypedArray('uint8c', data.p * 4);
  var cLength = data.k.k[0].s ? (data.k.k[0].s.length - data.p * 4) : data.k.k.length - data.p * 4;
  this.o = createTypedArray('float32', cLength);
  this._cmdf = false;
  this._omdf = false;
  this._collapsable = this.checkCollapsable();
  this._hasOpacity = cLength;
  this.initDynamicPropertyContainer(container);
  this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
  this.k = this.prop.k;
  this.getValue(true);
}

GradientProperty.prototype.comparePoints = function (values, points) {
  var i = 0;
  var len = this.o.length / 2;
  var diff;
  while (i < len) {
    diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
    if (diff > 0.01) {
      return false;
    }
    i += 1;
  }
  return true;
};

GradientProperty.prototype.checkCollapsable = function () {
  if (this.o.length / 2 !== this.c.length / 4) {
    return false;
  }
  if (this.data.k.k[0].s) {
    var i = 0;
    var len = this.data.k.k.length;
    while (i < len) {
      if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
        return false;
      }
      i += 1;
    }
  } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
    return false;
  }
  return true;
};

GradientProperty.prototype.getValue = function (forceRender) {
  this.prop.getValue();
  this._mdf = false;
  this._cmdf = false;
  this._omdf = false;
  if (this.prop._mdf || forceRender) {
    var i;
    var len = this.data.p * 4;
    var mult;
    var val;
    for (i = 0; i < len; i += 1) {
      mult = i % 4 === 0 ? 100 : 255;
      val = Math.round(this.prop.v[i] * mult);
      if (this.c[i] !== val) {
        this.c[i] = val;
        this._cmdf = !forceRender;
      }
    }
    if (this.o.length) {
      len = this.prop.v.length;
      for (i = this.data.p * 4; i < len; i += 1) {
        mult = i % 2 === 0 ? 100 : 1;
        val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];
        if (this.o[i - this.data.p * 4] !== val) {
          this.o[i - this.data.p * 4] = val;
          this._omdf = !forceRender;
        }
      }
    }
    this._mdf = !forceRender;
  }
};

extendPrototype([DynamicPropertyContainer], GradientProperty);

/* exported buildShapeString */

var buildShapeString = function (pathNodes, length, closed, mat) {
  if (length === 0) {
    return '';
  }
  var _o = pathNodes.o;
  var _i = pathNodes.i;
  var _v = pathNodes.v;
  var i;
  var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
  for (i = 1; i < length; i += 1) {
    shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
  }
  if (closed && length) {
    shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
    shapeString += 'z';
  }
  return shapeString;
};

/* global Howl */
/* exported audioControllerFactory */

var audioControllerFactory = (function () {
  function AudioController(audioFactory) {
    this.audios = [];
    this.audioFactory = audioFactory;
    this._volume = 1;
    this._isMuted = false;
  }

  AudioController.prototype = {
    addAudio: function (audio) {
      this.audios.push(audio);
    },
    pause: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].pause();
      }
    },
    resume: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].resume();
      }
    },
    setRate: function (rateValue) {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].setRate(rateValue);
      }
    },
    createAudio: function (assetPath) {
      if (this.audioFactory) {
        return this.audioFactory(assetPath);
      } if (Howl) {
        return new Howl({
          src: [assetPath],
        });
      }
      return {
        isPlaying: false,
        play: function () { this.isPlaying = true; },
        seek: function () { this.isPlaying = false; },
        playing: function () {},
        rate: function () {},
        setVolume: function () {},
      };
    },
    setAudioFactory: function (audioFactory) {
      this.audioFactory = audioFactory;
    },
    setVolume: function (value) {
      this._volume = value;
      this._updateVolume();
    },
    mute: function () {
      this._isMuted = true;
      this._updateVolume();
    },
    unmute: function () {
      this._isMuted = false;
      this._updateVolume();
    },
    getVolume: function () {
      return this._volume;
    },
    _updateVolume: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
      }
    },
  };

  return function () {
    return new AudioController();
  };
}());

/* global createTag, createNS, isSafari, assetLoader */
/* exported ImagePreloader */

var ImagePreloader = (function () {
  var proxyImage = (function () {
    var canvas = createTag('canvas');
    canvas.width = 1;
    canvas.height = 1;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 1, 1);
    return canvas;
  }());

  function imageLoaded() {
    this.loadedAssets += 1;
    if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
      if (this.imagesLoadedCb) {
        this.imagesLoadedCb(null);
      }
    }
  }
  function footageLoaded() {
    this.loadedFootagesCount += 1;
    if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
      if (this.imagesLoadedCb) {
        this.imagesLoadedCb(null);
      }
    }
  }

  function getAssetsPath(assetData, assetsPath, originalPath) {
    var path = '';
    if (assetData.e) {
      path = assetData.p;
    } else if (assetsPath) {
      var imagePath = assetData.p;
      if (imagePath.indexOf('images/') !== -1) {
        imagePath = imagePath.split('/')[1];
      }
      path = assetsPath + imagePath;
    } else {
      path = originalPath;
      path += assetData.u ? assetData.u : '';
      path += assetData.p;
    }
    return path;
  }

  function testImageLoaded(img) {
    var _count = 0;
    var intervalId = setInterval(function () {
      var box = img.getBBox();
      if (box.width || _count > 500) {
        this._imageLoaded();
        clearInterval(intervalId);
      }
      _count += 1;
    }.bind(this), 50);
  }

  function createImageData(assetData) {
    var path = getAssetsPath(assetData, this.assetsPath, this.path);
    var img = createNS('image');
    if (isSafari) {
      this.testImageLoaded(img);
    } else {
      img.addEventListener('load', this._imageLoaded, false);
    }
    img.addEventListener('error', function () {
      ob.img = proxyImage;
      this._imageLoaded();
    }.bind(this), false);
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
    if (this._elementHelper.append) {
      this._elementHelper.append(img);
    } else {
      this._elementHelper.appendChild(img);
    }
    var ob = {
      img: img,
      assetData: assetData,
    };
    return ob;
  }

  function createImgData(assetData) {
    var path = getAssetsPath(assetData, this.assetsPath, this.path);
    var img = createTag('img');
    img.crossOrigin = 'anonymous';
    img.addEventListener('load', this._imageLoaded, false);
    img.addEventListener('error', function () {
      ob.img = proxyImage;
      this._imageLoaded();
    }.bind(this), false);
    img.src = path;
    var ob = {
      img: img,
      assetData: assetData,
    };
    return ob;
  }

  function createFootageData(data) {
    var ob = {
      assetData: data,
    };
    var path = getAssetsPath(data, this.assetsPath, this.path);
    assetLoader.load(path, function (footageData) {
      ob.img = footageData;
      this._footageLoaded();
    }.bind(this), function () {
      ob.img = {};
      this._footageLoaded();
    }.bind(this));
    return ob;
  }

  function loadAssets(assets, cb) {
    this.imagesLoadedCb = cb;
    var i;
    var len = assets.length;
    for (i = 0; i < len; i += 1) {
      if (!assets[i].layers) {
        if (!assets[i].t || assets[i].t === 'seq') {
          this.totalImages += 1;
          this.images.push(this._createImageData(assets[i]));
        } else if (assets[i].t === 3) {
          this.totalFootages += 1;
          this.images.push(this.createFootageData(assets[i]));
        }
      }
    }
  }

  function setPath(path) {
    this.path = path || '';
  }

  function setAssetsPath(path) {
    this.assetsPath = path || '';
  }

  function getAsset(assetData) {
    var i = 0;
    var len = this.images.length;
    while (i < len) {
      if (this.images[i].assetData === assetData) {
        return this.images[i].img;
      }
      i += 1;
    }
    return null;
  }

  function destroy() {
    this.imagesLoadedCb = null;
    this.images.length = 0;
  }

  function loadedImages() {
    return this.totalImages === this.loadedAssets;
  }

  function loadedFootages() {
    return this.totalFootages === this.loadedFootagesCount;
  }

  function setCacheType(type, elementHelper) {
    if (type === 'svg') {
      this._elementHelper = elementHelper;
      this._createImageData = this.createImageData.bind(this);
    } else {
      this._createImageData = this.createImgData.bind(this);
    }
  }

  function ImagePreloaderFactory() {
    this._imageLoaded = imageLoaded.bind(this);
    this._footageLoaded = footageLoaded.bind(this);
    this.testImageLoaded = testImageLoaded.bind(this);
    this.createFootageData = createFootageData.bind(this);
    this.assetsPath = '';
    this.path = '';
    this.totalImages = 0;
    this.totalFootages = 0;
    this.loadedAssets = 0;
    this.loadedFootagesCount = 0;
    this.imagesLoadedCb = null;
    this.images = [];
  }

  ImagePreloaderFactory.prototype = {
    loadAssets: loadAssets,
    setAssetsPath: setAssetsPath,
    setPath: setPath,
    loadedImages: loadedImages,
    loadedFootages: loadedFootages,
    destroy: destroy,
    getAsset: getAsset,
    createImgData: createImgData,
    createImageData: createImageData,
    imageLoaded: imageLoaded,
    footageLoaded: footageLoaded,
    setCacheType: setCacheType,
  };

  return ImagePreloaderFactory;
}());

/* exported featureSupport */

var featureSupport = (function () {
  var ob = {
    maskType: true,
  };
  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    ob.maskType = false;
  }
  return ob;
}());

/* global createNS */
/* exported filtersFactory */

var filtersFactory = (function () {
  var ob = {};
  ob.createFilter = createFilter;
  ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

  function createFilter(filId, skipCoordinates) {
    var fil = createNS('filter');
    fil.setAttribute('id', filId);
    if (skipCoordinates !== true) {
      fil.setAttribute('filterUnits', 'objectBoundingBox');
      fil.setAttribute('x', '0%');
      fil.setAttribute('y', '0%');
      fil.setAttribute('width', '100%');
      fil.setAttribute('height', '100%');
    }
    return fil;
  }

  function createAlphaToLuminanceFilter() {
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
    feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
    return feColorMatrix;
  }

  return ob;
}());

/* exported assetLoader */

var assetLoader = (function () {
  function formatResponse(xhr) {
    if (xhr.response && typeof xhr.response === 'object') {
      return xhr.response;
    } if (xhr.response && typeof xhr.response === 'string') {
      return JSON.parse(xhr.response);
    } if (xhr.responseText) {
      return JSON.parse(xhr.responseText);
    }
    return null;
  }

  function loadAsset(path, callback, errorCallback) {
    var response;
    var xhr = new XMLHttpRequest();
    // set responseType after calling open or IE will break.
    try {
      // This crashes on Android WebView prior to KitKat
      xhr.responseType = 'json';
    } catch (err) {} // eslint-disable-line no-empty
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          response = formatResponse(xhr);
          callback(response);
        } else {
          try {
            response = formatResponse(xhr);
            callback(response);
          } catch (err) {
            if (errorCallback) {
              errorCallback(err);
            }
          }
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
  }
  return {
    load: loadAsset,
  };
}());

/* global createSizedArray, PropertyFactory, TextAnimatorDataProperty, bez, addHueToRGB,
  addSaturationToRGB, addBrightnessToRGB, LetterProps, Matrix, extendPrototype, DynamicPropertyContainer */

function TextAnimatorProperty(textData, renderType, elem) {
  this._isFirstFrame = true;
  this._hasMaskedPath = false;
  this._frameId = -1;
  this._textData = textData;
  this._renderType = renderType;
  this._elem = elem;
  this._animatorsData = createSizedArray(this._textData.a.length);
  this._pathData = {};
  this._moreOptions = {
    alignment: {},
  };
  this.renderedLetters = [];
  this.lettersChangedFlag = false;
  this.initDynamicPropertyContainer(elem);
}

TextAnimatorProperty.prototype.searchProperties = function () {
  var i;
  var len = this._textData.a.length;
  var animatorProps;
  var getProp = PropertyFactory.getProp;
  for (i = 0; i < len; i += 1) {
    animatorProps = this._textData.a[i];
    this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
  }
  if (this._textData.p && 'm' in this._textData.p) {
    this._pathData = {
      a: getProp(this._elem, this._textData.p.a, 0, 0, this),
      f: getProp(this._elem, this._textData.p.f, 0, 0, this),
      l: getProp(this._elem, this._textData.p.l, 0, 0, this),
      r: getProp(this._elem, this._textData.p.r, 0, 0, this),
      p: getProp(this._elem, this._textData.p.p, 0, 0, this),
      m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
    };
    this._hasMaskedPath = true;
  } else {
    this._hasMaskedPath = false;
  }
  this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
};

TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
  this.lettersChangedFlag = lettersChangedFlag;
  if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
    return;
  }
  this._isFirstFrame = false;
  var alignment = this._moreOptions.alignment.v;
  var animators = this._animatorsData;
  var textData = this._textData;
  var matrixHelper = this.mHelper;
  var renderType = this._renderType;
  var renderedLettersCount = this.renderedLetters.length;
  var xPos;
  var yPos;
  var i;
  var len;
  var letters = documentData.l;
  var pathInfo;
  var currentLength;
  var currentPoint;
  var segmentLength;
  var flag;
  var pointInd;
  var segmentInd;
  var prevPoint;
  var points;
  var segments;
  var partialLength;
  var totalLength;
  var perc;
  var tanAngle;
  var mask;
  if (this._hasMaskedPath) {
    mask = this._pathData.m;
    if (!this._pathData.n || this._pathData._mdf) {
      var paths = mask.v;
      if (this._pathData.r.v) {
        paths = paths.reverse();
      }
      // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
      pathInfo = {
        tLength: 0,
        segments: [],
      };
      len = paths._length - 1;
      var bezierData;
      totalLength = 0;
      for (i = 0; i < len; i += 1) {
        bezierData = bez.buildBezierData(paths.v[i],
          paths.v[i + 1],
          [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
          [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
        pathInfo.tLength += bezierData.segmentLength;
        pathInfo.segments.push(bezierData);
        totalLength += bezierData.segmentLength;
      }
      i = len;
      if (mask.v.c) {
        bezierData = bez.buildBezierData(paths.v[i],
          paths.v[0],
          [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
          [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
        pathInfo.tLength += bezierData.segmentLength;
        pathInfo.segments.push(bezierData);
        totalLength += bezierData.segmentLength;
      }
      this._pathData.pi = pathInfo;
    }
    pathInfo = this._pathData.pi;

    currentLength = this._pathData.f.v;
    segmentInd = 0;
    pointInd = 1;
    segmentLength = 0;
    flag = true;
    segments = pathInfo.segments;
    if (currentLength < 0 && mask.v.c) {
      if (pathInfo.tLength < Math.abs(currentLength)) {
        currentLength = -Math.abs(currentLength) % pathInfo.tLength;
      }
      segmentInd = segments.length - 1;
      points = segments[segmentInd].points;
      pointInd = points.length - 1;
      while (currentLength < 0) {
        currentLength += points[pointInd].partialLength;
        pointInd -= 1;
        if (pointInd < 0) {
          segmentInd -= 1;
          points = segments[segmentInd].points;
          pointInd = points.length - 1;
        }
      }
    }
    points = segments[segmentInd].points;
    prevPoint = points[pointInd - 1];
    currentPoint = points[pointInd];
    partialLength = currentPoint.partialLength;
  }

  len = letters.length;
  xPos = 0;
  yPos = 0;
  var yOff = documentData.finalSize * 1.2 * 0.714;
  var firstLine = true;
  var animatorProps;
  var animatorSelector;
  var j;
  var jLen;
  var letterValue;

  jLen = animators.length;

  var mult;
  var ind = -1;
  var offf;
  var xPathPos;
  var yPathPos;
  var initPathPos = currentLength;
  var initSegmentInd = segmentInd;
  var initPointInd = pointInd;
  var currentLine = -1;
  var elemOpacity;
  var sc;
  var sw;
  var fc;
  var k;
  var letterSw;
  var letterSc;
  var letterFc;
  var letterM = '';
  var letterP = this.defaultPropsArray;
  var letterO;

  //
  if (documentData.j === 2 || documentData.j === 1) {
    var animatorJustifyOffset = 0;
    var animatorFirstCharOffset = 0;
    var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
    var lastIndex = 0;
    var isNewLine = true;

    for (i = 0; i < len; i += 1) {
      if (letters[i].n) {
        if (animatorJustifyOffset) {
          animatorJustifyOffset += animatorFirstCharOffset;
        }
        while (lastIndex < i) {
          letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
          lastIndex += 1;
        }
        animatorJustifyOffset = 0;
        isNewLine = true;
      } else {
        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          if (animatorProps.t.propType) {
            if (isNewLine && documentData.j === 2) {
              animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
            }
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
            } else {
              animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
            }
          }
        }
        isNewLine = false;
      }
    }
    if (animatorJustifyOffset) {
      animatorJustifyOffset += animatorFirstCharOffset;
    }
    while (lastIndex < i) {
      letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
      lastIndex += 1;
    }
  }
  //

  for (i = 0; i < len; i += 1) {
    matrixHelper.reset();
    elemOpacity = 1;
    if (letters[i].n) {
      xPos = 0;
      yPos += documentData.yOffset;
      yPos += firstLine ? 1 : 0;
      currentLength = initPathPos;
      firstLine = false;
      if (this._hasMaskedPath) {
        segmentInd = initSegmentInd;
        pointInd = initPointInd;
        points = segments[segmentInd].points;
        prevPoint = points[pointInd - 1];
        currentPoint = points[pointInd];
        partialLength = currentPoint.partialLength;
        segmentLength = 0;
      }
      letterM = '';
      letterFc = '';
      letterSw = '';
      letterO = '';
      letterP = this.defaultPropsArray;
    } else {
      if (this._hasMaskedPath) {
        if (currentLine !== letters[i].line) {
          switch (documentData.j) {
            case 1:
              currentLength += totalLength - documentData.lineWidths[letters[i].line];
              break;
            case 2:
              currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
              break;
            default:
              break;
          }
          currentLine = letters[i].line;
        }
        if (ind !== letters[i].ind) {
          if (letters[ind]) {
            currentLength += letters[ind].extra;
          }
          currentLength += letters[i].an / 2;
          ind = letters[i].ind;
        }
        currentLength += (alignment[0] * letters[i].an) * 0.005;
        var animatorOffset = 0;
        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          if (animatorProps.p.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorOffset += animatorProps.p.v[0] * mult[0];
            } else {
              animatorOffset += animatorProps.p.v[0] * mult;
            }
          }
          if (animatorProps.a.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorOffset += animatorProps.a.v[0] * mult[0];
            } else {
              animatorOffset += animatorProps.a.v[0] * mult;
            }
          }
        }
        flag = true;
        // Force alignment only works with a single line for now
        if (this._pathData.a.v) {
          currentLength = letters[0].an * 0.5 + ((totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind) / (len - 1);
          currentLength += this._pathData.f.v;
        }
        while (flag) {
          if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
            perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
            xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
            yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
            matrixHelper.translate((-alignment[0] * letters[i].an) * 0.005, -(alignment[1] * yOff) * 0.01);
            flag = false;
          } else if (points) {
            segmentLength += currentPoint.partialLength;
            pointInd += 1;
            if (pointInd >= points.length) {
              pointInd = 0;
              segmentInd += 1;
              if (!segments[segmentInd]) {
                if (mask.v.c) {
                  pointInd = 0;
                  segmentInd = 0;
                  points = segments[segmentInd].points;
                } else {
                  segmentLength -= currentPoint.partialLength;
                  points = null;
                }
              } else {
                points = segments[segmentInd].points;
              }
            }
            if (points) {
              prevPoint = currentPoint;
              currentPoint = points[pointInd];
              partialLength = currentPoint.partialLength;
            }
          }
        }
        offf = letters[i].an / 2 - letters[i].add;
        matrixHelper.translate(-offf, 0, 0);
      } else {
        offf = letters[i].an / 2 - letters[i].add;
        matrixHelper.translate(-offf, 0, 0);

        // Grouping alignment
        matrixHelper.translate((-alignment[0] * letters[i].an) * 0.005, (-alignment[1] * yOff) * 0.01, 0);
      }

      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.t.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
          if (xPos !== 0 || documentData.j !== 0) {
            if (this._hasMaskedPath) {
              if (mult.length) {
                currentLength += animatorProps.t.v * mult[0];
              } else {
                currentLength += animatorProps.t.v * mult;
              }
            } else if (mult.length) {
              xPos += animatorProps.t.v * mult[0];
            } else {
              xPos += animatorProps.t.v * mult;
            }
          }
        }
      }
      if (documentData.strokeWidthAnim) {
        sw = documentData.sw || 0;
      }
      if (documentData.strokeColorAnim) {
        if (documentData.sc) {
          sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
        } else {
          sc = [0, 0, 0];
        }
      }
      if (documentData.fillColorAnim && documentData.fc) {
        fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.a.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

          if (mult.length) {
            matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
          } else {
            matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
          }
        }
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.s.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          if (mult.length) {
            matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult[0]), 1 + ((animatorProps.s.v[1] - 1) * mult[1]), 1);
          } else {
            matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult), 1 + ((animatorProps.s.v[1] - 1) * mult), 1);
          }
        }
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        animatorSelector = animators[j].s;
        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
        if (animatorProps.sk.propType) {
          if (mult.length) {
            matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
          } else {
            matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
          }
        }
        if (animatorProps.r.propType) {
          if (mult.length) {
            matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
          } else {
            matrixHelper.rotateZ(-animatorProps.r.v * mult);
          }
        }
        if (animatorProps.ry.propType) {
          if (mult.length) {
            matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
          } else {
            matrixHelper.rotateY(animatorProps.ry.v * mult);
          }
        }
        if (animatorProps.rx.propType) {
          if (mult.length) {
            matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
          } else {
            matrixHelper.rotateX(animatorProps.rx.v * mult);
          }
        }
        if (animatorProps.o.propType) {
          if (mult.length) {
            elemOpacity += ((animatorProps.o.v) * mult[0] - elemOpacity) * mult[0];
          } else {
            elemOpacity += ((animatorProps.o.v) * mult - elemOpacity) * mult;
          }
        }
        if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
          if (mult.length) {
            sw += animatorProps.sw.v * mult[0];
          } else {
            sw += animatorProps.sw.v * mult;
          }
        }
        if (documentData.strokeColorAnim && animatorProps.sc.propType) {
          for (k = 0; k < 3; k += 1) {
            if (mult.length) {
              sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
            } else {
              sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
            }
          }
        }
        if (documentData.fillColorAnim && documentData.fc) {
          if (animatorProps.fc.propType) {
            for (k = 0; k < 3; k += 1) {
              if (mult.length) {
                fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
              } else {
                fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
              }
            }
          }
          if (animatorProps.fh.propType) {
            if (mult.length) {
              fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
            } else {
              fc = addHueToRGB(fc, animatorProps.fh.v * mult);
            }
          }
          if (animatorProps.fs.propType) {
            if (mult.length) {
              fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
            } else {
              fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
            }
          }
          if (animatorProps.fb.propType) {
            if (mult.length) {
              fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
            } else {
              fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
            }
          }
        }
      }

      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;

        if (animatorProps.p.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          if (this._hasMaskedPath) {
            if (mult.length) {
              matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
            } else {
              matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
            }
          } else if (mult.length) {
            matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
          } else {
            matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
          }
        }
      }
      if (documentData.strokeWidthAnim) {
        letterSw = sw < 0 ? 0 : sw;
      }
      if (documentData.strokeColorAnim) {
        letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
      }
      if (documentData.fillColorAnim && documentData.fc) {
        letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
      }

      if (this._hasMaskedPath) {
        matrixHelper.translate(0, -documentData.ls);

        matrixHelper.translate(0, (alignment[1] * yOff) * 0.01 + yPos, 0);
        if (this._pathData.p.v) {
          tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
          var rot = (Math.atan(tanAngle) * 180) / Math.PI;
          if (currentPoint.point[0] < prevPoint.point[0]) {
            rot += 180;
          }
          matrixHelper.rotate((-rot * Math.PI) / 180);
        }
        matrixHelper.translate(xPathPos, yPathPos, 0);
        currentLength -= (alignment[0] * letters[i].an) * 0.005;
        if (letters[i + 1] && ind !== letters[i + 1].ind) {
          currentLength += letters[i].an / 2;
          currentLength += (documentData.tr * 0.001) * documentData.finalSize;
        }
      } else {
        matrixHelper.translate(xPos, yPos, 0);

        if (documentData.ps) {
          // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
          matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
        }
        switch (documentData.j) {
          case 1:
            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
            break;
          case 2:
            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
            break;
          default:
            break;
        }
        matrixHelper.translate(0, -documentData.ls);
        matrixHelper.translate(offf, 0, 0);
        matrixHelper.translate((alignment[0] * letters[i].an) * 0.005, (alignment[1] * yOff) * 0.01, 0);
        xPos += letters[i].l + (documentData.tr * 0.001) * documentData.finalSize;
      }
      if (renderType === 'html') {
        letterM = matrixHelper.toCSS();
      } else if (renderType === 'svg') {
        letterM = matrixHelper.to2dCSS();
      } else {
        letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
      }
      letterO = elemOpacity;
    }

    if (renderedLettersCount <= i) {
      letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
      this.renderedLetters.push(letterValue);
      renderedLettersCount += 1;
      this.lettersChangedFlag = true;
    } else {
      letterValue = this.renderedLetters[i];
      this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
    }
  }
};

TextAnimatorProperty.prototype.getValue = function () {
  if (this._elem.globalData.frameId === this._frameId) {
    return;
  }
  this._frameId = this._elem.globalData.frameId;
  this.iterateDynamicProperties();
};

TextAnimatorProperty.prototype.mHelper = new Matrix();
TextAnimatorProperty.prototype.defaultPropsArray = [];
extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

/* global PropertyFactory, degToRads, TextSelectorProp */
/* exported TextAnimatorDataProperty */

function TextAnimatorDataProperty(elem, animatorProps, container) {
  var defaultData = { propType: false };
  var getProp = PropertyFactory.getProp;
  var textAnimatorAnimatables = animatorProps.a;
  this.a = {
    r: textAnimatorAnimatables.r ? getProp(elem, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
    rx: textAnimatorAnimatables.rx ? getProp(elem, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
    ry: textAnimatorAnimatables.ry ? getProp(elem, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
    sk: textAnimatorAnimatables.sk ? getProp(elem, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
    sa: textAnimatorAnimatables.sa ? getProp(elem, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
    s: textAnimatorAnimatables.s ? getProp(elem, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
    a: textAnimatorAnimatables.a ? getProp(elem, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
    o: textAnimatorAnimatables.o ? getProp(elem, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
    p: textAnimatorAnimatables.p ? getProp(elem, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
    sw: textAnimatorAnimatables.sw ? getProp(elem, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
    sc: textAnimatorAnimatables.sc ? getProp(elem, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
    fc: textAnimatorAnimatables.fc ? getProp(elem, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
    fh: textAnimatorAnimatables.fh ? getProp(elem, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
    fs: textAnimatorAnimatables.fs ? getProp(elem, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
    fb: textAnimatorAnimatables.fb ? getProp(elem, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
    t: textAnimatorAnimatables.t ? getProp(elem, textAnimatorAnimatables.t, 0, 0, container) : defaultData,
  };

  this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
  this.s.t = animatorProps.s.t;
}

function LetterProps(o, sw, sc, fc, m, p) {
  this.o = o;
  this.sw = sw;
  this.sc = sc;
  this.fc = fc;
  this.m = m;
  this.p = p;
  this._mdf = {
    o: true,
    sw: !!sw,
    sc: !!sc,
    fc: !!fc,
    m: true,
    p: true,
  };
}

LetterProps.prototype.update = function (o, sw, sc, fc, m, p) {
  this._mdf.o = false;
  this._mdf.sw = false;
  this._mdf.sc = false;
  this._mdf.fc = false;
  this._mdf.m = false;
  this._mdf.p = false;
  var updated = false;

  if (this.o !== o) {
    this.o = o;
    this._mdf.o = true;
    updated = true;
  }
  if (this.sw !== sw) {
    this.sw = sw;
    this._mdf.sw = true;
    updated = true;
  }
  if (this.sc !== sc) {
    this.sc = sc;
    this._mdf.sc = true;
    updated = true;
  }
  if (this.fc !== fc) {
    this.fc = fc;
    this._mdf.fc = true;
    updated = true;
  }
  if (this.m !== m) {
    this.m = m;
    this._mdf.m = true;
    updated = true;
  }
  if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
    this.p = p;
    this._mdf.p = true;
    updated = true;
  }
  return updated;
};

/* global FontManager, initialDefaultFrame, getFontProperties */
/* exported TextProperty */

function TextProperty(elem, data) {
  this._frameId = initialDefaultFrame;
  this.pv = '';
  this.v = '';
  this.kf = false;
  this._isFirstFrame = true;
  this._mdf = false;
  this.data = data;
  this.elem = elem;
  this.comp = this.elem.comp;
  this.keysIndex = 0;
  this.canResize = false;
  this.minimumFontSize = 1;
  this.effectsSequence = [];
  this.currentData = {
    ascent: 0,
    boxWidth: this.defaultBoxWidth,
    f: '',
    fStyle: '',
    fWeight: '',
    fc: '',
    j: '',
    justifyOffset: '',
    l: [],
    lh: 0,
    lineWidths: [],
    ls: '',
    of: '',
    s: '',
    sc: '',
    sw: 0,
    t: 0,
    tr: 0,
    sz: 0,
    ps: null,
    fillColorAnim: false,
    strokeColorAnim: false,
    strokeWidthAnim: false,
    yOffset: 0,
    finalSize: 0,
    finalText: [],
    finalLineHeight: 0,
    __complete: false,

  };
  this.copyData(this.currentData, this.data.d.k[0].s);

  if (!this.searchProperty()) {
    this.completeTextData(this.currentData);
  }
}

TextProperty.prototype.defaultBoxWidth = [0, 0];

TextProperty.prototype.copyData = function (obj, data) {
  for (var s in data) {
    if (Object.prototype.hasOwnProperty.call(data, s)) {
      obj[s] = data[s];
    }
  }
  return obj;
};

TextProperty.prototype.setCurrentData = function (data) {
  if (!data.__complete) {
    this.completeTextData(data);
  }
  this.currentData = data;
  this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
  this._mdf = true;
};

TextProperty.prototype.searchProperty = function () {
  return this.searchKeyframes();
};

TextProperty.prototype.searchKeyframes = function () {
  this.kf = this.data.d.k.length > 1;
  if (this.kf) {
    this.addEffect(this.getKeyframeValue.bind(this));
  }
  return this.kf;
};

TextProperty.prototype.addEffect = function (effectFunction) {
  this.effectsSequence.push(effectFunction);
  this.elem.addDynamicProperty(this);
};

TextProperty.prototype.getValue = function (_finalValue) {
  if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
    return;
  }
  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
  var currentValue = this.currentData;
  var currentIndex = this.keysIndex;
  if (this.lock) {
    this.setCurrentData(this.currentData);
    return;
  }
  this.lock = true;
  this._mdf = false;
  var i; var
    len = this.effectsSequence.length;
  var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
  for (i = 0; i < len; i += 1) {
    // Checking if index changed to prevent creating a new object every time the expression updates.
    if (currentIndex !== this.keysIndex) {
      finalValue = this.effectsSequence[i](finalValue, finalValue.t);
    } else {
      finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
    }
  }
  if (currentValue !== finalValue) {
    this.setCurrentData(finalValue);
  }
  this.v = this.currentData;
  this.pv = this.v;
  this.lock = false;
  this.frameId = this.elem.globalData.frameId;
};

TextProperty.prototype.getKeyframeValue = function () {
  var textKeys = this.data.d.k;
  var frameNum = this.elem.comp.renderedFrame;
  var i = 0; var
    len = textKeys.length;
  while (i <= len - 1) {
    if (i === len - 1 || textKeys[i + 1].t > frameNum) {
      break;
    }
    i += 1;
  }
  if (this.keysIndex !== i) {
    this.keysIndex = i;
  }
  return this.data.d.k[this.keysIndex].s;
};

TextProperty.prototype.buildFinalText = function (text) {
  var charactersArray = [];
  var i = 0;
  var len = text.length;
  var charCode;
  var secondCharCode;
  var shouldCombine = false;
  while (i < len) {
    charCode = text.charCodeAt(i);
    if (FontManager.isCombinedCharacter(charCode)) {
      charactersArray[charactersArray.length - 1] += text.charAt(i);
    } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      secondCharCode = text.charCodeAt(i + 1);
      if (secondCharCode >= 0xDC00 && secondCharCode <= 0xDFFF) {
        if (shouldCombine || FontManager.isModifier(charCode, secondCharCode)) {
          charactersArray[charactersArray.length - 1] += text.substr(i, 2);
          shouldCombine = false;
        } else {
          charactersArray.push(text.substr(i, 2));
        }
        i += 1;
      } else {
        charactersArray.push(text.charAt(i));
      }
    } else if (charCode > 0xDBFF) {
      secondCharCode = text.charCodeAt(i + 1);
      if (FontManager.isZeroWidthJoiner(charCode, secondCharCode)) {
        shouldCombine = true;
        charactersArray[charactersArray.length - 1] += text.substr(i, 2);
        i += 1;
      } else {
        charactersArray.push(text.charAt(i));
      }
    } else if (FontManager.isZeroWidthJoiner(charCode)) {
      charactersArray[charactersArray.length - 1] += text.charAt(i);
      shouldCombine = true;
    } else {
      charactersArray.push(text.charAt(i));
    }
    i += 1;
  }
  return charactersArray;
};

TextProperty.prototype.completeTextData = function (documentData) {
  documentData.__complete = true;
  var fontManager = this.elem.globalData.fontManager;
  var data = this.data;
  var letters = [];
  var i; var
    len;
  var newLineFlag; var index = 0; var
    val;
  var anchorGrouping = data.m.g;
  var currentSize = 0; var currentPos = 0; var currentLine = 0; var
    lineWidths = [];
  var lineWidth = 0;
  var maxLineWidth = 0;
  var j; var
    jLen;
  var fontData = fontManager.getFontByName(documentData.f);
  var charData; var
    cLength = 0;

  var fontProps = getFontProperties(fontData);
  documentData.fWeight = fontProps.weight;
  documentData.fStyle = fontProps.style;
  documentData.finalSize = documentData.s;
  documentData.finalText = this.buildFinalText(documentData.t);
  len = documentData.finalText.length;
  documentData.finalLineHeight = documentData.lh;
  var trackingOffset = (documentData.tr / 1000) * documentData.finalSize;
  var charCode;
  if (documentData.sz) {
    var flag = true;
    var boxWidth = documentData.sz[0];
    var boxHeight = documentData.sz[1];
    var currentHeight; var
      finalText;
    while (flag) {
      finalText = this.buildFinalText(documentData.t);
      currentHeight = 0;
      lineWidth = 0;
      len = finalText.length;
      trackingOffset = (documentData.tr / 1000) * documentData.finalSize;
      var lastSpaceIndex = -1;
      for (i = 0; i < len; i += 1) {
        charCode = finalText[i].charCodeAt(0);
        newLineFlag = false;
        if (finalText[i] === ' ') {
          lastSpaceIndex = i;
        } else if (charCode === 13 || charCode === 3) {
          lineWidth = 0;
          newLineFlag = true;
          currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
        }
        if (fontManager.chars) {
          charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
          cLength = newLineFlag ? 0 : (charData.w * documentData.finalSize) / 100;
        } else {
          // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
          cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
        }
        if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
          if (lastSpaceIndex === -1) {
            len += 1;
          } else {
            i = lastSpaceIndex;
          }
          currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
          finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r');
          // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
          lastSpaceIndex = -1;
          lineWidth = 0;
        } else {
          lineWidth += cLength;
          lineWidth += trackingOffset;
        }
      }
      currentHeight += (fontData.ascent * documentData.finalSize) / 100;
      if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
        documentData.finalSize -= 1;
        documentData.finalLineHeight = (documentData.finalSize * documentData.lh) / documentData.s;
      } else {
        documentData.finalText = finalText;
        len = documentData.finalText.length;
        flag = false;
      }
    }
  }
  lineWidth = -trackingOffset;
  cLength = 0;
  var uncollapsedSpaces = 0;
  var currentChar;
  for (i = 0; i < len; i += 1) {
    newLineFlag = false;
    currentChar = documentData.finalText[i];
    charCode = currentChar.charCodeAt(0);
    if (charCode === 13 || charCode === 3) {
      uncollapsedSpaces = 0;
      lineWidths.push(lineWidth);
      maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
      lineWidth = -2 * trackingOffset;
      val = '';
      newLineFlag = true;
      currentLine += 1;
    } else {
      val = currentChar;
    }
    if (fontManager.chars) {
      charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
      cLength = newLineFlag ? 0 : (charData.w * documentData.finalSize) / 100;
    } else {
      // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
      // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
      cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
    }

    //
    if (currentChar === ' ') {
      uncollapsedSpaces += cLength + trackingOffset;
    } else {
      lineWidth += cLength + trackingOffset + uncollapsedSpaces;
      uncollapsedSpaces = 0;
    }
    letters.push({
      l: cLength, an: cLength, add: currentSize, n: newLineFlag, anIndexes: [], val: val, line: currentLine, animatorJustifyOffset: 0,
    });
    if (anchorGrouping == 2) { // eslint-disable-line eqeqeq
      currentSize += cLength;
      if (val === '' || val === ' ' || i === len - 1) {
        if (val === '' || val === ' ') {
          currentSize -= cLength;
        }
        while (currentPos <= i) {
          letters[currentPos].an = currentSize;
          letters[currentPos].ind = index;
          letters[currentPos].extra = cLength;
          currentPos += 1;
        }
        index += 1;
        currentSize = 0;
      }
    } else if (anchorGrouping == 3) { // eslint-disable-line eqeqeq
      currentSize += cLength;
      if (val === '' || i === len - 1) {
        if (val === '') {
          currentSize -= cLength;
        }
        while (currentPos <= i) {
          letters[currentPos].an = currentSize;
          letters[currentPos].ind = index;
          letters[currentPos].extra = cLength;
          currentPos += 1;
        }
        currentSize = 0;
        index += 1;
      }
    } else {
      letters[index].ind = index;
      letters[index].extra = 0;
      index += 1;
    }
  }
  documentData.l = letters;
  maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
  lineWidths.push(lineWidth);
  if (documentData.sz) {
    documentData.boxWidth = documentData.sz[0];
    documentData.justifyOffset = 0;
  } else {
    documentData.boxWidth = maxLineWidth;
    switch (documentData.j) {
      case 1:
        documentData.justifyOffset = -documentData.boxWidth;
        break;
      case 2:
        documentData.justifyOffset = -documentData.boxWidth / 2;
        break;
      default:
        documentData.justifyOffset = 0;
    }
  }
  documentData.lineWidths = lineWidths;

  var animators = data.a; var animatorData; var
    letterData;
  jLen = animators.length;
  var based; var ind; var
    indexes = [];
  for (j = 0; j < jLen; j += 1) {
    animatorData = animators[j];
    if (animatorData.a.sc) {
      documentData.strokeColorAnim = true;
    }
    if (animatorData.a.sw) {
      documentData.strokeWidthAnim = true;
    }
    if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
      documentData.fillColorAnim = true;
    }
    ind = 0;
    based = animatorData.s.b;
    for (i = 0; i < len; i += 1) {
      letterData = letters[i];
      letterData.anIndexes[j] = ind;
      if ((based == 1 && letterData.val !== '') || (based == 2 && letterData.val !== '' && letterData.val !== ' ') || (based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1)) || (based == 4 && (letterData.n || i == len - 1))) { // eslint-disable-line eqeqeq
        if (animatorData.s.rn === 1) {
          indexes.push(ind);
        }
        ind += 1;
      }
    }
    data.a[j].s.totalChars = ind;
    var currentInd = -1; var
      newInd;
    if (animatorData.s.rn === 1) {
      for (i = 0; i < len; i += 1) {
        letterData = letters[i];
        if (currentInd != letterData.anIndexes[j]) { // eslint-disable-line eqeqeq
          currentInd = letterData.anIndexes[j];
          newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
        }
        letterData.anIndexes[j] = newInd;
      }
    }
  }
  documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
  documentData.ls = documentData.ls || 0;
  documentData.ascent = (fontData.ascent * documentData.finalSize) / 100;
};

TextProperty.prototype.updateDocumentData = function (newData, index) {
  index = index === undefined ? this.keysIndex : index;
  var dData = this.copyData({}, this.data.d.k[index].s);
  dData = this.copyData(dData, newData);
  this.data.d.k[index].s = dData;
  this.recalculate(index);
  this.elem.addDynamicProperty(this);
};

TextProperty.prototype.recalculate = function (index) {
  var dData = this.data.d.k[index].s;
  dData.__complete = false;
  this.keysIndex = 0;
  this._isFirstFrame = true;
  this.getValue(dData);
};

TextProperty.prototype.canResizeFont = function (_canResize) {
  this.canResize = _canResize;
  this.recalculate(this.keysIndex);
  this.elem.addDynamicProperty(this);
};

TextProperty.prototype.setMinimumFontSize = function (_fontValue) {
  this.minimumFontSize = Math.floor(_fontValue) || 1;
  this.recalculate(this.keysIndex);
  this.elem.addDynamicProperty(this);
};

/* global extendPrototype, BezierFactory, PropertyFactory, DynamicPropertyContainer */
/* exported TextSelectorProp */

var TextSelectorProp = (function () {
  var max = Math.max;
  var min = Math.min;
  var floor = Math.floor;

  function TextSelectorPropFactory(elem, data) {
    this._currentTextLength = -1;
    this.k = false;
    this.data = data;
    this.elem = elem;
    this.comp = elem.comp;
    this.finalS = 0;
    this.finalE = 0;
    this.initDynamicPropertyContainer(elem);
    this.s = PropertyFactory.getProp(elem, data.s || { k: 0 }, 0, 0, this);
    if ('e' in data) {
      this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this);
    } else {
      this.e = { v: 100 };
    }
    this.o = PropertyFactory.getProp(elem, data.o || { k: 0 }, 0, 0, this);
    this.xe = PropertyFactory.getProp(elem, data.xe || { k: 0 }, 0, 0, this);
    this.ne = PropertyFactory.getProp(elem, data.ne || { k: 0 }, 0, 0, this);
    this.sm = PropertyFactory.getProp(elem, data.sm || { k: 100 }, 0, 0, this);
    this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);
    if (!this.dynamicProperties.length) {
      this.getValue();
    }
  }

  TextSelectorPropFactory.prototype = {
    getMult: function (ind) {
      if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
        this.getValue();
      }
      // var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
      var x1 = 0;
      var y1 = 0;
      var x2 = 1;
      var y2 = 1;
      if (this.ne.v > 0) {
        x1 = this.ne.v / 100.0;
      } else {
        y1 = -this.ne.v / 100.0;
      }
      if (this.xe.v > 0) {
        x2 = 1.0 - this.xe.v / 100.0;
      } else {
        y2 = 1.0 + this.xe.v / 100.0;
      }
      var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;

      var mult = 0;
      var s = this.finalS;
      var e = this.finalE;
      var type = this.data.sh;
      if (type === 2) {
        if (e === s) {
          mult = ind >= e ? 1 : 0;
        } else {
          mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
        }
        mult = easer(mult);
      } else if (type === 3) {
        if (e === s) {
          mult = ind >= e ? 0 : 1;
        } else {
          mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
        }

        mult = easer(mult);
      } else if (type === 4) {
        if (e === s) {
          mult = 0;
        } else {
          mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          if (mult < 0.5) {
            mult *= 2;
          } else {
            mult = 1 - 2 * (mult - 0.5);
          }
        }
        mult = easer(mult);
      } else if (type === 5) {
        if (e === s) {
          mult = 0;
        } else {
          var tot = e - s;
          /* ind += 0.5;
                    mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */
          ind = min(max(0, ind + 0.5 - s), e - s);
          var x = -tot / 2 + ind;
          var a = tot / 2;
          mult = Math.sqrt(1 - (x * x) / (a * a));
        }
        mult = easer(mult);
      } else if (type === 6) {
        if (e === s) {
          mult = 0;
        } else {
          ind = min(max(0, ind + 0.5 - s), e - s);
          mult = (1 + (Math.cos((Math.PI + Math.PI * 2 * (ind) / (e - s))))) / 2; // eslint-disable-line
        }
        mult = easer(mult);
      } else {
        if (ind >= floor(s)) {
          if (ind - s < 0) {
            mult = max(0, min(min(e, 1) - (s - ind), 1));
          } else {
            mult = max(0, min(e - ind, 1));
          }
        }
        mult = easer(mult);
      }
      // Smoothness implementation.
      // The smoothness represents a reduced range of the original [0; 1] range.
      // if smoothness is 25%, the new range will be [0.375; 0.625]
      // Steps are:
      // - find the lower value of the new range (threshold)
      // - if multiplier is smaller than that value, floor it to 0
      // - if it is larger,
      //     - subtract the threshold
      //     - divide it by the smoothness (this will return the range to [0; 1])
      // Note: If it doesn't work on some scenarios, consider applying it before the easer.
      if (this.sm.v !== 100) {
        var smoothness = this.sm.v * 0.01;
        if (smoothness === 0) {
          smoothness = 0.00000001;
        }
        var threshold = 0.5 - smoothness * 0.5;
        if (mult < threshold) {
          mult = 0;
        } else {
          mult = (mult - threshold) / smoothness;
          if (mult > 1) {
            mult = 1;
          }
        }
      }
      return mult * this.a.v;
    },
    getValue: function (newCharsFlag) {
      this.iterateDynamicProperties();
      this._mdf = newCharsFlag || this._mdf;
      this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
      if (newCharsFlag && this.data.r === 2) {
        this.e.v = this._currentTextLength;
      }
      var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
      var o = this.o.v / divisor;
      var s = this.s.v / divisor + o;
      var e = (this.e.v / divisor) + o;
      if (s > e) {
        var _s = s;
        s = e;
        e = _s;
      }
      this.finalS = s;
      this.finalE = e;
    },
  };
  extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);

  function getTextSelectorProp(elem, data, arr) {
    return new TextSelectorPropFactory(elem, data, arr);
  }

  return {
    getTextSelectorProp: getTextSelectorProp,
  };
}());

/* global createSizedArray, pooling */
/* exported poolFactory */

var poolFactory = (function () {
  return function (initialLength, _create, _release) {
    var _length = 0;
    var _maxLength = initialLength;
    var pool = createSizedArray(_maxLength);

    var ob = {
      newElement: newElement,
      release: release,
    };

    function newElement() {
      var element;
      if (_length) {
        _length -= 1;
        element = pool[_length];
      } else {
        element = _create();
      }
      return element;
    }

    function release(element) {
      if (_length === _maxLength) {
        pool = pooling.double(pool);
        _maxLength *= 2;
      }
      if (_release) {
        _release(element);
      }
      pool[_length] = element;
      _length += 1;
    }

    return ob;
  };
}());

/* global createSizedArray */
/* exported pooling */

var pooling = (function () {
  function double(arr) {
    return arr.concat(createSizedArray(arr.length));
  }

  return {
    double: double,
  };
}());

/* global createTypedArray, poolFactory */
/* exported pointPool */

var pointPool = (function () {
  function create() {
    return createTypedArray('float32', 2);
  }
  return poolFactory(8, create);
}());

/* global ShapePath, pointPool, poolFactory */
/* exported shapePool */

var shapePool = (function () {
  function create() {
    return new ShapePath();
  }

  function release(shapePath) {
    var len = shapePath._length;
    var i;
    for (i = 0; i < len; i += 1) {
      pointPool.release(shapePath.v[i]);
      pointPool.release(shapePath.i[i]);
      pointPool.release(shapePath.o[i]);
      shapePath.v[i] = null;
      shapePath.i[i] = null;
      shapePath.o[i] = null;
    }
    shapePath._length = 0;
    shapePath.c = false;
  }

  function clone(shape) {
    var cloned = factory.newElement();
    var i;
    var len = shape._length === undefined ? shape.v.length : shape._length;
    cloned.setLength(len);
    cloned.c = shape.c;

    for (i = 0; i < len; i += 1) {
      cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
    }
    return cloned;
  }

  var factory = poolFactory(4, create, release);
  factory.clone = clone;

  return factory;
}());

/* global createSizedArray, ShapeCollection, shapePool, pooling */
/* exported shapeCollectionPool */

var shapeCollectionPool = (function () {
  var ob = {
    newShapeCollection: newShapeCollection,
    release: release,
  };

  var _length = 0;
  var _maxLength = 4;
  var pool = createSizedArray(_maxLength);

  function newShapeCollection() {
    var shapeCollection;
    if (_length) {
      _length -= 1;
      shapeCollection = pool[_length];
    } else {
      shapeCollection = new ShapeCollection();
    }
    return shapeCollection;
  }

  function release(shapeCollection) {
    var i;
    var len = shapeCollection._length;
    for (i = 0; i < len; i += 1) {
      shapePool.release(shapeCollection.shapes[i]);
    }
    shapeCollection._length = 0;

    if (_length === _maxLength) {
      pool = pooling.double(pool);
      _maxLength *= 2;
    }
    pool[_length] = shapeCollection;
    _length += 1;
  }

  return ob;
}());

/* global poolFactory, bezierLengthPool */
/* exported segmentsLengthPool */

var segmentsLengthPool = (function () {
  function create() {
    return {
      lengths: [],
      totalLength: 0,
    };
  }

  function release(element) {
    var i;
    var len = element.lengths.length;
    for (i = 0; i < len; i += 1) {
      bezierLengthPool.release(element.lengths[i]);
    }
    element.lengths.length = 0;
  }

  return poolFactory(8, create, release);
}());

/* global createTypedArray, defaultCurveSegments, poolFactory */
/* exported bezierLengthPool */

var bezierLengthPool = (function () {
  function create() {
    return {
      addedLength: 0,
      percents: createTypedArray('float32', defaultCurveSegments),
      lengths: createTypedArray('float32', defaultCurveSegments),
    };
  }
  return poolFactory(8, create);
}());

/* exported markerParser */

var markerParser = (

  function () {
    function parsePayloadLines(payload) {
      var lines = payload.split('\r\n');
      var keys = {};
      var line;
      var keysCount = 0;
      for (var i = 0; i < lines.length; i += 1) {
        line = lines[i].split(':');
        if (line.length === 2) {
          keys[line[0]] = line[1].trim();
          keysCount += 1;
        }
      }
      if (keysCount === 0) {
        throw new Error();
      }
      return keys;
    }

    return function (_markers) {
      var markers = [];
      for (var i = 0; i < _markers.length; i += 1) {
        var _marker = _markers[i];
        var markerData = {
          time: _marker.tm,
          duration: _marker.dr,
        };
        try {
          markerData.payload = JSON.parse(_markers[i].cm);
        } catch (_) {
          try {
            markerData.payload = parsePayloadLines(_markers[i].cm);
          } catch (__) {
            markerData.payload = {
              name: _markers[i],
            };
          }
        }
        markers.push(markerData);
      }
      return markers;
    };
  }());

/* global AudioElement, FootageElement, FontManager */

function BaseRenderer() {}
BaseRenderer.prototype.checkLayers = function (num) {
  var i;
  var len = this.layers.length;
  var data;
  this.completeLayers = true;
  for (i = len - 1; i >= 0; i -= 1) {
    if (!this.elements[i]) {
      data = this.layers[i];
      if (data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st)) {
        this.buildItem(i);
      }
    }
    this.completeLayers = this.elements[i] ? this.completeLayers : false;
  }
  this.checkPendingElements();
};

BaseRenderer.prototype.createItem = function (layer) {
  switch (layer.ty) {
    case 2:
      return this.createImage(layer);
    case 0:
      return this.createComp(layer);
    case 1:
      return this.createSolid(layer);
    case 3:
      return this.createNull(layer);
    case 4:
      return this.createShape(layer);
    case 5:
      return this.createText(layer);
    case 6:
      return this.createAudio(layer);
    case 13:
      return this.createCamera(layer);
    case 15:
      return this.createFootage(layer);
    default:
      return this.createNull(layer);
  }
};

BaseRenderer.prototype.createCamera = function () {
  throw new Error('You\'re using a 3d camera. Try the html renderer.');
};

BaseRenderer.prototype.createAudio = function (data) {
  return new AudioElement(data, this.globalData, this);
};

BaseRenderer.prototype.createFootage = function (data) {
  return new FootageElement(data, this.globalData, this);
};

BaseRenderer.prototype.buildAllItems = function () {
  var i;
  var len = this.layers.length;
  for (i = 0; i < len; i += 1) {
    this.buildItem(i);
  }
  this.checkPendingElements();
};

BaseRenderer.prototype.includeLayers = function (newLayers) {
  this.completeLayers = false;
  var i;
  var len = newLayers.length;
  var j;
  var jLen = this.layers.length;
  for (i = 0; i < len; i += 1) {
    j = 0;
    while (j < jLen) {
      if (this.layers[j].id === newLayers[i].id) {
        this.layers[j] = newLayers[i];
        break;
      }
      j += 1;
    }
  }
};

BaseRenderer.prototype.setProjectInterface = function (pInterface) {
  this.globalData.projectInterface = pInterface;
};

BaseRenderer.prototype.initItems = function () {
  if (!this.globalData.progressiveLoad) {
    this.buildAllItems();
  }
};
BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
  var elements = this.elements;
  var layers = this.layers;
  var i = 0;
  var len = layers.length;
  while (i < len) {
    if (layers[i].ind == parentName) { // eslint-disable-line eqeqeq
      if (!elements[i] || elements[i] === true) {
        this.buildItem(i);
        this.addPendingElement(element);
      } else {
        hierarchy.push(elements[i]);
        elements[i].setAsParent();
        if (layers[i].parent !== undefined) {
          this.buildElementParenting(element, layers[i].parent, hierarchy);
        } else {
          element.setHierarchy(hierarchy);
        }
      }
    }
    i += 1;
  }
};

BaseRenderer.prototype.addPendingElement = function (element) {
  this.pendingElements.push(element);
};

BaseRenderer.prototype.searchExtraCompositions = function (assets) {
  var i;
  var len = assets.length;
  for (i = 0; i < len; i += 1) {
    if (assets[i].xt) {
      var comp = this.createComp(assets[i]);
      comp.initExpressions();
      this.globalData.projectInterface.registerComposition(comp);
    }
  }
};

BaseRenderer.prototype.setupGlobalData = function (animData, fontsContainer) {
  this.globalData.fontManager = new FontManager();
  this.globalData.fontManager.addChars(animData.chars);
  this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
  this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
  this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
  this.globalData.imageLoader = this.animationItem.imagePreloader;
  this.globalData.audioController = this.animationItem.audioController;
  this.globalData.frameId = 0;
  this.globalData.frameRate = animData.fr;
  this.globalData.nm = animData.nm;
  this.globalData.compSize = {
    w: animData.w,
    h: animData.h,
  };
};

/* global createElementID, extendPrototype, BaseRenderer, NullElement, SVGShapeElement, SVGTextLottieElement,
IImageElement, SVGCompElement, ISolidElement, createNS, locationHref, createSizedArray, expressionsPlugin */

function SVGRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.layers = null;
  this.renderedFrame = -1;
  this.svgElement = createNS('svg');
  var ariaLabel = '';
  if (config && config.title) {
    var titleElement = createNS('title');
    var titleId = createElementID();
    titleElement.setAttribute('id', titleId);
    titleElement.textContent = config.title;
    this.svgElement.appendChild(titleElement);
    ariaLabel += titleId;
  }
  if (config && config.description) {
    var descElement = createNS('desc');
    var descId = createElementID();
    descElement.setAttribute('id', descId);
    descElement.textContent = config.description;
    this.svgElement.appendChild(descElement);
    ariaLabel += ' ' + descId;
  }
  if (ariaLabel) {
    this.svgElement.setAttribute('aria-labelledby', ariaLabel);
  }
  var defs = createNS('defs');
  this.svgElement.appendChild(defs);
  var maskElement = createNS('g');
  this.svgElement.appendChild(maskElement);
  this.layerElement = maskElement;
  this.renderConfig = {
    preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    progressiveLoad: (config && config.progressiveLoad) || false,
    hideOnTransparent: !((config && config.hideOnTransparent === false)),
    viewBoxOnly: (config && config.viewBoxOnly) || false,
    viewBoxSize: (config && config.viewBoxSize) || false,
    className: (config && config.className) || '',
    id: (config && config.id) || '',
    focusable: config && config.focusable,
    filterSize: {
      width: (config && config.filterSize && config.filterSize.width) || '100%',
      height: (config && config.filterSize && config.filterSize.height) || '100%',
      x: (config && config.filterSize && config.filterSize.x) || '0%',
      y: (config && config.filterSize && config.filterSize.y) || '0%',
    },
  };

  this.globalData = {
    _mdf: false,
    frameNum: -1,
    defs: defs,
    renderConfig: this.renderConfig,
  };
  this.elements = [];
  this.pendingElements = [];
  this.destroyed = false;
  this.rendererType = 'svg';
}

extendPrototype([BaseRenderer], SVGRenderer);

SVGRenderer.prototype.createNull = function (data) {
  return new NullElement(data, this.globalData, this);
};

SVGRenderer.prototype.createShape = function (data) {
  return new SVGShapeElement(data, this.globalData, this);
};

SVGRenderer.prototype.createText = function (data) {
  return new SVGTextLottieElement(data, this.globalData, this);
};

SVGRenderer.prototype.createImage = function (data) {
  return new IImageElement(data, this.globalData, this);
};

SVGRenderer.prototype.createComp = function (data) {
  return new SVGCompElement(data, this.globalData, this);
};

SVGRenderer.prototype.createSolid = function (data) {
  return new ISolidElement(data, this.globalData, this);
};

SVGRenderer.prototype.configAnimation = function (animData) {
  this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  if (this.renderConfig.viewBoxSize) {
    this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
  } else {
    this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
  }

  if (!this.renderConfig.viewBoxOnly) {
    this.svgElement.setAttribute('width', animData.w);
    this.svgElement.setAttribute('height', animData.h);
    this.svgElement.style.width = '100%';
    this.svgElement.style.height = '100%';
    this.svgElement.style.transform = 'translate3d(0,0,0)';
  }
  if (this.renderConfig.className) {
    this.svgElement.setAttribute('class', this.renderConfig.className);
  }
  if (this.renderConfig.id) {
    this.svgElement.setAttribute('id', this.renderConfig.id);
  }
  if (this.renderConfig.focusable !== undefined) {
    this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
  }
  this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio);
  // this.layerElement.style.transform = 'translate3d(0,0,0)';
  // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
  this.animationItem.wrapper.appendChild(this.svgElement);
  // Mask animation
  var defs = this.globalData.defs;

  this.setupGlobalData(animData, defs);
  this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
  this.data = animData;

  var maskElement = createNS('clipPath');
  var rect = createNS('rect');
  rect.setAttribute('width', animData.w);
  rect.setAttribute('height', animData.h);
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  var maskId = createElementID();
  maskElement.setAttribute('id', maskId);
  maskElement.appendChild(rect);
  this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + maskId + ')');

  defs.appendChild(maskElement);
  this.layers = animData.layers;
  this.elements = createSizedArray(animData.layers.length);
};

SVGRenderer.prototype.destroy = function () {
  if (this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  this.layerElement = null;
  this.globalData.defs = null;
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = 0; i < len; i += 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.elements.length = 0;
  this.destroyed = true;
  this.animationItem = null;
};

SVGRenderer.prototype.updateContainerSize = function () {
};

SVGRenderer.prototype.buildItem = function (pos) {
  var elements = this.elements;
  if (elements[pos] || this.layers[pos].ty === 99) {
    return;
  }
  elements[pos] = true;
  var element = this.createItem(this.layers[pos]);

  elements[pos] = element;
  if (expressionsPlugin) {
    if (this.layers[pos].ty === 0) {
      this.globalData.projectInterface.registerComposition(element);
    }
    element.initExpressions();
  }
  this.appendElementInPos(element, pos);
  if (this.layers[pos].tt) {
    if (!this.elements[pos - 1] || this.elements[pos - 1] === true) {
      this.buildItem(pos - 1);
      this.addPendingElement(element);
    } else {
      element.setMatte(elements[pos - 1].layerId);
    }
  }
};

SVGRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
    if (element.data.tt) {
      var i = 0;
      var len = this.elements.length;
      while (i < len) {
        if (this.elements[i] === element) {
          element.setMatte(this.elements[i - 1].layerId);
          break;
        }
        i += 1;
      }
    }
  }
};

SVGRenderer.prototype.renderFrame = function (num) {
  if (this.renderedFrame === num || this.destroyed) {
    return;
  }
  if (num === null) {
    num = this.renderedFrame;
  } else {
    this.renderedFrame = num;
  }
  // console.log('-------');
  // console.log('FRAME ',num);
  this.globalData.frameNum = num;
  this.globalData.frameId += 1;
  this.globalData.projectInterface.currentFrame = num;
  this.globalData._mdf = false;
  var i;
  var len = this.layers.length;
  if (!this.completeLayers) {
    this.checkLayers(num);
  }
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(num - this.layers[i].st);
    }
  }
  if (this.globalData._mdf) {
    for (i = 0; i < len; i += 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  }
};

SVGRenderer.prototype.appendElementInPos = function (element, pos) {
  var newElement = element.getBaseElement();
  if (!newElement) {
    return;
  }
  var i = 0;
  var nextElement;
  while (i < pos) {
    if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
      nextElement = this.elements[i].getBaseElement();
    }
    i += 1;
  }
  if (nextElement) {
    this.layerElement.insertBefore(newElement, nextElement);
  } else {
    this.layerElement.appendChild(newElement);
  }
};

SVGRenderer.prototype.hide = function () {
  this.layerElement.style.display = 'none';
};

SVGRenderer.prototype.show = function () {
  this.layerElement.style.display = 'block';
};

/* global CVContextData, Matrix, extendPrototype, BaseRenderer, CVShapeElement, CVTextElement,
CVImageElement, CVCompElement, CVSolidElement, SVGRenderer, createTag, createSizedArray */

function CanvasRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.renderConfig = {
    clearCanvas: (config && config.clearCanvas !== undefined) ? config.clearCanvas : true,
    context: (config && config.context) || null,
    progressiveLoad: (config && config.progressiveLoad) || false,
    preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    className: (config && config.className) || '',
    id: (config && config.id) || '',
  };
  this.renderConfig.dpr = (config && config.dpr) || 1;
  if (this.animationItem.wrapper) {
    this.renderConfig.dpr = (config && config.dpr) || window.devicePixelRatio || 1;
  }
  this.renderedFrame = -1;
  this.globalData = {
    frameNum: -1,
    _mdf: false,
    renderConfig: this.renderConfig,
    currentGlobalAlpha: -1,
  };
  this.contextData = new CVContextData();
  this.elements = [];
  this.pendingElements = [];
  this.transformMat = new Matrix();
  this.completeLayers = false;
  this.rendererType = 'canvas';
}
extendPrototype([BaseRenderer], CanvasRenderer);

CanvasRenderer.prototype.createShape = function (data) {
  return new CVShapeElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createText = function (data) {
  return new CVTextElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createImage = function (data) {
  return new CVImageElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createComp = function (data) {
  return new CVCompElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createSolid = function (data) {
  return new CVSolidElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

CanvasRenderer.prototype.ctxTransform = function (props) {
  if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
    return;
  }
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
    return;
  }
  this.transformMat.cloneFromProps(props);
  var cProps = this.contextData.cTr.props;
  this.transformMat.transform(cProps[0], cProps[1], cProps[2], cProps[3], cProps[4], cProps[5], cProps[6], cProps[7], cProps[8], cProps[9], cProps[10], cProps[11], cProps[12], cProps[13], cProps[14], cProps[15]);
  // this.contextData.cTr.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
  this.contextData.cTr.cloneFromProps(this.transformMat.props);
  var trProps = this.contextData.cTr.props;
  this.canvasContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
};

CanvasRenderer.prototype.ctxOpacity = function (op) {
  /* if(op === 1){
        return;
    } */
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
    this.globalData.currentGlobalAlpha = this.contextData.cO;
    return;
  }
  this.contextData.cO *= op < 0 ? 0 : op;
  if (this.globalData.currentGlobalAlpha !== this.contextData.cO) {
    this.canvasContext.globalAlpha = this.contextData.cO;
    this.globalData.currentGlobalAlpha = this.contextData.cO;
  }
};

CanvasRenderer.prototype.reset = function () {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.restore();
    return;
  }
  this.contextData.reset();
};

CanvasRenderer.prototype.save = function (actionFlag) {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.save();
    return;
  }
  if (actionFlag) {
    this.canvasContext.save();
  }
  var props = this.contextData.cTr.props;
  if (this.contextData._length <= this.contextData.cArrPos) {
    this.contextData.duplicate();
  }
  var i;
  var arr = this.contextData.saved[this.contextData.cArrPos];
  for (i = 0; i < 16; i += 1) {
    arr[i] = props[i];
  }
  this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
  this.contextData.cArrPos += 1;
};

CanvasRenderer.prototype.restore = function (actionFlag) {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.restore();
    return;
  }
  if (actionFlag) {
    this.canvasContext.restore();
    this.globalData.blendMode = 'source-over';
  }
  this.contextData.cArrPos -= 1;
  var popped = this.contextData.saved[this.contextData.cArrPos];
  var i;
  var arr = this.contextData.cTr.props;
  for (i = 0; i < 16; i += 1) {
    arr[i] = popped[i];
  }
  this.canvasContext.setTransform(popped[0], popped[1], popped[4], popped[5], popped[12], popped[13]);
  popped = this.contextData.savedOp[this.contextData.cArrPos];
  this.contextData.cO = popped;
  if (this.globalData.currentGlobalAlpha !== popped) {
    this.canvasContext.globalAlpha = popped;
    this.globalData.currentGlobalAlpha = popped;
  }
};

CanvasRenderer.prototype.configAnimation = function (animData) {
  if (this.animationItem.wrapper) {
    this.animationItem.container = createTag('canvas');
    var containerStyle = this.animationItem.container.style;
    containerStyle.width = '100%';
    containerStyle.height = '100%';
    var origin = '0px 0px 0px';
    containerStyle.transformOrigin = origin;
    containerStyle.mozTransformOrigin = origin;
    containerStyle.webkitTransformOrigin = origin;
    containerStyle['-webkit-transform'] = origin;
    this.animationItem.wrapper.appendChild(this.animationItem.container);
    this.canvasContext = this.animationItem.container.getContext('2d');
    if (this.renderConfig.className) {
      this.animationItem.container.setAttribute('class', this.renderConfig.className);
    }
    if (this.renderConfig.id) {
      this.animationItem.container.setAttribute('id', this.renderConfig.id);
    }
  } else {
    this.canvasContext = this.renderConfig.context;
  }
  this.data = animData;
  this.layers = animData.layers;
  this.transformCanvas = {
    w: animData.w,
    h: animData.h,
    sx: 0,
    sy: 0,
    tx: 0,
    ty: 0,
  };
  this.setupGlobalData(animData, document.body);
  this.globalData.canvasContext = this.canvasContext;
  this.globalData.renderer = this;
  this.globalData.isDashed = false;
  this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
  this.globalData.transformCanvas = this.transformCanvas;
  this.elements = createSizedArray(animData.layers.length);

  this.updateContainerSize();
};

CanvasRenderer.prototype.updateContainerSize = function () {
  this.reset();
  var elementWidth;
  var elementHeight;
  if (this.animationItem.wrapper && this.animationItem.container) {
    elementWidth = this.animationItem.wrapper.offsetWidth;
    elementHeight = this.animationItem.wrapper.offsetHeight;
    this.animationItem.container.setAttribute('width', elementWidth * this.renderConfig.dpr);
    this.animationItem.container.setAttribute('height', elementHeight * this.renderConfig.dpr);
  } else {
    elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
    elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
  }
  var elementRel;
  var animationRel;
  if (this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
    var par = this.renderConfig.preserveAspectRatio.split(' ');
    var fillType = par[1] || 'meet';
    var pos = par[0] || 'xMidYMid';
    var xPos = pos.substr(0, 4);
    var yPos = pos.substr(4);
    elementRel = elementWidth / elementHeight;
    animationRel = this.transformCanvas.w / this.transformCanvas.h;
    if ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice')) {
      this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
    } else {
      this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
    }

    if (xPos === 'xMid' && ((animationRel < elementRel && fillType === 'meet') || (animationRel > elementRel && fillType === 'slice'))) {
      this.transformCanvas.tx = ((elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2) * this.renderConfig.dpr;
    } else if (xPos === 'xMax' && ((animationRel < elementRel && fillType === 'meet') || (animationRel > elementRel && fillType === 'slice'))) {
      this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
    } else {
      this.transformCanvas.tx = 0;
    }
    if (yPos === 'YMid' && ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice'))) {
      this.transformCanvas.ty = ((elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2) * this.renderConfig.dpr;
    } else if (yPos === 'YMax' && ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice'))) {
      this.transformCanvas.ty = ((elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w))) * this.renderConfig.dpr;
    } else {
      this.transformCanvas.ty = 0;
    }
  } else if (this.renderConfig.preserveAspectRatio === 'none') {
    this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
    this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
    this.transformCanvas.tx = 0;
    this.transformCanvas.ty = 0;
  } else {
    this.transformCanvas.sx = this.renderConfig.dpr;
    this.transformCanvas.sy = this.renderConfig.dpr;
    this.transformCanvas.tx = 0;
    this.transformCanvas.ty = 0;
  }
  this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
  /* var i, len = this.elements.length;
    for(i=0;i<len;i+=1){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(this.globalData.transformCanvas);
        }
    } */
  this.ctxTransform(this.transformCanvas.props);
  this.canvasContext.beginPath();
  this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
  this.canvasContext.closePath();
  this.canvasContext.clip();

  this.renderFrame(this.renderedFrame, true);
};

CanvasRenderer.prototype.destroy = function () {
  if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.elements.length = 0;
  this.globalData.canvasContext = null;
  this.animationItem.container = null;
  this.destroyed = true;
};

CanvasRenderer.prototype.renderFrame = function (num, forceRender) {
  if ((this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender) || this.destroyed || num === -1) {
    return;
  }
  this.renderedFrame = num;
  this.globalData.frameNum = num - this.animationItem._isFirstFrame;
  this.globalData.frameId += 1;
  this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
  this.globalData.projectInterface.currentFrame = num;

  // console.log('--------');
  // console.log('NEW: ',num);
  var i;
  var len = this.layers.length;
  if (!this.completeLayers) {
    this.checkLayers(num);
  }

  for (i = 0; i < len; i += 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(num - this.layers[i].st);
    }
  }
  if (this.globalData._mdf) {
    if (this.renderConfig.clearCanvas === true) {
      this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
    } else {
      this.save();
    }
    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
    if (this.renderConfig.clearCanvas !== true) {
      this.restore();
    }
  }
};

CanvasRenderer.prototype.buildItem = function (pos) {
  var elements = this.elements;
  if (elements[pos] || this.layers[pos].ty === 99) {
    return;
  }
  var element = this.createItem(this.layers[pos], this, this.globalData);
  elements[pos] = element;
  element.initExpressions();
  /* if(this.layers[pos].ty === 0){
        element.resize(this.globalData.transformCanvas);
    } */
};

CanvasRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
  }
};

CanvasRenderer.prototype.hide = function () {
  this.animationItem.container.style.display = 'none';
};

CanvasRenderer.prototype.show = function () {
  this.animationItem.container.style.display = 'block';
};

/* global extendPrototype, BaseRenderer, SVGRenderer, SVGShapeElement, HShapeElement, SVGTextLottieElement,
HTextElement, HCameraElement, IImageElement, HImageElement, SVGCompElement, HCompElement, ISolidElement,
HSolidElement, styleDiv, createTag, createNS */

function HybridRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.layers = null;
  this.renderedFrame = -1;
  this.renderConfig = {
    className: (config && config.className) || '',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    hideOnTransparent: !(config && config.hideOnTransparent === false),
    filterSize: {
      width: (config && config.filterSize && config.filterSize.width) || '400%',
      height: (config && config.filterSize && config.filterSize.height) || '400%',
      x: (config && config.filterSize && config.filterSize.x) || '-100%',
      y: (config && config.filterSize && config.filterSize.y) || '-100%',
    },
  };
  this.globalData = {
    _mdf: false,
    frameNum: -1,
    renderConfig: this.renderConfig,
  };
  this.pendingElements = [];
  this.elements = [];
  this.threeDElements = [];
  this.destroyed = false;
  this.camera = null;
  this.supports3d = true;
  this.rendererType = 'html';
}

extendPrototype([BaseRenderer], HybridRenderer);

HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem;

HybridRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
  }
};

HybridRenderer.prototype.appendElementInPos = function (element, pos) {
  var newDOMElement = element.getBaseElement();
  if (!newDOMElement) {
    return;
  }
  var layer = this.layers[pos];
  if (!layer.ddd || !this.supports3d) {
    if (this.threeDElements) {
      this.addTo3dContainer(newDOMElement, pos);
    } else {
      var i = 0;
      var nextDOMElement;
      var nextLayer;
      var tmpDOMElement;
      while (i < pos) {
        if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
          nextLayer = this.elements[i];
          tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
          nextDOMElement = tmpDOMElement || nextDOMElement;
        }
        i += 1;
      }
      if (nextDOMElement) {
        if (!layer.ddd || !this.supports3d) {
          this.layerElement.insertBefore(newDOMElement, nextDOMElement);
        }
      } else if (!layer.ddd || !this.supports3d) {
        this.layerElement.appendChild(newDOMElement);
      }
    }
  } else {
    this.addTo3dContainer(newDOMElement, pos);
  }
};

HybridRenderer.prototype.createShape = function (data) {
  if (!this.supports3d) {
    return new SVGShapeElement(data, this.globalData, this);
  }
  return new HShapeElement(data, this.globalData, this);
};

HybridRenderer.prototype.createText = function (data) {
  if (!this.supports3d) {
    return new SVGTextLottieElement(data, this.globalData, this);
  }
  return new HTextElement(data, this.globalData, this);
};

HybridRenderer.prototype.createCamera = function (data) {
  this.camera = new HCameraElement(data, this.globalData, this);
  return this.camera;
};

HybridRenderer.prototype.createImage = function (data) {
  if (!this.supports3d) {
    return new IImageElement(data, this.globalData, this);
  }
  return new HImageElement(data, this.globalData, this);
};

HybridRenderer.prototype.createComp = function (data) {
  if (!this.supports3d) {
    return new SVGCompElement(data, this.globalData, this);
  }
  return new HCompElement(data, this.globalData, this);
};

HybridRenderer.prototype.createSolid = function (data) {
  if (!this.supports3d) {
    return new ISolidElement(data, this.globalData, this);
  }
  return new HSolidElement(data, this.globalData, this);
};

HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

HybridRenderer.prototype.getThreeDContainerByPos = function (pos) {
  var i = 0;
  var len = this.threeDElements.length;
  while (i < len) {
    if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
      return this.threeDElements[i].perspectiveElem;
    }
    i += 1;
  }
  return null;
};

HybridRenderer.prototype.createThreeDContainer = function (pos, type) {
  var perspectiveElem = createTag('div');
  var style;
  var containerStyle;
  styleDiv(perspectiveElem);
  var container = createTag('div');
  styleDiv(container);
  if (type === '3d') {
    style = perspectiveElem.style;
    style.width = this.globalData.compSize.w + 'px';
    style.height = this.globalData.compSize.h + 'px';
    var center = '50% 50%';
    style.webkitTransformOrigin = center;
    style.mozTransformOrigin = center;
    style.transformOrigin = center;
    containerStyle = container.style;
    var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    containerStyle.transform = matrix;
    containerStyle.webkitTransform = matrix;
  }

  perspectiveElem.appendChild(container);
  // this.resizerElem.appendChild(perspectiveElem);
  var threeDContainerData = {
    container: container,
    perspectiveElem: perspectiveElem,
    startPos: pos,
    endPos: pos,
    type: type,
  };
  this.threeDElements.push(threeDContainerData);
  return threeDContainerData;
};

HybridRenderer.prototype.build3dContainers = function () {
  var i;
  var len = this.layers.length;
  var lastThreeDContainerData;
  var currentContainer = '';
  for (i = 0; i < len; i += 1) {
    if (this.layers[i].ddd && this.layers[i].ty !== 3) {
      if (currentContainer !== '3d') {
        currentContainer = '3d';
        lastThreeDContainerData = this.createThreeDContainer(i, '3d');
      }
      lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
    } else {
      if (currentContainer !== '2d') {
        currentContainer = '2d';
        lastThreeDContainerData = this.createThreeDContainer(i, '2d');
      }
      lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
    }
  }
  len = this.threeDElements.length;
  for (i = len - 1; i >= 0; i -= 1) {
    this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
  }
};

HybridRenderer.prototype.addTo3dContainer = function (elem, pos) {
  var i = 0;
  var len = this.threeDElements.length;
  while (i < len) {
    if (pos <= this.threeDElements[i].endPos) {
      var j = this.threeDElements[i].startPos;
      var nextElement;
      while (j < pos) {
        if (this.elements[j] && this.elements[j].getBaseElement) {
          nextElement = this.elements[j].getBaseElement();
        }
        j += 1;
      }
      if (nextElement) {
        this.threeDElements[i].container.insertBefore(elem, nextElement);
      } else {
        this.threeDElements[i].container.appendChild(elem);
      }
      break;
    }
    i += 1;
  }
};

HybridRenderer.prototype.configAnimation = function (animData) {
  var resizerElem = createTag('div');
  var wrapper = this.animationItem.wrapper;
  var style = resizerElem.style;
  style.width = animData.w + 'px';
  style.height = animData.h + 'px';
  this.resizerElem = resizerElem;
  styleDiv(resizerElem);
  style.transformStyle = 'flat';
  style.mozTransformStyle = 'flat';
  style.webkitTransformStyle = 'flat';
  if (this.renderConfig.className) {
    resizerElem.setAttribute('class', this.renderConfig.className);
  }
  wrapper.appendChild(resizerElem);

  style.overflow = 'hidden';
  var svg = createNS('svg');
  svg.setAttribute('width', '1');
  svg.setAttribute('height', '1');
  styleDiv(svg);
  this.resizerElem.appendChild(svg);
  var defs = createNS('defs');
  svg.appendChild(defs);
  this.data = animData;
  // Mask animation
  this.setupGlobalData(animData, svg);
  this.globalData.defs = defs;
  this.layers = animData.layers;
  this.layerElement = this.resizerElem;
  this.build3dContainers();
  this.updateContainerSize();
};

HybridRenderer.prototype.destroy = function () {
  if (this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  this.animationItem.container = null;
  this.globalData.defs = null;
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = 0; i < len; i += 1) {
    this.elements[i].destroy();
  }
  this.elements.length = 0;
  this.destroyed = true;
  this.animationItem = null;
};

HybridRenderer.prototype.updateContainerSize = function () {
  var elementWidth = this.animationItem.wrapper.offsetWidth;
  var elementHeight = this.animationItem.wrapper.offsetHeight;
  var elementRel = elementWidth / elementHeight;
  var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
  var sx;
  var sy;
  var tx;
  var ty;
  if (animationRel > elementRel) {
    sx = elementWidth / (this.globalData.compSize.w);
    sy = elementWidth / (this.globalData.compSize.w);
    tx = 0;
    ty = ((elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2);
  } else {
    sx = elementHeight / (this.globalData.compSize.h);
    sy = elementHeight / (this.globalData.compSize.h);
    tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
    ty = 0;
  }
  var style = this.resizerElem.style;
  style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,' + sy + ',0,0,0,0,1,0,' + tx + ',' + ty + ',0,1)';
  style.transform = style.webkitTransform;
};

HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

HybridRenderer.prototype.hide = function () {
  this.resizerElem.style.display = 'none';
};

HybridRenderer.prototype.show = function () {
  this.resizerElem.style.display = 'block';
};

HybridRenderer.prototype.initItems = function () {
  this.buildAllItems();
  if (this.camera) {
    this.camera.setup();
  } else {
    var cWidth = this.globalData.compSize.w;
    var cHeight = this.globalData.compSize.h;
    var i;
    var len = this.threeDElements.length;
    for (i = 0; i < len; i += 1) {
      var style = this.threeDElements[i].perspectiveElem.style;
      style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + 'px';
      style.perspective = style.webkitPerspective;
    }
  }
};

HybridRenderer.prototype.searchExtraCompositions = function (assets) {
  var i;
  var len = assets.length;
  var floatingContainer = createTag('div');
  for (i = 0; i < len; i += 1) {
    if (assets[i].xt) {
      var comp = this.createComp(assets[i], floatingContainer, this.globalData.comp, null);
      comp.initExpressions();
      this.globalData.projectInterface.registerComposition(comp);
    }
  }
};

/* global createSizedArray, createElementID, PropertyFactory, ShapePropertyFactory, createNS, locationHref */

function MaskElement(data, element, globalData) {
  this.data = data;
  this.element = element;
  this.globalData = globalData;
  this.storedData = [];
  this.masksProperties = this.data.masksProperties || [];
  this.maskElement = null;
  var defs = this.globalData.defs;
  var i;
  var len = this.masksProperties ? this.masksProperties.length : 0;
  this.viewData = createSizedArray(len);
  this.solidPath = '';

  var path;
  var properties = this.masksProperties;
  var count = 0;
  var currentMasks = [];
  var j;
  var jLen;
  var layerId = createElementID();
  var rect;
  var expansor;
  var feMorph;
  var x;
  var maskType = 'clipPath';
  var maskRef = 'clip-path';
  for (i = 0; i < len; i += 1) {
    if ((properties[i].mode !== 'a' && properties[i].mode !== 'n') || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
      maskType = 'mask';
      maskRef = 'mask';
    }

    if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
      rect = createNS('rect');
      rect.setAttribute('fill', '#ffffff');
      rect.setAttribute('width', this.element.comp.data.w || 0);
      rect.setAttribute('height', this.element.comp.data.h || 0);
      currentMasks.push(rect);
    } else {
      rect = null;
    }

    path = createNS('path');
    if (properties[i].mode === 'n') {
      // TODO move this to a factory or to a constructor
      this.viewData[i] = {
        op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
        elem: path,
        lastPath: '',
      };
      defs.appendChild(path);
    } else {
      count += 1;

      path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
      path.setAttribute('clip-rule', 'nonzero');
      var filterID;

      if (properties[i].x.k !== 0) {
        maskType = 'mask';
        maskRef = 'mask';
        x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
        filterID = createElementID();
        expansor = createNS('filter');
        expansor.setAttribute('id', filterID);
        feMorph = createNS('feMorphology');
        feMorph.setAttribute('operator', 'erode');
        feMorph.setAttribute('in', 'SourceGraphic');
        feMorph.setAttribute('radius', '0');
        expansor.appendChild(feMorph);
        defs.appendChild(expansor);
        path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
      } else {
        feMorph = null;
        x = null;
      }

      // TODO move this to a factory or to a constructor
      this.storedData[i] = {
        elem: path,
        x: x,
        expan: feMorph,
        lastPath: '',
        lastOperator: '',
        filterId: filterID,
        lastRadius: 0,
      };
      if (properties[i].mode === 'i') {
        jLen = currentMasks.length;
        var g = createNS('g');
        for (j = 0; j < jLen; j += 1) {
          g.appendChild(currentMasks[j]);
        }
        var mask = createNS('mask');
        mask.setAttribute('mask-type', 'alpha');
        mask.setAttribute('id', layerId + '_' + count);
        mask.appendChild(path);
        defs.appendChild(mask);
        g.setAttribute('mask', 'url(' + locationHref + '#' + layerId + '_' + count + ')');

        currentMasks.length = 0;
        currentMasks.push(g);
      } else {
        currentMasks.push(path);
      }
      if (properties[i].inv && !this.solidPath) {
        this.solidPath = this.createLayerSolidPath();
      }
      // TODO move this to a factory or to a constructor
      this.viewData[i] = {
        elem: path,
        lastPath: '',
        op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
        invRect: rect,
      };
      if (!this.viewData[i].prop.k) {
        this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
      }
    }
  }

  this.maskElement = createNS(maskType);

  len = currentMasks.length;
  for (i = 0; i < len; i += 1) {
    this.maskElement.appendChild(currentMasks[i]);
  }

  if (count > 0) {
    this.maskElement.setAttribute('id', layerId);
    this.element.maskedElement.setAttribute(maskRef, 'url(' + locationHref + '#' + layerId + ')');
    defs.appendChild(this.maskElement);
  }
  if (this.viewData.length) {
    this.element.addRenderableComponent(this);
  }
}

MaskElement.prototype.getMaskProperty = function (pos) {
  return this.viewData[pos].prop;
};

MaskElement.prototype.renderFrame = function (isFirstFrame) {
  var finalMat = this.element.finalTransform.mat;
  var i;
  var len = this.masksProperties.length;
  for (i = 0; i < len; i += 1) {
    if (this.viewData[i].prop._mdf || isFirstFrame) {
      this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
    }
    if (this.viewData[i].op._mdf || isFirstFrame) {
      this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
    }
    if (this.masksProperties[i].mode !== 'n') {
      if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
        this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
      }
      if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
        var feMorph = this.storedData[i].expan;
        if (this.storedData[i].x.v < 0) {
          if (this.storedData[i].lastOperator !== 'erode') {
            this.storedData[i].lastOperator = 'erode';
            this.storedData[i].elem.setAttribute('filter', 'url(' + locationHref + '#' + this.storedData[i].filterId + ')');
          }
          feMorph.setAttribute('radius', -this.storedData[i].x.v);
        } else {
          if (this.storedData[i].lastOperator !== 'dilate') {
            this.storedData[i].lastOperator = 'dilate';
            this.storedData[i].elem.setAttribute('filter', null);
          }
          this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
        }
      }
    }
  }
};

MaskElement.prototype.getMaskelement = function () {
  return this.maskElement;
};

MaskElement.prototype.createLayerSolidPath = function () {
  var path = 'M0,0 ';
  path += ' h' + this.globalData.compSize.w;
  path += ' v' + this.globalData.compSize.h;
  path += ' h-' + this.globalData.compSize.w;
  path += ' v-' + this.globalData.compSize.h + ' ';
  return path;
};

MaskElement.prototype.drawPath = function (pathData, pathNodes, viewData) {
  var pathString = ' M' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
  var i;
  var len;
  len = pathNodes._length;
  for (i = 1; i < len; i += 1) {
    // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
    pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + ' ' + pathNodes.v[i][0] + ',' + pathNodes.v[i][1];
  }
  // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
  if (pathNodes.c && len > 1) {
    pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + ' ' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
  }
  // pathNodes.__renderedString = pathString;

  if (viewData.lastPath !== pathString) {
    var pathShapeValue = '';
    if (viewData.elem) {
      if (pathNodes.c) {
        pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
      }
      viewData.elem.setAttribute('d', pathShapeValue);
    }
    viewData.lastPath = pathString;
  }
};

MaskElement.prototype.destroy = function () {
  this.element = null;
  this.globalData = null;
  this.maskElement = null;
  this.data = null;
  this.masksProperties = null;
};

/**
 * @file
 * Handles AE's layer parenting property.
 *
 */

function HierarchyElement() {}

HierarchyElement.prototype = {
  /**
     * @function
     * Initializes hierarchy properties
     *
     */
  initHierarchy: function () {
    // element's parent list
    this.hierarchy = [];
    // if element is parent of another layer _isParent will be true
    this._isParent = false;
    this.checkParenting();
  },
  /**
     * @function
     * Sets layer's hierarchy.
     * @param {array} hierarch
     * layer's parent list
     *
     */
  setHierarchy: function (hierarchy) {
    this.hierarchy = hierarchy;
  },
  /**
     * @function
     * Sets layer as parent.
     *
     */
  setAsParent: function () {
    this._isParent = true;
  },
  /**
     * @function
     * Searches layer's parenting chain
     *
     */
  checkParenting: function () {
    if (this.data.parent !== undefined) {
      this.comp.buildElementParenting(this, this.data.parent, []);
    }
  },
};

/**
 * @file
 * Handles element's layer frame update.
 * Checks layer in point and out point
 *
 */

function FrameElement() {}

FrameElement.prototype = {
  /**
     * @function
     * Initializes frame related properties.
     *
     */
  initFrame: function () {
    // set to true when inpoint is rendered
    this._isFirstFrame = false;
    // list of animated properties
    this.dynamicProperties = [];
    // If layer has been modified in current tick this will be true
    this._mdf = false;
  },
  /**
     * @function
     * Calculates all dynamic values
     *
     * @param {number} num
     * current frame number in Layer's time
     * @param {boolean} isVisible
     * if layers is currently in range
     *
     */
  prepareProperties: function (num, isVisible) {
    var i;
    var len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
      if (isVisible || (this._isParent && this.dynamicProperties[i].propType === 'transform')) {
        this.dynamicProperties[i].getValue();
        if (this.dynamicProperties[i]._mdf) {
          this.globalData._mdf = true;
          this._mdf = true;
        }
      }
    }
  },
  addDynamicProperty: function (prop) {
    if (this.dynamicProperties.indexOf(prop) === -1) {
      this.dynamicProperties.push(prop);
    }
  },
};

/* global TransformPropertyFactory, Matrix */

function TransformElement() {}

TransformElement.prototype = {
  initTransform: function () {
    this.finalTransform = {
      mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 },
      _matMdf: false,
      _opMdf: false,
      mat: new Matrix(),
    };
    if (this.data.ao) {
      this.finalTransform.mProp.autoOriented = true;
    }

    // TODO: check TYPE 11: Guided elements
    if (this.data.ty !== 11) {
      // this.createElements();
    }
  },
  renderTransform: function () {
    this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
    this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

    if (this.hierarchy) {
      var mat;
      var finalMat = this.finalTransform.mat;
      var i = 0;
      var len = this.hierarchy.length;
      // Checking if any of the transformation matrices in the hierarchy chain has changed.
      if (!this.finalTransform._matMdf) {
        while (i < len) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
      }

      if (this.finalTransform._matMdf) {
        mat = this.finalTransform.mProp.v.props;
        finalMat.cloneFromProps(mat);
        for (i = 0; i < len; i += 1) {
          mat = this.hierarchy[i].finalTransform.mProp.v.props;
          finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
        }
      }
    }
  },
  globalToLocal: function (pt) {
    var transforms = [];
    transforms.push(this.finalTransform);
    var flag = true;
    var comp = this.comp;
    while (flag) {
      if (comp.finalTransform) {
        if (comp.data.hasMask) {
          transforms.splice(0, 0, comp.finalTransform);
        }
        comp = comp.comp;
      } else {
        flag = false;
      }
    }
    var i;
    var len = transforms.length;
    var ptNew;
    for (i = 0; i < len; i += 1) {
      ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
      // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
      pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
    }
    return pt;
  },
  mHelper: new Matrix(),
};

function RenderableElement() {

}

RenderableElement.prototype = {
  initRenderable: function () {
    // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
    this.isInRange = false;
    // layer's display state
    this.hidden = false;
    // If layer's transparency equals 0, it can be hidden
    this.isTransparent = false;
    // list of animated components
    this.renderableComponents = [];
  },
  addRenderableComponent: function (component) {
    if (this.renderableComponents.indexOf(component) === -1) {
      this.renderableComponents.push(component);
    }
  },
  removeRenderableComponent: function (component) {
    if (this.renderableComponents.indexOf(component) !== -1) {
      this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
    }
  },
  prepareRenderableFrame: function (num) {
    this.checkLayerLimits(num);
  },
  checkTransparency: function () {
    if (this.finalTransform.mProp.o.v <= 0) {
      if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
        this.isTransparent = true;
        this.hide();
      }
    } else if (this.isTransparent) {
      this.isTransparent = false;
      this.show();
    }
  },
  /**
     * @function
     * Initializes frame related properties.
     *
     * @param {number} num
     * current frame number in Layer's time
     *
     */
  checkLayerLimits: function (num) {
    if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
      if (this.isInRange !== true) {
        this.globalData._mdf = true;
        this._mdf = true;
        this.isInRange = true;
        this.show();
      }
    } else if (this.isInRange !== false) {
      this.globalData._mdf = true;
      this.isInRange = false;
      this.hide();
    }
  },
  renderRenderable: function () {
    var i;
    var len = this.renderableComponents.length;
    for (i = 0; i < len; i += 1) {
      this.renderableComponents[i].renderFrame(this._isFirstFrame);
    }
    /* this.maskManager.renderFrame(this.finalTransform.mat);
        this.renderableEffectsManager.renderFrame(this._isFirstFrame); */
  },
  sourceRectAtTime: function () {
    return {
      top: 0,
      left: 0,
      width: 100,
      height: 100,
    };
  },
  getLayerSize: function () {
    if (this.data.ty === 5) {
      return { w: this.data.textData.width, h: this.data.textData.height };
    }
    return { w: this.data.width, h: this.data.height };
  },
};

/* global extendPrototype, RenderableElement, createProxyFunction */

function RenderableDOMElement() {}

(function () {
  var _prototype = {
    initElement: function (data, globalData, comp) {
      this.initFrame();
      this.initBaseData(data, globalData, comp);
      this.initTransform(data, globalData, comp);
      this.initHierarchy();
      this.initRenderable();
      this.initRendererElement();
      this.createContainerElements();
      this.createRenderableComponents();
      this.createContent();
      this.hide();
    },
    hide: function () {
      if (!this.hidden && (!this.isInRange || this.isTransparent)) {
        var elem = this.baseElement || this.layerElement;
        elem.style.display = 'none';
        this.hidden = true;
      }
    },
    show: function () {
      if (this.isInRange && !this.isTransparent) {
        if (!this.data.hd) {
          var elem = this.baseElement || this.layerElement;
          elem.style.display = 'block';
        }
        this.hidden = false;
        this._isFirstFrame = true;
      }
    },
    renderFrame: function () {
      // If it is exported as hidden (data.hd === true) no need to render
      // If it is not visible no need to render
      if (this.data.hd || this.hidden) {
        return;
      }
      this.renderTransform();
      this.renderRenderable();
      this.renderElement();
      this.renderInnerContent();
      if (this._isFirstFrame) {
        this._isFirstFrame = false;
      }
    },
    renderInnerContent: function () {},
    prepareFrame: function (num) {
      this._mdf = false;
      this.prepareRenderableFrame(num);
      this.prepareProperties(num, this.isInRange);
      this.checkTransparency();
    },
    destroy: function () {
      this.innerElem = null;
      this.destroyBaseElement();
    },
  };
  extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
}());

/* exported ProcessedElement */

function ProcessedElement(element, position) {
  this.elem = element;
  this.pos = position;
}

/* global createNS */

function SVGStyleData(data, level) {
  this.data = data;
  this.type = data.ty;
  this.d = '';
  this.lvl = level;
  this._mdf = false;
  this.closed = data.hd === true;
  this.pElem = createNS('path');
  this.msElem = null;
}

SVGStyleData.prototype.reset = function () {
  this.d = '';
  this._mdf = false;
};

function SVGShapeData(transformers, level, shape) {
  this.caches = [];
  this.styles = [];
  this.transformers = transformers;
  this.lStr = '';
  this.sh = shape;
  this.lvl = level;
  // TODO find if there are some cases where _isAnimated can be false.
  // For now, since shapes add up with other shapes. They have to be calculated every time.
  // One way of finding out is checking if all styles associated to this shape depend only of this shape
  this._isAnimated = !!shape.k;
  // TODO: commenting this for now since all shapes are animated
  var i = 0;
  var len = transformers.length;
  while (i < len) {
    if (transformers[i].mProps.dynamicProperties.length) {
      this._isAnimated = true;
      break;
    }
    i += 1;
  }
}

SVGShapeData.prototype.setAsAnimated = function () {
  this._isAnimated = true;
};

/* exported SVGTransformData */

function SVGTransformData(mProps, op, container) {
  this.transform = {
    mProps: mProps,
    op: op,
    container: container,
  };
  this.elements = [];
  this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
}

/* global DashProperty, PropertyFactory, extendPrototype, DynamicPropertyContainer */

function SVGStrokeStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
  this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
  this.d = new DashProperty(elem, data.d || {}, 'svg', this);
  this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
  this.style = styleOb;
  this._isAnimated = !!this._isAnimated;
}

extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

/* global PropertyFactory, extendPrototype, DynamicPropertyContainer */

function SVGFillStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
  this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
  this.style = styleOb;
}

extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

/* global PropertyFactory, degToRads, GradientProperty, createElementID, createNS, locationHref,
extendPrototype, DynamicPropertyContainer, lineCapEnum, lineJoinEnum */

function SVGGradientFillStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.initGradientData(elem, data, styleOb);
}

SVGGradientFillStyleData.prototype.initGradientData = function (elem, data, styleOb) {
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
  this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
  this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
  this.h = PropertyFactory.getProp(elem, data.h || { k: 0 }, 0, 0.01, this);
  this.a = PropertyFactory.getProp(elem, data.a || { k: 0 }, 0, degToRads, this);
  this.g = new GradientProperty(elem, data.g, this);
  this.style = styleOb;
  this.stops = [];
  this.setGradientData(styleOb.pElem, data);
  this.setGradientOpacity(data, styleOb);
  this._isAnimated = !!this._isAnimated;
};

SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
  var gradientId = createElementID();
  var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
  gfill.setAttribute('id', gradientId);
  gfill.setAttribute('spreadMethod', 'pad');
  gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
  var stops = [];
  var stop;
  var j;
  var jLen;
  jLen = data.g.p * 4;
  for (j = 0; j < jLen; j += 4) {
    stop = createNS('stop');
    gfill.appendChild(stop);
    stops.push(stop);
  }
  pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + gradientId + ')');
  this.gf = gfill;
  this.cst = stops;
};

SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
  if (this.g._hasOpacity && !this.g._collapsable) {
    var stop;
    var j;
    var jLen;
    var mask = createNS('mask');
    var maskElement = createNS('path');
    mask.appendChild(maskElement);
    var opacityId = createElementID();
    var maskId = createElementID();
    mask.setAttribute('id', maskId);
    var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    opFill.setAttribute('id', opacityId);
    opFill.setAttribute('spreadMethod', 'pad');
    opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
    jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
    var stops = this.stops;
    for (j = data.g.p * 4; j < jLen; j += 2) {
      stop = createNS('stop');
      stop.setAttribute('stop-color', 'rgb(255,255,255)');
      opFill.appendChild(stop);
      stops.push(stop);
    }
    maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + opacityId + ')');
    if (data.ty === 'gs') {
      maskElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
      maskElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
      if (data.lj === 1) {
        maskElement.setAttribute('stroke-miterlimit', data.ml);
      }
    }
    this.of = opFill;
    this.ms = mask;
    this.ost = stops;
    this.maskId = maskId;
    styleOb.msElem = maskElement;
  }
};

extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

/* global PropertyFactory, DashProperty, extendPrototype, SVGGradientFillStyleData, DynamicPropertyContainer */

function SVGGradientStrokeStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
  this.d = new DashProperty(elem, data.d || {}, 'svg', this);
  this.initGradientData(elem, data, styleOb);
  this._isAnimated = !!this._isAnimated;
}

extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

/* global createNS */
/* exported ShapeGroupData */

function ShapeGroupData() {
  this.it = [];
  this.prevViewData = [];
  this.gr = createNS('g');
}

/* global Matrix, buildShapeString, bmFloor */
/* exported SVGElementsRenderer */

var SVGElementsRenderer = (function () {
  var _identityMatrix = new Matrix();
  var _matrixHelper = new Matrix();

  var ob = {
    createRenderFunction: createRenderFunction,
  };

  function createRenderFunction(data) {
    switch (data.ty) {
      case 'fl':
        return renderFill;
      case 'gf':
        return renderGradient;
      case 'gs':
        return renderGradientStroke;
      case 'st':
        return renderStroke;
      case 'sh':
      case 'el':
      case 'rc':
      case 'sr':
        return renderPath;
      case 'tr':
        return renderContentTransform;
      default:
        return null;
    }
  }

  function renderContentTransform(styleData, itemData, isFirstFrame) {
    if (isFirstFrame || itemData.transform.op._mdf) {
      itemData.transform.container.setAttribute('opacity', itemData.transform.op.v);
    }
    if (isFirstFrame || itemData.transform.mProps._mdf) {
      itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS());
    }
  }

  function renderPath(styleData, itemData, isFirstFrame) {
    var j;
    var jLen;
    var pathStringTransformed;
    var redraw;
    var pathNodes;
    var l;
    var lLen = itemData.styles.length;
    var lvl = itemData.lvl;
    var paths;
    var mat;
    var props;
    var iterations;
    var k;
    for (l = 0; l < lLen; l += 1) {
      redraw = itemData.sh._mdf || isFirstFrame;
      if (itemData.styles[l].lvl < lvl) {
        mat = _matrixHelper.reset();
        iterations = lvl - itemData.styles[l].lvl;
        k = itemData.transformers.length - 1;
        while (!redraw && iterations > 0) {
          redraw = itemData.transformers[k].mProps._mdf || redraw;
          iterations -= 1;
          k -= 1;
        }
        if (redraw) {
          iterations = lvl - itemData.styles[l].lvl;
          k = itemData.transformers.length - 1;
          while (iterations > 0) {
            props = itemData.transformers[k].mProps.v.props;
            mat.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
            iterations -= 1;
            k -= 1;
          }
        }
      } else {
        mat = _identityMatrix;
      }
      paths = itemData.sh.paths;
      jLen = paths._length;
      if (redraw) {
        pathStringTransformed = '';
        for (j = 0; j < jLen; j += 1) {
          pathNodes = paths.shapes[j];
          if (pathNodes && pathNodes._length) {
            pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
          }
        }
        itemData.caches[l] = pathStringTransformed;
      } else {
        pathStringTransformed = itemData.caches[l];
      }
      itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
      itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
    }
  }

  function renderFill(styleData, itemData, isFirstFrame) {
    var styleElem = itemData.style;

    if (itemData.c._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('fill', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
    }
    if (itemData.o._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('fill-opacity', itemData.o.v);
    }
  }

  function renderGradientStroke(styleData, itemData, isFirstFrame) {
    renderGradient(styleData, itemData, isFirstFrame);
    renderStroke(styleData, itemData, isFirstFrame);
  }

  function renderGradient(styleData, itemData, isFirstFrame) {
    var gfill = itemData.gf;
    var hasOpacity = itemData.g._hasOpacity;
    var pt1 = itemData.s.v;
    var pt2 = itemData.e.v;

    if (itemData.o._mdf || isFirstFrame) {
      var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
      itemData.style.pElem.setAttribute(attr, itemData.o.v);
    }
    if (itemData.s._mdf || isFirstFrame) {
      var attr1 = styleData.t === 1 ? 'x1' : 'cx';
      var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
      gfill.setAttribute(attr1, pt1[0]);
      gfill.setAttribute(attr2, pt1[1]);
      if (hasOpacity && !itemData.g._collapsable) {
        itemData.of.setAttribute(attr1, pt1[0]);
        itemData.of.setAttribute(attr2, pt1[1]);
      }
    }
    var stops;
    var i;
    var len;
    var stop;
    if (itemData.g._cmdf || isFirstFrame) {
      stops = itemData.cst;
      var cValues = itemData.g.c;
      len = stops.length;
      for (i = 0; i < len; i += 1) {
        stop = stops[i];
        stop.setAttribute('offset', cValues[i * 4] + '%');
        stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
      }
    }
    if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
      var oValues = itemData.g.o;
      if (itemData.g._collapsable) {
        stops = itemData.cst;
      } else {
        stops = itemData.ost;
      }
      len = stops.length;
      for (i = 0; i < len; i += 1) {
        stop = stops[i];
        if (!itemData.g._collapsable) {
          stop.setAttribute('offset', oValues[i * 2] + '%');
        }
        stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
      }
    }
    if (styleData.t === 1) {
      if (itemData.e._mdf || isFirstFrame) {
        gfill.setAttribute('x2', pt2[0]);
        gfill.setAttribute('y2', pt2[1]);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('x2', pt2[0]);
          itemData.of.setAttribute('y2', pt2[1]);
        }
      }
    } else {
      var rad;
      if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
        rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        gfill.setAttribute('r', rad);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('r', rad);
        }
      }
      if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
        if (!rad) {
          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        }
        var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

        var percent = itemData.h.v;
        if (percent >= 1) {
          percent = 0.99;
        } else if (percent <= -1) {
          percent = -0.99;
        }
        var dist = rad * percent;
        var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
        var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
        gfill.setAttribute('fx', x);
        gfill.setAttribute('fy', y);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('fx', x);
          itemData.of.setAttribute('fy', y);
        }
      }
      // gfill.setAttribute('fy','200');
    }
  }

  function renderStroke(styleData, itemData, isFirstFrame) {
    var styleElem = itemData.style;
    var d = itemData.d;
    if (d && (d._mdf || isFirstFrame) && d.dashStr) {
      styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
      styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
    }
    if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
      styleElem.pElem.setAttribute('stroke', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
    }
    if (itemData.o._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
    }
    if (itemData.w._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('stroke-width', itemData.w.v);
      if (styleElem.msElem) {
        styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
      }
    }
  }

  return ob;
}());

/* global Matrix */

function ShapeTransformManager() {
  this.sequences = {};
  this.sequenceList = [];
  this.transform_key_count = 0;
}

ShapeTransformManager.prototype = {
  addTransformSequence: function (transforms) {
    var i;
    var len = transforms.length;
    var key = '_';
    for (i = 0; i < len; i += 1) {
      key += transforms[i].transform.key + '_';
    }
    var sequence = this.sequences[key];
    if (!sequence) {
      sequence = {
        transforms: [].concat(transforms),
        finalTransform: new Matrix(),
        _mdf: false,
      };
      this.sequences[key] = sequence;
      this.sequenceList.push(sequence);
    }
    return sequence;
  },
  processSequence: function (sequence, isFirstFrame) {
    var i = 0;
    var len = sequence.transforms.length;
    var _mdf = isFirstFrame;
    while (i < len && !isFirstFrame) {
      if (sequence.transforms[i].transform.mProps._mdf) {
        _mdf = true;
        break;
      }
      i += 1;
    }
    if (_mdf) {
      var props;
      sequence.finalTransform.reset();
      for (i = len - 1; i >= 0; i -= 1) {
        props = sequence.transforms[i].transform.mProps.v.props;
        sequence.finalTransform.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
      }
    }
    sequence._mdf = _mdf;
  },
  processSequences: function (isFirstFrame) {
    var i;
    var len = this.sequenceList.length;
    for (i = 0; i < len; i += 1) {
      this.processSequence(this.sequenceList[i], isFirstFrame);
    }
  },
  getNewKey: function () {
    this.transform_key_count += 1;
    return '_' + this.transform_key_count;
  },
};

/* global ShapePropertyFactory, SVGShapeData */

function CVShapeData(element, data, styles, transformsManager) {
  this.styledShapes = [];
  this.tr = [0, 0, 0, 0, 0, 0];
  var ty = 4;
  if (data.ty === 'rc') {
    ty = 5;
  } else if (data.ty === 'el') {
    ty = 6;
  } else if (data.ty === 'sr') {
    ty = 7;
  }
  this.sh = ShapePropertyFactory.getShapeProp(element, data, ty, element);
  var i;
  var len = styles.length;
  var styledShape;
  for (i = 0; i < len; i += 1) {
    if (!styles[i].closed) {
      styledShape = {
        transforms: transformsManager.addTransformSequence(styles[i].transforms),
        trNodes: [],
      };
      this.styledShapes.push(styledShape);
      styles[i].elements.push(styledShape);
    }
  }
}

CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

/* global LayerExpressionInterface, EffectsExpressionInterface, CompExpressionInterface, ShapeExpressionInterface,
TextExpressionInterface, getBlendMode,createElementID, EffectsManager */

function BaseElement() {
}

BaseElement.prototype = {
  checkMasks: function () {
    if (!this.data.hasMask) {
      return false;
    }
    var i = 0;
    var len = this.data.masksProperties.length;
    while (i < len) {
      if ((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false)) {
        return true;
      }
      i += 1;
    }
    return false;
  },
  initExpressions: function () {
    this.layerInterface = LayerExpressionInterface(this);
    if (this.data.hasMask && this.maskManager) {
      this.layerInterface.registerMaskInterface(this.maskManager);
    }
    var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
    this.layerInterface.registerEffectsInterface(effectsInterface);

    if (this.data.ty === 0 || this.data.xt) {
      this.compInterface = CompExpressionInterface(this);
    } else if (this.data.ty === 4) {
      this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
      this.layerInterface.content = this.layerInterface.shapeInterface;
    } else if (this.data.ty === 5) {
      this.layerInterface.textInterface = TextExpressionInterface(this);
      this.layerInterface.text = this.layerInterface.textInterface;
    }
  },
  setBlendMode: function () {
    var blendModeValue = getBlendMode(this.data.bm);
    var elem = this.baseElement || this.layerElement;

    elem.style['mix-blend-mode'] = blendModeValue;
  },
  initBaseData: function (data, globalData, comp) {
    this.globalData = globalData;
    this.comp = comp;
    this.data = data;
    this.layerId = createElementID();

    // Stretch factor for old animations missing this property.
    if (!this.data.sr) {
      this.data.sr = 1;
    }
    // effects manager
    this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
  },
  getType: function () {
    return this.type;
  },
  sourceRectAtTime: function () {},
};

/* global extendPrototype, BaseElement, TransformElement, HierarchyElement, FrameElement */

function NullElement(data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initFrame();
  this.initTransform(data, globalData, comp);
  this.initHierarchy();
}

NullElement.prototype.prepareFrame = function (num) {
  this.prepareProperties(num, true);
};

NullElement.prototype.renderFrame = function () {
};

NullElement.prototype.getBaseElement = function () {
  return null;
};

NullElement.prototype.destroy = function () {
};

NullElement.prototype.sourceRectAtTime = function () {
};

NullElement.prototype.hide = function () {
};

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

/* global filtersFactory, featureSupport, filtersFactory, createElementID, createNS, MaskElement, SVGEffects, locationHref */

function SVGBaseElement() {
}

SVGBaseElement.prototype = {
  initRendererElement: function () {
    this.layerElement = createNS('g');
  },
  createContainerElements: function () {
    this.matteElement = createNS('g');
    this.transformedElement = this.layerElement;
    this.maskedElement = this.layerElement;
    this._sizeChanged = false;
    var layerElementParent = null;
    // If this layer acts as a mask for the following layer
    var filId;
    var fil;
    var gg;
    if (this.data.td) {
      if (this.data.td == 3 || this.data.td == 1) { // eslint-disable-line eqeqeq
        var masker = createNS('mask');
        masker.setAttribute('id', this.layerId);
        masker.setAttribute('mask-type', this.data.td == 3 ? 'luminance' : 'alpha'); // eslint-disable-line eqeqeq
        masker.appendChild(this.layerElement);
        layerElementParent = masker;
        this.globalData.defs.appendChild(masker);
        // This is only for IE and Edge when mask if of type alpha
        if (!featureSupport.maskType && this.data.td == 1) { // eslint-disable-line eqeqeq
          masker.setAttribute('mask-type', 'luminance');
          filId = createElementID();
          fil = filtersFactory.createFilter(filId);
          this.globalData.defs.appendChild(fil);
          fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
          gg = createNS('g');
          gg.appendChild(this.layerElement);
          layerElementParent = gg;
          masker.appendChild(gg);
          gg.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
        }
      } else if (this.data.td == 2) { // eslint-disable-line eqeqeq
        var maskGroup = createNS('mask');
        maskGroup.setAttribute('id', this.layerId);
        maskGroup.setAttribute('mask-type', 'alpha');
        var maskGrouper = createNS('g');
        maskGroup.appendChild(maskGrouper);
        filId = createElementID();
        fil = filtersFactory.createFilter(filId);
        /// /

        // This solution doesn't work on Android when meta tag with viewport attribute is set
        /* var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type', 'matrix');
                feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
                feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
                fil.appendChild(feColorMatrix); */
        /// /
        var feCTr = createNS('feComponentTransfer');
        feCTr.setAttribute('in', 'SourceGraphic');
        fil.appendChild(feCTr);
        var feFunc = createNS('feFuncA');
        feFunc.setAttribute('type', 'table');
        feFunc.setAttribute('tableValues', '1.0 0.0');
        feCTr.appendChild(feFunc);
        /// /
        this.globalData.defs.appendChild(fil);
        var alphaRect = createNS('rect');
        alphaRect.setAttribute('width', this.comp.data.w);
        alphaRect.setAttribute('height', this.comp.data.h);
        alphaRect.setAttribute('x', '0');
        alphaRect.setAttribute('y', '0');
        alphaRect.setAttribute('fill', '#ffffff');
        alphaRect.setAttribute('opacity', '0');
        maskGrouper.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
        maskGrouper.appendChild(alphaRect);
        maskGrouper.appendChild(this.layerElement);
        layerElementParent = maskGrouper;
        if (!featureSupport.maskType) {
          maskGroup.setAttribute('mask-type', 'luminance');
          fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
          gg = createNS('g');
          maskGrouper.appendChild(alphaRect);
          gg.appendChild(this.layerElement);
          layerElementParent = gg;
          maskGrouper.appendChild(gg);
        }
        this.globalData.defs.appendChild(maskGroup);
      }
    } else if (this.data.tt) {
      this.matteElement.appendChild(this.layerElement);
      layerElementParent = this.matteElement;
      this.baseElement = this.matteElement;
    } else {
      this.baseElement = this.layerElement;
    }
    if (this.data.ln) {
      this.layerElement.setAttribute('id', this.data.ln);
    }
    if (this.data.cl) {
      this.layerElement.setAttribute('class', this.data.cl);
    }
    // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
    if (this.data.ty === 0 && !this.data.hd) {
      var cp = createNS('clipPath');
      var pt = createNS('path');
      pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
      var clipId = createElementID();
      cp.setAttribute('id', clipId);
      cp.appendChild(pt);
      this.globalData.defs.appendChild(cp);

      if (this.checkMasks()) {
        var cpGroup = createNS('g');
        cpGroup.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
        cpGroup.appendChild(this.layerElement);
        this.transformedElement = cpGroup;
        if (layerElementParent) {
          layerElementParent.appendChild(this.transformedElement);
        } else {
          this.baseElement = this.transformedElement;
        }
      } else {
        this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
      }
    }
    if (this.data.bm !== 0) {
      this.setBlendMode();
    }
  },
  renderElement: function () {
    if (this.finalTransform._matMdf) {
      this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS());
    }
    if (this.finalTransform._opMdf) {
      this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
    }
  },
  destroyBaseElement: function () {
    this.layerElement = null;
    this.matteElement = null;
    this.maskManager.destroy();
  },
  getBaseElement: function () {
    if (this.data.hd) {
      return null;
    }
    return this.baseElement;
  },
  createRenderableComponents: function () {
    this.maskManager = new MaskElement(this.data, this, this.globalData);
    this.renderableEffectsManager = new SVGEffects(this);
  },
  setMatte: function (id) {
    if (!this.matteElement) {
      return;
    }
    this.matteElement.setAttribute('mask', 'url(' + locationHref + '#' + id + ')');
  },
};

/* global ProcessedElement */

function IShapeElement() {
}

IShapeElement.prototype = {
  addShapeToModifiers: function (data) {
    var i;
    var len = this.shapeModifiers.length;
    for (i = 0; i < len; i += 1) {
      this.shapeModifiers[i].addShape(data);
    }
  },
  isShapeInAnimatedModifiers: function (data) {
    var i = 0;
    var len = this.shapeModifiers.length;
    while (i < len) {
      if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
        return true;
      }
    }
    return false;
  },
  renderModifiers: function () {
    if (!this.shapeModifiers.length) {
      return;
    }
    var i;
    var len = this.shapes.length;
    for (i = 0; i < len; i += 1) {
      this.shapes[i].sh.reset();
    }

    len = this.shapeModifiers.length;
    var shouldBreakProcess;
    for (i = len - 1; i >= 0; i -= 1) {
      shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame);
      // workaround to fix cases where a repeater resets the shape so the following processes get called twice
      // TODO: find a better solution for this
      if (shouldBreakProcess) {
        break;
      }
    }
  },

  searchProcessedElement: function (elem) {
    var elements = this.processedElements;
    var i = 0;
    var len = elements.length;
    while (i < len) {
      if (elements[i].elem === elem) {
        return elements[i].pos;
      }
      i += 1;
    }
    return 0;
  },
  addProcessedElement: function (elem, pos) {
    var elements = this.processedElements;
    var i = elements.length;
    while (i) {
      i -= 1;
      if (elements[i].elem === elem) {
        elements[i].pos = pos;
        return;
      }
    }
    elements.push(new ProcessedElement(elem, pos));
  },
  prepareFrame: function (num) {
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
  },
};

/* global TextProperty, TextAnimatorProperty, buildShapeString, LetterProps */

function ITextElement() {
}

ITextElement.prototype.initElement = function (data, globalData, comp) {
  this.lettersChangedFlag = true;
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
  this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
  this.initTransform(data, globalData, comp);
  this.initHierarchy();
  this.initRenderable();
  this.initRendererElement();
  this.createContainerElements();
  this.createRenderableComponents();
  this.createContent();
  this.hide();
  this.textAnimator.searchProperties(this.dynamicProperties);
};

ITextElement.prototype.prepareFrame = function (num) {
  this._mdf = false;
  this.prepareRenderableFrame(num);
  this.prepareProperties(num, this.isInRange);
  if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
    this.buildNewText();
    this.textProperty._isFirstFrame = false;
    this.textProperty._mdf = false;
  }
};

ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
  var j;
  var jLen = shapes.length;
  var pathNodes;
  var shapeStr = '';
  for (j = 0; j < jLen; j += 1) {
    pathNodes = shapes[j].ks.k;
    shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
  }
  return shapeStr;
};

ITextElement.prototype.updateDocumentData = function (newData, index) {
  this.textProperty.updateDocumentData(newData, index);
};

ITextElement.prototype.canResizeFont = function (_canResize) {
  this.textProperty.canResizeFont(_canResize);
};

ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
  this.textProperty.setMinimumFontSize(_fontSize);
};

ITextElement.prototype.applyTextPropertiesToMatrix = function (documentData, matrixHelper, lineNumber, xPos, yPos) {
  if (documentData.ps) {
    matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
  }
  matrixHelper.translate(0, -documentData.ls, 0);
  switch (documentData.j) {
    case 1:
      matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
      break;
    case 2:
      matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
      break;
    default:
      break;
  }
  matrixHelper.translate(xPos, yPos, 0);
};

ITextElement.prototype.buildColor = function (colorData) {
  return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')';
};

ITextElement.prototype.emptyProp = new LetterProps();

ITextElement.prototype.destroy = function () {

};

/* global extendPrototype, BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement */

function ICompElement() {}

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

ICompElement.prototype.initElement = function (data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initTransform(data, globalData, comp);
  this.initRenderable();
  this.initHierarchy();
  this.initRendererElement();
  this.createContainerElements();
  this.createRenderableComponents();
  if (this.data.xt || !globalData.progressiveLoad) {
    this.buildAllItems();
  }
  this.hide();
};

/* ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this.hideElement();
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
}; */

ICompElement.prototype.prepareFrame = function (num) {
  this._mdf = false;
  this.prepareRenderableFrame(num);
  this.prepareProperties(num, this.isInRange);
  if (!this.isInRange && !this.data.xt) {
    return;
  }

  if (!this.tm._placeholder) {
    var timeRemapped = this.tm.v;
    if (timeRemapped === this.data.op) {
      timeRemapped = this.data.op - 1;
    }
    this.renderedFrame = timeRemapped;
  } else {
    this.renderedFrame = num / this.data.sr;
  }
  var i;
  var len = this.elements.length;
  if (!this.completeLayers) {
    this.checkLayers(this.renderedFrame);
  }
  // This iteration needs to be backwards because of how expressions connect between each other
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
      if (this.elements[i]._mdf) {
        this._mdf = true;
      }
    }
  }
};

ICompElement.prototype.renderInnerContent = function () {
  var i;
  var len = this.layers.length;
  for (i = 0; i < len; i += 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].renderFrame();
    }
  }
};

ICompElement.prototype.setElements = function (elems) {
  this.elements = elems;
};

ICompElement.prototype.getElements = function () {
  return this.elements;
};

ICompElement.prototype.destroyElements = function () {
  var i;
  var len = this.layers.length;
  for (i = 0; i < len; i += 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
};

ICompElement.prototype.destroy = function () {
  this.destroyElements();
  this.destroyBaseElement();
};

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, createNS */

function IImageElement(data, globalData, comp) {
  this.assetData = globalData.getAssetData(data.refId);
  this.initElement(data, globalData, comp);
  this.sourceRect = {
    top: 0, left: 0, width: this.assetData.w, height: this.assetData.h,
  };
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);

IImageElement.prototype.createContent = function () {
  var assetPath = this.globalData.getAssetsPath(this.assetData);

  this.innerElem = createNS('image');
  this.innerElem.setAttribute('width', this.assetData.w + 'px');
  this.innerElem.setAttribute('height', this.assetData.h + 'px');
  this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
  this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);

  this.layerElement.appendChild(this.innerElem);
};

IImageElement.prototype.sourceRectAtTime = function () {
  return this.sourceRect;
};

/* global extendPrototype, IImageElement, createNS */

function ISolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([IImageElement], ISolidElement);

ISolidElement.prototype.createContent = function () {
  var rect = createNS('rect');
  /// /rect.style.width = this.data.sw;
  /// /rect.style.height = this.data.sh;
  /// /rect.style.fill = this.data.sc;
  rect.setAttribute('width', this.data.sw);
  rect.setAttribute('height', this.data.sh);
  rect.setAttribute('fill', this.data.sc);
  this.layerElement.appendChild(rect);
};

/* global PropertyFactory, extendPrototype, RenderableElement, BaseElement, FrameElement */

function AudioElement(data, globalData, comp) {
  this.initFrame();
  this.initRenderable();
  this.assetData = globalData.getAssetData(data.refId);
  this.initBaseData(data, globalData, comp);
  this._isPlaying = false;
  this._canPlay = false;
  var assetPath = this.globalData.getAssetsPath(this.assetData);
  this.audio = this.globalData.audioController.createAudio(assetPath);
  this._currentTime = 0;
  this.globalData.audioController.addAudio(this);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

AudioElement.prototype.prepareFrame = function (num) {
  this.prepareRenderableFrame(num, true);
  this.prepareProperties(num, true);
  if (!this.tm._placeholder) {
    var timeRemapped = this.tm.v;
    this._currentTime = timeRemapped;
  } else {
    this._currentTime = num / this.data.sr;
  }
};

extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);

AudioElement.prototype.renderFrame = function () {
  if (this.isInRange && this._canPlay) {
    if (!this._isPlaying) {
      this.audio.play();
      this.audio.seek(this._currentTime / this.globalData.frameRate);
      this._isPlaying = true;
    } else if (!this.audio.playing()
      || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1
    ) {
      this.audio.seek(this._currentTime / this.globalData.frameRate);
    }
  }
};

AudioElement.prototype.show = function () {
  // this.audio.play()
};

AudioElement.prototype.hide = function () {
  this.audio.pause();
  this._isPlaying = false;
};

AudioElement.prototype.pause = function () {
  this.audio.pause();
  this._isPlaying = false;
  this._canPlay = false;
};

AudioElement.prototype.resume = function () {
  this._canPlay = true;
};

AudioElement.prototype.setRate = function (rateValue) {
  this.audio.rate(rateValue);
};

AudioElement.prototype.volume = function (volumeValue) {
  this.audio.volume(volumeValue);
};

AudioElement.prototype.getBaseElement = function () {
  return null;
};

AudioElement.prototype.destroy = function () {
};

AudioElement.prototype.sourceRectAtTime = function () {
};

AudioElement.prototype.initExpressions = function () {
};

/* global extendPrototype, RenderableElement, BaseElement, FrameElement, FootageInterface */

function FootageElement(data, globalData, comp) {
  this.initFrame();
  this.initRenderable();
  this.assetData = globalData.getAssetData(data.refId);
  this.footageData = globalData.imageLoader.getAsset(this.assetData);
  this.initBaseData(data, globalData, comp);
}

FootageElement.prototype.prepareFrame = function () {
};

extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);

FootageElement.prototype.getBaseElement = function () {
  return null;
};

FootageElement.prototype.renderFrame = function () {
};

FootageElement.prototype.destroy = function () {
};

FootageElement.prototype.initExpressions = function () {
  this.layerInterface = FootageInterface(this);
};

FootageElement.prototype.getFootageData = function () {
  return this.footageData;
};

/* global createSizedArray, PropertyFactory, extendPrototype, SVGRenderer, ICompElement, SVGBaseElement */

function SVGCompElement(data, globalData, comp) {
  this.layers = data.layers;
  this.supports3d = true;
  this.completeLayers = false;
  this.pendingElements = [];
  this.elements = this.layers ? createSizedArray(this.layers.length) : [];
  // this.layerElement = createNS('g');
  this.initElement(data, globalData, comp);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement);

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, ITextElement, createSizedArray, createNS */

function SVGTextLottieElement(data, globalData, comp) {
  this.textSpans = [];
  this.renderType = 'svg';
  this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);

SVGTextLottieElement.prototype.createContent = function () {
  if (this.data.singleShape && !this.globalData.fontManager.chars) {
    this.textContainer = createNS('text');
  }
};

SVGTextLottieElement.prototype.buildTextContents = function (textArray) {
  var i = 0;
  var len = textArray.length;
  var textContents = [];
  var currentTextContent = '';
  while (i < len) {
    if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
      textContents.push(currentTextContent);
      currentTextContent = '';
    } else {
      currentTextContent += textArray[i];
    }
    i += 1;
  }
  textContents.push(currentTextContent);
  return textContents;
};

SVGTextLottieElement.prototype.buildNewText = function () {
  var i;
  var len;

  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
  if (documentData.fc) {
    this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
  } else {
    this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
  }
  if (documentData.sc) {
    this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
    this.layerElement.setAttribute('stroke-width', documentData.sw);
  }
  this.layerElement.setAttribute('font-size', documentData.finalSize);
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  if (fontData.fClass) {
    this.layerElement.setAttribute('class', fontData.fClass);
  } else {
    this.layerElement.setAttribute('font-family', fontData.fFamily);
    var fWeight = documentData.fWeight;
    var fStyle = documentData.fStyle;
    this.layerElement.setAttribute('font-style', fStyle);
    this.layerElement.setAttribute('font-weight', fWeight);
  }
  this.layerElement.setAttribute('aria-label', documentData.t);

  var letters = documentData.l || [];
  var usesGlyphs = !!this.globalData.fontManager.chars;
  len = letters.length;

  var tSpan;
  var matrixHelper = this.mHelper;
  var shapes;
  var shapeStr = '';
  var singleShape = this.data.singleShape;
  var xPos = 0;
  var yPos = 0;
  var firstLine = true;
  var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
  if (singleShape && !usesGlyphs && !documentData.sz) {
    var tElement = this.textContainer;
    var justify = 'start';
    switch (documentData.j) {
      case 1:
        justify = 'end';
        break;
      case 2:
        justify = 'middle';
        break;
      default:
        justify = 'start';
        break;
    }
    tElement.setAttribute('text-anchor', justify);
    tElement.setAttribute('letter-spacing', trackingOffset);
    var textContent = this.buildTextContents(documentData.finalText);
    len = textContent.length;
    yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
    for (i = 0; i < len; i += 1) {
      tSpan = this.textSpans[i] || createNS('tspan');
      tSpan.textContent = textContent[i];
      tSpan.setAttribute('x', 0);
      tSpan.setAttribute('y', yPos);
      tSpan.style.display = 'inherit';
      tElement.appendChild(tSpan);
      this.textSpans[i] = tSpan;
      yPos += documentData.finalLineHeight;
    }

    this.layerElement.appendChild(tElement);
  } else {
    var cachedSpansLength = this.textSpans.length;
    var shapeData;
    var charData;
    for (i = 0; i < len; i += 1) {
      if (!usesGlyphs || !singleShape || i === 0) {
        tSpan = cachedSpansLength > i ? this.textSpans[i] : createNS(usesGlyphs ? 'path' : 'text');
        if (cachedSpansLength <= i) {
          tSpan.setAttribute('stroke-linecap', 'butt');
          tSpan.setAttribute('stroke-linejoin', 'round');
          tSpan.setAttribute('stroke-miterlimit', '4');
          this.textSpans[i] = tSpan;
          this.layerElement.appendChild(tSpan);
        }
        tSpan.style.display = 'inherit';
      }

      matrixHelper.reset();
      matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
      if (singleShape) {
        if (letters[i].n) {
          xPos = -trackingOffset;
          yPos += documentData.yOffset;
          yPos += firstLine ? 1 : 0;
          firstLine = false;
        }
        this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
        xPos += letters[i].l || 0;
        // xPos += letters[i].val === ' ' ? 0 : trackingOffset;
        xPos += trackingOffset;
      }
      if (usesGlyphs) {
        charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        shapeData = (charData && charData.data) || {};
        shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
        if (!singleShape) {
          tSpan.setAttribute('d', this.createPathShape(matrixHelper, shapes));
        } else {
          shapeStr += this.createPathShape(matrixHelper, shapes);
        }
      } else {
        if (singleShape) {
          tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
        }
        tSpan.textContent = letters[i].val;
        tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
      }
      //
    }
    if (singleShape && tSpan) {
      tSpan.setAttribute('d', shapeStr);
    }
  }
  while (i < this.textSpans.length) {
    this.textSpans[i].style.display = 'none';
    i += 1;
  }

  this._sizeChanged = true;
};

SVGTextLottieElement.prototype.sourceRectAtTime = function () {
  this.prepareFrame(this.comp.renderedFrame - this.data.st);
  this.renderInnerContent();
  if (this._sizeChanged) {
    this._sizeChanged = false;
    var textBox = this.layerElement.getBBox();
    this.bbox = {
      top: textBox.y,
      left: textBox.x,
      width: textBox.width,
      height: textBox.height,
    };
  }
  return this.bbox;
};

SVGTextLottieElement.prototype.renderInnerContent = function () {
  if (!this.data.singleShape) {
    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
      this._sizeChanged = true;
      var i;
      var len;
      var renderedLetters = this.textAnimator.renderedLetters;

      var letters = this.textProperty.currentData.l;

      len = letters.length;
      var renderedLetter;
      var textSpan;
      for (i = 0; i < len; i += 1) {
        if (!letters[i].n) {
          renderedLetter = renderedLetters[i];
          textSpan = this.textSpans[i];
          if (renderedLetter._mdf.m) {
            textSpan.setAttribute('transform', renderedLetter.m);
          }
          if (renderedLetter._mdf.o) {
            textSpan.setAttribute('opacity', renderedLetter.o);
          }
          if (renderedLetter._mdf.sw) {
            textSpan.setAttribute('stroke-width', renderedLetter.sw);
          }
          if (renderedLetter._mdf.sc) {
            textSpan.setAttribute('stroke', renderedLetter.sc);
          }
          if (renderedLetter._mdf.fc) {
            textSpan.setAttribute('fill', renderedLetter.fc);
          }
        }
      }
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement,
FrameElement, RenderableDOMElement, Matrix, SVGStyleData, SVGStrokeStyleData, SVGFillStyleData,
SVGGradientFillStyleData, SVGGradientStrokeStyleData, locationHref, getBlendMode, ShapeGroupData,
TransformPropertyFactory, SVGTransformData, ShapePropertyFactory, SVGShapeData, SVGElementsRenderer, ShapeModifiers,
lineCapEnum, lineJoinEnum */

function SVGShapeElement(data, globalData, comp) {
  // List of drawable elements
  this.shapes = [];
  // Full shape data
  this.shapesData = data.shapes;
  // List of styles that will be applied to shapes
  this.stylesList = [];
  // List of modifiers that will be applied to shapes
  this.shapeModifiers = [];
  // List of items in shape tree
  this.itemsData = [];
  // List of items in previous shape tree
  this.processedElements = [];
  // List of animated components
  this.animatedContents = [];
  this.initElement(data, globalData, comp);
  // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
  // List of elements that have been created
  this.prevViewData = [];
  // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);

SVGShapeElement.prototype.initSecondaryElement = function () {
};

SVGShapeElement.prototype.identityMatrix = new Matrix();

SVGShapeElement.prototype.buildExpressionInterface = function () {};

SVGShapeElement.prototype.createContent = function () {
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
  this.filterUniqueShapes();
};

/*
This method searches for multiple shapes that affect a single element and one of them is animated
*/
SVGShapeElement.prototype.filterUniqueShapes = function () {
  var i;
  var len = this.shapes.length;
  var shape;
  var j;
  var jLen = this.stylesList.length;
  var style;
  var tempShapes = [];
  var areAnimated = false;
  for (j = 0; j < jLen; j += 1) {
    style = this.stylesList[j];
    areAnimated = false;
    tempShapes.length = 0;
    for (i = 0; i < len; i += 1) {
      shape = this.shapes[i];
      if (shape.styles.indexOf(style) !== -1) {
        tempShapes.push(shape);
        areAnimated = shape._isAnimated || areAnimated;
      }
    }
    if (tempShapes.length > 1 && areAnimated) {
      this.setShapesAsAnimated(tempShapes);
    }
  }
};

SVGShapeElement.prototype.setShapesAsAnimated = function (shapes) {
  var i;
  var len = shapes.length;
  for (i = 0; i < len; i += 1) {
    shapes[i].setAsAnimated();
  }
};

SVGShapeElement.prototype.createStyleElement = function (data, level) {
  // TODO: prevent drawing of hidden styles
  var elementData;
  var styleOb = new SVGStyleData(data, level);

  var pathElement = styleOb.pElem;
  if (data.ty === 'st') {
    elementData = new SVGStrokeStyleData(this, data, styleOb);
  } else if (data.ty === 'fl') {
    elementData = new SVGFillStyleData(this, data, styleOb);
  } else if (data.ty === 'gf' || data.ty === 'gs') {
    var GradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
    elementData = new GradientConstructor(this, data, styleOb);
    this.globalData.defs.appendChild(elementData.gf);
    if (elementData.maskId) {
      this.globalData.defs.appendChild(elementData.ms);
      this.globalData.defs.appendChild(elementData.of);
      pathElement.setAttribute('mask', 'url(' + locationHref + '#' + elementData.maskId + ')');
    }
  }

  if (data.ty === 'st' || data.ty === 'gs') {
    pathElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
    pathElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
    pathElement.setAttribute('fill-opacity', '0');
    if (data.lj === 1) {
      pathElement.setAttribute('stroke-miterlimit', data.ml);
    }
  }

  if (data.r === 2) {
    pathElement.setAttribute('fill-rule', 'evenodd');
  }

  if (data.ln) {
    pathElement.setAttribute('id', data.ln);
  }
  if (data.cl) {
    pathElement.setAttribute('class', data.cl);
  }
  if (data.bm) {
    pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
  }
  this.stylesList.push(styleOb);
  this.addToAnimatedContents(data, elementData);
  return elementData;
};

SVGShapeElement.prototype.createGroupElement = function (data) {
  var elementData = new ShapeGroupData();
  if (data.ln) {
    elementData.gr.setAttribute('id', data.ln);
  }
  if (data.cl) {
    elementData.gr.setAttribute('class', data.cl);
  }
  if (data.bm) {
    elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
  }
  return elementData;
};

SVGShapeElement.prototype.createTransformElement = function (data, container) {
  var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
  var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
  this.addToAnimatedContents(data, elementData);
  return elementData;
};

SVGShapeElement.prototype.createShapeElement = function (data, ownTransformers, level) {
  var ty = 4;
  if (data.ty === 'rc') {
    ty = 5;
  } else if (data.ty === 'el') {
    ty = 6;
  } else if (data.ty === 'sr') {
    ty = 7;
  }
  var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
  var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
  this.shapes.push(elementData);
  this.addShapeToModifiers(elementData);
  this.addToAnimatedContents(data, elementData);
  return elementData;
};

SVGShapeElement.prototype.addToAnimatedContents = function (data, element) {
  var i = 0;
  var len = this.animatedContents.length;
  while (i < len) {
    if (this.animatedContents[i].element === element) {
      return;
    }
    i += 1;
  }
  this.animatedContents.push({
    fn: SVGElementsRenderer.createRenderFunction(data),
    element: element,
    data: data,
  });
};

SVGShapeElement.prototype.setElementStyles = function (elementData) {
  var arr = elementData.styles;
  var j;
  var jLen = this.stylesList.length;
  for (j = 0; j < jLen; j += 1) {
    if (!this.stylesList[j].closed) {
      arr.push(this.stylesList[j]);
    }
  }
};

SVGShapeElement.prototype.reloadShapes = function () {
  this._isFirstFrame = true;
  var i;
  var len = this.itemsData.length;
  for (i = 0; i < len; i += 1) {
    this.prevViewData[i] = this.itemsData[i];
  }
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
  this.filterUniqueShapes();
  len = this.dynamicProperties.length;
  for (i = 0; i < len; i += 1) {
    this.dynamicProperties[i].getValue();
  }
  this.renderModifiers();
};

SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
  var ownTransformers = [].concat(transformers);
  var i;
  var len = arr.length - 1;
  var j;
  var jLen;
  var ownStyles = [];
  var ownModifiers = [];
  var currentTransform;
  var modifier;
  var processedPos;
  for (i = len; i >= 0; i -= 1) {
    processedPos = this.searchProcessedElement(arr[i]);
    if (!processedPos) {
      arr[i]._render = render;
    } else {
      itemsData[i] = prevViewData[processedPos - 1];
    }
    if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
      if (!processedPos) {
        itemsData[i] = this.createStyleElement(arr[i], level);
      } else {
        itemsData[i].style.closed = false;
      }
      if (arr[i]._render) {
        container.appendChild(itemsData[i].style.pElem);
      }
      ownStyles.push(itemsData[i].style);
    } else if (arr[i].ty === 'gr') {
      if (!processedPos) {
        itemsData[i] = this.createGroupElement(arr[i]);
      } else {
        jLen = itemsData[i].it.length;
        for (j = 0; j < jLen; j += 1) {
          itemsData[i].prevViewData[j] = itemsData[i].it[j];
        }
      }
      this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);
      if (arr[i]._render) {
        container.appendChild(itemsData[i].gr);
      }
    } else if (arr[i].ty === 'tr') {
      if (!processedPos) {
        itemsData[i] = this.createTransformElement(arr[i], container);
      }
      currentTransform = itemsData[i].transform;
      ownTransformers.push(currentTransform);
    } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
      if (!processedPos) {
        itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
      }
      this.setElementStyles(itemsData[i]);
    } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        modifier.init(this, arr[i]);
        itemsData[i] = modifier;
        this.shapeModifiers.push(modifier);
      } else {
        modifier = itemsData[i];
        modifier.closed = false;
      }
      ownModifiers.push(modifier);
    } else if (arr[i].ty === 'rp') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        itemsData[i] = modifier;
        modifier.init(this, arr, i, itemsData);
        this.shapeModifiers.push(modifier);
        render = false;
      } else {
        modifier = itemsData[i];
        modifier.closed = true;
      }
      ownModifiers.push(modifier);
    }
    this.addProcessedElement(arr[i], i + 1);
  }
  len = ownStyles.length;
  for (i = 0; i < len; i += 1) {
    ownStyles[i].closed = true;
  }
  len = ownModifiers.length;
  for (i = 0; i < len; i += 1) {
    ownModifiers[i].closed = true;
  }
};

SVGShapeElement.prototype.renderInnerContent = function () {
  this.renderModifiers();
  var i;
  var len = this.stylesList.length;
  for (i = 0; i < len; i += 1) {
    this.stylesList[i].reset();
  }
  this.renderShape();

  for (i = 0; i < len; i += 1) {
    if (this.stylesList[i]._mdf || this._isFirstFrame) {
      if (this.stylesList[i].msElem) {
        this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
        // Adding M0 0 fixes same mask bug on all browsers
        this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
      }
      this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
    }
  }
};

SVGShapeElement.prototype.renderShape = function () {
  var i;
  var len = this.animatedContents.length;
  var animatedContent;
  for (i = 0; i < len; i += 1) {
    animatedContent = this.animatedContents[i];
    if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
      animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
    }
  }
};

SVGShapeElement.prototype.destroy = function () {
  this.destroyBaseElement();
  this.shapesData = null;
  this.itemsData = null;
};

/* global createNS */

function SVGTintFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
  feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
  feColorMatrix.setAttribute('result', 'f1');
  filter.appendChild(feColorMatrix);
  feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
  feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
  feColorMatrix.setAttribute('result', 'f2');
  filter.appendChild(feColorMatrix);
  this.matrixFilter = feColorMatrix;
  if (filterManager.effectElements[2].p.v !== 100 || filterManager.effectElements[2].p.k) {
    var feMerge = createNS('feMerge');
    filter.appendChild(feMerge);
    var feMergeNode;
    feMergeNode = createNS('feMergeNode');
    feMergeNode.setAttribute('in', 'SourceGraphic');
    feMerge.appendChild(feMergeNode);
    feMergeNode = createNS('feMergeNode');
    feMergeNode.setAttribute('in', 'f2');
    feMerge.appendChild(feMergeNode);
  }
}

SVGTintFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var colorBlack = this.filterManager.effectElements[0].p.v;
    var colorWhite = this.filterManager.effectElements[1].p.v;
    var opacity = this.filterManager.effectElements[2].p.v / 100;
    this.matrixFilter.setAttribute('values', (colorWhite[0] - colorBlack[0]) + ' 0 0 0 ' + colorBlack[0] + ' ' + (colorWhite[1] - colorBlack[1]) + ' 0 0 0 ' + colorBlack[1] + ' ' + (colorWhite[2] - colorBlack[2]) + ' 0 0 0 ' + colorBlack[2] + ' 0 0 0 ' + opacity + ' 0');
  }
};

/* global createNS */

function SVGFillFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
  feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
  filter.appendChild(feColorMatrix);
  this.matrixFilter = feColorMatrix;
}
SVGFillFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var color = this.filterManager.effectElements[2].p.v;
    var opacity = this.filterManager.effectElements[6].p.v;
    this.matrixFilter.setAttribute('values', '0 0 0 0 ' + color[0] + ' 0 0 0 0 ' + color[1] + ' 0 0 0 0 ' + color[2] + ' 0 0 0 ' + opacity + ' 0');
  }
};

/* global createNS */

function SVGGaussianBlurEffect(filter, filterManager) {
  // Outset the filter region by 100% on all sides to accommodate blur expansion.
  filter.setAttribute('x', '-100%');
  filter.setAttribute('y', '-100%');
  filter.setAttribute('width', '300%');
  filter.setAttribute('height', '300%');

  this.filterManager = filterManager;
  var feGaussianBlur = createNS('feGaussianBlur');
  filter.appendChild(feGaussianBlur);
  this.feGaussianBlur = feGaussianBlur;
}

SVGGaussianBlurEffect.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    // Empirical value, matching AE's blur appearance.
    var kBlurrinessToSigma = 0.3;
    var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma;

    // Dimensions mapping:
    //
    //   1 -> horizontal & vertical
    //   2 -> horizontal only
    //   3 -> vertical only
    //
    var dimensions = this.filterManager.effectElements[1].p.v;
    var sigmaX = (dimensions == 3) ? 0 : sigma; // eslint-disable-line eqeqeq
    var sigmaY = (dimensions == 2) ? 0 : sigma; // eslint-disable-line eqeqeq

    this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + ' ' + sigmaY);

    // Repeat edges mapping:
    //
    //   0 -> off -> duplicate
    //   1 -> on  -> wrap
    var edgeMode = (this.filterManager.effectElements[2].p.v == 1) ? 'wrap' : 'duplicate'; // eslint-disable-line eqeqeq
    this.feGaussianBlur.setAttribute('edgeMode', edgeMode);
  }
};

/* global createNS, createElementID, locationHref, bmFloor */

function SVGStrokeEffect(elem, filterManager) {
  this.initialized = false;
  this.filterManager = filterManager;
  this.elem = elem;
  this.paths = [];
}

SVGStrokeEffect.prototype.initialize = function () {
  var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
  var path;
  var groupPath;
  var i;
  var len;
  if (this.filterManager.effectElements[1].p.v === 1) {
    len = this.elem.maskManager.masksProperties.length;
    i = 0;
  } else {
    i = this.filterManager.effectElements[0].p.v - 1;
    len = i + 1;
  }
  groupPath = createNS('g');
  groupPath.setAttribute('fill', 'none');
  groupPath.setAttribute('stroke-linecap', 'round');
  groupPath.setAttribute('stroke-dashoffset', 1);
  for (i; i < len; i += 1) {
    path = createNS('path');
    groupPath.appendChild(path);
    this.paths.push({ p: path, m: i });
  }
  if (this.filterManager.effectElements[10].p.v === 3) {
    var mask = createNS('mask');
    var id = createElementID();
    mask.setAttribute('id', id);
    mask.setAttribute('mask-type', 'alpha');
    mask.appendChild(groupPath);
    this.elem.globalData.defs.appendChild(mask);
    var g = createNS('g');
    g.setAttribute('mask', 'url(' + locationHref + '#' + id + ')');
    while (elemChildren[0]) {
      g.appendChild(elemChildren[0]);
    }
    this.elem.layerElement.appendChild(g);
    this.masker = mask;
    groupPath.setAttribute('stroke', '#fff');
  } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
    if (this.filterManager.effectElements[10].p.v === 2) {
      elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      while (elemChildren.length) {
        this.elem.layerElement.removeChild(elemChildren[0]);
      }
    }
    this.elem.layerElement.appendChild(groupPath);
    this.elem.layerElement.removeAttribute('mask');
    groupPath.setAttribute('stroke', '#fff');
  }
  this.initialized = true;
  this.pathMasker = groupPath;
};

SVGStrokeEffect.prototype.renderFrame = function (forceRender) {
  if (!this.initialized) {
    this.initialize();
  }
  var i;
  var len = this.paths.length;
  var mask;
  var path;
  for (i = 0; i < len; i += 1) {
    if (this.paths[i].m !== -1) {
      mask = this.elem.maskManager.viewData[this.paths[i].m];
      path = this.paths[i].p;
      if (forceRender || this.filterManager._mdf || mask.prop._mdf) {
        path.setAttribute('d', mask.lastPath);
      }
      if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf) {
        var dasharrayValue;
        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
          var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
          var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
          var l = path.getTotalLength();
          dasharrayValue = '0 0 0 ' + l * s + ' ';
          var lineLength = l * (e - s);
          var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          var units = Math.floor(lineLength / segment);
          var j;
          for (j = 0; j < units; j += 1) {
            dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
          }
          dasharrayValue += '0 ' + l * 10 + ' 0 0';
        } else {
          dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
        }
        path.setAttribute('stroke-dasharray', dasharrayValue);
      }
    }
  }
  if (forceRender || this.filterManager.effectElements[4].p._mdf) {
    this.pathMasker.setAttribute('stroke-width', this.filterManager.effectElements[4].p.v * 2);
  }

  if (forceRender || this.filterManager.effectElements[6].p._mdf) {
    this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v);
  }
  if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
    if (forceRender || this.filterManager.effectElements[3].p._mdf) {
      var color = this.filterManager.effectElements[3].p.v;
      this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(color[0] * 255) + ',' + bmFloor(color[1] * 255) + ',' + bmFloor(color[2] * 255) + ')');
    }
  }
};

/* global createNS */

function SVGTritoneFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
  feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
  feColorMatrix.setAttribute('result', 'f1');
  filter.appendChild(feColorMatrix);
  var feComponentTransfer = createNS('feComponentTransfer');
  feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
  filter.appendChild(feComponentTransfer);
  this.matrixFilter = feComponentTransfer;
  var feFuncR = createNS('feFuncR');
  feFuncR.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFuncR);
  this.feFuncR = feFuncR;
  var feFuncG = createNS('feFuncG');
  feFuncG.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFuncG);
  this.feFuncG = feFuncG;
  var feFuncB = createNS('feFuncB');
  feFuncB.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFuncB);
  this.feFuncB = feFuncB;
}

SVGTritoneFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var color1 = this.filterManager.effectElements[0].p.v;
    var color2 = this.filterManager.effectElements[1].p.v;
    var color3 = this.filterManager.effectElements[2].p.v;
    var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
    var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
    var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
    this.feFuncR.setAttribute('tableValues', tableR);
    this.feFuncG.setAttribute('tableValues', tableG);
    this.feFuncB.setAttribute('tableValues', tableB);
    // var opacity = this.filterManager.effectElements[2].p.v/100;
    // this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
  }
};

/* global createNS */

function SVGProLevelsFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var effectElements = this.filterManager.effectElements;
  var feComponentTransfer = createNS('feComponentTransfer');

  if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
    this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
  }
  if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
    this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
  }
  if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
    this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
  }
  if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
    this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
  }

  if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    filter.appendChild(feComponentTransfer);
    feComponentTransfer = createNS('feComponentTransfer');
  }

  if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    filter.appendChild(feComponentTransfer);
    this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
    this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
    this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
  }
}

SVGProLevelsFilter.prototype.createFeFunc = function (type, feComponentTransfer) {
  var feFunc = createNS(type);
  feFunc.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFunc);
  return feFunc;
};

SVGProLevelsFilter.prototype.getTableValue = function (inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
  var cnt = 0;
  var segments = 256;
  var perc;
  var min = Math.min(inputBlack, inputWhite);
  var max = Math.max(inputBlack, inputWhite);
  var table = Array.call(null, { length: segments });
  var colorValue;
  var pos = 0;
  var outputDelta = outputWhite - outputBlack;
  var inputDelta = inputWhite - inputBlack;
  while (cnt <= 256) {
    perc = cnt / 256;
    if (perc <= min) {
      colorValue = inputDelta < 0 ? outputWhite : outputBlack;
    } else if (perc >= max) {
      colorValue = inputDelta < 0 ? outputBlack : outputWhite;
    } else {
      colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
    }
    table[pos] = colorValue;
    pos += 1;
    cnt += 256 / (segments - 1);
  }
  return table.join(' ');
};

SVGProLevelsFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var val;
    var effectElements = this.filterManager.effectElements;
    if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
      val = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
      this.feFuncRComposed.setAttribute('tableValues', val);
      this.feFuncGComposed.setAttribute('tableValues', val);
      this.feFuncBComposed.setAttribute('tableValues', val);
    }

    if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
      val = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
      this.feFuncR.setAttribute('tableValues', val);
    }

    if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
      val = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
      this.feFuncG.setAttribute('tableValues', val);
    }

    if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
      val = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
      this.feFuncB.setAttribute('tableValues', val);
    }

    if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
      val = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
      this.feFuncA.setAttribute('tableValues', val);
    }
  }
};

/* global createNS, rgbToHex, degToRads */

function SVGDropShadowEffect(filter, filterManager) {
  var filterSize = filterManager.container.globalData.renderConfig.filterSize;
  filter.setAttribute('x', filterSize.x);
  filter.setAttribute('y', filterSize.y);
  filter.setAttribute('width', filterSize.width);
  filter.setAttribute('height', filterSize.height);
  this.filterManager = filterManager;

  var feGaussianBlur = createNS('feGaussianBlur');
  feGaussianBlur.setAttribute('in', 'SourceAlpha');
  feGaussianBlur.setAttribute('result', 'drop_shadow_1');
  feGaussianBlur.setAttribute('stdDeviation', '0');
  this.feGaussianBlur = feGaussianBlur;
  filter.appendChild(feGaussianBlur);

  var feOffset = createNS('feOffset');
  feOffset.setAttribute('dx', '25');
  feOffset.setAttribute('dy', '0');
  feOffset.setAttribute('in', 'drop_shadow_1');
  feOffset.setAttribute('result', 'drop_shadow_2');
  this.feOffset = feOffset;
  filter.appendChild(feOffset);
  var feFlood = createNS('feFlood');
  feFlood.setAttribute('flood-color', '#00ff00');
  feFlood.setAttribute('flood-opacity', '1');
  feFlood.setAttribute('result', 'drop_shadow_3');
  this.feFlood = feFlood;
  filter.appendChild(feFlood);

  var feComposite = createNS('feComposite');
  feComposite.setAttribute('in', 'drop_shadow_3');
  feComposite.setAttribute('in2', 'drop_shadow_2');
  feComposite.setAttribute('operator', 'in');
  feComposite.setAttribute('result', 'drop_shadow_4');
  filter.appendChild(feComposite);

  var feMerge = createNS('feMerge');
  filter.appendChild(feMerge);
  var feMergeNode;
  feMergeNode = createNS('feMergeNode');
  feMerge.appendChild(feMergeNode);
  feMergeNode = createNS('feMergeNode');
  feMergeNode.setAttribute('in', 'SourceGraphic');
  this.feMergeNode = feMergeNode;
  this.feMerge = feMerge;
  this.originalNodeAdded = false;
  feMerge.appendChild(feMergeNode);
}

SVGDropShadowEffect.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    if (forceRender || this.filterManager.effectElements[4].p._mdf) {
      this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
    }
    if (forceRender || this.filterManager.effectElements[0].p._mdf) {
      var col = this.filterManager.effectElements[0].p.v;
      this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
    }
    if (forceRender || this.filterManager.effectElements[1].p._mdf) {
      this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255);
    }
    if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
      var distance = this.filterManager.effectElements[3].p.v;
      var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
      var x = distance * Math.cos(angle);
      var y = distance * Math.sin(angle);
      this.feOffset.setAttribute('dx', x);
      this.feOffset.setAttribute('dy', y);
    }
    /* if(forceRender || this.filterManager.effectElements[5].p._mdf){
            if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
                this.feMerge.removeChild(this.feMergeNode);
                this.originalNodeAdded = false;
            } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
                this.feMerge.appendChild(this.feMergeNode);
                this.originalNodeAdded = true;
            }
        } */
  }
};

/* global createElementID, createNS */

var _svgMatteSymbols = [];

function SVGMatte3Effect(filterElem, filterManager, elem) {
  this.initialized = false;
  this.filterManager = filterManager;
  this.filterElem = filterElem;
  this.elem = elem;
  elem.matteElement = createNS('g');
  elem.matteElement.appendChild(elem.layerElement);
  elem.matteElement.appendChild(elem.transformedElement);
  elem.baseElement = elem.matteElement;
}

SVGMatte3Effect.prototype.findSymbol = function (mask) {
  var i = 0;
  var len = _svgMatteSymbols.length;
  while (i < len) {
    if (_svgMatteSymbols[i] === mask) {
      return _svgMatteSymbols[i];
    }
    i += 1;
  }
  return null;
};

SVGMatte3Effect.prototype.replaceInParent = function (mask, symbolId) {
  var parentNode = mask.layerElement.parentNode;
  if (!parentNode) {
    return;
  }
  var children = parentNode.children;
  var i = 0;
  var len = children.length;
  while (i < len) {
    if (children[i] === mask.layerElement) {
      break;
    }
    i += 1;
  }
  var nextChild;
  if (i <= len - 2) {
    nextChild = children[i + 1];
  }
  var useElem = createNS('use');
  useElem.setAttribute('href', '#' + symbolId);
  if (nextChild) {
    parentNode.insertBefore(useElem, nextChild);
  } else {
    parentNode.appendChild(useElem);
  }
};

SVGMatte3Effect.prototype.setElementAsMask = function (elem, mask) {
  if (!this.findSymbol(mask)) {
    var symbolId = createElementID();
    var masker = createNS('mask');
    masker.setAttribute('id', mask.layerId);
    masker.setAttribute('mask-type', 'alpha');
    _svgMatteSymbols.push(mask);
    var defs = elem.globalData.defs;
    defs.appendChild(masker);
    var symbol = createNS('symbol');
    symbol.setAttribute('id', symbolId);
    this.replaceInParent(mask, symbolId);
    symbol.appendChild(mask.layerElement);
    defs.appendChild(symbol);
    var useElem = createNS('use');
    useElem.setAttribute('href', '#' + symbolId);
    masker.appendChild(useElem);
    mask.data.hd = false;
    mask.show();
  }
  elem.setMatte(mask.layerId);
};

SVGMatte3Effect.prototype.initialize = function () {
  var ind = this.filterManager.effectElements[0].p.v;
  var elements = this.elem.comp.elements;
  var i = 0;
  var len = elements.length;
  while (i < len) {
    if (elements[i] && elements[i].data.ind === ind) {
      this.setElementAsMask(this.elem, elements[i]);
    }
    i += 1;
  }
  this.initialized = true;
};

SVGMatte3Effect.prototype.renderFrame = function () {
  if (!this.initialized) {
    this.initialize();
  }
};

/* global createElementID, filtersFactory, SVGTintFilter, SVGFillFilter, SVGStrokeEffect, SVGTritoneFilter,
SVGProLevelsFilter, SVGDropShadowEffect, SVGMatte3Effect, SVGGaussianBlurEffect, locationHref */

function SVGEffects(elem) {
  var i;
  var len = elem.data.ef ? elem.data.ef.length : 0;
  var filId = createElementID();
  var fil = filtersFactory.createFilter(filId, true);
  var count = 0;
  this.filters = [];
  var filterManager;
  for (i = 0; i < len; i += 1) {
    filterManager = null;
    if (elem.data.ef[i].ty === 20) {
      count += 1;
      filterManager = new SVGTintFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 21) {
      count += 1;
      filterManager = new SVGFillFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 22) {
      filterManager = new SVGStrokeEffect(elem, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 23) {
      count += 1;
      filterManager = new SVGTritoneFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 24) {
      count += 1;
      filterManager = new SVGProLevelsFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 25) {
      count += 1;
      filterManager = new SVGDropShadowEffect(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 28) {
      // count += 1;
      filterManager = new SVGMatte3Effect(fil, elem.effectsManager.effectElements[i], elem);
    } else if (elem.data.ef[i].ty === 29) {
      count += 1;
      filterManager = new SVGGaussianBlurEffect(fil, elem.effectsManager.effectElements[i]);
    }
    if (filterManager) {
      this.filters.push(filterManager);
    }
  }
  if (count) {
    elem.globalData.defs.appendChild(fil);
    elem.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
  }
  if (this.filters.length) {
    elem.addRenderableComponent(this);
  }
}

SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
  var i;
  var len = this.filters.length;
  for (i = 0; i < len; i += 1) {
    this.filters[i].renderFrame(_isFirstFrame);
  }
};

/* global Matrix, createTypedArray */

function CVContextData() {
  this.saved = [];
  this.cArrPos = 0;
  this.cTr = new Matrix();
  this.cO = 1;
  var i;
  var len = 15;
  this.savedOp = createTypedArray('float32', len);
  for (i = 0; i < len; i += 1) {
    this.saved[i] = createTypedArray('float32', 16);
  }
  this._length = len;
}

CVContextData.prototype.duplicate = function () {
  var newLength = this._length * 2;
  var currentSavedOp = this.savedOp;
  this.savedOp = createTypedArray('float32', newLength);
  this.savedOp.set(currentSavedOp);
  var i = 0;
  for (i = this._length; i < newLength; i += 1) {
    this.saved[i] = createTypedArray('float32', 16);
  }
  this._length = newLength;
};

CVContextData.prototype.reset = function () {
  this.cArrPos = 0;
  this.cTr.reset();
  this.cO = 1;
};

/* global CVEffects, getBlendMode, CVMaskElement, Matrix */

function CVBaseElement() {
}

CVBaseElement.prototype = {
  createElements: function () {},
  initRendererElement: function () {},
  createContainerElements: function () {
    this.canvasContext = this.globalData.canvasContext;
    this.renderableEffectsManager = new CVEffects(this);
  },
  createContent: function () {},
  setBlendMode: function () {
    var globalData = this.globalData;
    if (globalData.blendMode !== this.data.bm) {
      globalData.blendMode = this.data.bm;
      var blendModeValue = getBlendMode(this.data.bm);
      globalData.canvasContext.globalCompositeOperation = blendModeValue;
    }
  },
  createRenderableComponents: function () {
    this.maskManager = new CVMaskElement(this.data, this);
  },
  hideElement: function () {
    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
      this.hidden = true;
    }
  },
  showElement: function () {
    if (this.isInRange && !this.isTransparent) {
      this.hidden = false;
      this._isFirstFrame = true;
      this.maskManager._isFirstFrame = true;
    }
  },
  renderFrame: function () {
    if (this.hidden || this.data.hd) {
      return;
    }
    this.renderTransform();
    this.renderRenderable();
    this.setBlendMode();
    var forceRealStack = this.data.ty === 0;
    this.globalData.renderer.save(forceRealStack);
    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
    this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);
    this.renderInnerContent();
    this.globalData.renderer.restore(forceRealStack);
    if (this.maskManager.hasMasks) {
      this.globalData.renderer.restore(true);
    }
    if (this._isFirstFrame) {
      this._isFirstFrame = false;
    }
  },
  destroy: function () {
    this.canvasContext = null;
    this.data = null;
    this.globalData = null;
    this.maskManager.destroy();
  },
  mHelper: new Matrix(),
};
CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement,HierarchyElement, FrameElement,
RenderableElement, SVGShapeElement, IImageElement, createTag */

function CVImageElement(data, globalData, comp) {
  this.assetData = globalData.getAssetData(data.refId);
  this.img = globalData.imageLoader.getAsset(this.assetData);
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);

CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVImageElement.prototype.createContent = function () {
  if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
    var canvas = createTag('canvas');
    canvas.width = this.assetData.w;
    canvas.height = this.assetData.h;
    var ctx = canvas.getContext('2d');

    var imgW = this.img.width;
    var imgH = this.img.height;
    var imgRel = imgW / imgH;
    var canvasRel = this.assetData.w / this.assetData.h;
    var widthCrop;
    var heightCrop;
    var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
    if ((imgRel > canvasRel && par === 'xMidYMid slice') || (imgRel < canvasRel && par !== 'xMidYMid slice')) {
      heightCrop = imgH;
      widthCrop = heightCrop * canvasRel;
    } else {
      widthCrop = imgW;
      heightCrop = widthCrop / canvasRel;
    }
    ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
    this.img = canvas;
  }
};

CVImageElement.prototype.renderInnerContent = function () {
  this.canvasContext.drawImage(this.img, 0, 0);
};

CVImageElement.prototype.destroy = function () {
  this.img = null;
};

/* global createSizedArray, PropertyFactory, extendPrototype, CanvasRenderer, ICompElement, CVBaseElement */

function CVCompElement(data, globalData, comp) {
  this.completeLayers = false;
  this.layers = data.layers;
  this.pendingElements = [];
  this.elements = createSizedArray(this.layers.length);
  this.initElement(data, globalData, comp);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement);

CVCompElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(this.data.w, 0);
  ctx.lineTo(this.data.w, this.data.h);
  ctx.lineTo(0, this.data.h);
  ctx.lineTo(0, 0);
  ctx.clip();
  var i;
  var len = this.layers.length;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].renderFrame();
    }
  }
};

CVCompElement.prototype.destroy = function () {
  var i;
  var len = this.layers.length;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.layers = null;
  this.elements = null;
};

/* global createSizedArray, ShapePropertyFactory, MaskElement */

function CVMaskElement(data, element) {
  this.data = data;
  this.element = element;
  this.masksProperties = this.data.masksProperties || [];
  this.viewData = createSizedArray(this.masksProperties.length);
  var i;
  var len = this.masksProperties.length;
  var hasMasks = false;
  for (i = 0; i < len; i += 1) {
    if (this.masksProperties[i].mode !== 'n') {
      hasMasks = true;
    }
    this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
  }
  this.hasMasks = hasMasks;
  if (hasMasks) {
    this.element.addRenderableComponent(this);
  }
}

CVMaskElement.prototype.renderFrame = function () {
  if (!this.hasMasks) {
    return;
  }
  var transform = this.element.finalTransform.mat;
  var ctx = this.element.canvasContext;
  var i;
  var len = this.masksProperties.length;
  var pt;
  var pts;
  var data;
  ctx.beginPath();
  for (i = 0; i < len; i += 1) {
    if (this.masksProperties[i].mode !== 'n') {
      if (this.masksProperties[i].inv) {
        ctx.moveTo(0, 0);
        ctx.lineTo(this.element.globalData.compSize.w, 0);
        ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
        ctx.lineTo(0, this.element.globalData.compSize.h);
        ctx.lineTo(0, 0);
      }
      data = this.viewData[i].v;
      pt = transform.applyToPointArray(data.v[0][0], data.v[0][1], 0);
      ctx.moveTo(pt[0], pt[1]);
      var j;
      var jLen = data._length;
      for (j = 1; j < jLen; j += 1) {
        pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
        ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
      }
      pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
      ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
    }
  }
  this.element.globalData.renderer.save(true);
  ctx.clip();
};

CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

CVMaskElement.prototype.destroy = function () {
  this.element = null;
};

/* global ShapeTransformManager, extendPrototype, BaseElement, TransformElement, CVBaseElement, IShapeElement,
HierarchyElement, FrameElement, RenderableElement, RenderableDOMElement, PropertyFactory, degToRads, GradientProperty,
DashProperty, TransformPropertyFactory, CVShapeData, ShapeModifiers, bmFloor, lineCapEnum, lineJoinEnum */

function CVShapeElement(data, globalData, comp) {
  this.shapes = [];
  this.shapesData = data.shapes;
  this.stylesList = [];
  this.itemsData = [];
  this.prevViewData = [];
  this.shapeModifiers = [];
  this.processedElements = [];
  this.transformsManager = new ShapeTransformManager();
  this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);

CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;

CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false };

CVShapeElement.prototype.dashResetter = [];

CVShapeElement.prototype.createContent = function () {
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
};

CVShapeElement.prototype.createStyleElement = function (data, transforms) {
  var styleElem = {
    data: data,
    type: data.ty,
    preTransforms: this.transformsManager.addTransformSequence(transforms),
    transforms: [],
    elements: [],
    closed: data.hd === true,
  };
  var elementData = {};
  if (data.ty === 'fl' || data.ty === 'st') {
    elementData.c = PropertyFactory.getProp(this, data.c, 1, 255, this);
    if (!elementData.c.k) {
      styleElem.co = 'rgb(' + bmFloor(elementData.c.v[0]) + ',' + bmFloor(elementData.c.v[1]) + ',' + bmFloor(elementData.c.v[2]) + ')';
    }
  } else if (data.ty === 'gf' || data.ty === 'gs') {
    elementData.s = PropertyFactory.getProp(this, data.s, 1, null, this);
    elementData.e = PropertyFactory.getProp(this, data.e, 1, null, this);
    elementData.h = PropertyFactory.getProp(this, data.h || { k: 0 }, 0, 0.01, this);
    elementData.a = PropertyFactory.getProp(this, data.a || { k: 0 }, 0, degToRads, this);
    elementData.g = new GradientProperty(this, data.g, this);
  }
  elementData.o = PropertyFactory.getProp(this, data.o, 0, 0.01, this);
  if (data.ty === 'st' || data.ty === 'gs') {
    styleElem.lc = lineCapEnum[data.lc || 2];
    styleElem.lj = lineJoinEnum[data.lj || 2];
    if (data.lj == 1) { // eslint-disable-line eqeqeq
      styleElem.ml = data.ml;
    }
    elementData.w = PropertyFactory.getProp(this, data.w, 0, null, this);
    if (!elementData.w.k) {
      styleElem.wi = elementData.w.v;
    }
    if (data.d) {
      var d = new DashProperty(this, data.d, 'canvas', this);
      elementData.d = d;
      if (!elementData.d.k) {
        styleElem.da = elementData.d.dashArray;
        styleElem.do = elementData.d.dashoffset[0];
      }
    }
  } else {
    styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
  }
  this.stylesList.push(styleElem);
  elementData.style = styleElem;
  return elementData;
};

CVShapeElement.prototype.createGroupElement = function () {
  var elementData = {
    it: [],
    prevViewData: [],
  };
  return elementData;
};

CVShapeElement.prototype.createTransformElement = function (data) {
  var elementData = {
    transform: {
      opacity: 1,
      _opMdf: false,
      key: this.transformsManager.getNewKey(),
      op: PropertyFactory.getProp(this, data.o, 0, 0.01, this),
      mProps: TransformPropertyFactory.getTransformProperty(this, data, this),
    },
  };
  return elementData;
};

CVShapeElement.prototype.createShapeElement = function (data) {
  var elementData = new CVShapeData(this, data, this.stylesList, this.transformsManager);

  this.shapes.push(elementData);
  this.addShapeToModifiers(elementData);
  return elementData;
};

CVShapeElement.prototype.reloadShapes = function () {
  this._isFirstFrame = true;
  var i;
  var len = this.itemsData.length;
  for (i = 0; i < len; i += 1) {
    this.prevViewData[i] = this.itemsData[i];
  }
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
  len = this.dynamicProperties.length;
  for (i = 0; i < len; i += 1) {
    this.dynamicProperties[i].getValue();
  }
  this.renderModifiers();
  this.transformsManager.processSequences(this._isFirstFrame);
};

CVShapeElement.prototype.addTransformToStyleList = function (transform) {
  var i;
  var len = this.stylesList.length;
  for (i = 0; i < len; i += 1) {
    if (!this.stylesList[i].closed) {
      this.stylesList[i].transforms.push(transform);
    }
  }
};

CVShapeElement.prototype.removeTransformFromStyleList = function () {
  var i;
  var len = this.stylesList.length;
  for (i = 0; i < len; i += 1) {
    if (!this.stylesList[i].closed) {
      this.stylesList[i].transforms.pop();
    }
  }
};

CVShapeElement.prototype.closeStyles = function (styles) {
  var i;
  var len = styles.length;
  for (i = 0; i < len; i += 1) {
    styles[i].closed = true;
  }
};

CVShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, shouldRender, transforms) {
  var i;
  var len = arr.length - 1;
  var j;
  var jLen;
  var ownStyles = [];
  var ownModifiers = [];
  var processedPos;
  var modifier;
  var currentTransform;
  var ownTransforms = [].concat(transforms);
  for (i = len; i >= 0; i -= 1) {
    processedPos = this.searchProcessedElement(arr[i]);
    if (!processedPos) {
      arr[i]._shouldRender = shouldRender;
    } else {
      itemsData[i] = prevViewData[processedPos - 1];
    }
    if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
      if (!processedPos) {
        itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
      } else {
        itemsData[i].style.closed = false;
      }

      ownStyles.push(itemsData[i].style);
    } else if (arr[i].ty === 'gr') {
      if (!processedPos) {
        itemsData[i] = this.createGroupElement(arr[i]);
      } else {
        jLen = itemsData[i].it.length;
        for (j = 0; j < jLen; j += 1) {
          itemsData[i].prevViewData[j] = itemsData[i].it[j];
        }
      }
      this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
    } else if (arr[i].ty === 'tr') {
      if (!processedPos) {
        currentTransform = this.createTransformElement(arr[i]);
        itemsData[i] = currentTransform;
      }
      ownTransforms.push(itemsData[i]);
      this.addTransformToStyleList(itemsData[i]);
    } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
      if (!processedPos) {
        itemsData[i] = this.createShapeElement(arr[i]);
      }
    } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'pb') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        modifier.init(this, arr[i]);
        itemsData[i] = modifier;
        this.shapeModifiers.push(modifier);
      } else {
        modifier = itemsData[i];
        modifier.closed = false;
      }
      ownModifiers.push(modifier);
    } else if (arr[i].ty === 'rp') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        itemsData[i] = modifier;
        modifier.init(this, arr, i, itemsData);
        this.shapeModifiers.push(modifier);
        shouldRender = false;
      } else {
        modifier = itemsData[i];
        modifier.closed = true;
      }
      ownModifiers.push(modifier);
    }
    this.addProcessedElement(arr[i], i + 1);
  }
  this.removeTransformFromStyleList();
  this.closeStyles(ownStyles);
  len = ownModifiers.length;
  for (i = 0; i < len; i += 1) {
    ownModifiers[i].closed = true;
  }
};

CVShapeElement.prototype.renderInnerContent = function () {
  this.transformHelper.opacity = 1;
  this.transformHelper._opMdf = false;
  this.renderModifiers();
  this.transformsManager.processSequences(this._isFirstFrame);
  this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
};

CVShapeElement.prototype.renderShapeTransform = function (parentTransform, groupTransform) {
  if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
    groupTransform.opacity = parentTransform.opacity;
    groupTransform.opacity *= groupTransform.op.v;
    groupTransform._opMdf = true;
  }
};

CVShapeElement.prototype.drawLayer = function () {
  var i;
  var len = this.stylesList.length;
  var j;
  var jLen;
  var k;
  var kLen;
  var elems;
  var nodes;
  var renderer = this.globalData.renderer;
  var ctx = this.globalData.canvasContext;
  var type;
  var currentStyle;
  for (i = 0; i < len; i += 1) {
    currentStyle = this.stylesList[i];
    type = currentStyle.type;

    // Skipping style when
    // Stroke width equals 0
    // style should not be rendered (extra unused repeaters)
    // current opacity equals 0
    // global opacity equals 0
    if (!(((type === 'st' || type === 'gs') && currentStyle.wi === 0) || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
      renderer.save();
      elems = currentStyle.elements;
      if (type === 'st' || type === 'gs') {
        ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;
        ctx.lineWidth = currentStyle.wi;
        ctx.lineCap = currentStyle.lc;
        ctx.lineJoin = currentStyle.lj;
        ctx.miterLimit = currentStyle.ml || 0;
      } else {
        ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
      }
      renderer.ctxOpacity(currentStyle.coOp);
      if (type !== 'st' && type !== 'gs') {
        ctx.beginPath();
      }
      renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
      jLen = elems.length;
      for (j = 0; j < jLen; j += 1) {
        if (type === 'st' || type === 'gs') {
          ctx.beginPath();
          if (currentStyle.da) {
            ctx.setLineDash(currentStyle.da);
            ctx.lineDashOffset = currentStyle.do;
          }
        }
        nodes = elems[j].trNodes;
        kLen = nodes.length;

        for (k = 0; k < kLen; k += 1) {
          if (nodes[k].t === 'm') {
            ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
          } else if (nodes[k].t === 'c') {
            ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
          } else {
            ctx.closePath();
          }
        }
        if (type === 'st' || type === 'gs') {
          ctx.stroke();
          if (currentStyle.da) {
            ctx.setLineDash(this.dashResetter);
          }
        }
      }
      if (type !== 'st' && type !== 'gs') {
        ctx.fill(currentStyle.r);
      }
      renderer.restore();
    }
  }
};

CVShapeElement.prototype.renderShape = function (parentTransform, items, data, isMain) {
  var i;
  var len = items.length - 1;
  var groupTransform;
  groupTransform = parentTransform;
  for (i = len; i >= 0; i -= 1) {
    if (items[i].ty === 'tr') {
      groupTransform = data[i].transform;
      this.renderShapeTransform(parentTransform, groupTransform);
    } else if (items[i].ty === 'sh' || items[i].ty === 'el' || items[i].ty === 'rc' || items[i].ty === 'sr') {
      this.renderPath(items[i], data[i]);
    } else if (items[i].ty === 'fl') {
      this.renderFill(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'st') {
      this.renderStroke(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'gf' || items[i].ty === 'gs') {
      this.renderGradientFill(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'gr') {
      this.renderShape(groupTransform, items[i].it, data[i].it);
    } else if (items[i].ty === 'tm') {
      //
    }
  }
  if (isMain) {
    this.drawLayer();
  }
};

CVShapeElement.prototype.renderStyledShape = function (styledShape, shape) {
  if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
    var shapeNodes = styledShape.trNodes;
    var paths = shape.paths;
    var i;
    var len;
    var j;
    var jLen = paths._length;
    shapeNodes.length = 0;
    var groupTransformMat = styledShape.transforms.finalTransform;
    for (j = 0; j < jLen; j += 1) {
      var pathNodes = paths.shapes[j];
      if (pathNodes && pathNodes.v) {
        len = pathNodes._length;
        for (i = 1; i < len; i += 1) {
          if (i === 1) {
            shapeNodes.push({
              t: 'm',
              p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0),
            });
          }
          shapeNodes.push({
            t: 'c',
            pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i]),
          });
        }
        if (len === 1) {
          shapeNodes.push({
            t: 'm',
            p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0),
          });
        }
        if (pathNodes.c && len) {
          shapeNodes.push({
            t: 'c',
            pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0]),
          });
          shapeNodes.push({
            t: 'z',
          });
        }
      }
    }
    styledShape.trNodes = shapeNodes;
  }
};

CVShapeElement.prototype.renderPath = function (pathData, itemData) {
  if (pathData.hd !== true && pathData._shouldRender) {
    var i;
    var len = itemData.styledShapes.length;
    for (i = 0; i < len; i += 1) {
      this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
    }
  }
};

CVShapeElement.prototype.renderFill = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;

  if (itemData.c._mdf || this._isFirstFrame) {
    styleElem.co = 'rgb('
        + bmFloor(itemData.c.v[0]) + ','
        + bmFloor(itemData.c.v[1]) + ','
        + bmFloor(itemData.c.v[2]) + ')';
  }
  if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
    styleElem.coOp = itemData.o.v * groupTransform.opacity;
  }
};

CVShapeElement.prototype.renderGradientFill = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;
  var grd;
  if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || (styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf))) {
    var ctx = this.globalData.canvasContext;
    var pt1 = itemData.s.v;
    var pt2 = itemData.e.v;
    if (styleData.t === 1) {
      grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
    } else {
      var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
      var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

      var percent = itemData.h.v;
      if (percent >= 1) {
        percent = 0.99;
      } else if (percent <= -1) {
        percent = -0.99;
      }
      var dist = rad * percent;
      var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
      var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
      grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
    }

    var i;
    var len = styleData.g.p;
    var cValues = itemData.g.c;
    var opacity = 1;

    for (i = 0; i < len; i += 1) {
      if (itemData.g._hasOpacity && itemData.g._collapsable) {
        opacity = itemData.g.o[i * 2 + 1];
      }
      grd.addColorStop(cValues[i * 4] / 100, 'rgba(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ',' + opacity + ')');
    }
    styleElem.grd = grd;
  }
  styleElem.coOp = itemData.o.v * groupTransform.opacity;
};

CVShapeElement.prototype.renderStroke = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;
  var d = itemData.d;
  if (d && (d._mdf || this._isFirstFrame)) {
    styleElem.da = d.dashArray;
    styleElem.do = d.dashoffset[0];
  }
  if (itemData.c._mdf || this._isFirstFrame) {
    styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
  }
  if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
    styleElem.coOp = itemData.o.v * groupTransform.opacity;
  }
  if (itemData.w._mdf || this._isFirstFrame) {
    styleElem.wi = itemData.w.v;
  }
};

CVShapeElement.prototype.destroy = function () {
  this.shapesData = null;
  this.globalData = null;
  this.canvasContext = null;
  this.stylesList.length = 0;
  this.itemsData.length = 0;
};

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement,
SVGShapeElement, IImageElement */

function CVSolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);

CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVSolidElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.fillStyle = this.data.sc;
  ctx.fillRect(0, 0, this.data.sw, this.data.sh);
  //
};

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement,
RenderableElement, ITextElement, createTag, createSizedArray */

function CVTextElement(data, globalData, comp) {
  this.textSpans = [];
  this.yOffset = 0;
  this.fillColorAnim = false;
  this.strokeColorAnim = false;
  this.strokeWidthAnim = false;
  this.stroke = false;
  this.fill = false;
  this.justifyOffset = 0;
  this.currentRender = null;
  this.renderType = 'canvas';
  this.values = {
    fill: 'rgba(0,0,0,0)',
    stroke: 'rgba(0,0,0,0)',
    sWidth: 0,
    fValue: '',
  };
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);

CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

CVTextElement.prototype.buildNewText = function () {
  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);

  var hasFill = false;
  if (documentData.fc) {
    hasFill = true;
    this.values.fill = this.buildColor(documentData.fc);
  } else {
    this.values.fill = 'rgba(0,0,0,0)';
  }
  this.fill = hasFill;
  var hasStroke = false;
  if (documentData.sc) {
    hasStroke = true;
    this.values.stroke = this.buildColor(documentData.sc);
    this.values.sWidth = documentData.sw;
  }
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  var i;
  var len;
  var letters = documentData.l;
  var matrixHelper = this.mHelper;
  this.stroke = hasStroke;
  this.values.fValue = documentData.finalSize + 'px ' + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
  len = documentData.finalText.length;
  // this.tHelper.font = this.values.fValue;
  var charData;
  var shapeData;
  var k;
  var kLen;
  var shapes;
  var j;
  var jLen;
  var pathNodes;
  var commands;
  var pathArr;
  var singleShape = this.data.singleShape;
  var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
  var xPos = 0;
  var yPos = 0;
  var firstLine = true;
  var cnt = 0;
  for (i = 0; i < len; i += 1) {
    charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
    shapeData = (charData && charData.data) || {};
    matrixHelper.reset();
    if (singleShape && letters[i].n) {
      xPos = -trackingOffset;
      yPos += documentData.yOffset;
      yPos += firstLine ? 1 : 0;
      firstLine = false;
    }

    shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
    jLen = shapes.length;
    matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
    if (singleShape) {
      this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
    }
    commands = createSizedArray(jLen);
    for (j = 0; j < jLen; j += 1) {
      kLen = shapes[j].ks.k.i.length;
      pathNodes = shapes[j].ks.k;
      pathArr = [];
      for (k = 1; k < kLen; k += 1) {
        if (k === 1) {
          pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
        }
        pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
      }
      pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
      commands[j] = pathArr;
    }
    if (singleShape) {
      xPos += letters[i].l;
      xPos += trackingOffset;
    }
    if (this.textSpans[cnt]) {
      this.textSpans[cnt].elem = commands;
    } else {
      this.textSpans[cnt] = { elem: commands };
    }
    cnt += 1;
  }
};

CVTextElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.font = this.values.fValue;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;

  if (!this.data.singleShape) {
    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
  }

  var i;
  var len;
  var j;
  var jLen;
  var k;
  var kLen;
  var renderedLetters = this.textAnimator.renderedLetters;

  var letters = this.textProperty.currentData.l;

  len = letters.length;
  var renderedLetter;
  var lastFill = null;
  var lastStroke = null;
  var lastStrokeW = null;
  var commands;
  var pathArr;
  for (i = 0; i < len; i += 1) {
    if (!letters[i].n) {
      renderedLetter = renderedLetters[i];
      if (renderedLetter) {
        this.globalData.renderer.save();
        this.globalData.renderer.ctxTransform(renderedLetter.p);
        this.globalData.renderer.ctxOpacity(renderedLetter.o);
      }
      if (this.fill) {
        if (renderedLetter && renderedLetter.fc) {
          if (lastFill !== renderedLetter.fc) {
            lastFill = renderedLetter.fc;
            ctx.fillStyle = renderedLetter.fc;
          }
        } else if (lastFill !== this.values.fill) {
          lastFill = this.values.fill;
          ctx.fillStyle = this.values.fill;
        }
        commands = this.textSpans[i].elem;
        jLen = commands.length;
        this.globalData.canvasContext.beginPath();
        for (j = 0; j < jLen; j += 1) {
          pathArr = commands[j];
          kLen = pathArr.length;
          this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
          for (k = 2; k < kLen; k += 6) {
            this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
          }
        }
        this.globalData.canvasContext.closePath();
        this.globalData.canvasContext.fill();
        /// ctx.fillText(this.textSpans[i].val,0,0);
      }
      if (this.stroke) {
        if (renderedLetter && renderedLetter.sw) {
          if (lastStrokeW !== renderedLetter.sw) {
            lastStrokeW = renderedLetter.sw;
            ctx.lineWidth = renderedLetter.sw;
          }
        } else if (lastStrokeW !== this.values.sWidth) {
          lastStrokeW = this.values.sWidth;
          ctx.lineWidth = this.values.sWidth;
        }
        if (renderedLetter && renderedLetter.sc) {
          if (lastStroke !== renderedLetter.sc) {
            lastStroke = renderedLetter.sc;
            ctx.strokeStyle = renderedLetter.sc;
          }
        } else if (lastStroke !== this.values.stroke) {
          lastStroke = this.values.stroke;
          ctx.strokeStyle = this.values.stroke;
        }
        commands = this.textSpans[i].elem;
        jLen = commands.length;
        this.globalData.canvasContext.beginPath();
        for (j = 0; j < jLen; j += 1) {
          pathArr = commands[j];
          kLen = pathArr.length;
          this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
          for (k = 2; k < kLen; k += 6) {
            this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
          }
        }
        this.globalData.canvasContext.closePath();
        this.globalData.canvasContext.stroke();
        /// ctx.strokeText(letters[i].val,0,0);
      }
      if (renderedLetter) {
        this.globalData.renderer.restore();
      }
    }
  }
};

function CVEffects() {

}
CVEffects.prototype.renderFrame = function () {};

/* global createTag, createNS, styleDiv, CVEffects, MaskElement, SVGBaseElement, HybridRenderer */

function HBaseElement() {}
HBaseElement.prototype = {
  checkBlendMode: function () {},
  initRendererElement: function () {
    this.baseElement = createTag(this.data.tg || 'div');
    if (this.data.hasMask) {
      this.svgElement = createNS('svg');
      this.layerElement = createNS('g');
      this.maskedElement = this.layerElement;
      this.svgElement.appendChild(this.layerElement);
      this.baseElement.appendChild(this.svgElement);
    } else {
      this.layerElement = this.baseElement;
    }
    styleDiv(this.baseElement);
  },
  createContainerElements: function () {
    this.renderableEffectsManager = new CVEffects(this);
    this.transformedElement = this.baseElement;
    this.maskedElement = this.layerElement;
    if (this.data.ln) {
      this.layerElement.setAttribute('id', this.data.ln);
    }
    if (this.data.cl) {
      this.layerElement.setAttribute('class', this.data.cl);
    }
    if (this.data.bm !== 0) {
      this.setBlendMode();
    }
  },
  renderElement: function () {
    var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};
    if (this.finalTransform._matMdf) {
      var matrixValue = this.finalTransform.mat.toCSS();
      transformedElementStyle.transform = matrixValue;
      transformedElementStyle.webkitTransform = matrixValue;
    }
    if (this.finalTransform._opMdf) {
      transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
    }
  },
  renderFrame: function () {
    // If it is exported as hidden (data.hd === true) no need to render
    // If it is not visible no need to render
    if (this.data.hd || this.hidden) {
      return;
    }
    this.renderTransform();
    this.renderRenderable();
    this.renderElement();
    this.renderInnerContent();
    if (this._isFirstFrame) {
      this._isFirstFrame = false;
    }
  },
  destroy: function () {
    this.layerElement = null;
    this.transformedElement = null;
    if (this.matteElement) {
      this.matteElement = null;
    }
    if (this.maskManager) {
      this.maskManager.destroy();
      this.maskManager = null;
    }
  },
  createRenderableComponents: function () {
    this.maskManager = new MaskElement(this.data, this, this.globalData);
  },
  addEffects: function () {
  },
  setMatte: function () {},
};
HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, createNS, createTag */

function HSolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);

HSolidElement.prototype.createContent = function () {
  var rect;
  if (this.data.hasMask) {
    rect = createNS('rect');
    rect.setAttribute('width', this.data.sw);
    rect.setAttribute('height', this.data.sh);
    rect.setAttribute('fill', this.data.sc);
    this.svgElement.setAttribute('width', this.data.sw);
    this.svgElement.setAttribute('height', this.data.sh);
  } else {
    rect = createTag('div');
    rect.style.width = this.data.sw + 'px';
    rect.style.height = this.data.sh + 'px';
    rect.style.backgroundColor = this.data.sc;
  }
  this.layerElement.appendChild(rect);
};

/* global createSizedArray, PropertyFactory, extendPrototype, HybridRenderer, ICompElement, HBaseElement */

function HCompElement(data, globalData, comp) {
  this.layers = data.layers;
  this.supports3d = !data.hasMask;
  this.completeLayers = false;
  this.pendingElements = [];
  this.elements = this.layers ? createSizedArray(this.layers.length) : [];
  this.initElement(data, globalData, comp);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement);
HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

HCompElement.prototype.createContainerElements = function () {
  this._createBaseContainerElements();
  // divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
  if (this.data.hasMask) {
    this.svgElement.setAttribute('width', this.data.w);
    this.svgElement.setAttribute('height', this.data.h);
    this.transformedElement = this.baseElement;
  } else {
    this.transformedElement = this.layerElement;
  }
};

HCompElement.prototype.addTo3dContainer = function (elem, pos) {
  var j = 0;
  var nextElement;
  while (j < pos) {
    if (this.elements[j] && this.elements[j].getBaseElement) {
      nextElement = this.elements[j].getBaseElement();
    }
    j += 1;
  }
  if (nextElement) {
    this.layerElement.insertBefore(elem, nextElement);
  } else {
    this.layerElement.appendChild(elem);
  }
};

/* global createNS, extendPrototype, BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement,
HierarchyElement, FrameElement, RenderableElement, createNS, bmMin, bmSqrt, bmMin, bmMax, bmPow */

function HShapeElement(data, globalData, comp) {
  // List of drawable elements
  this.shapes = [];
  // Full shape data
  this.shapesData = data.shapes;
  // List of styles that will be applied to shapes
  this.stylesList = [];
  // List of modifiers that will be applied to shapes
  this.shapeModifiers = [];
  // List of items in shape tree
  this.itemsData = [];
  // List of items in previous shape tree
  this.processedElements = [];
  // List of animated components
  this.animatedContents = [];
  this.shapesContainer = createNS('g');
  this.initElement(data, globalData, comp);
  // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
  // List of elements that have been created
  this.prevViewData = [];
  this.currentBBox = {
    x: 999999,
    y: -999999,
    h: 0,
    w: 0,
  };
}
extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

HShapeElement.prototype.createContent = function () {
  var cont;
  this.baseElement.style.fontSize = 0;
  if (this.data.hasMask) {
    this.layerElement.appendChild(this.shapesContainer);
    cont = this.svgElement;
  } else {
    cont = createNS('svg');
    var size = this.comp.data ? this.comp.data : this.globalData.compSize;
    cont.setAttribute('width', size.w);
    cont.setAttribute('height', size.h);
    cont.appendChild(this.shapesContainer);
    this.layerElement.appendChild(cont);
  }

  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
  this.filterUniqueShapes();
  this.shapeCont = cont;
};

HShapeElement.prototype.getTransformedPoint = function (transformers, point) {
  var i;
  var len = transformers.length;
  for (i = 0; i < len; i += 1) {
    point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
  }
  return point;
};

HShapeElement.prototype.calculateShapeBoundingBox = function (item, boundingBox) {
  var shape = item.sh.v;
  var transformers = item.transformers;
  var i;
  var len = shape._length;
  var vPoint;
  var oPoint;
  var nextIPoint;
  var nextVPoint;
  if (len <= 1) {
    return;
  }
  for (i = 0; i < len - 1; i += 1) {
    vPoint = this.getTransformedPoint(transformers, shape.v[i]);
    oPoint = this.getTransformedPoint(transformers, shape.o[i]);
    nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
    nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
    this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
  }
  if (shape.c) {
    vPoint = this.getTransformedPoint(transformers, shape.v[i]);
    oPoint = this.getTransformedPoint(transformers, shape.o[i]);
    nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
    nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
    this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
  }
};

HShapeElement.prototype.checkBounds = function (vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
  this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
  var bounds = this.shapeBoundingBox;
  boundingBox.x = bmMin(bounds.left, boundingBox.x);
  boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
  boundingBox.y = bmMin(bounds.top, boundingBox.y);
  boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
};

HShapeElement.prototype.shapeBoundingBox = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

HShapeElement.prototype.tempBoundingBox = {
  x: 0,
  xMax: 0,
  y: 0,
  yMax: 0,
  width: 0,
  height: 0,
};

HShapeElement.prototype.getBoundsOfCurve = function (p0, p1, p2, p3) {
  var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];

  for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) { // eslint-disable-line no-plusplus
    b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
    a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
    c = 3 * p1[i] - 3 * p0[i];

    b |= 0; // eslint-disable-line no-bitwise
    a |= 0; // eslint-disable-line no-bitwise
    c |= 0; // eslint-disable-line no-bitwise

    if (a === 0 && b === 0) {
      //
    } else if (a === 0) {
      t = -c / b;

      if (t > 0 && t < 1) {
        bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
      }
    } else {
      b2ac = b * b - 4 * c * a;

      if (b2ac >= 0) {
        t1 = (-b + bmSqrt(b2ac)) / (2 * a);
        if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
        t2 = (-b - bmSqrt(b2ac)) / (2 * a);
        if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
      }
    }
  }

  this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
  this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
  this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
  this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
};

HShapeElement.prototype.calculateF = function (t, p0, p1, p2, p3, i) {
  return bmPow(1 - t, 3) * p0[i]
        + 3 * bmPow(1 - t, 2) * t * p1[i]
        + 3 * (1 - t) * bmPow(t, 2) * p2[i]
        + bmPow(t, 3) * p3[i];
};

HShapeElement.prototype.calculateBoundingBox = function (itemsData, boundingBox) {
  var i;
  var len = itemsData.length;
  for (i = 0; i < len; i += 1) {
    if (itemsData[i] && itemsData[i].sh) {
      this.calculateShapeBoundingBox(itemsData[i], boundingBox);
    } else if (itemsData[i] && itemsData[i].it) {
      this.calculateBoundingBox(itemsData[i].it, boundingBox);
    }
  }
};

HShapeElement.prototype.currentBoxContains = function (box) {
  return this.currentBBox.x <= box.x
    && this.currentBBox.y <= box.y
    && this.currentBBox.width + this.currentBBox.x >= box.x + box.width
    && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
};

HShapeElement.prototype.renderInnerContent = function () {
  this._renderShapeFrame();

  if (!this.hidden && (this._isFirstFrame || this._mdf)) {
    var tempBoundingBox = this.tempBoundingBox;
    var max = 999999;
    tempBoundingBox.x = max;
    tempBoundingBox.xMax = -max;
    tempBoundingBox.y = max;
    tempBoundingBox.yMax = -max;
    this.calculateBoundingBox(this.itemsData, tempBoundingBox);
    tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
    tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y;
    // var tempBoundingBox = this.shapeCont.getBBox();
    if (this.currentBoxContains(tempBoundingBox)) {
      return;
    }
    var changed = false;
    if (this.currentBBox.w !== tempBoundingBox.width) {
      this.currentBBox.w = tempBoundingBox.width;
      this.shapeCont.setAttribute('width', tempBoundingBox.width);
      changed = true;
    }
    if (this.currentBBox.h !== tempBoundingBox.height) {
      this.currentBBox.h = tempBoundingBox.height;
      this.shapeCont.setAttribute('height', tempBoundingBox.height);
      changed = true;
    }
    if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
      this.currentBBox.w = tempBoundingBox.width;
      this.currentBBox.h = tempBoundingBox.height;
      this.currentBBox.x = tempBoundingBox.x;
      this.currentBBox.y = tempBoundingBox.y;

      this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
      var shapeStyle = this.shapeCont.style;
      var shapeTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
      shapeStyle.transform = shapeTransform;
      shapeStyle.webkitTransform = shapeTransform;
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, ITextElement, createSizedArray, createTag, styleDiv, createNS, lineJoinEnum, lineCapEnum */

function HTextElement(data, globalData, comp) {
  this.textSpans = [];
  this.textPaths = [];
  this.currentBBox = {
    x: 999999,
    y: -999999,
    h: 0,
    w: 0,
  };
  this.renderType = 'svg';
  this.isMasked = false;
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);

HTextElement.prototype.createContent = function () {
  this.isMasked = this.checkMasks();
  if (this.isMasked) {
    this.renderType = 'svg';
    this.compW = this.comp.data.w;
    this.compH = this.comp.data.h;
    this.svgElement.setAttribute('width', this.compW);
    this.svgElement.setAttribute('height', this.compH);
    var g = createNS('g');
    this.maskedElement.appendChild(g);
    this.innerElem = g;
  } else {
    this.renderType = 'html';
    this.innerElem = this.layerElement;
  }

  this.checkParenting();
};

HTextElement.prototype.buildNewText = function () {
  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
  var innerElemStyle = this.innerElem.style;
  var textColor = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
  innerElemStyle.fill = textColor;
  innerElemStyle.color = textColor;
  if (documentData.sc) {
    innerElemStyle.stroke = this.buildColor(documentData.sc);
    innerElemStyle.strokeWidth = documentData.sw + 'px';
  }
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  if (!this.globalData.fontManager.chars) {
    innerElemStyle.fontSize = documentData.finalSize + 'px';
    innerElemStyle.lineHeight = documentData.finalSize + 'px';
    if (fontData.fClass) {
      this.innerElem.className = fontData.fClass;
    } else {
      innerElemStyle.fontFamily = fontData.fFamily;
      var fWeight = documentData.fWeight;
      var fStyle = documentData.fStyle;
      innerElemStyle.fontStyle = fStyle;
      innerElemStyle.fontWeight = fWeight;
    }
  }
  var i;
  var len;

  var letters = documentData.l;
  len = letters.length;
  var tSpan;
  var tParent;
  var tCont;
  var matrixHelper = this.mHelper;
  var shapes;
  var shapeStr = '';
  var cnt = 0;
  for (i = 0; i < len; i += 1) {
    if (this.globalData.fontManager.chars) {
      if (!this.textPaths[cnt]) {
        tSpan = createNS('path');
        tSpan.setAttribute('stroke-linecap', lineCapEnum[1]);
        tSpan.setAttribute('stroke-linejoin', lineJoinEnum[2]);
        tSpan.setAttribute('stroke-miterlimit', '4');
      } else {
        tSpan = this.textPaths[cnt];
      }
      if (!this.isMasked) {
        if (this.textSpans[cnt]) {
          tParent = this.textSpans[cnt];
          tCont = tParent.children[0];
        } else {
          tParent = createTag('div');
          tParent.style.lineHeight = 0;
          tCont = createNS('svg');
          tCont.appendChild(tSpan);
          styleDiv(tParent);
        }
      }
    } else if (!this.isMasked) {
      if (this.textSpans[cnt]) {
        tParent = this.textSpans[cnt];
        tSpan = this.textPaths[cnt];
      } else {
        tParent = createTag('span');
        styleDiv(tParent);
        tSpan = createTag('span');
        styleDiv(tSpan);
        tParent.appendChild(tSpan);
      }
    } else {
      tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
    }
    // tSpan.setAttribute('visibility', 'hidden');
    if (this.globalData.fontManager.chars) {
      var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
      var shapeData;
      if (charData) {
        shapeData = charData.data;
      } else {
        shapeData = null;
      }
      matrixHelper.reset();
      if (shapeData && shapeData.shapes) {
        shapes = shapeData.shapes[0].it;
        matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
        shapeStr = this.createPathShape(matrixHelper, shapes);
        tSpan.setAttribute('d', shapeStr);
      }
      if (!this.isMasked) {
        this.innerElem.appendChild(tParent);
        if (shapeData && shapeData.shapes) {
          // document.body.appendChild is needed to get exact measure of shape
          document.body.appendChild(tCont);
          var boundingBox = tCont.getBBox();
          tCont.setAttribute('width', boundingBox.width + 2);
          tCont.setAttribute('height', boundingBox.height + 2);
          tCont.setAttribute('viewBox', (boundingBox.x - 1) + ' ' + (boundingBox.y - 1) + ' ' + (boundingBox.width + 2) + ' ' + (boundingBox.height + 2));
          var tContStyle = tCont.style;
          var tContTranslation = 'translate(' + (boundingBox.x - 1) + 'px,' + (boundingBox.y - 1) + 'px)';
          tContStyle.transform = tContTranslation;
          tContStyle.webkitTransform = tContTranslation;

          letters[i].yOffset = boundingBox.y - 1;
        } else {
          tCont.setAttribute('width', 1);
          tCont.setAttribute('height', 1);
        }
        tParent.appendChild(tCont);
      } else {
        this.innerElem.appendChild(tSpan);
      }
    } else {
      tSpan.textContent = letters[i].val;
      tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
      if (!this.isMasked) {
        this.innerElem.appendChild(tParent);
        //
        var tStyle = tSpan.style;
        var tSpanTranslation = 'translate3d(0,' + -documentData.finalSize / 1.2 + 'px,0)';
        tStyle.transform = tSpanTranslation;
        tStyle.webkitTransform = tSpanTranslation;
      } else {
        this.innerElem.appendChild(tSpan);
      }
    }
    //
    if (!this.isMasked) {
      this.textSpans[cnt] = tParent;
    } else {
      this.textSpans[cnt] = tSpan;
    }
    this.textSpans[cnt].style.display = 'block';
    this.textPaths[cnt] = tSpan;
    cnt += 1;
  }
  while (cnt < this.textSpans.length) {
    this.textSpans[cnt].style.display = 'none';
    cnt += 1;
  }
};

HTextElement.prototype.renderInnerContent = function () {
  var svgStyle;
  if (this.data.singleShape) {
    if (!this._isFirstFrame && !this.lettersChangedFlag) {
      return;
    } if (this.isMasked && this.finalTransform._matMdf) {
      // Todo Benchmark if using this is better than getBBox
      this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
      svgStyle = this.svgElement.style;
      var translation = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
      svgStyle.transform = translation;
      svgStyle.webkitTransform = translation;
    }
  }

  this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
  if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
    return;
  }
  var i;
  var len;
  var count = 0;
  var renderedLetters = this.textAnimator.renderedLetters;

  var letters = this.textProperty.currentData.l;

  len = letters.length;
  var renderedLetter;
  var textSpan;
  var textPath;
  for (i = 0; i < len; i += 1) {
    if (letters[i].n) {
      count += 1;
    } else {
      textSpan = this.textSpans[i];
      textPath = this.textPaths[i];
      renderedLetter = renderedLetters[count];
      count += 1;
      if (renderedLetter._mdf.m) {
        if (!this.isMasked) {
          textSpan.style.webkitTransform = renderedLetter.m;
          textSpan.style.transform = renderedLetter.m;
        } else {
          textSpan.setAttribute('transform', renderedLetter.m);
        }
      }
      /// /textSpan.setAttribute('opacity',renderedLetter.o);
      textSpan.style.opacity = renderedLetter.o;
      if (renderedLetter.sw && renderedLetter._mdf.sw) {
        textPath.setAttribute('stroke-width', renderedLetter.sw);
      }
      if (renderedLetter.sc && renderedLetter._mdf.sc) {
        textPath.setAttribute('stroke', renderedLetter.sc);
      }
      if (renderedLetter.fc && renderedLetter._mdf.fc) {
        textPath.setAttribute('fill', renderedLetter.fc);
        textPath.style.color = renderedLetter.fc;
      }
    }
  }

  if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
    var boundingBox = this.innerElem.getBBox();

    if (this.currentBBox.w !== boundingBox.width) {
      this.currentBBox.w = boundingBox.width;
      this.svgElement.setAttribute('width', boundingBox.width);
    }
    if (this.currentBBox.h !== boundingBox.height) {
      this.currentBBox.h = boundingBox.height;
      this.svgElement.setAttribute('height', boundingBox.height);
    }

    var margin = 1;
    if (this.currentBBox.w !== (boundingBox.width + margin * 2) || this.currentBBox.h !== (boundingBox.height + margin * 2) || this.currentBBox.x !== (boundingBox.x - margin) || this.currentBBox.y !== (boundingBox.y - margin)) {
      this.currentBBox.w = boundingBox.width + margin * 2;
      this.currentBBox.h = boundingBox.height + margin * 2;
      this.currentBBox.x = boundingBox.x - margin;
      this.currentBBox.y = boundingBox.y - margin;

      this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
      svgStyle = this.svgElement.style;
      var svgTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
      svgStyle.transform = svgTransform;
      svgStyle.webkitTransform = svgTransform;
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement,
FrameElement, RenderableElement, createNS */

function HImageElement(data, globalData, comp) {
  this.assetData = globalData.getAssetData(data.refId);
  this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);

HImageElement.prototype.createContent = function () {
  var assetPath = this.globalData.getAssetsPath(this.assetData);
  var img = new Image();

  if (this.data.hasMask) {
    this.imageElem = createNS('image');
    this.imageElem.setAttribute('width', this.assetData.w + 'px');
    this.imageElem.setAttribute('height', this.assetData.h + 'px');
    this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
    this.layerElement.appendChild(this.imageElem);
    this.baseElement.setAttribute('width', this.assetData.w);
    this.baseElement.setAttribute('height', this.assetData.h);
  } else {
    this.layerElement.appendChild(img);
  }
  img.crossOrigin = 'anonymous';
  img.src = assetPath;
  if (this.data.ln) {
    this.baseElement.setAttribute('id', this.data.ln);
  }
};

/* global PropertyFactory, degToRads, Matrix, extendPrototype, BaseElement, FrameElement, HierarchyElement */

function HCameraElement(data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initHierarchy();
  var getProp = PropertyFactory.getProp;
  this.pe = getProp(this, data.pe, 0, 0, this);
  if (data.ks.p.s) {
    this.px = getProp(this, data.ks.p.x, 1, 0, this);
    this.py = getProp(this, data.ks.p.y, 1, 0, this);
    this.pz = getProp(this, data.ks.p.z, 1, 0, this);
  } else {
    this.p = getProp(this, data.ks.p, 1, 0, this);
  }
  if (data.ks.a) {
    this.a = getProp(this, data.ks.a, 1, 0, this);
  }
  if (data.ks.or.k.length && data.ks.or.k[0].to) {
    var i;
    var len = data.ks.or.k.length;
    for (i = 0; i < len; i += 1) {
      data.ks.or.k[i].to = null;
      data.ks.or.k[i].ti = null;
    }
  }
  this.or = getProp(this, data.ks.or, 1, degToRads, this);
  this.or.sh = true;
  this.rx = getProp(this, data.ks.rx, 0, degToRads, this);
  this.ry = getProp(this, data.ks.ry, 0, degToRads, this);
  this.rz = getProp(this, data.ks.rz, 0, degToRads, this);
  this.mat = new Matrix();
  this._prevMat = new Matrix();
  this._isFirstFrame = true;

  // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.
  this.finalTransform = {
    mProp: this,
  };
}
extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

HCameraElement.prototype.setup = function () {
  var i;
  var len = this.comp.threeDElements.length;
  var comp;
  var perspectiveStyle;
  var containerStyle;
  for (i = 0; i < len; i += 1) {
    // [perspectiveElem,container]
    comp = this.comp.threeDElements[i];
    if (comp.type === '3d') {
      perspectiveStyle = comp.perspectiveElem.style;
      containerStyle = comp.container.style;
      var perspective = this.pe.v + 'px';
      var origin = '0px 0px 0px';
      var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
      perspectiveStyle.perspective = perspective;
      perspectiveStyle.webkitPerspective = perspective;
      containerStyle.transformOrigin = origin;
      containerStyle.mozTransformOrigin = origin;
      containerStyle.webkitTransformOrigin = origin;
      perspectiveStyle.transform = matrix;
      perspectiveStyle.webkitTransform = matrix;
    }
  }
};

HCameraElement.prototype.createElements = function () {
};

HCameraElement.prototype.hide = function () {
};

HCameraElement.prototype.renderFrame = function () {
  var _mdf = this._isFirstFrame;
  var i;
  var len;
  if (this.hierarchy) {
    len = this.hierarchy.length;
    for (i = 0; i < len; i += 1) {
      _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
    }
  }
  if (_mdf || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
    this.mat.reset();

    if (this.hierarchy) {
      len = this.hierarchy.length - 1;
      for (i = len; i >= 0; i -= 1) {
        var mTransf = this.hierarchy[i].finalTransform.mProp;
        this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
        this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
        this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
        this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
        this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
      }
    }
    if (this.p) {
      this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
    } else {
      this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
    }
    if (this.a) {
      var diffVector;
      if (this.p) {
        diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
      } else {
        diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
      }
      var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2));
      // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
      var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
      var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
      var mRotationX = (Math.atan2(lookDir[1], lookLengthOnXZ));
      var mRotationY = (Math.atan2(lookDir[0], -lookDir[2]));
      this.mat.rotateY(mRotationY).rotateX(-mRotationX);
    }
    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
    this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
    this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
    this.mat.translate(0, 0, this.pe.v);

    var hasMatrixChanged = !this._prevMat.equals(this.mat);
    if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
      len = this.comp.threeDElements.length;
      var comp;
      var perspectiveStyle;
      var containerStyle;
      for (i = 0; i < len; i += 1) {
        comp = this.comp.threeDElements[i];
        if (comp.type === '3d') {
          if (hasMatrixChanged) {
            var matValue = this.mat.toCSS();
            containerStyle = comp.container.style;
            containerStyle.transform = matValue;
            containerStyle.webkitTransform = matValue;
          }
          if (this.pe._mdf) {
            perspectiveStyle = comp.perspectiveElem.style;
            perspectiveStyle.perspective = this.pe.v + 'px';
            perspectiveStyle.webkitPerspective = this.pe.v + 'px';
          }
        }
      }
      this.mat.clone(this._prevMat);
    }
  }
  this._isFirstFrame = false;
};

HCameraElement.prototype.prepareFrame = function (num) {
  this.prepareProperties(num, true);
};

HCameraElement.prototype.destroy = function () {
};
HCameraElement.prototype.getBaseElement = function () { return null; };

function HEffects() {
}
HEffects.prototype.renderFrame = function () {};

/* global createTag, AnimationItem */
/* exported animationManager */

var animationManager = (function () {
  var moduleOb = {};
  var registeredAnimations = [];
  var initTime = 0;
  var len = 0;
  var playingAnimationsNum = 0;
  var _stopped = true;
  var _isFrozen = false;

  function removeElement(ev) {
    var i = 0;
    var animItem = ev.target;
    while (i < len) {
      if (registeredAnimations[i].animation === animItem) {
        registeredAnimations.splice(i, 1);
        i -= 1;
        len -= 1;
        if (!animItem.isPaused) {
          subtractPlayingCount();
        }
      }
      i += 1;
    }
  }

  function registerAnimation(element, animationData) {
    if (!element) {
      return null;
    }
    var i = 0;
    while (i < len) {
      if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
        return registeredAnimations[i].animation;
      }
      i += 1;
    }
    var animItem = new AnimationItem();
    setupAnimation(animItem, element);
    animItem.setData(element, animationData);
    return animItem;
  }

  function getRegisteredAnimations() {
    var i;
    var lenAnims = registeredAnimations.length;
    var animations = [];
    for (i = 0; i < lenAnims; i += 1) {
      animations.push(registeredAnimations[i].animation);
    }
    return animations;
  }

  function addPlayingCount() {
    playingAnimationsNum += 1;
    activate();
  }

  function subtractPlayingCount() {
    playingAnimationsNum -= 1;
  }

  function setupAnimation(animItem, element) {
    animItem.addEventListener('destroy', removeElement);
    animItem.addEventListener('_active', addPlayingCount);
    animItem.addEventListener('_idle', subtractPlayingCount);
    registeredAnimations.push({ elem: element, animation: animItem });
    len += 1;
  }

  function loadAnimation(params) {
    var animItem = new AnimationItem();
    setupAnimation(animItem, null);
    animItem.setParams(params);
    return animItem;
  }

  function setSpeed(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setSpeed(val, animation);
    }
  }

  function setDirection(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setDirection(val, animation);
    }
  }

  function play(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.play(animation);
    }
  }
  function resume(nowTime) {
    var elapsedTime = nowTime - initTime;
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.advanceTime(elapsedTime);
    }
    initTime = nowTime;
    if (playingAnimationsNum && !_isFrozen) {
      window.requestAnimationFrame(resume);
    } else {
      _stopped = true;
    }
  }

  function first(nowTime) {
    initTime = nowTime;
    window.requestAnimationFrame(resume);
  }

  function pause(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.pause(animation);
    }
  }

  function goToAndStop(value, isFrame, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.goToAndStop(value, isFrame, animation);
    }
  }

  function stop(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.stop(animation);
    }
  }

  function togglePause(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.togglePause(animation);
    }
  }

  function destroy(animation) {
    var i;
    for (i = (len - 1); i >= 0; i -= 1) {
      registeredAnimations[i].animation.destroy(animation);
    }
  }

  function searchAnimations(animationData, standalone, renderer) {
    var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')),
      [].slice.call(document.getElementsByClassName('bodymovin')));
    var i;
    var lenAnims = animElements.length;
    for (i = 0; i < lenAnims; i += 1) {
      if (renderer) {
        animElements[i].setAttribute('data-bm-type', renderer);
      }
      registerAnimation(animElements[i], animationData);
    }
    if (standalone && lenAnims === 0) {
      if (!renderer) {
        renderer = 'svg';
      }
      var body = document.getElementsByTagName('body')[0];
      body.innerText = '';
      var div = createTag('div');
      div.style.width = '100%';
      div.style.height = '100%';
      div.setAttribute('data-bm-type', renderer);
      body.appendChild(div);
      registerAnimation(div, animationData);
    }
  }

  function resize() {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.resize();
    }
  }

  function activate() {
    if (!_isFrozen && playingAnimationsNum) {
      if (_stopped) {
        window.requestAnimationFrame(first);
        _stopped = false;
      }
    }
  }

  function freeze() {
    _isFrozen = true;
  }

  function unfreeze() {
    _isFrozen = false;
    activate();
  }

  function setVolume(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setVolume(val, animation);
    }
  }

  function mute(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.mute(animation);
    }
  }

  function unmute(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.unmute(animation);
    }
  }

  moduleOb.registerAnimation = registerAnimation;
  moduleOb.loadAnimation = loadAnimation;
  moduleOb.setSpeed = setSpeed;
  moduleOb.setDirection = setDirection;
  moduleOb.play = play;
  moduleOb.pause = pause;
  moduleOb.stop = stop;
  moduleOb.togglePause = togglePause;
  moduleOb.searchAnimations = searchAnimations;
  moduleOb.resize = resize;
  // moduleOb.start = start;
  moduleOb.goToAndStop = goToAndStop;
  moduleOb.destroy = destroy;
  moduleOb.freeze = freeze;
  moduleOb.unfreeze = unfreeze;
  moduleOb.setVolume = setVolume;
  moduleOb.mute = mute;
  moduleOb.unmute = unmute;
  moduleOb.getRegisteredAnimations = getRegisteredAnimations;
  return moduleOb;
}());

/* global createElementID, subframeEnabled, ProjectInterface, ImagePreloader, audioControllerFactory, extendPrototype, BaseEvent,
CanvasRenderer, SVGRenderer, HybridRenderer, assetLoader, dataManager, expressionsPlugin, BMEnterFrameEvent, BMCompleteLoopEvent,
BMCompleteEvent, BMSegmentStartEvent, BMDestroyEvent, BMEnterFrameEvent, BMCompleteLoopEvent, BMCompleteEvent, BMSegmentStartEvent,
BMDestroyEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent, markerParser */

var AnimationItem = function () {
  this._cbs = [];
  this.name = '';
  this.path = '';
  this.isLoaded = false;
  this.currentFrame = 0;
  this.currentRawFrame = 0;
  this.firstFrame = 0;
  this.totalFrames = 0;
  this.frameRate = 0;
  this.frameMult = 0;
  this.playSpeed = 1;
  this.playDirection = 1;
  this.playCount = 0;
  this.animationData = {};
  this.assets = [];
  this.isPaused = true;
  this.autoplay = false;
  this.loop = true;
  this.renderer = null;
  this.animationID = createElementID();
  this.assetsPath = '';
  this.timeCompleted = 0;
  this.segmentPos = 0;
  this.isSubframeEnabled = subframeEnabled;
  this.segments = [];
  this._idle = true;
  this._completedLoop = false;
  this.projectInterface = ProjectInterface();
  this.imagePreloader = new ImagePreloader();
  this.audioController = audioControllerFactory();
  this.markers = [];
};

extendPrototype([BaseEvent], AnimationItem);

AnimationItem.prototype.setParams = function (params) {
  if (params.wrapper || params.container) {
    this.wrapper = params.wrapper || params.container;
  }
  var animType = 'svg';
  if (params.animType) {
    animType = params.animType;
  } else if (params.renderer) {
    animType = params.renderer;
  }
  switch (animType) {
    case 'canvas':
      this.renderer = new CanvasRenderer(this, params.rendererSettings);
      break;
    case 'svg':
      this.renderer = new SVGRenderer(this, params.rendererSettings);
      break;
    default:
      this.renderer = new HybridRenderer(this, params.rendererSettings);
      break;
  }
  this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
  this.renderer.setProjectInterface(this.projectInterface);
  this.animType = animType;
  if (params.loop === ''
        || params.loop === null
        || params.loop === undefined
        || params.loop === true) {
    this.loop = true;
  } else if (params.loop === false) {
    this.loop = false;
  } else {
    this.loop = parseInt(params.loop, 10);
  }
  this.autoplay = 'autoplay' in params ? params.autoplay : true;
  this.name = params.name ? params.name : '';
  this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
  this.assetsPath = params.assetsPath;
  this.initialSegment = params.initialSegment;
  if (params.audioFactory) {
    this.audioController.setAudioFactory(params.audioFactory);
  }
  if (params.animationData) {
    this.configAnimation(params.animationData);
  } else if (params.path) {
    if (params.path.lastIndexOf('\\') !== -1) {
      this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
    } else {
      this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
    }
    this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
    this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));

    assetLoader.load(params.path, this.configAnimation.bind(this), function () {
      this.trigger('data_failed');
    }.bind(this));
  }
};

AnimationItem.prototype.setData = function (wrapper, animationData) {
  if (animationData) {
    if (typeof animationData !== 'object') {
      animationData = JSON.parse(animationData);
    }
  }
  var params = {
    wrapper: wrapper,
    animationData: animationData,
  };
  var wrapperAttributes = wrapper.attributes;

  params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-animation-path').value
    : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-path').value
      : wrapperAttributes.getNamedItem('bm-path')
        ? wrapperAttributes.getNamedItem('bm-path').value
        : '';
  params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-type').value
    : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-type').value
      : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
        ? wrapperAttributes.getNamedItem('bm-type').value
        : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
          ? wrapperAttributes.getNamedItem('data-bm-renderer').value
          : wrapperAttributes.getNamedItem('bm-renderer')
            ? wrapperAttributes.getNamedItem('bm-renderer').value
            : 'canvas';

  var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-loop').value
    : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-loop').value
      : wrapperAttributes.getNamedItem('bm-loop')
        ? wrapperAttributes.getNamedItem('bm-loop').value
        : '';
  if (loop === 'false') {
    params.loop = false;
  } else if (loop === 'true') {
    params.loop = true;
  } else if (loop !== '') {
    params.loop = parseInt(loop, 10);
  }
  var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value
    : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-autoplay').value
      : wrapperAttributes.getNamedItem('bm-autoplay')
        ? wrapperAttributes.getNamedItem('bm-autoplay').value
        : true;
  params.autoplay = autoplay !== 'false';

  params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-name').value
    : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-name').value
      : wrapperAttributes.getNamedItem('bm-name')
        ? wrapperAttributes.getNamedItem('bm-name').value
        : '';
  var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-prerender').value
    : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-prerender').value
      : wrapperAttributes.getNamedItem('bm-prerender')
        ? wrapperAttributes.getNamedItem('bm-prerender').value
        : '';

  if (prerender === 'false') {
    params.prerender = false;
  }
  this.setParams(params);
};

AnimationItem.prototype.includeLayers = function (data) {
  if (data.op > this.animationData.op) {
    this.animationData.op = data.op;
    this.totalFrames = Math.floor(data.op - this.animationData.ip);
  }
  var layers = this.animationData.layers;
  var i;
  var len = layers.length;
  var newLayers = data.layers;
  var j;
  var jLen = newLayers.length;
  for (j = 0; j < jLen; j += 1) {
    i = 0;
    while (i < len) {
      if (layers[i].id === newLayers[j].id) {
        layers[i] = newLayers[j];
        break;
      }
      i += 1;
    }
  }
  if (data.chars || data.fonts) {
    this.renderer.globalData.fontManager.addChars(data.chars);
    this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
  }
  if (data.assets) {
    len = data.assets.length;
    for (i = 0; i < len; i += 1) {
      this.animationData.assets.push(data.assets[i]);
    }
  }
  this.animationData.__complete = false;
  dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
  this.renderer.includeLayers(data.layers);
  if (expressionsPlugin) {
    expressionsPlugin.initExpressions(this);
  }
  this.loadNextSegment();
};

AnimationItem.prototype.loadNextSegment = function () {
  var segments = this.animationData.segments;
  if (!segments || segments.length === 0 || !this.autoloadSegments) {
    this.trigger('data_ready');
    this.timeCompleted = this.totalFrames;
    return;
  }
  var segment = segments.shift();
  this.timeCompleted = segment.time * this.frameRate;
  var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
  this.segmentPos += 1;
  assetLoader.load(segmentPath, this.includeLayers.bind(this), function () {
    this.trigger('data_failed');
  }.bind(this));
};

AnimationItem.prototype.loadSegments = function () {
  var segments = this.animationData.segments;
  if (!segments) {
    this.timeCompleted = this.totalFrames;
  }
  this.loadNextSegment();
};

AnimationItem.prototype.imagesLoaded = function () {
  this.trigger('loaded_images');
  this.checkLoaded();
};

AnimationItem.prototype.preloadImages = function () {
  this.imagePreloader.setAssetsPath(this.assetsPath);
  this.imagePreloader.setPath(this.path);
  this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
};

AnimationItem.prototype.configAnimation = function (animData) {
  if (!this.renderer) {
    return;
  }
  try {
    this.animationData = animData;

    if (this.initialSegment) {
      this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
      this.firstFrame = Math.round(this.initialSegment[0]);
    } else {
      this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
      this.firstFrame = Math.round(this.animationData.ip);
    }
    this.renderer.configAnimation(animData);
    if (!animData.assets) {
      animData.assets = [];
    }

    this.assets = this.animationData.assets;
    this.frameRate = this.animationData.fr;
    this.frameMult = this.animationData.fr / 1000;
    this.renderer.searchExtraCompositions(animData.assets);
    this.markers = markerParser(animData.markers || []);
    this.trigger('config_ready');
    this.preloadImages();
    this.loadSegments();
    this.updaFrameModifier();
    this.waitForFontsLoaded();
    if (this.isPaused) {
      this.audioController.pause();
    }
  } catch (error) {
    this.triggerConfigError(error);
  }
};

AnimationItem.prototype.waitForFontsLoaded = function () {
  if (!this.renderer) {
    return;
  }
  if (this.renderer.globalData.fontManager.isLoaded) {
    this.checkLoaded();
  } else {
    setTimeout(this.waitForFontsLoaded.bind(this), 20);
  }
};

AnimationItem.prototype.checkLoaded = function () {
  if (!this.isLoaded
        && this.renderer.globalData.fontManager.isLoaded
        && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas')
        && (this.imagePreloader.loadedFootages())
  ) {
    this.isLoaded = true;
    dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
    if (expressionsPlugin) {
      expressionsPlugin.initExpressions(this);
    }
    this.renderer.initItems();
    setTimeout(function () {
      this.trigger('DOMLoaded');
    }.bind(this), 0);
    this.gotoFrame();
    if (this.autoplay) {
      this.play();
    }
  }
};

AnimationItem.prototype.resize = function () {
  this.renderer.updateContainerSize();
};

AnimationItem.prototype.setSubframe = function (flag) {
  this.isSubframeEnabled = !!flag;
};

AnimationItem.prototype.gotoFrame = function () {
  this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

  if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
    this.currentFrame = this.timeCompleted;
  }
  this.trigger('enterFrame');
  this.renderFrame();
};

AnimationItem.prototype.renderFrame = function () {
  if (this.isLoaded === false || !this.renderer) {
    return;
  }
  try {
    this.renderer.renderFrame(this.currentFrame + this.firstFrame);
  } catch (error) {
    this.triggerRenderFrameError(error);
  }
};

AnimationItem.prototype.play = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === true) {
    this.isPaused = false;
    this.audioController.resume();
    if (this._idle) {
      this._idle = false;
      this.trigger('_active');
    }
  }
};

AnimationItem.prototype.pause = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === false) {
    this.isPaused = true;
    this._idle = true;
    this.trigger('_idle');
    this.audioController.pause();
  }
};

AnimationItem.prototype.togglePause = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === true) {
    this.play();
  } else {
    this.pause();
  }
};

AnimationItem.prototype.stop = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.pause();
  this.playCount = 0;
  this._completedLoop = false;
  this.setCurrentRawFrameValue(0);
};

AnimationItem.prototype.getMarkerData = function (markerName) {
  var marker;
  for (var i = 0; i < this.markers.length; i += 1) {
    marker = this.markers[i];
    if (marker.payload && marker.payload.name === markerName) {
      return marker;
    }
  }
  return null;
};

AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
  if (name && this.name !== name) {
    return;
  }
  var numValue = Number(value);
  if (isNaN(numValue)) {
    var marker = this.getMarkerData(value);
    if (marker) {
      this.goToAndStop(marker.time, true);
    }
  } else if (isFrame) {
    this.setCurrentRawFrameValue(value);
  } else {
    this.setCurrentRawFrameValue(value * this.frameModifier);
  }
  this.pause();
};

AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
  if (name && this.name !== name) {
    return;
  }
  var numValue = Number(value);
  if (isNaN(numValue)) {
    var marker = this.getMarkerData(value);
    if (marker) {
      if (!marker.duration) {
        this.goToAndStop(marker.time, true);
      } else {
        this.playSegments([marker.time, marker.time + marker.duration], true);
      }
    }
  } else {
    this.goToAndStop(numValue, isFrame, name);
  }
  this.play();
};

AnimationItem.prototype.advanceTime = function (value) {
  if (this.isPaused === true || this.isLoaded === false) {
    return;
  }
  var nextValue = this.currentRawFrame + value * this.frameModifier;
  var _isComplete = false;
  // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
  // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
  if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
    if (!this.loop || this.playCount === this.loop) {
      if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
        _isComplete = true;
        nextValue = this.totalFrames - 1;
      }
    } else if (nextValue >= this.totalFrames) {
      this.playCount += 1;
      if (!this.checkSegments(nextValue % this.totalFrames)) {
        this.setCurrentRawFrameValue(nextValue % this.totalFrames);
        this._completedLoop = true;
        this.trigger('loopComplete');
      }
    } else {
      this.setCurrentRawFrameValue(nextValue);
    }
  } else if (nextValue < 0) {
    if (!this.checkSegments(nextValue % this.totalFrames)) {
      if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) { // eslint-disable-line no-plusplus
        this.setCurrentRawFrameValue(this.totalFrames + (nextValue % this.totalFrames));
        if (!this._completedLoop) {
          this._completedLoop = true;
        } else {
          this.trigger('loopComplete');
        }
      } else {
        _isComplete = true;
        nextValue = 0;
      }
    }
  } else {
    this.setCurrentRawFrameValue(nextValue);
  }
  if (_isComplete) {
    this.setCurrentRawFrameValue(nextValue);
    this.pause();
    this.trigger('complete');
  }
};

AnimationItem.prototype.adjustSegment = function (arr, offset) {
  this.playCount = 0;
  if (arr[1] < arr[0]) {
    if (this.frameModifier > 0) {
      if (this.playSpeed < 0) {
        this.setSpeed(-this.playSpeed);
      } else {
        this.setDirection(-1);
      }
    }
    this.totalFrames = arr[0] - arr[1];
    this.timeCompleted = this.totalFrames;
    this.firstFrame = arr[1];
    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
  } else if (arr[1] > arr[0]) {
    if (this.frameModifier < 0) {
      if (this.playSpeed < 0) {
        this.setSpeed(-this.playSpeed);
      } else {
        this.setDirection(1);
      }
    }
    this.totalFrames = arr[1] - arr[0];
    this.timeCompleted = this.totalFrames;
    this.firstFrame = arr[0];
    this.setCurrentRawFrameValue(0.001 + offset);
  }
  this.trigger('segmentStart');
};
AnimationItem.prototype.setSegment = function (init, end) {
  var pendingFrame = -1;
  if (this.isPaused) {
    if (this.currentRawFrame + this.firstFrame < init) {
      pendingFrame = init;
    } else if (this.currentRawFrame + this.firstFrame > end) {
      pendingFrame = end - init;
    }
  }

  this.firstFrame = init;
  this.totalFrames = end - init;
  this.timeCompleted = this.totalFrames;
  if (pendingFrame !== -1) {
    this.goToAndStop(pendingFrame, true);
  }
};

AnimationItem.prototype.playSegments = function (arr, forceFlag) {
  if (forceFlag) {
    this.segments.length = 0;
  }
  if (typeof arr[0] === 'object') {
    var i;
    var len = arr.length;
    for (i = 0; i < len; i += 1) {
      this.segments.push(arr[i]);
    }
  } else {
    this.segments.push(arr);
  }
  if (this.segments.length && forceFlag) {
    this.adjustSegment(this.segments.shift(), 0);
  }
  if (this.isPaused) {
    this.play();
  }
};

AnimationItem.prototype.resetSegments = function (forceFlag) {
  this.segments.length = 0;
  this.segments.push([this.animationData.ip, this.animationData.op]);
  // this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op - this.animationData.ip+this.animationData.ip*this.frameRate)]);
  if (forceFlag) {
    this.checkSegments(0);
  }
};
AnimationItem.prototype.checkSegments = function (offset) {
  if (this.segments.length) {
    this.adjustSegment(this.segments.shift(), offset);
    return true;
  }
  return false;
};

AnimationItem.prototype.destroy = function (name) {
  if ((name && this.name !== name) || !this.renderer) {
    return;
  }
  this.renderer.destroy();
  this.imagePreloader.destroy();
  this.trigger('destroy');
  this._cbs = null;
  this.onEnterFrame = null;
  this.onLoopComplete = null;
  this.onComplete = null;
  this.onSegmentStart = null;
  this.onDestroy = null;
  this.renderer = null;
  this.renderer = null;
  this.imagePreloader = null;
  this.projectInterface = null;
};

AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
  this.currentRawFrame = value;
  this.gotoFrame();
};

AnimationItem.prototype.setSpeed = function (val) {
  this.playSpeed = val;
  this.updaFrameModifier();
};

AnimationItem.prototype.setDirection = function (val) {
  this.playDirection = val < 0 ? -1 : 1;
  this.updaFrameModifier();
};

AnimationItem.prototype.setVolume = function (val, name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.setVolume(val);
};

AnimationItem.prototype.getVolume = function () {
  return this.audioController.getVolume();
};

AnimationItem.prototype.mute = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.mute();
};

AnimationItem.prototype.unmute = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.unmute();
};

AnimationItem.prototype.updaFrameModifier = function () {
  this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
  this.audioController.setRate(this.playSpeed * this.playDirection);
};

AnimationItem.prototype.getPath = function () {
  return this.path;
};

AnimationItem.prototype.getAssetsPath = function (assetData) {
  var path = '';
  if (assetData.e) {
    path = assetData.p;
  } else if (this.assetsPath) {
    var imagePath = assetData.p;
    if (imagePath.indexOf('images/') !== -1) {
      imagePath = imagePath.split('/')[1];
    }
    path = this.assetsPath + imagePath;
  } else {
    path = this.path;
    path += assetData.u ? assetData.u : '';
    path += assetData.p;
  }
  return path;
};

AnimationItem.prototype.getAssetData = function (id) {
  var i = 0;
  var len = this.assets.length;
  while (i < len) {
    if (id === this.assets[i].id) {
      return this.assets[i];
    }
    i += 1;
  }
  return null;
};

AnimationItem.prototype.hide = function () {
  this.renderer.hide();
};

AnimationItem.prototype.show = function () {
  this.renderer.show();
};

AnimationItem.prototype.getDuration = function (isFrame) {
  return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
};

AnimationItem.prototype.trigger = function (name) {
  if (this._cbs && this._cbs[name]) {
    switch (name) {
      case 'enterFrame':
        this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
        break;
      case 'loopComplete':
        this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
        break;
      case 'complete':
        this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
        break;
      case 'segmentStart':
        this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
        break;
      case 'destroy':
        this.triggerEvent(name, new BMDestroyEvent(name, this));
        break;
      default:
        this.triggerEvent(name);
    }
  }
  if (name === 'enterFrame' && this.onEnterFrame) {
    this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult));
  }
  if (name === 'loopComplete' && this.onLoopComplete) {
    this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
  }
  if (name === 'complete' && this.onComplete) {
    this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult));
  }
  if (name === 'segmentStart' && this.onSegmentStart) {
    this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
  }
  if (name === 'destroy' && this.onDestroy) {
    this.onDestroy.call(this, new BMDestroyEvent(name, this));
  }
};

AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
  var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
  this.triggerEvent('error', error);

  if (this.onError) {
    this.onError.call(this, error);
  }
};

AnimationItem.prototype.triggerConfigError = function (nativeError) {
  var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
  this.triggerEvent('error', error);

  if (this.onError) {
    this.onError.call(this, error);
  }
};

/* global CompExpressionInterface, expressionsPlugin: writable */
/* exported expressionsPlugin */

var Expressions = (function () {
  var ob = {};
  ob.initExpressions = initExpressions;

  function initExpressions(animation) {
    var stackCount = 0;
    var registers = [];

    function pushExpression() {
      stackCount += 1;
    }

    function popExpression() {
      stackCount -= 1;
      if (stackCount === 0) {
        releaseInstances();
      }
    }

    function registerExpressionProperty(expression) {
      if (registers.indexOf(expression) === -1) {
        registers.push(expression);
      }
    }

    function releaseInstances() {
      var i;
      var len = registers.length;
      for (i = 0; i < len; i += 1) {
        registers[i].release();
      }
      registers.length = 0;
    }

    animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
    animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
    animation.renderer.globalData.pushExpression = pushExpression;
    animation.renderer.globalData.popExpression = popExpression;
    animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
  }
  return ob;
}());

expressionsPlugin = Expressions;

/* eslint-disable camelcase, no-unused-vars */
/* global BMMath, BezierFactory, createTypedArray, degToRads, shapePool */

var ExpressionManager = (function () {
  'use strict';

  var ob = {};
  var Math = BMMath;
  var window = null;
  var document = null;
  var XMLHttpRequest = null;
  var fetch = null;

  function $bm_isInstanceOfArray(arr) {
    return arr.constructor === Array || arr.constructor === Float32Array;
  }

  function isNumerable(tOfV, v) {
    return tOfV === 'number' || tOfV === 'boolean' || tOfV === 'string' || v instanceof Number;
  }

  function $bm_neg(a) {
    var tOfA = typeof a;
    if (tOfA === 'number' || tOfA === 'boolean' || a instanceof Number) {
      return -a;
    }
    if ($bm_isInstanceOfArray(a)) {
      var i;
      var lenA = a.length;
      var retArr = [];
      for (i = 0; i < lenA; i += 1) {
        retArr[i] = -a[i];
      }
      return retArr;
    }
    if (a.propType) {
      return a.v;
    }
    return -a;
  }

  var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get;
  var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get;
  var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;

  function sum(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    if (tOfA === 'string' || tOfB === 'string') {
      return a + b;
    }
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a + b;
    }
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      a = a.slice(0);
      a[0] += b;
      return a;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      b = b.slice(0);
      b[0] = a + b[0];
      return b;
    }
    if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
      var i = 0;
      var lenA = a.length;
      var lenB = b.length;
      var retArr = [];
      while (i < lenA || i < lenB) {
        if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
          retArr[i] = a[i] + b[i];
        } else {
          retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
        }
        i += 1;
      }
      return retArr;
    }
    return 0;
  }
  var add = sum;

  function sub(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      if (tOfA === 'string') {
        a = parseInt(a, 10);
      }
      if (tOfB === 'string') {
        b = parseInt(b, 10);
      }
      return a - b;
    }
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      a = a.slice(0);
      a[0] -= b;
      return a;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      b = b.slice(0);
      b[0] = a - b[0];
      return b;
    }
    if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
      var i = 0;
      var lenA = a.length;
      var lenB = b.length;
      var retArr = [];
      while (i < lenA || i < lenB) {
        if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
          retArr[i] = a[i] - b[i];
        } else {
          retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
        }
        i += 1;
      }
      return retArr;
    }
    return 0;
  }

  function mul(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    var arr;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a * b;
    }

    var i;
    var len;
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      len = a.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a[i] * b;
      }
      return arr;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      len = b.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a * b[i];
      }
      return arr;
    }
    return 0;
  }

  function div(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    var arr;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a / b;
    }
    var i;
    var len;
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      len = a.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a[i] / b;
      }
      return arr;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      len = b.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a / b[i];
      }
      return arr;
    }
    return 0;
  }
  function mod(a, b) {
    if (typeof a === 'string') {
      a = parseInt(a, 10);
    }
    if (typeof b === 'string') {
      b = parseInt(b, 10);
    }
    return a % b;
  }
  var $bm_sum = sum;
  var $bm_sub = sub;
  var $bm_mul = mul;
  var $bm_div = div;
  var $bm_mod = mod;

  function clamp(num, min, max) {
    if (min > max) {
      var mm = max;
      max = min;
      min = mm;
    }
    return Math.min(Math.max(num, min), max);
  }

  function radiansToDegrees(val) {
    return val / degToRads;
  }
  var radians_to_degrees = radiansToDegrees;

  function degreesToRadians(val) {
    return val * degToRads;
  }
  var degrees_to_radians = radiansToDegrees;

  var helperLengthArray = [0, 0, 0, 0, 0, 0];

  function length(arr1, arr2) {
    if (typeof arr1 === 'number' || arr1 instanceof Number) {
      arr2 = arr2 || 0;
      return Math.abs(arr1 - arr2);
    }
    if (!arr2) {
      arr2 = helperLengthArray;
    }
    var i;
    var len = Math.min(arr1.length, arr2.length);
    var addedLength = 0;
    for (i = 0; i < len; i += 1) {
      addedLength += Math.pow(arr2[i] - arr1[i], 2);
    }
    return Math.sqrt(addedLength);
  }

  function normalize(vec) {
    return div(vec, length(vec));
  }

  function rgbToHsl(val) {
    var r = val[0]; var g = val[1]; var b = val[2];
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h;
    var s;
    var l = (max + min) / 2;

    if (max === min) {
      h = 0; // achromatic
      s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
      }
      h /= 6;
    }

    return [h, s, l, val[3]];
  }

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function hslToRgb(val) {
    var h = val[0];
    var s = val[1];
    var l = val[2];

    var r;
    var g;
    var b;

    if (s === 0) {
      r = l; // achromatic
      b = l; // achromatic
      g = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r, g, b, val[3]];
  }

  function linear(t, tMin, tMax, value1, value2) {
    if (value1 === undefined || value2 === undefined) {
      value1 = tMin;
      value2 = tMax;
      tMin = 0;
      tMax = 1;
    }
    if (tMax < tMin) {
      var _tMin = tMax;
      tMax = tMin;
      tMin = _tMin;
    }
    if (t <= tMin) {
      return value1;
    } if (t >= tMax) {
      return value2;
    }
    var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);
    if (!value1.length) {
      return value1 + (value2 - value1) * perc;
    }
    var i;
    var len = value1.length;
    var arr = createTypedArray('float32', len);
    for (i = 0; i < len; i += 1) {
      arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
    }
    return arr;
  }
  function random(min, max) {
    if (max === undefined) {
      if (min === undefined) {
        min = 0;
        max = 1;
      } else {
        max = min;
        min = undefined;
      }
    }
    if (max.length) {
      var i;
      var len = max.length;
      if (!min) {
        min = createTypedArray('float32', len);
      }
      var arr = createTypedArray('float32', len);
      var rnd = BMMath.random();
      for (i = 0; i < len; i += 1) {
        arr[i] = min[i] + rnd * (max[i] - min[i]);
      }
      return arr;
    }
    if (min === undefined) {
      min = 0;
    }
    var rndm = BMMath.random();
    return min + rndm * (max - min);
  }

  function createPath(points, inTangents, outTangents, closed) {
    var i;
    var len = points.length;
    var path = shapePool.newElement();
    path.setPathData(!!closed, len);
    var arrPlaceholder = [0, 0];
    var inVertexPoint;
    var outVertexPoint;
    for (i = 0; i < len; i += 1) {
      inVertexPoint = (inTangents && inTangents[i]) ? inTangents[i] : arrPlaceholder;
      outVertexPoint = (outTangents && outTangents[i]) ? outTangents[i] : arrPlaceholder;
      path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
    }
    return path;
  }

  function initiateExpression(elem, data, property) {
    var val = data.x;
    var needsVelocity = /velocity(?![\w\d])/.test(val);
    var _needsRandom = val.indexOf('random') !== -1;
    var elemType = elem.data.ty;
    var transform;
    var $bm_transform;
    var content;
    var effect;
    var thisProperty = property;
    thisProperty.valueAtTime = thisProperty.getValueAtTime;
    Object.defineProperty(thisProperty, 'value', {
      get: function () {
        return thisProperty.v;
      },
    });
    elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
    elem.comp.displayStartTime = 0;
    var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
    var outPoint = elem.data.op / elem.comp.globalData.frameRate;
    var width = elem.data.sw ? elem.data.sw : 0;
    var height = elem.data.sh ? elem.data.sh : 0;
    var name = elem.data.nm;
    var loopIn;
    var loop_in;
    var loopOut;
    var loop_out;
    var smooth;
    var toWorld;
    var fromWorld;
    var fromComp;
    var toComp;
    var fromCompToSurface;
    var position;
    var rotation;
    var anchorPoint;
    var scale;
    var thisLayer;
    var thisComp;
    var mask;
    var valueAtTime;
    var velocityAtTime;

    var scoped_bm_rt;
    // val = val.replace(/(\\?"|')((http)(s)?(:\/))?\/.*?(\\?"|')/g, "\"\""); // deter potential network calls
    var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval
    var numKeys = property.kf ? data.k.length : 0;

    var active = !this.data || this.data.hd !== true;

    var wiggle = function wiggle(freq, amp) {
      var iWiggle;
      var j;
      var lenWiggle = this.pv.length ? this.pv.length : 1;
      var addedAmps = createTypedArray('float32', lenWiggle);
      freq = 5;
      var iterations = Math.floor(time * freq);
      iWiggle = 0;
      j = 0;
      while (iWiggle < iterations) {
        // var rnd = BMMath.random();
        for (j = 0; j < lenWiggle; j += 1) {
          addedAmps[j] += -amp + amp * 2 * BMMath.random();
          // addedAmps[j] += -amp + amp*2*rnd;
        }
        iWiggle += 1;
      }
      // var rnd2 = BMMath.random();
      var periods = time * freq;
      var perc = periods - Math.floor(periods);
      var arr = createTypedArray('float32', lenWiggle);
      if (lenWiggle > 1) {
        for (j = 0; j < lenWiggle; j += 1) {
          arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc;
          // arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
          // arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
        }
        return arr;
      }
      return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
    }.bind(this);

    if (thisProperty.loopIn) {
      loopIn = thisProperty.loopIn.bind(thisProperty);
      loop_in = loopIn;
    }

    if (thisProperty.loopOut) {
      loopOut = thisProperty.loopOut.bind(thisProperty);
      loop_out = loopOut;
    }

    if (thisProperty.smooth) {
      smooth = thisProperty.smooth.bind(thisProperty);
    }

    function loopInDuration(type, duration) {
      return loopIn(type, duration, true);
    }

    function loopOutDuration(type, duration) {
      return loopOut(type, duration, true);
    }

    if (this.getValueAtTime) {
      valueAtTime = this.getValueAtTime.bind(this);
    }

    if (this.getVelocityAtTime) {
      velocityAtTime = this.getVelocityAtTime.bind(this);
    }

    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

    function lookAt(elem1, elem2) {
      var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
      var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
      var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
      return [yaw, pitch, 0];
    }

    function easeOut(t, tMin, tMax, val1, val2) {
      return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
    }

    function easeIn(t, tMin, tMax, val1, val2) {
      return applyEase(easeInBez, t, tMin, tMax, val1, val2);
    }

    function ease(t, tMin, tMax, val1, val2) {
      return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
    }

    function applyEase(fn, t, tMin, tMax, val1, val2) {
      if (val1 === undefined) {
        val1 = tMin;
        val2 = tMax;
      } else {
        t = (t - tMin) / (tMax - tMin);
      }
      if (t > 1) {
        t = 1;
      } else if (t < 0) {
        t = 0;
      }
      var mult = fn(t);
      if ($bm_isInstanceOfArray(val1)) {
        var iKey;
        var lenKey = val1.length;
        var arr = createTypedArray('float32', lenKey);
        for (iKey = 0; iKey < lenKey; iKey += 1) {
          arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
        }
        return arr;
      }
      return (val2 - val1) * mult + val1;
    }

    function nearestKey(time) {
      var iKey;
      var lenKey = data.k.length;
      var index;
      var keyTime;
      if (!data.k.length || typeof (data.k[0]) === 'number') {
        index = 0;
        keyTime = 0;
      } else {
        index = -1;
        time *= elem.comp.globalData.frameRate;
        if (time < data.k[0].t) {
          index = 1;
          keyTime = data.k[0].t;
        } else {
          for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
            if (time === data.k[iKey].t) {
              index = iKey + 1;
              keyTime = data.k[iKey].t;
              break;
            } else if (time > data.k[iKey].t && time < data.k[iKey + 1].t) {
              if (time - data.k[iKey].t > data.k[iKey + 1].t - time) {
                index = iKey + 2;
                keyTime = data.k[iKey + 1].t;
              } else {
                index = iKey + 1;
                keyTime = data.k[iKey].t;
              }
              break;
            }
          }
          if (index === -1) {
            index = iKey + 1;
            keyTime = data.k[iKey].t;
          }
        }
      }
      var obKey = {};
      obKey.index = index;
      obKey.time = keyTime / elem.comp.globalData.frameRate;
      return obKey;
    }

    function key(ind) {
      var obKey;
      var iKey;
      var lenKey;
      if (!data.k.length || typeof (data.k[0]) === 'number') {
        throw new Error('The property has no keyframe at index ' + ind);
      }
      ind -= 1;
      obKey = {
        time: data.k[ind].t / elem.comp.globalData.frameRate,
        value: [],
      };
      var arr = Object.prototype.hasOwnProperty.call(data.k[ind], 's') ? data.k[ind].s : data.k[ind - 1].e;

      lenKey = arr.length;
      for (iKey = 0; iKey < lenKey; iKey += 1) {
        obKey[iKey] = arr[iKey];
        obKey.value[iKey] = arr[iKey];
      }
      return obKey;
    }

    function framesToTime(frames, fps) {
      if (!fps) {
        fps = elem.comp.globalData.frameRate;
      }
      return frames / fps;
    }

    function timeToFrames(t, fps) {
      if (!t && t !== 0) {
        t = time;
      }
      if (!fps) {
        fps = elem.comp.globalData.frameRate;
      }
      return t * fps;
    }

    function seedRandom(seed) {
      BMMath.seedrandom(randSeed + seed);
    }

    function sourceRectAtTime() {
      return elem.sourceRectAtTime();
    }

    function substring(init, end) {
      if (typeof value === 'string') {
        if (end === undefined) {
          return value.substring(init);
        }
        return value.substring(init, end);
      }
      return '';
    }

    function substr(init, end) {
      if (typeof value === 'string') {
        if (end === undefined) {
          return value.substr(init);
        }
        return value.substr(init, end);
      }
      return '';
    }

    function posterizeTime(framesPerSecond) {
      time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
      value = valueAtTime(time);
    }

    var time;
    var velocity;
    var value;
    var text;
    var textIndex;
    var textTotal;
    var selectorValue;
    var index = elem.data.ind;
    var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
    var parent;
    var randSeed = Math.floor(Math.random() * 1000000);
    var globalData = elem.globalData;
    function executeExpression(_value) {
      // globalData.pushExpression();
      value = _value;
      if (_needsRandom) {
        seedRandom(randSeed);
      }
      if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
        return value;
      }
      if (this.propType === 'textSelector') {
        textIndex = this.textIndex;
        textTotal = this.textTotal;
        selectorValue = this.selectorValue;
      }
      if (!thisLayer) {
        text = elem.layerInterface.text;
        thisLayer = elem.layerInterface;
        thisComp = elem.comp.compInterface;
        toWorld = thisLayer.toWorld.bind(thisLayer);
        fromWorld = thisLayer.fromWorld.bind(thisLayer);
        fromComp = thisLayer.fromComp.bind(thisLayer);
        toComp = thisLayer.toComp.bind(thisLayer);
        mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
        fromCompToSurface = fromComp;
      }
      if (!transform) {
        transform = elem.layerInterface('ADBE Transform Group');
        $bm_transform = transform;
        if (transform) {
          anchorPoint = transform.anchorPoint;
          /* position = transform.position;
                    rotation = transform.rotation;
                    scale = transform.scale; */
        }
      }

      if (elemType === 4 && !content) {
        content = thisLayer('ADBE Root Vectors Group');
      }
      if (!effect) {
        effect = thisLayer(4);
      }
      hasParent = !!(elem.hierarchy && elem.hierarchy.length);
      if (hasParent && !parent) {
        parent = elem.hierarchy[0].layerInterface;
      }
      time = this.comp.renderedFrame / this.comp.globalData.frameRate;
      if (needsVelocity) {
        velocity = velocityAtTime(time);
      }
      expression_function();
      this.frameExpressionId = elem.globalData.frameId;

      // TODO: Check if it's possible to return on ShapeInterface the .v value
      if (scoped_bm_rt.propType === 'shape') {
        scoped_bm_rt = scoped_bm_rt.v;
      }
      // globalData.popExpression();
      return scoped_bm_rt;
    }
    return executeExpression;
  }

  ob.initiateExpression = initiateExpression;
  return ob;
}());

/* global ExpressionManager, createTypedArray */
/* exported expressionHelpers */

var expressionHelpers = (function () {
  function searchExpressions(elem, data, prop) {
    if (data.x) {
      prop.k = true;
      prop.x = true;
      prop.initiateExpression = ExpressionManager.initiateExpression;
      prop.effectsSequence.push(prop.initiateExpression(elem, data, prop).bind(prop));
    }
  }

  function getValueAtTime(frameNum) {
    frameNum *= this.elem.globalData.frameRate;
    frameNum -= this.offsetTime;
    if (frameNum !== this._cachingAtTime.lastFrame) {
      this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
      this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
      this._cachingAtTime.lastFrame = frameNum;
    }
    return this._cachingAtTime.value;
  }

  function getSpeedAtTime(frameNum) {
    var delta = -0.01;
    var v1 = this.getValueAtTime(frameNum);
    var v2 = this.getValueAtTime(frameNum + delta);
    var speed = 0;
    if (v1.length) {
      var i;
      for (i = 0; i < v1.length; i += 1) {
        speed += Math.pow(v2[i] - v1[i], 2);
      }
      speed = Math.sqrt(speed) * 100;
    } else {
      speed = 0;
    }
    return speed;
  }

  function getVelocityAtTime(frameNum) {
    if (this.vel !== undefined) {
      return this.vel;
    }
    var delta = -0.001;
    // frameNum += this.elem.data.st;
    var v1 = this.getValueAtTime(frameNum);
    var v2 = this.getValueAtTime(frameNum + delta);
    var velocity;
    if (v1.length) {
      velocity = createTypedArray('float32', v1.length);
      var i;
      for (i = 0; i < v1.length; i += 1) {
        // removing frameRate
        // if needed, don't add it here
        // velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
        velocity[i] = (v2[i] - v1[i]) / delta;
      }
    } else {
      velocity = (v2 - v1) / delta;
    }
    return velocity;
  }

  function getStaticValueAtTime() {
    return this.pv;
  }

  function setGroupProperty(propertyGroup) {
    this.propertyGroup = propertyGroup;
  }

  return {
    searchExpressions: searchExpressions,
    getSpeedAtTime: getSpeedAtTime,
    getVelocityAtTime: getVelocityAtTime,
    getValueAtTime: getValueAtTime,
    getStaticValueAtTime: getStaticValueAtTime,
    setGroupProperty: setGroupProperty,
  };
}());

/* global createTypedArray, Matrix, TransformPropertyFactory, expressionHelpers, PropertyFactory, expressionHelpers,
initialDefaultFrame, shapePool, ShapePropertyFactory, bez, extendPrototype, ExpressionManager, createSizedArray */

(function addPropertyDecorator() {
  function loopOut(type, duration, durationFlag) {
    if (!this.k || !this.keyframes) {
      return this.pv;
    }
    type = type ? type.toLowerCase() : '';
    var currentFrame = this.comp.renderedFrame;
    var keyframes = this.keyframes;
    var lastKeyFrame = keyframes[keyframes.length - 1].t;
    if (currentFrame <= lastKeyFrame) {
      return this.pv;
    }
    var cycleDuration;
    var firstKeyFrame;
    if (!durationFlag) {
      if (!duration || duration > keyframes.length - 1) {
        duration = keyframes.length - 1;
      }
      firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
      cycleDuration = lastKeyFrame - firstKeyFrame;
    } else {
      if (!duration) {
        cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
      } else {
        cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
      }
      firstKeyFrame = lastKeyFrame - cycleDuration;
    }
    var i;
    var len;
    var ret;
    if (type === 'pingpong') {
      var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
      if (iterations % 2 !== 0) {
          return this.getValueAtTime(((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      }
    } else if (type === 'offset') {
      var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
      if (this.pv.length) {
        ret = new Array(initV.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = (endV[i] - initV[i]) * repeats + current[i];
        }
        return ret;
      }
      return (endV - initV) * repeats + current;
    } else if (type === 'continue') {
      var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
      var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        ret = new Array(lastValue.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
            ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
        }
        return ret;
      }
      return lastValue + (lastValue - nextLastValue) * (((currentFrame - lastKeyFrame)) / 0.001);
    }
      return this.getValueAtTime((((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line

  }

  function loopIn(type, duration, durationFlag) {
    if (!this.k) {
      return this.pv;
    }
    type = type ? type.toLowerCase() : '';
    var currentFrame = this.comp.renderedFrame;
    var keyframes = this.keyframes;
    var firstKeyFrame = keyframes[0].t;
    if (currentFrame >= firstKeyFrame) {
      return this.pv;
    }
    var cycleDuration;
    var lastKeyFrame;
    if (!durationFlag) {
      if (!duration || duration > keyframes.length - 1) {
        duration = keyframes.length - 1;
      }
      lastKeyFrame = keyframes[duration].t;
      cycleDuration = lastKeyFrame - firstKeyFrame;
    } else {
      if (!duration) {
        cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
      } else {
        cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
      }
      lastKeyFrame = firstKeyFrame + cycleDuration;
    }
    var i;
    var len;
    var ret;
    if (type === 'pingpong') {
      var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);
      if (iterations % 2 === 0) {
          return this.getValueAtTime((((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      }
    } else if (type === 'offset') {
      var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
      var current = this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration) + firstKeyFrame) / this.comp.globalData.frameRate, 0);
      var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;
      if (this.pv.length) {
        ret = new Array(initV.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
        }
        return ret;
      }
      return current - (endV - initV) * repeats;
    } else if (type === 'continue') {
      var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        ret = new Array(firstValue.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = firstValue[i] + ((firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame)) / 0.001;
        }
        return ret;
      }
      return firstValue + ((firstValue - nextFirstValue) * (firstKeyFrame - currentFrame)) / 0.001;
    }
      return this.getValueAtTime(((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame))) / this.comp.globalData.frameRate, 0); // eslint-disable-line

  }

  function smooth(width, samples) {
    if (!this.k) {
      return this.pv;
    }
    width = (width || 0.4) * 0.5;
    samples = Math.floor(samples || 5);
    if (samples <= 1) {
      return this.pv;
    }
    var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
    var initFrame = currentTime - width;
    var endFrame = currentTime + width;
    var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
    var i = 0;
    var j = 0;
    var value;
    if (this.pv.length) {
      value = createTypedArray('float32', this.pv.length);
    } else {
      value = 0;
    }
    var sampleValue;
    while (i < samples) {
      sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);
      if (this.pv.length) {
        for (j = 0; j < this.pv.length; j += 1) {
          value[j] += sampleValue[j];
        }
      } else {
        value += sampleValue;
      }
      i += 1;
    }
    if (this.pv.length) {
      for (j = 0; j < this.pv.length; j += 1) {
        value[j] /= samples;
      }
    } else {
      value /= samples;
    }
    return value;
  }

  function getTransformValueAtTime(time) {
    if (!this._transformCachingAtTime) {
      this._transformCachingAtTime = {
        v: new Matrix(),
      };
    }
    /// /
    var matrix = this._transformCachingAtTime.v;
    matrix.cloneFromProps(this.pre.props);
    if (this.appliedTransformations < 1) {
      var anchor = this.a.getValueAtTime(time);
      matrix.translate(
        -anchor[0] * this.a.mult,
        -anchor[1] * this.a.mult,
        anchor[2] * this.a.mult
      );
    }
    if (this.appliedTransformations < 2) {
      var scale = this.s.getValueAtTime(time);
      matrix.scale(
        scale[0] * this.s.mult,
        scale[1] * this.s.mult,
        scale[2] * this.s.mult
      );
    }
    if (this.sk && this.appliedTransformations < 3) {
      var skew = this.sk.getValueAtTime(time);
      var skewAxis = this.sa.getValueAtTime(time);
      matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
    }
    if (this.r && this.appliedTransformations < 4) {
      var rotation = this.r.getValueAtTime(time);
      matrix.rotate(-rotation * this.r.mult);
    } else if (!this.r && this.appliedTransformations < 4) {
      var rotationZ = this.rz.getValueAtTime(time);
      var rotationY = this.ry.getValueAtTime(time);
      var rotationX = this.rx.getValueAtTime(time);
      var orientation = this.or.getValueAtTime(time);
      matrix.rotateZ(-rotationZ * this.rz.mult)
        .rotateY(rotationY * this.ry.mult)
        .rotateX(rotationX * this.rx.mult)
        .rotateZ(-orientation[2] * this.or.mult)
        .rotateY(orientation[1] * this.or.mult)
        .rotateX(orientation[0] * this.or.mult);
    }
    if (this.data.p && this.data.p.s) {
      var positionX = this.px.getValueAtTime(time);
      var positionY = this.py.getValueAtTime(time);
      if (this.data.p.z) {
        var positionZ = this.pz.getValueAtTime(time);
        matrix.translate(
          positionX * this.px.mult,
          positionY * this.py.mult,
          -positionZ * this.pz.mult
        );
      } else {
        matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
      }
    } else {
      var position = this.p.getValueAtTime(time);
      matrix.translate(
        position[0] * this.p.mult,
        position[1] * this.p.mult,
        -position[2] * this.p.mult
      );
    }
    return matrix;
    /// /
  }

  function getTransformStaticValueAtTime() {
    return this.v.clone(new Matrix());
  }

  var getTransformProperty = TransformPropertyFactory.getTransformProperty;
  TransformPropertyFactory.getTransformProperty = function (elem, data, container) {
    var prop = getTransformProperty(elem, data, container);
    if (prop.dynamicProperties.length) {
      prop.getValueAtTime = getTransformValueAtTime.bind(prop);
    } else {
      prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
    }
    prop.setGroupProperty = expressionHelpers.setGroupProperty;
    return prop;
  };

  var propertyGetProp = PropertyFactory.getProp;
  PropertyFactory.getProp = function (elem, data, type, mult, container) {
    var prop = propertyGetProp(elem, data, type, mult, container);
    // prop.getVelocityAtTime = getVelocityAtTime;
    // prop.loopOut = loopOut;
    // prop.loopIn = loopIn;
    if (prop.kf) {
      prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
    } else {
      prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
    }
    prop.setGroupProperty = expressionHelpers.setGroupProperty;
    prop.loopOut = loopOut;
    prop.loopIn = loopIn;
    prop.smooth = smooth;
    prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
    prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
    prop.numKeys = data.a === 1 ? data.k.length : 0;
    prop.propertyIndex = data.ix;
    var value = 0;
    if (type !== 0) {
      value = createTypedArray('float32', data.a === 1 ? data.k[0].s.length : data.k.length);
    }
    prop._cachingAtTime = {
      lastFrame: initialDefaultFrame,
      lastIndex: 0,
      value: value,
    };
    expressionHelpers.searchExpressions(elem, data, prop);
    if (prop.k) {
      container.addDynamicProperty(prop);
    }

    return prop;
  };

  function getShapeValueAtTime(frameNum) {
    // For now this caching object is created only when needed instead of creating it when the shape is initialized.
    if (!this._cachingAtTime) {
      this._cachingAtTime = {
        shapeValue: shapePool.clone(this.pv),
        lastIndex: 0,
        lastTime: initialDefaultFrame,
      };
    }

    frameNum *= this.elem.globalData.frameRate;
    frameNum -= this.offsetTime;
    if (frameNum !== this._cachingAtTime.lastTime) {
      this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
      this._cachingAtTime.lastTime = frameNum;
      this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
    }
    return this._cachingAtTime.shapeValue;
  }

  var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
  var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

  function ShapeExpressions() {}
  ShapeExpressions.prototype = {
    vertices: function (prop, time) {
      if (this.k) {
        this.getValue();
      }
      var shapePath = this.v;
      if (time !== undefined) {
        shapePath = this.getValueAtTime(time, 0);
      }
      var i;
      var len = shapePath._length;
      var vertices = shapePath[prop];
      var points = shapePath.v;
      var arr = createSizedArray(len);
      for (i = 0; i < len; i += 1) {
        if (prop === 'i' || prop === 'o') {
          arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
        } else {
          arr[i] = [vertices[i][0], vertices[i][1]];
        }
      }
      return arr;
    },
    points: function (time) {
      return this.vertices('v', time);
    },
    inTangents: function (time) {
      return this.vertices('i', time);
    },
    outTangents: function (time) {
      return this.vertices('o', time);
    },
    isClosed: function () {
      return this.v.c;
    },
    pointOnPath: function (perc, time) {
      var shapePath = this.v;
      if (time !== undefined) {
        shapePath = this.getValueAtTime(time, 0);
      }
      if (!this._segmentsLength) {
        this._segmentsLength = bez.getSegmentsLength(shapePath);
      }

      var segmentsLength = this._segmentsLength;
      var lengths = segmentsLength.lengths;
      var lengthPos = segmentsLength.totalLength * perc;
      var i = 0;
      var len = lengths.length;
      var accumulatedLength = 0;
      var pt;
      while (i < len) {
        if (accumulatedLength + lengths[i].addedLength > lengthPos) {
          var initIndex = i;
          var endIndex = (shapePath.c && i === len - 1) ? 0 : i + 1;
          var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
          pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
          break;
        } else {
          accumulatedLength += lengths[i].addedLength;
        }
        i += 1;
      }
      if (!pt) {
        pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
      }
      return pt;
    },
    vectorOnPath: function (perc, time, vectorType) {
      // perc doesn't use triple equality because it can be a Number object as well as a primitive.
      if (perc == 1) { // eslint-disable-line eqeqeq
        perc = this.v.c;
      } else if (perc == 0) { // eslint-disable-line eqeqeq
        perc = 0.999;
      }
      var pt1 = this.pointOnPath(perc, time);
      var pt2 = this.pointOnPath(perc + 0.001, time);
      var xLength = pt2[0] - pt1[0];
      var yLength = pt2[1] - pt1[1];
      var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
      if (magnitude === 0) {
        return [0, 0];
      }
      var unitVector = vectorType === 'tangent' ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
      return unitVector;
    },
    tangentOnPath: function (perc, time) {
      return this.vectorOnPath(perc, time, 'tangent');
    },
    normalOnPath: function (perc, time) {
      return this.vectorOnPath(perc, time, 'normal');
    },
    setGroupProperty: expressionHelpers.setGroupProperty,
    getValueAtTime: expressionHelpers.getStaticValueAtTime,
  };
  extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
  extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
  KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
  KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;

  var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
  ShapePropertyFactory.getShapeProp = function (elem, data, type, arr, trims) {
    var prop = propertyGetShapeProp(elem, data, type, arr, trims);
    prop.propertyIndex = data.ix;
    prop.lock = false;
    if (type === 3) {
      expressionHelpers.searchExpressions(elem, data.pt, prop);
    } else if (type === 4) {
      expressionHelpers.searchExpressions(elem, data.ks, prop);
    }
    if (prop.k) {
      elem.addDynamicProperty(prop);
    }
    return prop;
  };
}());

/* global ExpressionManager, TextProperty */

(function addDecorator() {
  function searchExpressions() {
    if (this.data.d.x) {
      this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
      this.addEffect(this.getExpressionValue.bind(this));
      return true;
    }
    return null;
  }

  TextProperty.prototype.getExpressionValue = function (currentValue, text) {
    var newValue = this.calculateExpression(text);
    if (currentValue.t !== newValue) {
      var newData = {};
      this.copyData(newData, currentValue);
      newData.t = newValue.toString();
      newData.__complete = false;
      return newData;
    }
    return currentValue;
  };

  TextProperty.prototype.searchProperty = function () {
    var isKeyframed = this.searchKeyframes();
    var hasExpressions = this.searchExpressions();
    this.kf = isKeyframed || hasExpressions;
    return this.kf;
  };

  TextProperty.prototype.searchExpressions = searchExpressions;
}());

/* global propertyGroupFactory, PropertyInterface */
/* exported ShapePathInterface */

var ShapePathInterface = (

  function () {
    return function pathInterfaceFactory(shape, view, propertyGroup) {
      var prop = view.sh;

      function interfaceFunction(val) {
        if (val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2) {
          return interfaceFunction.path;
        }
        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      prop.setGroupProperty(PropertyInterface('Path', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        path: {
          get: function () {
            if (prop.k) {
              prop.getValue();
            }
            return prop;
          },
        },
        shape: {
          get: function () {
            if (prop.k) {
              prop.getValue();
            }
            return prop;
          },
        },
        _name: { value: shape.nm },
        ix: { value: shape.ix },
        propertyIndex: { value: shape.ix },
        mn: { value: shape.mn },
        propertyGroup: { value: propertyGroup },
      });
      return interfaceFunction;
    };
  }()
);

/* exported propertyGroupFactory */

var propertyGroupFactory = (function () {
  return function (interfaceFunction, parentPropertyGroup) {
    return function (val) {
      val = val === undefined ? 1 : val;
      if (val <= 0) {
        return interfaceFunction;
      }
      return parentPropertyGroup(val - 1);
    };
  };
}());

/* exported PropertyInterface */

var PropertyInterface = (function () {
  return function (propertyName, propertyGroup) {
    var interfaceFunction = {
      _name: propertyName,
    };

    function _propertyGroup(val) {
      val = val === undefined ? 1 : val;
      if (val <= 0) {
        return interfaceFunction;
      }
      return propertyGroup(val - 1);
    }

    return _propertyGroup;
  };
}());

/* global ExpressionPropertyInterface, PropertyInterface, propertyGroupFactory, ShapePathInterface */
/* exported ShapeExpressionInterface */

var ShapeExpressionInterface = (function () {
  function iterateElements(shapes, view, propertyGroup) {
    var arr = [];
    var i;
    var len = shapes ? shapes.length : 0;
    for (i = 0; i < len; i += 1) {
      if (shapes[i].ty === 'gr') {
        arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'fl') {
        arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'st') {
        arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'tm') {
        arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'tr') {
        // arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
      } else if (shapes[i].ty === 'el') {
        arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'sr') {
        arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'sh') {
        arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rc') {
        arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rd') {
        arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rp') {
        arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'gf') {
        arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else {
        arr.push(defaultInterfaceFactory(shapes[i], view[i], propertyGroup));
      }
    }
    return arr;
  }

  function contentsInterfaceFactory(shape, view, propertyGroup) {
    var interfaces;
    var interfaceFunction = function _interfaceFunction(value) {
      var i = 0;
      var len = interfaces.length;
      while (i < len) {
        if (interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value) {
          return interfaces[i];
        }
        i += 1;
      }
      if (typeof value === 'number') {
        return interfaces[value - 1];
      }
      return null;
    };

    interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
    interfaceFunction.numProperties = interfaces.length;
    var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
    interfaceFunction.transform = transformInterface;
    interfaceFunction.propertyIndex = shape.cix;
    interfaceFunction._name = shape.nm;

    return interfaceFunction;
  }

  function groupInterfaceFactory(shape, view, propertyGroup) {
    var interfaceFunction = function _interfaceFunction(value) {
      switch (value) {
        case 'ADBE Vectors Group':
        case 'Contents':
        case 2:
          return interfaceFunction.content;
          // Not necessary for now. Keeping them here in case a new case appears
          // case 'ADBE Vector Transform Group':
          // case 3:
        default:
          return interfaceFunction.transform;
      }
    };
    interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var content = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
    var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
    interfaceFunction.content = content;
    interfaceFunction.transform = transformInterface;
    Object.defineProperty(interfaceFunction, '_name', {
      get: function () {
        return shape.nm;
      },
    });
    // interfaceFunction.content = interfaceFunction;
    interfaceFunction.numProperties = shape.np;
    interfaceFunction.propertyIndex = shape.ix;
    interfaceFunction.nm = shape.nm;
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function fillInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(val) {
      if (val === 'Color' || val === 'color') {
        return interfaceFunction.color;
      } if (val === 'Opacity' || val === 'opacity') {
        return interfaceFunction.opacity;
      }
      return null;
    }
    Object.defineProperties(interfaceFunction, {
      color: {
        get: ExpressionPropertyInterface(view.c),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.c.setGroupProperty(PropertyInterface('Color', propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
    return interfaceFunction;
  }

  function gradientFillInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(val) {
      if (val === 'Start Point' || val === 'start point') {
        return interfaceFunction.startPoint;
      }
      if (val === 'End Point' || val === 'end point') {
        return interfaceFunction.endPoint;
      }
      if (val === 'Opacity' || val === 'opacity') {
        return interfaceFunction.opacity;
      }
      return null;
    }
    Object.defineProperties(interfaceFunction, {
      startPoint: {
        get: ExpressionPropertyInterface(view.s),
      },
      endPoint: {
        get: ExpressionPropertyInterface(view.e),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      type: {
        get: function () {
          return 'a';
        },
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.s.setGroupProperty(PropertyInterface('Start Point', propertyGroup));
    view.e.setGroupProperty(PropertyInterface('End Point', propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
    return interfaceFunction;
  }
  function defaultInterfaceFactory() {
    function interfaceFunction() {
      return null;
    }
    return interfaceFunction;
  }

  function strokeInterfaceFactory(shape, view, propertyGroup) {
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);
    function addPropertyToDashOb(i) {
      Object.defineProperty(dashOb, shape.d[i].nm, {
        get: ExpressionPropertyInterface(view.d.dataProps[i].p),
      });
    }
    var i;
    var len = shape.d ? shape.d.length : 0;
    var dashOb = {};
    for (i = 0; i < len; i += 1) {
      addPropertyToDashOb(i);
      view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
    }

    function interfaceFunction(val) {
      if (val === 'Color' || val === 'color') {
        return interfaceFunction.color;
      } if (val === 'Opacity' || val === 'opacity') {
        return interfaceFunction.opacity;
      } if (val === 'Stroke Width' || val === 'stroke width') {
        return interfaceFunction.strokeWidth;
      }
      return null;
    }
    Object.defineProperties(interfaceFunction, {
      color: {
        get: ExpressionPropertyInterface(view.c),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      strokeWidth: {
        get: ExpressionPropertyInterface(view.w),
      },
      dash: {
        get: function () {
          return dashOb;
        },
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.c.setGroupProperty(PropertyInterface('Color', _propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    view.w.setGroupProperty(PropertyInterface('Stroke Width', _propertyGroup));
    return interfaceFunction;
  }

  function trimInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(val) {
      if (val === shape.e.ix || val === 'End' || val === 'end') {
        return interfaceFunction.end;
      }
      if (val === shape.s.ix) {
        return interfaceFunction.start;
      }
      if (val === shape.o.ix) {
        return interfaceFunction.offset;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    interfaceFunction.propertyIndex = shape.ix;

    view.s.setGroupProperty(PropertyInterface('Start', _propertyGroup));
    view.e.setGroupProperty(PropertyInterface('End', _propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
    interfaceFunction.propertyIndex = shape.ix;
    interfaceFunction.propertyGroup = propertyGroup;

    Object.defineProperties(interfaceFunction, {
      start: {
        get: ExpressionPropertyInterface(view.s),
      },
      end: {
        get: ExpressionPropertyInterface(view.e),
      },
      offset: {
        get: ExpressionPropertyInterface(view.o),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function transformInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.a.ix === value || value === 'Anchor Point') {
        return interfaceFunction.anchorPoint;
      }
      if (shape.o.ix === value || value === 'Opacity') {
        return interfaceFunction.opacity;
      }
      if (shape.p.ix === value || value === 'Position') {
        return interfaceFunction.position;
      }
      if (shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation') {
        return interfaceFunction.rotation;
      }
      if (shape.s.ix === value || value === 'Scale') {
        return interfaceFunction.scale;
      }
      if ((shape.sk && shape.sk.ix === value) || value === 'Skew') {
        return interfaceFunction.skew;
      }
      if ((shape.sa && shape.sa.ix === value) || value === 'Skew Axis') {
        return interfaceFunction.skewAxis;
      }
      return null;
    }
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    view.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    view.transform.mProps.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
    view.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', _propertyGroup));
    view.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', _propertyGroup));
    view.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
    if (view.transform.mProps.sk) {
      view.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', _propertyGroup));
      view.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', _propertyGroup));
    }
    view.transform.op.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    Object.defineProperties(interfaceFunction, {
      opacity: {
        get: ExpressionPropertyInterface(view.transform.mProps.o),
      },
      position: {
        get: ExpressionPropertyInterface(view.transform.mProps.p),
      },
      anchorPoint: {
        get: ExpressionPropertyInterface(view.transform.mProps.a),
      },
      scale: {
        get: ExpressionPropertyInterface(view.transform.mProps.s),
      },
      rotation: {
        get: ExpressionPropertyInterface(view.transform.mProps.r),
      },
      skew: {
        get: ExpressionPropertyInterface(view.transform.mProps.sk),
      },
      skewAxis: {
        get: ExpressionPropertyInterface(view.transform.mProps.sa),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.ty = 'tr';
    interfaceFunction.mn = shape.mn;
    interfaceFunction.propertyGroup = propertyGroup;
    return interfaceFunction;
  }

  function ellipseInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.p.ix === value) {
        return interfaceFunction.position;
      }
      if (shape.s.ix === value) {
        return interfaceFunction.size;
      }
      return null;
    }
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    interfaceFunction.propertyIndex = shape.ix;
    var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
    prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
    prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));

    Object.defineProperties(interfaceFunction, {
      size: {
        get: ExpressionPropertyInterface(prop.s),
      },
      position: {
        get: ExpressionPropertyInterface(prop.p),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function starInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.p.ix === value) {
        return interfaceFunction.position;
      }
      if (shape.r.ix === value) {
        return interfaceFunction.rotation;
      }
      if (shape.pt.ix === value) {
        return interfaceFunction.points;
      }
      if (shape.or.ix === value || value === 'ADBE Vector Star Outer Radius') {
        return interfaceFunction.outerRadius;
      }
      if (shape.os.ix === value) {
        return interfaceFunction.outerRoundness;
      }
      if (shape.ir && (shape.ir.ix === value || value === 'ADBE Vector Star Inner Radius')) {
        return interfaceFunction.innerRadius;
      }
      if (shape.is && shape.is.ix === value) {
        return interfaceFunction.innerRoundness;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
    interfaceFunction.propertyIndex = shape.ix;
    prop.or.setGroupProperty(PropertyInterface('Outer Radius', _propertyGroup));
    prop.os.setGroupProperty(PropertyInterface('Outer Roundness', _propertyGroup));
    prop.pt.setGroupProperty(PropertyInterface('Points', _propertyGroup));
    prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
    prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
    if (shape.ir) {
      prop.ir.setGroupProperty(PropertyInterface('Inner Radius', _propertyGroup));
      prop.is.setGroupProperty(PropertyInterface('Inner Roundness', _propertyGroup));
    }

    Object.defineProperties(interfaceFunction, {
      position: {
        get: ExpressionPropertyInterface(prop.p),
      },
      rotation: {
        get: ExpressionPropertyInterface(prop.r),
      },
      points: {
        get: ExpressionPropertyInterface(prop.pt),
      },
      outerRadius: {
        get: ExpressionPropertyInterface(prop.or),
      },
      outerRoundness: {
        get: ExpressionPropertyInterface(prop.os),
      },
      innerRadius: {
        get: ExpressionPropertyInterface(prop.ir),
      },
      innerRoundness: {
        get: ExpressionPropertyInterface(prop.is),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function rectInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.p.ix === value) {
        return interfaceFunction.position;
      }
      if (shape.r.ix === value) {
        return interfaceFunction.roundness;
      }
      if (shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size') {
        return interfaceFunction.size;
      }
      return null;
    }
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

    var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
    interfaceFunction.propertyIndex = shape.ix;
    prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
    prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
    prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

    Object.defineProperties(interfaceFunction, {
      position: {
        get: ExpressionPropertyInterface(prop.p),
      },
      roundness: {
        get: ExpressionPropertyInterface(prop.r),
      },
      size: {
        get: ExpressionPropertyInterface(prop.s),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function roundedInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.r.ix === value || value === 'Round Corners 1') {
        return interfaceFunction.radius;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var prop = view;
    interfaceFunction.propertyIndex = shape.ix;
    prop.rd.setGroupProperty(PropertyInterface('Radius', _propertyGroup));

    Object.defineProperties(interfaceFunction, {
      radius: {
        get: ExpressionPropertyInterface(prop.rd),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function repeaterInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.c.ix === value || value === 'Copies') {
        return interfaceFunction.copies;
      } if (shape.o.ix === value || value === 'Offset') {
        return interfaceFunction.offset;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var prop = view;
    interfaceFunction.propertyIndex = shape.ix;
    prop.c.setGroupProperty(PropertyInterface('Copies', _propertyGroup));
    prop.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
    Object.defineProperties(interfaceFunction, {
      copies: {
        get: ExpressionPropertyInterface(prop.c),
      },
      offset: {
        get: ExpressionPropertyInterface(prop.o),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  return function (shapes, view, propertyGroup) {
    var interfaces;
    function _interfaceFunction(value) {
      if (typeof value === 'number') {
        value = value === undefined ? 1 : value;
        if (value === 0) {
          return propertyGroup;
        }
        return interfaces[value - 1];
      }
      var i = 0;
      var len = interfaces.length;
      while (i < len) {
        if (interfaces[i]._name === value) {
          return interfaces[i];
        }
        i += 1;
      }
      return null;
    }
    function parentGroupWrapper() {
      return propertyGroup;
    }
    _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
    interfaces = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
    _interfaceFunction.numProperties = interfaces.length;
    _interfaceFunction._name = 'Contents';
    return _interfaceFunction;
  };
}());

/* exported TextExpressionInterface */

var TextExpressionInterface = (function () {
  return function (elem) {
    var _prevValue;
    var _sourceText;
    function _thisLayerFunction(name) {
      switch (name) {
        case 'ADBE Text Document':
          return _thisLayerFunction.sourceText;
        default:
          return null;
      }
    }
    Object.defineProperty(_thisLayerFunction, 'sourceText', {
      get: function () {
        elem.textProperty.getValue();
        var stringValue = elem.textProperty.currentData.t;
        if (stringValue !== _prevValue) {
          elem.textProperty.currentData.t = _prevValue;
          _sourceText = new String(stringValue); // eslint-disable-line no-new-wrappers
          // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
          _sourceText.value = stringValue || new String(stringValue); // eslint-disable-line no-new-wrappers
        }
        return _sourceText;
      },
    });
    return _thisLayerFunction;
  };
}());

/* global Matrix, MaskManagerInterface, TransformExpressionInterface, getDescriptor */
/* exported LayerExpressionInterface */

var LayerExpressionInterface = (function () {
  function getMatrix(time) {
    var toWorldMat = new Matrix();
    if (time !== undefined) {
      var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time);
      propMatrix.clone(toWorldMat);
    } else {
      var transformMat = this._elem.finalTransform.mProp;
      transformMat.applyToMatrix(toWorldMat);
    }
    return toWorldMat;
  }

  function toWorldVec(arr, time) {
    var toWorldMat = this.getMatrix(time);
    toWorldMat.props[12] = 0;
    toWorldMat.props[13] = 0;
    toWorldMat.props[14] = 0;
    return this.applyPoint(toWorldMat, arr);
  }

  function toWorld(arr, time) {
    var toWorldMat = this.getMatrix(time);
    return this.applyPoint(toWorldMat, arr);
  }

  function fromWorldVec(arr, time) {
    var toWorldMat = this.getMatrix(time);
    toWorldMat.props[12] = 0;
    toWorldMat.props[13] = 0;
    toWorldMat.props[14] = 0;
    return this.invertPoint(toWorldMat, arr);
  }

  function fromWorld(arr, time) {
    var toWorldMat = this.getMatrix(time);
    return this.invertPoint(toWorldMat, arr);
  }

  function applyPoint(matrix, arr) {
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var i;
      var len = this._elem.hierarchy.length;
      for (i = 0; i < len; i += 1) {
        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
      }
    }
    return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
  }

  function invertPoint(matrix, arr) {
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var i;
      var len = this._elem.hierarchy.length;
      for (i = 0; i < len; i += 1) {
        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
      }
    }
    return matrix.inversePoint(arr);
  }

  function fromComp(arr) {
    var toWorldMat = new Matrix();
    toWorldMat.reset();
    this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var i;
      var len = this._elem.hierarchy.length;
      for (i = 0; i < len; i += 1) {
        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
      }
      return toWorldMat.inversePoint(arr);
    }
    return toWorldMat.inversePoint(arr);
  }

  function sampleImage() {
    return [1, 1, 1, 1];
  }

  return function (elem) {
    var transformInterface;

    function _registerMaskInterface(maskManager) {
      _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
    }
    function _registerEffectsInterface(effects) {
      _thisLayerFunction.effect = effects;
    }

    function _thisLayerFunction(name) {
      switch (name) {
        case 'ADBE Root Vectors Group':
        case 'Contents':
        case 2:
          return _thisLayerFunction.shapeInterface;
        case 1:
        case 6:
        case 'Transform':
        case 'transform':
        case 'ADBE Transform Group':
          return transformInterface;
        case 4:
        case 'ADBE Effect Parade':
        case 'effects':
        case 'Effects':
          return _thisLayerFunction.effect;
        case 'ADBE Text Properties':
          return _thisLayerFunction.textInterface;
        default:
          return null;
      }
    }
    _thisLayerFunction.getMatrix = getMatrix;
    _thisLayerFunction.invertPoint = invertPoint;
    _thisLayerFunction.applyPoint = applyPoint;
    _thisLayerFunction.toWorld = toWorld;
    _thisLayerFunction.toWorldVec = toWorldVec;
    _thisLayerFunction.fromWorld = fromWorld;
    _thisLayerFunction.fromWorldVec = fromWorldVec;
    _thisLayerFunction.toComp = toWorld;
    _thisLayerFunction.fromComp = fromComp;
    _thisLayerFunction.sampleImage = sampleImage;
    _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
    _thisLayerFunction._elem = elem;
    transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
    var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
    Object.defineProperties(_thisLayerFunction, {
      hasParent: {
        get: function () {
          return elem.hierarchy.length;
        },
      },
      parent: {
        get: function () {
          return elem.hierarchy[0].layerInterface;
        },
      },
      rotation: getDescriptor(transformInterface, 'rotation'),
      scale: getDescriptor(transformInterface, 'scale'),
      position: getDescriptor(transformInterface, 'position'),
      opacity: getDescriptor(transformInterface, 'opacity'),
      anchorPoint: anchorPointDescriptor,
      anchor_point: anchorPointDescriptor,
      transform: {
        get: function () {
          return transformInterface;
        },
      },
      active: {
        get: function () {
          return elem.isInRange;
        },
      },
    });

    _thisLayerFunction.startTime = elem.data.st;
    _thisLayerFunction.index = elem.data.ind;
    _thisLayerFunction.source = elem.data.refId;
    _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
    _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
    _thisLayerFunction.inPoint = elem.data.ip / elem.comp.globalData.frameRate;
    _thisLayerFunction.outPoint = elem.data.op / elem.comp.globalData.frameRate;
    _thisLayerFunction._name = elem.data.nm;

    _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
    _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
    return _thisLayerFunction;
  };
}());

/* global */
/* exported FootageInterface */

var FootageInterface = (function () {
  var outlineInterfaceFactory = (function (elem) {
    var currentPropertyName = '';
    var currentProperty = elem.getFootageData();
    function init() {
      currentPropertyName = '';
      currentProperty = elem.getFootageData();
      return searchProperty;
    }
    function searchProperty(value) {
      if (currentProperty[value]) {
        currentPropertyName = value;
        currentProperty = currentProperty[value];
        if (typeof currentProperty === 'object') {
          return searchProperty;
        }
        return currentProperty;
      }
      var propertyNameIndex = value.indexOf(currentPropertyName);
      if (propertyNameIndex !== -1) {
        var index = parseInt(value.substr(propertyNameIndex + currentPropertyName.length), 10);
        currentProperty = currentProperty[index];
        if (typeof currentProperty === 'object') {
          return searchProperty;
        }
        return currentProperty;
      }
      return '';
    }
    return init;
  });

  var dataInterfaceFactory = function (elem) {
    function interfaceFunction(value) {
      if (value === 'Outline') {
        return interfaceFunction.outlineInterface();
      }
      return null;
    }

    interfaceFunction._name = 'Outline';
    interfaceFunction.outlineInterface = outlineInterfaceFactory(elem);
    return interfaceFunction;
  };

  return function (elem) {
    function _interfaceFunction(value) {
      if (value === 'Data') {
        return _interfaceFunction.dataInterface;
      }
      return null;
    }

    _interfaceFunction._name = 'Data';
    _interfaceFunction.dataInterface = dataInterfaceFactory(elem);
    return _interfaceFunction;
  };
}());

/* exported CompExpressionInterface */

var CompExpressionInterface = (function () {
  return function (comp) {
    function _thisLayerFunction(name) {
      var i = 0;
      var len = comp.layers.length;
      while (i < len) {
        if (comp.layers[i].nm === name || comp.layers[i].ind === name) {
          return comp.elements[i].layerInterface;
        }
        i += 1;
      }
      return null;
      // return {active:false};
    }
    Object.defineProperty(_thisLayerFunction, '_name', { value: comp.data.nm });
    _thisLayerFunction.layer = _thisLayerFunction;
    _thisLayerFunction.pixelAspect = 1;
    _thisLayerFunction.height = comp.data.h || comp.globalData.compSize.h;
    _thisLayerFunction.width = comp.data.w || comp.globalData.compSize.w;
    _thisLayerFunction.pixelAspect = 1;
    _thisLayerFunction.frameDuration = 1 / comp.globalData.frameRate;
    _thisLayerFunction.displayStartTime = 0;
    _thisLayerFunction.numLayers = comp.layers.length;
    return _thisLayerFunction;
  };
}());

/* global ExpressionPropertyInterface */
/* exported TransformExpressionInterface */

var TransformExpressionInterface = (function () {
  return function (transform) {
    function _thisFunction(name) {
      switch (name) {
        case 'scale':
        case 'Scale':
        case 'ADBE Scale':
        case 6:
          return _thisFunction.scale;
        case 'rotation':
        case 'Rotation':
        case 'ADBE Rotation':
        case 'ADBE Rotate Z':
        case 10:
          return _thisFunction.rotation;
        case 'ADBE Rotate X':
          return _thisFunction.xRotation;
        case 'ADBE Rotate Y':
          return _thisFunction.yRotation;
        case 'position':
        case 'Position':
        case 'ADBE Position':
        case 2:
          return _thisFunction.position;
        case 'ADBE Position_0':
          return _thisFunction.xPosition;
        case 'ADBE Position_1':
          return _thisFunction.yPosition;
        case 'ADBE Position_2':
          return _thisFunction.zPosition;
        case 'anchorPoint':
        case 'AnchorPoint':
        case 'Anchor Point':
        case 'ADBE AnchorPoint':
        case 1:
          return _thisFunction.anchorPoint;
        case 'opacity':
        case 'Opacity':
        case 11:
          return _thisFunction.opacity;
        default:
          return null;
      }
    }
    Object.defineProperty(_thisFunction, 'rotation', {
      get: ExpressionPropertyInterface(transform.r || transform.rz),
    });

    Object.defineProperty(_thisFunction, 'zRotation', {
      get: ExpressionPropertyInterface(transform.rz || transform.r),
    });

    Object.defineProperty(_thisFunction, 'xRotation', {
      get: ExpressionPropertyInterface(transform.rx),
    });

    Object.defineProperty(_thisFunction, 'yRotation', {
      get: ExpressionPropertyInterface(transform.ry),
    });
    Object.defineProperty(_thisFunction, 'scale', {
      get: ExpressionPropertyInterface(transform.s),
    });
    var _px;
    var _py;
    var _pz;
    var _transformFactory;
    if (transform.p) {
      _transformFactory = ExpressionPropertyInterface(transform.p);
    } else {
      _px = ExpressionPropertyInterface(transform.px);
      _py = ExpressionPropertyInterface(transform.py);
      if (transform.pz) {
        _pz = ExpressionPropertyInterface(transform.pz);
      }
    }
    Object.defineProperty(_thisFunction, 'position', {
      get: function () {
        if (transform.p) {
          return _transformFactory();
        }
        return [
          _px(),
          _py(),
          _pz ? _pz() : 0];
      },
    });

    Object.defineProperty(_thisFunction, 'xPosition', {
      get: ExpressionPropertyInterface(transform.px),
    });

    Object.defineProperty(_thisFunction, 'yPosition', {
      get: ExpressionPropertyInterface(transform.py),
    });

    Object.defineProperty(_thisFunction, 'zPosition', {
      get: ExpressionPropertyInterface(transform.pz),
    });

    Object.defineProperty(_thisFunction, 'anchorPoint', {
      get: ExpressionPropertyInterface(transform.a),
    });

    Object.defineProperty(_thisFunction, 'opacity', {
      get: ExpressionPropertyInterface(transform.o),
    });

    Object.defineProperty(_thisFunction, 'skew', {
      get: ExpressionPropertyInterface(transform.sk),
    });

    Object.defineProperty(_thisFunction, 'skewAxis', {
      get: ExpressionPropertyInterface(transform.sa),
    });

    Object.defineProperty(_thisFunction, 'orientation', {
      get: ExpressionPropertyInterface(transform.or),
    });

    return _thisFunction;
  };
}());

/* exported ProjectInterface */

var ProjectInterface = (function () {
  function registerComposition(comp) {
    this.compositions.push(comp);
  }

  return function () {
    function _thisProjectFunction(name) {
      var i = 0;
      var len = this.compositions.length;
      while (i < len) {
        if (this.compositions[i].data && this.compositions[i].data.nm === name) {
          if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
            this.compositions[i].prepareFrame(this.currentFrame);
          }
          return this.compositions[i].compInterface;
        }
        i += 1;
      }
      return null;
    }

    _thisProjectFunction.compositions = [];
    _thisProjectFunction.currentFrame = 0;

    _thisProjectFunction.registerComposition = registerComposition;

    return _thisProjectFunction;
  };
}());

/* global propertyGroupFactory, ExpressionPropertyInterface, PropertyInterface */
/* exported EffectsExpressionInterface */

var EffectsExpressionInterface = (function () {
  var ob = {
    createEffectsInterface: createEffectsInterface,
  };

  function createEffectsInterface(elem, propertyGroup) {
    if (elem.effectsManager) {
      var effectElements = [];
      var effectsData = elem.data.ef;
      var i;
      var len = elem.effectsManager.effectElements.length;
      for (i = 0; i < len; i += 1) {
        effectElements.push(createGroupInterface(effectsData[i], elem.effectsManager.effectElements[i], propertyGroup, elem));
      }

      var effects = elem.data.ef || [];
      var groupInterface = function (name) {
        i = 0;
        len = effects.length;
        while (i < len) {
          if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
            return effectElements[i];
          }
          i += 1;
        }
        return null;
      };
      Object.defineProperty(groupInterface, 'numProperties', {
        get: function () {
          return effects.length;
        },
      });
      return groupInterface;
    }
    return null;
  }

  function createGroupInterface(data, elements, propertyGroup, elem) {
    function groupInterface(name) {
      var effects = data.ef;
      var i = 0;
      var len = effects.length;
      while (i < len) {
        if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
          if (effects[i].ty === 5) {
            return effectElements[i];
          }
          return effectElements[i]();
        }
        i += 1;
      }
      throw new Error();
    }
    var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);

    var effectElements = [];
    var i;
    var len = data.ef.length;
    for (i = 0; i < len; i += 1) {
      if (data.ef[i].ty === 5) {
        effectElements.push(createGroupInterface(data.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem));
      } else {
        effectElements.push(createValueInterface(elements.effectElements[i], data.ef[i].ty, elem, _propertyGroup));
      }
    }

    if (data.mn === 'ADBE Color Control') {
      Object.defineProperty(groupInterface, 'color', {
        get: function () {
          return effectElements[0]();
        },
      });
    }
    Object.defineProperties(groupInterface, {
      numProperties: {
        get: function () {
          return data.np;
        },
      },
      _name: { value: data.nm },
      propertyGroup: { value: _propertyGroup },
    });
    groupInterface.enabled = data.en !== 0;
    groupInterface.active = groupInterface.enabled;
    return groupInterface;
  }

  function createValueInterface(element, type, elem, propertyGroup) {
    var expressionProperty = ExpressionPropertyInterface(element.p);
    function interfaceFunction() {
      if (type === 10) {
        return elem.comp.compInterface(element.p.v);
      }
      return expressionProperty();
    }

    if (element.p.setGroupProperty) {
      element.p.setGroupProperty(PropertyInterface('', propertyGroup));
    }

    return interfaceFunction;
  }

  return ob;
}());

/* global createSizedArray */
/* exported MaskManagerInterface */

var MaskManagerInterface = (function () {
  function MaskInterface(mask, data) {
    this._mask = mask;
    this._data = data;
  }
  Object.defineProperty(MaskInterface.prototype, 'maskPath', {
    get: function () {
      if (this._mask.prop.k) {
        this._mask.prop.getValue();
      }
      return this._mask.prop;
    },
  });
  Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {
    get: function () {
      if (this._mask.op.k) {
        this._mask.op.getValue();
      }
      return this._mask.op.v * 100;
    },
  });

  var MaskManager = function (maskManager) {
    var _masksInterfaces = createSizedArray(maskManager.viewData.length);
    var i;
    var len = maskManager.viewData.length;
    for (i = 0; i < len; i += 1) {
      _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
    }

    var maskFunction = function (name) {
      i = 0;
      while (i < len) {
        if (maskManager.masksProperties[i].nm === name) {
          return _masksInterfaces[i];
        }
        i += 1;
      }
      return null;
    };
    return maskFunction;
  };
  return MaskManager;
}());

/* global createTypedArray */
/* exported ExpressionPropertyInterface */

var ExpressionPropertyInterface = (function () {
  var defaultUnidimensionalValue = { pv: 0, v: 0, mult: 1 };
  var defaultMultidimensionalValue = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };

  function completeProperty(expressionValue, property, type) {
    Object.defineProperty(expressionValue, 'velocity', {
      get: function () {
        return property.getVelocityAtTime(property.comp.currentFrame);
      },
    });
    expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;
    expressionValue.key = function (pos) {
      if (!expressionValue.numKeys) {
        return 0;
      }
      var value = '';
      if ('s' in property.keyframes[pos - 1]) {
        value = property.keyframes[pos - 1].s;
      } else if ('e' in property.keyframes[pos - 2]) {
        value = property.keyframes[pos - 2].e;
      } else {
        value = property.keyframes[pos - 2].s;
      }
      var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value); // eslint-disable-line no-new-wrappers
      valueProp.time = property.keyframes[pos - 1].t / property.elem.comp.globalData.frameRate;
      valueProp.value = type === 'unidimensional' ? value[0] : value;
      return valueProp;
    };
    expressionValue.valueAtTime = property.getValueAtTime;
    expressionValue.speedAtTime = property.getSpeedAtTime;
    expressionValue.velocityAtTime = property.getVelocityAtTime;
    expressionValue.propertyGroup = property.propertyGroup;
  }

  function UnidimensionalPropertyInterface(property) {
    if (!property || !('pv' in property)) {
      property = defaultUnidimensionalValue;
    }
    var mult = 1 / property.mult;
    var val = property.pv * mult;
    var expressionValue = new Number(val); // eslint-disable-line no-new-wrappers
    expressionValue.value = val;
    completeProperty(expressionValue, property, 'unidimensional');

    return function () {
      if (property.k) {
        property.getValue();
      }
      val = property.v * mult;
      if (expressionValue.value !== val) {
        expressionValue = new Number(val); // eslint-disable-line no-new-wrappers
        expressionValue.value = val;
        completeProperty(expressionValue, property, 'unidimensional');
      }
      return expressionValue;
    };
  }

  function MultidimensionalPropertyInterface(property) {
    if (!property || !('pv' in property)) {
      property = defaultMultidimensionalValue;
    }
    var mult = 1 / property.mult;
    var len = (property.data && property.data.l) || property.pv.length;
    var expressionValue = createTypedArray('float32', len);
    var arrValue = createTypedArray('float32', len);
    expressionValue.value = arrValue;
    completeProperty(expressionValue, property, 'multidimensional');

    return function () {
      if (property.k) {
        property.getValue();
      }
      for (var i = 0; i < len; i += 1) {
        arrValue[i] = property.v[i] * mult;
        expressionValue[i] = arrValue[i];
      }
      return expressionValue;
    };
  }

  // TODO: try to avoid using this getter
  function defaultGetter() {
    return defaultUnidimensionalValue;
  }

  return function (property) {
    if (!property) {
      return defaultGetter;
    } if (property.propType === 'unidimensional') {
      return UnidimensionalPropertyInterface(property);
    }
    return MultidimensionalPropertyInterface(property);
  };
}());

/* global expressionHelpers, TextSelectorProp, ExpressionManager */
/* exported TextExpressionSelectorPropFactory */

var TextExpressionSelectorPropFactory = (function () { // eslint-disable-line no-unused-vars
  function getValueProxy(index, total) {
    this.textIndex = index + 1;
    this.textTotal = total;
    this.v = this.getValue() * this.mult;
    return this.v;
  }

  return function (elem, data) {
    this.pv = 1;
    this.comp = elem.comp;
    this.elem = elem;
    this.mult = 0.01;
    this.propType = 'textSelector';
    this.textTotal = data.totalChars;
    this.selectorValue = 100;
    this.lastValue = [1, 1, 1];
    this.k = true;
    this.x = true;
    this.getValue = ExpressionManager.initiateExpression.bind(this)(elem, data, this);
    this.getMult = getValueProxy;
    this.getVelocityAtTime = expressionHelpers.getVelocityAtTime;
    if (this.kf) {
      this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this);
    } else {
      this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this);
    }
    this.setGroupProperty = expressionHelpers.setGroupProperty;
  };
}());

var propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
TextSelectorProp.getTextSelectorProp = function (elem, data, arr) {
  if (data.t === 1) {
    return new TextExpressionSelectorPropFactory(elem, data, arr); // eslint-disable-line no-undef
  }
  return propertyGetTextProp(elem, data, arr);
};

/* global PropertyFactory */
/* exported SliderEffect, AngleEffect, ColorEffect, PointEffect, LayerIndexEffect, MaskIndexEffect, CheckboxEffect, NoValueEffect */

function SliderEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function AngleEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function ColorEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
}
function PointEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
}
function LayerIndexEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function MaskIndexEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function CheckboxEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function NoValueEffect() {
  this.p = {};
}

/* global extendPrototype, SliderEffect, AngleEffect, ColorEffect, PointEffect, CheckboxEffect, LayerIndexEffect,
MaskIndexEffect, NoValueEffect, DynamicPropertyContainer */

function EffectsManager(data, element) {
  var effects = data.ef || [];
  this.effectElements = [];
  var i;
  var len = effects.length;
  var effectItem;
  for (i = 0; i < len; i += 1) {
    effectItem = new GroupEffect(effects[i], element);
    this.effectElements.push(effectItem);
  }
}

function GroupEffect(data, element) {
  this.init(data, element);
}

extendPrototype([DynamicPropertyContainer], GroupEffect);

GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

GroupEffect.prototype.init = function (data, element) {
  this.data = data;
  this.effectElements = [];
  this.initDynamicPropertyContainer(element);
  var i;
  var len = this.data.ef.length;
  var eff;
  var effects = this.data.ef;
  for (i = 0; i < len; i += 1) {
    eff = null;
    switch (effects[i].ty) {
      case 0:
        eff = new SliderEffect(effects[i], element, this);
        break;
      case 1:
        eff = new AngleEffect(effects[i], element, this);
        break;
      case 2:
        eff = new ColorEffect(effects[i], element, this);
        break;
      case 3:
        eff = new PointEffect(effects[i], element, this);
        break;
      case 4:
      case 7:
        eff = new CheckboxEffect(effects[i], element, this);
        break;
      case 10:
        eff = new LayerIndexEffect(effects[i], element, this);
        break;
      case 11:
        eff = new MaskIndexEffect(effects[i], element, this);
        break;
      case 5:
        eff = new EffectsManager(effects[i], element, this);
        break;
        // case 6:
      default:
        eff = new NoValueEffect(effects[i], element, this);
        break;
    }
    if (eff) {
      this.effectElements.push(eff);
    }
  }
};


var lottie = {};

function setLocationHref(href) {
  locationHref = href;
}

function searchAnimations() {
  if (standalone === true) {
    animationManager.searchAnimations(animationData, standalone, renderer);
  } else {
    animationManager.searchAnimations();
  }
}

function setSubframeRendering(flag) {
  subframeEnabled = flag;
}

function setIDPrefix(prefix) {
  idPrefix = prefix;
}

function loadAnimation(params) {
  if (standalone === true) {
    params.animationData = JSON.parse(animationData);
  }
  return animationManager.loadAnimation(params);
}

function setQuality(value) {
  if (typeof value === 'string') {
    switch (value) {
      case 'high':
        defaultCurveSegments = 200;
        break;
      default:
      case 'medium':
        defaultCurveSegments = 50;
        break;
      case 'low':
        defaultCurveSegments = 10;
        break;
    }
  } else if (!isNaN(value) && value > 1) {
    defaultCurveSegments = value;
  }
  if (defaultCurveSegments >= 50) {
    roundValues(false);
  } else {
    roundValues(true);
  }
}

function inBrowser() {
  return typeof navigator !== 'undefined';
}

function installPlugin(type, plugin) {
  if (type === 'expressions') {
    expressionsPlugin = plugin;
  }
}

function getFactory(name) {
  switch (name) {
    case 'propertyFactory':
      return PropertyFactory;
    case 'shapePropertyFactory':
      return ShapePropertyFactory;
    case 'matrix':
      return Matrix;
    default:
      return null;
  }
}

lottie.play = animationManager.play;
lottie.pause = animationManager.pause;
lottie.setLocationHref = setLocationHref;
lottie.togglePause = animationManager.togglePause;
lottie.setSpeed = animationManager.setSpeed;
lottie.setDirection = animationManager.setDirection;
lottie.stop = animationManager.stop;
lottie.searchAnimations = searchAnimations;
lottie.registerAnimation = animationManager.registerAnimation;
lottie.loadAnimation = loadAnimation;
lottie.setSubframeRendering = setSubframeRendering;
lottie.resize = animationManager.resize;
// lottie.start = start;
lottie.goToAndStop = animationManager.goToAndStop;
lottie.destroy = animationManager.destroy;
lottie.setQuality = setQuality;
lottie.inBrowser = inBrowser;
lottie.installPlugin = installPlugin;
lottie.freeze = animationManager.freeze;
lottie.unfreeze = animationManager.unfreeze;
lottie.setVolume = animationManager.setVolume;
lottie.mute = animationManager.mute;
lottie.unmute = animationManager.unmute;
lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
lottie.setIDPrefix = setIDPrefix;
lottie.__getFactory = getFactory;
lottie.version = '5.7.14';

function checkReady() {
  if (document.readyState === 'complete') {
    clearInterval(readyStateCheckInterval);
    searchAnimations();
  }
}

function getQueryVariable(variable) {
  var vars = queryString.split('&');
  for (var i = 0; i < vars.length; i += 1) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) { // eslint-disable-line eqeqeq
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}
var standalone = '__[STANDALONE]__';
var animationData = '__[ANIMATIONDATA]__';
var renderer = '';
var queryString;
if (standalone) {
  var scripts = document.getElementsByTagName('script');
  var index = scripts.length - 1;
  var myScript = scripts[index] || {
    src: '',
  };
  queryString = myScript.src.replace(/^[^\?]+\??/, ''); // eslint-disable-line no-useless-escape
  renderer = getQueryVariable('renderer');
}
var readyStateCheckInterval = setInterval(checkReady, 100);

return lottie;
}));

/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(6283),m=__webpack_require__(4852),r=__webpack_require__(3840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}__webpack_unused_export__=vk;exports.createPortal=uk;
__webpack_unused_export__=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};__webpack_unused_export__=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};__webpack_unused_export__=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
__webpack_unused_export__=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};__webpack_unused_export__=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};__webpack_unused_export__=Wj;__webpack_unused_export__=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
__webpack_unused_export__=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};__webpack_unused_export__="17.0.1";


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map