exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 3232:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "conf-container_container___1EuE"
};


/***/ }),

/***/ 8702:
/***/ ((module) => {

// Exports
module.exports = {
	"contact": "contact_contact__o2Q7k",
	"contact-email": "contact_contact-email__sI6Iy"
};


/***/ }),

/***/ 8569:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "form_form__SikLS",
	"share-page": "form_share-page__F6Ju_",
	"input": "form_input__9DubJ",
	"input-label": "form_input-label__0PY2g",
	"focused": "form_focused__1FMG9",
	"error": "form_error__H1lY5",
	"success": "form_success__zGBJF",
	"input-text": "form_input-text__aSKAx",
	"form-row": "form_form-row__3Cee4",
	"submit": "form_submit__PZdmp",
	"generate-with-github": "form_generate-with-github__aNvgp",
	"register": "form_register__b_elR",
	"loading": "form_loading__tNoZR",
	"default": "form_default__Pxiwc",
	"not-allowed": "form_not-allowed__64pkc",
	"stage-btn": "form_stage-btn__YH9WC",
	"github-wrapper": "form_github-wrapper__ToCm_",
	"or-divider": "form_or-divider__yQe7h"
};


/***/ }),

/***/ 8846:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "hero_wrapper__JrOv5",
	"hero": "hero_hero__KMqi3",
	"info": "hero_info__ADe6O",
	"description": "hero_description__39JUn",
	"description-separator": "hero_description-separator__pP3ew"
};


/***/ }),

/***/ 4883:
/***/ ((module) => {

// Exports
module.exports = {
	"fill-black": "icon-transition_fill-black__UZroc",
	"stroke-black": "icon-transition_stroke-black__EQMsP",
	"stroke-white": "icon-transition_stroke-white__VijGw"
};


/***/ }),

/***/ 1143:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "ticket-actions_button__sVOds",
	"loading": "ticket-actions_loading__WEA5y",
	"first": "ticket-actions_first__82rUr",
	"second": "ticket-actions_second___mhAt",
	"third": "ticket-actions_third__CoJQ_",
	"linkedin-button": "ticket-actions_linkedin-button__kzbqU"
};


/***/ }),

/***/ 3317:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "ticket-copy_wrapper__FHyJ0",
	"label": "ticket-copy_label__MwNIo",
	"label-wrapper": "ticket-copy_label-wrapper__Nuhp5",
	"field": "ticket-copy_field__0qE_k",
	"desktop-copy-disabled": "ticket-copy_desktop-copy-disabled__MbDx3",
	"mobile-copy": "ticket-copy_mobile-copy__qtKaL",
	"mobile-copy-disabled": "ticket-copy_mobile-copy-disabled__tPe_o",
	"url": "ticket-copy_url___8QV1",
	"fade": "ticket-copy_fade__moSiu",
	"desktop-copy": "ticket-copy_desktop-copy__ra411",
	"copied": "ticket-copy_copied__B6q71",
	"visible": "ticket-copy_visible__19_9i",
	"copy-button": "ticket-copy_copy-button__rAOZR"
};


/***/ }),

/***/ 9833:
/***/ ((module) => {

// Exports
module.exports = {
	"githubIcon": "ticket-form_githubIcon__HXuwR",
	"checkIcon": "ticket-form_checkIcon__2TztQ",
	"generateWithGithub": "ticket-form_generateWithGithub__nWoIM",
	"stageIcon": "ticket-form_stageIcon__kQ1Qd",
	"form-row": "ticket-form_form-row__XbVWa",
	"description": "ticket-form_description__67p3W",
	"learn-more": "ticket-form_learn-more__g9YyS"
};


/***/ }),

/***/ 2742:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "ticket_hero__AIpTu",
	"description": "ticket_description__2trfn",
	"ticket-text": "ticket_ticket-text__pCQrh",
	"ticket-layout": "ticket_ticket-layout__IJ_d1",
	"ticket-share-layout": "ticket_ticket-share-layout__zSpOj",
	"ticket-visual": "ticket_ticket-visual__1VBgt",
	"ticket-actions": "ticket_ticket-actions__SfJtD",
	"ticket-copy": "ticket_ticket-copy__5rWdO",
	"ticket-actions-placeholder": "ticket_ticket-actions-placeholder__XH_00",
	"ticket-visual-wrapper": "ticket_ticket-visual-wrapper__U3_AO"
};


