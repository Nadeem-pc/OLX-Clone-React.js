import axios from "axios";

const API_URL = 'http://localhost:4000/api/products';

export const addProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/add`, productData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response;
    } catch (error) {
        console.error("Error in service:", error.message);
        return { ok: false };
    }
}