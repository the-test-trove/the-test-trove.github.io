(() => {
var exports = {};
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 8206:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "conf-entry_container__yuXrw",
	"hero": "conf-entry_hero__AbGrI",
	"description": "conf-entry_description__YqDnO",
	"form": "conf-entry_form__plruD",
	"input": "conf-entry_input__I3vl9",
	"input-label": "conf-entry_input-label__reXYs",
	"focused": "conf-entry_focused__yE_Q0",
	"error": "conf-entry_error__9k41K",
	"success": "conf-entry_success__XXss4",
	"input-text": "conf-entry_input-text__02vqC",
	"form-row": "conf-entry_form-row__lLJgH",
	"submit": "conf-entry_submit__hAec7",
	"register": "conf-entry_register__zwwdh",
	"loading": "conf-entry_loading__fryQH",
	"default": "conf-entry_default__dcyVs"
};


/***/ }),

/***/ 5086:
/***/ ((module) => {

// Exports
module.exports = {
	"pop-content": "request_pop-content__Ka8mo",
	"head": "request_head__j_qdx",
	"text": "request_text__ceML6",
	"pop-overlay": "request_pop-overlay__HMK_H",
	"cta-wrapper": "request_cta-wrapper__NEoZN",
	"accept-btn": "request_accept-btn__n8gL5",
	"reject-btn": "request_reject-btn__blHb4"
};


/***/ }),

/***/ 4931:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "select_container__ENtF9",
	"select": "select_select__JKsy7",
	"arrow": "select_arrow__dUKmE"
};


/***/ }),

/***/ 2164:
/***/ ((module) => {

// Exports
module.exports = {
	"schedule": "schedule-sidebar_schedule__ldG1R",
	"header": "schedule-sidebar_header__7FB__",
	"talks": "schedule-sidebar_talks__A0x07"
};


/***/ }),

/***/ 2814:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "select_container__NRMc7",
	"select": "select_select__dsJw3",
	"arrow": "select_arrow__N0awS"
};


/***/ }),

/***/ 1774:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "stage-container_container__R91_V",
	"streamContainer": "stage-container_streamContainer__MVJpo",
	"stream": "stage-container_stream__fKp_q",
	"streamYt": "stage-container_streamYt__jU3jS",
	"bottom": "stage-container_bottom__yFx90",
	"stageName": "stage-container_stageName__aHoMZ",
	"button": "stage-container_button__v1Fxa",
	"messageContainer": "stage-container_messageContainer__sU0rC"
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

/***/ 4532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StagePage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/page.tsx
var page = __webpack_require__(8434);
;// CONCATENATED MODULE: external "swr"
const external_swr_namespaceObject = require("swr");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_namespaceObject);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./lib/hooks/use-login-status.ts
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
function useLoginStatus(opts) {
    const { data , error , mutate  } = external_swr_default()(`/api/auth`, async (url)=>{
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error();
        }
        return res.json();
    }, {
        ...opts,
        revalidateOnFocus: false
    });
    return {
        loginStatus: error ? 'loggedOut' : !data ? 'loading' : 'loggedIn',
        mutate
    };
};

// EXTERNAL MODULE: ./components/stage-container.module.css
var stage_container_module = __webpack_require__(1774);
var stage_container_module_default = /*#__PURE__*/__webpack_require__.n(stage_container_module);
// EXTERNAL MODULE: ./components/utils.module.css
var utils_module = __webpack_require__(8288);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/conf-entry.module.css
var conf_entry_module = __webpack_require__(8206);
var conf_entry_module_default = /*#__PURE__*/__webpack_require__.n(conf_entry_module);
// EXTERNAL MODULE: ./components/loading-dots.tsx + 1 modules
var loading_dots = __webpack_require__(423);
// EXTERNAL MODULE: ./lib/user-api.ts
var user_api = __webpack_require__(7969);
// EXTERNAL MODULE: ./lib/hooks/use-email-query-param.ts
var use_email_query_param = __webpack_require__(6043);
// EXTERNAL MODULE: ./components/captcha.tsx + 1 modules
var captcha = __webpack_require__(9387);
;// CONCATENATED MODULE: ./components/conf-entry.tsx

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







const DEFAULT_ERROR_MSG = 'Error! Please try again.';
function getErrorMsg(code) {
    switch(code){
        case 'bad_email':
            return 'Please enter a valid email';
        default:
            return DEFAULT_ERROR_MSG;
    }
}
function ConfEntry({ onRegister  }) {
    const { 0: emailInput , 1: setEmailInput  } = (0,external_react_.useState)('');
    const { 0: focused , 1: setFocused  } = (0,external_react_.useState)(false);
    const { 0: formState , 1: setFormState  } = (0,external_react_.useState)('default');
    const { 0: errorMsg , 1: setErrorMsg  } = (0,external_react_.useState)('');
    const { ref: captchaRef , reset: resetCaptcha , execute: executeCaptcha , isEnabled: isCaptchaEnabled  } = (0,captcha/* useCaptcha */.m)();
    const handleRegister = (0,external_react_.useCallback)(async (token)=>{
        const res = await (0,user_api/* register */.z)(emailInput, token);
        if (!res.ok) {
            const json = await res.json();
            setErrorMsg(getErrorMsg(json.error.code));
            setFormState('error');
            return;
        }
        onRegister();
    }, [
        emailInput,
        onRegister
    ]);
    const onSubmit = (0,external_react_.useCallback)(async (e)=>{
        e.preventDefault();
        try {
            setFormState('loading');
            if (isCaptchaEnabled) {
                return executeCaptcha();
            }
            return handleRegister();
        } catch (err) {
            console.error(err);
            setErrorMsg(DEFAULT_ERROR_MSG);
            setFormState('error');
        }
    }, [
        executeCaptcha,
        isCaptchaEnabled,
        handleRegister
    ]);
    const onTryAgainClick = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        setErrorMsg('');
        setFormState('default');
        resetCaptcha();
    }, [
        resetCaptcha
    ]);
    (0,use_email_query_param/* default */.Z)('login', setEmailInput);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((conf_entry_module_default()).container, (utils_module_default()).appear, (utils_module_default())["appear-first"]),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: external_classnames_default()((conf_entry_module_default()).hero),
                children: "Ready to experience a live stage?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: external_classnames_default()((conf_entry_module_default()).description),
                children: "Submit your details below to enter"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: onSubmit,
                className: (conf_entry_module_default()).form,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (conf_entry_module_default())["form-row"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email-input-field",
                                className: external_classnames_default()((conf_entry_module_default())["input-label"], {
                                    [(conf_entry_module_default()).focused]: focused,
                                    [(conf_entry_module_default()).error]: formState === 'error'
                                }),
                                children: formState === 'error' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: external_classnames_default()((conf_entry_module_default()).input, (conf_entry_module_default())["input-text"]),
                                    children: errorMsg
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (conf_entry_module_default()).input,
                                    autoComplete: "off",
                                    type: "email",
                                    id: "email-input-field",
                                    value: emailInput,
                                    onChange: (e)=>setEmailInput(e.target.value)
                                    ,
                                    onFocus: ()=>setFocused(true)
                                    ,
                                    onBlur: ()=>setFocused(false)
                                    ,
                                    placeholder: "Enter email to join the event",
                                    "aria-label": "Your email address",
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: external_classnames_default()((conf_entry_module_default()).submit, (conf_entry_module_default()).register, (conf_entry_module_default())[formState]),
                                disabled: formState === 'loading',
                                onClick: formState === 'error' ? onTryAgainClick : undefined,
                                children: formState === 'loading' ? /*#__PURE__*/ jsx_runtime_.jsx(loading_dots/* default */.Z, {
                                    size: 4
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: formState === 'error' ? 'Try Again' : 'Join'
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(captcha/* default */.Z, {
                        ref: captchaRef,
                        onVerify: handleRegister
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@100mslive/react-sdk"
var react_sdk_ = __webpack_require__(1707);
;// CONCATENATED MODULE: ./components/hms/lib/getToken.ts
const endPoint = process.env.NEXT_PUBLIC_HMS_TOKEN_ENDPOINT;
const getToken = async (role, room_id)=>{
    const response = await fetch(`${endPoint}api/token`, {
        method: 'POST',
        body: JSON.stringify({
            role: role,
            room_id
        })
    });
    const { token  } = await response.json();
    return token;
};

;// CONCATENATED MODULE: ./components/hms/Loading.tsx


const Loading = ({ size =24 , color ='white' , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M19.8852 12C20.5009 12 21.0071 12.501 20.9311 13.1119C20.7585 14.498 20.2649 15.8303 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89471 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17293 13.7558C2.82567 12.01 3.0039 10.2004 3.68508 8.55585C4.36627 6.91131 5.51983 5.50571 6.99987 4.51677C8.16971 3.73511 9.50199 3.24152 10.8881 3.06895C11.499 2.99288 12 3.4991 12 4.11476C12 4.73042 11.4976 5.22017 10.8903 5.32108C9.94601 5.47798 9.04141 5.83408 8.23852 6.37055C7.12512 7.1145 6.25733 8.17191 5.74489 9.40905C5.23245 10.6462 5.09837 12.0075 5.35961 13.3209C5.62085 14.6342 6.26568 15.8406 7.21255 16.7875C8.15942 17.7343 9.3658 18.3791 10.6791 18.6404C11.9925 18.9016 13.3538 18.7675 14.591 18.2551C15.8281 17.7427 16.8855 16.8749 17.6294 15.7615C18.1659 14.9586 18.522 14.054 18.6789 13.1097C18.7798 12.5024 19.2696 12 19.8852 12Z",
            fill: color,
            children: /*#__PURE__*/ jsx_runtime_.jsx("animateTransform", {
                attributeType: "XML",
                attributeName: "transform",
                type: "rotate",
                from: "0 12 12",
                to: "360 12 12",
                dur: "0.75s",
                repeatCount: "indefinite"
            })
        })
    })
;

// EXTERNAL MODULE: external "@100mslive/react-icons"
var react_icons_ = __webpack_require__(3943);
;// CONCATENATED MODULE: ./components/hms/lib/getAvatarBg.ts
const getInitials = (name)=>{
    if (!name) {
        return undefined;
    } else {
        var ref, ref1, ref2;
        return (ref2 = (ref1 = (ref = name.match(/(^\S\S?|\b\S)?/g)) === null || ref === void 0 ? void 0 : ref.join('')) === null || ref1 === void 0 ? void 0 : ref1.match(/(^\S|\S$)?/g)) === null || ref2 === void 0 ? void 0 : ref2.join('').toUpperCase();
    }
};
const getAvatarBg = (name)=>{
    const initials = getInitials(name);
    const indexFactor = 20;
    const colorIndex = ((initials === null || initials === void 0 ? void 0 : initials.codePointAt(0)) || 0) % indexFactor + 1;
    return {
        initials: initials || '',
        color: colorsList[colorIndex - 1]
    };
};
const colorsList = [
    '#F44336',
    '#3F51B5',
    '#4CAF50',
    '#FFA000',
    '#795548',
    '#E91E63',
    '#2F80FF',
    '#8BC34A',
    '#F57C00',
    '#4E342E',
    '#9C27B0',
    '#00BCD4',
    '#C0CA33',
    '#F4511E',
    '#616161',
    '#673AB7',
    '#009688',
    '#FBC02D',
    '#BF360C',
    '#455A64'
];

;// CONCATENATED MODULE: ./components/hms/Avatar.tsx



const Avatar = ({ name , className ='' , size ='sm' , customSize =0  })=>{
    const { initials , color  } = getAvatarBg(name);
    const sizeClass = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-16 h-16 text-lg',
        lg: 'w-20 h-20 text-3xl',
        xl: 'w-32 h-32 text-5xl'
    };
    let custom = {};
    if (customSize) {
        custom = {
            width: customSize,
            height: customSize
        };
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `flex justify-center items-center font-bold object-cover  text-white ${sizeClass[size]} rounded-full ${className}`,
        style: {
            backgroundColor: color,
            ...custom
        },
        children: initials
    }));
};
/* harmony default export */ const hms_Avatar = (Avatar);

// EXTERNAL MODULE: ./components/hms/config.ts
var config = __webpack_require__(4212);
;// CONCATENATED MODULE: ./components/hms/lib/useVideo.ts


const useVideo = (trackId)=>{
    const actions = (0,react_sdk_.useHMSActions)();
    const videoRef = (0,external_react_.useRef)(null);
    const track = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectTrackByID)(trackId));
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            if (videoRef.current && (track === null || track === void 0 ? void 0 : track.id)) {
                if (track.enabled) {
                    await actions.attachVideo(track.id, videoRef.current);
                } else {
                    await actions.detachVideo(track.id, videoRef.current);
                }
            }
        })();
    }, [
        videoRef,
        track === null || track === void 0 ? void 0 : track.id,
        track === null || track === void 0 ? void 0 : track.enabled,
        track === null || track === void 0 ? void 0 : track.deviceID,
        track === null || track === void 0 ? void 0 : track.plugins,
        actions, 
    ]);
    return videoRef;
};
/* harmony default export */ const lib_useVideo = (useVideo);

;// CONCATENATED MODULE: ./components/hms/VideoTile.tsx







