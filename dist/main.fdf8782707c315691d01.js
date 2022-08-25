/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://thinknetika_js_course/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _images_pieces_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pieces.png */ \"./src/images/pieces.png\");\n/* harmony import */ var _js_view_components_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/view_components/game_view */ \"./src/js/view_components/game_view.js\");\n\n\n\n\nconst gameView = new _js_view_components_game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\n//# sourceURL=webpack://thinknetika_js_course/./src/index.js?");

/***/ }),

/***/ "./src/js/chess_engine/constants/colors.js":
/*!*************************************************!*\
  !*** ./src/js/chess_engine/constants/colors.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COLORS\": () => (/* binding */ COLORS)\n/* harmony export */ });\nconst COLORS = {\n    WHITE: 'white',\n    BLACK: 'black'\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/constants/colors.js?");

/***/ }),

/***/ "./src/js/chess_engine/constants/states.js":
/*!*************************************************!*\
  !*** ./src/js/chess_engine/constants/states.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATES\": () => (/* binding */ STATES)\n/* harmony export */ });\nconst STATES = {\n    WHITE_TURN: 'Ход белых',\n    BLACK_TURN: 'Ход черных',\n    WHITE_WINS: 'Белые победили',\n    BLACK_WINS: 'Черные победили'\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/constants/states.js?");

/***/ }),

/***/ "./src/js/chess_engine/desk.js":
/*!*************************************!*\
  !*** ./src/js/chess_engine/desk.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Desk)\n/* harmony export */ });\n/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figures */ \"./src/js/chess_engine/figures.js\");\n/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/colors */ \"./src/js/chess_engine/constants/colors.js\");\n\n\n\nclass Desk {\n    _coords = {}\n\n    /** @type { Pawn } */\n    _evolvePawn = null\n\n    constructor() {\n        // генерируем координаты\n        let coords = {}\n\n        Desk.x.forEach(function(x) {\n            return Desk.y.forEach(function(y) {\n                return coords[`${x}${y}`] = null\n            })\n        })\n\n        // генерируем фигуры на доске\n        // белые\n        coords['A1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Rook(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'A1')\n        coords['B1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Horse(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'B1')\n        coords['C1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Bishop(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'C1')\n        coords['D1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Queen(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'D1')\n        coords['E1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.King(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'E1')\n        coords['F1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Bishop(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'F1')\n        coords['G1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Horse(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'G1')\n        coords['H1'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Rook(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, 'H1')\n\n        // белые\n        for (let i = 0; i < Desk.x.length; i++) {\n            coords[`${Desk.x[i]}2`] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Pawn(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.WHITE, this, `${Desk.x[i]}2`)\n        }\n        \n        // черные\n        for (let i = 0; i < Desk.x.length; i++) {\n            coords[`${Desk.x[i]}7`] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Pawn(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, `${Desk.x[i]}7`)\n        }\n        coords['A8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Rook(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'A8'),\n        coords['B8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Horse(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'B8'),\n        coords['C8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Bishop(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'C8'),\n        coords['D8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Queen(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'D8'),\n        coords['E8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.King(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'E8'),\n        coords['F8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Bishop(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'F8'),\n        coords['G8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Horse(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'G8'),\n        coords['H8'] = new _figures__WEBPACK_IMPORTED_MODULE_0__.Rook(_constants_colors__WEBPACK_IMPORTED_MODULE_1__.COLORS.BLACK, this, 'H8')\n\n        this._coords = coords\n    }\n\n    static get y() { return ['1', '2', '3', '4', '5', '6', '7', '8'] }\n    static get x() { return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }\n\n    get coords() { return this._coords }\n\n    canMove(from, to) {\n        return this._coords[from].moves().includes(to)\n    }\n\n    move(from, to) {\n        if (!this.canMove(from, to)) throw Error('Ход невозможен!')\n\n        const figure = this._coords[from]\n        let killedFigure = this._coords[to]\n\n        figure.move(to)\n        this._coords[to] = figure\n        this._coords[from] = null\n\n        if (figure.type() === 'pawn' && figure.canEvolve()) this._evolvePawn = figure\n\n        return killedFigure\n    }\n\n    canEvolvePawn() {\n        return this._evolvePawn !== null\n    }\n\n    /**\n     * @param {string} type \n     */\n    changePawn(type) {\n        let newFigure = null\n        switch(type) {\n            case 'rook':\n                newFigure = new _figures__WEBPACK_IMPORTED_MODULE_0__.Rook(this._evolvePawn.color, this, this._evolvePawn.cell)\n                break\n            case 'bishop':\n                newFigure = new _figures__WEBPACK_IMPORTED_MODULE_0__.Bishop(this._evolvePawn.color, this, this._evolvePawn.cell)\n                break\n            case 'horse':\n                newFigure = new _figures__WEBPACK_IMPORTED_MODULE_0__.Horse(this._evolvePawn.color, this, this._evolvePawn.cell)\n                break\n            case 'queen':\n                newFigure = new _figures__WEBPACK_IMPORTED_MODULE_0__.Queen(this._evolvePawn.color, this, this._evolvePawn.cell)\n                break\n        }\n\n        this._coords[this._evolvePawn.cell] = newFigure\n        this._evolvePawn = null\n\n        return newFigure\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/desk.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures.js":
