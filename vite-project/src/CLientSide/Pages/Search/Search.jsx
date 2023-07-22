/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { getAllProducts } from "../../../api/productApi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import style from "./Search.module.css";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Search = () => {
	const Theme = useContext(ThemeContext);
	const [filteredProduct, setFilteredProduct] = useState([]);
	const [showFilter, setshowFilter] = useState(false);
	const {
		isLoading,
		isError,
		error,
		data: AllProducts,
	} = useQuery("allProductsList", getAllProducts, { refetchOnWindowFocus: false, staleTime: 1000 * 5 * 60 });

	useEffect(() => {
		if (Theme.state === "Transparent") {
			Theme.toggle();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const handlesubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdData = Object.fromEntries(data.entries());

		if (AllProducts) {
			const results = AllProducts.filter((product) => product.title.toLowerCase().includes(enterdData.InputData.toLowerCase()));
			setFilteredProduct(results);
			setshowFilter(true);
		}
	};

	return (
		<section className="">
			<form onSubmit={handlesubmit} className="px-10 py-16 w-2/3 mx-auto">
				<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Product ..."
						required
						name="InputData"
						onChange={() => setshowFilter(false)}
					/>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>
			<div className={style.SearchREsultWrapper}>
				{!isLoading && !isError && showFilter && (
					<div className={style.Product_Category_Grid}>
						{filteredProduct.map((Product) => (
							<ProductCard image={Product.image} title={Product.title} id={Product.id} key={Product.id} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Search;
