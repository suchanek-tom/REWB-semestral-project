import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <Container className="my-5">
        <footer className="text-center text-lg-start text-white bg-secondary p-4">
          {/* <section className="d-flex justify-content-between p-4">
            <div className="me-5">
              <span>Connect with us on social media:</span>
            </div>

            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-white me-4"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-white me-4"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-white me-4"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-white me-4"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                className="text-white me-4"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section> */}

          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                {/* Company Section */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">
                    Mountain Adventures
                  </h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Explore, experience, and share the thrill of mountaineering.
                    Our goal is to inspire and equip you for your next mountain
                    adventure.
                  </p>
                </div>

                {/* Products Section */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Resources</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white">
                      Mountain Gear
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Climbing Guides
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Training Tips
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Safety Practices
                    </a>
                  </p>
                </div>

                {/* Useful Links Section */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Quick Links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white">
                      Your Profile
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Join Our Community
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Event Schedule
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Support
                    </a>
                  </p>
                </div>

                {/* Contact Section */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fas fa-home mr-3"></i> Mountain Ave, Denver,
                    CO 80203, USA
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    info@mountainadventures.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +1 303 555 0167
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> +1 303 555 0168
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3">© 2024 Mountain Adventures</div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