/*!****************************************!*\
  !*** ./src/js/chess_engine/figures.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bishop\": () => (/* reexport safe */ _figures_bishop__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Horse\": () => (/* reexport safe */ _figures_horse__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"King\": () => (/* reexport safe */ _figures_king__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"Pawn\": () => (/* reexport safe */ _figures_pawn__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Queen\": () => (/* reexport safe */ _figures_queen__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"Rook\": () => (/* reexport safe */ _figures_rook__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _figures_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figures/pawn */ \"./src/js/chess_engine/figures/pawn.js\");\n/* harmony import */ var _figures_horse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figures/horse */ \"./src/js/chess_engine/figures/horse.js\");\n/* harmony import */ var _figures_bishop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figures/bishop */ \"./src/js/chess_engine/figures/bishop.js\");\n/* harmony import */ var _figures_rook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figures/rook */ \"./src/js/chess_engine/figures/rook.js\");\n/* harmony import */ var _figures_queen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./figures/queen */ \"./src/js/chess_engine/figures/queen.js\");\n/* harmony import */ var _figures_king__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./figures/king */ \"./src/js/chess_engine/figures/king.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/bishop.js":
/*!***********************************************!*\
  !*** ./src/js/chess_engine/figures/bishop.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bishop)\n/* harmony export */ });\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../desk */ \"./src/js/chess_engine/desk.js\");\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figure */ \"./src/js/chess_engine/figures/figure.js\");\n\n\n\nclass Bishop extends _figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(color, desk, cell) {\n        super(color, desk, cell)\n    }\n\n    moves() {\n        return this.movesXY()\n    }\n\n    type() {\n        return 'bishop'\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/bishop.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/figure.js":
