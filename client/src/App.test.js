import React from "react";

import App from "./App";
import { render } from "@testing-library/react";
import Card from "./components/Card";

test("renders without crashing", () => {
  render(<App />);
});
