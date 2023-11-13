import { useAppDispatch } from "@/Shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useAppSelector } from "@/Shared/lib/hooks/useAppSelector/useAppSelector"
import { getCategoriesForCatalogs } from "../model/functions/asyncFunctions"
import { useSetCatalogMutation, useSetCategoryMutation, useUpdateCatalogForCategoryMutation, useUpdateCatalogMutation, useUpdateCategoryMutation, useDeleteCatalogMutation, useDeleteCategoryMutation } from "../model/reducers/query/rtkCatalogs"
import { useState } from "react"

export default function Catalogs() {

    const dispatch = useAppDispatch()
    const {catalogs, categoriesCatalog} = useAppSelector(state => state.CatalogsPanel)
    const fetch = getCategoriesForCatalogs


    const [data, setData] = useState('')

    const [setCatalog, {isLoading}] = useSetCatalogMutation()
    const [deleteCatalog, {isSuccess}] = useDeleteCatalogMutation()
    
    return (<>
        <button onClick={async () => {const test = await deleteCatalog(20); console.log(test);
        }}>click</button>
    </>)
}