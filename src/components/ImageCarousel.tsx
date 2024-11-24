import { Carousel } from "react-bootstrap";

export const ImageCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Explore the Peaks</h3>
        <p>Discover breathtaking mountain landscapes.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2014/01/10/19/23/hawsers-241783_1280.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Equip Yourself</h3>
        <p>Find the best gear for your adventures.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
