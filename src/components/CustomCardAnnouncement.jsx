import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CustomCardAnnouncement = ({title, description, subtitle="", subdescription="", lastTitle="", lastDescription=""}) => {
  return (
    <Card sx={{ width: '100%', fontSize: '0.2em' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', margin: '5px' }}>
            {description}
          </Typography>
          <hr/>
          <Typography gutterBottom variant="h6" component="div">
            {subtitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', margin: '5px' }}>
            {subdescription}
          </Typography>
          <hr/>
          <Typography gutterBottom variant="h6" component="div">
            {lastTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', margin: '5px' }}>
            {lastDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CustomCardAnnouncement
