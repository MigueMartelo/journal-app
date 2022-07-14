import { Grid, Typography } from '@mui/material';
import { StartOutlined } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 4,
      }}
    >
      <Grid item xs={12}>
        <StartOutlined sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5' color='white'>
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
