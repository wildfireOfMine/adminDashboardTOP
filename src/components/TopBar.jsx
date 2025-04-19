import { NotificationAdd, Search } from '@mui/icons-material'
import { Button, Drawer, Input } from '@mui/material'
import React from 'react'

const TopBar = ({user="username"}) => {
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
          <div> 
          <Search/>
          <Input/>
          <NotificationAdd/>
          <img src="../../public/vite.svg" alt="Avatar" style={{
              width: '50px', 
            }} />

            {user}
          </div>
          <div>
          <img src="../../public/vite.svg" alt="Avatar" style={{
              width: '50px', 
            }} />
          Hi there, {user}

          <Button>New</Button>
          <Button>Upload</Button>
          <Button>Share</Button>
          </div>
    </Drawer>
  )
}

export default TopBar
