import style from "./CommingSoon.module.css";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
const CommingSoon = () => {
	const Theme = useContext(ThemeContext);
	useEffect(() => {
		if (Theme.state === "Transparent") {
			Theme.toggle();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section className={style.CommingSoonWrapper}>
			<div>
				<h1>We will be up and running in few days. </h1>
				<h1>Thank You for your pacience.</h1>
			</div>
		</section>
	);
};

export default CommingSoon;
