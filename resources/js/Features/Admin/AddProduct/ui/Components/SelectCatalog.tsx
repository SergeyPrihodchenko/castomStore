import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Catalog } from '@/entities/Catalog/model/types/tapes';
import { Box } from '@mui/material';

export default function SelectCatalog({catalogs}: any) {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={catalogs}
      getOptionLabel={(option: Catalog) => option.title}
      onChange={(e: any) => {console.log(e.target.value);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props} value={option.id}>
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