const VideoTile = ({ width , height , trackId  })=>{
    const track = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectTrackByID)(trackId));
    const peer = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeerByID)(track === null || track === void 0 ? void 0 : track.peerId));
    const isVideoEnabled = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectIsPeerVideoEnabled)(peer === null || peer === void 0 ? void 0 : peer.id));
    const isAudioEnabled = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectIsPeerAudioEnabled)(peer === null || peer === void 0 ? void 0 : peer.id));
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "p-2 relative",
        style: {
            width,
            height
        },
        children: peer ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full h-full relative rounded-lg flex justify-center items-center",
            children: [
                peer.videoTrack ? /*#__PURE__*/ jsx_runtime_.jsx(Video, {
                    mirror: peer.isLocal,
                    id: peer.videoTrack
                }) : null,
                isAudioEnabled ? null : /*#__PURE__*/ jsx_runtime_.jsx(AudioIndicator, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(AudioLevel, {
                    audioTrack: peer.audioTrack
                }),
                isVideoEnabled ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: height > 300 || config/* hmsConfig.setHmsWatermark */.E.setHmsWatermark ? /*#__PURE__*/ jsx_runtime_.jsx(HmsWatermark, {}) : null
                }) : /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                    size: width < 400 ? 'lg' : 'xl',
                    className: "absolute",
                    name: peer.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PeerName, {
                    name: peer === null || peer === void 0 ? void 0 : peer.name
                })
            ]
        }) : null
    }));
};
/* harmony default export */ const hms_VideoTile = (VideoTile);
const Video = ({ id , mirror  })=>{
    const ref = lib_useVideo(id);
    return(/*#__PURE__*/ jsx_runtime_.jsx("video", {
        className: `bg-gray-base border-solid border-transparent w-full h-full rounded-lg object-cover  ${mirror ? 'mirror' : ''}`,
        ref: ref,
        autoPlay: true,
        muted: true,
        playsInline: true
    }));
};
const AudioIndicator = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute right-2 bottom-2 p-1 flex items-center justify-center rounded-full bg-red-500",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOffIcon, {})
    }));
};
const PeerName = ({ name  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        style: {
            textShadow: 'black 1px 0 10px'
        },
        className: "absolute bottom-3 left-3 text-sm",
        children: name
    }));
};
const HmsWatermark = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: "/hms-coachmark.svg",
        className: "absolute right-3 top-3"
    }));
};
const AudioLevel = ({ audioTrack  })=>{
    const getStyle = (0,external_react_.useCallback)((level)=>{
        const style = {
            border: `${level > 10 ? 3 : 0}px solid ${config/* hmsConfig.audioLevelColor */.E.audioLevelColor}`
        };
        return style;
    }, []);
    const ref = (0,external_react_.useRef)(null);
    (0,react_sdk_.useAudioLevelStyles)({
        trackId: audioTrack,
        getStyle,
        ref
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full h-full absolute left-0 top-0 rounded-lg",
        ref: ref
    }));
};

;// CONCATENATED MODULE: ./components/icons/icon-info.tsx


const InfoIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 20.97c5.106 0 9.308-4.2 9.308-9.307 0-5.115-4.202-9.316-9.317-9.316s-9.307 4.2-9.307 9.316c0 5.107 4.2 9.308 9.316 9.308Zm-.009-12.128a1.403 1.403 0 0 1-1.389-1.389c0-.782.633-1.397 1.39-1.397.755 0 1.38.615 1.38 1.397 0 .756-.625 1.389-1.38 1.389Zm-1.67 7.77c-.492 0-.879-.343-.879-.862 0-.466.387-.844.88-.844h1.01v-3.129h-.835c-.5 0-.879-.351-.879-.852 0-.475.378-.844.88-.844h1.8c.634 0 .959.43.959 1.099v3.726h.8c.492 0 .878.378.878.844 0 .519-.386.861-.878.861H10.32Z",
            fill: "#fff"
        })
    }));
};
/* harmony default export */ const icon_info = (InfoIcon);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/hms/preview/usePreview.tsx


/**
 * This hook can be used to build a preview UI component, this lets you call preview everytime the passed in
 * token changes. This hook is best used in combination with useDevices for changing devices, useAVToggle for
 * muting/unmuting and useAudioLevelStyles for showing mic audio level to the user.
 * Any device change or mute/unmute will be carried across to join.
 */ const usePreview = ({ name , token , metadata  })=>{
    const actions = (0,react_sdk_.useHMSActions)();
    const roomState = (0,react_sdk_.useHMSStore)(react_sdk_.selectRoomState);
    const isConnected = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsConnectedToRoom) || false;
    const enableJoin = roomState === react_sdk_.HMSRoomState.Preview;
    const config = (0,external_react_.useMemo)(()=>{
        return {
            userName: name,
            authToken: token,
            metaData: metadata,
            rememberDeviceSelection: true,
            initEndpoint: process.env.NEXT_PUBLIC_HMS_INIT_PEER_ENPOINT || undefined
        };
    }, [
        name,
        token,
        metadata
    ]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            if (!token) {
                return;
            }
            if (roomState !== react_sdk_.HMSRoomState.Disconnected) {
                await actions.leave();
            }
            try {
                await actions.preview(config);
            } catch (err) {
                console.log('Error: ', err);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        actions,
        token
    ]);
    const join = (0,external_react_.useCallback)(()=>{
        if (!token) {
            return;
        }
        try {
            actions.join(config);
        } catch (err) {
            console.log('Error: ', err);
        }
    }, [
        actions,
        token,
        config
    ]);
    return {
        enableJoin,
        join,
        isConnected
    };
};

;// CONCATENATED MODULE: external "@radix-ui/react-dialog"
const react_dialog_namespaceObject = require("@radix-ui/react-dialog");
// EXTERNAL MODULE: ./components/hms/select/index.module.css
var index_module = __webpack_require__(4931);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/hms/select/index.tsx



function Select({ className , ...props }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                className: external_classnames_default()((index_module_default()).select, className),
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).arrow,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    viewBox: "0 0 24 24",
                    width: "18",
                    height: "18",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6 9l6 6 6-6"
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/Button.tsx



const Button_Button = ({ type ='button' , variant ='primary' , className ='' , children , ...props })=>{
    const baseClass = `flex items-center justify-center rounded-lg px-4 py-2.5 cursor-pointer disabled:cursor-not-allowed focus:outline-none`;
    let variantClass = ``;
    if (variant === 'danger') {
        variantClass = `bg-red-500 hover:bg-red-600 focus:bg-red-400`;
    } else if (variant === 'secondary') {
        variantClass = `bg-gray-600 hover:bg-gray-500 focus:bg-gray-400`;
    } else {
        variantClass = `bg-brand-300 hover:bg-brand-200 focus:bg-brand-400`;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: external_classnames_default()(baseClass, variantClass, className),
        type: type,
        ...props,
        children: children
    }));
};
/* harmony default export */ const hms_Button = (Button_Button);

;// CONCATENATED MODULE: external "@100mslive/hms-video-store"
const hms_video_store_namespaceObject = require("@100mslive/hms-video-store");
;// CONCATENATED MODULE: ./components/hms/lib/useDevices.ts



var DeviceType;
(function(DeviceType) {
    DeviceType["videoInput"] = "videoInput";
    DeviceType["audioInput"] = "audioInput";
    DeviceType["audioOutput"] = "audioOutput";
})(DeviceType || (DeviceType = {}));
/**
 * This hook can be used to implement a UI component which allows the user to manually change their
 * audio/video device. It returns the list of all devices as well as the currently selected one. The input
 * devices will be returned based on what the user is allowed to publish, so a audio only user won't get
 * the videInput field.
 *
 * Note:
 * - Browsers give access to the list of devices only if the user has given permission to access them
 * - Changing devices manually work best in combination with remembering the user's selection for the next time, do
 *   pass the rememberDeviceSelection flag at time of join for this to happen.
 *
 * @param handleError error handler for any errors during device change
 */ const useDevices = ()=>{
    const hmsActions = (0,react_sdk_.useHMSActions)();
    const allDevices = (0,react_sdk_.useHMSStore)(hms_video_store_namespaceObject.selectDevices);
    const sdkSelectedDevices = (0,react_sdk_.useHMSStore)(hms_video_store_namespaceObject.selectLocalMediaSettings);
    const isAllowedToPublish = (0,react_sdk_.useHMSStore)(hms_video_store_namespaceObject.selectIsAllowedToPublish);
    const selectedDeviceIDs = {
        [DeviceType.audioInput]: sdkSelectedDevices.audioInputDeviceId,
        [DeviceType.audioOutput]: sdkSelectedDevices.audioOutputDeviceId,
        [DeviceType.videoInput]: sdkSelectedDevices.videoInputDeviceId
    };
    if (!isAllowedToPublish.video && allDevices.videoInput === []) {
        delete allDevices[DeviceType.videoInput];
        delete selectedDeviceIDs[DeviceType.videoInput];
    }
    if (!isAllowedToPublish.audio && allDevices.audioInput === []) {
        delete allDevices[DeviceType.audioInput];
        delete selectedDeviceIDs[DeviceType.audioInput];
    }
    const updateDevice = (0,external_react_.useCallback)(async ({ deviceType , deviceId  })=>{
        try {
            switch(deviceType){
                case DeviceType.audioInput:
                    await hmsActions.setAudioSettings({
                        deviceId
                    });
                    break;
                case DeviceType.videoInput:
                    await hmsActions.setVideoSettings({
                        deviceId
                    });
                    break;
                case DeviceType.audioOutput:
                    hmsActions.setAudioOutputDevice(deviceId);
                    break;
            }
        } catch (err) {}
    }, [
        hmsActions
    ]);
    return {
        allDevices,
        selectedDeviceIDs,
        updateDevice,
        isAllowedToPublish
    };
};

;// CONCATENATED MODULE: ./components/hms/SettingDialog.tsx

/* eslint-disable @typescript-eslint/ban-ts-comment */ 






const SettingDialog = ({ children  })=>{
    const { allDevices , selectedDeviceIDs , updateDevice , isAllowedToPublish  } = useDevices();
    const videoInput = allDevices['videoInput'] || [];
    const audioInput = allDevices['audioInput'] || [];
    const audioOutput = allDevices['audioOutput'] || [];
    const textClass = `text-gray-200`;
    const wrapperClass = `flex md:flex-row flex-col md:items-center md:justify-between my-6`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                className: "fixed inset-0",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Trigger, {
                asChild: true,
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                className: "dialog-content dialog-animation bg-gray-700 md:w-[520px] rounded-2xl w-[90%] ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xl font-bold",
                                children: "Settings"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Close, {
                                asChild: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.CrossIcon, {})
                                })
                            })
                        ]
                    }),
                    isAllowedToPublish.audio && isAllowedToPublish.video ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "my-0 text-gray-300 text-sm",
                        children: "Control your audio, video source from here"
                    }) : null,
                    videoInput.length > 0 && isAllowedToPublish.video ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: wrapperClass,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: textClass,
                                children: "Video"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Select, {
                                onChange: (e)=>updateDevice({
                                        deviceId: e.target.value,
                                        deviceType: DeviceType.videoInput
                                    })
                                ,
                                value: selectedDeviceIDs.videoInput,
                                children: videoInput.map((device)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: device.deviceId,
                                        children: device.label
                                    }, device.deviceId)
                                )
                            })
                        ]
                    }) : null,
                    audioInput.length > 0 && isAllowedToPublish.audio ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: wrapperClass,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: textClass,
                                children: "Microphone"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Select, {
                                onChange: (e)=>updateDevice({
                                        deviceId: e.target.value,
                                        deviceType: DeviceType.audioInput
                                    })
                                ,
                                value: selectedDeviceIDs.audioInput,
                                children: audioInput.map((device)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: device.deviceId,
                                        children: device.label
                                    }, device.deviceId)
                                )
                            })
                        ]
                    }) : null,
                    audioOutput.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: wrapperClass,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: textClass,
                                children: "Speaker"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Select, {
                                onChange: (e)=>updateDevice({
                                        deviceId: e.target.value,
                                        deviceType: DeviceType.audioOutput
                                    })
                                ,
                                value: selectedDeviceIDs.audioOutput,
                                children: audioOutput.map((device)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: device.deviceId,
                                        children: device.label
                                    }, device.deviceId)
                                )
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TestAudio, {
                            id: selectedDeviceIDs.audioOutput || ''
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const hms_SettingDialog = (SettingDialog);
const TEST_AUDIO_URL = 'https://100ms.live/test-audio.wav';
const TestAudio = ({ id  })=>{
    const audioRef = (0,external_react_.useRef)(null);
    const { 0: playing , 1: setPlaying  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (audioRef.current && id) {
            try {
                // @ts-ignore
                audioRef.current.setSinkId(id);
            } catch (error) {
                console.log(error);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        audioRef.current,
        id
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                onClick: ()=>{
                    var ref;
                    return (ref = audioRef.current) === null || ref === void 0 ? void 0 : ref.play();
                },
                disabled: playing,
                variant: "secondary",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.AudioLevelIcon, {
                        className: "mr-2"
                    }),
                    " Play Audio Level Test"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                ref: audioRef,
                src: TEST_AUDIO_URL,
                onEnded: ()=>setPlaying(false)
                ,
                onPlay: ()=>setPlaying(true)
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/preview/IconButton.tsx

const IconButton = ({ active =false , onClick , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClick,
        className: `flex items-center justify-center p-1 rounded-md ${active ? 'bg-white text-black' : 'icon-btn'}`,
        type: "button",
        children: children
    }));
};
/* harmony default export */ const preview_IconButton = (IconButton);

;// CONCATENATED MODULE: ./components/hms/preview/index.tsx













const PreviewScreen = ({ token  })=>{
    const router = (0,router_.useRouter)();
    const [name, setName] = external_react_default().useState(localStorage.getItem('name') || '');
    const audioEnabled = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsLocalAudioEnabled);
    const videoEnabled = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsLocalVideoDisplayEnabled);
    const { enableJoin , join  } = usePreview({
        token,
        name
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#212121] rounded-lg md:p-8 p-4 flex md:flex-row flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PreviewContainer, {
                name: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[320px] flex flex-col md:ml-8 md:mt-0 mt-4 justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "font-bold text-2xl my-0",
                                children: [
                                    "Welcome ",
                                    name
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-400",
                                children: "Preview your video and audio before joining the stage"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            join();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: name,
                                type: "name",
                                autoComplete: "name",
                                placeholder: "Enter your name",
                                required: true,
                                maxLength: 20,
                                className: "w-full text-md bg-gray-600 rounded-lg placeholder:text-gray-400 h-10 pl-2 focus:outline-none focus:bg-gray-700",
                                onChange: (e)=>{
                                    setName(e.target.value);
                                    localStorage.setItem('name', e.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icon_info, {
                                        className: "mr-2"
                                    }),
                                    " Note: Your mic is ",
                                    audioEnabled ? 'on' : 'off',
                                    " and video is ",
                                    videoEnabled ? 'on' : 'off'
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                                        variant: "secondary",
                                        onClick: ()=>router.push('/')
                                        ,
                                        children: "Go back"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                                        disabled: !enableJoin,
                                        type: "submit",
                                        children: [
                                            "Join Stage ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ArrowRightIcon, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
const PreviewContainer = ({ name  })=>{
    const localPeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeer);
    const { isLocalAudioEnabled , isLocalVideoEnabled , toggleAudio , toggleVideo  } = (0,react_sdk_.useAVToggle)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-[300px] h-[300px] relative flex justify-center items-center bg-gray-700 rounded-lg",
        children: localPeer ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PreviewVideo, {
                    videoTrack: localPeer.videoTrack
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AudioLevel, {
                    audioTrack: localPeer.audioTrack
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "absolute z-30 flex bottom-4 space-x-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(preview_IconButton, {
                            active: !isLocalAudioEnabled,
                            onClick: toggleAudio,
                            children: isLocalAudioEnabled ? /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOnIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOffIcon, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(preview_IconButton, {
                            active: !isLocalVideoEnabled,
                            onClick: toggleVideo,
                            children: isLocalVideoEnabled ? /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.VideoOnIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.VideoOffIcon, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute z-30 bottom-4 right-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(hms_SettingDialog, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(preview_IconButton, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.SettingIcon, {})
                        })
                    })
                }),
                isLocalVideoEnabled ? null : /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                    size: "lg",
                    className: "absolute z-10",
                    name: name
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Loading, {
            size: 90
        })
    }));
};
const PreviewVideo = ({ videoTrack  })=>{
    const ref = (0,react_sdk_.useVideo)(videoTrack || '');
    return(/*#__PURE__*/ jsx_runtime_.jsx("video", {
        className: `w-full h-full rounded-lg object-cover mirror`,
        autoPlay: true,
        muted: true,
        playsInline: true,
        ref: ref
    }));
};

