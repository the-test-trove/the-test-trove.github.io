(() => {
var exports = {};
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 6947:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "speaker-section_container__GvjJg",
	"backlink": "speaker-section_backlink__MZXCi",
	"speaker-details": "speaker-section_speaker-details__lL2bf",
	"talk-details": "speaker-section_talk-details__YdC7O",
	"bio": "speaker-section_bio__vBSX0",
	"image": "speaker-section_image__t0gSv",
	"name": "speaker-section_name__nW3Sj",
	"company": "speaker-section_company__T5eMu",
	"title": "speaker-section_title__SpNhK",
	"bio-header": "speaker-section_bio-header__KmSaq",
	"socials-header": "speaker-section_socials-header__DBNUd",
	"disabled": "speaker-section_disabled__eXzGn",
	"githubIcon": "speaker-section_githubIcon__fYFev"
};


/***/ }),

/***/ 8661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SpeakerPage),
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
// EXTERNAL MODULE: ./components/icons/icon-github.tsx
var icon_github = __webpack_require__(3728);
// EXTERNAL MODULE: ./components/speaker-section.module.css
var speaker_section_module = __webpack_require__(6947);
var speaker_section_module_default = /*#__PURE__*/__webpack_require__.n(speaker_section_module);
;// CONCATENATED MODULE: ./components/speaker-section.tsx

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




const TwitterIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 24,
        viewBox: "0 0 24 24",
        fill: "white",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.643 4.93695C22.808 5.30695 21.911 5.55695 20.968 5.66995C21.93 5.09395 22.668 4.17995 23.016 3.09195C22.116 3.62595 21.119 4.01395 20.058 4.22195C19.208 3.31795 17.998 2.75195 16.658 2.75195C14.086 2.75195 12 4.83795 12 7.41195C12 7.77595 12.042 8.12995 12.12 8.47195C8.24701 8.27695 4.81601 6.42195 2.51801 3.60395C2.11801 4.29395 1.88801 5.09395 1.88801 5.94595C1.88801 7.56195 2.71101 8.98895 3.96001 9.82395C3.19601 9.79895 2.47801 9.58995 1.85001 9.24095V9.30095C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.228 6.69195 23.018 5.87295 23.641 4.93995L23.643 4.93695Z",
            fill: "#D8D8D8"
        })
    })
;
function SpeakerSection({ speaker  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/speakers",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: (speaker_section_module_default()).backlink,
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
                        "Back to speakers"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (speaker_section_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            minWidth: '300px'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            alt: speaker.name,
                            title: speaker.name,
                            src: speaker.image.url,
                            className: (speaker_section_module_default()).image,
                            loading: "lazy",
                            height: 400,
                            width: 300
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (speaker_section_module_default())["speaker-details"],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (speaker_section_module_default()).name,
                                    children: speaker.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (speaker_section_module_default()).title,
                                    children: [
                                        `${speaker.title} @ `,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (speaker_section_module_default()).company,
                                            children: speaker.company
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (speaker_section_module_default())["bio-header"],
                                    children: "Bio"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (speaker_section_module_default()).bio,
                                    children: speaker.bio
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (speaker_section_module_default())["socials-header"],
                                    children: "Social Media"
                                }),
                                speaker.twitter ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    "aria-label": "Twitter",
                                    href: speaker.twitter,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TwitterIcon, {})
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (speaker_section_module_default()).disabled,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TwitterIcon, {})
                                }),
                                speaker.github ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    "aria-label": "GitHub",
                                    className: (speaker_section_module_default()).githubIcon,
                                    href: speaker.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon_github/* default */.Z, {
                                        color: "#D8D8D8",
                                        size: 24
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: external_classnames_default()((speaker_section_module_default()).githubIcon, (speaker_section_module_default()).disabled),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icon_github/* default */.Z, {
                                        color: "#D8D8D8",
                                        size: 24
                                    })
                                })
                            ]
                        })
                    })
                ]
            }, speaker.name),
            speaker.talk && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (speaker_section_module_default())["talk-details"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (speaker_section_module_default())["socials-header"],
                        children: speaker.talk.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: speaker.talk.description
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
;// CONCATENATED MODULE: ./pages/speakers/[slug].tsx






function SpeakerPage({ speaker  }) {
    const meta = {
        title: 'Demo - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        meta: meta,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(SpeakerSection, {
                speaker: speaker
            })
        })
    }));
};
const getStaticProps = async ({ params  })=>{
    const slug = params === null || params === void 0 ? void 0 : params.slug;
    const speakers = await (0,cms_api/* getAllSpeakers */.Jb)();
    const currentSpeaker = speakers.find((s)=>s.slug === slug
    ) || null;
    if (!currentSpeaker) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            speaker: currentSpeaker
        },
        revalidate: 60
    };
};
const getStaticPaths = async ()=>{
    const speakers = await (0,cms_api/* getAllSpeakers */.Jb)();
    const slugs = speakers.map((s)=>({
            params: {
                slug: s.slug
            }
        })
    );
    return {
        paths: slugs,
        fallback: false
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,942,36,919,728], () => (__webpack_exec__(8661)));
module.exports = __webpack_exports__;

})();