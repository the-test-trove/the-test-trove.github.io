"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-aria"
const external_react_aria_namespaceObject = require("react-aria");
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/nprogress.tsx

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


function Progress() {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        let timeout;
        const start = ()=>{
            timeout = setTimeout(()=>external_nprogress_default().start()
            , 100);
        };
        const done = ()=>{
            clearTimeout(timeout);
            external_nprogress_default().done();
        };
        router.events.on('routeChangeStart', start);
        router.events.on('routeChangeComplete', done);
        router.events.on('routeChangeError', done);
        return ()=>{
            router.events.off('routeChangeStart', start);
            router.events.off('routeChangeComplete', done);
            router.events.off('routeChangeError', done);
        };
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
};

;// CONCATENATED MODULE: ./components/resize-handler.tsx

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
function calcVh() {
    document.documentElement.style.setProperty('--100vh', `${window.innerHeight}px`);
}
/**
 * Fix iOS 100vh bug (Unlike PostCSS-based solutions,
 * this JS-based solution allows var(--100vh) to be used inside calc())
 */ function ResizeHandler() {
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('resize', calcVh);
        calcVh();
        return ()=>{
            window.removeEventListener('resize', calcVh);
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
};

// EXTERNAL MODULE: external "@100mslive/react-sdk"
var react_sdk_ = __webpack_require__(1707);
;// CONCATENATED MODULE: ./pages/_app.tsx

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







function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        var ref;
        (ref = document.body.classList) === null || ref === void 0 ? void 0 : ref.remove('loading');
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_aria_namespaceObject.SSRProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_aria_namespaceObject.OverlayProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_sdk_.HMSRoomProvider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ResizeHandler, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Progress, {})
                ]
            })
        })
    }));
};


/***/ }),

/***/ 1707:
/***/ ((module) => {

module.exports = require("@100mslive/react-sdk");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7201));
module.exports = __webpack_exports__;

})();