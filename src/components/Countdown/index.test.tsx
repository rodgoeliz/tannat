import React from "react";
import { render, screen } from "@testing-library/react";
import Countdown from "./index";

test("renders Countdown component", () => {
	render(<Countdown />);
	const countdownElement = screen.getByLabelText("offer countdown");
	expect(countdownElement).toBeInTheDocument();
});
