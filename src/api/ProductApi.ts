import axios from "axios";
import { Product } from "../types/Product";

export abstract class ProductApi {
    /**
     * Fetch all of the products
     * @returns All the products from the dummy API endpoint
     */
    static async getAll(): Promise<Product[]> {
        const response = await axios.get<Product[]>(
            "https://fakestoreapi.com/products/"
        );
        return response.data;
    }
}
