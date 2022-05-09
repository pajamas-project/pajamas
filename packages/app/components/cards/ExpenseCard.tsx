import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Card } from '@pajamas/core-components'
import { FC } from 'react'

const CardWrapper = styled(Card)(({ theme }) => ({
  background: `linear-gradient(-90deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
  color: theme.palette.getContrastText(theme.palette.secondary.dark),
  overflow: 'hidden',
}))

interface ExpenseCardProps {
  isLoading?: boolean
  amount: number
}

export const ExpenseCard: FC<ExpenseCardProps> = ({ amount }) => (
  <CardWrapper
    title={
      <Typography textAlign={'center'} variant={'h5'}>
        Expense
      </Typography>
    }
  >
    <Grid container alignItems={'center'}>
      <Grid item alignItems={'center'} xs={12}>
        <Typography textAlign={'center'} variant={'h4'}>
          ₽{amount}
        </Typography>
      </Grid>
    </Grid>
  </CardWrapper>
)
