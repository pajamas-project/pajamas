import { Box, CircularProgress } from '@mui/material'
import { useAuthenticationStatus } from '@nhost/nextjs'
import { useRouter } from 'next/router'
import React from 'react'

export const withAuth = (Component: React.FC) =>
  // eslint-disable-next-line func-names
  function AuthProtected<P>(props: P) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()
    console.log(props)
    console.log({ isLoading })
    console.log({ isAuthenticated })

    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )
    }

    if (!isAuthenticated) {
      router.push('/signin')
      return null
    }

    return <Component {...props} />
  }