/*!***********************************************!*\
  !*** ./src/js/chess_engine/figures/figure.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Figure)\n/* harmony export */ });\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../desk */ \"./src/js/chess_engine/desk.js\");\n\n\nclass Figure {\n    constructor(color, desk, cell) {\n        this._color = color\n        this._desk = desk\n        this._cell = cell\n    }\n\n    _color = null\n    _desk = null\n    _cell = null\n\n    get color() { return this._color }\n    get desk() { return this._desk }\n    get cell() { return this._cell }\n\n    move(to) {\n        this._cell = to\n    }\n\n    moves() {\n        throw Error('Function `moves` is not implemented')\n    }\n\n    movesY() {\n        const coords = []\n        const cellX = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x.indexOf(this._cell[0])\n        const cellY = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this._cell[1])\n\n        // посчитаем ходы по Y\n        //верх\n        for(let i = cellY + 1; i < _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.length; i++) {\n            let c = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`\n            if (this.desk.coords[c] === null) {\n                coords.push(c)\n            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {\n                coords.push(c)\n                break\n            } else {\n                break\n            }\n        }\n\n        //вниз\n        for(let i = cellY - 1; i >= 0; i--) {\n            let c = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`\n            if (this.desk.coords[c] === null) {\n                coords.push(c)\n            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {\n                coords.push(c)\n                break\n            } else {\n                break\n            }\n        }\n\n        return coords\n    }\n\n    movesX() {\n        const coords = []\n        const cellX = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x.indexOf(this._cell[0])\n        const cellY = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this._cell[1])\n\n        // посчитаем ходы по X\n        // вправо\n        for(let i = cellX + 1; i < _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x.length; i++) {\n            let c = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[i]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[cellY]}`\n            if (this.desk.coords[c] === null) {\n                coords.push(c)\n            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {\n                coords.push(c)\n                break\n            } else {\n                break\n            }\n        }\n\n        // влево\n        for(let i = cellX - 1; i >= 0; i--) {\n            let c = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[i]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[cellY]}`\n            if (this.desk.coords[c] === null) {\n                coords.push(c)\n            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {\n                coords.push(c)\n                break\n            } else {\n                break\n            }\n        }\n\n        return coords\n    }\n\n    movesXY() {\n        const coords = []\n        const cellX = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x.indexOf(this._cell[0])\n        const cellY = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this._cell[1])\n        let canLeft = true;\n        let canRight = true;\n\n        // диагональ вверх\n        for (let i = cellY + 1, j = 1; i < _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.length; i++, j++) {\n            let cLeft = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`\n            let cRight = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`\n\n            if (canLeft) {\n                if (this.desk.coords[cLeft] === null) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                } else if (this.desk.coords[cLeft] && this.desk.coords[cLeft].color !== this.color) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                    canLeft = false\n                } else {\n                    canLeft = false\n                }\n            }\n\n            if (canRight) {\n                if (this.desk.coords[cRight] === null) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                } else if (this.desk.coords[cRight] && this.desk.coords[cRight].color !== this.color) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                    canRight = false\n                } else {\n                    canRight = false\n                }\n            }\n        }\n\n        // диагональ вниз\n        canLeft = true;\n        canRight = true;\n\n        for (let i = cellY - 1, j = 1; i >= 0; i--, j++) {\n            let cLeft = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`\n            let cRight = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`\n\n            if (canLeft) {\n                if (this.desk.coords[cLeft] === null) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                } else if (this.desk.coords[cLeft] && this.desk.coords[cLeft].color !== this.color) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                    canLeft = false\n                } else {\n                    canLeft = false\n                }\n            }\n\n            if (canRight) {\n                if (this.desk.coords[cRight] === null) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                } else if (this.desk.coords[cRight] && this.desk.coords[cRight].color !== this.color) {\n                    coords.push(`${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + j]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[i]}`)\n                    canRight = false\n                } else {\n                    canRight = false\n                }\n            }\n        }\n\n        return coords\n    }\n\n    type() {\n        throw Error('Not implemented')\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/figure.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/horse.js":
/*!**********************************************!*\
  !*** ./src/js/chess_engine/figures/horse.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Horse)\n/* harmony export */ });\n/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/colors */ \"./src/js/chess_engine/constants/colors.js\");\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../desk */ \"./src/js/chess_engine/desk.js\");\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figure */ \"./src/js/chess_engine/figures/figure.js\");\n\n\n\n\nclass Horse extends _figure__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(color, desk, cell) {\n        super(color, desk, cell)\n    }\n\n    moves() {\n        const coords = []\n        const cellX = _desk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x.indexOf(this.cell[0])\n        const cellY = _desk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y.indexOf(this.cell[1])\n\n        // ходы вверх\n        for (let i = -2; i <= 2; i++) {\n            for (let j = -2; j <= 2; j++) {\n                if (\n                    (([-1, 1].includes(i)) && ([-2, 2].includes(j))) ||\n                    (([-2, 2].includes(i)) && ([-1,1].includes(j)))\n                ) {\n                    let c = `${_desk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].x[cellX + i]}${_desk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].y[cellY + j]}`\n                    \n                    if (\n                        this.desk.coords[c] === null ||\n                        (this.desk.coords[c] && this.desk.coords[c].color != this.color)\n                    ) {\n                        coords.push(c)\n                    }\n\n                }\n            }\n        }\n\n        return coords\n    }\n\n    type() {\n        return 'horse'\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/horse.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/king.js":
