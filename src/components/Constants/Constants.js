// Conference Iteration/Version

const versions = [
    {
        quarter: 'Q1', // Q1, Q2, Q3, Q4
        year: '2022', // 2021, 2022, 2023, 2024
    }
]

// Conference Dates

const dates = [
    {
        location: 'Virtual, Remote',
        date: '24th',
        monthYear: 'February , 2022',
    }
]

// Conference Schedule

const schedules = [
    {
        id: 'schedulelist-reveal1',
        day: 'Feb 24th, 2022 02:00 PM IST',
        class: '',
        listClass: 'schedule-list__box',
        date: 'Thursday',
        items: [
            {
                title: 'Welcome Note By Anisha Narang',
                time: '2:00 -2:10 pm',
            },
            {
                title: 'Introduction to Containerised Virtual Machine By Satyajit Bulage',
                time: '2:10 - 2:40 pm',
            },
            {
                title: 'Documentation: Everyday collaboration By Anjana Krishnadasan',
                time: '2:40 - 2:55 pm',
            },
            {
                title: 'Grab your Coffee please!',
                time: '2:55 - 3:05 pm',
            },
            {
                title: 'Using Firefox like a Boss By Ankit Gadgil',
                time: '3:05 -  3:35 pm',
            },
            {
                title: 'Red Hat Machine Translation By Nitish Sharma',
                time: '3:35 - 3:50 pm',
            },
            {
                title: 'Closing Note By Swapnil Jadhav',
                time: '3:50 - 4:00 pm',
            },
        ]
    },
]

const importantDates = [
    {
        id: 'schedulelist-reveal1',
        day: 'Feb 24th, 2022 02:00 PM IST',
        class: '',
        listClass: 'schedule-list__box',
        date: 'Thursday',
        items: [
            {
                title: 'CFP Opens',
                time: 'January 17th 2022',
            },
            {
                title: 'CFP Closes',
                time: 'January 28th 2022',
            },
            {
                title: 'Conference Date',
                time: 'February 24th 2022',
            },
        ]
    },
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
        alt: 'T3 Con Twitter',
        image: 'https://img.icons8.com/color/48/000000/twitter-circled--v1.png',
        link: 'https://twitter.com/thetesttrove'
    },
    {
        id: 'linkedin',
        alt: 'T3 Con LinkedIn Group',
        image: 'https://img.icons8.com/color/48/000000/linkedin.png',
        link: 'https://www.linkedin.com/groups/8970766/'
    },
    {
        id: 'facebook',
        alt: 'T3 Con Facebook',
        image: 'https://img.icons8.com/fluency/48/000000/facebook-new.png',
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
    importantDates: importantDates,
}