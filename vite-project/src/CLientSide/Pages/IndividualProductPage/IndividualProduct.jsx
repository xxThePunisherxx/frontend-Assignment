import style from "./IndividualProduct.module.css";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useQuery } from "react-query";
import { getIndividualProducts, getAllProducts } from "../../../api/productApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Truck from "../../../assets/truck.png";
import Return from "../../../assets/return.png";
import Card from "../../../assets/credit-card.png";

const IndividualProduct = () => {
	const dummyArr = [0, 1, 2, 3];
	const [showComapny, SetshowComapny] = useState(false);
	const Theme = useContext(ThemeContext);
	const { productID } = useParams();

	const {
		isLoading,
		data: Data,
		isError,
		error,
	} = useQuery(["Product", productID], () => getIndividualProducts(productID), { refetchOnWindowFocus: false });

	useEffect(() => {
		SetshowComapny(false);
		if (!isLoading && Data.company) SetshowComapny(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Data]);

	const {
		isLoading: isLoadingAllProducts,
		isError: isErrorAllProducts,
		error: allProductsError,
		data: AllProducts,
	} = useQuery("allProductsList", getAllProducts, { refetchOnWindowFocus: false, staleTime: 1000 * 5 * 60 });

	let filteredAllProducts = [];
	if (!isLoadingAllProducts && !isErrorAllProducts && !isLoading && !isError) {
		let filteredAllProductsInt = AllProducts.filter((Product) => Product.category === Data.category);
		filteredAllProducts = filteredAllProductsInt.filter((Product) => Product.id !== Data.id);
	}
	useEffect(() => {
		if (Theme.state === "Transparent") {
			Theme.toggle();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main>
			<section className={style.IndividualProductPageWrapper}>
				{isLoading && (
					<div className={style.ProductCard}>
						<div className={style.imgDiv}></div>

						<div className={style.MoreInfo}>
							<div className={style.ProductDescription}>
								<div className={style.H1Div}></div>
								{showComapny && <div className={style.H2Div}></div>}
								<div className={style.H2Div}></div>
								<div className={style.PDiv}></div>
							</div>
							<div className={style.ButtonDiv}></div>
							<div className={style.Policies}>
								<div className={style.Policy}>
									<div className={style.imgDivS}></div>
									<div className={style.H2Div}></div>
								</div>
								<div className={style.Policy}>
									<div className={style.imgDivS}></div>
									<div className={style.H2Div}></div>
								</div>
								<div className={style.Policy}>
									<div className={style.imgDivS}></div>
									<div className={style.H2Div}></div>
								</div>
							</div>
						</div>
					</div>
				)}
				{isError && <h1>{error.message}</h1>}
				{!isLoading && !isError && (
					<div className={style.ProductCard}>
						<div className={style.ProductImage}>
							<img src={Data.image} alt={Data.title} />
						</div>
						<div className={style.MoreInfo}>
							<div className={style.ProductDescription}>
								<h1>{Data.title}</h1>
								{showComapny && (
									<h2>
										<span>By {Data.company}</span>
									</h2>
								)}
								<h2>${Data.price}</h2>
								<p>{Data.description}</p>
							</div>
							<div className={style.Actions}>
								<Link to={"/commingSoon"}>
									<button>Add to Cart</button>
								</Link>
							</div>
							<div className={style.Policies}>
								<div className={style.Policy}>
									<img src={Truck} alt="Shipping" />
									<h3>Free shipping</h3>
								</div>
								<div className={style.Policy}>
									<img src={Return} alt="Shipping" />
									<h3>Easy Return</h3>
								</div>
								<div className={style.Policy}>
									<img src={Card} alt="Shipping" />
									<h3>Easy Payment</h3>
								</div>
							</div>
						</div>
					</div>
				)}
				<div className={style.SimilarProducts}>
					{isLoadingAllProducts && (
						<div>
							<div className={style.H1DivS}></div>
							<div className={style.SimilarProductsGrid}>
								{dummyArr.map((index) => (
									<div key={index}>
										<div className={style.Skel}>
											<div className={style.imgDiv}></div>
											<div className={style.H1Div}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
					{isErrorAllProducts && <h3>{allProductsError.message}</h3>}
					{!isLoadingAllProducts && !isLoading && (
						<section>
							<h1>Similar Products</h1>
							<div className={style.SimilarProductsGrid}>
								{filteredAllProducts.map((filteredProduct) => (
									<Link to={`/individualProduct/${filteredProduct.id}`} key={filteredProduct.id}>
										<div className={style.filteredProductCardWrarpper}>
											<img src={filteredProduct.image} alt="" />
											<div className={style.filteredProductCardTexts}>
												<div className={style.Title}>
													<h2>{filteredProduct.title}</h2>
												</div>
												<div className={style.price}>
													<h3>$ {filteredProduct.price}</h3>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</section>
					)}
				</div>
			</section>
		</main>
	);
};

export default IndividualProduct;
