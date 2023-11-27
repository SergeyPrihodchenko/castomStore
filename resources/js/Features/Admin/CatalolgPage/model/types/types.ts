import { Catalog } from "@/entities/Catalog/model/types/tapes";

export interface ICatalogs {
    catalogs: Catalog[],
}

export interface ICatalogsTable {
    catalogs: Catalog[],
    updateCatalog: Function
}