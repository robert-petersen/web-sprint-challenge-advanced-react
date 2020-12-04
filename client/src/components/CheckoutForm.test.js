import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText("Checkout Form");

  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("Checkout Form");
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  // console.log(firstName);
    // console.log(firstName);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zip).toBeInTheDocument();

  fireEvent.change(firstName, { target: { value: 'rob' } });
  fireEvent.change(lastName, { target: { value: 'rob' } });
  fireEvent.change(address, { target: { value: 'rob' } });
  fireEvent.change(city, { target: { value: 'rob' } });
  fireEvent.change(state, { target: { value: 'rob' } });
  fireEvent.change(zip, { target: { value: 'rob' } });

  const checkOut = screen.getByRole("button");
  fireEvent.click(checkOut);

  const successMessage = screen.queryByText("rob");
  expect(successMessage).toBeInTheDocument();
});
