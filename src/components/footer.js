const socialLinks = [
  { icon: "bi bi-twitter", url: "" },
  { icon: "bi bi-github", url: "" },
  { icon: "bi bi-instagram", url: "" },
  { icon: "bi bi-linkedin", url: "" }
];

const usefulLinks = [
  {
    text: "Source Page",
    url: "https://source.redhat.com/departments/products_and_global_engineering/xe/the_test_trove"
  },
  {
    text: "Q1 2024",
    url: "https://source.redhat.com/departments/products_and_global_engineering/xe/the_test_trove/the_test_trove_conferencet3con_q1_feb__29th_2024"
  },
  {
    text: "Q4 2023",
    url: "https://source.redhat.com/departments/products_and_global_engineering/xe/the_test_trove/the_test_trove_conferencet3con_q3_nov_23_2023"
  },
  {
    text: "Q3 2023",
    url: "https://source.redhat.com/departments/products_and_global_engineering/xe/the_test_trove/the_test_trove_conferencet3con_q3_august_24_2023"
  },
  {
    text: "Q2 2023",
    url: "https://source.redhat.com/departments/products_and_global_engineering/xe/the_test_trove/the_test_trove_conferencet3con_q2_may_25_2023"
  }
];

function socialLinksHTML(links) {
  return links.map(link => `
    <a href="${link.url}"><i class="${link.icon}"></i></a>
  `).join('');
}

function usefulLinksHTML(links) {
  return links.map(link => `
    <li><a href="${link.url}">${link.text}</a></li>
  `).join('');
}

export function setupFooter(element) {
  element.innerHTML = `
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-6 col-md-6">
          <div class="footer-about">
            <a href="index.html" class="logo sitename">The Test Trove</a>
            <div class="social-links d-flex mt-4">
              ${socialLinksHTML(socialLinks)}
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            ${usefulLinksHTML(usefulLinks)}
          </ul>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">The Test Trove</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
      </div>
    </div>`;
}
