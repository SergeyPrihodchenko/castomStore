import axios from "axios"
import { Catalog } from "../types/types"

export const fetchCatalogs = async (): Promise<Catalog[]> => {
    const response = await axios.get('/admin/catalogs')
    const data = response.data
    return data
}