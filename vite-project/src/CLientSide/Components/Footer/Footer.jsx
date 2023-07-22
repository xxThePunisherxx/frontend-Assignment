// import style from "./Footer.module.css";
import { footerLinks } from "../../../Data/Navlinks";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="flex flex-col flex-wrap text-black mt-5">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-row items-start justify-start gap-6 w-full flex-wrap">
					<div className="flex-1 w-full flex md:justify-between flex-wrap max-md:mt-10 gap-20 px-5">
						<div className="px-10">
							<Link to={"/"}>
								<h1 className="LogoGradient">Online Store</h1>
							</Link>
							<div className="text-base text-gray-700">
								<h2 className="mt-1">Telephone: +9771234567890</h2>
								<h2 className="mt-1">Grove Street, Los Santos</h2>
								<h2 className="font-bold mt-1">OnlineStore 2023</h2>
								<h2 className=" font-bold mt-1">All Rights Reserved &copy;</h2>
							</div>
						</div>
						{footerLinks.map((link) => (
							<div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px] px-10">
								<h3 className="font-bold text-2xl ">{link.title}</h3>
								{link.links.map((item) => (
									<Link key={item.title} to={item.url} className="text-gray-500 ml-1 hover:text-gray-950 transition-all ease-in-out duration-200">
										{item.title}
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
