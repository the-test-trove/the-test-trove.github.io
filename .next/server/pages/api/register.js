"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 1495:
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ 3231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 1564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 1269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ validateCaptchaResult),
/* harmony export */   "A": () => (/* binding */ IS_CAPTCHA_ENABLED)
/* harmony export */ });
/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function validateCaptchaResult(result) {
    const { success  } = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${result}`
    }).then((res)=>res.json()
    );
    return success;
}
const IS_CAPTCHA_ENABLED = Boolean(process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY);


/***/ }),

/***/ 4220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5611);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9927);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3231);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3924);
/* harmony import */ var _lib_captcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_0__]);
nanoid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







async function register(req, res) {
    if (req.method !== 'POST') {
        return res.status(501).json({
            error: {
                code: 'method_unknown',
                message: 'This endpoint only responds to POST'
            }
        });
    }
    const email = (req.body.email || '').trim().toLowerCase();
    const token = req.body.token;
    if (!validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email)) {
        return res.status(400).json({
            error: {
                code: 'bad_email',
                message: 'Invalid email'
            }
        });
    }
    if (_lib_captcha__WEBPACK_IMPORTED_MODULE_6__/* .IS_CAPTCHA_ENABLED */ .A) {
        const isCaptchaValid = await (0,_lib_captcha__WEBPACK_IMPORTED_MODULE_6__/* .validateCaptchaResult */ .t)(token);
        if (!isCaptchaValid) {
            return res.status(400).json({
                error: {
                    code: 'bad_captcha',
                    message: 'Invalid captcha'
                }
            });
        }
    }
    let id;
    let ticketNumber;
    let createdAt;
    let statusCode;
    let name = undefined;
    let username = undefined;
    if (_lib_redis__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z) {
        id = (0,_lib_redis__WEBPACK_IMPORTED_MODULE_5__/* .emailToId */ .X)(email);
        const existingTicketNumberString = await _lib_redis__WEBPACK_IMPORTED_MODULE_5__/* ["default"].hget */ .Z.hget(`id:${id}`, 'ticketNumber');
        if (existingTicketNumberString) {
            const item = await _lib_redis__WEBPACK_IMPORTED_MODULE_5__/* ["default"].hmget */ .Z.hmget(`id:${id}`, 'name', 'username', 'createdAt');
            name = item[0];
            username = item[1];
            ticketNumber = parseInt(existingTicketNumberString, 10);
            createdAt = parseInt(item[2], 10);
            statusCode = 200;
        } else {
            ticketNumber = await _lib_redis__WEBPACK_IMPORTED_MODULE_5__/* ["default"].incr */ .Z.incr('count');
            createdAt = Date.now();
            await _lib_redis__WEBPACK_IMPORTED_MODULE_5__/* ["default"].hmset */ .Z.hmset(`id:${id}`, 'email', email, 'ticketNumber', ticketNumber, 'createdAt', createdAt);
            statusCode = 201;
        }
    } else {
        id = (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)();
        ticketNumber = _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .SAMPLE_TICKET_NUMBER */ .b0;
        createdAt = Date.now();
        statusCode = 200;
    }
    // Save `key` in a httpOnly cookie
    res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE */ .l0, id, {
        httpOnly: true,
        sameSite: 'strict',
        secure: "production" === 'production',
        path: '/api',
        expires: new Date(Date.now() + ms__WEBPACK_IMPORTED_MODULE_4___default()('7 days'))
    }));
    return res.status(statusCode).json({
        id,
        email,
        ticketNumber,
        createdAt,
        name,
        username
    });
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [924,927], () => (__webpack_exec__(4220)));
module.exports = __webpack_exports__;

})();