import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Container className="my-5">
        <footer className="text-center text-lg-start text-white bg-secondary p-4">
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Climbing page</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Explore, experience, and share the thrill of mountaineering.
                    Our goal is to inspire and equip you for your next mountain
                    adventure.
                  </p>
                </div>

                {/* Products Section */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Popular brands</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a
                      href="https://www.thenorthface.cz/cs-cz"
                      className="text-white"
                    >
                      The North Face
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.petzl.com/INT/en"
                      className="text-white"
                    >
                      Petzl
                    </a>
                  </p>
                  <p>
                    <a href="https://www.hudy.cz/" className="text-white">
                      HUDY Sport
                    </a>
                  </p>
                  <p>
                    <a href="https://www.rockpoint.cz/" className="text-white">
                      Rock Point
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Quick Links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/about" className="text-white">
                      About
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/highest-mountains" className="text-white">
                      Highest mountains
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="gallery" className="text-white">
                      Galerry
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="contact" className="text-white">
                      Contact
                    </NavLink>
                  </p>
                </div>

                <div className="col-md-s  4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fas fa-home mr-3"></i> Mountain Ave, Denver,
                    CO 80203, USA
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:climbing@outlook" className="text-white">
                      climbing@outlook.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+420123345999" className="text-white">
                      +420 123 345 999
                    </a>
                  </p>
                  <p>
                    <a href="tel:+420123123000" className="text-white">
                      +420 123 123 000
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3">
            © 2024 Climbing page. Made by Tomáš Suchanek (23171)
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