/*!*********************************************!*\
  !*** ./src/js/chess_engine/figures/king.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ King)\n/* harmony export */ });\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../desk */ \"./src/js/chess_engine/desk.js\");\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figure */ \"./src/js/chess_engine/figures/figure.js\");\n\n\n\nclass King extends _figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(color, desk, cell) {\n        super(color, desk, cell)\n    }\n\n    moves() {\n        const coords = []\n        const cellX = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x.indexOf(this.cell[0])\n        const cellY = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this.cell[1])\n\n        for (let x = -1; x <= 1; x++) {\n            for (let y = -1; y <= 1; y++) {\n                if (x === 0 && y === 0) continue\n\n                let c = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + x]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[cellY + y]}`\n\n                if (\n                    this.desk.coords[c] === null || \n                    this.desk.coords[c] && this.desk.coords[c].color !== this.color\n                ) {\n                    coords.push(c)\n                }\n            }\n        }\n\n        return coords\n    }\n\n    type() {\n        return 'king'\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/king.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/pawn.js":
/*!*********************************************!*\
  !*** ./src/js/chess_engine/figures/pawn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pawn)\n/* harmony export */ });\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../desk */ \"./src/js/chess_engine/desk.js\");\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figure */ \"./src/js/chess_engine/figures/figure.js\");\n/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/colors */ \"./src/js/chess_engine/constants/colors.js\");\n\n\n\n\nclass Pawn extends _figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(color, desk, cell) {\n        super(color, desk, cell)\n    }\n\n    _doubleMove = true\n\n    canEvolve() {\n        switch(this._color) {\n            case _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.WHITE:\n                return _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this._cell[1]) === 7\n            case _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.BLACK:\n                return _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this._cell[1]) === 0\n        }\n    }\n    \n    move(to) {\n        super.move(to)\n        this._doubleMove = false\n    }\n\n    moves() {\n        const coords = []\n        const cellX = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x.indexOf(this.cell[0])\n        const cellY = _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y.indexOf(this.cell[1])\n\n\n        for (let y = -2; y <= 2; y++) {\n            let cY = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[cellY + y]}`\n            let cXLeft = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX - 1]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[cellY + y]}`\n            let cXRight = `${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x[cellX + 1]}${_desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y[cellY + y]}`\n            \n            if (\n                //условия для белых\n                (this.color === _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.WHITE && (y === 1 || (y === 2 && this._doubleMove)) && !this.desk.coords[cY]) \n                || \n                //условия для черных\n                (this.color === _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.BLACK && (y === -1 || (y === -2 && this._doubleMove)) && !this.desk.coords[cY])\n            ) {\n                coords.push(cY)\n            }\n\n            // возможность рубить по диагонали\n            if (\n                (this.color === _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.WHITE && \n                    (y === 1 && \n                        (\n                            this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color ||\n                            this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color\n                        )\n                    )\n                )\n                ||\n                (this.color === _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.BLACK && \n                    (y === -1 &&\n                        (\n                            this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color ||\n                            this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color\n                        )\n                    )\n                )\n            ) {\n                if (this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color) coords.push(cXRight) \n                if (this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color) coords.push(cXLeft) \n            }\n        }\n\n        return coords\n    }\n\n    type() {\n        return 'pawn'\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/pawn.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/queen.js":
/*!**********************************************!*\
  !*** ./src/js/chess_engine/figures/queen.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queen)\n/* harmony export */ });\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure */ \"./src/js/chess_engine/figures/figure.js\");\n\n\nclass Queen extends _figure__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(color, desk, cell) {\n        super(color, desk, cell)\n    }\n\n    moves() {\n        return this.movesX().concat(this.movesY()).concat(this.movesXY())\n    }\n\n    type() {\n        return 'queen'\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/queen.js?");

