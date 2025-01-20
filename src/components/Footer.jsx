import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f3e5f5',
        padding: '40px 20px',
        color: '#ad1457',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px', width: '100%' }}>
        {/* Información a la izquierda */}
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center', marginTop: { xs: 0, sm: '100px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Síguenos en nuestras redes sociales
            </Typography>
            <Box sx={{ marginBottom: '20px' }}>
              <IconButton
                sx={{ color: '#ad1457', margin: '0 10px', '&:hover': { color: '#880e4f' } }}
                href="https://www.facebook.com"
                target="_blank"
              >
                <Facebook sx={{ fontSize: '2.5rem' }} />
              </IconButton>
              <IconButton
                sx={{ color: '#ad1457', margin: '0 10px', '&:hover': { color: '#880e4f' } }}
                href="https://www.instagram.com"
                target="_blank"
              >
                <Instagram sx={{ fontSize: '2.5rem' }} />
              </IconButton>
              <IconButton
                sx={{ color: '#ad1457', margin: '0 10px', '&:hover': { color: '#880e4f' } }}
                href="https://www.twitter.com"
                target="_blank"
              >
                <Twitter sx={{ fontSize: '2.5rem' }} />
              </IconButton>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Dirección
            </Typography>
            <Typography variant="body1">
              Calle Ficticia 123, Ciudad de los Merengones, PQR
            </Typography>
          </Box>
        </Grid>

        {/* Formulario a la derecha */}
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Formulario de Quejas y Reclamos
            </Typography>

            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={{ marginBottom: '20px' }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#ad1457',
                color: 'white',
                width: '100%',
                padding: '12px',
                '&:hover': {
                  backgroundColor: '#880e4f',
                },
              }}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Derechos reservados */}
      <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Merengón. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
