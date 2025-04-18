import { Box, Card, Drawer, Grid } from '@mui/material'
import React from 'react'
import "../App.css"
import CustomCard from './CustomCard'

const RightBar = () => {
  return (
    <Drawer
            sx={{
            width: '55%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '55%',
                boxSizing: 'border-box',
                left: '25%',
                top: '15%',
                /* backgroundColor: '#e3e8f1', */
            },
            }}
            variant="permanent"
            anchor="right"
        >
        <Box>
            <h2>Test</h2>
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
            <h2>Test</h2>
            <Grid className="cardGrid" container spacing={1}>
                <Grid className="cardGrid" size={{ xs: 4, md: 6 } }>
                <CustomCard title="Test" description="Infernal cries" />
                </Grid>
            </Grid>
            <h2>Test</h2>
            <Grid className="cardGrid" container spacing={1}>
                <Grid className="cardGrid" size={{ xs: 4, md: 6 } }>
                <CustomCard title="Test" description="Infernal cries" />
                </Grid>
            </Grid>
          </Drawer>
        
    </Drawer>
  )
}

export default RightBar
