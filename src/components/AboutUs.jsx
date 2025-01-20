import React from 'react';
import { createTheme, ThemeProvider, Typography, useMediaQuery } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Pacifico, cursive',
  },
});

const AboutUs = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm')); // Detectamos el tamaño de la pantalla
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md')); // Detectamos si estamos en una tablet

  return (
    <ThemeProvider theme={theme}>
      <div
        id="about-us"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#f3e5f5',
          flexDirection: isSmallScreen || isTablet ? 'column' : 'row', // En móvil y tablet, en columna
          marginTop: isSmallScreen || isTablet ? '90px' : '0', // Ajustamos el margen superior en móvil y tablet
          paddingTop: isSmallScreen || isTablet ? '100px' : '0', // Añadimos padding superior adicional
        }}
      >
        <div style={{ textAlign: 'center', flex: 1 }}>
          <Typography
            variant="h1"
            style={{
              fontSize: isSmallScreen ? '2.5rem' : '4rem', // En móvil, el tamaño de fuente será más pequeño
              color: '#ad1457',
              marginTop: isSmallScreen ? '0' : '-100px', // Ajustamos la posición del título en móvil
            }}
          >
            ¿Quiénes somos?
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: isSmallScreen ? '1rem' : '1.2rem', // En móvil, el texto será más pequeño
              color: '#555',
              marginTop: '20px',
            }}
          >
            Somos una empresa dedicada a ofrecer productos frescos y de alta calidad. Nuestro compromiso
            es brindarte la mejor experiencia, asegurando que cada uno de nuestros productos cumpla con los
            más altos estándares de frescura y sabor. Estamos aquí para ayudarte a elegir lo mejor para tu
            salud y bienestar.
          </Typography>
        </div>

        <div style={{ flex: 1 }}>
          <img
            src="src/assets/Merengon.png"
            alt="Logo"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              display: 'block',
              margin: '0 auto',
              maxWidth: isSmallScreen ? '300px' : '500px', // En móvil, el logo será más pequeño
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AboutUs;