/***/ }),

/***/ "./src/js/chess_engine/figures/rook.js":
/*!*********************************************!*\
  !*** ./src/js/chess_engine/figures/rook.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rook)\n/* harmony export */ });\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../desk */ \"./src/js/chess_engine/desk.js\");\n/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figure */ \"./src/js/chess_engine/figures/figure.js\");\n\n\n\nclass Rook extends _figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(color, desk, cell) {\n        super(color, desk, cell)\n    }\n\n    moves() {\n        return this.movesX().concat(this.movesY())\n    }\n\n    type() {\n        return 'rook'\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/figures/rook.js?");

/***/ }),

/***/ "./src/js/chess_engine/game.js":
/*!*************************************!*\
  !*** ./src/js/chess_engine/game.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _desk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desk */ \"./src/js/chess_engine/desk.js\");\n/* harmony import */ var _constants_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/states */ \"./src/js/chess_engine/constants/states.js\");\n/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/colors */ \"./src/js/chess_engine/constants/colors.js\");\n\n\n\n\nclass Game {\n    constructor() {}\n    \n    _state = Game.states[0]\n    _desk = new _desk__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    _turn = _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.WHITE\n    _history = []\n    _killedFigures = []\n\n    static get states() { return Object.keys(_constants_states__WEBPACK_IMPORTED_MODULE_1__.STATES).map((key) => _constants_states__WEBPACK_IMPORTED_MODULE_1__.STATES[key]) }\n\n    get desk() { return this._desk }\n    get turn() { return this._turn }\n    get history() { return this._history }\n    get killedFigures() { return this._killedFigures }\n    get state() { return this._state }\n\n    selectFigure(coord) {\n        return this._desk._coords[coord]\n    }\n\n    move(from, to) {\n        let killed = this._desk.move(from, to)\n        this._history.push(`${from}:${to}`)\n        this._changeTurn()\n        if (killed) this._killedFigures.push(killed)\n    }\n\n    _changeTurn() {\n        if (this._turn === _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.WHITE) {\n            this._turn = _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.BLACK\n        } else {\n            this._turn = _constants_colors__WEBPACK_IMPORTED_MODULE_2__.COLORS.WHITE\n        }\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/chess_engine/game.js?");

/***/ }),

