import style from "./Shop.module.css";
import { getAllProducts } from "../../../api/productApi";
import { useQuery } from "react-query";
// import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
	const dummyArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const {
		isLoading,
		isError,
		error,
		data: AllProducts,
	} = useQuery("allProductsList", getAllProducts, { refetchOnWindowFocus: false, staleTime: 1000 * 5 * 60 });
	return (
		<section className={style.Shop_Wrapper}>
			<h1 className="mt-20" id="collection">
				Our Collection
			</h1>
			{isLoading && (
				<div className={style.Product_Category_Loader_Grid}>
					{dummyArr.map((index) => (
						<div key={index}>
							<div className={style.Skel}>
								<div className={style.imgDiv}></div>
								<div className={style.H1Div}></div>
							</div>
						</div>
					))}
				</div>
			)}
			{isError && <h1>{error.message}</h1>}
			{!isError && !isLoading && (
				<div className={style.Product_Category_Grid}>
					{AllProducts.map((Product) => (
						<ProductCard image={Product.image} title={Product.title} id={Product.id} key={Product.id} />
					))}
				</div>
			)}
		</section>
	);
};

export default Shop;
