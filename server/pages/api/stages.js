"use strict";
(() => {
var exports = {};
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 4933:
/***/ ((module) => {

module.exports = require("@agility/content-sync");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("@agility/content-sync/src/store-interface-filesystem");

/***/ }),

/***/ 3231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 5806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getStages)
});

// NAMESPACE OBJECT: ./lib/cms-providers/strapi.ts
var strapi_namespaceObject = {};
__webpack_require__.r(strapi_namespaceObject);
__webpack_require__.d(strapi_namespaceObject, {
  "getAllJobs": () => (getAllJobs),
  "getAllSpeakers": () => (getAllSpeakers),
  "getAllSponsors": () => (getAllSponsors),
  "getAllStages": () => (getAllStages)
});

// NAMESPACE OBJECT: ./lib/cms-providers/agility.ts
var agility_namespaceObject = {};
__webpack_require__.r(agility_namespaceObject);
__webpack_require__.d(agility_namespaceObject, {
  "getAllJobs": () => (agility_getAllJobs),
  "getAllSpeakers": () => (agility_getAllSpeakers),
  "getAllSponsors": () => (agility_getAllSponsors),
  "getAllStages": () => (agility_getAllStages)
});

// NAMESPACE OBJECT: ./lib/cms-providers/dato.ts
var dato_namespaceObject = {};
__webpack_require__.r(dato_namespaceObject);
__webpack_require__.d(dato_namespaceObject, {
  "getAllJobs": () => (dato_getAllJobs),
  "getAllSpeakers": () => (dato_getAllSpeakers),
  "getAllSponsors": () => (dato_getAllSponsors),
  "getAllStages": () => (dato_getAllStages)
});

// NAMESPACE OBJECT: ./lib/cms-providers/contentful.ts
var contentful_namespaceObject = {};
__webpack_require__.r(contentful_namespaceObject);
__webpack_require__.d(contentful_namespaceObject, {
  "getAllJobs": () => (contentful_getAllJobs),
  "getAllSpeakers": () => (contentful_getAllSpeakers),
  "getAllSponsors": () => (contentful_getAllSponsors),
  "getAllStages": () => (contentful_getAllStages)
});

// NAMESPACE OBJECT: ./lib/cms-providers/prismic/index.ts
var prismic_namespaceObject = {};
__webpack_require__.r(prismic_namespaceObject);
__webpack_require__.d(prismic_namespaceObject, {
  "getAllJobs": () => (prismic_getAllJobs),
  "getAllSpeakers": () => (prismic_getAllSpeakers),
  "getAllSponsors": () => (prismic_getAllSponsors),
  "getAllStages": () => (prismic_getAllStages)
});

// NAMESPACE OBJECT: ./lib/cms-providers/storyblok.ts
var storyblok_namespaceObject = {};
__webpack_require__.r(storyblok_namespaceObject);
__webpack_require__.d(storyblok_namespaceObject, {
  "getAllJobs": () => (storyblok_getAllJobs),
  "getAllSpeakers": () => (storyblok_getAllSpeakers),
  "getAllSponsors": () => (storyblok_getAllSponsors),
  "getAllStages": () => (storyblok_getAllStages)
});

