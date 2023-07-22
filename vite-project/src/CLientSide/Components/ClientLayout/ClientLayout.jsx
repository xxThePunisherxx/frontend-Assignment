import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default ClientLayout;
