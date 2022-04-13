(() => {
var exports = {};
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 3871:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "schedule_container__aYvHo",
	"row-wrapper": "schedule_row-wrapper__vrqEj",
	"row": "schedule_row__8BAuU",
	"stage-name": "schedule_stage-name__5oGAf",
	"talks": "schedule_talks__Jx3ck"
};


/***/ }),

/***/ 7817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SchedulePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/page.tsx
var page = __webpack_require__(8434);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/schedule.module.css
var schedule_module = __webpack_require__(3871);
var schedule_module_default = /*#__PURE__*/__webpack_require__.n(schedule_module);
// EXTERNAL MODULE: ./components/talk-card.tsx
var talk_card = __webpack_require__(9586);
;// CONCATENATED MODULE: ./components/schedule.tsx

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


function StageRow({ stage  }) {
    // Group talks by the time block
    const timeBlocks = stage.schedule.reduce((allBlocks, talk)=>{
        allBlocks[talk.start] = [
            ...allBlocks[talk.start] || [],
            talk
        ];
        return allBlocks;
    }, {});
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (schedule_module_default()).row,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: external_classnames_default()((schedule_module_default())["stage-name"], (schedule_module_default())[stage.slug]),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: stage.name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()((schedule_module_default()).talks, (schedule_module_default())[stage.slug]),
                children: Object.keys(timeBlocks).map((startTime)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: timeBlocks[startTime].map((talk, index)=>/*#__PURE__*/ jsx_runtime_.jsx(talk_card/* default */.Z, {
                                talk: talk,
                                showTime: index === 0
                            }, talk.title)
                        )
                    }, startTime)
                )
            })
        ]
    }, stage.name));
}
function Schedule({ allStages  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (schedule_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (schedule_module_default())["row-wrapper"],
            children: allStages.map((stage)=>/*#__PURE__*/ jsx_runtime_.jsx(StageRow, {
                    stage: stage
                }, stage.slug)
            )
        })
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
;// CONCATENATED MODULE: ./pages/schedule.tsx







function SchedulePage({ allStages  }) {
    const meta = {
        title: 'Schedule - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        meta: meta,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                    hero: "Schedule",
                    description: meta.description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Schedule, {
                    allStages: allStages
                })
            ]
        })
    }));
};
const getStaticProps = async ()=>{
    const allStages = await (0,cms_api/* getAllStages */.hS)();
    return {
        props: {
            allStages
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

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,942,36,919,952,586], () => (__webpack_exec__(7817)));
module.exports = __webpack_exports__;

})();