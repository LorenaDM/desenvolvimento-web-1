"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home({ posts  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Posts \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lorena D Moroni\\\\OneDrive - UniFACEF\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\5Sem\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \" \",\n                            post.title,\n                            \" \"\n                        ]\n                    }, post.id, true, {\n                        fileName: \"C:\\\\Users\\\\Lorena D Moroni\\\\OneDrive - UniFACEF\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\5Sem\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lorena D Moroni\\\\OneDrive - UniFACEF\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\5Sem\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lorena D Moroni\\\\OneDrive - UniFACEF\\\\\\xc1rea de Trabalho\\\\Faculdade\\\\5Sem\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n};\n// função será executada antes do componente ser carregado\n// representa o servidor node no frontend\nconst getServerSideProps = async ()=>{\n    const response = await fetch('http://localhost:3333/posts');\n    const posts = await response.json();\n    return {\n        props: {\n            posts\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBY2UsUUFBUSxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQVEsQ0FBQyxFQUFFLENBQUM7SUFDOUMsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBTzs7Ozs7O3dGQUNWQyxDQUFFOzBCQUNBSCxLQUFLLENBQUNJLEdBQUcsRUFBRUMsSUFBSSwrRUFDYkMsQ0FBRTs7NEJBQWUsQ0FBQzs0QkFBQ0QsSUFBSSxDQUFDRSxLQUFLOzRCQUFDLENBQUM7O3VCQUF2QkYsSUFBSSxDQUFDRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDO0FBQ0QsRUFBMEQ7QUFDMUQsRUFBeUM7QUFDbEMsS0FBSyxDQUFDQyxrQkFBa0IsYUFBMEMsQ0FBQztJQUN4RSxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE2QjtJQUMxRCxLQUFLLENBQUNYLEtBQUssR0FBRyxLQUFLLENBQUNVLFFBQVEsQ0FBQ0UsSUFBSTtJQUNqQyxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOYixLQUFLO1FBQ1AsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0by1uZXh0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFBvc3RzIGZyb20gJy4vcG9zdHMnO1xuXG5pbnRlcmZhY2UgUG9zdCB7XG4gIC8vIHJlcHJlc2VudGEgMSBwb3N0XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQb3N0cyB7XG4gIC8vIHJlcHJlc2VudGEgdmV0b3IgZGUgcG9zdHNcbiAgcG9zdHM6IFBvc3RbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH06IFBvc3RzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4gUG9zdHMgPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PiB7cG9zdC50aXRsZX0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuLy8gZnVuw6fDo28gc2Vyw6EgZXhlY3V0YWRhIGFudGVzIGRvIGNvbXBvbmVudGUgc2VyIGNhcnJlZ2Fkb1xuLy8gcmVwcmVzZW50YSBvIHNlcnZpZG9yIG5vZGUgbm8gZnJvbnRlbmRcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczxQb3N0cz4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9wb3N0cycpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsIC8vIHBvc3RzIHZhaSBwYXJhIG8gY29tcG9uZW50ZVxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhvbWUiLCJwb3N0cyIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJwb3N0IiwibGkiLCJ0aXRsZSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();