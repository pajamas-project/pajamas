import { gql, useQuery } from '@apollo/client'
import { CircularProgress, Grid } from '@mui/material'
import { useUserId } from '@nhost/nextjs'
import { MainLayout } from '@pajamas/core-components'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { PortfolioTable } from '../../components/portfolio/PortfolioTable'
import { withAuth } from '../../hoc/withAuth'

const GET_USER_ACCOUNTS = gql`
  query GetUserAccounts($userId: uuid!) {
    accounts(where: { userId: { _eq: $userId } }) {
      cost
      id
      income
      share
      title
    }
  }
`

const Portfolio: NextPage = () => {
  const id = useUserId()
  const { data, loading } = useQuery(GET_USER_ACCOUNTS, {
    variables: { userId: id },
    skip: !id,
  })

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} xl={6}>
          {loading ? <CircularProgress /> : <PortfolioTable accounts={data?.accounts || []} />}
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['portfolio'])),
  },
})

export default Portfolio
