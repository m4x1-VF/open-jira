import { Box, Button, TextField } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        endIcon={<AddBoxOutlinedIcon />}
      >
        Agregar Tarea
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBotton: 1 }}
        placeholder="Nueva Entrada"
        autoFocus
        multiline
        label="Nueva Entrada"
        helperText="Ingrese su entrada"
      />
      <Box display="flex" justifyContent="space-between">
        <Button variant="text" endIcon={<CancelOutlinedIcon />}>
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