// EXTERNAL MODULE: external "ms"
var external_ms_ = __webpack_require__(3231);
var external_ms_default = /*#__PURE__*/__webpack_require__.n(external_ms_);
;// CONCATENATED MODULE: ./lib/cms-providers/strapi.ts
const API_URL = `${process.env.STRAPI_API_URL}/graphql`;
const IMAGE_API_URL = process.env.STRAPI_API_URL;
async function fetchCmsAPI(query, { variables  } = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
/**
 * The default image url will be '/uploads/...
 * Here we add the IMAGE_API_URL prefix to allow locally stored assets to be displayed
 * @param image
 * @return image object with serialized url
 */ function serializeImage(image) {
    if (!(image === null || image === void 0 ? void 0 : image.url)) return null;
    const imageUrl = image.url.startsWith('http') ? image.url : `${IMAGE_API_URL}${image.url}`;
    return {
        ...image,
        sizes: '',
        url: imageUrl
    };
}
/**
 * @param speaker
 * @returns speaker object with serialized image
 */ function serializeSpeaker(speaker) {
    return {
        ...speaker,
        image: {
            ...speaker.image,
            ...serializeImage(speaker.image)
        }
    };
}
async function getAllSpeakers() {
    const data = await fetchCmsAPI(`
  {
    speakers {
      id
      title
      company
      bio
      slug
      name
      image {
        alternativeText
        width
        height
        url
        size
        formats
      }
      twitter
      github
      talk {
        id
        title
        start
        end
        description
      }   
    }
  }  
  `);
    return data.speakers.map(serializeSpeaker);
}
async function getAllStages() {
    const data = await fetchCmsAPI(`
    {
      stages {
        id
        name
        slug
        stream
        order
        discord
        schedule(sort: "start:asc") {
          id
          title
          start
          end
          description
          speaker: speakers {
            id
            slug
            title
            bio
            name
            image {
              alternativeText
              width
              height
              url
              size
              formats
            }
            twitter
            github
            company
          }
        }
      }
    }
  `);
    return data.stages.map((stage)=>({
            ...stage,
            schedule: stage.schedule.map((talk)=>({
                    ...talk,
                    speaker: talk.speaker.map(serializeSpeaker)
                })
            )
        })
    );
}
async function getAllSponsors() {
    const data = await fetchCmsAPI(`
  {
    sponsors {
      id
      slug
      name
      website
      description
      callToAction
      callToActionLink
      discord
      links {
        text
        url
      }
      youtubeSlug
      tier
      tierRank
      cardImage {
        alternativeText
        width
        height
        url
      }
      logo {
        alternativeText
        width
        height
        url
        size
        formats
      }
    }
  }  
  `);
    return data.sponsors.map((sponsor)=>({
            ...sponsor,
            cardImage: {
                ...sponsor.cardImage,
                ...serializeImage(sponsor.cardImage)
            },
            logo: {
                ...sponsor.cardImage,
                ...serializeImage(sponsor.cardImage)
            }
        })
    );
}
async function getAllJobs() {
    const data = await fetchCmsAPI(`
    {
      jobs {
        id
        companyName
        title
        description
        link
        discord
        rank
      }
    }
  `);
    return data.jobs;
}

;// CONCATENATED MODULE: ./lib/cms-providers/agility.ts
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
 */ /* eslint-disable @typescript-eslint/no-unsafe-return */ /* eslint-disable @typescript-eslint/no-unsafe-call */ /* eslint-disable @typescript-eslint/no-var-requires */ const agilityContentSync = __webpack_require__(4933);
const agilityFileSystem = __webpack_require__(3468);
const agilityConfig = {
    guid: process.env.AGILITY_GUID,
    fetchAPIKey: process.env.AGILITY_API_FETCH_KEY,
    previewAPIKey: process.env.AGILITY_API_PREVIEW_KEY,
    languageCode: 'en-us',
    channelName: 'website',
    securityKey: process.env.AGILITY_SECURITY_KEY
};
async function agility_getAllSpeakers() {
    const agility = await syncContentAndGetClient(null);
    const speakers = await agility.getContentList({
        referenceName: 'speakers',
        languageCode: agilityConfig.languageCode
    });
    const schedule = await agility.getContentList({
        referenceName: 'schedule',
        languageCode: agilityConfig.languageCode
    });
    const languageCode = agilityConfig.languageCode;
    const lst = [];
    await asyncForEach(speakers, async (speaker)=>{
        speaker = await expandContentItem({
            agility,
            contentItem: speaker,
            languageCode,
            depth: 1
        });
        const talks = schedule.filter((t)=>{
            return `,${t.fields.speakerIDs},`.indexOf(`,${speaker.contentID},`) !== -1;
        }).map((t)=>{
            return {
                title: t.fields.name,
                description: t.fields.description
            };
        });
        const talk = (talks || []).length > 0 ? talks[0] : null;
        lst.push({
            name: speaker.fields.name,
            title: speaker.fields.title,
            bio: speaker.fields.bio,
            slug: speaker.fields.slug,
            twitter: speaker.fields.twitter,
            github: speaker.fields.github,
            company: speaker.fields.company.fields.name,
            image: {
                url: `${speaker.fields.image.url}?w=300&h=400&c=1`
            },
            imageSquare: {
                url: `${speaker.fields.image.url}?w=192&h=192&c=1`
            },
            talk
        });
    });
    return lst.sort((a, b)=>a.name > b.name ? 1 : -1
    );
}
async function agility_getAllStages() {
    const agility = await syncContentAndGetClient(null);
    const languageCode = agilityConfig.languageCode;
    const stages = await agility.getContentList({
        referenceName: 'stages',
        languageCode
    });
    await expandContentList({
        agility,
        contentItems: stages,
        languageCode,
        depth: 2
    });
    const lst = stages.sort((a, b)=>a.properties.itemOrder > b.properties.itemOrder ? 1 : -1
    ).map((stage)=>{
        var ref1;
        const schedule = (ref1 = stage.fields.schedule) === null || ref1 === void 0 ? void 0 : ref1.map((talk)=>{
            var ref;
            return {
                title: talk.fields.name,
                start: talk.fields.start,
                end: talk.fields.end,
                speaker: (ref = talk.fields.speaker) === null || ref === void 0 ? void 0 : ref.map((speaker)=>{
                    return {
                        name: speaker.fields.name,
                        slug: speaker.fields.slug,
                        image: {
                            url: `${speaker.fields.image.url}?w=120&h=120&c=1`
                        }
                    };
                })
            };
        });
        return {
            name: stage.fields.name,
            slug: stage.fields.slug,
            stream: stage.fields.stream,
            discord: stage.fields.discord,
            schedule
        };
    });
    return lst;
}
async function agility_getAllSponsors() {
    const agility = await syncContentAndGetClient(null);
    const languageCode = agilityConfig.languageCode;
    let companies = await agility.getContentList({
        referenceName: 'companies',
        languageCode: agilityConfig.languageCode
    });
    companies = companies.sort((a, b)=>a.fields.tierRank > b.fields.tierRank ? 1 : -1
    );
    const lst = [];
    await asyncForEach(companies, async (company)=>{
        company = await expandLinkedList({
            agility,
            contentItem: company,
            languageCode,
            fieldName: 'links',
            sortIDField: null,
            excludeNonSortedIds: false
        });
        let links = [];
        if (company.fields.links) {
            links = company.fields.links.map((link)=>{
                return {
                    url: link.fields.link.href,
                    text: link.fields.link.text
                };
            });
        }
        lst.push({
            name: company.fields.name,
            discord: company.fields.discord,
            slug: company.fields.slug,
            website: company.fields.website,
            callToAction: company.fields.callToAction.text,
            callToActionLink: company.fields.callToAction.href,
            youtubeSlug: company.fields.youtubeSlug,
            tier: company.fields.tier,
            description: company.fields.description,
            cardImage: {
                url: `${company.fields.cardImage.url}`
            },
            logo: {
                url: `${company.fields.logo.url}`
            },
            links
        });
    });
    return lst;
}
async function agility_getAllJobs() {
    const agility = await syncContentAndGetClient(null);
    const languageCode = agilityConfig.languageCode;
    let jobs = await agility.getContentList({
        referenceName: 'jobs',
        languageCode: agilityConfig.languageCode
    });
    jobs = jobs.sort((a, b)=>a.fields.rank > b.fields.rank ? 1 : -1
    );
    await expandContentList({
        agility,
        contentItems: jobs,
        languageCode,
        depth: 1
    });
    return jobs.map((job)=>{
        var ref;
        return {
            id: job.contentID,
            companyName: (ref = job.fields.company) === null || ref === void 0 ? void 0 : ref.fields.name,
            title: job.fields.name,
            description: job.fields.description,
            discord: job.fields.discord,
            link: job.fields.link,
            rank: parseInt(job.fields.rank)
        };
    }).sort((a, b)=>a.rank > b.rank ? 1 : -1
    );
}
const getSyncClient = (context)=>{
    let { isPreview , isDevelopmentMode  } = context || {};
    if (isDevelopmentMode === undefined) {
        isDevelopmentMode = "production" === 'development';
    }
    if (isPreview === undefined) {
        isPreview = isDevelopmentMode;
    }
    const apiKey = isPreview ? agilityConfig.previewAPIKey : agilityConfig.fetchAPIKey;
    if (!agilityConfig.guid) {
        console.log('Agility CMS => No GUID was provided.');
        return null;
    }
    let cachePath = `node_modules/@agility/content-sync/cache/${agilityConfig.guid}/${isPreview ? 'preview' : 'live'}`;
    if (!isDevelopmentMode) {
        cachePath = `/tmp/agilitycache/${agilityConfig.guid}/${isPreview ? 'preview' : 'live'}`;
    }
    const client = agilityContentSync.getSyncClient({
        guid: agilityConfig.guid,
        apiKey: apiKey,
        isPreview: isPreview,
        languages: [
            agilityConfig.languageCode
        ],
        channels: [
            agilityConfig.channelName
        ],
        store: {
            interface: agilityFileSystem,
            options: {
                rootPath: cachePath
            }
        }
    });
    return client;
};
const syncContentAndGetClient = async (context)=>{
    const client = getSyncClient(context);
    await client.runSync();
    return client.store;
};
const expandContentList = async ({ agility , contentItems , languageCode , depth  })=>{
    await asyncForEach(contentItems, async (contentItem)=>{
        await expandContentItem({
            agility,
            contentItem,
            languageCode,
            depth
        });
    });
};
const expandContentItem = async ({ agility , contentItem , languageCode , depth =1  })=>{
    if (!contentItem) return null;
    const api = agility;
    if (depth > 0) {
        let fields = contentItem.fields;
        if (!fields) fields = contentItem.customFields;
        for(const fieldName in fields){
            const fieldValue = fields[fieldName];
            if (fieldValue.contentid > 0) {
                const childItem = await api.getContentItem({
                    contentID: fieldValue.contentid,
                    languageCode,
                    depth: depth - 1
                });
                if (childItem != null) fields[fieldName] = childItem;
            } else if (fieldValue.sortids && fieldValue.sortids.split) {
                const sortIDAry = fieldValue.sortids.split(',');
                const childItems = [];
                for (const childItemID of sortIDAry){
                    const childItem = await api.getContentItem({
                        contentID: childItemID,
                        languageCode,
                        depth: depth - 1
                    });
                    if (childItem != null) childItems.push(childItem);
                }
                fields[fieldName] = childItems;
            }
        }
    }
    return contentItem;
};
const expandLinkedList = async ({ agility , contentItem , languageCode , fieldName , sortIDField =null , excludeNonSortedIds =false  })=>{
    if (!contentItem) return null;
    const fieldObj = contentItem.fields[fieldName];
    if (!fieldObj) {
        contentItem.fields[fieldName] = [];
        return contentItem;
    }
    const referenceName = fieldObj.referencename;
    if (!referenceName) throw Error(`A referencename property was not found on the ${fieldName} value.`);
    let listItems = await agility.getContentList({
        referenceName,
        languageCode
    });
    if ((listItems === null || listItems === void 0 ? void 0 : listItems.length) > 0) {
        if (sortIDField) {
            const sortIDs = contentItem.fields[sortIDField];
            if ((sortIDs === null || sortIDs === void 0 ? void 0 : sortIDs.length) > 0 && (sortIDs === null || sortIDs === void 0 ? void 0 : sortIDs.split)) {
                const sortIDAry = sortIDs.split(',');
                const sortedItems = [];
                for (const idStr of sortIDAry){
                    const childContentID = parseInt(idStr);
                    const childItemIndex = listItems.findIndex((item)=>item.contentID === childContentID
                    );
                    if (childItemIndex >= 0) {
                        sortedItems.push(listItems[childItemIndex]);
                        listItems.splice(childItemIndex, 1);
                    }
                }
                if (excludeNonSortedIds !== true) {
                    listItems = sortedItems.concat(listItems);
                } else {
                    listItems = sortedItems;
                }
            }
        }
    }
    contentItem.fields[fieldName] = listItems;
    return contentItem;
};
const asyncForEach = async (array, callback)=>{
    for(let index = 0; index < array.length; index++){
        await callback(array[index], index, array);
    }
};

;// CONCATENATED MODULE: ./lib/cms-providers/dato.ts
const dato_API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;
async function dato_fetchCmsAPI(query, { variables  } = {}) {
    const res = await fetch(dato_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
async function dato_getAllSpeakers() {
    const data = await dato_fetchCmsAPI(`
     {
       allSpeakers(first: 100) {
         name
         bio
         title
         slug
         twitter
         github
         company
         talk {
           title
           description
         }
         image {
           url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
           blurDataURL: blurUpThumb
         }
         imageSquare: image {
           url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
           blurDataURL: blurUpThumb
         }
       }
     }
   `);
    return data.allSpeakers;
}
async function dato_getAllStages() {
    const data = await dato_fetchCmsAPI(`
     {
       allStages(first: 100, orderBy: order_ASC) {
         name
         slug
         stream
         discord
         isLive
         roomId
         schedule {
           title
           start
           end
           speaker {
             name
             slug
             image {
               url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
               blurDataURL: blurUpThumb
             }
           }
         }
       }
     }
   `);
    return data.allStages;
}
async function dato_getAllSponsors() {
    const data = await dato_fetchCmsAPI(`
     {
       allCompanies(first: 100, orderBy: tierRank_ASC) {
         name
         description
         slug
         website
         callToAction
         callToActionLink
         discord
         youtubeSlug
         tier
         links {
           url
           text
         }
         cardImage {
           url(imgixParams: {fm: jpg, fit: crop})
         }
         logo {
           url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
         }
       }
     }
   `);
    return data.allCompanies;
}
async function dato_getAllJobs() {
    const data = await dato_fetchCmsAPI(`
     {
       allJobs(first: 100, orderBy: rank_ASC) {
         id
         companyName
         title
         description
         discord
         link
         rank
       }
     }
   `);
    return data.allJobs;
}

;// CONCATENATED MODULE: ./lib/cms-providers/contentful.ts
const contentful_API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
const contentful_API_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function contentful_fetchCmsAPI(query) {
    const res = await fetch(contentful_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${contentful_API_TOKEN}`
        },
        body: JSON.stringify({
            query
        })
    });
    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
async function contentful_getAllSpeakers() {
    const data = await contentful_fetchCmsAPI(`
    {
      speakerCollection {
        items {
          name
          bio
          title
          slug
          twitter
          github
          company
          talk {
            ... on Talk {
              title
              description
            }
          }
          image {
            url
          }
          imageSquare: image {
            url
          }
        }
      }
    }
  `);
    return data.speakerCollection.items.map((speaker)=>speaker
    );
}
async function contentful_getAllStages() {
    const data = await contentful_fetchCmsAPI(`
    {
      stageCollection {
        items {
            name
            slug
            stream
            discord
            scheduleCollection(limit: 0) {
              items {
                ... on Talk {
                  title
                  start
                  end
                  speakerCollection(limit: 5) {
                    items {
                      ... on Speaker {
                      name
                      slug
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
    return data.stageCollection.items.reduce((allStages, stage)=>{
        const schedule = stage.scheduleCollection.items.map((talk)=>({
                speaker: talk.speakerCollection.items.map((speaker)=>speaker
                ),
                ...talk
            })
        );
        return [
            {
                schedule,
                ...stage
            },
            ...allStages || []
        ];
    }, []);
}
async function contentful_getAllSponsors() {
    const data = await contentful_fetchCmsAPI(`
    {
      companyCollection(order: tierRank_ASC, limit: 100) {
        items {
            sys {
              id
            }
            name
            description
            slug
            website
            callToAction
            callToActionLink
            discord
            youtubeSlug
            tier
            links 
            cardImage {
              url
            }
            logo {
              url
            }
        }
      }
    }
  `);
    return data.companyCollection.items.reduce((allSponsors, sponsor)=>{
        return [
            {
                id: sponsor.sys.id,
                ...sponsor
            },
            ...allSponsors || []
        ];
    }, []);
}
async function contentful_getAllJobs() {
    const data = await contentful_fetchCmsAPI(`
    {
      jobCollection(order: rank_ASC, limit: 100) {
        items {
            sys {
              id
            }
            companyName
            title
            description
            discord
            link
            rank
        }
      }
    }
  `);
    return data.jobCollection.items.reduce((allJobs, job)=>{
        return [
            {
                id: job.sys.id,
                ...job
            },
            ...allJobs || []
        ];
    }, []);
}

;// CONCATENATED MODULE: ./lib/cms-providers/prismic/utils.ts
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
 */ function richTextAsText(richTextField) {
    if (Object.prototype.toString.call(richTextField) !== '[object Array]') {
        return '';
    }
    return richTextField.map((block)=>block.text
    ).join(' ');
}
function getLinkUrl(linkField) {
    return linkField && linkField.url ? linkField.url : '';
}

;// CONCATENATED MODULE: ./lib/cms-providers/prismic/index.ts

const API_REF_URL = `https://${process.env.PRISMIC_REPO_ID}.prismic.io/api/v2`;
const prismic_API_URL = `https://${process.env.PRISMIC_REPO_ID}.prismic.io/graphql`;
const prismic_API_TOKEN = process.env.PRISMIC_ACCESS_TOKEN || '';
async function fetchCmsMasterRef() {
    var ref;
    const res = await fetch(`${API_REF_URL}${prismic_API_TOKEN ? `?access_token=${prismic_API_TOKEN}` : ''}`);
    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    const masterVersion = ((ref = json.refs) === null || ref === void 0 ? void 0 : ref.find((apiVersion)=>apiVersion.id === 'master'
    )) || null;
    const masterRef = (masterVersion === null || masterVersion === void 0 ? void 0 : masterVersion.ref) || null;
    return masterRef;
}
async function prismic_fetchCmsAPI(query) {
    const masterRef = await fetchCmsMasterRef();
    const res = await fetch(`${prismic_API_URL}?query=${encodeURIComponent(query)}`, {
        headers: {
            'Prismic-Ref': `${masterRef}`,
            Authorization: `Token ${prismic_API_TOKEN}`
        }
    });
    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
async function prismic_getAllSpeakers() {
    const data = await prismic_fetchCmsAPI(`
    {
      allSpeakers(first: 100) {
        edges {
          node {
            name
            bio
            title
            twitter {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            github {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            company
            image
            talk {
              _linkType
              ...on  Talk{
                title
                description
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
    const reformatedData = data.allSpeakers.edges.map((edge)=>{
        var ref, ref1, ref2;
        return {
            name: richTextAsText(edge.node.name),
            bio: richTextAsText(edge.node.bio),
            slug: edge.node._meta.uid,
            title: richTextAsText(edge.node.title),
            twitter: getLinkUrl(edge.node.twitter),
            github: getLinkUrl(edge.node.github),
            company: richTextAsText(edge.node.company),
            image: {
                url: ((ref = edge.node.image) === null || ref === void 0 ? void 0 : ref.url.replace('compress,format', 'format')) || 'https://images.prismic.io'
            },
            talk: {
                title: ((ref1 = edge.node.talk) === null || ref1 === void 0 ? void 0 : ref1.title) ? richTextAsText(edge.node.talk.title) : '',
                description: ((ref2 = edge.node.talk) === null || ref2 === void 0 ? void 0 : ref2.description) ? richTextAsText(edge.node.talk.description) : ''
            }
        };
    });
    return reformatedData;
}
async function prismic_getAllStages() {
    const data = await prismic_fetchCmsAPI(`
    {
      allStages(first: 100, sortBy: name_ASC) {
        edges {
          node {
            name
            _meta {
              uid
            }
            stream {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            discord {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            schedule {
              talk {
                _linkType
                ...on Talk {
                  title
                  start
                  end
                  speakers {
                    speaker {
                      ...on Speaker {
                        name
                        _meta {
                          uid
                        }
                        image
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
    const reformatedData = data.allStages.edges.map((edge)=>{
        return {
            name: richTextAsText(edge.node.name),
            slug: edge.node._meta.uid,
            stream: getLinkUrl(edge.node.stream),
            discord: getLinkUrl(edge.node.discord),
            schedule: edge.node.schedule.filter((item)=>item.talk
            ).map((item1)=>{
                if (item1.talk) return {
                    title: richTextAsText(item1.talk.title),
                    start: item1.talk.start,
                    end: item1.talk.end,
                    speaker: item1.talk.speakers.map((item)=>{
                        var ref;
                        return {
                            name: richTextAsText(item.speaker.name),
                            slug: item.speaker._meta.uid,
                            image: {
                                url: ((ref = item.speaker.image) === null || ref === void 0 ? void 0 : ref.url.replace('compress,format', 'format')) || 'https://images.prismic.io'
                            }
                        };
                    })
                };
            })
        };
    });
    return reformatedData;
}
async function prismic_getAllSponsors() {
    const data = await prismic_fetchCmsAPI(`
    {
      allCompanys(first: 100, sortBy: tier_rank_ASC) {
        edges {
          node {
            name
            description
            _meta {
              uid
            }
            website {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            call_to_action
            call_to_action_link {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            discord {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            youtube_slug
            tier
            links {
              link {
                _linkType
                ...on _ExternalLink {
                  url
                }
              }
              link_text
            }
            card_image
            logo
          }
        }
      }
    }
  `);
    const reformatedData = data.allCompanys.edges.map((edge)=>{
        var ref, ref3;
        return {
            name: richTextAsText(edge.node.name),
            description: richTextAsText(edge.node.description),
            slug: edge.node._meta.uid,
            website: getLinkUrl(edge.node.website),
            callToAction: richTextAsText(edge.node.call_to_action),
            callToActionLink: getLinkUrl(edge.node.call_to_action_link),
            discord: getLinkUrl(edge.node.discord),
            youtubeSlug: edge.node.youtube_slug,
            tier: edge.node.tier,
            links: edge.node.links.map((item)=>({
                    url: getLinkUrl(item.link),
                    text: item.link_text
                })
            ),
            cardImage: {
                url: ((ref = edge.node.card_image) === null || ref === void 0 ? void 0 : ref.url.replace('compress,format', 'format')) || 'https://images.prismic.io'
            },
            logo: {
                url: ((ref3 = edge.node.logo) === null || ref3 === void 0 ? void 0 : ref3.url.replace('compress,format', 'format')) || 'https://images.prismic.io'
            }
        };
    });
    return reformatedData;
}
async function prismic_getAllJobs() {
    const data = await prismic_fetchCmsAPI(`
    {
      allJobs(first: 100, sortBy: rank_ASC) {
        edges {
          node {
            _meta {
              id
            }
            company_name
            title
            description
            discord {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            link {
              _linkType
              ...on _ExternalLink {
                url
              }
            }
            rank
          }
        }
      }
    }
  `);
    const reformatedData = data.allJobs.edges.map((edge)=>{
        return {
            id: edge.node._meta.id,
            companyName: richTextAsText(edge.node.company_name),
            title: richTextAsText(edge.node.title),
            description: richTextAsText(edge.node.description),
            discord: getLinkUrl(edge.node.discord),
            link: getLinkUrl(edge.node.link),
            rank: edge.node.rank
        };
    });
    return reformatedData;
}

;// CONCATENATED MODULE: ./lib/cms-providers/storyblok.ts
const storyblok_API_URL = 'https://gapi.storyblok.com/v1/api';
const storyblok_API_TOKEN = process.env.STORYBLOK_PREVIEW_TOKEN;
/**
 * This transformResponse() function can be removed if you're using the
 * Storyblok data directly. This transformation only happens to adapt the data
 * returned from the GraphQL api to the data structure used in the
 * starter so as not to have to modify the component files.
 */ function transformResponse(response, _speakers) {
    const content = response.map((r)=>r.content ? r.content : r
    );
    content.map((item)=>{
        Object.keys(item).map((key)=>{
            // assign the urls directly if not an image
            const noAssign = [
                'image',
                'logo',
                'cardImage'
            ];
            if (item[key].url && noAssign.indexOf(key) === -1) {
                item[key] = item[key].url;
            }
            // remove nesting from schedule and assign speakers
            if (key === 'schedule') {
                item[key] = item[key].map((slot)=>{
                    slot = slot.content;
                    const speakers = _speakers === null || _speakers === void 0 ? void 0 : _speakers.filter((speaker)=>slot.speaker.indexOf(speaker.uuid) !== -1
                    );
                    slot.speaker = speakers;
                    return slot;
                });
            }
        });
    });
    return content;
}
async function storyblok_fetchCmsAPI(query, { variables  } = {}) {
    const res = await fetch(storyblok_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Token: `${storyblok_API_TOKEN}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    const json = await res.json();
    if (json.errors) {
        // eslint-disable-next-line no-console
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
async function storyblok_getAllSpeakers() {
    const data = await storyblok_fetchCmsAPI(`
  {
    SpeakerItems(per_page: 100) {
      items {
        uuid
        content {
          name
          bio
          title
          slug
          twitter {
            url
          }
          github {
            url
          }
          company
          image {
            url: filename
          }
          talk {
            content
          }
        }
      }
    }
  }  
  `);
    const responseData = data.SpeakerItems.items.map((s)=>{
        const speaker = s.content;
        speaker.talk = speaker.talk.content;
        speaker.uuid = s.uuid;
        return speaker;
    });
    const transformedData = transformResponse(responseData);
    return transformedData;
}
async function storyblok_getAllStages() {
    const speakers = await storyblok_getAllSpeakers();
    const data = await storyblok_fetchCmsAPI(`
    {
      StageItems(per_page: 100) {
        items {
          content {
            name
            slug
            stream {
              url
            }
            discord {
              url
            }
            schedule {
              content
            }
          }
        }
      }
    }
  `);
    const transformedData = transformResponse(data.StageItems.items, speakers);
    return transformedData;
}
async function storyblok_getAllSponsors() {
    const data = await storyblok_fetchCmsAPI(`
  {
    CompanyItems(per_page: 100) {
      items {
        content {
          name
          description
          slug
          website {
            url
          }
          callToAction
          callToActionLink {
            url
          }
          discord {
            url
          }
          youtubeSlug
          tier
          links
          cardImage {
            url: filename
          }
          logo {
            url: filename
          }
        }
      }
    }
  }  
  `);
    const transformedData = transformResponse(data.CompanyItems.items);
    return transformedData;
}
async function storyblok_getAllJobs() {
    const data = await storyblok_fetchCmsAPI(`
    {
      JobItems(per_page: 100) {
        items {
          content {
            companyName
            title
            description
            discord {
              url
            }
            link {
              url
            }
            rank
          }
        }
      }
    }
  `);
    const transformedData = transformResponse(data.JobItems.items);
    return transformedData;
}

;// CONCATENATED MODULE: ./lib/cms-api.ts






let cmsApi;
if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
    cmsApi = dato_namespaceObject;
} else if (process.env.CONTENTFUL_ACCESS_TOKEN && process.env.CONTENTFUL_SPACE_ID) {
    cmsApi = contentful_namespaceObject;
} else if (process.env.STORYBLOK_PREVIEW_TOKEN) {
    cmsApi = storyblok_namespaceObject;
} else if (process.env.PRISMIC_REPO_ID) {
    cmsApi = prismic_namespaceObject;
} else if (process.env.AGILITY_GUID && process.env.AGILITY_API_FETCH_KEY && process.env.AGILITY_API_PREVIEW_KEY) {
    cmsApi = agility_namespaceObject;
} else if (process.env.STRAPI_API_URL) {
    cmsApi = strapi_namespaceObject;
} else {
    cmsApi = {
        getAllSpeakers: ()=>Promise.resolve([])
        ,
        getAllStages: ()=>Promise.resolve([])
        ,
        getAllSponsors: ()=>Promise.resolve([])
        ,
        getAllJobs: ()=>Promise.resolve([])
    };
}
async function cms_api_getAllSpeakers() {
    return cmsApi.getAllSpeakers();
}
async function cms_api_getAllStages() {
    return cmsApi.getAllStages();
}
async function cms_api_getAllSponsors() {
    return cmsApi.getAllSponsors();
}
async function cms_api_getAllJobs() {
    return cmsApi.getAllJobs();
}

;// CONCATENATED MODULE: ./pages/api/stages.ts
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

// Number of seconds to cache the API response for
const EXPIRES_SECONDS = 5;
async function getStages(_, res) {
    try {
        const allStages = await cms_api_getAllStages();
        // Set caching headers
        const expires = new Date(Date.now() + external_ms_default()(`${EXPIRES_SECONDS}s`));
        res.setHeader('Expires', expires.toUTCString());
        res.setHeader('Cache-Control', `s-maxage=${EXPIRES_SECONDS}, immutable, must-revalidate, stale-while-revalidate`);
        return res.status(200).json(allStages);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({
            error: {
                code: 'server_error',
                message: 'Internal server error'
            }
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5806));
module.exports = __webpack_exports__;

})();