/***/ }),

/***/ 1667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Conf)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./lib/hooks/use-conf-data.ts
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
const ConfDataContext = (0,external_react_.createContext)(null);
function useConfData() {
    const result = (0,external_react_.useContext)(ConfDataContext);
    if (!result) {
        throw new Error();
    }
    return result;
};

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "vanilla-tilt"
var external_vanilla_tilt_ = __webpack_require__(5177);
var external_vanilla_tilt_default = /*#__PURE__*/__webpack_require__.n(external_vanilla_tilt_);
;// CONCATENATED MODULE: ./lib/is-mobile-or-tablet.ts
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
 */ function isMobileOrTablet() {
    // https://stackoverflow.com/a/8876069/114157
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return viewportWidth < 1200;
};

// EXTERNAL MODULE: external "smoothscroll-polyfill"
var external_smoothscroll_polyfill_ = __webpack_require__(5786);
var external_smoothscroll_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_smoothscroll_polyfill_);
;// CONCATENATED MODULE: ./lib/smooth-scroll.ts
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
let installed = false;
function smooth_scroll_scroll(opts) {
    if (!installed) {
        try {
            external_smoothscroll_polyfill_default().polyfill();
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('smoothscroll polyfill failed', err);
            return;
        }
        installed = true;
    }
    try {
        window.scroll({
            behavior: 'smooth',
            ...opts
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('smoothscroll polyfill failed', err);
    }
};
const scrollTo = (el, offset = 0)=>{
    smooth_scroll_scroll({
        top: el.offsetTop + offset
    });
};

// EXTERNAL MODULE: ./components/ticket.module.css
var ticket_module = __webpack_require__(2742);
var ticket_module_default = /*#__PURE__*/__webpack_require__.n(ticket_module);
// EXTERNAL MODULE: ./components/utils.module.css
var utils_module = __webpack_require__(8288);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: ./components/icons/icon-github.tsx
var icon_github = __webpack_require__(3728);
;// CONCATENATED MODULE: ./components/icons/icon-check.tsx

function IconCheck({ color , size  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            fill: color || '#111111',
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: color || '#111111',
                d: "M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M7,11.4L3.6,8L5,6.6l2,2l4-4L12.4,6L7,11.4z"
            })
        })
    }));
};

// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
// EXTERNAL MODULE: ./components/loading-dots.tsx + 1 modules
var loading_dots = __webpack_require__(423);
// EXTERNAL MODULE: ./components/form.module.css
var form_module = __webpack_require__(8569);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
// EXTERNAL MODULE: ./components/ticket-form.module.css
var ticket_form_module = __webpack_require__(9833);
var ticket_form_module_default = /*#__PURE__*/__webpack_require__.n(ticket_form_module);
// EXTERNAL MODULE: ./lib/user-api.ts
var user_api = __webpack_require__(7969);
// EXTERNAL MODULE: external "@100mslive/react-icons"
var react_icons_ = __webpack_require__(3943);
;// CONCATENATED MODULE: ./components/ticket-form.tsx

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












