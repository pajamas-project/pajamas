import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Card } from '@pajamas/core-components'
import { FC } from 'react'

const CardWrapper = styled(Card)(({ theme }) => ({
  background: `linear-gradient(-90deg, ${theme.palette.success.dark}, ${theme.palette.success.light})`,
  color: theme.palette.getContrastText(theme.palette.secondary.dark),
  overflow: 'hidden',
}))

interface DailyBudgetCardProps {
  isLoading?: boolean
  amount: number
}

export const DailyBudgetCard: FC<DailyBudgetCardProps> = ({ amount }) => (
  <CardWrapper
    title={
      <Typography textAlign={'center'} variant={'h5'}>
        Daily
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
