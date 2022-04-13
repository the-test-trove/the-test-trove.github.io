(() => {
var exports = {};
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 9160:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "sponsors-grid_card__xuZ7I",
	"grid": "sponsors-grid_grid__XV3Hp",
	"silver": "sponsors-grid_silver__Ow56K",
	"cardBody": "sponsors-grid_cardBody__F0Wii",
	"imageWrapper": "sponsors-grid_imageWrapper__E59oF",
	"image": "sponsors-grid_image__vgOuE",
	"name": "sponsors-grid_name__0apvI",
	"description": "sponsors-grid_description__GpO67"
};


/***/ }),

/***/ 4323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExpoPage),
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
// EXTERNAL MODULE: ./components/sponsors-grid.module.css
var sponsors_grid_module = __webpack_require__(9160);
var sponsors_grid_module_default = /*#__PURE__*/__webpack_require__.n(sponsors_grid_module);
;// CONCATENATED MODULE: ./components/sponsors-grid.tsx

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



function SponsorCard({ sponsor  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/expo/${sponsor.slug}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            role: "button",
            tabIndex: 0,
            className: external_classnames_default()((sponsors_grid_module_default()).card, {
                [(sponsors_grid_module_default()).diamond]: sponsor.tier === 'diamond',
                [(sponsors_grid_module_default()).gold]: sponsor.tier === 'gold'
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (sponsors_grid_module_default()).imageWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        alt: sponsor.name,
                        src: sponsor.cardImage.url,
                        className: external_classnames_default()((sponsors_grid_module_default()).image, {
                            [(sponsors_grid_module_default()).silver]: sponsor.tier === 'silver'
                        }),
                        loading: "lazy",
                        title: sponsor.name,
                        width: 900,
                        height: 500
                    })
                }),
                sponsor.tier !== 'silver' && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (sponsors_grid_module_default()).cardBody,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (sponsors_grid_module_default()).name,
                                children: sponsor.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (sponsors_grid_module_default()).description,
                                children: sponsor.description
                            })
                        ]
                    })
                })
            ]
        })
    }, sponsor.name));
}
function SponsorsGrid({ sponsors  }) {
    const silverSponsors = sponsors.filter((s)=>s.tier === 'silver'
    );
    const otherSponsors = sponsors.filter((s)=>s.tier !== 'silver'
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (sponsors_grid_module_default()).grid,
                children: otherSponsors.map((sponsor)=>/*#__PURE__*/ jsx_runtime_.jsx(SponsorCard, {
                        sponsor: sponsor
                    }, sponsor.name)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (sponsors_grid_module_default()).grid,
                children: silverSponsors.map((sponsor)=>/*#__PURE__*/ jsx_runtime_.jsx(SponsorCard, {
                        sponsor: sponsor
                    }, sponsor.name)
                )
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/header.tsx
var header = __webpack_require__(1952);
// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(6289);
// EXTERNAL MODULE: ./lib/cms-api.ts + 7 modules
var cms_api = __webpack_require__(4919);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
;// CONCATENATED MODULE: ./pages/expo.tsx







function ExpoPage({ sponsors  }) {
    const meta = {
        title: 'Expo - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        meta: meta,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                    hero: "Expo",
                    description: meta.description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SponsorsGrid, {
                    sponsors: sponsors
                })
            ]
        })
    }));
};
const getStaticProps = async ()=>{
    const sponsors = await (0,cms_api/* getAllSponsors */.H8)();
    return {
        props: {
            sponsors
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,942,36,919,952], () => (__webpack_exec__(4323)));
module.exports = __webpack_exports__;

})();