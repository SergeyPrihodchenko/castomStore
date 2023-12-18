import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Catalog } from '@/entities/Catalog/model/types/tapes';
import { Box } from '@mui/material';

export default function SelectCategory({categories, setCategoryId}: any) {

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={categories ?? []}
      getOptionLabel={(option: Catalog) => option.title}
      noOptionsText='В каталоге нет категорий'
      onChange={(e: any) => {e.target.value ? setCategoryId(Number(e.target.value)) : null;
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props} value={option.id} key={option.id}>
            {option.title}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Выберите категорю"
        />
      )}
    />
  );
}
