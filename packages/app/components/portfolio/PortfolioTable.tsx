import { CreditCard } from '@mui/icons-material'
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { pink } from '@mui/material/colors'
import { Card } from '@pajamas/core-components'
import React from 'react'

interface PortfolioTableProps {
  accounts: Array<{
    id: string
    title: string
    income: number
    cost: number
    share: number
  }>
}

export const PortfolioTable = ({ accounts }: PortfolioTableProps) => (
  <TableContainer component={Card}>
    <Table sx={{ minWidth: 650 }} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Название</TableCell>
          <TableCell>
            <Grid>
              <Grid>Стоимость</Grid>
              <Grid>Вложено</Grid>
            </Grid>
          </TableCell>
          <TableCell>Доход</TableCell>
          <TableCell>Доля</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {accounts.map((account) => (
          <TableRow key={account.id}>
            <TableCell component="th" scope="row">
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar sx={{ bgcolor: pink[500] }}>
                    <CreditCard />
                  </Avatar>
                </Grid>
                <Grid item alignSelf={'center'}>
                  <Typography>{account.title}</Typography>
                </Grid>
              </Grid>
            </TableCell>

            <TableCell>
              <Grid container spacing={1} direction={'column'}>
                <Grid item>
                  <Typography variant={'subtitle2'}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RUB' }).format(account.cost)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'body2'}>
                    {new Intl.NumberFormat('en-US', { style: 'percent' }).format(0.55)}
                  </Typography>
                </Grid>
              </Grid>
            </TableCell>

            <TableCell>
              <Grid container spacing={1} direction={'column'}>
                <Grid item>
                  <Typography variant={'subtitle2'}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RUB' }).format(account.income)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'body2'}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RUB' }).format(0.55)}
                  </Typography>
                </Grid>
              </Grid>
            </TableCell>

            <TableCell>
              <Grid container spacing={1} direction={'column'}>
                <Grid item>
                  <Typography variant={'subtitle2'}>
                    {new Intl.NumberFormat('en-US', { style: 'percent' }).format(account.share)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={'body2'}>
                    {new Intl.NumberFormat('en-US', { style: 'percent' }).format(account.share)}
                  </Typography>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
