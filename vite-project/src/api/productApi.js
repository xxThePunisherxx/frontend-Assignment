import axios from "axios";

const productApi = axios.create({ baseURL: "https://fakestoreapi.com" });

export const getAllProducts = async () => {
	const response = await productApi.get("/products");
	return response.data;
};
// export const getAllProductsCategory = async () => {
// 	const response = await productApi.get("/api/productCategory");
// 	return response.data;
// };
export const getIndividualProducts = async (productID) => {
	const response = await productApi.get(`products/${productID}`);
	return response.data;
};
// export const getIndividualProductCategory = async (productCategoryID) => {
// 	const response = await productApi.get(`/api/productCategory/${productCategoryID}`);
// 	return response.data;
// };

// export const addProduct = async (newProduct) => {
// 	//* newProduct is the object containing form feilds from mutate function
// 	return await productApi.post("/api/products", newProduct);
// };

// export const updateProduct = async (Product) => {
// 	//* Product is the object containing form feilds from mutate function.
// 	//* Here productID is passed as one of the key value pairs in Product object from mutate function
// 	//! there might be a be a better way but i am lazy to find it...
// 	return await productApi.put(`/api/products/${Product.id}`, Product);
// };

// export const deleteProduct = async ({ id }) => {
// 	return await productApi.delete(`/api/products/${id}`, id);
// };

export default productApi;
