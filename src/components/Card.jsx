import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Estilo para el botón de expandir
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({ nombre, descripcion, imagen }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      maxWidth: 370,
      minHeight: 430,
      backgroundColor: '#d1a7d6',
      color: 'white',
      borderRadius: '8px'
    }}>
      <CardHeader
        title={nombre}
        sx={{ color: '#ad1457' }}
      />
      <CardMedia
        component="img"
        image={imagen}
        alt={nombre}
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{ color: 'white' }}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
