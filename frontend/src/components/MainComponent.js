import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutUs";
import LocationHours from "./LocationHours";
import Product from "./ProductComponent";
import Footer from "./FooterComponent";
import Cart from "./CartComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { MENU } from "../shared/Menu";
import { productsLoading } from "../redux/ActionCreater";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    product: state.product,
    cart: state.cart,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU,
    };
  }
  componentDidMount() {
    this.props.productsLoading();
  }
  render() {
    const MenuWithId = ({ match }) => {
      return (
        <Product
          menu={
            this.state.menu.filter(
              (menu) => menu.id === +match.params.menuId
            )[0]
          }
          productList={this.props.product.productList}
          isLoading={this.props.product.isLoading}
          errMess={this.props.product.errMess}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Home menu={this.state.menu} />}
          />
          <Route path="/home/:menuId" component={MenuWithId} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/locationhours" component={LocationHours} />
          <Route
            exact
            path="/cart"
            render={() => <Cart cart={this.props.cart.cartList} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productsLoading: () => dispatch(productsLoading()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