/***/ "./src/js/view_components/desk_view.js":
/*!*********************************************!*\
  !*** ./src/js/view_components/desk_view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DeskView)\n/* harmony export */ });\n/* harmony import */ var _chess_engine_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chess_engine/game */ \"./src/js/chess_engine/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/js/view_components/game_view.js\");\n\n\n\nclass DeskView {\n    _desk = document.querySelector('#desk')\n    _cells = this._desk.querySelectorAll('.cell')\n    _isFigureSelected = false\n    \n    /** @type { Game } */\n    _gameEngine = null\n\n    /** @type { GameView } */\n    _gameView = null\n\n    constructor(gameView, gameEngine) {\n        this._gameView = gameView\n        this._gameEngine = gameEngine\n        this._resetSelectListeners()\n    }\n\n    changePawn(figureType) {\n        const figure = this._gameEngine.desk.changePawn(figureType)\n        const cell = document.querySelector(`#${figure.cell}`)\n\n        const viewFigure = document.createElement('div')\n        viewFigure.classList.add('figure', figure.type(), figure.color)\n\n        cell.textContent = ''\n        cell.append(viewFigure)\n    }\n\n    _perfomCell(e) {\n        const selected = e.target\n        let cellCoord = null\n        \n        if (this._isFigureSelected) {\n            if (selected.classList.contains('figure')) {\n                if (selected.classList[2] === this._selectedFigure.classList[2]) {\n                    this._clearSelection()\n                    this._isFigureSelected = false\n                    this._selectedFigure = null\n                    this._clickOnFigure(selected)\n                    return\n                }\n                cellCoord = selected.parentElement.id\n            } else {\n                cellCoord = selected.id\n            }\n\n            if (!document.querySelector(`#${cellCoord}`).classList.contains('available')) {\n                return\n            }\n\n            this._move(selected, cellCoord)\n        } else {\n            if (!this._canTouch(selected)) return\n\n            this._clickOnFigure(selected)\n        }\n    }\n\n    _move(selected, to) {\n        if (this._gameEngine.desk.canMove(this._selectedFigure.parentElement.id, to)) {\n            this._gameEngine.move(this._selectedFigure.parentElement.id, to)\n\n            if (selected.classList.contains('figure') && selected.classList[2] !== this._selectedFigure.classList[2]) {\n                selected.parentElement.append(this._selectedFigure)\n                selected.remove()\n                // помещаем в список убитых\n            } else {\n                selected.append(this._selectedFigure)\n            }\n\n            this._selectedFigure = null\n            this._isFigureSelected = false\n            this._clearSelection()\n            this._gameView.update()\n\n            if (this._gameEngine.desk.canEvolvePawn()) {\n                this._gameView.showChangePawnPanel()\n            }\n        }\n    }\n\n    _clearSelection() {\n        this._cells.forEach(cell => cell.classList.remove('available'))\n        document.querySelectorAll('.figure').forEach(elem => elem.classList.remove('selected'))\n    }\n\n    _clickOnFigure(selected) {\n        if (selected.className.includes('figure')) {\n            // запрашиваем из движка достыпные ходы для фигуры\n            const availableMoves = this._gameEngine.selectFigure(selected.parentElement.id).moves()\n            let availableCells = Array.prototype.slice.call(this._cells).filter(cell => availableMoves.includes(cell.id))\n            selected.classList.add('selected')\n            availableCells.forEach(cell => cell.classList.add('available'))\n            this._isFigureSelected = true\n            this._selectedFigure = selected\n        }\n    }\n\n    _resetSelectListeners() {\n        this._cells.forEach(cell => {\n            cell.addEventListener('click', (e) => this._perfomCell(e))\n        })\n    }\n\n    _canTouch(figure) {\n        return this._gameEngine.turn === figure.classList[2]\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/view_components/desk_view.js?");

/***/ }),

/***/ "./src/js/view_components/game_view.js":
/*!*********************************************!*\
  !*** ./src/js/view_components/game_view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n/* harmony import */ var _chess_engine_constants_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chess_engine/constants/colors */ \"./src/js/chess_engine/constants/colors.js\");\n/* harmony import */ var _chess_engine_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chess_engine/game */ \"./src/js/chess_engine/game.js\");\n/* harmony import */ var _desk_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desk_view */ \"./src/js/view_components/desk_view.js\");\n/* harmony import */ var _history_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history_view */ \"./src/js/view_components/history_view.js\");\n/* harmony import */ var _killed_figures_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./killed_figures_view */ \"./src/js/view_components/killed_figures_view.js\");\n\n\n\n\n\n\nclass GameView {\n    /** @type { HTMLElement } */\n    _loginForm = document.querySelector('#login')\n    /** @type { HTMLElement } */\n    _turnLabel = document.querySelector('#turn')\n\n    _player1 = null\n    _player2 = null\n    \n    /** @type { Game } */\n    _gameEngine = null\n    \n    /** @type { DeskView } */\n    _deskView = null\n\n    /** @type { HistoryView } */\n    _historyView = null\n\n    /** @type { KilledFiguresView } */\n    _killedFiguresView = null\n\n    /** @type { HTMLElement } */\n    _changePawnPanel = document.querySelector('#changePawnPanel')\n\n    constructor() {\n        this._loginForm.addEventListener('submit', (e) => this._register(e))\n        this._changePawnPanel.querySelectorAll('input').forEach(input => {\n            input.addEventListener('click', (e) => this.changePawn(e.target.value))\n        })\n    }\n\n    /**\n     * @param { Event } e \n     */\n    _register(e) {\n        e.preventDefault()\n        this._player1 = e.target.querySelector('#login_player1').value\n        this._player2 = e.target.querySelector('#login_player2').value\n        this._startGame()\n    }\n\n    _startGame() {\n        this._loginForm.hidden = true\n        this._gameEngine = new _chess_engine_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n        this._deskView = new _desk_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, this._gameEngine)\n        this._historyView = new _history_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\n        this._killedFiguresView = new _killed_figures_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"]()\n    }\n\n    update() {\n        this._updateTurn()\n        this._updateHistory()\n        this._updateKilledFigures()\n    }\n\n    showChangePawnPanel() {\n        const game = document.querySelector('.game-divider')\n        game.classList.add('hidden')\n        this._changePawnPanel.classList.remove('hidden')\n    }\n\n    changePawn(figureType) {\n        this._deskView.changePawn(figureType)\n        this._changePawnPanel.classList.add('hidden')\n        const game = document.querySelector('.game-divider')\n        game.classList.remove('hidden')\n    }\n\n    _updateTurn() {\n        if (this._gameEngine.turn === _chess_engine_constants_colors__WEBPACK_IMPORTED_MODULE_0__.COLORS.WHITE) {\n            this._turnLabel.textContent = 'Ход белых'\n        } else {\n            this._turnLabel.textContent = 'Ход черных'\n        }\n    }\n\n    _updateHistory() {\n        this._historyView.fill(this._gameEngine.history)\n    }\n\n    _updateKilledFigures() {\n        this._killedFiguresView.fill(this._gameEngine.killedFigures)\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/view_components/game_view.js?");

/***/ }),

