import { AppBar, Toolbar, Typography } from '@mui/material'
import { DefaultTheme, makeStyles } from '@mui/styles'
import React, { FC } from 'react'

const useStyles = makeStyles<DefaultTheme>(() => ({
  header: {
    backgroundColor: '#fff',
    color: 'black',
    padding: 1,
  },
}))

interface LogoSectionProps {
  appName: string
}

export const LogoSection: FC<LogoSectionProps> = ({ appName }) => (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    {appName}
  </Typography>
)

export const Header: FC = () => {
  const styles = useStyles()

  return (
    <AppBar position="sticky" className={styles.header} elevation={0}>
      <Toolbar>
        <LogoSection appName={'APP_NAME'} />
      </Toolbar>
    </AppBar>
  )
}
