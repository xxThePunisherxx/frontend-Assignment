import { useContext, useEffect, useRef, useState } from "react";
import style from "./Navbar.module.css";
import { Links } from "../../../Data/Navlinks";
import ThemeContext from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const Theme = useContext(ThemeContext);
	const theme = Theme.state;

	const [Navtogled, setNavtogled] = useState(false);
	useEffect(() => {
		let handler = (event) => {
			if (!navRef.current.contains(event.target)) {
				setNavtogled(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});
	let navRef = useRef();
	return (
		<header className={theme}>
			<div className={style.header} ref={navRef}>
				<div className={style.Navigation_Container}>
					<div className={style.Links}>
						<a href="/" className={style.logo}>
							<h1 className="LogoGradient">Online Store</h1>
						</a>
						<input
							aria-label="Mobile Nav togle"
							type="checkbox"
							id={style.navCheck}
							onClick={() => setNavtogled((Navtogled) => !Navtogled)}
							checked={Navtogled}
							readOnly
						></input>
						<label htmlFor={style.navCheck} className={style.navToggler}>
							<span></span>
						</label>
						<nav className={style.nav}>
							<ul>
								{Links.map((Link) => (
									<li key={Link.Key}>
										<NavLink
											onClick={() => setNavtogled((Navtogled) => !Navtogled)}
											to={Link.Linkto}
											className={({ isActive }) => {
												return "Link_Text_" + (isActive ? "Active" : "Unactive");
												// style for these are in app.css
											}}
										>
											{Link.LinkName}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
