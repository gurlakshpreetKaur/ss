exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 33564:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20866))

/***/ }),

/***/ 24519:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 20866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBar: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15816);
/* __next_internal_client_entry_do_not_use__ NavBar auto */ 


function NavItem({ children, onClick = ()=>{} }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        role: "listitem",
        className: "decoration-transparent inline-block mx-[10px] transition-all border-[1.25px] border- border-transparent border-solid hover:border-b-white tracking-[1px] cursor-pointer",
        onClick: onClick,
        children: children
    });
}
function NavBar() {
    function condition() {
        if (window === undefined) return "black";
        if (window.location.pathname === "/") {
            if (document.documentElement.scrollTop < window.innerHeight - 30) return "transparent";
            return "black";
        }
        if (window.location.pathname.includes("/post/")) {
            if (document.documentElement.scrollTop < window.innerHeight) return "black";
            return "black";
        }
        return "black";
    }
    // const bg = "transparent";
    console.log(window);
    console.log('window.location.pathname === "/"', window.location.pathname === "/", window.location.pathname);
    let [bg, setBg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(condition());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("bg is", bg);
    }, [
        bg
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let onListen = (scroll)=>{
            if (!window) return;
            setBg(condition());
        };
        let scrollListener = window.addEventListener("scroll", onListen);
        return ()=>{
            window.removeEventListener("click", onListen);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "z-10 w-full h-12 fixed text-center font-playfair flex flex-row justify-center items-center",
        style: {
            backgroundColor: bg,
            color: bg === "white" ? "black" : "white"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                role: "list",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/",
                            children: "Articles"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/webstories",
                            children: "Webstories"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/contact-us",
                            children: "Contact Us"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "/user",
                role: "navigation",
                "aria-label": "my account",
                className: "max-[400px]:hidden inline-block absolute right-[20px] top-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineUser */ .nf1, {})
            })
        ]
    });
}


/***/ }),

/***/ 21189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72856);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61522);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48241);



// const firebaseConfig = {
//     apiKey: "AIzaSyBplsjBu0VITr9RCxj8rJPcPwo52jmROOs",
//     authDomain: "cla-test-b35da.firebaseapp.com",
//     projectId: "cla-test-b35da",
//     storageBucket: "cla-test-b35da.appspot.com",
//     messagingSenderId: "727866046606",
//     appId: "1:727866046606:web:2dd7666f75e8d845a2b1df",
//     measurementId: "G-GLBG34ZJXD"
// };
const firebaseConfig = {
    apiKey: "AIzaSyB-n-QZ2J_GpHeqhn6uz-TSQAldkvi0lUM",
    authDomain: "cla-stories.firebaseapp.com",
    projectId: "cla-stories",
    storageBucket: "cla-stories.appspot.com",
    messagingSenderId: "263250403554",
    appId: "1:263250403554:web:92eba0e0d4ed44941efebb",
    measurementId: "G-6QJJW9GSGK"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .getAuth */ .v0)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(app); // const analytics = getAnalytics(app);


/***/ }),

/***/ 81154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/(Components)/NavBar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\sonyh\OneDrive\Documents\Code\cla.2\app\(Components)\NavBar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["NavBar"];

// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(1436);
;// CONCATENATED MODULE: ./app/(Components)/Footer.tsx


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-black p-5 text-center [&>a]:mx-2 [&>a]:text-gray-300 [&>a]:inline-block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://instagram.com",
                "aria-label": "instagram",
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineInstagram */.Bpw, {
                    className: "hover:text-white"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://youtube.com",
                "aria-label": "youtube",
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineYoutube */.RLq, {
                    className: "hover:text-red-500"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://twitter.com",
                "aria-label": "twitter",
                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineTwitter */.h3E, {
                    className: "hover:text-blue-400"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "inline-block text-gray-300 font-playfair",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineCopyrightCircle */.WUC, {
                        className: "inline-block"
                    }),
                    " 2023 CLA"
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx





function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/user",
                        className: "min-[400px]:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-gray-900 text-white p-4 rounded-full fixed right-[25px] bottom-[25px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineUser */.nf1, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;