import { Grid } from '@mui/material'
import { MainLayout } from '@pajamas/core-components'
import { NextPage } from 'next'
import React from 'react'
import { AccountInfo } from '../../components'

const BankAccounts: NextPage = () => (
  <MainLayout>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AccountInfo />
      </Grid>
    </Grid>
  </MainLayout>
)

export default BankAccounts
