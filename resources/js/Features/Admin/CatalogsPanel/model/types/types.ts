export type Catalog = {
    id: number,
    title: string
}

export type Category = {
    id: number,
    title: string,
    catalog_id: number
}

export interface SchemaCatalogs {
    catalogs: Catalog[]
    categoriesCatalog: Category[]
}

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
  }