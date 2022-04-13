exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 7987:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__OT4Wn",
	"footer-link": "footer_footer-link__SZxOe",
	"footer-logo": "footer_footer-logo__hF2Qe",
	"footer-legal": "footer_footer-legal__E2Bb4",
	"footer-copyright": "footer_footer-copyright__nrysZ",
	"footer-separator": "footer_footer-separator__WDBa_",
	"footer-center-group": "footer_footer-center-group__DQeAz",
	"footer-hostedby": "footer_footer-hostedby__cYLmO",
	"footer-paragraph": "footer_footer-paragraph__q0t1J",
	"secondary-text": "footer_secondary-text__h8ggL"
};


/***/ }),

/***/ 9849:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "layout_background__qqb_S",
	"page": "layout_page__mKguC",
	"main": "layout_main__o_HW1",
	"full": "layout_full__oosyg",
	"header": "layout_header__kY0Lt",
	"header-logos": "layout_header-logos__6rLNe",
	"header-right": "layout_header-right__Hvt1N",
	"tabs": "layout_tabs__5liOa",
	"tab": "layout_tab__4AsHX",
	"tab-active": "layout_tab-active__T8k5w",
	"logo": "layout_logo__GTPGC"
};


/***/ }),

/***/ 6803:
/***/ ((module) => {

// Exports
module.exports = {
	"nav-overlay": "mobile-menu_nav-overlay__7OCyg",
	"nav": "mobile-menu_nav__ebAUd",
	"nav-item": "mobile-menu_nav-item__SKmf2",
	"nav-active": "mobile-menu_nav-active__E6Q_3",
	"button": "mobile-menu_button__4uKdf",
	"icon": "mobile-menu_icon__cHj4t"
};


/***/ }),

/***/ 4212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ hmsConfig)
/* harmony export */ });
const hmsConfig = {
    /**
   * no. of tiles rendered before active speaker mode actviates
   */ activeSpeakerThreshold: 2,
    /**
   * aspect ratio of video tiles
   */ aspectRatio: {
        width: 1.8,
        height: 1
    },
    /**
   * maximum no.of tiles that can be rendered in speakers row
   */ maxTileCountSpeakers: 5,
    /**
   * Turn off 100ms added things ->
   * Disable for removing Invite change role CTAs
   */ hmsIntegration: true,
    /**
   * border color for audioLevel
   */ audioLevelColor: '#702ec2',
    /**
   * setHmsWatermark
   */ setHmsWatermark: true
};


/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@reach/skip-nav"
var skip_nav_ = __webpack_require__(5738);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(9849);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./components/icons/icon-logo.tsx
var icon_logo = __webpack_require__(8599);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@react-stately/overlays"
var overlays_ = __webpack_require__(2893);
// EXTERNAL MODULE: external "@react-aria/overlays"
var external_react_aria_overlays_ = __webpack_require__(292);
// EXTERNAL MODULE: external "@react-aria/dialog"
var dialog_ = __webpack_require__(2163);
// EXTERNAL MODULE: external "@react-aria/focus"
var focus_ = __webpack_require__(3888);
// EXTERNAL MODULE: external "@react-aria/button"
var button_ = __webpack_require__(9374);
// EXTERNAL MODULE: ./components/mobile-menu.module.css
var mobile_menu_module = __webpack_require__(6803);
var mobile_menu_module_default = /*#__PURE__*/__webpack_require__.n(mobile_menu_module);
;// CONCATENATED MODULE: ./components/mobile-menu.tsx

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










