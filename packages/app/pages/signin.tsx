import { Grid, Paper, Stack } from '@mui/material'
import { useProviderLink } from '@nhost/react'
import { MainLayout } from '@pajamas/core-components'
import Image from 'next/image'
import Link from 'next/link'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { NextPage } from 'next'
import React from 'react'
import pajamas from './../public/pajamas.png'

const SignIn: NextPage = () => {
  const { github, google } = useProviderLink()

  return (
    <MainLayout>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item container xs={12} sm={6} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
          <Grid mt={-20} item xs={12}>
            <Link href={'/'} passHref>
              <Image src={pajamas} alt={'Pajamas'} style={{ cursor: 'pointer' }} />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Stack spacing={2} p={1}>
                <Link href={github} passHref>
                  <GithubLoginButton />
                </Link>
                <Link href={google} passHref>
                  <GoogleLoginButton />
                </Link>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default SignIn
