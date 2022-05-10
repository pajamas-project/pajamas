import { Avatar, ListItemAvatar, ListItemButton } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { CreditCard, Money, AddCard } from '@mui/icons-material'

export const BankAccountList = () => (
  <Box sx={{ bgcolor: 'background.paper' }}>
    <List>
      <Link href={'/bank-accounts/card'} passHref>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <CreditCard />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Card" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href={'/bank-accounts/cash'} passHref>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <Money />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cash" />
          </ListItemButton>
        </ListItem>
      </Link>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <AddCard />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
)
