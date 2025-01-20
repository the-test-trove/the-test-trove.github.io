const scheduleItems = [
  {
    time: '02:00 PM to 02:10 PM',
    speaker: {
      name: 'Noopur Math',
      image: 'assets/img/team/noopur.jpg',
    },
    title: 'Introduction and Welcome Note',
  },
  {
    time: '',
    speaker: {
      name: 'Otavio Piske',
      image: 'assets/img/speakers/speaker-1.jpeg',
    },
    title: 'Do androids dream of robotic Camels?',
  },
  {
    time: '02:40 PM to 03:10 PM',
    speaker: {
      name: 'Benny Powers',
      image: 'assets/img/speakers/2.jpeg',
    },
    title:
      'Semantic component testing: an alternative to Visual Regression that puts Usability first',
  },
  {
    time: '03:10 PM to 03:20 PM',
    speaker: {
      name: 'Shweta Singh',
      image: 'assets/img/speakers/profile.png',
    },
    title: 'Break',
  },
  {
    time: '03:20 PM to 03:35 PM',
    speaker: {
      name: 'Faisal Al-Rayes',
      image: 'assets/img/speakers/speaker-3.jpeg',
    },
    title: 'Commit messages as a long term investment',
  },
  {
    time: '03:35 PM to 03:50 PM',
    speaker: {
      name: 'Minal Sharma',
      image: 'assets/img/speakers/speaker-4.jpeg',
    },
    title: 'Publishing Your First NPM Package',
  },
  {
    time: '03:50 PM to 04:00 PM',
    speaker: {
      name: 'Tushar Sinha',
      image: 'assets/img/team/tushar.jpg',
    },
    title: 'Closing Note',
  },
];

function scheduleItemHTML(item) {
  return `
    <div class="row schedule-item">
      <div class="col-md-2"><time>${item.time}</time></div>
      <div class="col-md-10">
        <div class="speaker">
          <img src="${item.speaker.image}" alt="${item.speaker.name}">
        </div>
        <h4>${item.title} ${
    item.speaker.name !== 'Shweta Singh'
      ? `<span>by ${item.speaker.name}</span>`
      : ''
  }</h4>
      </div>
    </div>`;
}

export function setupSchedule(element) {
  element.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <span class="">Schedule</span>
      <h2>Schedule</h2>
    </div>

    <h3 class="sub-heading">We are back again with another instance of T3Con scheduled for August 22, 2024, at 2:00 PM IST.</h3>

    <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div role="tabpanel" class="col-lg-6 tab-pane fade show active" id="day-1">
        ${scheduleItems.map((item) => scheduleItemHTML(item)).join('')}
      </div>
    </div>`;
}

const scheduleSection = document.getElementById('schedule');
setupSchedule(scheduleSection);
