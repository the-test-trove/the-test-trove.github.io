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
    time: '2:10 PM to 02:40 PM',
    speaker: {
      name: 'Hrithik Gavankar',
      image: 'assets/img/speakers/speaker-1.jpeg',
    },
    title: 'Real-Time Collaborative Systems with CRDTs',
  },
  {
    time: '02:40 PM to 02:55 PM',
    speaker: {
      name: 'Riya Malushte',
      image: 'assets/img/speakers/speaker-3.jpeg',
    },
    title:
      'Bridging the Gap: Efficient Model Testing with Postman',
  },
  {
    time: '02:55 PM to 03:10 PM',
    speaker: {
      name: 'Break',
      image: 'assets/img/speakers/profile.png',
    },
    title: 'Break',
  },
  {
    time: '03:10 PM to 03:40 PM',
    speaker: {
      name: 'Sagar Aivale',
      image: 'assets/img/speakers/speaker-2.jpeg',
    },
    title: 'Automating Release Management with Tekton Pipeline',
  },
  {
    time: '03:10 PM to 03:40 PM',
    speaker: {
      name: 'Saurabh Chandra',
      image: 'assets/img/speakers/speaker-5.JPG',
    },
    title: 'Automating Release Management with Tekton Pipeline',
  },
  {
    time: '03:40 PM to 03:55 PM',
    speaker: {
      name: 'Naresh Jupalle',
      image: 'assets/img/speakers/speaker-4.jpeg',
    },
    title: 'Web Components: Build Once, Reuse Everywhere! ',
  },
  {
    time: '03:55 PM to 04:00 PM',
    speaker: {
      name: 'Veerkumar Patil ',
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

    <h3 class="sub-heading">We are back again with another instance of T3Con scheduled for February 20 2025, at 2:00 PM IST.</h3>

    <div class="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div role="tabpanel" class="col-lg-6 tab-pane fade show active" id="day-1">
        ${scheduleItems.map((item) => scheduleItemHTML(item)).join('')}
      </div>
    </div>`;
}

const scheduleSection = document.getElementById('schedule');
setupSchedule(scheduleSection);