const githubEnabled = Boolean(process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID);
function Form({ defaultUsername ='' , setTicketGenerationState  }) {
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)(defaultUsername);
    const { 0: formState , 1: setFormState  } = (0,external_react_.useState)('default');
    const { 0: errorMsg , 1: setErrorMsg  } = (0,external_react_.useState)('');
    const { userData , setUserData  } = useConfData();
    const formRef = (0,external_react_.useRef)(null);
    return formState === 'error' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()((form_module_default())["form-row"], (ticket_form_module_default())["form-row"]),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((form_module_default())["input-label"], (form_module_default()).error),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((form_module_default()).input, (form_module_default())["input-text"]),
                        children: errorMsg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: external_classnames_default()((form_module_default()).submit, (form_module_default()).error),
                        onClick: ()=>{
                            setFormState('default');
                            setTicketGenerationState('default');
                        },
                        children: "Try Again"
                    })
                ]
            })
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx("form", {
        ref: formRef,
        onSubmit: (e)=>{
            e.preventDefault();
            if (formState !== 'default') {
                setTicketGenerationState('default');
                setFormState('default');
                return;
            }
            setFormState('loading');
            setTicketGenerationState('loading');
            if (!process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID) {
                setFormState('error');
                setErrorMsg('GitHub OAuth App must be set up.');
                return;
            }
            const windowWidth = 600;
            const windowHeight = 700;
            // https://stackoverflow.com/a/32261263/114157
            const windowTop = window.top.outerHeight / 2 + window.top.screenY - 700 / 2;
            const windowLeft = window.top.outerWidth / 2 + window.top.screenX - 600 / 2;
            const openedWindow = window.open(`https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID)}`, 'githubOAuth', `resizable,scrollbars,status,width=${windowWidth},height=${windowHeight},top=${windowTop},left=${windowLeft}`);
            new Promise((resolve)=>{
                const interval = setInterval(()=>{
                    if (!openedWindow || openedWindow.closed) {
                        clearInterval(interval);
                        resolve(undefined);
                    }
                }, 250);
                window.addEventListener('message', function onMessage(msgEvent) {
                    // When devtools is opened the message may be received multiple times
                    if (constants/* SITE_ORIGIN */.yp !== msgEvent.origin || !msgEvent.data.type) {
                        return;
                    }
                    clearInterval(interval);
                    if (openedWindow) {
                        openedWindow.close();
                    }
                    resolve(msgEvent.data);
                });
            }).then(async (data)=>{
                if (!data) {
                    setFormState('default');
                    setTicketGenerationState('default');
                    return;
                }
                let usernameFromResponse;
                let name;
                if (data.type === 'token') {
                    const res = await (0,user_api/* saveGithubToken */.t)({
                        id: userData.id,
                        token: data.token
                    });
                    if (!res.ok) {
                        throw new Error('Failed to store oauth result');
                    }
                    const responseJson = await res.json();
                    usernameFromResponse = responseJson.username;
                    name = responseJson.name;
                } else {
                    usernameFromResponse = data.login;
                    name = data.name;
                }
                document.body.classList.add('ticket-generated');
                setUserData({
                    ...userData,
                    username: usernameFromResponse,
                    name
                });
                setUsername(usernameFromResponse);
                setFormState('default');
                setTicketGenerationState('default');
                // Prefetch GitHub avatar
                new Image().src = `https://github.com/${usernameFromResponse}.png`;
                // Prefetch the twitter share URL to eagerly generate the page
                fetch(`/tickets/${usernameFromResponse}`).catch((_)=>{});
            }).catch((err)=>{
                // eslint-disable-next-line no-console
                console.error(err);
                setFormState('error');
                setErrorMsg('Error! Please try again.');
                setTicketGenerationState('default');
            });
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((form_module_default())["form-row"], (ticket_form_module_default())["form-row"]),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: external_classnames_default()((form_module_default())["github-wrapper"]),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            type: "submit",
                            className: external_classnames_default()((form_module_default()).submit, (form_module_default())["generate-with-github"], (form_module_default())[formState], {
                                [(form_module_default())["not-allowed"]]: !githubEnabled
                            }),
                            disabled: !process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || formState === 'loading' || Boolean(username),
                            onClick: ()=>{
                                if (formRef && formRef.current && isMobileOrTablet()) {
                                    scrollTo(formRef.current, formRef.current.offsetHeight);
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ticket_form_module_default()).generateWithGithub,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (ticket_form_module_default()).githubIcon,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_github/* default */.Z, {
                                                color: "#fff",
                                                size: 24
                                            })
                                        }),
                                        formState === 'loading' ? /*#__PURE__*/ jsx_runtime_.jsx(loading_dots/* default */.Z, {
                                            size: 4
                                        }) : username || 'Generate with GitHub'
                                    ]
                                }),
                                username ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (ticket_form_module_default()).checkIcon,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(IconCheck, {
                                        color: "#fff",
                                        size: 24
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (ticket_form_module_default()).description,
                            children: githubEnabled ? 'Only public info will be used.' : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    "GitHub OAuth app is required.",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `${constants/* REPO */._}#authentication`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: (ticket_form_module_default())["learn-more"],
                                        children: "Learn more."
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (form_module_default())["or-divider"],
                    children: "OR"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/stage/a",
                    className: external_classnames_default()((form_module_default()).submit, (form_module_default())["generate-with-github"], (form_module_default())["stage-btn"]),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ticket_form_module_default()).generateWithGithub,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (ticket_form_module_default()).githubIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.InviteStageIcon, {})
                            }),
                            "Go to Live Stage"
                        ]
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/ticket-visual.tsx + 9 modules
var ticket_visual = __webpack_require__(7292);
// EXTERNAL MODULE: ./components/icons/icon-transition.module.css
var icon_transition_module = __webpack_require__(4883);
var icon_transition_module_default = /*#__PURE__*/__webpack_require__.n(icon_transition_module);
;// CONCATENATED MODULE: ./components/icons/icon-twitter.tsx

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
function IconTwitter({ width  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.643 4.93695C22.808 5.30695 21.911 5.55695 20.968 5.66995C21.93 5.09395 22.668 4.17995 23.016 3.09195C22.116 3.62595 21.119 4.01395 20.058 4.22195C19.208 3.31795 17.998 2.75195 16.658 2.75195C14.086 2.75195 12 4.83795 12 7.41195C12 7.77595 12.042 8.12995 12.12 8.47195C8.24701 8.27695 4.81601 6.42195 2.51801 3.60395C2.11801 4.29395 1.88801 5.09395 1.88801 5.94595C1.88801 7.56195 2.71101 8.98895 3.96001 9.82395C3.19601 9.79895 2.47801 9.58995 1.85001 9.24095V9.30095C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.228 6.69195 23.018 5.87295 23.641 4.93995L23.643 4.93695Z",
            className: (icon_transition_module_default())["fill-black"]
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/icon-linkedin.tsx

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
function IconLinkedin({ width  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 1.67079C0 0.748038 0.747522 0 1.67079 0H18.3292C19.252 0 20 0.747522 20 1.67079V18.3292C20 19.252 19.2525 20 18.3292 20H1.67079C0.748038 20 0 19.2525 0 18.3292V1.67079ZM7.91667 7.625H10.625V8.98583C11.0154 8.20333 12.0158 7.5 13.5187 7.5C16.3996 7.5 17.0833 9.0575 17.0833 11.9154V17.2083H14.1667V12.5662C14.1667 10.9388 13.7762 10.0208 12.7833 10.0208C11.4062 10.0208 10.8333 11.0104 10.8333 12.5662V17.2083H7.91667V7.625ZM2.91667 17.0833H5.83333V7.5H2.91667V17.0833ZM6.25 4.375C6.25 5.41042 5.41042 6.25 4.375 6.25C3.33958 6.25 2.5 5.41042 2.5 4.375C2.5 3.33958 3.33958 2.5 4.375 2.5C5.41042 2.5 6.25 3.33958 6.25 4.375Z",
            className: (icon_transition_module_default())["fill-black"]
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/icon-download.tsx

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

function IconDownload({ width  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: width,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z",
                className: external_classnames_default()((icon_transition_module_default())["fill-black"], (icon_transition_module_default())["stroke-black"]),
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 12L12 16L16 12",
                className: (icon_transition_module_default())["stroke-white"],
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 8L12 16",
                className: (icon_transition_module_default())["stroke-white"],
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/ticket-actions.module.css
var ticket_actions_module = __webpack_require__(1143);
var ticket_actions_module_default = /*#__PURE__*/__webpack_require__.n(ticket_actions_module);
;// CONCATENATED MODULE: ./components/ticket-actions.tsx

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








function TicketActions({ username  }) {
    const { 0: imgReady , 1: setImgReady  } = (0,external_react_.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const downloadLink = (0,external_react_.useRef)();
    const permalink = encodeURIComponent(`${constants/* SITE_URL */._O}/tickets/${username}`);
    const text = encodeURIComponent(constants/* TWEET_TEXT */.ZD);
    const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
    const downloadUrl = `/api/ticket-images/${username}`;
    (0,external_react_.useEffect)(()=>{
        setImgReady(false);
        const img = new Image();
        img.src = downloadUrl;
        img.onload = ()=>{
            setImgReady(true);
            setLoading(false);
            if (downloadLink.current) {
                downloadLink.current.click();
                downloadLink.current = undefined;
            }
        };
    }, [
        downloadUrl
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: external_classnames_default()((ticket_actions_module_default()).button, (utils_module_default()).appear, (ticket_actions_module_default()).first, 'icon-button'),
                href: tweetUrl,
                rel: "noopener noreferrer",
                target: "_blank",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(IconTwitter, {
                        width: 24
                    }),
                    " Tweet it!"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: external_classnames_default()((ticket_actions_module_default()).button, (utils_module_default()).appear, (ticket_actions_module_default()).second, 'icon-button', // LinkedIn Share widget doesn’t work on mobile
                (ticket_actions_module_default())["linkedin-button"]),
                href: linkedInUrl,
                rel: "noopener noreferrer",
                target: "_blank",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(IconLinkedin, {
                        width: 20
                    }),
                    " Share on LinkedIn"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: external_classnames_default()((ticket_actions_module_default()).button, (utils_module_default()).appear, (ticket_actions_module_default()).third, 'icon-button', {
                    [(ticket_actions_module_default()).loading]: loading
                }),
                href: loading ? undefined : downloadUrl,
                onClick: (e)=>{
                    if (imgReady) return;
                    e.preventDefault();
                    downloadLink.current = e.currentTarget;
                    // Wait for the image download to finish
                    setLoading(true);
                },
                download: "ticket.png",
                children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(loading_dots/* default */.Z, {
                    size: 4
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(IconDownload, {
                            width: 24
                        }),
                        " Download"
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/icons/icon-copy.tsx

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
 */ function IconCopy() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8 17.929H6C4.895 17.929 4 17.017 4 15.893V5.036C4 3.91 4.895 3 6 3H14C15.105 3 16 3.911 16 5.036V6.902M10 7.072H18C19.105 7.072 20 7.982 20 9.107V19.964C20 21.09 19.105 22 18 22H10C8.895 22 8 21.089 8 19.964V9.107C8 7.983 8.895 7.072 10 7.072Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }));
};

// EXTERNAL MODULE: ./components/ticket-copy.module.css
var ticket_copy_module = __webpack_require__(3317);
var ticket_copy_module_default = /*#__PURE__*/__webpack_require__.n(ticket_copy_module);
;// CONCATENATED MODULE: ./components/ticket-copy.tsx

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





function TicketCopy({ username  }) {
    const { 0: fadeOpacity , 1: setFadeOpacity  } = (0,external_react_.useState)(1);
    const { 0: scrolling , 1: setScrolling  } = (0,external_react_.useState)(false);
    const { 0: copyEnabled , 1: setCopyEnabled  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const scrollRef = (0,external_react_.useRef)(null);
    const buttonRef = (0,external_react_.useRef)(null);
    const url = `${constants/* SITE_URL */._O}/tickets/${username}`;
    (0,external_react_.useEffect)(()=>{
        if (navigator.clipboard) {
            setCopyEnabled(true);
        }
    }, []);
    const copiedText = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: external_classnames_default()((ticket_copy_module_default()).copied, {
            [(ticket_copy_module_default()).visible]: copied
        }),
        children: "Copied!"
    });
    const copyButton = /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: (ticket_copy_module_default())["copy-button"],
        ref: buttonRef,
        onClick: ()=>{
            navigator.clipboard.writeText(url).then(()=>{
                setCopied(true);
                setTimeout(()=>{
                    setCopied(false);
                }, 2000);
            });
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(IconCopy, {})
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((ticket_copy_module_default()).wrapper, (utils_module_default()).appear),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ticket_copy_module_default())["label-wrapper"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ticket_copy_module_default()).label,
                        children: "Your ticket URL:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()((ticket_copy_module_default())["mobile-copy"], {
                            [(ticket_copy_module_default())["mobile-copy-disabled"]]: !copyEnabled
                        }),
                        children: [
                            copiedText,
                            copyButton
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((ticket_copy_module_default()).field, {
                    [(ticket_copy_module_default())["desktop-copy-disabled"]]: !copyEnabled
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (ticket_copy_module_default()).url,
                        ref: scrollRef,
                        onScroll: ()=>{
                            if (!scrolling) {
                                setScrolling(true);
                                const animationFrame = requestAnimationFrame(()=>{
                                    var ref, ref1, ref2;
                                    const scrollableWidth = (((ref = scrollRef.current) === null || ref === void 0 ? void 0 : ref.scrollWidth) || 0) - (((ref1 = scrollRef.current) === null || ref1 === void 0 ? void 0 : ref1.clientWidth) || 0);
                                    setFadeOpacity((scrollableWidth - (((ref2 = scrollRef.current) === null || ref2 === void 0 ? void 0 : ref2.scrollLeft) || 0)) / (scrollableWidth || 1));
                                    cancelAnimationFrame(animationFrame);
                                    setScrolling(false);
                                });
                            }
                        },
                        children: url
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_classnames_default()((ticket_copy_module_default()).fade, {
                            [(ticket_copy_module_default())["desktop-copy-disabled"]]: !copyEnabled
                        }),
                        style: {
                            opacity: fadeOpacity
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()((ticket_copy_module_default())["desktop-copy"], (utils_module_default())["hide-on-mobile"], {
                            [(ticket_copy_module_default())["desktop-copy-disabled"]]: !copyEnabled
                        }),
                        children: [
                            copiedText,
                            copyButton
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./lib/form-error.ts
class FormError extends Error {
    constructor(res){
        super();
        this.res = res;
    }
}
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

// EXTERNAL MODULE: ./lib/hooks/use-email-query-param.ts
var use_email_query_param = __webpack_require__(6043);
// EXTERNAL MODULE: ./components/captcha.tsx + 1 modules
var captcha = __webpack_require__(9387);
;// CONCATENATED MODULE: ./components/form.tsx

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










function form_Form({ sharePage  }) {
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: errorMsg , 1: setErrorMsg  } = (0,external_react_.useState)('');
    const { 0: errorTryAgain , 1: setErrorTryAgain  } = (0,external_react_.useState)(false);
    const { 0: focused , 1: setFocused  } = (0,external_react_.useState)(false);
    const { 0: formState , 1: setFormState  } = (0,external_react_.useState)('default');
    const { setPageState , setUserData  } = useConfData();
    const router = (0,router_.useRouter)();
    const { ref: captchaRef , execute: executeCaptcha , reset: resetCaptcha , isEnabled: isCaptchaEnabled  } = (0,captcha/* useCaptcha */.m)();
    const handleRegister = (0,external_react_.useCallback)((token)=>{
        (0,user_api/* register */.z)(email, token).then(async (res)=>{
            if (!res.ok) {
                throw new FormError(res);
            }
            const data = await res.json();
            const params = {
                id: data.id,
                ticketNumber: data.ticketNumber,
                name: data.name,
                username: data.username
            };
            if (sharePage) {
                const queryString = Object.keys(params).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(params[key] || '')}`
                ).join('&');
                await router.replace(`/?${queryString}`, '/');
            } else {
                setUserData(params);
                setPageState('ticket');
            }
        }).catch(async (err)=>{
            let message = 'Error! Please try again.';
            if (err instanceof FormError) {
                var ref, ref1;
                const { res  } = err;
                const data = ((ref = res.headers.get('Content-Type')) === null || ref === void 0 ? void 0 : ref.includes('application/json')) ? await res.json() : null;
                if ((data === null || data === void 0 ? void 0 : (ref1 = data.error) === null || ref1 === void 0 ? void 0 : ref1.code) === 'bad_email') {
                    message = 'Please enter a valid email';
                }
            }
            setErrorMsg(message);
            setFormState('error');
        });
    }, [
        email,
        router,
        setPageState,
        setUserData,
        sharePage
    ]);
    const onSubmit = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        if (formState === 'default') {
            setFormState('loading');
            if (isCaptchaEnabled) {
                return executeCaptcha();
            }
            return handleRegister();
        } else {
            setFormState('default');
        }
    }, [
        executeCaptcha,
        formState,
        isCaptchaEnabled,
        handleRegister
    ]);
    const onTryAgainClick = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        setFormState('default');
        setErrorTryAgain(true);
        resetCaptcha();
    }, [
        resetCaptcha
    ]);
    (0,use_email_query_param/* default */.Z)('email', setEmail);
    return formState === 'error' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((form_module_default()).form, {
            [(form_module_default())["share-page"]]: sharePage
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (form_module_default())["form-row"],
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((form_module_default())["input-label"], (form_module_default()).error),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((form_module_default()).input, (form_module_default())["input-text"]),
                        children: errorMsg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: external_classnames_default()((form_module_default()).submit, (form_module_default()).register, (form_module_default()).error),
                        onClick: onTryAgainClick,
                        children: "Try Again"
                    })
                ]
            })
        })
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: external_classnames_default()((form_module_default()).form, {
            [(form_module_default())["share-page"]]: sharePage,
            [(utils_module_default()).appear]: !errorTryAgain,
            [(utils_module_default())["appear-fifth"]]: !errorTryAgain && !sharePage,
            [(utils_module_default())["appear-third"]]: !errorTryAgain && sharePage
        }),
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (form_module_default())["form-row"],
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: external_classnames_default()((form_module_default()).submit, (form_module_default()).register, (form_module_default())[formState]),
                    disabled: formState === 'loading',
                    children: formState === 'loading' ? /*#__PURE__*/ jsx_runtime_.jsx(loading_dots/* default */.Z, {
                        size: 4
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: "Register"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(captcha/* default */.Z, {
                ref: captchaRef,
                onVerify: handleRegister
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ticket.tsx

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












function Ticket({ username , name , ticketNumber , sharePage  }) {
    const ticketRef = (0,external_react_.useRef)(null);
    const { 0: ticketGenerationState , 1: setTicketGenerationState  } = (0,external_react_.useState)('default');
    const divRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (ticketRef.current && !window.matchMedia('(pointer: coarse)').matches) {
            external_vanilla_tilt_default().init(ticketRef.current, {
                glare: true,
                max: 5,
                'max-glare': 0.16,
                'full-page-listening': true
            });
        }
    }, [
        ticketRef
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!sharePage && divRef && divRef.current && isMobileOrTablet()) {
            scrollTo(divRef.current, -30);
        }
    }, [
        divRef,
        sharePage
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((ticket_module_default())["ticket-layout"], {
            [(ticket_module_default())["ticket-share-layout"]]: sharePage
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: divRef,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ticket_module_default())["ticket-text"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: external_classnames_default()((ticket_module_default()).hero, (utils_module_default()).appear, (utils_module_default())["appear-first"]),
                                children: sharePage ? name ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        name,
                                        "’s Ticket"
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: constants/* SITE_NAME */.px
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        "You're in. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " Make it unique."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: external_classnames_default()((ticket_module_default()).description, (utils_module_default()).appear, (utils_module_default())["appear-second"]),
                                children: sharePage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        "Join ",
                                        name ?? 'them',
                                        " on ",
                                        constants/* DATE */.Hu,
                                        "."
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        "Generate a unique ticket image with ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            className: (utils_module_default())["hide-on-mobile"]
                                        }),
                                        "your GitHub profile."
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((utils_module_default()).appear, (utils_module_default())["appear-third"]),
                        children: !sharePage ? /*#__PURE__*/ jsx_runtime_.jsx(Form, {
                            defaultUsername: username,
                            setTicketGenerationState: setTicketGenerationState
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(form_Form, {
                            sharePage: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ticket_module_default())["ticket-visual-wrapper"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: ticketRef,
                        className: external_classnames_default()((ticket_module_default())["ticket-visual"], (utils_module_default()).appear, (utils_module_default())["appear-fourth"]),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ticket_visual/* default */.Z, {
                            username: username,
                            name: name,
                            ticketNumber: ticketNumber,
                            ticketGenerationState: ticketGenerationState
                        })
                    }),
                    !sharePage && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: username ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (ticket_module_default())["ticket-actions"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TicketActions, {
                                        username: username
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (ticket_module_default())["ticket-copy"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TicketCopy, {
                                        username: username
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ticket_module_default())["ticket-actions-placeholder"]
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(6289);
// EXTERNAL MODULE: ./components/conf-container.module.css
var conf_container_module = __webpack_require__(3232);
var conf_container_module_default = /*#__PURE__*/__webpack_require__.n(conf_container_module);
;// CONCATENATED MODULE: ./components/conf-container.tsx

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
function ConfContainer({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (conf_container_module_default()).container,
        children: children
    }));
};

// EXTERNAL MODULE: ./components/hero.module.css
var hero_module = __webpack_require__(8846);
var hero_module_default = /*#__PURE__*/__webpack_require__.n(hero_module);
;// CONCATENATED MODULE: ./components/hero.tsx

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



function Hero() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (hero_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: external_classnames_default()((utils_module_default()).appear, (utils_module_default())["appear-third"], (utils_module_default())["show-on-mobile"], (hero_module_default()).description),
                children: constants/* SITE_DESCRIPTION */.vk
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: external_classnames_default()((utils_module_default()).appear, (utils_module_default())["appear-third"], (hero_module_default()).hero),
                children: [
                    "Welcome to the",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        className: (utils_module_default())["show-on-desktop"]
                    }),
                    " ",
                    constants/* BRAND_NAME */.RS,
                    " conference"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: external_classnames_default()((utils_module_default()).appear, (utils_module_default())["appear-third"], (utils_module_default())["show-on-tablet"], (hero_module_default()).description),
                children: constants/* SITE_DESCRIPTION */.vk
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((utils_module_default()).appear, (utils_module_default())["appear-fourth"], (hero_module_default()).info),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: constants/* DATE */.Hu
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (hero_module_default())["description-separator"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "Online"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/contact.module.css
var contact_module = __webpack_require__(8702);
var contact_module_default = /*#__PURE__*/__webpack_require__.n(contact_module);
;// CONCATENATED MODULE: ./components/learn-more.tsx

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



function LearnMore() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((utils_module_default()).appear, (utils_module_default())["appear-fifth"], (contact_module_default()).contact),
        children: [
            "Learn more on",
            ' ',
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: constants/* REPO */._,
                className: (contact_module_default())["contact-email"],
                target: "_blank",
                rel: "noopener noreferrer",
                children: "GitHub"
            }),
            "."
        ]
    }));
};

;// CONCATENATED MODULE: ./components/index.tsx

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







function Conf({ defaultUserData , sharePage , defaultPageState ='registration'  }) {
    const { 0: userData , 1: setUserData  } = (0,external_react_.useState)(defaultUserData);
    const { 0: pageState , 1: setPageState  } = (0,external_react_.useState)(defaultPageState);
    return(/*#__PURE__*/ jsx_runtime_.jsx(ConfDataContext.Provider, {
        value: {
            userData,
            setUserData,
            setPageState
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(ConfContainer, {
                children: pageState === 'registration' && !sharePage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(form_Form, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(LearnMore, {})
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Ticket, {
                    username: userData.username,
                    name: userData.name,
                    ticketNumber: userData.ticketNumber,
                    sharePage: sharePage
                })
            })
        })
    }));
};


/***/ })

};
;