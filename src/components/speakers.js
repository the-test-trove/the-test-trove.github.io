const speakers = [
   {
    name: 'Gaurav Kamathe',
    jobTitle: 'Associate Manager ,Engineering',
    description: `Seasoned Software Engineering professional.Primary interests are Security, Linux, Malware.Loves working on the command-line.Interested in low-level software and understanding how things work`,
    image: 'assets/img/speakers/speaker-2.jpg',
  },
    {
    name: 'Hridayesh Sharma',
    jobTitle: 'Software Engineer',
    description: `Hridayesh Sharma is a software engineer working in digital engineering. He has been working in frontend for over 6 years.`,
    image: 'assets/img/speakers/speaker-1.jpeg',
  },

  {
    name: 'Chetna Agrawal',
    jobTitle: 'Associate Manager, Software Engineering',
    description: ` Hi, I’m Chetna Agrawal, an Associate Engineering Manager at Red Hat,  leading the Ansible Networking content Team where we work on developing solutions for our partners to manage and automate their network usecase.  I’ve designed and automated a wide range of cloud storage and virtualization use cases, focusing on enterprise software solutions in past. In addition to my technical expertise, I’m also an artist at heart. I enjoy painting and am a passionate comic book reader, constantly finding inspiration at the intersection of creativity and technology.
 `,
    image: 'assets/img/speakers/speaker-3.jpeg',
  },
  {
    name: 'Panga Niharika',
    jobTitle: 'Associate Software Maintenance Engineer',
    description: `Panga Niharika – Associate Software Maintenance Engineer | Quality Tester | Community Contributor
With 4+ years of experience in software Development, Quality engineering and maintenance, I currently work at Red Hat as a Associate Software Maintenance Engineer in the Sustaining Engineering team. My role involves ensuring high-quality software solutions and debugging complex issues.
Beyond my technical expertise, I am deeply passionate about community engagement, knowledge sharing, and social impact. I have actively: Presented at events, sharing insights on tech contributions beyond coding.Volunteered for multiple initiatives, including sewing blankets for undeserved communities and distributing solar lamps.Supported Industrial Visits, guiding students on career paths in open source and emerging technologies.`,
    image: 'assets/img/speakers/speaker-4.jpg',
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
