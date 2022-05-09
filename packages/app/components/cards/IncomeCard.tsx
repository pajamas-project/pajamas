import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Card } from '@pajamas/core-components'

import { FC } from 'react'

const CardWrapper = styled(Card)(({ theme }) => ({
  background: `linear-gradient(-90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
  color: '#fff',
  overflow: 'hidden',
}))

interface IncomeCardProps {
  isLoading?: boolean
  amount: number
}

export const IncomeCard: FC<IncomeCardProps> = ({ amount }) => (
  <CardWrapper
    title={
      <Typography textAlign={'center'} variant={'h5'}>
        Income
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
