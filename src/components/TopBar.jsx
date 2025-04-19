import { NotificationAdd, Search } from '@mui/icons-material'
import { Button, Drawer, Input } from '@mui/material'
import React from 'react'

const TopBar = ({user="username", avatar="../../public/vite.svg"}) => {
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
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
            },
            }}
            variant="permanent"
            anchor="right"
        >
          <div> 
            <div>
              <Search/>
              <Input/>
            </div>
            <div>
            <NotificationAdd/>
            <img src={avatar} alt="Avatar" style={{
                width: '50px', 
              }} />

              {user}
            </div>
          </div>
          <div>
            <div>
              <img src={avatar} alt="Avatar" style={{
                  width: '50px', 
                }} />
              Hi there, {user}
            </div>
            <div>
              <Button>New</Button>
              <Button>Upload</Button>
              <Button>Share</Button>
            </div>
          </div>
    </Drawer>
  )
}

export default TopBar
