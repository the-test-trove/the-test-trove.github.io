const teamMembers = [
  {
    name: "Swapnil Jadhav",
    title: "Principal Software Quality Engineer",
    image: "assets/img/team/Swapnil.jpg",
    delay: "100"
  },
  {
    name: "Noopur Math",
    title: "Principal Software Quality Engineer",
    image: "assets/img/team/noopur.jpg",
    delay: "200"
  },
  {
    name: "Mohit Gaur",
    title: "Software Quality Engineer",
    image: "assets/img/team/mohit.jpg",
    delay: "300"
  },
  {
    name: "Tushar Sinha",
    title: "Senior Software Quality Enginne",
    image: "assets/img/team/tushar.jpg",
    delay: "300"
  },
  {
    name: "Veerkumar Patil",
    title: "Principal Software Quality Engineer",
    image: "assets/img/team/veer.jpg",
    delay: "300"
  }
];

function teamMemberHTML(member) {
  return `
    <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="${member.delay}">
      <div class="member">
        <img src="${member.image}" class="img-fluid" alt="${member.name}">
        <div class="member-content">
          <h4>${member.name}</h4>
          <span>${member.title}</span>
        </div>
      </div>
    </div>`;
}

export function setupTeam(element) {
  element.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <span class="">Team</span>
      <h2>Team</h2>
      <p>If you have any suggestion about how we can improve, please let us know</p>
    </div>

    <div class="container">
      <div class="row">
        ${teamMembers.map(member => teamMemberHTML(member)).join('')}
      </div>
    </div>`;
}