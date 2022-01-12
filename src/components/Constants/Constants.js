// Conference Iteration/Version

const versions = [
    {
        quarter: 'Q4', // Q1, Q2, Q3, Q4
        year: '2021', // 2021, 2022, 2023, 2024
    }
]

// Conference Dates

const dates = [
    {
        location: 'Virtual, Remote',
        date: '18th',
        monthYear: 'November, 2021',
    }
]

// Conference Schedule

const schedules = [
    {
        id: 'schedulelist-reveal1',
        day: 'Nov 18, 2021 02:00 PM IST',
        class: '',
        listClass: 'schedule-list__box',
        date: 'Thursday',
        items: [
            {
                title: 'Welcome note By Anisha Narang',
                time: '2:00 -2:10 pm',
            },
            {
                title: 'Enterprise Integration Patterns using Camel By Rajshekhar Andala Pisharam',
                time: '2:10 - 2:40 pm',
            },
            {
                title: 'Panel discussion: Psychological safety for Testers',
                time: '2:45 - 3:25 pm',
            },
            {
                title: 'Grab your Coffee please!',
                time: '3:25 pm - 3:35 pm',
            },
            {
                title: 'Being an Open-Sorcerer While Working in Red Hat By Adithya Krishna Sharma',
                time: '3:35 -  4:05 pm',
            },
            {
                title: 'Closing note By Anisha Narang',
                time: '4:05 -4:10 pm',
            },
        ]
    },
    // {
    //     id: 'schedulelist-reveal2',
    //     class: 'schedule-list--lower',
    //     listClass: 'schedule-list__box schedule-list__box--lower',
    //     day: 'Day 2',
    //     date: 'Nov 18th',
    //     items: [
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //         {
    //             title: 'Badge Pickup / Breakfast',
    //             time: '8:30am',
    //         },
    //     ]
    // }
]


// Conference Sponsors

const sponsors = [
    {
        image: '',
        altText: 'sponsor1',
    },
]

// The Test Trove Socials

const socials = [
    {
        id: 'twitter',
        alt: 'twitter',
        image: 'https://raw.githubusercontent.com/adithyaakrishna/the-test-trove.github.io/staging/src/assets/images/footer-twit.png',
        link: 'https://twitter.com/thetesttrove'
    },
    {
        id: 'linkedin',
        alt: 'linkedin',
        image: 'https://raw.githubusercontent.com/adithyaakrishna/the-test-trove.github.io/staging/src/assets/images/footer-in.png',
        link: 'https://www.linkedin.com/groups/8970766/'
    },
    {
        id: 'facebook',
        alt: 'facebook',
        image: 'https://raw.githubusercontent.com/adithyaakrishna/the-test-trove.github.io/staging/src/assets/images/footer-face.png',
        link: '/'
    }
]

// Footer Menu Items

const footerMenu = [
    {
        id: 1,
        text: 'Code of Conduct',
        link: 'https://www.devconf.info/coc/'
    },
    {
        id: 2,
        text: 'Contact',
        link: 'mailto:anarang@redhat.com'
    },
    {
        id: 3,
        text: 'Privacy policy',
        link: 'https://www.devconf.info/privacy-statement/'
    },
    {
        id: 4,
        text: 'Media Policy',
        link: 'https://www.devconf.info/media-policy/'
    },
]
module.exports = {
    socials: socials,
    footerMenu: footerMenu,
    schedules: schedules,
    sponsors: sponsors,
    dates: dates,
    versions: versions,
}