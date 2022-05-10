import { ListSubheader, Stack, Switch } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'

export const AccountInfo = () => (
  <Stack spacing={3}>
    <Box sx={{ bgcolor: 'background.paper' }}>
      <List subheader={<ListSubheader>Account</ListSubheader>}>
        <ListItem divider>
          <ListItemText primary="Type" secondary="General" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Currency" secondary="RUB" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Description" secondary="None" />
        </ListItem>
      </List>
    </Box>

    <Box sx={{ bgcolor: 'background.paper' }}>
      <List subheader={<ListSubheader>Balance</ListSubheader>}>
        <ListItem divider secondaryAction={'0'}>
          <ListItemText primary="Account balance" />
        </ListItem>
        <ListItem divider secondaryAction={'0'}>
          <ListItemText primary="Credit Limit" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Add to the balance sheet" />
          <Switch edge="end" onChange={() => console.log('add')} checked={true} />
        </ListItem>
      </List>
    </Box>
  </Stack>
)
