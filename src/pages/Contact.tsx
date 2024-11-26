import { Breadcrumb, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useState } from "react";
import { Helmet } from "react-helmet";

export const Contact = () => {
  // State for managing the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Functions to handle modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div className="container mt-4">
        <h2>Contact Form</h2>

        <Breadcrumb className="my-2">
          <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="./about">About</Breadcrumb.Item>
          <Breadcrumb.Item href="./highest-mountains">
            Highest Mountains
          </Breadcrumb.Item>
          <Breadcrumb.Item href="./gallery">Gallery</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>

        <Form className="rounded p-4 shadow">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="Enter your age..." />
              <InputGroup.Text>years</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExperience">
            <Form.Label>What is your climbing experience?</Form.Label>
            <Form.Select>
              <option>Beginner</option>
              <option>Advanced</option>
              <option>Professional</option>
            </Form.Select>
            <Button variant="link" className="mt-2" onClick={handleShow}>
              Learn more about climbing levels
            </Button>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Check type="radio" label="Male" name="gender" />
            <Form.Check type="radio" label="Female" name="gender" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>What kind of climbing do you like?</Form.Label>
            <Form.Check type="checkbox" label="Bouldering" />
            <Form.Check type="checkbox" label="Climbing on a rope" />
            <Form.Check type="checkbox" label="Climbing on ice" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHeight">
            <Form.Label>Height</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="Enter your height..." />
              <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formComments">
            <Form.Label>Any questions?</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type here..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTerms">
            <Form.Check
              type="checkbox"
              label="I agree to terms and conditions"
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Modal for climbing experience */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Climbing Experience Levels</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Beginner:</strong> Suitable for those with no prior
              climbing experience. Learn basic techniques and safety practices.
            </p>
            <p>
              <strong>Advanced:</strong> For those with some experience, who are
              comfortable with climbing techniques and safety gear.
            </p>
            <p>
              <strong>Professional:</strong> For highly experienced climbers who
              tackle challenging routes and understand advanced climbing
              strategies.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
