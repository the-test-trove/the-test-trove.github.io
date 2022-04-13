"use strict";
(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 1495:
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 6217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ticketImages)
});

;// CONCATENATED MODULE: external "chrome-aws-lambda"
const external_chrome_aws_lambda_namespaceObject = require("chrome-aws-lambda");
var external_chrome_aws_lambda_default = /*#__PURE__*/__webpack_require__.n(external_chrome_aws_lambda_namespaceObject);
;// CONCATENATED MODULE: external "puppeteer-core"
const external_puppeteer_core_namespaceObject = require("puppeteer-core");
var external_puppeteer_core_default = /*#__PURE__*/__webpack_require__.n(external_puppeteer_core_namespaceObject);
;// CONCATENATED MODULE: ./lib/screenshot.ts
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

async function screenshot(url) {
    const options = process.env.AWS_REGION ? {
        args: (external_chrome_aws_lambda_default()).args,
        executablePath: await (external_chrome_aws_lambda_default()).executablePath,
        headless: (external_chrome_aws_lambda_default()).headless
    } : {
        args: [],
        executablePath: process.platform === 'win32' ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' : process.platform === 'linux' ? '/usr/bin/google-chrome' : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    };
    const browser = await external_puppeteer_core_default().launch(options);
    const page = await browser.newPage();
    await page.setViewport({
        width: 2000,
        height: 1000
    });
    await page.goto(url, {
        waitUntil: 'networkidle0'
    });
    return await page.screenshot({
        type: 'png'
    });
};

// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9927);
// EXTERNAL MODULE: ./lib/redis.ts
var redis = __webpack_require__(3924);
;// CONCATENATED MODULE: ./pages/api/ticket-images/[username].tsx



async function ticketImages(req, res) {
    let url;
    const { username  } = req.query || {};
    if (username) {
        if (redis/* default */.Z) {
            const usernameString = username.toString();
            const [name, ticketNumber] = await redis/* default.hmget */.Z.hmget(`user:${usernameString}`, 'name', 'ticketNumber');
            if (!ticketNumber) {
                res.statusCode = 404;
                return res.end('Not Found');
            }
            url = `${constants/* SITE_URL */._O}/ticket-image?username=${encodeURIComponent(usernameString)}&ticketNumber=${encodeURIComponent(ticketNumber)}`;
            if (name) {
                url = `${url}&name=${encodeURIComponent(name)}`;
            }
        } else {
            url = `${constants/* SITE_URL */._O}/ticket-image?ticketNumber=${encodeURIComponent(constants/* SAMPLE_TICKET_NUMBER */.b0)}`;
        }
        const file = await screenshot(url);
        res.setHeader('Content-Type', `image/png`);
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.statusCode = 200;
        res.end(file);
    } else {
        res.status(404).send('Not Found');
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [924,927], () => (__webpack_exec__(6217)));
module.exports = __webpack_exports__;

})();