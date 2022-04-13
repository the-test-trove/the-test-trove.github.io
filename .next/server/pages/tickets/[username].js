"use strict";
(() => {
var exports = {};
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 1214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TicketShare),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@reach/skip-nav"
var skip_nav_ = __webpack_require__(5738);
;// CONCATENATED MODULE: external "ioredis"
const external_ioredis_namespaceObject = require("ioredis");
var external_ioredis_default = /*#__PURE__*/__webpack_require__.n(external_ioredis_namespaceObject);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: ./lib/redis.ts
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

const redis = process.env.REDIS_PORT && process.env.REDIS_URL && process.env.REDIS_EMAIL_TO_ID_SECRET ? new (external_ioredis_default())({
    port: parseInt(process.env.REDIS_PORT || '', 10),
    host: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    tls: process.env.REDIS_SSL_ENABLED && process.env.REDIS_SSL_ENABLED != 'false' ? {} : undefined
}) : undefined;
function emailToId(email) {
    if (process.env.REDIS_EMAIL_TO_ID_SECRET) {
        const hmac = crypto.createHmac('sha1', process.env.REDIS_EMAIL_TO_ID_SECRET);
        hmac.update(email);
        const result = hmac.digest('hex');
        return result;
    } else {
        throw new Error('REDIS_EMAIL_TO_ID_SECRET is missing');
    }
}
/* harmony default export */ const lib_redis = (redis);

// EXTERNAL MODULE: ./components/page.tsx
var page = __webpack_require__(8434);
// EXTERNAL MODULE: ./components/index.tsx + 17 modules
var components = __webpack_require__(1667);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
;// CONCATENATED MODULE: ./pages/tickets/[username].tsx








function TicketShare({ username , ticketNumber , name , usernameFromParams  }) {
    if (!ticketNumber) {
        return(/*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        }));
    }
    const meta = username ? {
        title: `${name}’s ${constants/* SITE_NAME */.px} Ticket`,
        description: constants/* META_DESCRIPTION */.KM,
        image: `/api/ticket-images/${username}`,
        url: `${constants/* SITE_URL */._O}/tickets/${username}`
    } : {
        title: 'Ticket Demo - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM,
        image: `/api/ticket-images/${usernameFromParams}`,
        url: `${constants/* SITE_URL */._O}/tickets/${usernameFromParams}`
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(page/* default */.Z, {
        meta: meta,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "robots",
                    content: "noindex"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(skip_nav_.SkipNavContent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* default */.Z, {
                defaultUserData: {
                    username: username || undefined,
                    name: name || '',
                    ticketNumber
                },
                sharePage: true
            })
        ]
    }));
};
const getStaticProps = async ({ params  })=>{
    var ref;
    const username = (params === null || params === void 0 ? void 0 : (ref = params.username) === null || ref === void 0 ? void 0 : ref.toString()) || null;
    if (lib_redis) {
        if (username) {
            const [name, ticketNumber] = await lib_redis.hmget(`user:${username}`, 'name', 'ticketNumber');
            if (ticketNumber) {
                return {
                    props: {
                        username: username || null,
                        usernameFromParams: username || null,
                        name: name || username || null,
                        ticketNumber: parseInt(ticketNumber, 10) || null
                    },
                    revalidate: 5
                };
            }
        }
        return {
            props: {
                username: null,
                usernameFromParams: username || null,
                name: null,
                ticketNumber: null
            },
            revalidate: 5
        };
    } else {
        return {
            props: {
                username: null,
                usernameFromParams: username || null,
                name: null,
                ticketNumber: constants/* SAMPLE_TICKET_NUMBER */.b0
            },
            revalidate: 5
        };
    }
};
const getStaticPaths = async ()=>{
    return Promise.resolve({
        paths: [],
        fallback: 'blocking'
    });
};


/***/ }),

/***/ 3943:
/***/ ((module) => {

module.exports = require("@100mslive/react-icons");

/***/ }),

/***/ 2534:
/***/ ((module) => {

module.exports = require("@hcaptcha/react-hcaptcha");

/***/ }),

/***/ 5738:
/***/ ((module) => {

module.exports = require("@reach/skip-nav");

/***/ }),

/***/ 9374:
/***/ ((module) => {

module.exports = require("@react-aria/button");

/***/ }),

/***/ 2163:
/***/ ((module) => {

module.exports = require("@react-aria/dialog");

/***/ }),

/***/ 3888:
/***/ ((module) => {

module.exports = require("@react-aria/focus");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("@react-aria/overlays");

/***/ }),

/***/ 2893:
/***/ ((module) => {

module.exports = require("@react-stately/overlays");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5786:
/***/ ((module) => {

module.exports = require("smoothscroll-polyfill");

/***/ }),

/***/ 5177:
/***/ ((module) => {

module.exports = require("vanilla-tilt");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,942,36,728,292,80,667], () => (__webpack_exec__(1214)));
module.exports = __webpack_exports__;

})();