import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Catalog } from '@/entities/Catalog/model/types/tapes';
import { Box } from '@mui/material';

export default function SelectCatalog({catalogs, setCatalogId}: any) {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={catalogs}
      getOptionLabel={(option: Catalog) => option.title}
      noOptionsText='Каталоги отсутствуют'
      onChange={(e: any) => {e.target.value ? setCatalogId(Number(e.target.value)) : setCatalogId(0);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props} value={option.id} key={option.id}>
            {option.title}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Выберите каталог"
        />
      )}
    />
  );
}
