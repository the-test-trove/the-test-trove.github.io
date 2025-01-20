const list = ['Development', 'DevOps', 'Collaboration Stories', 'Leadership'];

export function setupAbout(element) {
  element.innerHTML = `
      <div class="container section-title" data-aos="fade-up">
        <span class="">About Us<br></span>
        <h2 class="">About Us<br></h2>
        <p>Create Contribute Collaborate</p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/about-us.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
            <h3>The Test Trove and The Community Relations Initiative</h3>
            <p class="fst-italic">
              We started with an objective to increase collaboration and share Quality Engineering/ Testing related knowledge among different QE groups. The idea is to have discussions on testing related topics and be able to share our knowledge store with the outside QE community. We are building a community! Currently, we are not just limited to Quality Engineering but open to other topics including
            </p>
            <ul>
              ${list
                .map(
                  (el) =>
                    `<li><i class="bi bi-check-circle"></i> <span>${el}</span></li>`
                )
                .join('')}
            </ul>
            <a href="https://source.redhat.com/departments/products_and_global_engineering/xe/the_test_trove" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
`;
}
