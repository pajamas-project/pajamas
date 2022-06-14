import { Grid, Card } from '@mui/material'
import { MainLayout } from '@pajamas/core-components'
import { useRouter } from 'next/router'
import { GithubLoginButton } from 'react-social-login-buttons'
import { NextPage } from 'next'
import React from 'react'

const SignIn: NextPage = () => {
  const router = useRouter()

  return (
    <MainLayout>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={6}>
          <Card sx={{ padding: 2 }}>
            <GithubLoginButton
              onClick={() => router.push('https://bxcmyzroksvtjxbjhkms.nhost.run/v1/auth/signin/provider/github')}
            />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default SignIn
