import React, { useState } from "react";
import * as yup from "yup";
import formSchema from "./FormSchema";
import axios from "axios";
import styled from "styled-components";

const PieForm = styled.div`
  color: solid black;
  background: silver;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid green;
`;

const OrderName = styled.label`
  padding: 2rem 0rem;
`;

const SpecInst = styled.label`
  padding: 2rem 0rem;
`;

const Size = styled.select`
padding: .5rem; 0rem;
margin: 1rem 0rem;
`;

export default function PizzaForm(props) {
  const { values, update, submit } = props;

  const [formErrors, setFormErrors] = useState({
    name: null,
    size: null,
    Pepperoni: null,
    Hamburger: null,
    Onions: null,
    Peppers: null,
    BlackOlives: null,
    SpecialInstructions: null,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    size: "",
    Pepperoni: false,
    Hamburger: false,
    Onions: false,
    Peppers: false,
    BlackOlives: false,
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
      size: formValues.size,
      Pepperoni: formValues.Pepperoni,
      Hamburger: formValues.Hamburger,
      Onions: formValues.Onions,
      Peppers: formValues.Peppers,
      BlackOlives: formValues.BlackOlives,
      SpecialInstructions: formValues.SpecialInstructions,
    };
    axios.post(`https://reqres.in/api/orders`, newOrder);
  };

  return (
    <div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="errors">
          <div>{formErrors.name}</div>
          <div>{formErrors.size}</div>
          <div>{formErrors.Pepperoni}</div>
          <div>{formErrors.Hamburger}</div>
          <div>{formErrors.Onions}</div>
          <div>{formErrors.Peppers}</div>
          <div>{formErrors.BlackOlives}</div>
          <div>{formErrors.SpecialInstructions}</div>
        </div>
        <PieForm>
          <OrderName>
            Name
            <input
              id="name-input"
              name="name"
              onChange={inputChange}
              value={formValues.name}
            />
          </OrderName>

          <Size
            id="size-dropdown"
            name="size"
            onChange={inputChange}
            value={formValues.size}
          >
            <option value="">- Select a Size -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Size>
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
          <label>
            Black Olives
            <input
              type="checkbox"
              name="BlackOlives"
              onChange={inputChange}
              checked={formValues.BlackOlives}
            />
          </label>
          <SpecInst>
            <input
              id="special-text"
              type="text"
              name="SpecialInstructions"
              onChange={inputChange}
              placeholder="Special Instructions"
            />
          </SpecInst>
          <button id="order-button" type="submit">
            Order Pizza!
          </button>
        </PieForm>
      </form>
    </div>
  );
}
