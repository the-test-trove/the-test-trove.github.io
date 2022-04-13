(() => {
var exports = {};
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 9835:
/***/ ((module) => {

// Exports
module.exports = {
	"companyRow": "jobs-grid_companyRow__AYTCM",
	"grid": "jobs-grid_grid__OAUf_",
	"companyName": "jobs-grid_companyName__kMZqB",
	"rowHeader": "jobs-grid_rowHeader__X6dpx",
	"card": "jobs-grid_card__70OwY",
	"cardBody": "jobs-grid_cardBody__JwEIO",
	"title": "jobs-grid_title__iR77p",
	"company": "jobs-grid_company__iwhJe",
	"description": "jobs-grid_description__YBXqI",
	"link": "jobs-grid_link__3yYRC",
	"icon": "jobs-grid_icon__z9Pmy",
	"button": "jobs-grid_button__yKHzS"
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Jobs),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/page.tsx
var page = __webpack_require__(8434);
// EXTERNAL MODULE: ./components/jobs-grid.module.css
var jobs_grid_module = __webpack_require__(9835);
var jobs_grid_module_default = /*#__PURE__*/__webpack_require__.n(jobs_grid_module);
;// CONCATENATED MODULE: ./components/jobs-grid.tsx


function CompanyJobs({ jobs  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (jobs_grid_module_default()).grid,
        children: jobs.map((job)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (jobs_grid_module_default()).card,
                href: job.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (jobs_grid_module_default()).cardBody,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (jobs_grid_module_default()).title,
                                    children: job.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (jobs_grid_module_default()).company,
                                    children: job.companyName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (jobs_grid_module_default()).description,
                                    children: job.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: (jobs_grid_module_default()).link,
                            children: [
                                "Learn More",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: (jobs_grid_module_default()).icon,
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
                        })
                    ]
                })
            }, job.id)
        )
    }));
}
function JobsGrid({ jobs  }) {
    const companies = jobs.reduce((allCompanies, job)=>{
        allCompanies[job.companyName] = [
            ...allCompanies[job.companyName] || [],
            job
        ];
        return allCompanies;
    }, {});
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: Object.keys(companies).map((companyName)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (jobs_grid_module_default()).companyRow,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (jobs_grid_module_default()).rowHeader,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (jobs_grid_module_default()).companyName,
                                children: companyName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: companies[companyName][0].discord,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (jobs_grid_module_default()).button,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Join the recruiters live on"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 245 240",
                                        fill: "white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CompanyJobs, {
                        jobs: companies[companyName]
                    })
                ]
            }, companyName)
        )
    }));
};

// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(6289);
// EXTERNAL MODULE: ./components/header.tsx
var header = __webpack_require__(1952);
// EXTERNAL MODULE: ./lib/cms-api.ts + 7 modules
var cms_api = __webpack_require__(4919);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
;// CONCATENATED MODULE: ./pages/jobs.tsx







function Jobs({ jobs  }) {
    const meta = {
        title: 'Career Fair - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        meta: meta,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                    hero: "Career Fair",
                    description: meta.description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(JobsGrid, {
                    jobs: jobs
                })
            ]
        })
    }));
};
const getStaticProps = async ()=>{
    const jobs = await (0,cms_api/* getAllJobs */.sQ)();
    return {
        props: {
            jobs
        },
        revalidate: 60
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,942,36,919,952], () => (__webpack_exec__(4548)));
module.exports = __webpack_exports__;

})();