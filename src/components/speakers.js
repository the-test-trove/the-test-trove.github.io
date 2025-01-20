const speakers = [
  {
    name: 'Otavio Piske',
    jobTitle: 'Principal Software Engineer',
    description: `Otavio is a Principal Software Engineer at 
    RedHat's Hybrid Integration Team where he works developing 
    solutions for micro-services, cloud and integration. He has been 
    involved with messaging and integration technologies for the 
    last 17 years. He is a committer and a member 
    of the Apache Camel PMC.`,
    image: 'assets/img/speakers/speaker-1.jpeg',
  },
  {
    name: 'Faisal Al-Rayes',
    jobTitle: 'Software Engineer',
    description: `As a dedicated Software Engineer at Red Hat, 
    I specialise in Python, containers, and container orchestration. 
    My passion spans across many technologies including 
    Linux, Git, OpenShift, CI/CD solutions, etc. This enables 
    me to gain more comfort within complex environments, and 
    implementations/solutions. Before joining Red Hat, I 
    honed my skills at a Volkswagen Group company, where I 
    worked as a software developer. In that role, I 
    contributed to various projects, leveraging my technical 
    proficiency to develop software that enhances efficiency 
    of the company workflow and make tester's life easier.
    With a strong foundation in software development and a 
    passion for open-source technologies, I am committed to 
    driving innovation and efficiency in every project I 
    undertake to the best of my abilities.`,
    image: 'assets/img/speakers/speaker-3.jpeg',
  },
  {
    name: 'Minal Sharma',
    jobTitle: 'Software Quality Engineer',
    description: ` Hi, I am Minal Sharma, currently working as a 
    Software Quality Engineer with Digital Acceleration Team (DAT). 
    I have a total of 6 years of experience in the IT industry . Earlier, 
    I have worked on technologies like Robot Framework, Selenium WebDriver 
    with Java and currently honing my skills in PHPUnit, a popular testing 
    framework in the PHP world. Apart from my professional life, I'm a 
    huge sports enthusiast. Sports, in general, have always 
    captivated me, and I enjoy staying active and fit through various 
    activities. One aspect that defines me is my love for challenges. I am 
    always on the lookout for new opportunities to stretch my abilities. `,
    image: 'assets/img/speakers/speaker-4.jpeg',
  },
  {
    name: 'Benny Powers',
    jobTitle: 'Principal UX Engineer',
    description: `Involved with Free Software since the early 2000s, 
    Benny joined Red Hat in 2022. He now works on design systems and 
    web components in the experience engineering organization.`,
    image: 'assets/img/speakers/2.jpeg',
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
