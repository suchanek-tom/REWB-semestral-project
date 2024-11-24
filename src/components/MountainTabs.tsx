import { Tab, Tabs } from "react-bootstrap";

const MountainTabs = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center font-weight-bold mb-4">
        Famous Mountain Ranges
      </h2>
      <Tabs
        defaultActiveKey="tab1"
        id="uncontrolled-tab-example"
        className="mb-3"
        justify
      >
        {/* Alps */}
        <Tab eventKey="tab1" title="Alps">
          <div className="text-center">
            <p>
              The Alps are a stunning mountain range located in Europe, spanning
              across eight countries including France, Switzerland, and Italy.
              The highest peak in the Alps is{" "}
              <span className="fw-bold">Mont Blanc</span>, standing at 4,808
              meters.
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2024/01/07/10/59/mountains-8492823_1280.jpg"
              alt="The Alps"
              className="img-fluid mb-3 rouded shadow"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </Tab>

        {/* Tatra Mountains */}
        <Tab eventKey="tab2" title="Tatra Mountains">
          <div className="text-center">
            <p>
              The Tatra Mountains are the highest mountain range in the
              Carpathian Mountains, located between Slovakia and Poland. The
              highest peak, <span className="fw-bold">Gerlachovský štít</span>,
              reaches 2,655 meters above sea level.
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2018/03/16/16/57/pleso-3231824_1280.jpg"
              alt="Tatra Mountains"
              className="img-fluid mb-3 rounded shadow"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </Tab>

        {/* Himalayas */}
        <Tab eventKey="tab3" title="Himalayas">
          <div className="text-center">
            <p>
              The Himalayas are the world's tallest mountain range, stretching
              across South Asia. Home to{" "}
              <span className="fw-bold">Mount Everest</span>, the highest peak
              on Earth at 8,848 meters, the Himalayas are a symbol of adventure
              and exploration.
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2016/02/14/12/59/everest-1199431_1280.jpg"
              alt="Himalayas"
              className="img mb-3 rounded shadow"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default MountainTabs;
