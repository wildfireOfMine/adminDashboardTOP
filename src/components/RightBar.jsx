import { Box, Card, Drawer, Grid } from '@mui/material'
import React from 'react'
import "../App.css"
import CustomCard from './CustomCard'
import CustomCardAnnouncement from './CustomCardAnnouncement'
import CustomTrending from './CustomTrending'

const RightBar = () => {
  return (
    <Drawer
            sx={{
            width: '60%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '60%',
                boxSizing: 'border-box',
                left: '20%',
                top: '15%',
                backgroundColor: '#e3e8f1',
            },
            }}
            variant="permanent"
            anchor="right"
        >
        <Box>
            <h2>Your Projects</h2>
            <Grid className="cardGrid" container spacing={2}>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 } }>
                <CustomCard title="Test" description="Infernal cries" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard title="Test" description="Infernal cries" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard title="Test" description="Infernal cries" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard title="Test" description="Infernal cries" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard title="Test" description="Infernal cries" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard title="Test" description="Infernal cries" />
              </Grid>
            </Grid>
        </Box>
        <Drawer
            sx={{
            width: '25%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '20%',
                boxSizing: 'border-box',
                top: '15%',
                left: '80%',
            },
            }}
            variant="permanent"
            anchor="right"
        >
            <h2>Announcements</h2>
            <Grid className="cardGrid" container spacing={1}>
                <Grid className="cardGrid" size={{ xs: 4, md: 9 } }>
                  <CustomCardAnnouncement title="Site Maintenance" description="Infernal cries" 
                  subtitle='Community Share Day' subdescription='Imprisoned' 
                  lastTitle='Updated Privacy Policy' lastDescription='Severed Ways'/>
                </Grid>
            </Grid>
            <h2>Trending</h2>
            <Grid className="cardGrid" container spacing={1}>
                <Grid className="cardGrid" size={{ xs: 9, md: 9 } }>
                <CustomTrending username='@username' description='description'/>
                </Grid>
            </Grid>
          </Drawer>
        
    </Drawer>
  )
}

export default RightBar