function ModalDialog(props) {
    const router = (0,router_.useRouter)();
    const activeRoute = router.asPath;
    const ref = (0,external_react_.useRef)(null);
    const { modalProps  } = (0,external_react_aria_overlays_.useModal)();
    const { overlayProps  } = (0,external_react_aria_overlays_.useOverlay)(props, ref);
    const { dialogProps  } = (0,dialog_.useDialog)(props, ref);
    (0,external_react_aria_overlays_.usePreventScroll)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (mobile_menu_module_default())["nav-overlay"],
        children: /*#__PURE__*/ jsx_runtime_.jsx(focus_.FocusScope, {
            contain: true,
            restoreFocus: true,
            autoFocus: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (mobile_menu_module_default()).nav,
                ...overlayProps,
                ...dialogProps,
                ...modalProps,
                ref: ref,
                children: constants/* NAVIGATION.map */.k2.map(({ name , route  })=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: route,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()((mobile_menu_module_default())["nav-item"], {
                                [(mobile_menu_module_default())["nav-active"]]: activeRoute.startsWith(route)
                            }),
                            children: name
                        })
                    }, name)
                )
            })
        })
    }));
}
function Overlay() {
    const state = (0,overlays_.useOverlayTriggerState)({});
    const ref = (0,external_react_.useRef)(null);
    const { buttonProps  } = (0,button_.useButton)({
        onPress: ()=>state.isOpen ? state.close() : state.open()
    }, ref);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Mobile Menu",
                type: "button",
                className: (mobile_menu_module_default()).button,
                ...buttonProps,
                ref: ref,
                children: state.isOpen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    className: (mobile_menu_module_default()).icon,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M18 6L6 18"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6 6l12 12"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    className: (mobile_menu_module_default()).icon,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M3 12h18"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M3 6h18"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M3 18h18"
                        })
                    ]
                })
            }),
            state.isOpen && /*#__PURE__*/ jsx_runtime_.jsx(external_react_aria_overlays_.OverlayContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ModalDialog, {
                    isOpen: true,
                    onClose: (...props)=>state.close(...props)
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/icons/icon-platform.tsx
var icon_platform = __webpack_require__(3096);
// EXTERNAL MODULE: ./components/footer.module.css
var footer_module = __webpack_require__(7987);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer.tsx

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



function HostedByVercel() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "https://vercel.com",
        className: external_classnames_default()((footer_module_default())["footer-link"], (footer_module_default())["footer-logo"]),
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footer_module_default())["secondary-text"],
                children: "Created by "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(icon_platform/* default */.Z, {
                color: "white"
            })
        ]
    }));
}
function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: external_classnames_default()((footer_module_default()).footer),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (footer_module_default())["footer-legal"],
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default())["footer-hostedby"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(HostedByVercel, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (footer_module_default())["footer-separator"]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default())["footer-copyright"],
                    children: [
                        "Copyright \xa9 ",
                        `${new Date().getFullYear()} `,
                        " ",
                        constants/* COPYRIGHT_HOLDER */.mb || `${constants/* SITE_NAME */.px}.`,
                        " All rights reserved."
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default())["footer-center-group"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footer_module_default())["footer-paragraph"],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: constants/* REPO */._,
                                className: (footer_module_default())["footer-link"],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Source Code"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (footer_module_default())["footer-separator"]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footer_module_default())["footer-paragraph"],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: constants/* CODE_OF_CONDUCT */.s$,
                                className: (footer_module_default())["footer-link"],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Code of Conduct"
                            })
                        }),
                        constants/* LEGAL_URL */.vi && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default())["footer-separator"]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (footer_module_default())["footer-paragraph"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: constants/* LEGAL_URL */.vi,
                                        className: (footer_module_default())["footer-link"],
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Legal"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./components/hms/config.ts
var config = __webpack_require__(4212);
;// CONCATENATED MODULE: ./components/layout.tsx

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









// import DemoButton from './hms/demo-cta';
// import RoomCta from './hms/demo-cta/room-cta';

function Layout({ children , className , hideNav , layoutStyles , isLive =false  }) {
    const router = (0,router_.useRouter)();
    const activeRoute = router.asPath;
    const disableCta = [
        '/schedule',
        '/speakers',
        '/expo',
        '/jobs'
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (layout_module_default()).background,
            children: [
                !hideNav && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: external_classnames_default()((layout_module_default()).header),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (layout_module_default())["header-logos"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Overlay, {}, router.asPath),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (layout_module_default()).logo,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon_logo/* default */.Z, {})
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (layout_module_default()).tabs,
                            children: constants/* NAVIGATION.map */.k2.map(({ name , route  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: route,
                                    className: external_classnames_default()((layout_module_default()).tab, {
                                        [(layout_module_default())["tab-active"]]: activeRoute.startsWith(route)
                                    }),
                                    children: name
                                }, name)
                            )
                        }),
                        config/* hmsConfig.hmsIntegration */.E.hmsIntegration && isLive && !disableCta.includes(activeRoute) || activeRoute === '/' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: external_classnames_default()((layout_module_default())["header-right"])
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (layout_module_default()).page,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                            className: (layout_module_default()).main,
                            style: layoutStyles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(skip_nav_.SkipNavContent, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: external_classnames_default()((layout_module_default()).full, className),
                                    children: children
                                })
                            ]
                        }),
                        !activeRoute.startsWith('/stage') && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 8434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9953);

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



function Page({ meta , children , fullViewport =false  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const image = meta.image || '/twitter-card.png';
    const title = meta.title || _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .SITE_NAME */ .px;
    const url = meta.url || `${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .SITE_URL */ ._O}${router.asPath}`;
    const description = meta.description || _lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .SITE_NAME */ .px;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('page-container', {
            full: fullViewport
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:site",
                        content: `@${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .TWITTER_USER_NAME */ .N5}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: image ? 'summary_large_image' : 'summary'
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preload",
                        href: "https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous"
                    }),
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: image.startsWith('https://') ? image : `${_lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .SITE_URL */ ._O}${image}`
                    })
                ]
            }),
            children
        ]
    }));
};


/***/ })

};
;