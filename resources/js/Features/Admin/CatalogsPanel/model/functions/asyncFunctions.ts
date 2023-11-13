import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Categories } from "../types/types";

export const getCategoriesForCatalogs = createAsyncThunk('catalogs/getCategoriesForCatalogs', async (catalog_id):Promise<Categories[]> => {

    try {

        const response = await axios.get(`admin/catalogs/categoriesForCatalog/${catalog_id}`)

        if(response.status != 200) {
            throw new Error(response.statusText).message
        }
        
        return response.data

    } catch (e) {
        
        throw new Error('Запрос не прошел').message

    }
})