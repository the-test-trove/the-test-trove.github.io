exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 7796:
/***/ ((module) => {

// Exports
module.exports = {
	"talk": "talk-card_talk__xpi0a",
	"time": "talk-card_time__dv5p2",
	"card": "talk-card_card__n4tWE",
	"is-live": "talk-card_is-live__lsdus",
	"card-body": "talk-card_card-body____ugs",
	"title": "talk-card_title__Jdfn7",
	"speaker": "talk-card_speaker__2HW_f",
	"name": "talk-card_name__h71OT",
	"avatar": "talk-card_avatar__M0WA4",
	"avatar-wrapper": "talk-card_avatar-wrapper__Bgp8n",
	"avatar-group": "talk-card_avatar-group__FfdaB",
	"link": "talk-card_link__FNqk7"
};


/***/ }),

/***/ 9586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TalkCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _talk_card_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7796);
/* harmony import */ var _talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6__);

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





const formatDate = (date)=>{
    // https://github.com/date-fns/date-fns/issues/946
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(date), "h:mmaaaaa'm'");
};
function TalkCard({ talk: { title , speaker , start , end  } , showTime  }) {
    const { 0: isTalkLive , 1: setIsTalkLive  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: startAndEndTime , 1: setStartAndEndTime  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const now = Date.now();
        setIsTalkLive((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isAfter)(now, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(start)) && (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(now, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(end)));
        setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
    }, [
        end,
        start
    ]);
    const firstSpeakerLink = `/speakers/${speaker[0].slug}`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().talk),
        children: [
            showTime && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().time),
                children: startAndEndTime || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "\xa0"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: firstSpeakerLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().card), {
                        [(_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default()["is-live"])]: isTalkLive
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default()["card-body"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                title: title,
                                className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().speaker),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default()["avatar-group"]),
                                        children: speaker.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default()["avatar-wrapper"]),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    loading: "lazy",
                                                    alt: s.name,
                                                    className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().avatar),
                                                    src: s.image.url,
                                                    title: s.name,
                                                    width: 24,
                                                    height: 24
                                                })
                                            }, s.name)
                                        )
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: (_talk_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),
                                        children: speaker.length === 1 ? speaker[0].name : `${speaker.length} speakers`
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }, title));
};


/***/ })

};
;