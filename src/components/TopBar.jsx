import { Drawer } from '@mui/material'
import React from 'react'

const TopBar = () => {
  return (
    <Drawer
            className='topBar'
            sx={{
            width: '80%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '80%',
                height: '15%',
                boxSizing: 'border-box',
                left: '20%',
                top: '0%',
                backgroundColor: '#fefffe',
            },
            }}
            variant="permanent"
            anchor="right"
        >
          <h2>Test</h2>
    </Drawer>
  )
}

export default TopBar
