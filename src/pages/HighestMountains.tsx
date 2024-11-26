import { useEffect } from "react";
import { Helmet } from "react-helmet";
import $ from "jquery";
import "datatables.net";
import { Breadcrumb } from "react-bootstrap";

export const HighestMountains = () => {
  const mountains = [
    { rank: 1, name: "Mount Everest", height: 8848, location: "Nepal/China" },
    { rank: 2, name: "K2", height: 8611, location: "Pakistan/China" },
    { rank: 3, name: "Kangchenjunga", height: 8586, location: "Nepal/India" },
    { rank: 4, name: "Lhotse", height: 8516, location: "Nepal/China" },
    { rank: 5, name: "Makalu", height: 8485, location: "Nepal/China" },
    { rank: 6, name: "Cho Oyu", height: 8188, location: "Nepal/China" },
    { rank: 7, name: "Dhaulagiri I", height: 8167, location: "Nepal" },
    { rank: 8, name: "Manaslu", height: 8163, location: "Nepal" },
    { rank: 9, name: "Nanga Parbat", height: 8126, location: "Pakistan" },
    { rank: 10, name: "Annapurna I", height: 8091, location: "Nepal" },
    {
      rank: 11,
      name: "Gasherbrum I",
      height: 8080,
      location: "Pakistan/China",
    },
    { rank: 12, name: "Broad Peak", height: 8051, location: "Pakistan/China" },
    {
      rank: 13,
      name: "Gasherbrum II",
      height: 8035,
      location: "Pakistan/China",
    },
    { rank: 14, name: "Shishapangma", height: 8027, location: "China" },
    { rank: 15, name: "Gyachung Kang", height: 7952, location: "Nepal/China" },
    { rank: 16, name: "Annapurna II", height: 7937, location: "Nepal" },
    {
      rank: 17,
      name: "Gasherbrum III",
      height: 7946,
      location: "Pakistan/China",
    },
    {
      rank: 18,
      name: "Gasherbrum IV",
      height: 7925,
      location: "Pakistan/China",
    },
    { rank: 19, name: "Himalchuli", height: 7893, location: "Nepal" },
    { rank: 20, name: "Distaghil Sar", height: 7885, location: "Pakistan" },
    { rank: 21, name: "Ngadi Chuli", height: 7871, location: "Nepal" },
    { rank: 22, name: "Nuptse", height: 7861, location: "Nepal/China" },
    { rank: 23, name: "Khunyang Chhish", height: 7852, location: "Pakistan" },
    { rank: 24, name: "Masherbrum", height: 7821, location: "Pakistan" },
    { rank: 25, name: "Nanda Devi", height: 7816, location: "India" },
    { rank: 26, name: "Chomo Lonzo", height: 7804, location: "China" },
    { rank: 27, name: "Batura Sar", height: 7795, location: "Pakistan" },
    { rank: 28, name: "Kanjut Sar", height: 7790, location: "Pakistan" },
    { rank: 29, name: "Rakaposhi", height: 7788, location: "Pakistan" },
    { rank: 30, name: "Namcha Barwa", height: 7782, location: "China" },
    { rank: 31, name: "Kamet", height: 7756, location: "India" },
    {
      rank: 32,
      name: "Saltoro Kangri",
      height: 7742,
      location: "Pakistan/India",
    },
    { rank: 33, name: "Jannu", height: 7710, location: "Nepal/India" },
    { rank: 34, name: "Saser Kangri", height: 7672, location: "India" },
    { rank: 35, name: "Kangto", height: 7670, location: "India/China" },
    { rank: 36, name: "Molamenqing", height: 7661, location: "China" },
    { rank: 37, name: "Sia Kangri", height: 7422, location: "Pakistan/India" },
    { rank: 38, name: "Mamostong Kangri", height: 7516, location: "India" },
    { rank: 39, name: "Rimo I", height: 7385, location: "India" },
    { rank: 40, name: "Dhaulagiri II", height: 7751, location: "Nepal" },
    { rank: 41, name: "Annapurna III", height: 7555, location: "Nepal" },
    { rank: 42, name: "Annapurna IV", height: 7525, location: "Nepal" },
    { rank: 43, name: "Annapurna South", height: 7219, location: "Nepal" },
    { rank: 44, name: "Baintha Brakk", height: 7285, location: "Pakistan" },
    { rank: 45, name: "Saser Kangri II", height: 7500, location: "India" },
    { rank: 46, name: "Changtse", height: 7545, location: "Nepal/China" },
    { rank: 47, name: "Yalung Kang", height: 7570, location: "Nepal/China" },
    { rank: 48, name: "Langtang Lirung", height: 7234, location: "Nepal" },
    { rank: 49, name: "Taboche", height: 6545, location: "Nepal" },
    { rank: 50, name: "Ama Dablam", height: 6812, location: "Nepal" },
  ];

  useEffect(() => {
    const table = $("#mountainsTable").DataTable({
      paging: true,
      searching: true,
      ordering: true,
    });

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Highest Mountains in the World</title>
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
      </Helmet>
      <div className="container">
        <Breadcrumb className="my-2">
          <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="./about">About</Breadcrumb.Item>
          <Breadcrumb.Item active>Highest Mountains</Breadcrumb.Item>
          <Breadcrumb.Item href="./gallery">Gallery</Breadcrumb.Item>
          <Breadcrumb.Item href="./contact">Contact</Breadcrumb.Item>
        </Breadcrumb>

        <section>
          <h2 className="text-center font-weight-bold my-4">
            50 Highest Mountains in the World
          </h2>
          <table
            id="mountainsTable"
            className="table table-striped table-bordered table-hovers"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Height (m)</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {mountains.map((mountain) => (
                <tr key={mountain.rank}>
                  <td>{mountain.rank}</td>
                  <td>{mountain.name}</td>
                  <td>{mountain.height}</td>
                  <td>{mountain.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};
