import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardBody, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuCards({ menu }) {
  return (
    <Card>
      <Link className="text-link" to={`/home/${menu.id}`}>
        <CardImg width="100%" src={menu.menuimage} alt={menu.menuname} />
        <CardImgOverlay>
          <CardTitle>
            <h1 className="title">{menu.menuname}</h1>
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Home(props) {
  const menucard = props.menu.map((menu) => {
    return (
      <div key={menu.id} className="col-12 col-lg-6 ">
        <RenderMenuCards menu={menu} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-2 mt-2">
          <img
            src="\assets\img\coffeecupsmenupage.jpg"
            alt="coffee cups"
            width="100%"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="title">
            <img src="\assets\img\menuicon2.png" alt="icon" width="04%" />
            <sp /> Menu
          </h1>
        </div>
      </div>
      <div className="row">{menucard}</div>
    </div>
  );
}

export default Home;
