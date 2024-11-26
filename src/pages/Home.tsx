import { Breadcrumb, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
import MountainTabs from "../components/MountainTabs";
import { Helmet } from "react-helmet";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage</title>
      </Helmet>
      <div className="container-fluid p-0">
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
            <h1 className="display-3 fw-bolder">Explore the World!</h1>
            <p className="lead">
              Discover new places, cultures, and adventures
            </p>
            <Button
              variant="light"
              size="lg"
              className="mt-4"
              onClick={handleScroll}
            >
              Show more!
            </Button>
          </div>
        </header>

        {/* Breadcrumbs */}
        <Breadcrumb className="my-2 container">
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="./about">About</Breadcrumb.Item>
          <Breadcrumb.Item href="./highest-mountains">
            Highest mountains
          </Breadcrumb.Item>
          <Breadcrumb.Item href="./gallery">Gallery</Breadcrumb.Item>
          <Breadcrumb.Item href="./contact">Contact</Breadcrumb.Item>
        </Breadcrumb>

        {/* Action Section */}
        <section ref={sectionRef} className="py-5">
          <h2 className="text-center">Explore More Actions</h2>
          <div className="text-center">
            <Button variant="primary" onClick={handleShow}>
              Learn More
            </Button>
            <Button variant="secondary" className="ms-3">
              Another Action
            </Button>
          </div>
        </section>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>More Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Here are the details about the selected content.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Tabs Section */}
        <MountainTabs />
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

        .lead {
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default Home;
