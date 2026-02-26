const speakers = [
  
  {
    name: 'Abhishek Jha',
    jobTitle: 'Software Quality Engineer',
    // description: `Two years at Red Hat as an Associate Software QE, wrangling open-source software and making sure it doesn't spontaneously combust. I build automation frameworks and obsess over product reliability. My goal? To become a performance and security guru, all while keeping the open-source party going strong.`,
    image: 'assets/img/speakers/speaker1.png',
  },
  {
    name: 'Allen Yesudasan',
    jobTitle: 'Associate Software Engineer',
//     description: `Hi, I'm Mahima Malhotra, currently working as a Software Quality Engineer with the Datalayer Team. I bring over 6 years of experience in Manual, Automation, Performance, and API testing, with hands-on expertise in tools and technologies like Selenium (Java/C#), GraphQL, JMeter, Postman, and ARD. My journey spans diverse domains including Medical and Banking, where I've helped deliver high-quality, reliable solutions.
// Beyond testing, I've also stepped into roles as a Business Analyst and Project Coordinator, where I've enjoyed solving business problems and handling client communications.
// Lately, my curiosity has led me into the AI space, where I'm exploring AI Agents, MCP, and Evaluations. `,
    image: 'assets/img/speakers/speaker2.png',
  },
  {
    name: 'Aishwarya Urne',
    jobTitle: 'Senior oftware Quality Engineer',
//     description: `Hi, I'm Nachiket Zadap, currently working as a Software Quality Engineer with the Datalayer and Next-Gen UI Team. I have over 6 years of experience in Quality Assurance, during which I have worked across multiple domains and gained expertise in various testing tools and technologies, including Java, Python, Selenium, Cypress, Playwright, Rest Assured, and JMeter.
// In the era of AI, I decided not to be left behind—so I've been exploring AI Agents, MCP, and Evaluations. Basically, I'm teaching myself to speak robot before robots start teaching me!
// i'm always looking for challenges and eager to learn new AI techs!`,
    image: 'assets/img/speakers/speaker3.png',
  },
  {
    name: 'Chetan Yeshi',
    jobTitle: 'Manager, Quality Engineering',
    // description: `An explorer in the concrete jungle of tech, I’ve spent the last 6 years navigating its ever-evolving terrain—automating, optimizing, and innovating. Currently part of the Ansible Engineering team, I thrive on building scalable solutions and diving into the nuts and bolts of infrastructure automation. Off the clock, you’ll find me exploring the latest in emerging tech or catching a football match—always chasing the next big play, on or off the field.`,
    image: 'assets/img/speakers/speaker4.png',
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
             <!-- <p>${speaker.description}</p> -->
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
