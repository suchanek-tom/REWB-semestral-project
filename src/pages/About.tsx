import { Row, Col, Image, Breadcrumb } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useRef } from "react";

const About: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About me</title>
      </Helmet>
      <div className="container-fluid p-0">
        {/* Hero Header */}
        <header
          className="hero-header d-flex align-items-center justify-content-center text-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2023/09/02/15/34/mountains-8229139_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="overlay w-100 h-100 position-absolute"></div>
          <div className="hero-content position-relative text-white">
            <h1 className="display-3 fw-bolder">My journey!</h1>
            <button
              className="btn btn-dark rounded-pill px-5 fs-6 m-0"
              onClick={handleScroll}
            >
              Explore more!
            </button>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="container mt-2 mb-4">
          <Breadcrumb>
            <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About</Breadcrumb.Item>
            <Breadcrumb.Item href="./services">Services</Breadcrumb.Item>
            <Breadcrumb.Item href="./gallery">Gallery</Breadcrumb.Item>
            <Breadcrumb.Item href="./contact">Contact</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        {/* Introduction Section */}
        <section className="mb-4 container">
          <p className="text-center fs-5">
            Mountaineering has been my passion for many years. The challenge,
            the thrill, and the serenity of being in the mountains are
            experiences that cannot be matched. Over the years, I’ve had the
            opportunity to climb some incredible peaks, each one offering new
            perspectives and teaching valuable lessons about resilience,
            patience, and respect for nature.
          </p>
          <p className="text-center fs-5">
            My journey started with local hikes, but as I developed my skills
            and knowledge, I began tackling more challenging climbs. From
            preparing the right gear to understanding weather patterns and
            mastering safety techniques, each aspect of mountaineering has
            deepened my connection with the sport.
          </p>
          <p className="text-center fs-5">
            Through this website, I aim to share my experiences, insights, and
            tips on how to get started with mountaineering. Whether you're a
            beginner interested in local hikes or an experienced climber aiming
            for more ambitious peaks, I hope you’ll find valuable information
            here. Join me as I explore new heights, one mountain at a time.
          </p>
        </section>

        {/* Journey Highlights Section */}
        <section ref={journeyRef} className="container my-4">
          <h2 className="text-center fw-bold mb-3">Journey Highlights</h2>
          <Row className="g-3">
            <Col xs={12} md={4}>
              <Image
                src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg"
                alt="Mountain View 1"
                className="img-fluid rounded"
              />
            </Col>
            <Col xs={12} md={4}>
              <Image
                src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg"
                alt="Mountain View 2"
                className="img-fluid rounded"
              />
            </Col>
            <Col xs={12} md={4}>
              <Image
                src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg"
                alt="Mountain View 3"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </section>
      </div>

      <style>{`
        .hero-header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-size: cover;
          background-position: center;
          height: 100vh;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better text contrast */
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
        }

        .lead {
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default About;
