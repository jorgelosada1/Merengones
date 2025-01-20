import React from 'react';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog'; // Si tienes un componente de catálogo
import Footer from './components/Footer';

// Definir el tema aquí
const theme = createTheme({
  typography: {
    fontFamily: 'Pacifico, cursive',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> {/* El ThemeProvider debe envolver toda la aplicación */}
      <Container maxWidth="lg">
        <Nav />
        <AboutUs />
        <Catalog /> 
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
