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
import { useTranslation } from 'next-i18next'
import React from 'react'

interface PortfolioTableProps {
  accounts: Array<{
    id: string
    title: string
    income: number
    cost_aggregate: {
      aggregate: {
        sum: {
          value: number
        }
      }
    }
    share: number
  }>
}

export const PortfolioTable = ({ accounts }: PortfolioTableProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation('portfolio')

  return (
    <TableContainer component={Card}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>{t('title')}</TableCell>
            <TableCell>
              <Grid>
                <Grid>{t('cost')}</Grid>
                <Grid>{t('investments')}</Grid>
              </Grid>
            </TableCell>
            <TableCell>{t('income')}</TableCell>
            <TableCell>{t('share')}</TableCell>
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
                      {new Intl.NumberFormat(language, { style: 'currency', currency: 'RUB' }).format(
                        account.cost_aggregate.aggregate.sum.value
                      )}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={'body2'}>
                      {new Intl.NumberFormat(language, { style: 'percent' }).format(0.55)}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>

              <TableCell>
                <Grid container spacing={1} direction={'column'}>
                  <Grid item>
                    <Typography variant={'subtitle2'}>
                      {new Intl.NumberFormat(language, { style: 'currency', currency: 'RUB' }).format(account.income)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={'body2'}>
                      {new Intl.NumberFormat(language, { style: 'currency', currency: 'RUB' }).format(0.55)}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>

              <TableCell>
                <Grid container spacing={1} direction={'column'}>
                  <Grid item>
                    <Typography variant={'subtitle2'}>
                      {new Intl.NumberFormat(language, { style: 'percent' }).format(account.share)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={'body2'}>
                      {new Intl.NumberFormat(language, { style: 'percent' }).format(account.share)}
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
}
