import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CustomTrending = ({src="../../public/vite.svg", username="", description=""}) => {
  return (
    <Card sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <CardActionArea>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={src} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px' // Espacio entre la imagen y el texto
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description}
          </Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={src} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px' // Espacio entre la imagen y el texto
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description}
          </Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={src} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px' // Espacio entre la imagen y el texto
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description}
          </Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={src} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px' // Espacio entre la imagen y el texto
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      
    </Card>
  )
}

export default CustomTrending
