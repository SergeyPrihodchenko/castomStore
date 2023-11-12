import { useAppDispatch } from "@/Shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useAppSelector } from "@/Shared/lib/hooks/useAppSelector/useAppSelector"
import { getCategoriesForCatalogs } from "../model/slices/asyncFunctions"

export default function Catalogs() {

    const dispatch = useAppDispatch()
    const {catalogs, categoriesCatalog} = useAppSelector(state => state.CatalogsPanel)
    const fetch = getCategoriesForCatalogs

    console.log(catalogs, categoriesCatalog);
    
    return (<>
        <button onClick={() => {}}>click</button>
    </>)
}