/***/ "./src/js/view_components/history_view.js":
/*!************************************************!*\
  !*** ./src/js/view_components/history_view.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HistoryView)\n/* harmony export */ });\nclass HistoryView {\n    _historyContainer = document.querySelector('#history')\n\n    constructor() {}\n\n    /**\n     * @param { Array<String> } moves \n     */\n    fill(moves) {\n        this._historyContainer.textContent = ''\n\n        moves.forEach(move => {\n            let moveElement = document.createElement('div')\n            moveElement.classList.add('history-move')\n            moveElement.textContent = move\n            this._historyContainer.append(moveElement)\n        })\n        \n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/view_components/history_view.js?");

/***/ }),

/***/ "./src/js/view_components/killed_figures_view.js":
/*!*******************************************************!*\
  !*** ./src/js/view_components/killed_figures_view.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KilledFiguresView)\n/* harmony export */ });\n/* harmony import */ var _chess_engine_constants_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chess_engine/constants/colors */ \"./src/js/chess_engine/constants/colors.js\");\n/* harmony import */ var _chess_engine_figures_figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chess_engine/figures/figure */ \"./src/js/chess_engine/figures/figure.js\");\n\n\n\nclass KilledFiguresView {\n    _killedWhitesContainer = document.querySelector('#killed-whites')\n    _killedBlacksContainer = document.querySelector('#killed-blacks')\n\n    constructor() {}\n\n    /**\n     * @param { Array<Figure> } figures \n     */\n    fill(figures) {\n        this._killedBlacksContainer.textContent = ''\n        this._killedWhitesContainer.textContent = ''\n\n        figures.forEach(figure => {\n            let element = document.createElement('div')\n            element.classList.add('figure-killed', `${figure.type()}-killed`, `${figure.color}`)\n\n            switch(figure.color) {\n                case _chess_engine_constants_colors__WEBPACK_IMPORTED_MODULE_0__.COLORS.WHITE:\n                    this._killedWhitesContainer.appendChild(element)\n                    break\n                case _chess_engine_constants_colors__WEBPACK_IMPORTED_MODULE_0__.COLORS.BLACK:\n                    this._killedBlacksContainer.appendChild(element)\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://thinknetika_js_course/./src/js/view_components/killed_figures_view.js?");

/***/ }),

/***/ "./src/images/pieces.png":
/*!*******************************!*\
  !*** ./src/images/pieces.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90ff95d1ae1e6fbe0683.png\";\n\n//# sourceURL=webpack://thinknetika_js_course/./src/images/pieces.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;