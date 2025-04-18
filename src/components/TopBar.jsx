import { Drawer } from '@mui/material'
import React from 'react'

const TopBar = () => {
  return (
    <Drawer
            className='topBar'
            sx={{
            width: '75%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '75%',
                height: '15%',
                boxSizing: 'border-box',
                left: '25%',
                top: '0%',
                backgroundColor: 'red',
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
