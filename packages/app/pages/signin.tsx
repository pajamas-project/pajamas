import { Grid, Card, Stack } from '@mui/material'
import { useProviderLink } from '@nhost/react'
import { MainLayout } from '@pajamas/core-components'
import Link from 'next/link'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { NextPage } from 'next'
import React from 'react'

const SignIn: NextPage = () => {
  const { github, google } = useProviderLink()

  return (
    <MainLayout>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item container xs={12} sm={6} alignItems={'center'} justifyContent={'center'}>
          <Stack component={Card} spacing={2} p={1} width={400}>
            <Link href={github} passHref>
              <GithubLoginButton />
            </Link>
            <Link href={google} passHref>
              <GoogleLoginButton />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default SignIn