;// CONCATENATED MODULE: external "@100mslive/hms-video"
const hms_video_namespaceObject = require("@100mslive/hms-video");
;// CONCATENATED MODULE: ./components/hms/Join.tsx












const Join = ({ token , role  })=>{
    const isMobile = isMobileDevice();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((conf_entry_module_default()).container, (utils_module_default()).appear, (utils_module_default())["appear-first"]),
        children: [
            isMobile && role !== 'viewer' ? /*#__PURE__*/ jsx_runtime_.jsx(MobileRoleDialog, {}) : null,
            token ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    ' ',
                    role === 'viewer' ? /*#__PURE__*/ jsx_runtime_.jsx(ViewersJoin, {
                        token: token
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: isMobile ? null : /*#__PURE__*/ jsx_runtime_.jsx(PreviewScreen, {
                            token: token
                        })
                    })
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const hms_Join = (Join);
const ViewersJoin = ({ token  })=>{
    const [name, setName] = external_react_default().useState(localStorage.getItem('name') || '');
    const actions = (0,react_sdk_.useHMSActions)();
    const joinRoom = (e)=>{
        e.preventDefault();
        actions.join({
            userName: name || 'David',
            authToken: token,
            initEndpoint: process.env.NEXT_PUBLIC_HMS_INIT_PEER_ENPOINT || undefined,
            rememberDeviceSelection: true
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Enter your name to continue."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "my-0 text-gray-300 text-sm",
                children: "This name will be visible to other participants once you join the stage"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: (e)=>joinRoom(e)
                ,
                className: "mt-12 md:space-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        maxLength: 20,
                        value: name,
                        onChange: (e)=>{
                            setName(e.target.value);
                            localStorage.setItem('name', e.target.value);
                        },
                        required: true,
                        className: "p-4 w-80 text-md bg-gray-600 rounded-lg placeholder:text-gray-400 focus:outline-none focus:bg-gray-700",
                        placeholder: "Enter your name to join the event",
                        type: "text"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "bg-brand-300 hover:bg-brand-200 px-4 py-4 rounded-lg cursor-pointer md:mt-0 mt-4 w-80 md:w-20",
                        children: "Join"
                    })
                ]
            })
        ]
    }));
};
function isMobileDevice() {
    const device = hms_video_namespaceObject.parsedUserAgent.getDevice();
    return device && device.type === 'mobile';
}
const MobileRoleDialog = ()=>{
    const [stage, setStage] = external_react_default().useState(``);
    const router = (0,router_.useRouter)();
    external_react_default().useEffect(()=>{
        if (router.query.slug) {
            setStage(router.query.slug);
        }
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
        open: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                className: "fixed inset-0",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                className: "dialog-content bg-gray-700 md:w-96 w-[95%] rounded-lg text-center dialog-animation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Joining as a speaker is not supported on mobile"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs text-gray-200 mt-4",
                        children: "We have setup a few profiles to make it easy for you or your team to experience each perspective. Join in one click or share access with anyone else."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex justify-center mt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: `/stage/${stage || 'a'}?role=viewer`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                                children: [
                                    "Join as a Guest Instead ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ArrowRightIcon, {})
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/ControlButton.tsx


const ControlButton = ({ active , text , children , onClick , className =''  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onClick,
                type: "button",
                className: `flex items-center justify-center w-11 h-11 rounded-full border-solid border-2 ${active ? 'border-gray-200' : 'border-gray-base'} focus:outline-none focus:border-gray-400 focus:bg-gray-800 ${className}`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-xxs mt-1",
                children: text
            })
        ]
    }));
};
/* harmony default export */ const hms_ControlButton = (ControlButton);

;// CONCATENATED MODULE: ./components/hms/LeaveDialog.tsx








const LeaveDialog = ()=>{
    const actions = (0,react_sdk_.useHMSActions)();
    const router = (0,router_.useRouter)();
    const leave = ()=>{
        try {
            actions.leave().then(()=>router.push('/')
            );
        } catch (error) {
            console.log(error);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                className: "fixed inset-0",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Trigger, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(hms_ControlButton, {
                    text: "Leave",
                    className: "leave",
                    onClick: ()=>{},
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.HangUpIcon, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                className: "dialog-content bg-gray-700 w-96 rounded-lg dialog-animation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Leave Stage?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-gray-200 my-0",
                        children: "Are you sure you want to leave the stage?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-4 mt-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                                onClick: leave,
                                variant: "danger",
                                className: "w-1/2",
                                children: "Leave"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Close, {
                                asChild: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                                    variant: "secondary",
                                    className: "w-1/2",
                                    children: "Cancel"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const hms_LeaveDialog = (LeaveDialog);

;// CONCATENATED MODULE: ./components/hms/Footer.tsx







const Footer = ()=>{
    const role = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeerRole);
    const isAllowedToPublish = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsAllowedToPublish);
    const { isLocalAudioEnabled , isLocalVideoEnabled , toggleAudio , toggleVideo  } = (0,react_sdk_.useAVToggle)();
    const actions = (0,react_sdk_.useHMSActions)();
    const startScreenshare = async ()=>{
        try {
            await actions.setScreenShareEnabled(true);
        } catch (error) {
            console.log('Error: ', error);
        }
    };
    const isLocalScreenShare = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsLocalScreenShared);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full hidden md:flex items-center justify-center space-x-5",
        style: {
            height: 'calc(var(--header-height) * 1.2)'
        },
        children: [
            isAllowedToPublish.audio ? /*#__PURE__*/ jsx_runtime_.jsx(hms_ControlButton, {
                text: "Mic",
                active: isLocalAudioEnabled,
                onClick: toggleAudio,
                children: isLocalAudioEnabled ? /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOnIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOffIcon, {})
            }) : null,
            isAllowedToPublish.video ? /*#__PURE__*/ jsx_runtime_.jsx(hms_ControlButton, {
                text: "Video",
                active: isLocalVideoEnabled,
                onClick: toggleVideo,
                children: isLocalVideoEnabled ? /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.VideoOnIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.VideoOffIcon, {})
            }) : null,
            isAllowedToPublish.screen ? /*#__PURE__*/ jsx_runtime_.jsx(hms_ControlButton, {
                text: "Screen share",
                active: isLocalScreenShare,
                onClick: startScreenshare,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ShareScreenIcon, {})
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(hms_SettingDialog, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(hms_ControlButton, {
                    text: "Setting",
                    onClick: ()=>{},
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.SettingIcon, {})
                })
            }),
            (role === null || role === void 0 ? void 0 : role.name) !== 'viewer' ? /*#__PURE__*/ jsx_runtime_.jsx(hms_LeaveDialog, {}) : null
        ]
    }));
};
/* harmony default export */ const hms_Footer = (Footer);

;// CONCATENATED MODULE: ./components/icons/icon-users.tsx


const UsersIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 9,
                cy: 7,
                r: 4
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            })
        ]
    }));
};
/* harmony default export */ const icon_users = (UsersIcon);

;// CONCATENATED MODULE: ./components/hms/Header.tsx






const Header = ()=>{
    const router = (0,router_.useRouter)();
    const peers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('viewer'));
    const actions = (0,react_sdk_.useHMSActions)();
    const leave = ()=>{
        try {
            actions.leave().then(()=>router.push('/')
            );
        } catch (error) {
            console.log(error);
        }
    };
    const localPeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeer);
    const dominantPeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectDominantSpeaker);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between px-4 w-full ",
        style: {
            height: 'var(--header-height)'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block items-center",
                        children: localPeer.roleName === 'viewer' ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: leave,
                            className: 'color-white p-2 md:static w-10 h-10 rounded-lg bg-gray-base mirror cursor-pointer ',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ExitIcon, {})
                        }) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex md:flex-row flex-col md:items-center align-end md:gap-2 gap-x-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row items-center align-bottom md:gap-2 gap-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-semibold md:text-2xl my-0 text-sm md:leading-8 ",
                                        children: "Demo Event"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "flex md:px-1 px-0.5 font-semibold md:text-sm text-xs rounded-sm items-center ",
                                        style: {
                                            backgroundColor: '#ed4c5a'
                                        },
                                        children: "LIVE"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-md leading-5 ",
                                    style: {
                                        color: '#999a99'
                                    },
                                    children: "9:30 pm - 10:30 pm"
                                })
                            })
                        ]
                    })
                ]
            }),
            dominantPeer ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:flex hidden items-center space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.SpeakerIcon, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: dominantPeer.name
                    })
                ]
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row justify-end gap-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "rounded-3xl border-solid py-2 px-4 flex items-center font-normal text-sm leading-4 gap-2 ",
                        style: {
                            borderWidth: '1px',
                            borderColor: '#3b3b3b'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon_users, {}),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "",
                                children: peers.length
                            }),
                            ' ',
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "md:block hidden",
                                children: " watching"
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const hms_Header = (Header);

// EXTERNAL MODULE: ./components/hms/request/index.module.css
var request_index_module = __webpack_require__(5086);
var request_index_module_default = /*#__PURE__*/__webpack_require__.n(request_index_module);
;// CONCATENATED MODULE: ./components/hms/request/index.tsx















