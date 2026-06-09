const speakers = [
  {
    name: 'Aman Vishwakarma',
    jobTitle: 'Software Engineer -Intern',
    description: `Hi, I'm Aman Vishwakarma, a Software Engineering Intern with the Performance & Scale team at Red Hat. My work focuses on large-scale log analysis, OpenShift Pipelines, and performance engineering. Outside of work, I enjoy exploring new technologies, building side projects, playing badminton, and following sci-fi and tech-driven stories.`,
    image: 'assets/img/speakers/speaker1.png',
  },
  {
    name: 'Krishna Magar',
    jobTitle: 'Software Engineer - Intern',
    description: `I am a final-year Engineering student at VIIT Pune and currently a Software Engineering Intern at Red Hat, working with the Performance and Scale Engineering team. My work has included evaluating the performance and cost efficiency of Intel and Graviton-based AWS RDS instances, and I am currently focused on kernel performance testing and benchmarking. My interests lie in Linux, performance engineering, cloud infrastructure, and systems optimization.`,
    image: 'assets/img/speakers/speaker2.jpg',
  },
  {
    name: 'Dhammadeep Meshram',
    jobTitle: 'Associate Software Quality Engineer',
    description: `I'm Dhammadeep Meshram—I work as an Associate Software Quality Engineer with the Customer Portal team at Red Hat. Day to day I validate customer-facing flows in the browser and build UI automation that our team can run again and again with confidence.`,
    image: 'assets/img/speakers/speaker3.jpeg',
  },
];

function speakerHTML(speaker) {
  const fallbackImage = `https://images.unsplash.com/photo-1634896941598-b6b500a502a7?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  return `
      <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
        <div class="member">
          <img src="${speaker.image ?? fallbackImage}" class="img-fluid" alt="">
          <div class="member-content">
            <h4>${speaker.name}</h4>
            <span>${speaker.jobTitle}</span>
            <p>${speaker.description}</p>
            <div class="social">
              <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-github"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>`;
}

export function setupSpeakers(element) {
  element.innerHTML = `
  <div class="container section-title" data-aos="fade-up">
    <span class="">Speakers</span>
    <h2>Speakers</h2>
  </div><!-- End Section Title -->
  <div class="container">

    <div class="row">

           ${speakers.map((el) => `${speakerHTML(el)}`).join('')}
    
    </div>
  </div>`;
}
