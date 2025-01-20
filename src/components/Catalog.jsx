import React, { useEffect, useState } from 'react';
import { Typography, Grid, ThemeProvider, createTheme } from '@mui/material';
import RecipeReviewCard from './Card.jsx';

// Cargar el archivo JSON
import productos from './productos.json';

// Crear el tema con la fuente "Pacifico"
const theme = createTheme({
  typography: {
    fontFamily: 'Pacifico, cursive',
  },
});

const Catalog = () => {
  const [products, setProducts] = useState([]);

  // Usamos useEffect para cargar los datos del archivo JSON al montar el componente
  useEffect(() => {
    setProducts(productos.merengones);  // Cargar los productos del archivo JSON
  }, []);

  return (
    <ThemeProvider theme={theme}> {/* Aplicamos el tema */}
      <div id="catalog" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e1bee7' }}>
        <Typography
          variant="h4"
          style={{
            fontSize: '2rem',
            color: '#ad1457',
          }}
        >
          Catálogo de Productos
        </Typography>
        
        {/* Usamos Grid para un diseño responsivo */}
        <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}> {/* Cambié lg={4} para 3 productos por fila */}
              <RecipeReviewCard 
                nombre={product.nombre} 
                descripcion={product.descripcion} 
                imagen={product.imagen} 
                descripcionStyle={{ fontFamily: 'Arial, sans-serif' }} // Aquí cambiamos solo la fuente de la descripción
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider> 
  );
};

export default Catalog;