const RoleChangeDialog = ()=>{
    var ref2, ref1;
    const isMobile = isMobileDevice();
    const requestSenderName = (0,external_react_.useRef)(null);
    const { 0: showNote , 1: setShowNote  } = (0,external_react_.useState)(false);
    const role = ((ref2 = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeerRole)) === null || ref2 === void 0 ? void 0 : ref2.name) === 'invitee';
    const actions = (0,react_sdk_.useHMSActions)();
    const request = (0,react_sdk_.useHMSStore)(react_sdk_.selectRoleChangeRequest);
    external_react_default().useEffect(()=>{
        if (request && isMobile) {
            var ref;
            requestSenderName.current = ((ref = request.requestedBy) === null || ref === void 0 ? void 0 : ref.name) || '';
            actions.rejectChangeRole(request);
            setShowNote(true);
        }
    }, [
        request,
        isMobile,
        actions
    ]);
    const roleChange = async (b)=>{
        if (!request) {
            return;
        }
        setShowPreview(false);
        try {
            if (b) {
                await actions.acceptChangeRole(request);
            } else {
                actions.rejectChangeRole(request);
            }
        } catch (error) {
            console.log(error);
        }
    };
    external_react_default().useEffect(()=>{
        const vI = localStorage.getItem('videoInputDeviceId');
        const aI = localStorage.getItem('audioInputDeviceId');
        const aO = localStorage.getItem('audioOutputDeviceId');
        if (vI) {
            actions.setVideoSettings({
                deviceId: vI
            });
        }
        if (aI) {
            actions.setAudioSettings({
                deviceId: aI
            });
        }
        if (aO) {
            actions.setAudioOutputDevice(aO);
        }
    }, [
        role,
        actions
    ]);
    const [showPreview, setShowPreview] = external_react_default().useState(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            request && request.role.name === 'invitee' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
                open: request ? true : false,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                        className: (request_index_module_default())["pop-overlay"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Content, {
                        className: "dialog-content dialog-animation bg-[#212121] rounded-xl",
                        children: showPreview ? /*#__PURE__*/ jsx_runtime_.jsx(GuestPreview, {
                            roleChange: roleChange
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (request_index_module_default()).head,
                                    children: "You have been invited to speak"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (request_index_module_default()).text,
                                    children: [
                                        request === null || request === void 0 ? void 0 : (ref1 = request.requestedBy) === null || ref1 === void 0 ? void 0 : ref1.name,
                                        " has invited you to speak, would you like to join?"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (request_index_module_default())["cta-wrapper"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: (request_index_module_default())["reject-btn"],
                                            onClick: ()=>{
                                                roleChange(false);
                                                setShowPreview(false);
                                            },
                                            children: "Reject"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: (request_index_module_default())["accept-btn"],
                                            onClick: ()=>setShowPreview(true)
                                            ,
                                            children: "Yes"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }) : null,
            showNote && isMobile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
                open: showNote,
                onOpenChange: (s1)=>{
                    requestSenderName.current = '';
                    setShowNote(s1);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                        className: (request_index_module_default())["pop-overlay"]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                        className: "dialog-content dialog-animation md:w-[300px] w-[95%] bg-[#111] rounded-xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    requestSenderName.current,
                                    " has invited you to speak"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "You cannot join the stage on mobile. Please join the session via a desktop/laptop and ask the speaker for another invite.",
                                    ' '
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Close, {
                                asChild: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                                    children: "Got it"
                                })
                            })
                        ]
                    })
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const request = (RoleChangeDialog);
const GuestPreview = ({ roleChange  })=>{
    var ref, ref3, ref4;
    const localVI = localStorage.getItem('videoInputDeviceId');
    const localAI = localStorage.getItem('audioInputDeviceId');
    const localAO = localStorage.getItem('audioOutputDeviceId');
    const videoRef = (0,external_react_.useRef)(null);
    const { 0: isAudioOn , 1: setIsAudioOn  } = (0,external_react_.useState)(true);
    const { 0: isVideoOn , 1: setIsVideoOn  } = (0,external_react_.useState)(true);
    const devices = (0,react_sdk_.useHMSStore)(react_sdk_.selectDevices);
    const videoInput = devices['videoInput'] || [];
    const audioInput = devices['audioInput'] || [];
    const audioOutput = devices['audioOutput'] || [];
    const { 0: aI , 1: setAI  } = (0,external_react_.useState)(localAI || ((ref = audioInput[0]) === null || ref === void 0 ? void 0 : ref.deviceId));
    const { 0: vI , 1: setVI  } = (0,external_react_.useState)(localVI || ((ref3 = videoInput[0]) === null || ref3 === void 0 ? void 0 : ref3.deviceId));
    const { 0: aO , 1: setAO  } = (0,external_react_.useState)(localAO || ((ref4 = audioOutput[0]) === null || ref4 === void 0 ? void 0 : ref4.deviceId));
    const getVideo = ()=>{
        navigator.mediaDevices.getUserMedia({
            video: {
                deviceId: vI
            }
        }).then((stream)=>{
            const video = videoRef.current;
            if (video) {
                video.srcObject = stream;
                video.play();
            }
        }).catch((err)=>{
            console.error('error:', err);
        });
    };
    external_react_default().useEffect(()=>{
        getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isVideoOn,
        vI
    ]);
    const handleAudioInput = (a)=>{
        localStorage.setItem('audioInputDeviceId', a);
        setAI(a);
    };
    const handleAudioOutput = (a)=>{
        localStorage.setItem('audioOutputDeviceId', a);
        setAO(a);
    };
    const handleVideoInput = (a)=>{
        localStorage.setItem('videoInputDeviceId', a);
        setVI(a);
    };
    const textClass = `text-gray-200`;
    const wrapperClass = `flex md:flex-row flex-col md:items-center md:justify-between my-6`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[300px] h-[300px] relative flex justify-center items-center bg-gray-700 rounded-lg",
                children: [
                    isVideoOn ? /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        className: "w-full h-full rounded-lg object-cover mirror",
                        ref: videoRef,
                        autoPlay: true,
                        muted: true,
                        playsInline: true
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                        size: "lg",
                        name: 'Guest'
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute z-30 flex bottom-4 space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(preview_IconButton, {
                                active: !isAudioOn,
                                onClick: ()=>setIsAudioOn(!isAudioOn)
                                ,
                                children: isAudioOn ? /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOnIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.MicOffIcon, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(preview_IconButton, {
                                active: !isVideoOn,
                                onClick: ()=>setIsVideoOn(!isVideoOn)
                                ,
                                children: isVideoOn ? /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.VideoOnIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.VideoOffIcon, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute z-30 bottom-4 right-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                                    className: "fixed inset-0",
                                    style: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Trigger, {
                                    asChild: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(preview_IconButton, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.SettingIcon, {})
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                                    className: "dialog-content bg-gray-700 md:w-[520px] rounded-2xl w-[90%] dialog-animation ",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-xl font-bold",
                                                    children: "Settings"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Close, {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.CrossIcon, {})
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "my-0 text-gray-300 text-sm",
                                            children: "Control your audio, video source from here"
                                        }),
                                        videoInput.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: wrapperClass,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: textClass,
                                                    children: "Video"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Select, {
                                                    onChange: (e)=>handleVideoInput(e.target.value)
                                                    ,
                                                    value: vI,
                                                    children: videoInput.map((device)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: device.deviceId,
                                                            children: device.label
                                                        }, device.deviceId)
                                                    )
                                                })
                                            ]
                                        }) : null,
                                        audioInput.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: wrapperClass,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: textClass,
                                                    children: "Microphone"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Select, {
                                                    onChange: (e)=>handleAudioInput(e.target.value)
                                                    ,
                                                    value: aI,
                                                    children: audioInput.map((device)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: device.deviceId,
                                                            children: device.label
                                                        }, device.deviceId)
                                                    )
                                                })
                                            ]
                                        }) : null,
                                        audioOutput.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: wrapperClass,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: textClass,
                                                    children: "Speaker"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Select, {
                                                    onChange: (e)=>handleAudioOutput(e.target.value)
                                                    ,
                                                    value: aO,
                                                    children: audioOutput.map((device)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: device.deviceId,
                                                            children: device.label
                                                        }, device.deviceId)
                                                    )
                                                })
                                            ]
                                        }) : null,
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-end",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TestAudio, {
                                                id: aO || ''
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[320px] flex flex-col ml-8 justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-bold text-2xl my-0",
                                children: "Welcome "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-400",
                                children: "Preview your video and audio before joining the stage"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: ()=>{},
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "flex items-center space-x-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icon_info, {}),
                                    " Note: Your mic is ",
                                    isAudioOn ? 'on' : 'off',
                                    " and video is",
                                    ' ',
                                    isVideoOn ? 'on' : 'off'
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                                        variant: "secondary",
                                        onClick: ()=>{
                                            roleChange(false);
                                            router_default().push('/');
                                        },
                                        children: "Go back"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                                        onClick: ()=>{
                                            roleChange(true);
                                        },
                                        children: [
                                            "Join Stage ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ArrowRightIcon, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/icons/icon-hms.tsx


const HmsLogo = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 82,
        height: 23,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "url(#a)",
                d: "M7.649 1.808h9.327v19.384H7.649z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.477 11.986a9.1 9.1 0 0 0 1.096.971c.415.542.807 1.176 1.068 1.878.192.525.314 1.09.314 1.684a3.654 3.654 0 0 1-3.643 3.653 3.638 3.638 0 0 1-2.96-1.525c.394-.064.78-.193 1.14-.387a2.505 2.505 0 0 0 1.82.784 2.52 2.52 0 0 0 2.514-2.522c0-.623-.193-1.582-1.061-2.755a8.878 8.878 0 0 0-.976-1.108c.004-.251.018-.47.033-.643.176-.014.4-.027.655-.03Zm2.328-6.547c.098.33.15.678.15 1.039 0 .59-.118 1.155-.314 1.684-.26.705-.653 1.339-1.068 1.88a9.148 9.148 0 0 0-1.106.98 9.56 9.56 0 0 1-.645-.033 9.237 9.237 0 0 1-.03-.653c.303-.294.652-.669.973-1.103.571-.773 1.061-1.732 1.061-2.755 0-.265-.04-.52-.117-.76a2.51 2.51 0 0 1 1.096-.279Zm-.53-1.085a3.637 3.637 0 0 0-2.963-1.53 3.652 3.652 0 0 0-3.643 3.654c0 .593.121 1.159.314 1.684.26.702.652 1.339 1.068 1.88.433.323.807.673 1.1.977.255-.003.476-.015.65-.03.016-.175.03-.397.034-.65a9.355 9.355 0 0 1-.976-1.106c-.575-.773-1.062-1.732-1.062-2.755a2.522 2.522 0 0 1 2.515-2.521c.715 0 1.362.301 1.82.785.361-.195.748-.324 1.143-.388ZM8.82 17.564a3.654 3.654 0 0 1-.152-1.045c0-.59.118-1.156.314-1.684.26-.702.652-1.336 1.068-1.878a9.365 9.365 0 0 0 1.101-.975c.252.005.472.019.646.034.014.175.027.398.03.652-.302.293-.65.667-.97 1.1-.57.772-1.06 1.73-1.06 2.754 0 .267.04.523.118.764-.343.177-.719.27-1.095.278Z",
                fill: "url(#b)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.02 11.51c.51.234.994.55 1.41.97a3.676 3.676 0 0 1-.007 5.17 3.631 3.631 0 0 1-3.153 1.018c.236-.326.419-.692.537-1.085a2.491 2.491 0 0 0 1.822-.732c.983-.98.986-2.579.006-3.565-.72-.729-1.743-1.06-2.693-1.203a8.816 8.816 0 0 0-1.46-.095c-.253.004-.476.017-.652.03a9.902 9.902 0 0 0 .057 2.119c.139.952.467 1.979 1.186 2.704.193.193.41.349.64.468a2.495 2.495 0 0 1-.585.969 3.663 3.663 0 0 1-.855-.64 4.761 4.761 0 0 1-.964-1.417l-.004-.01a4.757 4.757 0 0 1-.97 1.42 3.64 3.64 0 0 1-5.154-.01 3.661 3.661 0 0 1 .014-5.164 4.75 4.75 0 0 1 1.413-.966l.004-.002a4.744 4.744 0 0 1-1.406-.968 3.665 3.665 0 0 1 .01-5.168A3.632 3.632 0 0 1 9.37 4.336c-.236.326-.419.692-.537 1.085a2.492 2.492 0 0 0-1.822.732 2.526 2.526 0 0 0-.007 3.565c.436.444 1.25.986 2.69 1.203.173.027.355.047.548.064a9.778 9.778 0 0 0 1.56 0c.041-.468.071-1.262-.054-2.117l.002-.016c-.14-.948-.468-1.968-1.184-2.69a2.558 2.558 0 0 0-.638-.467c.118-.366.32-.698.584-.97.308.164.595.377.855.638.418.415.728.9.96 1.41.233-.508.546-.988.963-1.402a3.641 3.641 0 0 1 5.153.01 3.661 3.661 0 0 1-.01 5.164c-.415.42-.901.732-1.411.966Zm-2.077-.576c.948-.139 1.97-.468 2.691-1.188a2.526 2.526 0 0 0 .007-3.565 2.509 2.509 0 0 0-3.555-.007c-.44.434-.976 1.243-1.195 2.668l.003.025a8.149 8.149 0 0 0-.064.55 9.867 9.867 0 0 0 0 1.572 6.845 6.845 0 0 0 .645.033c.42.007.933-.01 1.467-.088Zm-7.96 5.89c.976.984 2.571.99 3.555.008.723-.722 1.057-1.749 1.196-2.698.128-.854.101-1.65.064-2.118a9.381 9.381 0 0 0-2.112.054c-.95.14-1.974.468-2.697 1.19a2.526 2.526 0 0 0-.007 3.565Z",
                fill: "url(#c)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.57 9.674a3.612 3.612 0 0 1-.385-1.146 3.661 3.661 0 0 0-.017 5.93c.064-.396.192-.785.388-1.145a2.527 2.527 0 0 1 .014-3.64Zm13.886-1.132a3.638 3.638 0 0 1-.388 1.149 2.526 2.526 0 0 1-.014 3.636c.193.36.324.749.385 1.145a3.655 3.655 0 0 0 1.524-2.968c0-1.22-.594-2.298-1.507-2.962Zm-2.136.437c.274 0 .534.044.781.125.176-.345.267-.721.274-1.1a3.608 3.608 0 0 0-1.055-.157c-1.916 0-3.555 1.274-4.528 2.247-.186.186-.348.36-.48.512a10.002 10.002 0 0 0-.477-.509c-.97-.972-2.612-2.25-4.531-2.25-.362 0-.71.054-1.038.153.007.38.101.755.277 1.098.24-.078.497-.119.76-.119 1.596 0 3.032 1.196 3.846 2.04.176.183.325.35.44.485a8.7 8.7 0 0 1-.433.478c-.19.196-.415.416-.672.633-1.366 1.166-2.484 1.41-3.18 1.41a2.48 2.48 0 0 1-.781-.125A2.526 2.526 0 0 0 6.249 15a3.61 3.61 0 0 0 1.055.156c1.916 0 3.555-1.274 4.525-2.243.186-.187.348-.363.483-.516.132.153.294.326.477.509.97.972 2.612 2.25 4.531 2.25.362 0 .71-.054 1.038-.153a2.505 2.505 0 0 0-.277-1.098c-.24.078-.497.119-.76.119-1.592 0-3.029-1.193-3.847-2.037a10.715 10.715 0 0 1-.439-.484c.112-.133.26-.298.436-.481.815-.844 2.254-2.044 3.85-2.044Z",
                fill: "#2475F5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.589 11.5c.24.299.48.597.723.895a6.631 6.631 0 0 1-.213.234c-.125.136-.253.268-.375.393-.237-.298-.47-.6-.706-.898.131-.132.263-.271.398-.42.061-.071.119-.136.173-.204Z",
                fill: "url(#d)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m13.035 11.5-.723-.894a7.14 7.14 0 0 1 .274-.299c.1-.105.199-.206.3-.305.26.275.517.55.778.824-.15.146-.301.305-.453.474l-.176.2Z",
                fill: "url(#e)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M7.641 8.996a3.698 3.698 0 0 0-.338-.017c-.263 0-.52.04-.76.118A2.515 2.515 0 0 1 6.266 8c.26-.078.534-.129.818-.145l.557 1.142Z",
                fill: "url(#f)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M5.57 9.674c-.23.217-.416.478-.551.769l-.585-1.196c.213-.275.467-.515.747-.719.068.397.196.787.389 1.146Z",
                fill: "url(#g)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M16.996 8.996a2.585 2.585 0 0 1 1.105.108 2.446 2.446 0 0 0 .27-1.098 3.158 3.158 0 0 0-.402-.102 3.533 3.533 0 0 0-.416-.05l-.557 1.142Z",
                fill: "url(#h)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M19.068 9.687c.09.088.196.203.297.349.108.152.183.295.24.417.196-.397.395-.793.591-1.193a3.692 3.692 0 0 0-.74-.718 3.536 3.536 0 0 1-.389 1.145Z",
                fill: "url(#i)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M7.608 14.004c-.102.014-.213.02-.338.017a2.4 2.4 0 0 1-.744-.125 2.449 2.449 0 0 0-.273 1.101 3.959 3.959 0 0 0 .797.15l.558-1.143Z",
                fill: "url(#j)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M5.556 13.313a2.86 2.86 0 0 1-.3-.352 2.303 2.303 0 0 1-.244-.427l-.591 1.193a3.227 3.227 0 0 0 .75.729c.027-.177.074-.387.155-.618.068-.206.152-.382.23-.525Z",
                fill: "url(#k)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M16.996 14.004a2.748 2.748 0 0 0 1.085-.098c.067.132.145.308.2.525.056.224.07.42.07.57a3.543 3.543 0 0 1-.797.146l-.558-1.143Z",
                fill: "url(#l)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.5,
                d: "M19.054 13.327a2.54 2.54 0 0 0 .547-.76l.592 1.184a4.428 4.428 0 0 1-.335.376 3.478 3.478 0 0 1-.415.349 3.693 3.693 0 0 0-.389-1.149Z",
                fill: "url(#m)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M28.13 16.07h1.942V9.617l.032-1.288-.032-.032-1.107.692-1.252.757-.225-1.835 3.499-2.317h1.3V16.07h1.894v1.61h-6.05v-1.61ZM44.653 11.677c0 1.094-.085 2.033-.257 2.816-.17.783-.438 1.427-.802 1.931a3.17 3.17 0 0 1-1.364 1.095c-.546.225-1.204.338-1.974.338-.781 0-1.45-.113-2.007-.338a3.189 3.189 0 0 1-1.348-1.095c-.353-.504-.615-1.148-.786-1.93-.16-.784-.24-1.723-.24-2.817 0-1.137.08-2.098.24-2.88.171-.795.433-1.439.786-1.932a2.953 2.953 0 0 1 1.365-1.062c.556-.226 1.225-.338 2.006-.338.77 0 1.428.112 1.974.338a2.953 2.953 0 0 1 1.364 1.062c.353.493.615 1.137.786 1.931.172.783.257 1.744.257 2.88Zm-2.118-.032c0-.88-.049-1.594-.145-2.14-.085-.559-.22-.988-.401-1.288-.182-.311-.417-.52-.706-.628a2.661 2.661 0 0 0-1.011-.177c-.396 0-.739.06-1.027.177-.29.107-.53.317-.723.628-.181.31-.32.745-.417 1.303-.085.548-.128 1.26-.128 2.14 0 .902.043 1.631.128 2.19.096.557.236.992.417 1.303.193.311.434.52.723.627.288.108.63.161 1.027.161.385 0 .722-.053 1.01-.16.29-.119.525-.333.707-.644.182-.311.316-.746.401-1.304.096-.568.145-1.298.145-2.188ZM54.355 11.677c0 1.094-.085 2.033-.257 2.816-.17.783-.438 1.427-.802 1.931a3.17 3.17 0 0 1-1.364 1.095c-.546.225-1.204.338-1.974.338-.781 0-1.45-.113-2.006-.338a3.188 3.188 0 0 1-1.349-1.095c-.353-.504-.615-1.148-.786-1.93-.16-.784-.24-1.723-.24-2.817 0-1.137.08-2.098.24-2.88.171-.795.433-1.439.786-1.932a2.953 2.953 0 0 1 1.365-1.062c.556-.226 1.225-.338 2.006-.338.77 0 1.428.112 1.974.338a2.953 2.953 0 0 1 1.364 1.062c.353.493.615 1.137.786 1.931.172.783.257 1.744.257 2.88Zm-2.118-.032c0-.88-.049-1.594-.145-2.14-.085-.559-.22-.988-.401-1.288-.182-.311-.417-.52-.706-.628a2.661 2.661 0 0 0-1.011-.177c-.396 0-.738.06-1.027.177-.29.107-.53.317-.723.628-.181.31-.32.745-.417 1.303-.085.548-.128 1.26-.128 2.14 0 .902.043 1.631.128 2.19.096.557.235.992.417 1.303.193.311.434.52.723.627.288.108.63.161 1.027.161.385 0 .722-.053 1.01-.16.29-.119.525-.333.707-.644.182-.311.316-.746.401-1.304.096-.568.145-1.298.145-2.188ZM66.416 17.68v-6.293c0-.58-.15-1.003-.45-1.271-.299-.28-.716-.419-1.25-.419-.472 0-.862.13-1.172.387-.31.257-.466.654-.466 1.19v6.406H61.04v-6.406c0-.579-.155-.987-.465-1.223-.3-.246-.69-.37-1.172-.37-.342 0-.674.08-.995.242-.31.16-.551.375-.722.643v7.114h-2.038V8.04l1.46-.097.353.966a3.455 3.455 0 0 1 1.14-.789c.428-.193.877-.29 1.348-.29 1.23 0 2.091.462 2.584 1.385.31-.483.695-.832 1.155-1.047.47-.225.995-.337 1.573-.337.47 0 .898.075 1.284.225.396.14.733.36 1.01.66.29.29.509.654.659 1.094.16.44.24.955.24 1.545v6.325h-2.038ZM76.184 14.735c0 .472-.07.9-.21 1.287-.138.386-.352.719-.641.998-.289.268-.658.477-1.107.627-.45.15-.985.226-1.605.226a7.294 7.294 0 0 1-1.637-.177 4.66 4.66 0 0 1-1.364-.548l.24-1.738c.375.247.819.435 1.332.564.514.128.99.193 1.429.193.588 0 1.01-.118 1.268-.354.267-.236.4-.531.4-.885 0-.312-.117-.553-.352-.725a3.267 3.267 0 0 0-.867-.45 17.906 17.906 0 0 0-1.14-.37 5.871 5.871 0 0 1-1.123-.5 2.861 2.861 0 0 1-.883-.836c-.224-.343-.337-.794-.337-1.352 0-.847.295-1.534.883-2.06.589-.536 1.471-.804 2.648-.804.963 0 1.857.182 2.68.547l-.176 1.706a5.679 5.679 0 0 0-1.3-.37 6.629 6.629 0 0 0-1.236-.13c-.481 0-.861.092-1.14.274a.867.867 0 0 0-.4.757c0 .29.112.515.336.675.236.15.525.285.867.403.343.118.712.241 1.108.37.406.118.78.284 1.123.499.342.204.626.477.85.82.236.344.354.795.354 1.353Z",
                fill: "#fff"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "b",
                        x1: 12.312,
                        y1: 2.825,
                        x2: 12.312,
                        y2: 20.172,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#2475F5",
                                stopOpacity: 0.25
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 0.5,
                                stopColor: "#2475F5",
                                stopOpacity: 0.2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopColor: "#2475F5",
                                stopOpacity: 0.25
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "d",
                        x1: 11.383,
                        y1: 12.514,
                        x2: 12.422,
                        y2: 11.445,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#571939",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopColor: "#571939"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "e",
                        x1: 13.266,
                        y1: 10.458,
                        x2: 12.215,
                        y2: 11.545,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#551938",
                                stopOpacity: 0
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopColor: "#561939"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "f",
                        x1: 5.631,
                        y1: 8.774,
                        x2: 6.976,
                        y2: 8.488,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 0.136
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "g",
                        x1: 5.713,
                        y1: 8.839,
                        x2: 4.91,
                        y2: 9.642,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopOpacity: 0.7
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "h",
                        x1: 19.017,
                        y1: 8.777,
                        x2: 17.664,
                        y2: 8.489,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 0.136
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "i",
                        x1: 18.924,
                        y1: 8.853,
                        x2: 19.721,
                        y2: 9.65,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopOpacity: 0.7
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "j",
                        x1: 5.62,
                        y1: 14.226,
                        x2: 6.95,
                        y2: 14.51,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 0.136
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "k",
                        x1: 5.701,
                        y1: 14.144,
                        x2: 4.897,
                        y2: 13.341,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopOpacity: 0.7
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "l",
                        x1: 18.986,
                        y1: 14.229,
                        x2: 17.656,
                        y2: 14.512,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 0.136
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "m",
                        x1: 18.915,
                        y1: 14.164,
                        x2: 19.713,
                        y2: 13.365,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopOpacity: 0.7
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 1,
                                stopOpacity: 0
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("radialGradient", {
                        id: "c",
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "rotate(136.638 3.84 7.972) scale(8.50824 8.52865)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#2475F5",
                                stopOpacity: 0.3
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: 0.613,
                                stopColor: "#2475F5",
                                stopOpacity: 0.45
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                        id: "a",
                        patternContentUnits: "objectBoundingBox",
                        width: 1,
                        height: 1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            xlinkHref: "#n"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("image", {
                        id: "n",
                        xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAI8CAYAAAAwZ1S/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA"
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const icon_hms = (HmsLogo);

;// CONCATENATED MODULE: ./components/hms/LinkButton.tsx



const LinkButton = ({ variant ='primary' , className ='' , children , href ='/' , ...props })=>{
    const baseClass = `flex items-center justify-center rounded-lg p-2 cursor-pointer disabled:cursor-not-allowed focus:outline-none text-white`;
    let variantClass = ``;
    if (variant === 'danger') {
        variantClass = `bg-red-500 hover:bg-red-600 focus:bg-red-400`;
    } else if (variant === 'secondary') {
        variantClass = `bg-gray-600 hover:bg-gray-500 focus:bg-gray-400`;
    } else {
        variantClass = `bg-brand-300 hover:bg-brand-200 focus:bg-brand-400`;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: external_classnames_default()(baseClass, variantClass, className),
        href: href,
        ...props,
        children: children
    }));
};
/* harmony default export */ const hms_LinkButton = (LinkButton);

;// CONCATENATED MODULE: ./components/hms/demo-modal/index.tsx







const data = [
    {
        name: 'Moderator',
        roleName: 'moderator',
        role: 'backstage',
        desc: `This role is meant for the event organisers. The moderator is like a stage admin - can add speakers, remove them, invite attendees on stage, kick them out of the event, etc`
    },
    {
        name: 'Speaker',
        roleName: 'speaker',
        role: 'stage',
        desc: 'This one is self explanatory. Use this role for folks who are going to be the main guests of the session. Speakers can also invite attendees on the stage, and respond to public chat messages.'
    },
    {
        name: 'Attendee',
        roleName: 'attendee',
        role: 'viewer',
        desc: `This one is the most basic role - can see and hear whatever is happening on the stage, cannot share their audio and video, and can put up messages on the public chat section.`
    }
];
const DemoModal = ()=>{
    const [stage, setStage] = external_react_default().useState(``);
    const router = (0,router_.useRouter)();
    external_react_default().useEffect(()=>{
        if (router.query.slug) {
            setStage(router.query.slug);
        }
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "font-sans",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-[32px] font-semibold my-0",
                children: "Take your Webinar for a test drive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-300 text-[15px] my-0",
                children: "We have setup a few profiles to make it easy for you or your team to experience each perspective. Join in one click or share access with anyone else."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    data.map((m)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex md:flex-row flex-col justify-between py-4",
                            style: {
                                borderBottom: '1px solid #323232'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-left max-w-xs",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `badge ${m.roleName}-badge`,
                                            children: m.roleName
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-gray-300 text-xs",
                                            children: m.desc
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center space-x-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(CopyButton, {
                                            text: `${window.location.host}/stage/${stage || 'a'}?role=${m.role}`
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_LinkButton, {
                                            className: "w-[200px]",
                                            href: `/stage/${stage || 'a'}?role=${m.role}`,
                                            children: [
                                                "Join as ",
                                                m.name,
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ArrowRightIcon, {
                                                    height: 20
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, `${m.roleName}-${m.name}`)
                    ),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center mt-4 ",
                        children: [
                            "Powered by ",
                            /*#__PURE__*/ jsx_runtime_.jsx(icon_hms, {})
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const demo_modal = (DemoModal);
const CopyButton = ({ text =''  })=>{
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const copy = ()=>{
        navigator.clipboard.writeText(text);
        if (!copied) {
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            }, 3000);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            copied ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "absolute top-10 left-0 flex bg-gray-600 justify-center rounded-lg w-48 p-2",
                children: "Copied to clipboard!"
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                variant: "secondary",
                onClick: copy,
                children: "Invite"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/icons/icon-invite.tsx

const icon_invite_InviteIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.698 2.532a3.761 3.761 0 1 0 0 7.523 3.761 3.761 0 0 0 0-7.523Zm-1.622 2.14a2.293 2.293 0 1 1 3.243 3.243 2.293 2.293 0 0 1-3.243-3.243Zm3.279 7.777a4.223 4.223 0 0 0-5.877 3.882.734.734 0 0 1-1.468-.001 5.69 5.69 0 0 1 7.92-5.23.734.734 0 0 1-.575 1.35Zm1.865.249a5.137 5.137 0 1 1 7.265 7.265 5.137 5.137 0 0 1-7.265-7.265Zm3.633-.037a3.669 3.669 0 1 0 0 7.338 3.669 3.669 0 0 0 0-7.338Zm0 .734c.405 0 .734.328.734.734v1.467h1.468a.734.734 0 0 1 0 1.468h-1.468v1.468a.734.734 0 0 1-1.468 0v-1.468h-1.468a.734.734 0 0 1 0-1.468h1.468V14.13c0-.406.329-.734.734-.734Z",
            fill: "#fff"
        })
    })
;
/* harmony default export */ const icon_invite = ((/* unused pure expression or super */ null && (icon_invite_InviteIcon)));

;// CONCATENATED MODULE: ./components/hms/demo-cta/room-cta.tsx









const RoomCta = ()=>{
    const role = useHMSStore(selectLocalPeerRole);
    const { 0: copied , 1: setCopied  } = useState(false);
    const router = useRouter();
    const copy = ()=>{
        let stageId = `a`;
        if (router.isReady) {
            stageId = router.query.slug;
        }
        navigator.clipboard.writeText(`${window.location.host}/stage/${stageId}?role=${(role === null || role === void 0 ? void 0 : role.name) || 'viewer'}`);
        if (!copied) {
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            }, 3000);
        }
    };
    return(/*#__PURE__*/ _jsxs("div", {
        className: "flex items-center space-x-4",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "relative",
                children: [
                    copied ? /*#__PURE__*/ _jsx("p", {
                        className: "absolute top-12 left-0 flex bg-gray-600 justify-center rounded-lg w-48 p-2",
                        children: "Copied to clipboard!"
                    }) : null,
                    /*#__PURE__*/ _jsxs(Button, {
                        variant: "secondary",
                        className: "h-[40px]",
                        onClick: ()=>copy()
                        ,
                        children: [
                            /*#__PURE__*/ _jsx(InviteIcon, {
                                className: "mr-2"
                            }),
                            "Invite"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(ChangeRoleDialog, {
                children: /*#__PURE__*/ _jsxs(Button, {
                    className: "className=\"h-[40px]\"",
                    variant: "secondary",
                    children: [
                        /*#__PURE__*/ _jsx(PersonIcon, {
                            height: 20,
                            className: "mr-2"
                        }),
                        "Change Role"
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const room_cta = ((/* unused pure expression or super */ null && (RoomCta)));
const ChangeRoleDialog = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                className: "fixed inset-0",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Trigger, {
                asChild: true,
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                className: "dialog-content md:w-[700px] w-[95%] md:h-[700px] h-[600px] overflow-y-scroll bg-gray-800 text-center rounded-lg dialog-animation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Close, {
                        asChild: true,
                        className: "w-full flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.CrossIcon, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(demo_modal, {})
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/EmptyRoom.tsx

/* eslint-disable @typescript-eslint/ban-ts-comment */ 






const EmptyRoom = ()=>{
    const role = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeerRole) || 'viewer';
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const copy = ()=>{
        let stageId = `a`;
        if (router.isReady) {
            stageId = router.query.slug;
        }
        // @ts-ignore
        navigator.clipboard.writeText(`${window.location.host}/stage/${stageId}?role=${role.name}`);
        if (!copied) {
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            }, 3000);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center text-center",
        style: {
            height: 'calc(100vh - 3.2 * var(--header-height))'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl ",
                children: "No Speakers Present"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-300 text-sm",
                children: "Looks like nobody has joined as a speaker. Invite someone to speak or change your role."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-4 mt-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative",
                        children: [
                            copied ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "absolute top-12 left-0 flex bg-gray-600 justify-center rounded-lg w-48 p-2",
                                children: "Copied to clipboard!"
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                                onClick: ()=>copy()
                                ,
                                variant: "secondary",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.InviteIcon, {
                                        className: "mr-2"
                                    }),
                                    " Invite"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ChangeRoleDialog, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.PersonIcon, {
                                    className: "mr-2"
                                }),
                                " Change Role"
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const hms_EmptyRoom = (EmptyRoom);

;// CONCATENATED MODULE: ./components/hms/Pagination.tsx


const Pagination = ({ list , page , setPage  })=>{
    const disableLeft = list.length - page === list.length;
    const disableRight = list.length - page === 1;
    const nextPage = ()=>{
        setPage(Math.min(page + 1, list.length - 1));
    };
    const prevPage = ()=>{
        setPage(Math.max(page - 1, 0));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex items-center space-x-2 absolute -bottom-16 right-10 z-20 border-solid border-gray-700 border px-1 py-2 rounded-3xl`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "arrow-btn",
                onClick: prevPage,
                disabled: disableLeft,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronLeft, {})
            }),
            list.map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `w-[6px] h-[6px] rounded-full cursor-pointer ${i === page ? 'bg-gray-200' : 'bg-gray-500'}`,
                    onClick: ()=>setPage(i)
                })
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "arrow-btn",
                onClick: nextPage,
                disabled: disableRight,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronRight, {})
            })
        ]
    }));
};
/* harmony default export */ const hms_Pagination = (Pagination);
const ChevronLeft = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 14,
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        color: "white",
        className: "cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15 18l-6-6 6-6"
        })
    })
;
const ChevronRight = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        color: "white",
        className: "cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M9 18l6-6-6-6"
        })
    })
;

;// CONCATENATED MODULE: ./components/icons/icon-fit-screen.tsx


const IconFitScreen = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: 40,
        height: 40,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M6 10.5a1 1 0 0 1-1-1v-3A1.5 1.5 0 0 1 6.5 5h3a1 1 0 1 1 0 2H7.25a.25.25 0 0 0-.25.25V9.5a1 1 0 0 1-1 1ZM18 10.5a1 1 0 0 1-1-1V7.25a.25.25 0 0 0-.25-.25H14.5a1 1 0 1 1 0-2h3A1.5 1.5 0 0 1 19 6.5v3a1 1 0 0 1-1 1ZM17.5 19h-3a1 1 0 0 1 0-2h2.25a.25.25 0 0 0 .25-.25V14.5a1 1 0 0 1 2 0v3a1.5 1.5 0 0 1-1.5 1.5ZM9.5 19h-3A1.5 1.5 0 0 1 5 17.5v-3a1 1 0 1 1 2 0v2.25a.25.25 0 0 0 .25.25H9.5a1 1 0 0 1 0 2Z",
            fill: "#fff"
        })
    })
;
/* harmony default export */ const icon_fit_screen = (IconFitScreen);

;// CONCATENATED MODULE: ./components/hms/ScreenshareTile.tsx








const ScreenshareTile = ()=>{
    const screenSharePeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectPeerScreenSharing);
    const hmsActions = (0,react_sdk_.useHMSActions)();
    const videoRef = external_react_default().useRef(null);
    const videoTrack = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectScreenShareByPeerID)(screenSharePeer === null || screenSharePeer === void 0 ? void 0 : screenSharePeer.id));
    const isLocalScreenShared = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsLocalScreenShared);
    external_react_default().useEffect(()=>{
        (async ()=>{
            if (videoRef && (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) && videoTrack) {
                if (videoTrack.enabled) {
                    await hmsActions.attachVideo(videoTrack.id, videoRef === null || videoRef === void 0 ? void 0 : videoRef.current);
                } else {
                    await hmsActions.detachVideo(videoTrack.id, videoRef === null || videoRef === void 0 ? void 0 : videoRef.current);
                }
            }
        })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        videoTrack === null || videoTrack === void 0 ? void 0 : videoTrack.id,
        videoTrack === null || videoTrack === void 0 ? void 0 : videoTrack.enabled,
        videoTrack === null || videoTrack === void 0 ? void 0 : videoTrack.deviceID
    ]);
    const stopScreenShare = async ()=>{
        try {
            await hmsActions.setScreenShareEnabled(false);
        } catch (error) {
            console.log('Error: ', error);
        }
    };
    const fullScreen = ()=>{
        if (false) {}
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "screenshare self-screenshare",
        children: isLocalScreenShared ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center justify-center font-bold screenshare self-screenshare",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "You're sharing screen"
                }),
                ' ',
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hms_Button, {
                    variant: "danger",
                    onClick: stopScreenShare,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.CrossIcon, {
                            className: "mr-2"
                        }),
                        " Stop screen share"
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex w-full justify-center items-center h-full md:p-0 p-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-full block h-auto md:h-full relative",
                children: [
                    config/* hmsConfig.setHmsWatermark */.E.setHmsWatermark ? /*#__PURE__*/ jsx_runtime_.jsx(ScreenshareTile_HmsWatermark, {}) : null,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute flex items-center bottom-0 -right-1 text-sm p-2 rounded-tl-lg",
                        style: {
                            backgroundColor: 'rgba(0,0,0,0.8)'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ShareScreenIcon, {
                                className: "mr-2"
                            }),
                            " Viewing ",
                            screenSharePeer === null || screenSharePeer === void 0 ? void 0 : screenSharePeer.name,
                            "’s Screen"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: fullScreen,
                        style: {
                            backgroundColor: 'rgba(0,0,0,0.8)'
                        },
                        className: "absolute top-0 -right-1 display items-center justify-center rounded-bl-lg cursor-pointer z-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icon_fit_screen, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        id: "screen-share-video",
                        className: "max-w-full block h-auto md:h-full",
                        ref: videoRef,
                        autoPlay: true,
                        muted: true
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const hms_ScreenshareTile = (ScreenshareTile);
const ScreenshareTile_HmsWatermark = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: "/hms-coachmark.svg",
        className: "md:block hidden absolute left-2 bottom-2 z-10"
    }));
};

;// CONCATENATED MODULE: ./components/hms/mobile/index.tsx







const MobileView = ({ activePeer , allPeers  })=>{
    const isSomeoneScreenSharing = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsSomeoneScreenSharing);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden w-full h-full flex flex-col",
        children: [
            allPeers.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(MobileHeader, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full flex items-center justify-center font-medium",
                children: "No Speakers Present"
            }),
            isSomeoneScreenSharing ? /*#__PURE__*/ jsx_runtime_.jsx(hms_ScreenshareTile, {}) : /*#__PURE__*/ jsx_runtime_.jsx(VideoList, {
                peer: activePeer
            })
        ]
    }));
};
const VideoList = ({ peer  })=>{
    const { pagesWithTiles , ref  } = (0,react_sdk_.useVideoList)({
        maxColCount: 1,
        maxRowCount: 1,
        maxTileCount: 1,
        peers: [
            peer
        ],
        aspectRatio: config/* hmsConfig.aspectRatio */.E.aspectRatio
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: "w-full h-full flex items-center",
        children: pagesWithTiles && pagesWithTiles.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(hms_VideoTile, {
            width: pagesWithTiles[0][0].width,
            height: pagesWithTiles[0][0].height,
            trackId: pagesWithTiles[0][0].peer.videoTrack || ''
        }) : null
    }));
};
const MobileHeader = ()=>{
    const stagePeers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('stage'));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex items-center h-[90px] pl-4 my-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center items-center space-y-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutModeIcon, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs",
                        children: "Auto"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[80%] w-[1px] bg-gray-700 mx-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full flex overflow-x-scroll",
                children: stagePeers.map((l)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-center items-center space-y-2 mx-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                                customSize: 40,
                                name: l.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xs",
                                children: l.name
                            })
                        ]
                    }, l.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const mobile = (MobileView);
const LayoutModeIcon = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "20",
                cy: "20",
                r: "18.5",
                stroke: "#702EC2",
                strokeWidth: "3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 10.8125C18.7568 10.8125 17.5645 11.3064 16.6855 12.1854C15.8064 13.0645 15.3125 14.2568 15.3125 15.5C15.3125 16.7432 15.8064 17.9355 16.6855 18.8146C17.5645 19.6936 18.7568 20.1875 20 20.1875C21.2432 20.1875 22.4355 19.6936 23.3146 18.8146C24.1937 17.9355 24.6875 16.7432 24.6875 15.5C24.6875 14.2568 24.1937 13.0645 23.3146 12.1854C22.4355 11.3064 21.2432 10.8125 20 10.8125ZM17.7461 13.2461C18.3439 12.6483 19.1547 12.3125 20 12.3125C20.8454 12.3125 21.6562 12.6483 22.2539 13.2461C22.8517 13.8439 23.1875 14.6546 23.1875 15.5C23.1875 16.3454 22.8517 17.1561 22.2539 17.7539C21.6562 18.3517 20.8454 18.6875 20 18.6875C19.1547 18.6875 18.3439 18.3517 17.7461 17.7539C17.1484 17.1561 16.8125 16.3454 16.8125 15.5C16.8125 14.6546 17.1484 13.8439 17.7461 13.2461ZM16.0122 24.4497C17.0698 23.392 18.5043 22.7979 20 22.7979C21.4957 22.7979 22.9302 23.392 23.9879 24.4497C25.0455 25.5073 25.6397 26.9418 25.6397 28.4375C25.6397 28.8517 25.9755 29.1875 26.3897 29.1875C26.8039 29.1875 27.1397 28.8517 27.1397 28.4375C27.1397 26.544 26.3875 24.728 25.0485 23.389C23.7096 22.0501 21.8936 21.2979 20 21.2979C18.1065 21.2979 16.2905 22.0501 14.9515 23.389C13.6126 24.728 12.8604 26.544 12.8604 28.4375C12.8604 28.8517 13.1961 29.1875 13.6104 29.1875C14.0246 29.1875 14.3604 28.8517 14.3604 28.4375C14.3604 26.9418 14.9545 25.5073 16.0122 24.4497Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "22",
                y: "23",
                width: "8",
                height: "8",
                rx: "4",
                fill: "#181818"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24.6155 29.1817L25.1032 27.8086H27.0634L27.5511 29.1817H28.1667L26.3864 24.3333H25.7803L24 29.1817H24.6155ZM25.2879 27.2878L26.0644 25.1003H26.1023L26.8788 27.2878H25.2879Z",
                fill: "white"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/VideoList.tsx










const VideoList_VideoList = ()=>{
    const activeSpeakerThreshold = config/* hmsConfig.activeSpeakerThreshold */.E.activeSpeakerThreshold;
    const stagePeers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('stage'));
    const peers = (0,react_sdk_.useHMSStore)(react_sdk_.selectPeers);
    const localPeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeer);
    const renderPeers = peers.filter((p)=>p.roleName !== 'viewer'
    );
    const { 0: activeSpeaker , 1: setActiveSpeaker  } = (0,external_react_.useState)(localPeer);
    const dominantSpeaker1 = (0,react_sdk_.useHMSStore)(react_sdk_.selectDominantSpeaker);
    const isActiveSpeakerModeOn = activeSpeaker && renderPeers.length > activeSpeakerThreshold;
    /** here we are using peer filter function to change the activeSpeaker and sidebarPeers,
   * on first mount activeSpeaker points to the localPeer and on each update it points
   * to the dominantSpeaker
   */ const peerFilter = (dominantSpeaker)=>{
        if (dominantSpeaker) {
            setActiveSpeaker(dominantSpeaker);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (dominantSpeaker1) {
            peerFilter(dominantSpeaker1);
        } else {
            if (localPeer.roleName === 'viewer' && stagePeers.length > 0) {
                setActiveSpeaker(stagePeers[0]);
            }
        }
    }, [
        dominantSpeaker1,
        stagePeers,
        localPeer.roleName
    ]);
    const isSomeoneScreenSharing = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsSomeoneScreenSharing);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full relative md:block hidden",
                style: {
                    height: 'calc((100vh - 3.2 * var(--header-height))'
                },
                children: renderPeers.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: isActiveSpeakerModeOn || isSomeoneScreenSharing ? /*#__PURE__*/ jsx_runtime_.jsx(ActiveSpeaker, {
                        allPeers: renderPeers,
                        activePeer: activeSpeaker
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(NonActiveSpeakerView, {
                        peers: renderPeers
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(hms_EmptyRoom, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(request, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile, {
                allPeers: renderPeers,
                activePeer: activeSpeaker
            })
        ]
    }));
};
/* harmony default export */ const hms_VideoList = (VideoList_VideoList);
const NonActiveSpeakerView = ({ peers  })=>{
    const { pagesWithTiles , ref  } = (0,react_sdk_.useVideoList)({
        maxColCount: 2,
        maxRowCount: 2,
        maxTileCount: 4,
        peers,
        aspectRatio: config/* hmsConfig.aspectRatio */.E.aspectRatio
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: "w-full h-full flex flex-wrap place-content-center items-center",
        children: pagesWithTiles && pagesWithTiles.length > 0 && pagesWithTiles[0].map((p, _)=>/*#__PURE__*/ jsx_runtime_.jsx(hms_VideoTile, {
                width: p.width,
                height: p.height,
                trackId: p.peer.videoTrack || ''
            }, p.peer.id)
        )
    }));
};
const ActiveSpeaker = ({ allPeers , activePeer  })=>{
    const isSomeoneScreenSharing = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsSomeoneScreenSharing);
    const peers = isSomeoneScreenSharing ? allPeers : allPeers.filter((peer)=>peer.id !== activePeer.id
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isSomeoneScreenSharing ? /*#__PURE__*/ jsx_runtime_.jsx(hms_ScreenshareTile, {}) : /*#__PURE__*/ jsx_runtime_.jsx(ActiveTile, {
                activePeer: activePeer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AllSpeakers, {
                allPeers: peers
            })
        ]
    }));
};
const ActiveTile = ({ activePeer  })=>{
    const { pagesWithTiles , ref  } = (0,react_sdk_.useVideoList)({
        maxTileCount: 1,
        peers: [
            activePeer
        ],
        aspectRatio: config/* hmsConfig.aspectRatio */.E.aspectRatio
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: "flex justify-center",
        style: {
            height: 'calc((100vh - 3.2 * var(--header-height)) - var(--video-list-height))'
        },
        children: pagesWithTiles && pagesWithTiles.length > 0 && pagesWithTiles[0].map((p, _)=>/*#__PURE__*/ jsx_runtime_.jsx(hms_VideoTile, {
                width: p.width,
                height: p.height,
                trackId: p.peer.videoTrack || ''
            })
        )
    }));
};
const AllSpeakers = ({ allPeers  })=>{
    const { pagesWithTiles , ref  } = (0,react_sdk_.useVideoList)({
        maxRowCount: 1,
        maxTileCount: config/* hmsConfig.maxTileCountSpeakers */.E.maxTileCountSpeakers,
        peers: allPeers,
        aspectRatio: config/* hmsConfig.aspectRatio */.E.aspectRatio
    });
    const [page, setPage] = external_react_default().useState(0);
    external_react_default().useEffect(()=>{
        // currentPageIndex should not exceed pages length
        if (page > pagesWithTiles.length) {
            setPage(0);
        }
    }, [
        page,
        pagesWithTiles.length
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            height: 'var(--video-list-height)'
        },
        ref: ref,
        className: "relative w-full flex flex-wrap place-content-center items-center",
        children: [
            pagesWithTiles && pagesWithTiles.length > 0 && pagesWithTiles[page < pagesWithTiles.length ? page : 0].map((p, _)=>/*#__PURE__*/ jsx_runtime_.jsx(hms_VideoTile, {
                    width: p.width,
                    height: p.height,
                    trackId: p.peer.videoTrack || ''
                })
            ),
            pagesWithTiles.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(hms_Pagination, {
                page: page,
                setPage: setPage,
                list: pagesWithTiles
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/Conference.tsx



const List = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(hms_VideoList, {}));
};
/* harmony default export */ const Conference = (List);

;// CONCATENATED MODULE: external "react-hot-toast"
const external_react_hot_toast_namespaceObject = require("react-hot-toast");
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_namespaceObject);
;// CONCATENATED MODULE: ./components/hms/DemoModal.tsx




const DemoModal_DemoModal = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Root, {
        defaultOpen: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Overlay, {
                className: "fixed inset-0",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_namespaceObject.Content, {
                className: "dialog-content bg-gray-700 md:w-[400px] w-[95%] rounded-lg dialog-animation",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mb-4",
                        children: "Heads Up"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-gray-200 my-0",
                        children: "Since this is a public demo, you might encounter other people on the stage who can hear / see you in case your audio/video is enabled. We recommend you to use the participants tab to check if there are other people on the call."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_namespaceObject.Close, {
                        asChild: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(hms_Button, {
                            className: "mt-4 w-[100px]",
                            children: "Got it"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const hms_DemoModal = (DemoModal_DemoModal);

;// CONCATENATED MODULE: ./components/hms/Live.tsx








/**
 * Live Video/Audio component
 */ const Live = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center items-center relative flex-col h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Notification, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(hms_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Conference, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(hms_Footer, {}),
            process.env.NEXT_PUBLIC_LIVE_DEMO === 'true' ? /*#__PURE__*/ jsx_runtime_.jsx(hms_DemoModal, {}) : null
        ]
    }));
};
/* harmony default export */ const hms_Live = (Live);
const Notification = ()=>{
    const notification = (0,react_sdk_.useHMSNotifications)();
    external_react_default().useEffect(()=>{
        if (!notification) {
            return;
        }
        if (notification.type === 'RECONNECTING') {
            external_react_hot_toast_default().error('You are offline for now. while we try to reconnect, please check your internet connection.');
        }
        if (notification.type === 'RECONNECTED') {
            external_react_hot_toast_default().success('You are now connected.');
        }
        if (notification.type === 'ERROR') {
            external_react_hot_toast_default().error(`Error: ${notification.data.message}`);
        }
    }, [
        notification
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_hot_toast_namespaceObject.Toaster, {
        position: "bottom-left",
        toastOptions: {
            style: {
                background: 'var(--accents-7)',
                color: 'var(--accents-1)'
            }
        }
    }));
};

;// CONCATENATED MODULE: ./components/hms/Room.tsx







/**
 * Entry components for 100ms
 */ const Room = ({ roomId , stagePeers , backstagePeers  })=>{
    const router = (0,router_.useRouter)();
    const [token, setToken] = external_react_default().useState('');
    const actions = (0,react_sdk_.useHMSActions)();
    const isConnected = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsConnectedToRoom);
    external_react_default().useEffect(()=>{
        if (!router.isReady) return;
        const role = router.query.role ? router.query.role : 'viewer';
        getToken(role, roomId).then((t)=>setToken(t)
        ).catch((e)=>console.error(e)
        );
    }, [
        roomId,
        backstagePeers,
        stagePeers,
        router.query,
        router.isReady
    ]);
    external_react_default().useEffect(()=>{
        window.onunload = ()=>{
            actions.leave();
        };
    }, [
        actions
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isConnected ? /*#__PURE__*/ jsx_runtime_.jsx(hms_Live, {}) : /*#__PURE__*/ jsx_runtime_.jsx(hms_Join, {
            role: router.query.role ? router.query.role : 'viewer',
            token: token
        })
    }));
};
/* harmony default export */ const hms_Room = (Room);

;// CONCATENATED MODULE: external "@radix-ui/react-dropdown-menu"
const react_dropdown_menu_namespaceObject = require("@radix-ui/react-dropdown-menu");
;// CONCATENATED MODULE: ./components/icons/icon-menu-hor.tsx

function HorizontalMenuIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 24,
        height: 24,
        stroke: "currentColor",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        color: "var(--geist-foreground)",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 1,
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 19,
                cy: 12,
                r: 1,
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 5,
                cy: 12,
                r: 1,
                fill: "currentColor"
            })
        ]
    }));
}
/* harmony default export */ const icon_menu_hor = (HorizontalMenuIcon);

;// CONCATENATED MODULE: ./components/hms/sidebar/Dropdown.tsx





const Dropdown = ({ id , role  })=>{
    const actions = (0,react_sdk_.useHMSActions)();
    const changeRole = async ()=>{
        const nextRole = role === 'viewer' ? 'invitee' : 'viewer';
        try {
            if (nextRole === 'invitee') {
                await actions.changeRole(id, nextRole, false);
            } else {
                await actions.changeRole(id, nextRole, true);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };
    const removePeer = async ()=>{
        try {
            await actions.removePeer(id, 'Bye');
        } catch (error) {
            console.log('Error: ', error);
        }
    };
    const localRole = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeerRole);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: role === 'backstage' ? null : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_namespaceObject.Root, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_namespaceObject.Trigger, {
                        asChild: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_menu_hor, {})
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dropdown_menu_namespaceObject.Content, {
                        className: "min-w-[220px] bg-gray-700 rounded-lg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_namespaceObject.Item, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: `w-full flex items-center px-2 py-3 focus:bg-gray-600 focus:outline-none text-sm rounded-lg`,
                                    onClick: changeRole,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.InviteStageIcon, {
                                            className: "mr-2"
                                        }),
                                        role === 'viewer' ? 'Bring user to stage' : 'Remove user from stage'
                                    ]
                                })
                            }),
                            (localRole === null || localRole === void 0 ? void 0 : localRole.name) === 'backstage' ? /*#__PURE__*/ jsx_runtime_.jsx(react_dropdown_menu_namespaceObject.Item, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "w-full flex items-center px-2 py-3 focus:bg-gray-600 focus:outline-none text-sm rounded-lg",
                                    onClick: removePeer,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.RemoveUserIcon, {
                                            className: "mr-2"
                                        }),
                                        " Remove user"
                                    ]
                                })
                            }) : null
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const sidebar_Dropdown = (Dropdown);

;// CONCATENATED MODULE: ./components/hms/sidebar/Chat.tsx







const Chat = ()=>{
    const [msg, setMsg] = external_react_default().useState('');
    const actions = (0,react_sdk_.useHMSActions)();
    const msgs = (0,react_sdk_.useHMSStore)(react_sdk_.selectHMSMessages);
    const sendMessage = (e)=>{
        e.preventDefault();
        actions.sendBroadcastMessage(msg);
        setMsg('');
    };
    external_react_default().useEffect(()=>{
        const el = document.getElementById('chat-feed');
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [
        msgs
    ]);
    const localPeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeer);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "chat-feed",
                className: "h-full overflow-y-scroll p-4",
                children: msgs.length > 0 ? msgs.map((m)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-start w-full mb-5 relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                                name: m.sender === localPeer.id ? localPeer.name : m.senderName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col flex-grow",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full flex items-center font-medium pl-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-foreground",
                                                children: m.sender === localPeer.id ? localPeer.name : m.senderName
                                            }),
                                            m.senderRole === 'stage' || m.senderRole === 'backstage' ? /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                                isLocal: m.sender === localPeer.id,
                                                isMod: m.senderRole === 'backstage'
                                            }) : null,
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-gray-400 text-xxs ml-1",
                                                children: m.time.toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "pl-2 text-gray-200 break-words w-[220px] mt-1",
                                        children: m.message
                                    })
                                ]
                            }),
                            localPeer.roleName === 'stage' || localPeer.roleName === 'backstage' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute top-0 right-0",
                                children: localPeer.id !== m.sender ? /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Dropdown, {
                                    role: m.senderRole || 'viewer',
                                    id: m.sender
                                }) : null
                            }) : null
                        ]
                    }, m.id)
                ) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-full flex justify-center items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-gray-700 rounded-full text-foreground flex justify-center items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_.ChatIcon, {
                                    className: "md:w-[50px] md:h-[50px] h-[30px] w-[30px]"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Welcome to the Webinar. You can engage with the speaker and other participants through the chat below."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                className: "h-[80px] px-4 flex items-center",
                onSubmit: sendMessage,
                style: {
                    borderTop: '1px solid var(--accents-7)'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "w-full bg-transparent focus:outline-none",
                    value: msg,
                    onChange: (e)=>setMsg(e.target.value)
                    ,
                    type: "text",
                    placeholder: "Send a message..."
                })
            })
        ]
    }));
};
/* harmony default export */ const sidebar_Chat = (Chat);
const Badge = ({ isMod =false , isLocal  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            border: `${isMod ? '1px solid transparent' : '1px solid #2f6eeb'}`
        },
        className: `inline-flex items-center text-[10px] p-0.5 mx-1 rounded bg-gray-700 text-foreground`,
        children: [
            isLocal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    "You ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "w-1 h-1 mx-1 rounded-full bg-foreground"
                    })
                ]
            }) : null,
            ' ',
            isMod ? 'Moderator' : 'Speaker'
        ]
    }));
};

;// CONCATENATED MODULE: ./components/hms/sidebar/Participants.tsx





const Participants = ()=>{
    const stagePeers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('stage'));
    const backstagePeers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('backstage'));
    const inviteePeers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('invitee'));
    const viewerPeers = (0,react_sdk_.useHMSStore)((0,react_sdk_.selectPeersByRole)('viewer'));
    const localPeer = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeer);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full p-4 overflow-y-scroll text-foreground",
        children: [
            backstagePeers.length > 0 && localPeer.roleName === 'backstage' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Moderator (",
                                    backstagePeers.length,
                                    ")"
                                ]
                            }),
                            backstagePeers.map((p)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center my-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                                            name: p.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grow ml-4",
                                            children: [
                                                p.name,
                                                " ",
                                                p.id !== localPeer.id ? null : '(You)',
                                                ' '
                                            ]
                                        }),
                                        p.id !== localPeer.id ? /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Dropdown, {
                                            role: p.roleName || 'viewer',
                                            id: p.id
                                        }) : null
                                    ]
                                }, p.id)
                            )
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider, {})
                ]
            }) : null,
            stagePeers.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center",
                        children: [
                            "Speaker (",
                            stagePeers.length,
                            ")"
                        ]
                    }),
                    stagePeers.map((p)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center my-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                                    name: p.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grow ml-4",
                                    children: [
                                        p.name,
                                        " ",
                                        p.id !== localPeer.id ? null : '(You)'
                                    ]
                                }),
                                p.id !== localPeer.id ? /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Dropdown, {
                                    role: p.roleName || 'viewer',
                                    id: p.id
                                }) : null
                            ]
                        }, p.id)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider, {})
                ]
            }) : null,
            inviteePeers.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center",
                        children: [
                            "Guest Speakers (",
                            inviteePeers.length,
                            ")"
                        ]
                    }),
                    inviteePeers.map((p)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center my-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                                    name: p.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grow ml-4",
                                    children: [
                                        p.name,
                                        " ",
                                        p.id !== localPeer.id ? null : '(You)'
                                    ]
                                }),
                                localPeer.roleName === 'stage' || localPeer.roleName === 'backstage' ? /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Dropdown, {
                                    id: p.id,
                                    role: p.roleName || 'viewer'
                                }) : null
                            ]
                        }, p.id)
                    )
                ]
            }) : null,
            viewerPeers.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center",
                        children: [
                            "Viewers (",
                            viewerPeers.length,
                            ")"
                        ]
                    }),
                    viewerPeers.map((p)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center my-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(hms_Avatar, {
                                    name: p.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grow ml-4",
                                    children: [
                                        p.name,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Dropdown, {
                                    role: p.roleName || 'viewer',
                                    id: p.id
                                })
                            ]
                        }, p.id)
                    )
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const sidebar_Participants = (Participants);
const Divider = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "my-8 h-[1px] bg-gray-700"
    })
;

// EXTERNAL MODULE: ./components/schedule-sidebar.module.css
var schedule_sidebar_module = __webpack_require__(2164);
var schedule_sidebar_module_default = /*#__PURE__*/__webpack_require__.n(schedule_sidebar_module);
// EXTERNAL MODULE: ./components/talk-card.tsx
var talk_card = __webpack_require__(9586);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(9953);
;// CONCATENATED MODULE: ./components/schedule-sidebar-individual.tsx

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




function ScheduleSidebar({ allStages  }) {
    const router = (0,router_.useRouter)();
    const { 0: currentStageSlug , 1: setCurrentStageSlug  } = (0,external_react_.useState)(router.query.slug);
    const currentStage = allStages.find((s)=>s.slug === currentStageSlug
    );
    (0,external_react_.useEffect)(()=>{
        setCurrentStageSlug(router.query.slug);
    }, [
        router.query.slug
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (schedule_sidebar_module_default()).schedule,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (schedule_sidebar_module_default()).header,
                children: "Schedule"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: constants/* SHORT_DATE */.Ct
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (schedule_sidebar_module_default()).talks,
                children: currentStage === null || currentStage === void 0 ? void 0 : currentStage.schedule.map((talk)=>/*#__PURE__*/ jsx_runtime_.jsx(talk_card/* default */.Z, {
                        talk: talk,
                        showTime: true
                    }, talk.title)
                )
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "@radix-ui/react-tabs"
const react_tabs_namespaceObject = require("@radix-ui/react-tabs");
;// CONCATENATED MODULE: ./components/hms/sidebar/index.tsx







const Sidebar = ({ allStages  })=>{
    const localRole = (0,react_sdk_.useHMSStore)(react_sdk_.selectLocalPeerRole);
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Root, {
        asChild: true,
        defaultValue: "1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tabs_namespaceObject.List, {
                    className: "w-full px-4 tabs",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Trigger, {
                            asChild: true,
                            value: "1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "w-1/2 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-l-md",
                                children: "Chat"
                            })
                        }),
                        (localRole === null || localRole === void 0 ? void 0 : localRole.name) === 'viewer' || (localRole === null || localRole === void 0 ? void 0 : localRole.name) === 'invitee' ? /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Trigger, {
                            asChild: true,
                            value: "3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "w-1/2 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md",
                                children: "Schedule"
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Trigger, {
                            asChild: true,
                            value: "2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "w-1/2 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md",
                                children: "Participants"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Content, {
                    asChild: true,
                    value: "1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Chat, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Content, {
                    asChild: true,
                    value: "2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Participants, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_tabs_namespaceObject.Content, {
                    asChild: true,
                    value: "3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ScheduleSidebar, {
                        allStages: allStages
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const sidebar = (Sidebar);

// EXTERNAL MODULE: ./components/select.module.css
var select_module = __webpack_require__(2814);
var select_module_default = /*#__PURE__*/__webpack_require__.n(select_module);
;// CONCATENATED MODULE: ./components/select.tsx

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

function select_Select({ className , ...props }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (select_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                className: external_classnames_default()((select_module_default()).select, className),
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (select_module_default()).arrow,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    viewBox: "0 0 24 24",
                    width: "18",
                    height: "18",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6 9l6 6 6-6"
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/schedule-sidebar.tsx

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





function schedule_sidebar_ScheduleSidebar({ allStages  }) {
    const router = (0,router_.useRouter)();
    const { 0: currentStageSlug , 1: setCurrentStageSlug  } = (0,external_react_.useState)(router.query.slug);
    const currentStage = allStages.find((s)=>s.slug === currentStageSlug
    );
    (0,external_react_.useEffect)(()=>{
        setCurrentStageSlug(router.query.slug);
    }, [
        router.query.slug
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (schedule_sidebar_module_default()).schedule,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (schedule_sidebar_module_default()).header,
                children: "Schedule"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: constants/* SHORT_DATE */.Ct
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(select_Select, {
                "aria-label": "Select a stage",
                value: currentStageSlug,
                onChange: (e)=>{
                    const slug = e.target.value;
                    setCurrentStageSlug(slug);
                    router.push(`/stage/${slug}`);
                },
                children: allStages.map((stage)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: stage.slug,
                        children: stage.name
                    }, stage.slug)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (schedule_sidebar_module_default()).talks,
                children: currentStage === null || currentStage === void 0 ? void 0 : currentStage.schedule.map((talk)=>/*#__PURE__*/ jsx_runtime_.jsx(talk_card/* default */.Z, {
                        talk: talk,
                        showTime: true
                    }, talk.title)
                )
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/stage-container.tsx

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









function StageContainer({ stage , allStages  }) {
    const response = external_swr_default()('/api/stages', {
        initialData: allStages,
        refreshInterval: 5000
    });
    const updatedStages = response.data || [];
    const updatedStage = updatedStages.find((s)=>s.slug === stage.slug
    ) || stage;
    const { loginStatus , mutate  } = useLoginStatus();
    const isConnected = (0,react_sdk_.useHMSStore)(react_sdk_.selectIsConnectedToRoom);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (stage_container_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(stage_container_module_default()).streamContainer} ${isConnected ? '' : (stage_container_module_default()).streamYt}`,
                children: loginStatus === 'loggedIn' ? !stage.isLive ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: external_classnames_default()((stage_container_module_default()).stream, (utils_module_default()).appear, (utils_module_default())["appear-first"]),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            allow: "autoplay; picture-in-picture",
                            allowFullScreen: true,
                            frameBorder: "0",
                            src: `${updatedStage.stream}?autoplay=1&mute=1`,
                            title: updatedStage.name,
                            width: "100%"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: external_classnames_default()((stage_container_module_default()).bottom, (utils_module_default()).appear, (utils_module_default())["appear-second"]),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (stage_container_module_default()).messageContainer,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (stage_container_module_default()).stageName,
                                        children: stage.name
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: updatedStage.discord,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: (stage_container_module_default()).button,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Join the chat on"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "32",
                                            height: "32",
                                            viewBox: "0 0 245 240",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "white",
                                                    d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "white",
                                                    d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(hms_Room, {
                    backstagePeers: stage.backstagePeers,
                    stagePeers: stage.stagePeers,
                    roomId: stage.roomId
                }) : loginStatus === 'loading' ? null : /*#__PURE__*/ jsx_runtime_.jsx(ConfEntry, {
                    onRegister: ()=>mutate()
                })
            }),
            stage.isLive ? isConnected ? /*#__PURE__*/ jsx_runtime_.jsx(sidebar, {
                allStages: allStages
            }) : null : /*#__PURE__*/ jsx_runtime_.jsx(schedule_sidebar_ScheduleSidebar, {
                allStages: updatedStages
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/layout.tsx + 2 modules
var layout = __webpack_require__(6289);
// EXTERNAL MODULE: ./lib/cms-api.ts + 7 modules
var cms_api = __webpack_require__(4919);
;// CONCATENATED MODULE: ./pages/stage/[slug].tsx






function StagePage({ stage , allStages  }) {
    const meta = {
        title: 'Demo - Virtual Event Starter Kit',
        description: constants/* META_DESCRIPTION */.KM
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        meta: meta,
        fullViewport: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
            isLive: stage.isLive,
            children: /*#__PURE__*/ jsx_runtime_.jsx(StageContainer, {
                stage: stage,
                allStages: allStages
            })
        })
    }));
};
const getStaticProps = async ({ params  })=>{
    const slug = params === null || params === void 0 ? void 0 : params.slug;
    const stages = await (0,cms_api/* getAllStages */.hS)();
    const stage = stages.find((s)=>s.slug === slug
    ) || null;
    if (!stage) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            stage,
            allStages: stages
        },
        revalidate: 60
    };
};
const getStaticPaths = async ()=>{
    const stages = await (0,cms_api/* getAllStages */.hS)();
    const slugs = stages.map((s)=>({
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

/***/ 3943:
/***/ ((module) => {

"use strict";
module.exports = require("@100mslive/react-icons");

/***/ }),

/***/ 1707:
/***/ ((module) => {

"use strict";
module.exports = require("@100mslive/react-sdk");

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

/***/ 2534:
/***/ ((module) => {

"use strict";
module.exports = require("@hcaptcha/react-hcaptcha");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,942,36,919,80,586], () => (__webpack_exec__(4532)));
module.exports = __webpack_exports__;

})();