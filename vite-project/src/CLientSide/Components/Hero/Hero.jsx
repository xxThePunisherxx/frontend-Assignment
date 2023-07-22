import style from "./Hero.module.css";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../../context/ThemeContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";

import ArrowPointer from "../../../assets/Hero images/swirly-arrow.png";
import FlipArrow from "../../../assets/Hero images/flip.png";
import Hatzu from "../../../assets/Hero images/small.png";
import Left from "../../../assets/Hero images/left.jpg";
import Right from "../../../assets/Hero images/right.jpg";

const Hero = () => {
	const Theme = useContext(ThemeContext);
	const location = useLocation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (location.pathname === "/" && Theme.state === "Opaque" && inView) {
			Theme.toggle();
		}
	});
	useEffect(() => {
		// togle navbar color when back button is pressed when user is on midddle of the previous page.
		// id why scroll to top is not working on backbutton when user is in middle of the page..
		if (location.pathname === "/" && Theme.state === "Transparent" && !inView) {
			Theme.toggle();
		}
	});

	useEffect(() => {
		Theme.toggle();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView]);
	return (
		<section className={style.HeroWrapper} ref={ref}>
			<div className={style.HeroImageWrapper}>
				<div className={style.PointingArrow}>
					<img src={ArrowPointer} alt="Pointing arrow" width={100} height={100}></img>
				</div>
				<div className={style.SmallImage}>
					<img src={Hatzu} alt="Hero Image" width={150} height={200}></img>
					<div className={style.texts}>
						<h1 className="text-2xl">Hatzu Jacket</h1>
						<h2 className="text-xl">$100</h2>
					</div>
				</div>
			</div>
			<div className={style.mainHeadingWrapper}>
				<div className="top">
					<div className={style.mainHeading}>
						<h1 className="text-5xl font-bold  xl:text-7xl lg:text-4xl sm:text-2xl">
							Reflect Who
							<br /> You Are With
						</h1>
						<h1 className="text-5xl font-light xl:text-7xl lg:text-4xl sm:text-2xl ">Our Collection</h1>
					</div>
					<div className={style.subHeading}>
						<p className="text-gray-500 text-l mt-4">
							Don&apos;t be into trends. Don&apos;t make fashion own you, but you decide what you are, what you want to express by the way you dress
							and the way to live.
						</p>
					</div>
					<AnchorLink offset="100" href="#collection">
						<button className={style.Hero_Btn}>Explore More</button>
					</AnchorLink>
				</div>
				<div className={style.SpringCollection}>
					<div className={style.PointingArrowCollection}>
						<img src={FlipArrow} alt="Pointing arrow" width={100} height={100}></img>
					</div>
					<h1 className="text-2xl font-bold text-center">Spring Collection &apos;23</h1>
					<h1 className="text-2xl font-light text-center">New Relesed!</h1>
					<div className="flex p-16 gap-5 ml-11 justify-end">
						<img
							src={Left}
							width={180}
							// height={180}
							alt="Spring Collection"
							className="hover:scale-105 transition-all ease-out delay-200 rounded-md"
						></img>
						<img
							src={Right}
							width={180}
							// height={180}
							alt="Spring Collection"
							className="hover:scale-105 transition-all ease-out delay-200 rounded-md"
						></img>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
