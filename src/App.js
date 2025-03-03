import React from "react";
import axios from "axios";
import * as yup from "yup";
import { useState, useEffect } from "react";
import image from "./Assets/Pizza.jpg";
import { Link, Route } from "react-router-dom";
import Pizza from "./Pizza";
import "./App.css";
import schema from "./validation/schema";
import OrderSummary from "./Order";

////////////// -- initial states -- //////////////

const initialFormValues = {
  customerName: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  olives: false,
  onions: false,
  cheese: false,
  special: "",
};
const initialFormErrors = {
  customerName: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  olives: false,
  onions: false,
  cheese: false,
  special: "",
};

const initialOrder = {};

const initialDisabled = true;

const App = () => {
  ////////////// -- states -- //////////////
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  ////////////// -- Helpers -- //////////////
  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/order", newOrder)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setFormValues(initialFormValues));
  };

  const getOrder = () => {
    axios
      .get("https://reqres.in/api/order")
      .then((res) => {
        console.log("getter :    ", res);
        setOrder(res.data);
      })
      .catch((err) => console.error(err));
  };
  ////////////// -- event Handlers -- //////////////

  const changeHandler = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const submitHandler = () => {
    const newOrder = {
      customerName: formValues.customerName.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ["pepperoni", "sausage", "olives", "onions", "cheese"].filter((topping) => !!formValues[topping]),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  ////////////// -- Validation -- /////////////

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: null });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  ////////////// -- side effects -- //////////////
  // useEffect(() => {
  //   getOrder();
  // }, []);

  useEffect(() => {
    schema.isValid(formValues).then((enabled) => setDisabled(!enabled));
  }, [formValues]);

  return (
    <div>
      <nav>
        <h1 cy-data="header">Bloomtech Pizza </h1>
        <div className="navLinks">
          <Link to={"/"} cy-id="homeButton">
            Home
          </Link>
          <Link id="order-pizza" to={"/pizza"} cy-id="orderButton">
            Order Now
          </Link>
        </div>
      </nav>
      <Route exact path={"/"}>
        <div className="home">
          <img src={image} alt={"pizza"} width="100%" />
        </div>
      </Route>
      <Route exact path={"/pizza"}>
        <Pizza
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          formValues={formValues}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
      <Route exact path={"/order"}>
        <OrderSummary details={order} />
      </Route>
    </div>
  );
};
export default App;
