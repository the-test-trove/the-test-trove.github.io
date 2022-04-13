"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 1495:
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 5766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9927);
/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3924);


async function auth(req, res) {
    const id = req.cookies[_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE */ .l0];
    if (!id) {
        return res.status(401).json({
            error: {
                code: 'missing_cookie',
                message: 'Missing cookie'
            }
        });
    }
    if (_lib_redis__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z) {
        const ticketNumberString = await _lib_redis__WEBPACK_IMPORTED_MODULE_1__/* ["default"].hget */ .Z.hget(`id:${id}`, 'ticketNumber');
        if (!ticketNumberString) {
            return res.status(401).json({
                error: {
                    code: 'not_registered',
                    message: 'This user is not registered'
                }
            });
        }
    }
    return res.status(200).json({
        loggedIn: true
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [924,927], () => (__webpack_exec__(5766)));
module.exports = __webpack_exports__;

})();