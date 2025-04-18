import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CustomTrending = ({src="../../public/vite.svg", username="", description=""}) => {
  return (
    <Card sx={{ width: '100%', display: 'flex' }}>
      <CardActionArea>
        <CardContent>
          <img src={src}/>
          <Typography variant="p" component="p">
            {username}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CustomTrending
