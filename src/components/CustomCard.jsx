import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CustomCard = ({src="", title, description}) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
      <a href={src} target='_blank'> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
        </a>
      </CardActionArea>
    </Card>
  )
}

export default CustomCard
