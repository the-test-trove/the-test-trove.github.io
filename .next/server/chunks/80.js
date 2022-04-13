exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 2943:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading-dots_loading__3HYzm",
	"spacer": "loading-dots_spacer__3kGlG",
	"blink": "loading-dots_blink__mTR28",
	"reverse": "loading-dots_reverse__LeKlJ"
};


/***/ }),

/***/ 9387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ captcha),
  "m": () => (/* binding */ useCaptcha)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./lib/captcha.ts
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/captcha.tsx



const LazyCaptcha = /*#__PURE__*/ (0,external_react_.lazy)(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2534, 23))
);
function useCaptcha() {
    const ref1 = (0,external_react_.useRef)(null);
    const execute = (0,external_react_.useCallback)(()=>{
        var ref;
        return (ref = ref1.current) === null || ref === void 0 ? void 0 : ref.execute();
    }, []);
    const reset = (0,external_react_.useCallback)(()=>{
        var ref;
        return (ref = ref1.current) === null || ref === void 0 ? void 0 : ref.resetCaptcha();
    }, []);
    return {
        ref: ref1,
        execute,
        reset,
        isEnabled: IS_CAPTCHA_ENABLED
    };
}
const Captcha = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    if (!IS_CAPTCHA_ENABLED) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LazyCaptcha, {
            ref: ref,
            sitekey: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
            size: "invisible",
            ...props
        })
    }));
});
/* harmony default export */ const captcha = (Captcha);


/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoadingDots)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./lib/to-pixels.ts
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
 */ // Convert numbers or strings to pixel value
// Helpful for styled-jsx when using a prop
// height: ${toPixels(height)}; (supports height={20} and height="20px")
const toPixels = (value)=>{
    if (typeof value === 'number') {
        return `${value}px`;
    }
    return value;
};
/* harmony default export */ const to_pixels = (toPixels);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/loading-dots.module.css
var loading_dots_module = __webpack_require__(2943);
var loading_dots_module_default = /*#__PURE__*/__webpack_require__.n(loading_dots_module);
;// CONCATENATED MODULE: ./components/loading-dots.tsx

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


function LoadingDots({ size =2 , height , children , reverse  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: external_classnames_default()((loading_dots_module_default()).loading, {
            [(loading_dots_module_default()).reverse]: reverse
        }),
        style: {
            ['--loading-dots-height']: height ? to_pixels(height) : undefined,
            ['--loading-dots-size']: size !== 2 ? to_pixels(size) : undefined
        },
        children: [
            children && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (loading_dots_module_default()).spacer,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
        ]
    }));
};


/***/ }),

/***/ 6043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useEmailQueryParam)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
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

/**
 * If `paramName` exists in query string, then call `setEmail()` with the value
 * and delete it from the URL.
 */ function useEmailQueryParam(paramName, setEmail) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ('URLSearchParams' in window) {
            const { search , pathname  } = window.location;
            const params = new URLSearchParams(search);
            const email = params.get(paramName);
            if (email) {
                setEmail(email);
                params.delete(paramName);
                const newSearch = params.toString();
                const newAsPath = pathname + (newSearch ? `?${newSearch}` : '');
                const newPathname = router.pathname + (newSearch ? `?${newSearch}` : '');
                history.replaceState({
                    url: newPathname,
                    as: newAsPath,
                    options: {
                        shallow: true
                    }
                }, '', newAsPath);
            }
        }
    }, [
        setEmail,
        router.pathname,
        paramName
    ]);
};


/***/ }),

/***/ 7969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ register),
/* harmony export */   "t": () => (/* binding */ saveGithubToken)
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
 */ async function register(email, token) {
    return await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            token
        })
    });
}
async function saveGithubToken({ id , token  }) {
    return await fetch('/api/save-github-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            token
        })
    });
}


/***/ })

};
;