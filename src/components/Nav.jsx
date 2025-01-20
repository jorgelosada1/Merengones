import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery } from '@mui/material';

const Nav = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#e1bee7" }}>
      <Toolbar>
        {/* Logo a la izquierda */}
        <Box
          sx={{
            position: 'absolute',
            left: 16,
            display: 'flex',
            alignItems: 'center',
            marginTop: isSmallScreen ? '10px' : '0', 
          }}
        >
          <img
            src="src/assets/Logo.png"
            alt="Logo de merengón"
            style={{
              width: isSmallScreen ? '120px' : '100px',
              height: isSmallScreen ? '120px' : '100px', 
              borderRadius: '50%',
              marginRight: '50px', 
            }}
          />
        </Box>

        {/* Enlace de navegación */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
          <a href="#about-us" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" sx={{ color: '#ad1457' }}>
              Quiénes somos
            </Typography>
          </a>
          <a href="#catalog" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" sx={{ color: '#ad1457' }}>
              Catálogo
            </Typography>
          </a>
        </Box>

        {/* Icono de carrito */}
        <IconButton
          edge="end"
          aria-label="cart"
          sx={{
            position: 'absolute',
            right: 16,
            color: '#ad1457',
            fontSize: '3rem',
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 'inherit' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
