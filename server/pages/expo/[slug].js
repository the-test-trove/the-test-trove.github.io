(() => {
var exports = {};
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 7155:
/***/ ((module) => {

// Exports
module.exports = {
	"video": "sponsor-section_video__0VQGG",
	"layout": "sponsor-section_layout__I1dRq",
	"container": "sponsor-section_container__pQeOl",
	"backlink": "sponsor-section_backlink__bfXRA",
	"name-and-logo": "sponsor-section_name-and-logo__EtvzB",
	"sponsor-details": "sponsor-section_sponsor-details__8Rsml",
	"image": "sponsor-section_image__XTEcB",
	"name": "sponsor-section_name__rCfLz",
	"button": "sponsor-section_button__hpA5X",
	"button-resource": "sponsor-section_button-resource__DERVo",
	"truncate": "sponsor-section_truncate__GvziS",
	"button-link": "sponsor-section_button-link__Dkqr8",
	"description": "sponsor-section_description__DC3gp",
	"resources": "sponsor-section_resources__8wmzB",
	"heading": "sponsor-section_heading__DSHV6"
};


/***/ }),

/***/ 8288:
/***/ ((module) => {

// Exports
module.exports = {
	"appear": "utils_appear__u0bLv",
	"appear-first": "utils_appear-first__kz3v5",
	"appear-second": "utils_appear-second__bY9N1",
	"appear-third": "utils_appear-third__JahUD",
	"appear-fourth": "utils_appear-fourth__XNw_J",
	"appear-fifth": "utils_appear-fifth___yRQN",
	"appear-sixth": "utils_appear-sixth__EloGF",
	"hide-on-desktop": "utils_hide-on-desktop__3YxhP",
	"show-on-mobile": "utils_show-on-mobile__TvSSi",
	"hide-on-mobile": "utils_hide-on-mobile__n47Gb",
	"hide-on-tablet": "utils_hide-on-tablet__eX2XX",
	"show-on-tablet": "utils_show-on-tablet__bu64w"
};


/***/ }),

/***/ 7960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SponsorPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/page.tsx
var page = __webpack_require__(8434);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/sponsor-section.module.css
var sponsor_section_module = __webpack_require__(7155);
var sponsor_section_module_default = /*#__PURE__*/__webpack_require__.n(sponsor_section_module);
// EXTERNAL MODULE: ./components/utils.module.css
var utils_module = __webpack_require__(8288);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
;// CONCATENATED MODULE: ./components/sponsor-section.tsx

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




function SponsorSection({ sponsor  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/expo",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: (sponsor_section_module_default()).backlink,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            shapeRendering: "geometricPrecision",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M15 18l-6-6 6-6"
                            })
                        }),
                        "Back to expo"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (sponsor_section_module_default()).layout,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        className: external_classnames_default()((sponsor_section_module_default()).video, (utils_module_default()).appear, (utils_module_default())["appear-first"]),
                        allow: "picture-in-picture",
                        allowFullScreen: true,
                        frameBorder: "0",
                        height: "100%",
                        src: `https://youtube.com/embed/${sponsor.youtubeSlug}`,
                        title: sponsor.name,
                        width: "100%"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (sponsor_section_module_default()).container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (sponsor_section_module_default())["name-and-logo"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        alt: sponsor.name,
                                        src: sponsor.logo.url,
                                        className: (sponsor_section_module_default()).image,
                                        loading: "lazy",
                                        title: sponsor.name,
                                        height: 64,
                                        width: 64
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: (sponsor_section_module_default()).name,
                                        children: sponsor.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (sponsor_section_module_default()).description,
                                children: sponsor.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (sponsor_section_module_default())["sponsor-details"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: sponsor.callToActionLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        type: "button",
                                        className: (sponsor_section_module_default()).button,
                                        children: sponsor.callToAction
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: sponsor.discord,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        type: "button",
                                        className: external_classnames_default()((sponsor_section_module_default()).button, (sponsor_section_module_default())["button-link"]),
                                        children: "Chat on Discord"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (sponsor_section_module_default()).resources,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (sponsor_section_module_default()).heading,
                                        children: "Resources"
                                    }),
                                    sponsor.links.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: link.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: external_classnames_default()((sponsor_section_module_default()).button, (sponsor_section_module_default())["button-resource"]),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (sponsor_section_module_default()).truncate,
                                                    children: link.text
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    viewBox: "0 0 24 24",
                                                    width: "16",
                                                    height: "16",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    fill: "none",
                                                    shapeRendering: "geometricPrecision",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M15 3h6v6"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M10 14L21 3"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, link.url)
                                    )
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(6289);
// EXTERNAL MODULE: ./lib/cms-api.ts + 7 modules
var cms_api = __webpack_require__(4919);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
;// CONCATENATED MODULE: ./pages/expo/[slug].tsx






function SponsorPage({ sponsor  }) {
    const meta = {
        title: 'Demo - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        meta: meta,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(SponsorSection, {
                sponsor: sponsor
            })
        })
    }));
};
const getStaticProps = async ({ params  })=>{
    const slug = params === null || params === void 0 ? void 0 : params.slug;
    const sponsors = await (0,cms_api/* getAllSponsors */.H8)();
    const sponsor = sponsors.find((s)=>s.slug === slug
    ) || null;
    if (!sponsor) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            sponsor
        },
        revalidate: 60
    };
};
const getStaticPaths = async ()=>{
    const sponsors = await (0,cms_api/* getAllSponsors */.H8)();
    const slugs = sponsors.map((s)=>({
            params: {
                slug: s.slug
            }
        })
    );
    return {
        paths: slugs,
        fallback: 'blocking'
    };
};


/***/ }),

/***/ 4933:
/***/ ((module) => {

"use strict";
module.exports = require("@agility/content-sync");

/***/ }),

/***/ 3468:
/***/ ((module) => {

"use strict";
module.exports = require("@agility/content-sync/src/store-interface-filesystem");

/***/ }),

/***/ 5738:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/skip-nav");

/***/ }),

/***/ 9374:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/button");

/***/ }),

/***/ 2163:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/dialog");

/***/ }),

/***/ 3888:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/focus");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/overlays");

/***/ }),

/***/ 2893:
/***/ ((module) => {

"use strict";
module.exports = require("@react-stately/overlays");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,942,36,919], () => (__webpack_exec__(7960)));
module.exports = __webpack_exports__;

})();