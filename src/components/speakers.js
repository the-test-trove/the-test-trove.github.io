const speakers = [
  {
    name: 'Sagar Aivale',
    jobTitle: 'Principal Software Engineer',
    description: `I am Sagar Aivale, currently working as Senior Data Engineer with the UXE DATA Foundations team, previously a Senior Software Engineer for the Rules Acceleration and Automation team. With over 7+ years at RedHat, I enjoy collaborating with fellow Red Hat colleagues and learning about their work. Outside of work, I love spending time with friends and family.`,
    image: 'assets/img/speakers/speaker-2.jpeg',
  },
  {
    name: 'Saurav Chandra',
    jobTitle: 'Software Engineer',
    description: `Software Engineer passionate about automation and optimisation, with expertise in CI/CD, cloud-native applications, and AI/ML.`,
    image: 'assets/img/speakers/speaker-5.JPG',
  },
  {
    name: 'Riya Malushte',
    jobTitle: 'Software Quality Engineer',
    description: `I am a dedicated Quality Engineer. I have been working with Red Hat for the past 4 years.`,
    image: 'assets/img/speakers/speaker-3.jpeg',
  },
  {
    name: 'Hrithik Gavankar',
    jobTitle: 'Software Engineer',
    description: ` Hrithik is a Software Engineer specializing in web development, system design, and API architecture. With expertise in React, Node.js, and GraphQL, has built scalable and high-performance applications.
Passionate about problem-solving and modern web technologies, Hrithik contributes through tech blogs, open-source projects, and speaking engagements.
 `,
    image: 'assets/img/speakers/speaker-1.jpeg',
  },
  {
    name: 'Naresh Jupalle',
    jobTitle: 'Software Engineer',
    description: `I am Naresh, a skilled Front-End Engineer at Red Hat with over five years of experience in building modern web applications. I specialize in HTML, CSS3, SCSS, Bootstrap, JavaScript, TypeScript, Angular, and Vue.`,
    image: 'assets/img/speakers/speaker-4.jpeg',
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
