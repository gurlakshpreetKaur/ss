"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 49403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15816);
/* __next_internal_client_entry_do_not_use__ Carousel auto */ 


function Carousel({ name, children = [], styleNavs = true, height = "100vh" }) {
    const [ID, setID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`carousel${name}${Math.random()}`.replaceAll(".", "-"));
    const HandleRightArrow = ()=>{
        let carousel = document.querySelector(`.${ID}`);
        console.log(carousel);
        if (!carousel) return;
        if (carousel.scrollLeft < (children.length - 1) * window.innerWidth) {
            carousel.scrollBy(document.querySelector(`.${ID}`)?.getBoundingClientRect().width ?? 0, 0);
        }
    };
    const HandleLeftArrow = ()=>{
        let carousel = document.querySelector(`.${ID}`);
        console.log(carousel);
        if (!carousel) return;
        if (carousel.scrollLeft > 0) {
            // carousel.scrollBy(-window.innerWidth, 0);
            carousel.scrollBy(-(document.querySelector(`.${ID}`)?.getBoundingClientRect().width ?? 0), 0);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("ID is", ID);
    }, [
        ID
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: ID,
        className: `${ID} w-full
     flex flex-wrap flex-col snap-x snap-mandatory overflow-hidden scroll-smooth`,
        style: {
            height
        },
        children: [
            styleNavs ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: HandleLeftArrow,
                        "aria-controls": ID,
                        "aria-label": `left control for carousel ${name}`,
                        className: "absolute left-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineArrowLeft */ .kyg, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: HandleRightArrow,
                        "aria-controls": ID,
                        "aria-label": `right control for carousel ${name}`,
                        className: "absolute right-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineArrowRight */ .mGl, {})
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: HandleLeftArrow,
                        "aria-controls": ID,
                        "aria-label": `left control for carousel ${name}`,
                        className: "absolute left-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineArrowLeft */ .kyg, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: HandleRightArrow,
                        "aria-controls": ID,
                        "aria-label": `right control for carousel ${name}`,
                        className: "absolute right-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineArrowRight */ .mGl, {})
                    })
                ]
            }),
            children
        ]
    });
}


/***/ }),

/***/ 66283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Grid({ colRange, children = [], className = "" }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid " + className,
        style: {
            gridTemplateColumns: `repeat(auto-fill, minmax(${colRange}px, 1fr))`
        },
        children: children
    });
}


/***/ })

};
;