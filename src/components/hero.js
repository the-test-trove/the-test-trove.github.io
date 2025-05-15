const eventTime = `May 22 2025, at 2:00 PM IST`;

export function setupHero(element) {
  element.innerHTML = `
        <img src="assets/css/images/hero-bg.jpg" alt="" data-aos="fade-in">

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row justify-content-start">
          <div class="col-lg-8">
            <h2 class="">Welcome to The Test Trove Conference</h2>
            <p>${eventTime}</p>
            <!-- <a href="#about" class="btn-get-started">Get Started</a> -->
          </div>
        </div>
      </div>`;
}
