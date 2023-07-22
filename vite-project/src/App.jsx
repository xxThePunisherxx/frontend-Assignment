import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./CLientSide/Pages/Homepage/HomePage";
import ClientLayout from "./CLientSide/Components/ClientLayout/ClientLayout";
import CommingSoon from "./CLientSide/Pages/CommingSoon/CommingSoon";
import IndividualProduct from "./CLientSide/Pages/IndividualProductPage/IndividualProduct";
import Search from "./CLientSide/Pages/Search/Search";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/search" element={<Search />}></Route>
					<Route path="/individualProduct/:productID" element={<IndividualProduct />}></Route>
					<Route path="*" element={<CommingSoon />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
