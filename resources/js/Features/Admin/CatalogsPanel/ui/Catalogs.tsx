import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/Shared/lib/hooks/useAppSelector/useAppSelector';
import { getCategoriesForCatalogs } from '../model/functions/asyncFunctions';
import {
  useDeleteCatalogQuery,
  useDeleteCategoryQuery,
  useSetCatalogMutation,
  useSetCategoryMutation,
  useUpdateCatalogForCategoryMutation,
  useUpdateCatalogMutation,
  useUpdateCategoryMutation,
} from '../model/reducers/query/rtkCatalogs';
import { useState } from 'react';

export default function Catalogs() {
  const dispatch = useAppDispatch();
  const { catalogs, categoriesCatalog } = useAppSelector((state) => state.CatalogsPanel);
  const fetch = getCategoriesForCatalogs;

  const [data, setData] = useState('');

  const [setCatalog, { isLoading }] = useSetCatalogMutation();

  const test = async () => {
    await setCatalog({ catalog_title: 'hello' });

    console.log(catalogs);
  };

  return (
    <>
      <button
        onClick={() => {
          test();
        }}
      >
        click
      </button>
      <h1>{data}</h1>
    </>
  );
}
