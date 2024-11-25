import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery</title>
      </Helmet>
      <div className="container">
        <header className="d-flex flex-column align-items-center py-3">
          <h1>Galerie</h1>
        </header>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <a
              href="https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <a
              href="https://cdn.pixabay.com/photo/2022/10/07/07/13/alps-7504344_1280.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2022/10/07/07/13/alps-7504344_1280.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a
              href="https://cdn.pixabay.com/photo/2023/03/17/11/39/mountain-7858482_1280.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2023/03/17/11/39/mountain-7858482_1280.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
            </a>
            <a
              href="https://cdn.pixabay.com/photo/2024/01/04/21/55/mountain-8488489_1280.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2024/01/04/21/55/mountain-8488489_1280.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a
              href="https://cdn.pixabay.com/photo/2016/03/08/15/13/mountains-1244132_1280.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/03/08/15/13/mountains-1244132_1280.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
            </a>
            <a
              href="https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
