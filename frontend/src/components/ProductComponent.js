import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/ActionCreater";
import { connect } from "react-redux";
import { Loading } from "./LoadingComponent";

function RenderDrinkMenu({ menu, productList, addToCart, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }
  if (menu.id === 0 && productList) {
    return (
      <div>
        {productList
          .filter((productList) => productList.type === "drinks")
          .map((drinkList) => {
            return (
              <div key={drinkList._id}>
                <dl className="row">
                  <dt className="col-10">
                    <img id="menuImage" src={drinkList.image} width="10%" />{" "}
                    <sp />
                    {drinkList.name} <br />
                    <Button
                      onClick={() => addToCart(drinkList._id)}
                      className="mt-2 btn-primary"
                      id="button"
                      outline
                    >
                      Add To Cart
                    </Button>
                  </dt>
                  <dd className="col-2 mt-4">
                    <strong>{drinkList.price}</strong>
                  </dd>
                </dl>

                <hr />
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderPastryMenu({
  menu,
  productList,
  addToCart,
  isLoading,
  errMess,
}) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return errMess;
  }
  if (menu.id === 1 && productList) {
    return (
      <div>
        {productList
          .filter((productList) => productList.type === "pastries")
          .map((pastryList) => {
            return (
              <div key={pastryList._id}>
                <dl className="row">
                  <dt className="col-10">
                    <img id="menuImage" src={pastryList.image} width="10%" />{" "}
                    <sp />
                    {pastryList.name} <br />
                    <Button
                      onClick={() => addToCart(pastryList._id)}
                      className="mt-2 btn-primary"
                      id="button"
                      outline
                    >
                      Add To Cart
                    </Button>
                  </dt>
                  <dd className="col-2 mt-4">
                    <strong>{pastryList.price}</strong>
                  </dd>
                </dl>

                <hr />
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderSoupMenu({ menu, productList, addToCart, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return errMess;
  }
  if (menu.id === 2 && productList) {
    return (
      <div>
        {productList
          .filter((productList) => productList.type === "soups")
          .map((soupList) => {
            return (
              <div key={soupList._id}>
                <dl className="row">
                  <dt className="col-10">
                    <img id="menuImage" src={soupList.image} width="10%" />{" "}
                    {soupList.name} <br />
                    <Button
                      onClick={() => addToCart(soupList._id)}
                      className="mt-2 btn-primary"
                      id="button"
                      outline
                    >
                      Add To Cart
                    </Button>
                  </dt>
                  <dd className="col-2 mt-4">
                    <strong>{soupList.price}</strong>
                  </dd>
                </dl>

                <hr />
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderSaladMenu({ menu, productList, addToCart, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return errMess;
  }
  if (menu.id === 3 && productList) {
    return (
      <div>
        {productList
          .filter((productList) => productList.type === "salads")
          .map((saladList) => {
            return (
              <div key={saladList._id}>
                <dl className="row">
                  <dt className="col-10">
                    <img id="menuImage" src={saladList.image} width="10%" />{" "}
                    {saladList.name} <br />
                    <Button
                      onClick={() => addToCart(saladList._id)}
                      className="mt-2 btn-primary"
                      id="button"
                      outline
                    >
                      Add To Cart
                    </Button>
                  </dt>
                  <dd className="col-2 mt-4">
                    <strong>{saladList.price}</strong>
                  </dd>
                </dl>

                <hr />
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div></div>;
  }
}
function Product(props) {
  if (props.menu) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.menu.menuname}</BreadcrumbItem>
            </Breadcrumb>
            <h2 className="title">{props.menu.menuname}</h2>
            <hr />
          </div>
        </div>
        <RenderDrinkMenu
          menu={props.menu}
          productList={props.productList}
          addToCart={props.addToCart}
          isLoading={props.isLoading}
          errMess={props.errMess}
        />
        <RenderPastryMenu
          menu={props.menu}
          productList={props.productList}
          addToCart={props.addToCart}
          isLoading={props.isLoading}
          errMess={props.errMess}
        />
        <RenderSoupMenu
          menu={props.menu}
          productList={props.productList}
          addToCart={props.addToCart}
          isLoading={props.isLoading}
          errMess={props.errMess}
        />
        <RenderSaladMenu
          menu={props.menu}
          productList={props.productList}
          addToCart={props.addToCart}
          isLoading={props.isLoading}
          errMess={props.errMess}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const mapDispatchTopProps = (dispatch) => {
  return {
    addToCart: (productId) => dispatch(addToCart(productId)),
  };
};

export default connect(null, mapDispatchTopProps)(Product);
