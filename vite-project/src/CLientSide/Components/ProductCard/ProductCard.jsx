/* eslint-disable react/prop-types */
import style from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, id }) => {
	console.log("🚀 ~ file: ProductCard.jsx:5 ~ ProductCard ~ image:", image);
	return (
		<>
			<Link to={`/individualProduct/${id}`}>
				<div className={style.Individual_Product_Card} tabIndex={0}>
					<img src={image} alt={title} />
					<h2>{title}</h2>
				</div>
			</Link>
		</>
	);
};

export default ProductCard;
