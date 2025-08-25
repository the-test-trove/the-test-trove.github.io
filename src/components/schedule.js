const scheduleItems = [
  {
    time: '02:00 PM to 02:10 PM',
    speaker: {
      name: 'Tushar Sinha',
      image: 'assets/img/team/tushar.jpg',
    },
    title: 'Introduction and Welcome Note',
  },
  {
    time: '2:10 PM to 02:30 PM',
    speaker: {
      name: 'Ashutosh Mallick',
      image: 'assets/img/speakers/speaker-2.jpeg',
    },
    title: 'Generating UI Test Plans from GitLab Merge Requests with MCP and Ollama',
  },
  {
    time: '02:30 PM to 03:00 PM',
    speaker: {
      name: 'Mahima Malhotra',
      image: 'assets/img/speakers/speaker-3.png',
    },
    title:
      'AI-Infused Automation Review: A Prompt-First Approach',
  },
  {
    time: '02:30 PM to 03:00 PM',
    speaker: {
      name: 'Nachiket Zadap',
      image: 'assets/img/speakers/speaker-4.png',
    },
    title:
      'AI-Infused Automation Review: A Prompt-First Approach',
  },
  {
    time: '03:00 PM to 03:10 PM',
    speaker: {
      name: 'break',
      image: 'assets/img/speakers/profile.png',
    },
    title: 'Break',
  },
  {
    time: '03:10 PM to 03:30 PM',
    speaker: {
      name: 'Ayush Saini',
      image: 'assets/img/speakers/speaker-1.png',
    },
    title: 'Building Opportunities Through Open Source Contribution',
  },
  {
    time: '03:30 PM to 03:45 PM',
    speaker: {
      name: 'Siddarth Sharma',
      image: 'assets/img/speakers/speaker-5.png',
    },
    title: 'Testcontainers: Real Environments for Consistent, Isolated, and Reliable Testing',
  },
  {
    time: '03:45 PM to 04:00 PM',
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
