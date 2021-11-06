// Conference Speakers List

const speakers = [
    {
        id: 1,
        socialLink: '',
        image: '',
        name: '',
        title: ''
    },
]

// Conference Schedule

const schedules = [
    {
        id: 'schedulelist-reveal1',
        day: 'Day 1',
        class: '',
        listClass: 'schedule-list__box',
        date: 'Nov 18th',
        items: [
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            }
        ]
    },
    {
        id: 'schedulelist-reveal2',
        class: 'schedule-list--lower',
        listClass: 'schedule-list__box schedule-list__box--lower',
        day: 'Day 2',
        date: 'Nov 18th',
        items: [
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
        ]
    }
]

const experiences = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

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
        id: 'facebook',
        alt: 'facebook',
        image: 'https://raw.githubusercontent.com/adithyaakrishna/the-test-trove.github.io/staging/src/assets/images/footer-face.png',
        link: '/'
    },
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
    }
]

// Footer Menu Items

const footerMenu = [
    {
        id: 1,
        text: 'Become a sponsor',
        link: ''
    },
    {
        id: 2,
        text: 'Contact',
        link: ''
    },
    {
        id: 3,
        text: 'Privacy policy',
        link: ''
    },
    {
        id: 4,
        text: 'Terms of service',
        link: ''
    },
]
module.exports = {
    socials: socials,
    footerMenu: footerMenu,
    schedules: schedules,
    experiences: experiences,
    speakers: speakers,
    sponsors: sponsors
}