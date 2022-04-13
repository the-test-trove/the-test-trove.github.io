"use strict";
exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 3924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ emailToId),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1495);
/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
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
 */ 

const redis = process.env.REDIS_PORT && process.env.REDIS_URL && process.env.REDIS_EMAIL_TO_ID_SECRET ? new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())({
    port: parseInt(process.env.REDIS_PORT || '', 10),
    host: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    tls: process.env.REDIS_SSL_ENABLED && process.env.REDIS_SSL_ENABLED != 'false' ? {} : undefined
}) : undefined;
function emailToId(email) {
    if (process.env.REDIS_EMAIL_TO_ID_SECRET) {
        const hmac = crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', process.env.REDIS_EMAIL_TO_ID_SECRET);
        hmac.update(email);
        const result = hmac.digest('hex');
        return result;
    } else {
        throw new Error('REDIS_EMAIL_TO_ID_SECRET is missing');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redis);


/***/ })

};
;