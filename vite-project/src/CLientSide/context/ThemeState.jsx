/* eslint-disable react/prop-types */
import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = ({ children }) => {
	const [state, setstate] = useState("Transparent");
	const toggle = () => {
		state === "Transparent" ? setstate("Opaque") : setstate("Transparent");
	};

	return <ThemeContext.Provider value={{ state, toggle }}>{children}</ThemeContext.Provider>;
};

export { ThemeState };
