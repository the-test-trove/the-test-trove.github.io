"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 1495:
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveGithubToken)
/* harmony export */ });
/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3924);

async function saveGithubToken(req, res) {
    if (req.method !== 'POST') {
        return res.status(501).json({
            error: {
                code: 'method_unknown',
                message: 'This endpoint only responds to POST'
            }
        });
    }
    const body = req.body;
    if (!body.token || !body.id) {
        return res.status(400).json({
            error: {
                code: 'bad_input',
                message: 'Invalid parameters'
            }
        });
    }
    if (!_lib_redis__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) {
        throw new Error('Redis must be set up');
    }
    const ticketNumber = await _lib_redis__WEBPACK_IMPORTED_MODULE_0__/* ["default"].hget */ .Z.hget(`id:${body.id}`, 'ticketNumber');
    if (!ticketNumber) {
        return res.status(404).json({
            code: 'invalid_id',
            message: 'The registration does not exist'
        });
    }
    const [username, name] = await _lib_redis__WEBPACK_IMPORTED_MODULE_0__/* ["default"].hmget */ .Z.hmget(`github-user:${body.token}`, 'login', 'name');
    if (!username) {
        return res.status(400).json({
            code: 'invalid_token',
            message: 'Invalid or expired token'
        });
    }
    const key = `id:${body.id}`;
    const userKey = `user:${username}`;
    await _lib_redis__WEBPACK_IMPORTED_MODULE_0__/* ["default"].multi */ .Z.multi().hsetnx(key, 'username', username).hsetnx(key, 'name', name || '')// Also save username → data pair
    .hsetnx(userKey, 'name', name || '').hsetnx(userKey, 'ticketNumber', ticketNumber).exec();
    res.json({
        username,
        name
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [924], () => (__webpack_exec__(7802)));
module.exports = __webpack_exports__;

})();