import { createSlice } from "@reduxjs/toolkit";
import { SchemaCatalogs } from "../types/types";
import { fetchCatalogs } from "../functions/catalogs";
import { getCategoriesForCatalogs } from "./asyncFunctions";

const initialState: SchemaCatalogs = {
    catalogs: await fetchCatalogs(),
    categoriesCatalog: []
}

const CatalogsSlice = createSlice({
    name: 'catalogs',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
        .addCase(getCategoriesForCatalogs.pending, (state) => {
            
        })
        .addCase(getCategoriesForCatalogs.fulfilled, (state, action) => {
            state.categoriesCatalog = action.payload
        })
        .addCase(getCategoriesForCatalogs.rejected, (state) => {
            
        })
    } 
})

export const {actions} = CatalogsSlice
export default CatalogsSlice.reducer