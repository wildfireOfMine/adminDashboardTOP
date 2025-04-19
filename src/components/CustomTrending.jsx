import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CustomTrending = ({src="/vite.svg", username="@test", description="description", 
  src2="/vite.svg", username2="@test2", description2="description2", 
  src3="/vite.svg", username3="@test3", description3="description3",
  src4="/vite.svg", username4="@test", description4="description4"}) => {
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
              marginRight: '16px'
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
          <img src={src2} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px'
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username2}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description2}
          </Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={src3} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px'
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username3}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description3}
          </Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={src4} alt="Avatar" style={{
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              marginRight: '16px'
            }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} >
          <Typography variant="p" component="p">
            {username4}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description4}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      
    </Card>
  )
}

export default CustomTrending
