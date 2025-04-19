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
                <CustomCard title="Welcome to the Admin Dashboard" description="Make yourself at home!" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard src="https://www.theodinproject.com/lessons/intermediate-html-and-css-admin-dashboard" 
                title="What is this? You may ask" description="It's an Odin Project task!" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard src="https://my-odin-path.vercel.app/" title="Enjoying the view?" description="Here are some other TOP tasks" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard src="https://github.com/wildfireOfMine/adminDashboardTOP" title="Enjoying the code?" description="Done in React MUI and deployed in Vercel!" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard src="https://github.com/wildfireOfMine" title="Interested in the coder?" description="Here it's my GitHub!" />
              </Grid>
              <Grid className="cardGrid" size={{ xs: 9, md: 5 }}>
                <CustomCard title="Don't know what else to write" description="Test" />
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
                <Grid className="cardGrid" size={{ xs: 2, md: 9 } }>
                  <CustomTrending className="customTrending" />
                </Grid>
            </Grid>
          </Drawer>
        
    </Drawer>
  )
}

export default RightBar
