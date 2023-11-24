import { Catalog } from "@/entities/Catalog/model/types/tapes";
import { Category } from "@/entities/Category/model/types/types";


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