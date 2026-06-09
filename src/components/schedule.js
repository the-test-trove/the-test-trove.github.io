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
      name: 'Krishna Magar',
      image: 'assets/img/speakers/speaker2.jpg',
    },
    title: 'The End of x86? Benchmarking Graviton vs Intel for Cloud Databases',
  },
  {
    time: '02:30 PM to 02:45 PM',
    speaker: {
      name: 'Dhammadeep Meshram',
      image: 'assets/img/speakers/speaker3.jpeg',
    },
    title:
      'Guardrailed AI-Assisted E2E Automation',
  },
  {
    time: '02:45 PM to 03:10 PM',
    speaker: {
      name: 'Aman Vishwakarma',
      image: 'assets/img/speakers/speaker1.png',
    },
    title: ' Scaling Log Analysis with LogAn: From Raw Logs to Actionable Insights',
  },
  {
    time: '03:10 PM to 03:15 PM',
    speaker: {
      name: 'Noopur Math',
      image: 'assets/img/team/noopur.jpg',
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

    <h3 class="sub-heading">We are back again with another instance of T3Con scheduled for 11th June 2026, at 2:00 PM IST.</h3>

    <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div role="tabpanel" class="col-lg-6 tab-pane fade show active" id="day-1">
        ${scheduleItems.map((item) => scheduleItemHTML(item)).join('')}
      </div>
    </div>`;
}

const scheduleSection = document.getElementById('schedule');
setupSchedule(scheduleSection);
