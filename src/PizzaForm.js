import React, { useState } from "react";
import * as yup from "yup";
import formSchema from "./FormSchema";
import axios from "axios";

export default function PizzaForm(props) {
  const { values, update, submit } = props;

  const [formErrors, setFormErrors] = useState({
    name: null,
    size: null,
    Pepperoni: null,
    Hamburger: null,
    Onions: null,
    Peppers: null,
    SpecialInstructions: null,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    size: "",
    Pepperoni: false,
    Hamburger: false,
    Onions: false,
    Peppers: false,
    SpecialInstructions: "",
  });

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;

    validate(name, valueToUse);
    setFormValues({
      ...formValues,
      [name]: valueToUse,
    });
  };

  //   console.log(formValues);
  //   console.log(formErrors);
  const onSubmit = (event) => {
    event.preventDefault();
    const newOrder = {
      name: formValues.name,
      Pepperoni: formValues.Pepperoni,
      Hamburger: formValues.Hamburger,
      Onions: formValues.Onions,
      Peppers: formValues.Peppers,
      size: formValues.size,
      SpecialInstructions: formValues.SpecialInstructions,
    };
    axios.post(`https://reqres.in/api/orders`, newOrder);
  };

  return (
    <div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="errors">
          <div>{formErrors.name}</div>
          <div>{formErrors.Pepperoni}</div>
          <div>{formErrors.Hamburger}</div>
          <div>{formErrors.Onions}</div>
          <div>{formErrors.Peppers}</div>
          <div>{formErrors.size}</div>
          <div>{formErrors.SpecialInstructions}</div>
        </div>
        <label htmlFor="name-input">name</label>
        <input
          id="name-input"
          name="name"
          onChange={inputChange}
          value={formValues.name}
        />

        <select
          id="size-dropdown"
          onChange={inputChange}
          value={formValues.size}
          name="size"
        >
          <option value="">- Select a Size -</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="Pepperoni"
            onChange={inputChange}
            checked={formValues.Pepperoni}
          />
        </label>
        <label>
          Hamburger
          <input
            type="checkbox"
            name="Hamburger"
            onChange={inputChange}
            checked={formValues.Hamburger}
          />
        </label>
        <label>
          Onions
          <input
            type="checkbox"
            name="Onions"
            onChange={inputChange}
            checked={formValues.Onions}
          />
        </label>
        <label>
          Peppers
          <input
            type="checkbox"
            name="Peppers"
            onChange={inputChange}
            checked={formValues.Peppers}
          />
        </label>
        <input
          id="special-text"
          type="text"
          name="SpecialInstructions"
          onChange={inputChange}
          placeholder="Special Instructions"
        />
        <button id="order-button" type="submit">
          Order Pizza!
        </button>
      </form>
    </div>
  );
}
