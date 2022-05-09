import { Grid } from '@mui/material'
import { MainLayout } from '@pajamas/core-components'
import { NextPage } from 'next'
import React from 'react'
import { DailyBudgetCard, ExpenseCard, ExpenseTable, IncomeCard } from '../components'

const Home: NextPage = () => (
  <MainLayout>
    <Grid container spacing={3}>
      <Grid item container flexDirection={'row'} justifyContent={'space-evenly'} spacing={3}>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <IncomeCard amount={200000} />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <ExpenseCard amount={50000} />
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <DailyBudgetCard amount={7000} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ExpenseTable />
      </Grid>
    </Grid>
  </MainLayout>
)

export default Home
