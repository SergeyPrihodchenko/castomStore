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

    const [upCatalog, {isLoading}] = useUpdateCatalogMutation()
    const [deleteCatalog, {isSuccess}] = useDeleteCatalogMutation()

    console.log(catalogs);
    
    
    return (<>
        <button onClick={async () => {await upCatalog({title: 'new_name', id: 1})}}>click</button>
    </>)
}