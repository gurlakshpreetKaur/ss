exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 24519:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 96738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W6: () => (/* binding */ getCurrentDateFormatted),
/* harmony export */   eR: () => (/* binding */ getCurrentFullDateMaths),
/* harmony export */   f1: () => (/* binding */ add0IfNeeded)
/* harmony export */ });
/* unused harmony exports MONTHS_ARRAY, getMonth, getSuffix, addSuffix, getCurrentTimeMaths, getCurrentDayMaths */
function add0IfNeeded(date) {
    date = String(date);
    if (date.length === 1) {
        return "0" + date;
    }
    return date;
}
const MONTHS_ARRAY = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const getMonth = (month)=>MONTHS_ARRAY[month];
const getSuffix = (date)=>{
    if (date > 10 && date < 20) return "th";
    const suffices = [
        "th",
        "st",
        "nd",
        "rd",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th"
    ];
    return suffices[date % 10];
};
const addSuffix = (date)=>date + getSuffix(date);
const getCurrentTimeMaths = ()=>{
    const time = new Date();
    return Number(`${add0IfNeeded(time.getHours())}${add0IfNeeded(time.getMinutes())}${add0IfNeeded(time.getSeconds())}`);
};
const getCurrentDayMaths = ()=>{
    const time = new Date();
    return Number(`${time.getFullYear()}${add0IfNeeded(time.getMonth())}${add0IfNeeded(time.getDate())}`);
};
const getCurrentFullDateMaths = ()=>{
    const date = new Date();
    return Number(`${date.getFullYear()}${add0IfNeeded(date.getMonth())}${add0IfNeeded(date.getDate())}${add0IfNeeded(date.getHours())}${add0IfNeeded(date.getMinutes())}${add0IfNeeded(date.getSeconds())}`);
};
const getCurrentDateFormatted = ()=>{
    const date = new Date();
    return `${addSuffix(date.getDate())} ${getMonth(date.getMonth())}, ${date.getFullYear()}`;
};


/***/ })

};
;