import { grey } from '@mui/material/colors'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

// Const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// })

const themeOptions: ThemeOptions = {
  direction: 'ltr',
  palette: {
    primary: {
      light: '#e3f2fd',
      main: '#2196f3',
      dark: '#1e88e5',
      200: '#90caf9',
      800: '#1565c0',
    },
    secondary: {
      light: '#ede7f6',
      main: '#673ab7',
      dark: '#5e35b1',
      200: '#b39ddb',
      800: '#4527a0',
    },
    success: {
      light: '#b9f6ca',
      main: '#00e676',
      dark: '#00c853',
      200: '#69f0ae',
    },
    error: {
      light: '#ef9a9a',
      main: '#f44336',
      dark: '#c62828',
    },
    warning: {
      light: '#fff8e1',
      main: '#ffe57f',
      dark: '#ffc107',
    },
    // Text: {
    //   primary: '#bdc8f0',
    //   secondary: '#8492c4',
    // },
  },
  typography: {
    button: {
      textTransform: 'capitalize',
    },
  },
}

let theme = createTheme()
const custom = createTheme(themeOptions)

theme = createTheme(deepmerge(theme, custom))

export default theme
