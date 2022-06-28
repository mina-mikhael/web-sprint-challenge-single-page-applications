import React from "react";

const Pizza = (props) => {
  const { formValues, submitHandler, changeHandler, errors, disabled } = props;

  const inputChanger = (evt) => {
    const { name, type, checked, value } = evt.target;
    let valueChanger = type === "checkbox" ? checked : value;

    changeHandler(name, valueChanger);
  };

  const formSubmitter = (evt) => {
    evt.preventDefault();

    submitHandler();
  };
  return (
    <div className="formContainer">
      <h2>Build your own Pizza</h2>

      <form onSubmit={formSubmitter} id="pizza-form">
        <div className="form-item">
          <h3>Customer Name:</h3>
          <p>required</p>
        </div>
        <input
          type="text"
          name="customerName"
          id="name-input"
          onChange={inputChanger}
          value={formValues.customerName}
          placeholder="Please enter your name"
        />
        <p>{errors.customerName}</p>

        <div className="form-item">
          <h3>Choice of size:</h3>
          <p>required</p>
        </div>
        <select name="size" id="size-dropdown" onChange={inputChanger}>
          <option value="small"> Small</option>
          <option value="medium"> Medium</option>
          <option value="Large"> Large</option>
        </select>

        <div className="form-item">
          <h3>Choice of Sauce:</h3>
          <p>required</p>
        </div>
        <label>
          Original Red
          <input type="radio" name="sauce" value="originalRed" onChange={inputChanger} />
        </label>
        <label>
          Garlic Ranch
          <input type="radio" name="sauce" value="garlicRanch" onChange={inputChanger} />
        </label>
        <label>
          BBQ sauce
          <input type="radio" name="sauce" value="bbqSauce" onChange={inputChanger} />
        </label>
        <label>
          Spinach Alfredo
          <input type="radio" name="sauce" value="spinachAlfredo" onChange={inputChanger} />
        </label>

        <div className="form-item">
          <h3>Add Toppings:</h3>
          <p>Choose up to 5</p>
        </div>
        <label>
          <input type="checkbox" name="pepperoni" value={formValues.sausage} onChange={inputChanger} />
          Pepperoni
        </label>
        <label>
          <input type="checkbox" name="sausage" value={formValues.sausage} onChange={inputChanger} />
          Sausage
        </label>
        <label>
          <input type="checkbox" name="olives" value={formValues.olives} onChange={inputChanger} />
          Black Olives
        </label>
        <label>
          <input type="checkbox" name="onions" value={formValues.onions} onChange={inputChanger} />
          Onion
        </label>
        <label>
          <input type="checkbox" name="cheese" value={formValues.cheese} onChange={inputChanger} />
          Three Cheese
        </label>

        <div className="form-item">
          <h3>Special Instructions:</h3>
        </div>
        <textarea
          name="special"
          id="special-text"
          cols="30"
          rows="5"
          placeholder="Anything else you would like to add?"
          value={formValues.special}
          onChange={inputChanger}></textarea>
        <p>{errors.special}</p>
        <button id="order-button" disabled={disabled}>
          Add to Order
        </button>
      </form>
    </div>
  );
};

export default Pizza;
