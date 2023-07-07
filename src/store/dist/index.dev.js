"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _heroes = _interopRequireDefault(require("../reducers/heroes"));

var _filters = _interopRequireDefault(require("../reducers/filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  heroes: _heroes["default"],
  filters: _filters["default"]
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var _default = store;
exports["default"] = _default;