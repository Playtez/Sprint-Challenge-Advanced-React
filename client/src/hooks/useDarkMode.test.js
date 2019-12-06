import React from "react";

import { render } from "@testing-library/react";
import useDarkMode from "./useDarkMode";

describe("useDarkmode", () => {
  it("toggles dark mode", () => {
    const ToggleDarkModeButton = () => {
      const [darkMode, setDarkMode] = useDarkMode();
      return (
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Click
        </button>
      );
    };

    const { debug } = render(<ToggleDarkModeButton />);
    console.log(debug());
  });
});

test("does my toggle component work", () => {});
