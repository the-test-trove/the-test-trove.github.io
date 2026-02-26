const scheduleItems = [
  {
    time: '02:00 PM to 02:05 PM',
    speaker: {
      name: 'Tushar Sinha',
      image: 'assets/img/team/tushar.jpg',
    },
    title: 'Introduction and Welcome Note',
  },
  {
    time: '2:05PM to 02:30 PM',
    speaker: {
      name: 'Abhishek Jha',
      image: 'assets/img/speakers/speaker1.png',
    },
    title: 'Watch before you choose, Why choosing the right metric matters',
  },
  {
    time: '02:30 PM to 02:55 PM',
    speaker: {
      name: 'Allen Yesudasan',
      image: 'assets/img/speakers/speaker2.png',
    },
    title:
      'Unlocking Concurrency in Python with Async I/O and ASGI',
  },
  {
    time: '02:55 PM to 03:05 PM',
    speaker: {
      name: 'break',
      image: 'assets/img/speakers/profile.png',
    },
    title: 'Break',
  },
  {
    time: '03:05 PM to 03:20 PM',
    speaker: {
      name: 'Aishwarya Urne',
      image: 'assets/img/speakers/speaker3.png',
    },
    title: 'Shift Left, Ship Ready: Automating E2E Tests Directly from Jira with Playwright MCP',
  },
  {
    time: '03:20 PM to 03:50 PM',
    speaker: {
      name: 'Chetan Yeshi',
      image: 'assets/img/speakers/speaker4.png',
    },
    title:
      'QE leadership around AI evaluation',
  },
  {
    time: '03:50 PM to 04:00 PM',
    speaker: {
      name: 'Veerkumar Patil',
      image: 'assets/img/team/veer.jpg',
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
    item.speaker.name !== 'break'
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

    <h3 class="sub-heading">We are back again with another instance of T3Con scheduled for Aug 28 2025, at 2:00 PM IST.</h3>

    <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div role="tabpanel" class="col-lg-6 tab-pane fade show active" id="day-1">
        ${scheduleItems.map((item) => scheduleItemHTML(item)).join('')}
      </div>
    </div>`;
}

const scheduleSection = document.getElementById('schedule');
setupSchedule(scheduleSection);
