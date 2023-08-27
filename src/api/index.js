import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://bharatijew-server.onrender.com/",
});

// Category

export const getCategory = () => API.get("category");

// Melting

export const getMelting = () => API.get("melting");

// SubCategory

export const getSubCategory = () => API.get("subcategory");

// Products

export const getProduct = () => API.get("products");
export const getproductbysearch = (searchData) =>
  API.get(`products/search?category=${searchData.category}&subcategory=${searchData.subcategorydata}`);
export const getProductbyId = (id) => API.get(`products/${id}`);

// liverate

export const getlivegoldrate = () => API.get("livegold");
export const getlivesilverrate = () => API.get("livesilver");

// banner

export const getbanner = () => API.get("/banner");

// topost

export const gettoppost = () => API.get("/toppost");
