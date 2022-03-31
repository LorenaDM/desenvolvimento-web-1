"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function Post({ comments  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    if (router.isFallback) {
        //estiver cmo true
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    " Post ",
                    router.query.id
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            " ",
                            comment.body,
                            " "
                        ]
                    }, comment.id)
                )
            })
        ]
    }));
};
//singular pois vai procurar uma unidade
//gera o conteudo das paginas para cada post
//context contem tds os ids dos posts
const getStaticProps = async (//vai ser executado antes de carregar o componente
//recupera todos os posts
context)=>{
    //recupera id do post
    const { id  } = context.params;
    //faz consulta
    const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
    //converte
    const comments = await response.json();
    return {
        props: {
            comments
        },
        revalidate: 5
    };
};
const getStaticPaths = async ()=>{
    //vamos obter
    const response = await fetch(`http://localhost:3333/posts`);
    const posts = await response.json();
    //a variavrl paths vai conter todos os ids de todos os posts
    const paths = posts.map((post)=>{
        return {
            params: {
                id: String(post.id)
            }
        };
    });
    //retorno da função
    return {
        paths,
        //não era aas paginaas, apenas no primeiro acesso
        //paths: paths, gera uma página estática para cd post
        fallback: true
    };
};


/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(556));
module.exports = __webpack_exports__;

})();