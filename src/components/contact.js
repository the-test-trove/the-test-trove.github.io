const contactInfo = [
  {
    icon: "bi bi-github",
    title: "The Test Trove",
    link: "https://github.com/the-test-trove",
    delay: "200"
  },
  {
    icon: "bi bi-envelope",
    title: "Email Us",
    link: "mailto:t3-organizers@redhat.com",
    delay: "400"
  }
];

function contactItemHTML(item) {
  return `
    <div class="col-lg-6">
      <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="${item.delay}">
        <a href="${item.link}"><i class="${item.icon}"></i></a>
        <h3>${item.title}</h3>
      </div>
    </div>`;
}

export function setupContact(element) {
  element.innerHTML = `
    <div class="container section-title" data-aos="fade-up">
      <span class="">Contact</span>
      <h2 class="">Contact</h2>
      <p>Have questions? Reach out to us – we're here to make your experience unforgettable!</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        ${contactInfo.map(item => contactItemHTML(item)).join('')}
      </div>
    </div>`;
}
