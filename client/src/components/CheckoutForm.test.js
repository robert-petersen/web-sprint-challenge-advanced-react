import React from "react";
import { render, screen, userEvent  } from "@testing-library/react";
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
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  userEvent.type(firstName, "rob");
  userEvent.type(lastName, "rob");
  userEvent.type(address, "rob");
  userEvent.type(city, "rob");
  userEvent.type(state, "rob");
  userEvent.type(zip, "rob");

  const checkOut = screen.getByRole("button");
  userEvent.click(checkOut);

  const successMessage = screen.queryByText("rob");
  expect(successMessage).toBeInTheDocument();
});
