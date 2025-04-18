import { Chat, DocumentScanner, Home, LockClock, People, PersonOff, QuestionAnswer, Settings, Shield } from '@mui/icons-material'
import { Drawer, Link, List, ListItem } from '@mui/material'
import React from 'react'

const LeftBar = () => {
  return (
    <Drawer
        className='leftBar'
        sx={{
        width: '20%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: '20%',
            boxSizing: 'border-box',
            backgroundColor: '#1992d4',
            color: 'white',
            a: 'white',
            li: 'white',
            h2: 'white',
        },
        }}
        variant="permanent"
        anchor="left"
    >
        <h1>Dashboard</h1>
        <List className='navBarList'>
            <ListItem>
                <h2> <Link> <Home/> Home </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <PersonOff/> Profile </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <Chat/> Messages </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <LockClock/> History </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <DocumentScanner/> Tasks </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <People/> Communities </Link></h2>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <h2> <Link> <Settings/> Settings </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <QuestionAnswer/> Support </Link></h2>
            </ListItem>
            <ListItem>
                <h2> <Link> <Shield/> Privacy </Link></h2>
            </ListItem>
        </List>
    </Drawer>
  )
}

export default LeftBar
