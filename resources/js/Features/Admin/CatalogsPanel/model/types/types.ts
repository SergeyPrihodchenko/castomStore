export type Catalog = {
    id: number,
    catalog_title: string
}

export type Category = {
    id: number,
    category_title: string,
    catalog_id: number
}

export interface SchemaCatalogs {
    catalogs: Catalog[]
    categoriesCatalog: Category[]
}