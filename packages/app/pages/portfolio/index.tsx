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
      id
      title
      income
      share
      cost_aggregate {
        aggregate {
          sum {
            value
          }
        }
      }
    }
  }
`

const Portfolio: NextPage = () => {
  const userId = useUserId()
  const { data: accountData, loading: accountLoading } = useQuery(GET_USER_ACCOUNTS, {
    variables: { userId },
    skip: !userId,
  })

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} xl={6}>
          {accountLoading ? <CircularProgress /> : <PortfolioTable accounts={accountData?.accounts || []} />}
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

export default withAuth(Portfolio)
